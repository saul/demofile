'use strict';

var _ = require('lodash');
var assert = require('assert');
var EventEmitter = require('events');

var net = require('./net');

class Entities extends EventEmitter {
  constructor() {
    super();

    this.dataTables = [];
    this.serverClasses = [];
  }

  listen(messageEvents) {

  }

  findTableByName(name) {
    return _.find(this.dataTables, _.matchesProperty('netTableName', name));
  }

  handleDataTables(chunk) {
    var sendTable = net.findByName('svc_SendTable');

    for (; ;) {
      var type = chunk.readVarint32();
      assert.equal(type, sendTable.type, 'expected SendTable message');

      var msg = sendTable.class.decode(chunk.readVBytes());
      if (msg.isEnd) {
        break;
      }

      assert.equal(this.dataTables[msg.nClassID], undefined, 'table multiply defined');
      this.dataTables.push(msg);
    }

    var serverClasses = chunk.readShort();
    this.serverClassBits = Math.ceil(Math.log2(serverClasses));

    for (var i = 0; i < serverClasses; ++i) {
      var classId = chunk.readShort();
      assert(classId === i, 'server class entry for invalid class ID');

      var name = chunk.readCString();
      var dtName = chunk.readCString();

      var entry = {
        'id': classId,
        'name': name,
        'dtName': dtName,
        'dataTable': this.findTableByName(dtName)
      };

      assert(entry.dataTable, 'could not find table for server class');

      this.serverClasses.push(entry);
    }

    // TODO: flatten data tables

    assert.equal(chunk.remaining(), 0);
  }
}

module.exports = Entities;
