import * as assert from 'assert';
import { EventEmitter } from 'events';
import * as _ from 'lodash';
import * as Long from 'long';
import * as consts from './consts';
import { BitStream } from './ext/bitbuffer';
import { ICSVCMsg_UpdateStringTable, ICSVCMsg_CreateStringTable } from './protobufs/cstrike15_usermessages';
import { DemoFile } from './demo';
import * as ByteBuffer from 'bytebuffer';
import assertExists from 'ts-assert-exists';

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

export interface IPlayerInfo {
  xuid: Long;
  name: string;
  userId: number;
  guid: string;
  friendsId: number;
  friendsName: string;
  fakePlayer: boolean;
  isHltv: boolean;
  //customFiles: number[];
}

function parseUserInfoData(buf: Buffer): IPlayerInfo {
  var bytebuf = ByteBuffer.wrap(buf, ByteBuffer.BIG_ENDIAN);
  bytebuf.skip(8);

  var xuid = new Long(bytebuf.readUint32(), bytebuf.readUint32());
  var name = bytebuf.readString(consts.MAX_PLAYER_NAME_LENGTH);
  var userId = bytebuf.readUint32();
  var guid = bytebuf.readString(consts.SIGNED_GUID_LEN + 1);
  bytebuf.skip(3);
  var friendsId = bytebuf.readUint32();
  var friendsName = bytebuf.readString(consts.MAX_PLAYER_NAME_LENGTH);
  var fakePlayer = bytebuf.readByte() !== 0;
  bytebuf.skip(3);
  var isHltv = bytebuf.readByte() !== 0;
  bytebuf.skip(3);

  return {
    xuid,
    name,
    userId,
    guid,
    friendsId,
    friendsName,
    fakePlayer,
    isHltv
  };
}

export interface IStringTableUpdateEvent<T> {
  table: IStringTable<T>;
  entryIndex: number;
  entry: string;
  userData: T | null;
}

export interface IStringTableEntry<T> {
  entry: string | null;
  userData: T | null;
}

export interface IStringTable<T> {
  name: string;
  entries: IStringTableEntry<T>[];
  userDataSizeBits: number;
  userDataFixedSize: boolean;
}

export type WellKnownStringTable =
  'downloadables' |
  'modelprecache' |
  'genericprecache' |
  'soundprecache' |
  'decalprecache' |
  'instancebaseline' |
  'lightstyles' |
  'userinfo' |
  'dynamicmodel' |
  'server_query_info' |
  'ExtraParticleFilesTable' |
  'ParticleEffectNames' |
  'EffectDispatch' |
  'VguiScreen' |
  'Materials' |
  'InfoPanel' |
  'Scenes' |
  'Movies' |
  'GameRulesCreation';

export declare interface StringTables {
  findTableByName(table: 'userinfo'): IStringTable<IPlayerInfo> | undefined;
  findTableByName(table: WellKnownStringTable): IStringTable<Buffer> | undefined;

  on(event: 'create', listener: (table: IStringTable<any>) => void): this;
  on(event: 'postcreate', listener: (table: IStringTable<any>) => void): this;
  on(event: 'update', listener: (event: IStringTableUpdateEvent<any>) => void): this;
}

/**
 * Handles string tables for a demo file.
 */
export class StringTables extends EventEmitter {
  tables: IStringTable<any>[] = [];
  userDataCallbacks: { [table: string]: (buf: Buffer) => any };

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
  }

  listen(messageEvents: DemoFile) {
    messageEvents.on('svc_UpdateStringTable', this._handleUpdateStringTable.bind(this));
    messageEvents.on('svc_CreateStringTable', this._handleCreateStringTable.bind(this));
  }

  findTableByName(name: WellKnownStringTable): IStringTable<any> | undefined {
    return this.tables.find(table => table.name === name);
  }

  _handleStringTables(bitbuf: BitStream) {
    let numTables = bitbuf.readUInt8();

    for (var i = 0; i < numTables; ++i) {
      let tableName = bitbuf.readCString();
      this._handleStringTable(tableName as WellKnownStringTable, bitbuf);
    }
  }

  _handleStringTable(name: WellKnownStringTable, bitbuf: BitStream) {
    let userDataCallback = this.userDataCallbacks[name];

    let table = assertExists(this.findTableByName(name));
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

      table.entries[entryIndex] = { entry, userData };

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

  _parseStringTableUpdate(bitbuf: BitStream, table: IStringTable<any>, entries: number, maxEntries: number) {
    // overflow silently. this is how the official parser handles overflows...
    bitbuf.view.silentOverflow = true;

    var history: (string | null)[] = [];

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

          var last = history[index];
          if (last == null)
            throw 'string table entry is delta from non existent entry';

          var subStr = last.slice(0, bytesToCopy);
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
        if (table.userDataFixedSize) {
          userDataArray = [bitbuf.readUBits(table.userDataSizeBits)];
          userData = new Buffer(userDataArray);
        } else {
          var bytes = bitbuf.readUBits(consts.MAX_USERDATA_BITS);
          userDataArray = bitbuf.readBytes(bytes);
          userData = new Buffer(userDataArray);
        }

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

  _handleCreateStringTable(msg: RequiredNonNullable<ICSVCMsg_CreateStringTable>) {
    var bitbuf = new BitStream(msg.stringData.buffer as ArrayBuffer);

    // table shouldn't already exist
    assert(this.findTableByName(msg.name as WellKnownStringTable) === undefined, 'table already exists');

    assert(msg.userDataSize === Math.ceil(msg.userDataSizeBits / 8), 'invalid user data byte size');
    assert(msg.userDataSizeBits <= 32, 'userdata value too large');

    // create an empty table
    var table: IStringTable<any> = {
      name: msg.name,
      entries: new Array(msg.maxEntries).fill(0).map(() => {
        return { entry: null, userData: null };
      }),
      userDataSizeBits: msg.userDataSizeBits,
      userDataFixedSize: msg.userDataFixedSize
    };

    this.emit('create', table);

    this._parseStringTableUpdate(bitbuf, table, msg.numEntries, msg.maxEntries);

    this.tables.push(table);
  }

  _handleUpdateStringTable(msg: RequiredNonNullable<ICSVCMsg_UpdateStringTable>) {
    var bitbuf = new BitStream(msg.stringData.buffer as ArrayBuffer);

    var table = this.tables[msg.tableId];
    assert(table !== undefined, 'bad table index');

    this._parseStringTableUpdate(bitbuf, table, msg.numChangedEntries, table.entries.length);
  }
}
