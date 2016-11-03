'use strict';

var assert = require('assert');
var EventEmitter = require('events');
var _ = require('lodash');
var Parser = require('binary-parser').Parser;
var Long = require('long');
var consts = require('./consts');
var bitBuffer = require('./ext/bitbuffer');

/**
 * Player info structure.
 * @property {Long} xuid - 64-bit Steam ID (e.g. 76561197988627193)
 * @property {string} name - Player name
 * @property {int} userId - Local server user ID, unique while server is running
 * @property {string} guid - Steam2 ID string (e.g. STEAM_0:1:14180732)
 * @property {int} friendsId - Friends identification number
 * @property {string} friendsName - Friends name
 * @property {bool} fakePlayer - true, if player is a bot
 * @property {bool} isHltv - true, if player is the HLTV proxy
 * @property {int[]} customFiles - custom files CRC for this player
 */
var PlayerInfo = new Parser()
  .endianess('big')
  .uint32('unknown_lo')
  .uint32('unknown_hi')
  .uint32('xuid_lo')
  .uint32('xuid_hi')
  .string('name', {length: consts.MAX_PLAYER_NAME_LENGTH, stripNull: true})
  .int32('userId')
  .string('guid', {length: consts.SIGNED_GUID_LEN + 1, stripNull: true})
  .skip(3)
  .uint32('friendsId')
  .string('friendsName', {length: consts.MAX_PLAYER_NAME_LENGTH, stripNull: true})
  .uint8('fakePlayer', {formatter: x => x !== 0})
  .skip(3)
  .uint8('isHltv', {formatter: x => x !== 0})
  .skip(3)
  .array('customFiles', {
    type: 'uint32be',
    length: consts.MAX_CUSTOM_FILES
  });

function parseUserInfoData(buf) {
  var info = PlayerInfo.parse(buf);
  info.xuid = new Long(info.xuid_hi, info.xuid_lo);
  return info;
}

/**
 * @name StringTableEntry
 * @property {string} entry - Entry value
 * @property {*|undefined} userData - User data
 */

/**
 * @name StringTable
 * @property {string} name - Table name
 * @property {StringTableEntry[]} entries - Entries within the table
 */

/**
 * Handles string tables for a demo file.
 */
class StringTables extends EventEmitter {
  constructor() {
    super();

    /**
     * User data handlers. Transform raw buffer into any other value.
     * By default, `userinfo` user data is transformed to {@link PlayerInfo}
     * objects.
     */
    this.userDataCallbacks = {
      userinfo: parseUserInfoData
    };

    /**
     * @type {StringTable[]}
     */
    this.tables = [];
  }

  listen(messageEvents) {
    messageEvents.on('svc_UpdateStringTable', this._handleUpdateStringTable.bind(this));
    messageEvents.on('svc_CreateStringTable', this._handleCreateStringTable.bind(this));
  }

  findTableByName(name) {
    return _.find(this.tables, table => table.name === name);
  }

  _handleStringTables(bitbuf) {
    let numTables = bitbuf.readUInt8();

    for (var i = 0; i < numTables; ++i) {
      let tableName = bitbuf.readCString();
      this._handleStringTable(tableName, bitbuf);
    }
  }

  _handleStringTable(name, bitbuf) {
    let userDataCallback = this.userDataCallbacks[name];

    let table = this.findTableByName(name);
    assert(table != null);

    let numEntries = bitbuf.readUInt16();

    for (let entryIndex = 0; entryIndex < numEntries; ++entryIndex) {
      let entry = bitbuf.readCString();
      let userData = null;

      // has user data?
      if (bitbuf.readOneBit()) {
        let userDataSize = bitbuf.readUInt16();
        let userDataBuf = new Buffer(bitbuf.readBytes(userDataSize));

        userData = userDataCallback === undefined ? userDataBuf : userDataCallback(userDataBuf);
      }

      table.entries[entryIndex] = {entry, userData};

      this.emit('update', {
        table,
        entryIndex,
        entry,
        userData
      });
    }

    // parse client-side entries
    if (bitbuf.readOneBit()) {
      let numStrings = bitbuf.readUInt16();

      for (let i = 0; i < numStrings; ++i) {
        let entry = bitbuf.readCString(); // eslint-disable-line no-unused-vars
        let userData = null; // eslint-disable-line no-unused-vars

        if (bitbuf.readOneBit()) {
          let userDataSize = bitbuf.readUInt16();
          let userDataBuf = new Buffer(bitbuf.readBytes(userDataSize));

          userData = userDataCallback === undefined ? userDataBuf : userDataCallback(userDataBuf);
        }

        // TODO: do something with client-side entries
      }
    }

    // table is ready
    this.emit('postcreate', table);
  }

