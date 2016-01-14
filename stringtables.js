'use strict';

var assert = require('assert');
var EventEmitter = require('events');
var _ = require('lodash');
var ref = require('ref');
var StructType = require('ref-struct');
var refArray = require('ref-array');
var consts = require('./consts');
var extraTypes = require('./extratypes');
var bitBuffer = require('./ext/bitbuffer');
var endian = require('./endian');

var PlayerInfo = StructType({
  version: ref.types.uint64, // version for future compatibility
  xuid: ref.types.uint64, // network xuid
  name: extraTypes.charArray(consts.MAX_PLAYER_NAME_LENGTH), // scoreboard information
  userId: ref.types.int32, // local server user ID, unique while server is running
  guid: extraTypes.charArray(consts.SIGNED_GUID_LEN + 1), // global unique player identifier
  friendsId: ref.types.uint32, // friends identification number
  friendsName: extraTypes.charArray(consts.MAX_PLAYER_NAME_LENGTH), // friends name
  fakePlayer: ref.types.bool, // true, if player is a bot controlled by game.dll
  isHltv: ref.types.bool, // true if player is the HLTV proxy
  customFiles: refArray(ref.types.uint32, consts.MAX_CUSTOM_FILES), // custom files CRC for this player
  //filesDownloaded: ref.types.uchar // this counter increases each time the server downloaded a new file
});

class StringTables extends EventEmitter {
  constructor() {
    super();

    this.userDataCallbacks = {
      userinfo: this.parseUserInfoData
    };

    this.tables = [];
  }

  listen(messageEvents) {
    messageEvents.on('svc_UpdateStringTable', this.handleUpdateStringTable.bind(this));
    messageEvents.on('svc_CreateStringTable', this.handleCreateStringTable.bind(this));
  }

  parseUserInfoData(buf) {
    var info = PlayerInfo.get(buf).toObject();
    //info.version = endian.swap64(info.version);
    //info.xuid = endian.swap64(info.xuid);
    info.userId = endian.swap32(info.userId);
    info.friendsId = endian.swap32(info.friendsId);
    return info;
  }

  findTableByName(name) {
    return _.find(this.tables, table => table.name === name);
  }

  handleStringTable(name, bitbuf) {
    var userDataCallback = this.userDataCallbacks[name];

    var entries = _.map(_.range(bitbuf.readUInt16()), function () {
      var entry = bitbuf.readCString();
      var userData = null;

      // has user data?
      if (bitbuf.readOneBit()) {
        var userDataSize = bitbuf.readUInt16();
        var userDataBuf = new Buffer(bitbuf.readBytes(userDataSize));

        userData = userDataCallback === undefined ? userDataBuf : userDataCallback(userDataBuf);
      }

      return {
        entry,
        userData
      };
    });

    // TODO: client-side stuff
    assert(bitbuf.readOneBit() === 0);

    return {
      name,
      entries
    };
  }

  handleStringTables(chunk) {
    // the StringTables demo command doesn't tell us the 'max entries' for a specific table
    // making it impossible to process UpdateStringTable messages.
    return;

    // reset string tables
    this.tables = [];

    var bitbuf = new bitBuffer.BitStream(chunk.toSlicedBuffer());

    var numTables = bitbuf.readInt8();

    for (var i = 0; i < numTables; ++i) {
      var tableName = bitbuf.readCString();

      assert(this.findTableByName(tableName) === undefined, 'string table multiply defined');
      this.tables.push(this.handleStringTable(tableName, bitbuf));
    }
  }

  parseStringTableUpdate(bitbuf, table, entries, maxEntries, userDataSize, userDataSizeBits, userDataFixedSize) {
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

  handleCreateStringTable(msg) {
    var bitbuf = new bitBuffer.BitStream(msg.stringData.toSlicedBuffer());

    // table shouldn't already exist
    assert(this.findTableByName(msg.name) === undefined, 'table already exists');

    // create an empty table
    var table = {
      name: msg.name,
      entries: _.fill(Array(msg.maxEntries), {entry: null, userData: null})
    };

    this.emit('create', table);

    this.parseStringTableUpdate(bitbuf, table, msg.numEntries, msg.maxEntries, msg.userDataSize, msg.userDataSizeBits, msg.userDataFixedSize);

    this.tables.push(table);
  }

  handleUpdateStringTable(msg) {
    var bitbuf = new bitBuffer.BitStream(msg.stringData.toSlicedBuffer());

    var table = this.tables[msg.tableId];
    assert(table !== undefined, 'bad table index');

    this.parseStringTableUpdate(bitbuf, table, msg.numChangedEntries, table.entries.length, 0, 0, false);
  }
}

module.exports = StringTables;
