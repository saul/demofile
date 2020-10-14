"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entities = void 0;
const assert = require("assert");
const events_1 = require("events");
const _ = require("lodash");
const assert_exists_1 = require("./assert-exists");
const bitbuffer_1 = require("./ext/bitbuffer");
const consts = require("./consts");
const functional = require("./functional");
const net = require("./net");
const baseentity_1 = require("./entities/baseentity");
const gamerules_1 = require("./entities/gamerules");
const networkable_1 = require("./entities/networkable");
const player_1 = require("./entities/player");
const team_1 = require("./entities/team");
const weapon_1 = require("./entities/weapon");
const props_1 = require("./props");
function isPropExcluded(excludes, table, prop) {
    return excludes.find(excluded => table.netTableName === excluded.dtName &&
        prop.varName === excluded.varName);
}
function readFieldIndex(entityBitBuffer, lastIndex, newWay) {
    if (newWay && entityBitBuffer.readOneBit()) {
        return lastIndex + 1;
    }
    let ret = 0;
    if (newWay && entityBitBuffer.readOneBit()) {
        ret = entityBitBuffer.readUBits(3);
    }
    else {
        ret = entityBitBuffer.readUBits(7);
        switch (ret & (32 | 64)) {
            case 32:
                ret = (ret & ~96) | (entityBitBuffer.readUBits(2) << 5);
                assert(ret >= 32);
                break;
            case 64:
                ret = (ret & ~96) | (entityBitBuffer.readUBits(4) << 5);
                assert(ret >= 128);
                break;
            case 96:
                ret = (ret & ~96) | (entityBitBuffer.readUBits(7) << 5);
                assert(ret >= 512);
                break;
        }
    }
    if (ret === 0xfff) {
        // end marker is 4095 for CS:GO
        return -1;
    }
    return lastIndex + 1 + ret;
}
/**
 * Represents entities and networked properties within a demo.
 */
