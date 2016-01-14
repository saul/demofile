'use strict';

var _ = require('lodash');
var assert = require('assert');
var EventEmitter = require('events');

var bitBuffer = require('./ext/bitbuffer');

var net = require('./net');
var consts = require('./consts');
var functional = require('./functional');
var props = require('./props');

const ENTER_PVS = 0;
const LEAVE_PVS = 1;
const DELTA_ENT = 2;
const PRESERVE_ENT = 3;
const FINISHED = 4;

const ENTITY_SENTINEL = 9999;

// Flags for delta encoding header
const FHDR_ZERO = 0x0000;
const FHDR_LEAVEPVS = 0x0001;
const FHDR_DELETE = 0x0002;
const FHDR_ENTERPVS = 0x0004;

class Entity {
  constructor(index, classId, serialNum) {
    this.index = index;
    this.classId = classId;
    this.serialNum = serialNum;

    this.props = {};
  }

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

class Entities extends EventEmitter {
  constructor() {
    super();

    this.dataTables = [];
    this.serverClasses = [];
    this.entities = _.fill(new Array(1 << consts.MAX_EDICT_BITS), null);
  }

  listen(messageEvents) {
    messageEvents.on('svc_PacketEntities', this.handlePacketEntities.bind(this));
  }

  gatherExcludes(table) {
    var excludes = [];

    for (var index = 0; index < table.props.length; ++index) {
      var prop = table.props[index];

      if ((prop.flags & props.SPROP_EXCLUDE) !== 0) {
        excludes.push(prop);
      }

      if (prop.type === props.DPT_DataTable) {
        var subTable = this.findTableByName(prop.dtName);
        assert(subTable);

        excludes.push.apply(excludes, this.gatherExcludes(subTable));
      }
    }

    return excludes;
  }

  gatherProps(table, excludes) {
    var flattened = [];

    for (var index = 0; index < table.props.length; ++index) {
      var prop = table.props[index];

      if ((prop.flags & props.SPROP_INSIDEARRAY) !== 0 || (prop.flags & props.SPROP_EXCLUDE) !== 0 || isPropExcluded(excludes, table, prop)) {
        continue;
      }

      if (prop.type === props.DPT_DataTable) {
        var subTable = this.findTableByName(prop.dtName);
        assert(subTable);

        var childProps = this.gatherProps(subTable, excludes);

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

  flattenDataTable(table) {
    var flattenedProps = this.gatherProps(table, this.gatherExcludes(table));

    var prioritySet = new Set(_.map(flattenedProps, fp => fp.prop.priority));

    prioritySet.add(64);

    var priorities = _.sortBy(Array.from(prioritySet));

    var start = 0;

    // sort flattenedProps by priority
    for (var priority of priorities) {
      while (true) {
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

  findTableByName(name) {
    return _.find(this.dataTables, _.matchesProperty('netTableName', name));
  }

  handleDataTables(chunk) {
    var sendTable = net.findByName('svc_SendTable');

    while (true) {
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
      var dataTable = this.findTableByName(dtName);
      assert(dataTable, 'no data table for server class');

      var serverClass = {
        name,
        dtName,
        dataTable,
        flattenedProps: this.flattenDataTable(dataTable)
      };

      this.serverClasses.push(serverClass);
    }

    assert.equal(chunk.remaining(), 0);
  }

  addEntity(index, classId, serialNum) {
    if (this.entities[index]) {
      this.removeEntity(index);
    }

    var entity = new Entity(index, classId, serialNum);
    this.entities[index] = entity;

    this.emit('create', {entity});

    return entity;
  }

  removeEntity(index) {
    assert(this.entities[index] !== undefined, 'cannot remove non-existent entity');

    this.emit('beforeremove', {entity: this.entities[index]});

    this.entities[index] = undefined;

    this.emit('remove', {index});
  }

  readNewEntity(entityBitBuffer, entity) {
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

  handlePacketEntities(msg) {
    var entityBitBuffer = new bitBuffer.BitStream(msg.entityData.toSlicedBuffer());

    var headerCount = msg.updatedEntries;
    var headerBase = -1;

    var updateType = PRESERVE_ENT;

    while (updateType < FINISHED) {
      headerCount--;

      var newEntity = null;
      var updateFlags = FHDR_ZERO;
      var isEntity = headerCount >= 0;

      if (isEntity) {
        newEntity = headerBase + 1 + entityBitBuffer.readUBitVar();
        headerBase = newEntity;

        if (entityBitBuffer.readOneBit()) {
          updateFlags |= FHDR_LEAVEPVS;

          if (entityBitBuffer.readOneBit()) {
            updateFlags |= FHDR_DELETE;
          }
        } else if (entityBitBuffer.readOneBit()) {
          updateFlags |= FHDR_ENTERPVS;
        }
      }

      for (updateType = PRESERVE_ENT; updateType === PRESERVE_ENT;) {
        if (!isEntity || newEntity > ENTITY_SENTINEL) {
          updateType = FINISHED;
          break;
        }

        assert(newEntity < this.entities.length, 'newEntity >= MAX_EDICTS');

        if ((updateFlags & FHDR_ENTERPVS) !== 0) {
          updateType = ENTER_PVS;
        } else if ((updateFlags & FHDR_LEAVEPVS) !== 0) {
          updateType = LEAVE_PVS;
        } else {
          updateType = DELTA_ENT;
        }

        switch (updateType) {
          case ENTER_PVS:
            var classId = entityBitBuffer.readUBits(this.serverClassBits);
            var serialNum = entityBitBuffer.readUBits(consts.NUM_NETWORKED_EHANDLE_SERIAL_NUMBER_BITS);

            this.readNewEntity(entityBitBuffer, this.addEntity(newEntity, classId, serialNum));

            break;

          case LEAVE_PVS:
            assert(msg.isDelta, 'entity leaving PVS on full update');

            this.removeEntity(newEntity);

            break;

          case DELTA_ENT:
            var entity = this.entities[newEntity];
            assert(entity, 'delta on deleted entity');

            this.readNewEntity(entityBitBuffer, entity);

            break;

          case PRESERVE_ENT:
            assert(msg.isDelta, 'preserve entity on full update');
            break;
        }
      }
    }
  }
}

module.exports = Entities;
