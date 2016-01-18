'use strict';

var _ = require('lodash');
var assert = require('assert');
var EventEmitter = require('events');

var bitBuffer = require('./ext/bitbuffer');

var net = require('./net');
var consts = require('./consts');
var functional = require('./functional');
var props = require('./props');

var EntityDelta = {
  update: 0,
  enter: 1,
  leave: 2,
  delete: 3
};

/**
 * Represents an in-game entity.
 */
class Entity {
  constructor(index, classId, serialNum) {
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

    this.props = {};
  }

  /**
   * Retrieves the value of a networked property
   * @param {string} tableName - Table name (e.g., DT_BaseEntity)
   * @param {string} varName - Network variable name (e.g., m_vecOrigin)
   * @returns {*} Property value, `undefined` if non-existent
   * @public
   */
  getProp(tableName, varName) {
    if (this.props[tableName] === undefined) {
      return undefined;
    } else {
      return this.props[tableName][varName];
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

    /**
     * Array of all entities in game.
     * @type {Entity[]}
     */
    this.entities = _.fill(new Array(1 << consts.MAX_EDICT_BITS), null);
  }

  listen(messageEvents) {
    messageEvents.on('svc_PacketEntities', this._handlePacketEntities.bind(this));
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
    }

    assert.equal(chunk.remaining(), 0);
  }

  /**
   * Fired when an entity is created.
   * @event Entities#create
   * @type {Object}
   * @property {Entity} entity - Created entity
   */

  _addEntity(index, classId, serialNum) {
    if (this.entities[index]) {
      this._removeEntity(index);
    }

    var entity = new Entity(index, classId, serialNum);
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

  _readNewEntity(entityBitBuffer, entity) {
    var newWay = entityBitBuffer.readOneBit() === 1;

    var serverClass = this.serverClasses[entity.classId];

    var fieldIndices = functional.fillUntil(-1, lastIndex => readFieldIndex(entityBitBuffer, lastIndex, newWay), -1);

    for (var index of fieldIndices) {
      var flattenedProp = serverClass.flattenedProps[index];
      assert(flattenedProp);

      var decoder = new props.PropDecoder(entityBitBuffer, flattenedProp, entity, index);

      var tableName = flattenedProp.table.netTableName;
      var varName = flattenedProp.prop.varName;

      var oldValue = entity.getProp(tableName, varName);
      var newValue = decoder.decode();

      entity.updateProp(tableName, varName, newValue);

      this.emit('change', {
        entity,
        tableName,
        varName,
        oldValue,
        newValue
      });
    }
  }

  _handlePacketEntities(msg) {
    var entityBitBuffer = new bitBuffer.BitStream(msg.entityData.toSlicedBuffer());

    var entityIndex = -1;

    for (var i = 0; i < msg.updatedEntries; ++i) {
      entityIndex += 1 + entityBitBuffer.readUBitVar();

      assert(entityIndex < this.entities.length, 'newEntity >= MAX_EDICTS');

      var updateType = EntityDelta.update;

      if (entityBitBuffer.readOneBit()) {
        updateType = EntityDelta.leave;

        if (entityBitBuffer.readOneBit()) {
          updateType = EntityDelta.delete;
        }
      } else if (entityBitBuffer.readOneBit()) {
        updateType = EntityDelta.enter;
      }

      switch (updateType) {
        case EntityDelta.enter:
          var classId = entityBitBuffer.readUBits(this.serverClassBits);
          var serialNum = entityBitBuffer.readUBits(consts.NUM_NETWORKED_EHANDLE_SERIAL_NUMBER_BITS);

          this._readNewEntity(entityBitBuffer, this._addEntity(entityIndex, classId, serialNum));

          break;

        case EntityDelta.delete:
          assert(msg.isDelta, 'deleting entity on full update');

          this._removeEntity(entityIndex);

          break;

        case EntityDelta.update:
          var entity = this.entities[entityIndex];
          assert(entity, 'delta on deleted entity');

          this._readNewEntity(entityBitBuffer, entity);

          break;

        case EntityDelta.leave:
          assert(msg.isDelta, 'entity leaving PVS on full update');
          // Maybe set a flag on the entity indicating that it is out of PVS?
          break;
      }
    }
  }
}

module.exports = Entities;