class Entities extends events_1.EventEmitter {
    constructor() {
        super(...arguments);
        this.dataTables = [];
        this.serverClasses = [];
        /**
         * Array of all entities in game.
         */
        this.entities = new Array(1 << consts.MAX_EDICT_BITS).fill(null);
        this.markedForDeletion = [];
        this.instanceBaselines = {};
        this.pendingBaselines = {};
        this.serverClassBits = 0;
        this.tableClassMap = {
            DT_CSPlayer: player_1.Player,
            DT_Team: team_1.Team,
            DT_CSGameRules: gamerules_1.GameRules,
            DT_WeaponCSBase: weapon_1.Weapon,
            DT_BaseEntity: baseentity_1.BaseEntity
        };
        this._demo = null;
        this._singletonEnts = {};
        this._currentServerTick = -1;
    }
    get playerResource() {
        return this._demo.entities.getSingleton("CCSPlayerResource");
    }
    get gameRules() {
        return this.getSingleton("CCSGameRulesProxy");
    }
    get teams() {
        return this.findAllWithClass(team_1.Team);
    }
    get players() {
        return this.findAllWithClass(player_1.Player);
    }
    get weapons() {
        return this.findAllWithClass(weapon_1.Weapon);
    }
    listen(demo) {
        this._demo = demo;
        demo.on("svc_PacketEntities", e => this._handlePacketEntities(e));
        demo.on("svc_TempEntities", e => this._handleTempEntities(e));
        demo.on("net_Tick", e => {
            this._currentServerTick = e.tick;
        });
        demo.stringTables.on("update", e => this._handleStringTableUpdate(e));
        demo.on("tickend", () => {
            if (this.markedForDeletion.length > 0) {
                for (const index of this.markedForDeletion) {
                    this.entities[index] = null;
                    this.emit("remove", { index });
                }
                this.markedForDeletion.length = 0;
            }
        });
    }
    /**
     * Determines whether handle is set.
     * This function does not determine whether the handle points to a valid entity.
     * @param {number} handle - Networked entity handle value
     * @returns {boolean} true if handle is set
     */
    isHandleSet(handle) {
        return handle !== consts.INVALID_NETWORKED_EHANDLE_VALUE;
    }
    /**
     * Returns the entity specified by a particular handle.
     * @param {number} handle - Networked entity handle value
     * @returns {Entity|null} Entity referenced by the handle. `null` if no matching entity.
     */
    getByHandle(handle) {
        if (!handle.isValid) {
            return null;
        }
        const ent = this.entities[handle.index];
        if (ent == null || ent.serialNum !== handle.serialNum) {
            return null;
        }
        return ent;
    }
    /**
     * Returns the entity specified by a user ID.
     * @param {number} userId - Player user ID
     * @returns {Player|null} Entity referenced by the user ID. `null` if no matching player.
     */
    getByUserId(userId) {
        const userInfoTable = this._demo.stringTables.findTableByName("userinfo");
        if (!userInfoTable) {
            return null;
        }
        const userInfos = userInfoTable.entries;
        for (let i = 0; i < userInfos.length; ++i) {
            const userEntry = userInfos[i];
            if (userEntry.userData && userEntry.userData.userId === userId) {
                // UNSAFE: if we have 'userinfo' for this entity, it's definitely a player
                return this.entities[i + 1];
            }
        }
        return null;
    }
    getSingleton(serverClass) {
        const existing = this._singletonEnts[serverClass];
        if (existing) {
            return existing;
        }
        const entity = this.entities.find(ent => ent ? ent.serverClass.name === serverClass : false);
        if (!entity) {
            throw new Error(`Missing singleton ${serverClass}`);
        }
        this._singletonEnts[serverClass] = entity;
        return entity;
    }
    findAllWithTable(table) {
        return this.entities.filter((ent) => ent != null ? table in ent.props : false);
    }
    findAllWithClass(klass) {
        return this.entities.filter(ent => ent ? ent instanceof klass : false);
    }
    handleDataTables(chunk) {
        while (true) {
            // eslint-disable-line no-constant-condition
            const descriptor = net.findByType(chunk.readVarint32());
            assert(descriptor.name === "svc_SendTable", "expected SendTable message");
            const length = chunk.readVarint32();
            const msg = descriptor.class.decode(new Uint8Array(chunk.readBytes(length).toBuffer()));
            if (msg.isEnd) {
                break;
            }
            this.dataTables.push(msg);
        }
        const serverClasses = chunk.readShort();
        this.serverClassBits = Math.ceil(Math.log2(serverClasses));
        for (let i = 0; i < serverClasses; ++i) {
            const classId = chunk.readShort();
            assert(classId === i, "server class entry for invalid class ID");
            const name = chunk.readCString();
            const dtName = chunk.readCString();
            const dataTable = assert_exists_1.default(this._findTableByName(dtName), "no data table for server class");
            const serverClass = {
                name,
                dtName,
                dataTable,
                flattenedProps: this._flattenDataTable(dataTable)
            };
            this.serverClasses.push(serverClass);
            // parse any pending baseline
            const pendingBaseline = this.pendingBaselines[classId];
            if (pendingBaseline) {
                this.instanceBaselines[classId] = this._parseInstanceBaseline(pendingBaseline, classId);
                this.emit("baselineupdate", {
                    classId,
                    serverClass,
                    baseline: this.instanceBaselines[classId]
                });
                delete this.pendingBaselines[classId];
            }
        }
        assert.equal(chunk.remaining(), 0);
        this.emit("datatablesready");
    }
    _gatherExcludes(table) {
        const excludes = [];
        for (const prop of table.props) {
            if ((prop.flags & props_1.SPROP_EXCLUDE) !== 0) {
                excludes.push(prop);
            }
            if (prop.type === 6 /* DataTable */) {
                const subTable = assert_exists_1.default(this._findTableByName(prop.dtName));
                excludes.push.apply(excludes, this._gatherExcludes(subTable));
            }
        }
        return excludes;
    }
    _gatherProps(table, excludes) {
        const flattened = [];
        for (let index = 0; index < table.props.length; ++index) {
            const prop = table.props[index];
            if ((prop.flags & props_1.SPROP_INSIDEARRAY) !== 0 ||
                (prop.flags & props_1.SPROP_EXCLUDE) !== 0 ||
                isPropExcluded(excludes, table, prop)) {
                continue;
            }
            if (prop.type === 6 /* DataTable */) {
                const subTable = assert_exists_1.default(this._findTableByName(prop.dtName));
                const childProps = this._gatherProps(subTable, excludes);
                if ((prop.flags & props_1.SPROP_COLLAPSIBLE) === 0) {
                    for (const fp of childProps) {
                        fp.collapsible = false;
                    }
                }
                flattened.push.apply(flattened, childProps);
            }
            else {
                flattened.push({
                    prop,
                    table,
                    decode: props_1.makeDecoder(prop, prop.type === 5 /* Array */ ? table.props[index - 1] : undefined),
                    collapsible: true
                });
            }
        }
        // collapsible props should come after non-collapsible
        return _.sortBy(flattened, fp => (fp.collapsible === false ? 0 : 1));
    }
    _flattenDataTable(table) {
        const flattenedProps = this._gatherProps(table, this._gatherExcludes(table)).slice();
        const prioritySet = new Set(flattenedProps.map(fp => fp.prop.priority));
        prioritySet.add(64);
        const priorities = _.sortBy(Array.from(prioritySet));
        let start = 0;
        // sort flattenedProps by priority
        for (const priority of priorities) {
            while (true) {
                // eslint-disable-line no-constant-condition
                let currentProp;
                for (currentProp = start; currentProp < flattenedProps.length; ++currentProp) {
                    const prop = flattenedProps[currentProp].prop;
                    if (prop.priority === priority ||
                        (priority === 64 && (prop.flags & props_1.SPROP_CHANGES_OFTEN) !== 0)) {
                        if (start !== currentProp) {
                            const temp = flattenedProps[start];
                            flattenedProps[start] = flattenedProps[currentProp];
                            flattenedProps[currentProp] = temp;
                        }
                        start++;
                        break;
                    }
                }
                if (currentProp === flattenedProps.length) {
                    break;
                }
            }
        }
        return flattenedProps;
    }
    _findTableByName(name) {
        return this.dataTables.find(table => table.netTableName === name);
    }
    _addEntity(index, classId, serialNum) {
        if (this.entities[index]) {
            this._removeEntity(index, true);
        }
        const baseline = this.instanceBaselines[classId];
        let klass = networkable_1.Networkable;
        // Try to find a suitable class for this entity
        if (baseline !== undefined) {
            for (const tableName in this.tableClassMap) {
                if (baseline[tableName]) {
                    klass = this.tableClassMap[tableName];
                    break;
                }
            }
        }
        const entity = new klass(this._demo, index, classId, serialNum, _.cloneDeep(baseline));
        this.entities[index] = entity;
        this.emit("create", { entity });
        return entity;
    }
    _removeEntity(index, immediate) {
        const entity = assert_exists_1.default(this.entities[index], "cannot remove non-existent entity");
        this.emit("beforeremove", { entity, immediate });
        if (immediate) {
            this.entities[index] = null;
            this.emit("remove", { index });
        }
        else {
            assert(!entity.deleting, "cannot delete an entity already marked for deletion");
            entity.deleting = true;
            this.markedForDeletion.push(index);
        }
    }
    _parseEntityUpdate(entityBitBuffer, classId) {
        const serverClass = this.serverClasses[classId];
        const newWay = entityBitBuffer.readOneBit();
        const fieldIndices = functional.fillUntil(-1, lastIndex => readFieldIndex(entityBitBuffer, lastIndex, newWay), -1);
        const updatedProps = [];
        for (const index of fieldIndices) {
            const flattenedProp = serverClass.flattenedProps[index];
            assert(flattenedProp);
            updatedProps.push({
                prop: flattenedProp,
                value: flattenedProp.decode(entityBitBuffer)
            });
        }
        return updatedProps;
    }
    _readNewEntity(entityBitBuffer, entity) {
        const updates = this._parseEntityUpdate(entityBitBuffer, entity.classId);
        for (const update of updates) {
            const tableName = update.prop.table.netTableName;
            const varName = update.prop.prop.varName;
            const table = entity.props[tableName];
            const oldValue = table && varName in table ? table[varName] : undefined;
            entity.updateProp(tableName, varName, update.value);
            this.emit("change", {
                entity,
                tableName,
                varName,
                oldValue,
                newValue: update.value
            });
        }
    }
    _updatesToPropObject(target, updates) {
        for (const update of updates) {
            const tableName = update.prop.table.netTableName;
            const varName = update.prop.prop.varName;
            target[tableName] = Object.assign(target[tableName] || {}, {
                [varName]: update.value
            });
        }
        return target;
    }
    _handleTempEntities(msg) {
        const entityBitBuffer = bitbuffer_1.BitStream.from(msg.entityData);
        let lastClassId = -1;
        let lastProps = null;
        for (let i = 0; i < msg.numEntries; ++i) {
            let fireDelay = 0.0;
            if (entityBitBuffer.readOneBit()) {
                fireDelay = entityBitBuffer.readSBits(8) / 100.0;
            }
            if (entityBitBuffer.readOneBit()) {
                // TODO: figure out why this is the server class - 1
                lastClassId = entityBitBuffer.readUBits(this.serverClassBits) - 1;
                const updates = this._parseEntityUpdate(entityBitBuffer, lastClassId);
                lastProps = this._updatesToPropObject({}, updates);
            }
            else {
                // delta against last temp entity
                assert(lastClassId !== -1, "Delta with no baseline");
                const updates = this._parseEntityUpdate(entityBitBuffer, lastClassId);
                lastProps = this._updatesToPropObject(_.cloneDeep(assert_exists_1.default(lastProps)), updates);
            }
            this.emit("tempent", {
                delay: fireDelay,
                classId: lastClassId,
                serverClass: this.serverClasses[lastClassId],
                props: lastProps
            });
        }
    }
    _handlePacketEntities(msg) {
        const entityBitBuffer = bitbuffer_1.BitStream.from(msg.entityData);
        let entityIndex = -1;
        // https://github.com/VSES/SourceEngine2007/blob/43a5c90a5ada1e69ca044595383be67f40b33c61/se2007/engine/cl_ents_parse.cpp#L297-L431
        // https://github.com/VSES/SourceEngine2007/blob/43a5c90a5ada1e69ca044595383be67f40b33c61/se2007/engine/cl_ents_parse.cpp#L544-L648
        // https://github.com/VSES/SourceEngine2007/blob/43a5c90a5ada1e69ca044595383be67f40b33c61/se2007/engine/baseclientstate.cpp#L1245-L1312
        for (let i = 0; i < msg.updatedEntries; ++i) {
            entityIndex += 1 + entityBitBuffer.readUBitVar();
            assert(entityIndex < this.entities.length, "newEntity >= MAX_EDICTS");
            if (entityBitBuffer.readOneBit()) {
                if (entityBitBuffer.readOneBit()) {
                    assert(msg.isDelta, "deleting entity on full update");
                    this._removeEntity(entityIndex, false);
                }
                else {
                    assert(msg.isDelta, "entity leaving PVS on full update");
                    // Maybe set a flag on the entity indicating that it is out of PVS?
                }
                // tslint:disable-next-line:no-identical-conditions
            }
            else if (entityBitBuffer.readOneBit()) {
                const classId = entityBitBuffer.readUBits(this.serverClassBits);
                const serialNum = entityBitBuffer.readUBits(consts.NUM_NETWORKED_EHANDLE_SERIAL_NUMBER_BITS);
                const newEnt = this._addEntity(entityIndex, classId, serialNum);
                this._readNewEntity(entityBitBuffer, newEnt);
                this.emit("postcreate", {
                    entity: newEnt
                });
            }
            else {
                const entity = assert_exists_1.default(this.entities[entityIndex], "delta on deleted entity");
                this._readNewEntity(entityBitBuffer, entity);
            }
        }
        // TODO: Delete old frames that we no longer need to reference
    }
    _parseInstanceBaseline(baselineBuf, classId) {
        const classBaseline = {};
        for (const bl of this._parseEntityUpdate(baselineBuf, classId)) {
            const tableName = bl.prop.table.netTableName;
            const varName = bl.prop.prop.varName;
            const table = classBaseline[tableName];
            if (table === undefined) {
                classBaseline[tableName] = { [varName]: bl.value };
            }
            else {
                table[varName] = bl.value;
            }
        }
        return classBaseline;
    }
    _handleStringTableUpdate(event) {
        if (event.table.name !== "instancebaseline" || !event.userData) {
            return;
        }
        const classId = parseInt(event.entry, 10);
        const baselineBuf = bitbuffer_1.BitStream.from(event.userData);
        if (!this.serverClasses[classId]) {
            this.pendingBaselines[classId] = baselineBuf;
            return;
        }
        const baseline = this._parseInstanceBaseline(baselineBuf, classId);
        this.instanceBaselines[classId] = baseline;
        this.emit("baselineupdate", {
            classId,
            serverClass: this.serverClasses[classId],
            baseline
        });
    }
}
exports.Entities = Entities;
//# sourceMappingURL=entities.js.map