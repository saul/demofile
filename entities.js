'use strict';

var _ = require('lodash');
var assert = require('assert');
var EventEmitter = require('events');

var bitBuffer = require('./ext/bitbuffer');

var net = require('./net');
var consts = require('./consts');
var functional = require('./functional');
var props = require('./props');

const MAX_EDICT_BITS = 11;
const NETWORKED_EHANDLE_ENT_ENTRY_MASK = (1 << MAX_EDICT_BITS) - 1;
const NUM_NETWORKED_EHANDLE_SERIAL_NUMBER_BITS = 10;
const NUM_NETWORKED_EHANDLE_BITS = MAX_EDICT_BITS + NUM_NETWORKED_EHANDLE_SERIAL_NUMBER_BITS;
const INVALID_NETWORKED_EHANDLE_VALUE = (1 << NUM_NETWORKED_EHANDLE_BITS) - 1;

/**
 * Represents an in-game entity.
 */
class Entity {
  constructor(index, classId, serialNum, baseline) {
    /**
     * Entity index.
     * @type {int}
     */
    this.index = index;

    /**
     * Server class ID.
     * @type {int}
     */
    this.classId = classId;

    /**
     * Serial number.
     * @type {int}
     */
    this.serialNum = serialNum;

    this.props = baseline || {};
  }

  /**
   * Retrieves the value of a networked property
   * @param {string} tableName - Table name (e.g., DT_BaseEntity)
   * @param {string} varName - Network variable name (e.g., m_vecOrigin)
   * @returns {*} Property value, `undefined` if non-existent
   * @public
   */
  getProp(tableName, varName) {
    var value = this.props[tableName] && this.props[tableName][varName];

    if (value === undefined && this.baseline) {
      return this.baseline[tableName] && this.baseline[tableName][varName];
    } else {
      return value;
    }
  }

  updateProp(tableName, varName, newValue) {
    if (this.props[tableName] === undefined) {
      this.props[tableName] = {[varName]: newValue};
    } else {
      this.props[tableName][varName] = newValue;
    }
  }
}

function isPropExcluded(excludes, table, prop) {
  return _.find(excludes, excluded => table.netTableName === excluded.dtName && prop.varName === excluded.varName);
}

function readFieldIndex(entityBitBuffer, lastIndex, newWay) {
  if (newWay && entityBitBuffer.readOneBit()) {
    return lastIndex + 1;
  }

  var ret = 0;

  if (newWay && entityBitBuffer.readOneBit()) {
    ret = entityBitBuffer.readUBits(3);
  } else {
    ret = entityBitBuffer.readUBits(7);

    switch (ret & ( 32 | 64 )) {
      case 32:
        ret = ( ret & ~96 ) | ( entityBitBuffer.readUBits(2) << 5 );
        assert(ret >= 32);
        break;
      case 64:
        ret = ( ret & ~96 ) | ( entityBitBuffer.readUBits(4) << 5 );
        assert(ret >= 128);
        break;
      case 96:
        ret = ( ret & ~96 ) | ( entityBitBuffer.readUBits(7) << 5 );
        assert(ret >= 512);
        break;
    }
  }

  if (ret === 0xFFF) { // end marker is 4095 for CS:GO
    return -1;
  }

  return lastIndex + 1 + ret;
}

/**
 * Represents entities and networked properties within a demo.
 */
class Entities extends EventEmitter {
  constructor() {
    super();

    this.dataTables = [];
    this.serverClasses = [];
    this.instanceBaselines = {};
    this.pendingBaselines = {};

    /**
     * Array of all entities in game.
     * @type {Entity[]}
     */
    this.entities = _.fill(new Array(1 << consts.MAX_EDICT_BITS), null);
  }

  listen(demo) {
    demo.on('svc_PacketEntities', this._handlePacketEntities.bind(this));
    demo.stringTables.on('update', this._handleStringTableUpdate.bind(this));
  }

  /**
   * Determines whether handle is set.
   * This function does not determine whether the handle points to a valid entity.
   * @param {number} handle - Networked entity handle value
   * @returns {boolean} true if handle is set
   */
  isHandleSet(handle) {
    return handle !== INVALID_NETWORKED_EHANDLE_VALUE;
  }

  /**
   * Returns the entity specified by a particular handle.
   * @param {number} handle - Networked entity handle value
   * @returns {Entity|null} Entity referenced by the handle. `null` if no matching entity.
   */
  getByHandle(handle) {
    if (handle === INVALID_NETWORKED_EHANDLE_VALUE) {
      return null;
    }

    let ent = this.entities[handle & NETWORKED_EHANDLE_ENT_ENTRY_MASK];
    if (ent == null || ent.serialNum !== (handle >> MAX_EDICT_BITS)) {
      return null;
    }

    return ent;
  }

