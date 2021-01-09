"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entities = void 0;
const assert = require("assert");
const events_1 = require("events");
const assert_exists_1 = require("./assert-exists");
const bitbuffer_1 = require("./ext/bitbuffer");
const consts = require("./consts");
const net = require("./net");
const immutable = require("immutable");
const iter_tools_1 = require("iter-tools");
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
function cloneProps(props) {
    const result = {};
    // tslint:disable-next-line:forin
    for (const tableName in props) {
        const oldTable = props[tableName];
        const newTable = {};
        // tslint:disable-next-line:forin
        for (const prop in oldTable) {
            newTable[prop] = oldTable[prop];
        }
        result[tableName] = newTable;
    }
    return result;
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
         * Map of entity index => networkable instance
         */
        this.entities = new Map();
        this.markedForDeletion = [];
        this.staticBaselines = {};
        this.pendingBaselines = {};
        this.serverClassBits = 0;
        this.tableClassMap = {
            DT_CSPlayer: player_1.Player,
            DT_Team: team_1.Team,
            DT_CSGameRules: gamerules_1.GameRules,
            DT_WeaponCSBase: weapon_1.Weapon,
            DT_BaseEntity: baseentity_1.BaseEntity
        };
        /**
         * Set of which entities were active in the most recent tick.
         */
        this.transmitEntities = null;
        this._entityBaselines = [
            new Map(),
            new Map()
        ];
        this._frames = immutable.Map();
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
        return Array.from(this.findAllWithClass(team_1.Team));
    }
    get players() {
        return Array.from(this.findAllWithClass(player_1.Player));
    }
    get weapons() {
        return Array.from(this.findAllWithClass(weapon_1.Weapon));
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
                    this.entities.delete(index);
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
        const ent = this.entities.get(handle.index);
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
        for (let clientSlot = 0; clientSlot < userInfos.length; ++clientSlot) {
            const userEntry = userInfos[clientSlot];
            if (userEntry.userData && userEntry.userData.userId === userId) {
                // UNSAFE: if we have 'userinfo' for this entity, it's definitely a player
                return this.entities.get(clientSlot + 1);
            }
        }
        return null;
    }
    getSingleton(serverClass) {
        const existing = this._singletonEnts[serverClass];
        if (existing) {
            return existing;
        }
        const result = iter_tools_1.find(([, ent]) => (ent ? ent.serverClass.name === serverClass : false), this.entities);
        if (!result) {
            throw new Error(`Missing singleton ${serverClass}`);
        }
        const [, entity] = result;
        this._singletonEnts[serverClass] = entity;
        return entity;
    }
    *findAllWithTable(table) {
        for (const ent of this.entities.values()) {
            if (table in ent.props) {
                yield ent;
            }
        }
    }
    *findAllWithClass(klass) {
        for (const ent of this.entities.values()) {
            if (ent instanceof klass) {
                yield ent;
            }
        }
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
                this.staticBaselines[classId] = this._parseInstanceBaseline(pendingBaseline, classId);
                this.emit("baselineupdate", {
                    classId,
                    serverClass,
                    baseline: this.staticBaselines[classId]
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
        return flattened.sort(({ collapsible: a }, { collapsible: b }) => (a ? 1 : 0) - (b ? 1 : 0));
    }
    _flattenDataTable(table) {
        const flattenedProps = this._gatherProps(table, this._gatherExcludes(table));
        const prioritySet = new Set(flattenedProps.map(fp => fp.prop.priority));
        prioritySet.add(64);
        const priorities = Array.from(prioritySet).sort((a, b) => a - b);
        let start = 0;
        // On this surface this looks like a sort by priority (or min(64, priority)
        // for CHANGES_OFTEN props). It's not a stable sort so it can't just be
        // replaced with JS Array#sort
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
    _addEntity(index, classId, serialNum, entityBaseline) {
        const baseline = entityBaseline || this.staticBaselines[classId];
        if (!baseline) {
            throw new Error(`no baseline for entity ${index} (class ID ${classId})`);
        }
        // Try to find a suitable class for this entity
        let klass = networkable_1.Networkable;
        for (const tableName in this.tableClassMap) {
            if (baseline[tableName]) {
                klass = this.tableClassMap[tableName];
                break;
            }
        }
        const props = cloneProps(baseline);
        const existingEntity = this.entities.get(index);
        // If we already have this entity, start fresh with baseline props
        if ((existingEntity === null || existingEntity === void 0 ? void 0 : existingEntity.serialNum) === serialNum) {
            existingEntity.props = props;
            return existingEntity;
        }
        // Delete the entity if the serial numbers mismatch
        if (existingEntity) {
            this._removeEntity(index, true);
        }
        const entity = new klass(this._demo, index, classId, serialNum, props);
        this.entities.set(index, entity);
        this.emit("create", { entity });
        return entity;
    }
    _removeEntity(index, immediate) {
        const entity = this.entities.get(index);
        if (!entity) {
            return;
        }
        // It's possible that the entity is already marked for deletion.
        // This is because entities are deleted at the end of the dem_packet,
        // after the game events fire.
        if (!immediate && entity.deleting) {
            return;
        }
        this.emit("beforeremove", { entity, immediate });
        if (immediate) {
            this.entities.delete(index);
            this.emit("remove", { index });
        }
        else {
            entity.deleting = true;
            this.markedForDeletion.push(index);
        }
    }
    _parseEntityUpdate(entityBitBuffer, classId) {
        const serverClass = this.serverClasses[classId];
        const newWay = entityBitBuffer.readOneBit();
        let lastIndex = -1;
        const fieldIndices = [];
        while (true) {
            // eslint-disable-line no-constant-condition
            lastIndex = readFieldIndex(entityBitBuffer, lastIndex, newWay);
            if (lastIndex === -1) {
                break;
            }
            fieldIndices.push(lastIndex);
        }
        const updatedProps = new Array(fieldIndices.length);
        for (let i = 0; i < fieldIndices.length; ++i) {
            const propIndex = fieldIndices[i];
            const flattenedProp = serverClass.flattenedProps[propIndex];
            assert(flattenedProp);
            updatedProps[i] = {
                prop: flattenedProp,
                value: flattenedProp.decode(entityBitBuffer)
            };
        }
        return updatedProps;
    }
    _readNewEntity(entityBitBuffer, entity) {
        const updates = this._parseEntityUpdate(entityBitBuffer, entity.classId);
        const recordChanges = this.listenerCount("change") > 0;
        const changes = recordChanges ? new Array(updates.length) : [];
        for (let i = 0; i < updates.length; ++i) {
            const update = updates[i];
            const tableName = update.prop.table.netTableName;
            const varName = update.prop.prop.varName;
            const table = entity.props[tableName];
            const oldValue = table && varName in table ? table[varName] : undefined;
            entity.updateProp(tableName, varName, update.value);
            if (recordChanges) {
                changes[i] = {
                    tableName,
                    varName,
                    oldValue,
                    newValue: update.value
                };
            }
        }
        if (recordChanges) {
            this.emit("change", {
                entity,
                changes
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
                lastClassId = entityBitBuffer.readUBits(this.serverClassBits) - 1;
                const updates = this._parseEntityUpdate(entityBitBuffer, lastClassId);
                lastProps = this._updatesToPropObject({}, updates);
            }
            else {
                // delta against last temp entity
                assert(lastClassId !== -1, "Delta with no baseline");
                const updates = this._parseEntityUpdate(entityBitBuffer, lastClassId);
                lastProps = this._updatesToPropObject(cloneProps(assert_exists_1.default(lastProps)), updates);
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
        // Take a copy of the transmitted entities from the delta frame
        // Otherwise start with a blank slate
        const baseTransmitEntities = assert_exists_1.default(msg.isDelta
            ? this._frames.get(msg.deltaFrom)
            : immutable.Set(), `delta from unknown frame ${msg.deltaFrom}`);
        if (!msg.isDelta) {
            // Clear out old entities - this is a full update
            for (const entityIndex of Array.from(this.entities.keys())) {
                this._removeEntity(entityIndex, true);
            }
            // Remove all frames - we won't be using them
            this._frames = immutable.Map();
            // Clear all entity baselines
            for (const baseline of this._entityBaselines) {
                baseline.clear();
            }
        }
        const newFrame = baseTransmitEntities.withMutations(mutableFrame => this._readPacketEntities(msg, mutableFrame));
        this._frames = this._frames.set(this._currentServerTick, newFrame);
        this.transmitEntities = newFrame;
        // Delete old frames that we no longer need to reference
        if (msg.isDelta) {
            const oldFrames = iter_tools_1.filter(tick => tick < msg.deltaFrom, this._frames.keys());
            this._frames = this._frames.removeAll(oldFrames);
        }
    }
    _readPacketEntities(msg, frame) {
        const entityBitBuffer = bitbuffer_1.BitStream.from(msg.entityData);
        let entityIndex = -1;
        for (let i = 0; i < msg.updatedEntries; ++i) {
            entityIndex += 1 + entityBitBuffer.readUBitVar();
            assert(entityIndex < consts.MAX_EDICTS, "newEntity >= MAX_EDICTS");
            if (entityBitBuffer.readOneBit()) {
                assert(msg.isDelta, "entity leaving PVS on full update");
                frame.remove(entityIndex);
                if (entityBitBuffer.readOneBit()) {
                    // 0b11: FHDR_LEAVEPVS | FHDR_DELETE
                    this._removeEntity(entityIndex, false);
                }
                else {
                    // 0b10: FHDR_LEAVEPVS
                }
                // tslint:disable-next-line:no-identical-conditions
            }
            else if (entityBitBuffer.readOneBit()) {
                // 0b01: FHDR_ENTERPVS
                frame.add(entityIndex);
                const classId = entityBitBuffer.readUBits(this.serverClassBits);
                const serialNum = entityBitBuffer.readUBits(consts.NUM_NETWORKED_EHANDLE_SERIAL_NUMBER_BITS);
                const existingBaseline = this._entityBaselines[msg.baseline].get(entityIndex);
                const entityBaselineProps = msg.isDelta && (existingBaseline === null || existingBaseline === void 0 ? void 0 : existingBaseline.classId) === classId
                    ? existingBaseline.props
                    : undefined;
                const entity = this._addEntity(entityIndex, classId, serialNum, entityBaselineProps);
                this._readNewEntity(entityBitBuffer, entity);
                this.emit("postcreate", {
                    entity
                });
                // Update the OTHER baseline with the merged result of `old baseline + new props`
                if (msg.updateBaseline) {
                    this._entityBaselines[msg.baseline ? 0 : 1].set(entityIndex, {
                        classId,
                        props: cloneProps(entity.props)
                    });
                }
            }
            else {
                // 0b00: DeltaEnt
                const entity = assert_exists_1.default(this.entities.get(entityIndex), `missing client entity ${entityIndex}`);
                assert(frame.contains(entityIndex), `delta on dormant entity ${entityIndex}`);
                this._readNewEntity(entityBitBuffer, entity);
            }
        }
        // Read deletions
        if (msg.isDelta) {
            entityIndex = -1;
            const deletions = entityBitBuffer.readUBitVar();
            for (let i = 0; i < deletions; ++i) {
                entityIndex += entityBitBuffer.readUBitVar();
                // Entity wasn't dealt with in packet, but has been deleted
                frame.remove(entityIndex);
                this._removeEntity(entityIndex, false);
            }
        }
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
        this.staticBaselines[classId] = baseline;
        this.emit("baselineupdate", {
            classId,
            serverClass: this.serverClasses[classId],
            baseline
        });
    }
}
exports.Entities = Entities;
//# sourceMappingURL=entities.js.map