  /**
   * @event StringTables#update
   * @property {StringTable} table - Updated string table
   * @property {int} entryIndex - Index into the table that was updated
   * @property {string|undefined} entry - New entry value
   * @property {*|undefined} userData - New user data
   */

  _parseStringTableUpdate(bitbuf, table, entries, maxEntries, userDataSize, userDataSizeBits, userDataFixedSize) {
    // overflow silently. this is how the official parser handles overflows...
    bitbuf.view.silentOverflow = true;

    var history = [];

    var entryBits = Math.ceil(Math.log2(maxEntries));

    var userDataCallback = this.userDataCallbacks[table.name];

    assert(!bitbuf.readOneBit(), 'dictionary encoding unsupported');

    _.reduce(_.range(entries), (lastEntry) => {
      var entryIndex = lastEntry + 1;

      if (!bitbuf.readOneBit()) {
        entryIndex = bitbuf.readUBits(entryBits);
      }

      assert(entryIndex >= 0 && entryIndex < maxEntries, 'bogus string index');

      var entry = null;

      // has the entry changed?
      if (bitbuf.readOneBit()) {
        // substring check
        if (bitbuf.readOneBit()) {
          var index = bitbuf.readUBits(5);
          var bytesToCopy = bitbuf.readUBits(consts.SUBSTRING_BITS);

          var subStr = history[index].slice(0, bytesToCopy);
          var suffix = bitbuf.readCString();

          entry = subStr + suffix;
        } else {
          entry = bitbuf.readCString();
        }

        table.entries[entryIndex].entry = entry;
      }

      // read in the user data
      var userDataArray = null;
      var userData = null;

      if (bitbuf.readOneBit()) {
        // don't read the length, it's fixed length and the length was networked down already
        if (userDataFixedSize) {
          assert(userDataSize === Math.ceil(userDataSizeBits / 8), 'invalid user data byte size');
          assert(userDataSizeBits <= 32, 'userdata value too large');

          userDataArray = [bitbuf.readUBits(userDataSizeBits)];
        } else {
          var bytes = bitbuf.readUBits(consts.MAX_USERDATA_BITS);
          userDataArray = bitbuf.readBytes(bytes);
        }

        // create a buffer from the array
        userData = new Buffer(userDataArray);

        if (userDataCallback !== undefined) {
          userData = userDataCallback(userData);
        }

        table.entries[entryIndex].userData = userData;
      }

      // add to history
      if (history.length > 31) {
        history.shift();
      }

      history.push(entry);

      this.emit('update', {
        table,
        entryIndex,
        entry,
        userData
      });

      return entryIndex;
    }, -1);
  }

  /**
   * Fired when a table is created. Entries are empty at this point.
   * @event StringTables#create
   * @type {StringTable}
   */

  /**
   * Fired after a table is created. Entries have been populated by now.
   * @event StringTables#postcreate
   * @type {StringTable}
   */

  _handleCreateStringTable(msg) {
    var bitbuf = new bitBuffer.BitStream(msg.stringData.toSlicedBuffer());

    // table shouldn't already exist
    assert(this.findTableByName(msg.name) === undefined, 'table already exists');

    // create an empty table
    var table = {
      name: msg.name,
      entries: _.map(_.range(msg.maxEntries), function () {
        return {entry: null, userData: null};
      })
    };

    this.emit('create', table);

    this._parseStringTableUpdate(bitbuf, table, msg.numEntries, msg.maxEntries, msg.userDataSize, msg.userDataSizeBits, msg.userDataFixedSize);

    this.tables.push(table);
  }

  _handleUpdateStringTable(msg) {
    var bitbuf = new bitBuffer.BitStream(msg.stringData.toSlicedBuffer());

    var table = this.tables[msg.tableId];
    assert(table !== undefined, 'bad table index');

    this._parseStringTableUpdate(bitbuf, table, msg.numChangedEntries, table.entries.length, 0, 0, false);
  }
}

module.exports = StringTables;