  _gatherExcludes(table) {
    var excludes = [];

    for (var index = 0; index < table.props.length; ++index) {
      var prop = table.props[index];

      if ((prop.flags & props.SPROP_EXCLUDE) !== 0) {
        excludes.push(prop);
      }

      if (prop.type === props.DPT_DataTable) {
        var subTable = this._findTableByName(prop.dtName);
        assert(subTable);

        excludes.push.apply(excludes, this._gatherExcludes(subTable));
      }
    }

    return excludes;
  }

  _gatherProps(table, excludes) {
    var flattened = [];

    for (var index = 0; index < table.props.length; ++index) {
      var prop = table.props[index];

      if ((prop.flags & props.SPROP_INSIDEARRAY) !== 0 || (prop.flags & props.SPROP_EXCLUDE) !== 0 || isPropExcluded(excludes, table, prop)) {
        continue;
      }

      if (prop.type === props.DPT_DataTable) {
        var subTable = this._findTableByName(prop.dtName);
        assert(subTable);

        var childProps = this._gatherProps(subTable, excludes);

        if ((prop.flags & props.SPROP_COLLAPSIBLE) === 0) {
          _.forEach(childProps, fp => {
            fp.collapsible = false;
          });
        }

        flattened.push.apply(flattened, childProps);
      } else if (prop.type === props.DPT_Array) {
        flattened.push({
          prop,
          arrayElementProp: table.props[index - 1],
          table
        });
      } else {
        flattened.push({prop, table});
      }
    }

    // collapsible props should come after non-collapsible
    return _.sortBy(flattened, fp => fp.collapsible === false ? 0 : 1);
  }

