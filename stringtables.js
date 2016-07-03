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

/**
 * Player info structure.
 * @property {Long} xuid - Network XUID
 * @property {string} name - Player name
 * @property {int} userId - Local server user ID, unique while server is running
 * @property {string} guid - Global unique player identifier (Steam2 ID)
 * @property {int} friendsId - Friends identification number
 * @property {string} friendsName - Friends name
 * @property {bool} fakePlayer - true, if player is a bot controlled by game.dll
 * @property {bool} isHltv - true, if player is the HLTV proxy
 * @property {int[]} customFiles - custom files CRC for this player
 */
var PlayerInfo = StructType({
  unknown: ref.types.uint64,
  xuid_lo: ref.types.uint32,
  xuid_hi: ref.types.uint32,
  name: extraTypes.charArray(consts.MAX_PLAYER_NAME_LENGTH),
  userId: ref.types.int32,
  guid: extraTypes.charArray(consts.SIGNED_GUID_LEN + 1),
  friendsId: ref.types.uint32,
  friendsName: extraTypes.charArray(consts.MAX_PLAYER_NAME_LENGTH),
  fakePlayer: ref.types.bool,
  isHltv: ref.types.bool,
  customFiles: refArray(ref.types.uint32, consts.MAX_CUSTOM_FILES)
  //filesDownloaded: ref.types.uchar // this counter increases each time the server downloaded a new file
});

function parseUserInfoData(buf) {
  var info = PlayerInfo.get(buf).toObject();
  info.xuid = endian.swapu64(info.xuid_lo, info.xuid_hi);
  info.userId = endian.swap32(info.userId);
  info.friendsId = endian.swap32(info.friendsId);
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

  _handleStringTable(name, bitbuf) {
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