  _flattenDataTable(table) {
    var flattenedProps = this._gatherProps(table, this._gatherExcludes(table));

    var prioritySet = new Set(_.map(flattenedProps, fp => fp.prop.priority));

    prioritySet.add(64);

    var priorities = _.sortBy(Array.from(prioritySet));

    var start = 0;

    // sort flattenedProps by priority
    for (var priority of priorities) {
      while (true) { // eslint-disable-line no-constant-condition
        let currentProp;

        for (currentProp = start; currentProp < flattenedProps.length; ++currentProp) {
          let prop = flattenedProps[currentProp].prop;

          if (prop.priority === priority || (priority === 64 && (prop.flags & props.SPROP_CHANGES_OFTEN) !== 0)) {
            if (start !== currentProp) {
              let temp = flattenedProps[start];
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
    return _.find(this.dataTables, _.matchesProperty('netTableName', name));
  }

  /**
   * Fired after data tables have been parsed.
   * {@link Entities#serverClasses} can now be used.
   * @event Entities#datatablesready
   */

  /**
   * Fired when an instance baseline is updated.
   * @event Entities#baselineupdate
   * @type {Object}
   * @property {int} classId - Server class ID
   * @property {Object} serverClass - Server class
   * @property {Object} baseline - Baseline properties
   */

  _handleDataTables(chunk) {
    var sendTable = net.findByName('svc_SendTable');

    while (true) { // eslint-disable-line no-constant-condition
      var type = chunk.readVarint32();
      assert.equal(type, sendTable.type, 'expected SendTable message');

      var msg = sendTable.class.decode(chunk.readVBytes());
      if (msg.isEnd) {
        break;
      }

      this.dataTables.push(msg);
    }

    var serverClasses = chunk.readShort();

    this.serverClassBits = Math.ceil(Math.log2(serverClasses));

    for (var i = 0; i < serverClasses; ++i) {
      var classId = chunk.readShort();
      assert(classId === i, 'server class entry for invalid class ID');

      var name = chunk.readCString();

      var dtName = chunk.readCString();
      var dataTable = this._findTableByName(dtName);
      assert(dataTable, 'no data table for server class');

      var serverClass = {
        name,
        dtName,
        dataTable,
        flattenedProps: this._flattenDataTable(dataTable)
      };

      this.serverClasses.push(serverClass);

      // parse any pending baseline
      var pendingBaseline = this.pendingBaselines[classId];
      if (pendingBaseline) {
        this.instanceBaselines[classId] = this._parseInstanceBaseline(pendingBaseline, classId);
        this.emit('baselineupdate', {classId, serverClass, baseline: this.instanceBaselines[classId]});
        delete this.pendingBaselines[classId];
      }
    }

    assert.equal(chunk.remaining(), 0);

    this.emit('datatablesready');
  }

  /**
   * Fired when an entity is created.
   * Note no entity properties are available yet.
   * Use {@link Entities#postcreate} if you need access to properties.
   * @event Entities#create
   * @type {Object}
   * @property {Entity} entity - Created entity
   */

  /**
   * Fired after an entity has been created.
   * All properties are now available for inspection.
   * @event Entities#postcreate
   * @type {Object}
   * @property {Entity} entity - Created entity
   */

  _addEntity(index, classId, serialNum) {
    if (this.entities[index]) {
      this._removeEntity(index);
    }

    var entity = new Entity(index, classId, serialNum, _.cloneDeep(this.instanceBaselines[classId]));
    this.entities[index] = entity;

    this.emit('create', {entity});

    return entity;
  }

  /**
   * Fired before an entity is deleted.
   * @event Entities#beforeremove
   * @type {Object}
   * @property {Entity} entity - Entity to be deleted
   */

  /**
   * Fired when an entity is removed.
   * @event Entities#remove
   * @type {Object}
   * @property {int} index - Index of removed entity
   */

  _removeEntity(index) {
    assert(this.entities[index] !== undefined, 'cannot remove non-existent entity');

    this.emit('beforeremove', {entity: this.entities[index]});

    this.entities[index] = undefined;

    this.emit('remove', {index});
  }

  /**
   * Fired when an entity property is changed.
   * @event Entities#change
   * @type {Object}
   * @property {Entity} entity - Updated entity
   * @property {string} tableName - Table containing updated property
   * @property {string} varName - Network variable name
   * @property {*|undefined} oldValue - Old variable value
   * @property {*} newValue - New value of the property
   */

  _parseEntityUpdate(entityBitBuffer, classId) {
    var serverClass = this.serverClasses[classId];

    var newWay = entityBitBuffer.readOneBit() === 1;
    var fieldIndices = functional.fillUntil(-1, lastIndex => readFieldIndex(entityBitBuffer, lastIndex, newWay), -1);

    var updatedProps = [];

    for (var index of fieldIndices) {
      var flattenedProp = serverClass.flattenedProps[index];
      assert(flattenedProp);

      var decoder = new props.PropDecoder(entityBitBuffer, flattenedProp);
      updatedProps.push({prop: flattenedProp, value: decoder.decode()});
    }

    return updatedProps;
  }

  _readNewEntity(entityBitBuffer, entity) {
    var updates = this._parseEntityUpdate(entityBitBuffer, entity.classId);

    for (var update of updates) {
      var tableName = update.prop.table.netTableName;
      var varName = update.prop.prop.varName;

      var oldValue = entity.getProp(tableName, varName);

      entity.updateProp(tableName, varName, update.value);

      this.emit('change', {
        entity,
        tableName,
        varName,
        oldValue,
        newValue: update.value
      });
    }
  }

  _handlePacketEntities(msg) {
    var entityBitBuffer = new bitBuffer.BitStream(msg.entityData.toSlicedBuffer());

    var entityIndex = -1;

    for (var i = 0; i < msg.updatedEntries; ++i) {
      entityIndex += 1 + entityBitBuffer.readUBitVar();

      assert(entityIndex < this.entities.length, 'newEntity >= MAX_EDICTS');

      if (entityBitBuffer.readOneBit()) {
        if (entityBitBuffer.readOneBit()) {
          assert(msg.isDelta, 'deleting entity on full update');
          this._removeEntity(entityIndex);
        } else {
          assert(msg.isDelta, 'entity leaving PVS on full update');
          // Maybe set a flag on the entity indicating that it is out of PVS?
        }
      } else if (entityBitBuffer.readOneBit()) {
        var classId = entityBitBuffer.readUBits(this.serverClassBits);
        var serialNum = entityBitBuffer.readUBits(consts.NUM_NETWORKED_EHANDLE_SERIAL_NUMBER_BITS);

        let newEnt = this._addEntity(entityIndex, classId, serialNum);
        this._readNewEntity(entityBitBuffer, newEnt);
        this.emit('postcreate', {entity: newEnt});
      } else {
        let entity = this.entities[entityIndex];
        assert(entity, 'delta on deleted entity');
        this._readNewEntity(entityBitBuffer, entity);
      }
    }
  }

  _parseInstanceBaseline(baselineBuf, classId) {
    var classBaseline = {};

    for (var bl of this._parseEntityUpdate(baselineBuf, classId)) {
      var tableName = bl.prop.table.netTableName;
      var varName = bl.prop.prop.varName;

      if (classBaseline[tableName] === undefined) {
        classBaseline[tableName] = {[varName]: bl.value};
      } else {
        classBaseline[tableName][varName] = bl.value;
      }
    }

    return classBaseline;
  }

  _handleStringTableUpdate(event) {
    if (event.table.name !== 'instancebaseline' || !event.userData) {
      return;
    }

    var classId = parseInt(event.entry, 10);
    var baselineBuf = new bitBuffer.BitStream(event.userData);

    if (!this.serverClasses[classId]) {
      this.pendingBaselines[classId] = baselineBuf;
      return;
    }

    this.instanceBaselines[classId] = this._parseInstanceBaseline(baselineBuf, classId);
    this.emit('baselineupdate', {
      classId,
      serverClass: this.serverClasses[classId],
      baseline: this.instanceBaselines[classId]
    });
  }
}

module.exports = Entities;
