import * as assert from "assert";
import * as ByteBuffer from "bytebuffer";
import { EventEmitter } from "events";
import * as Long from "long";
import assertExists from "./assert-exists";
import * as consts from "./consts";
import { MAX_PLAYER_NAME_LENGTH, SIGNED_GUID_LEN } from "./consts";
import { DemoFile } from "./demo";
import { BitStream } from "./ext/bitbuffer";
import {
  CSVCMsgCreateStringTable,
  CSVCMsgUpdateStringTable
} from "./protobufs/netmessages";

/**
 * Player info structure.
 * @property {Long} xuid - 64-bit Steam ID (e.g. 76561197988627193)
 * @property {string} name - Player name
 * @property {int} userId - Local server user ID, unique while server is running
 * @property {string} guid - Steam2 ID string (e.g. STEAM_0:1:14180732)
 * @property {int} friendsId - Steam account number
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
  // customFiles: number[];
}

function parseUserInfoData(buf: Buffer): IPlayerInfo {
  const bytebuf = ByteBuffer.wrap(buf, ByteBuffer.BIG_ENDIAN);
  bytebuf.skip(8);

  const hi = bytebuf.readUint32();
  const lo = bytebuf.readUint32();

  const xuid = Long.fromBits(lo, hi);
  const name = bytebuf
    .readString(MAX_PLAYER_NAME_LENGTH, ByteBuffer.METRICS_BYTES)
    .split("\0", 2)[0]!;
  const userId = bytebuf.readUint32();
  const guid = bytebuf
    .readString(SIGNED_GUID_LEN + 1, ByteBuffer.METRICS_BYTES)
    .split("\0", 2)[0]!;
  bytebuf.skip(3);
  const friendsId = bytebuf.readUint32();
  const friendsName = bytebuf
    .readString(MAX_PLAYER_NAME_LENGTH, ByteBuffer.METRICS_BYTES)
    .split("\0", 2)[0]!;
  const fakePlayer = bytebuf.readByte() !== 0;
  bytebuf.skip(3);
  const isHltv = bytebuf.readByte() !== 0;
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
  oldUserData: T | null;
}

export interface IStringTableEntry<T> {
  entry: string;
  userData: T | null;
}

export interface IStringTable<T> {
  name: string;
  entries: Array<IStringTableEntry<T>>;
  userDataSizeBits: number;
  userDataFixedSize: boolean;
  maxEntries: number;
}

export type WellKnownStringTable =
  | "downloadables"
  | "modelprecache"
  | "genericprecache"
  | "soundprecache"
  | "decalprecache"
  | "instancebaseline"
  | "lightstyles"
  | "userinfo"
  | "dynamicmodel"
  | "server_query_info"
  | "ExtraParticleFilesTable"
  | "ParticleEffectNames"
  | "EffectDispatch"
  | "VguiScreen"
  | "Materials"
  | "InfoPanel"
  | "Scenes"
  | "Movies"
  | "GameRulesCreation";

export declare interface StringTables {
  findTableByName(table: "userinfo"): IStringTable<IPlayerInfo> | undefined;
  findTableByName(
    table: WellKnownStringTable
  ): IStringTable<Buffer> | undefined;

  /**
   * Fired when a table is created. Entries are empty at this point.
   */
  on(event: "create", listener: (table: IStringTable<any>) => void): this;
  emit(name: "create", event: IStringTable<any>): boolean;

  /**
   * Fired after a table is created. Entries have been populated by now.
   */
  on(event: "postcreate", listener: (table: IStringTable<any>) => void): this;
  emit(name: "postcreate", event: IStringTable<any>): boolean;

  /**
   * Fired when a string table entry is updated.
   */
  on(
    event: "update",
    listener: (event: IStringTableUpdateEvent<any>) => void
  ): this;
  emit(name: "update", event: IStringTableUpdateEvent<any>): boolean;
}

/**
 * Handles string tables for a demo file.
 */
export class StringTables extends EventEmitter {
  public tables: Array<IStringTable<any>> = [];
  public userDataCallbacks: Record<string, ((buf: Buffer) => any) | undefined>;

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

  public listen(messageEvents: DemoFile): void {
    messageEvents.on(
      "svc_UpdateStringTable",
      this._handleUpdateStringTable.bind(this)
    );
    messageEvents.on(
      "svc_CreateStringTable",
      this._handleCreateStringTable.bind(this)
    );
  }

  public findTableByName(
    name: WellKnownStringTable
  ): IStringTable<any> | undefined {
    return this.tables.find(table => table.name === name);
  }

  public handleStringTables(bitbuf: BitStream): void {
    const numTables = bitbuf.readUInt8();

    for (let i = 0; i < numTables; ++i) {
      const tableName = bitbuf.readCString();
      this._handleStringTable(tableName as WellKnownStringTable, bitbuf);
    }
  }

  private _handleStringTable(name: WellKnownStringTable, bitbuf: BitStream) {
    const userDataCallback = this.userDataCallbacks[name];

    const table = assertExists(this.findTableByName(name));
    const numEntries = bitbuf.readUInt16();

    for (let entryIndex = 0; entryIndex < numEntries; ++entryIndex) {
      const entry = bitbuf.readCString();
      let userData: unknown = null;

      // has user data?
      if (bitbuf.readOneBit()) {
        const userDataSize = bitbuf.readUInt16();
        const userDataBuf = bitbuf.readBytes(userDataSize);

        userData =
          userDataCallback === undefined
            ? userDataBuf
            : userDataCallback(userDataBuf);
      }

      const oldUserData: unknown = table.entries[entryIndex]?.userData;
      table.entries[entryIndex] = { entry, userData };

      this.emit("update", {
        table,
        entryIndex,
        entry,
        userData,
        oldUserData
      });
    }

    // parse client-side entries
    if (bitbuf.readOneBit()) {
      const numStrings = bitbuf.readUInt16();

      for (let i = 0; i < numStrings; ++i) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const entry = bitbuf.readCString();
        let userData: unknown = null;

        if (bitbuf.readOneBit()) {
          const userDataSize = bitbuf.readUInt16();
          const userDataBuf = bitbuf.readBytes(userDataSize);

          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          userData =
            userDataCallback === undefined
              ? userDataBuf
              : userDataCallback(userDataBuf);
        }

        // TODO: do something with client-side entries
      }
    }

    // table is ready
    this.emit("postcreate", table);
  }

  private _parseStringTableUpdate(
    bitbuf: BitStream,
    table: IStringTable<any>,
    entries: number
  ) {
    const history: Array<string | null> = [];

    const entryBits = Math.ceil(Math.log2(table.maxEntries));

    const userDataCallback = this.userDataCallbacks[table.name];

    assert(!bitbuf.readOneBit(), "dictionary encoding unsupported");

    let entryIndex = -1;
    for (let i = 0; i < entries; ++i) {
      entryIndex += 1;

      if (!bitbuf.readOneBit()) {
        entryIndex = bitbuf.readUBits(entryBits);
      }

      assert(
        entryIndex >= 0 && entryIndex < table.maxEntries,
        "bogus string index"
      );

      const existingEntry = table.entries[entryIndex];
      let entry = null;

      // has the entry changed?
      if (bitbuf.readOneBit()) {
        // substring check
        if (bitbuf.readOneBit()) {
          const index = bitbuf.readUBits(5);
          const bytesToCopy = bitbuf.readUBits(consts.SUBSTRING_BITS);

          const last = history[index];
          if (last == null) {
            throw new Error(
              "string table entry is delta from non existent entry"
            );
          }

          const subStr = last.slice(0, bytesToCopy);
          const suffix = bitbuf.readCString();

          entry = subStr + suffix;
        } else {
          entry = bitbuf.readCString();
        }
      } else {
        // If the string itself hasn't changed, this entry must already exist
        entry = assertExists(existingEntry).entry;
      }

      // read in the user data
      let userData: unknown = null;

      if (bitbuf.readOneBit()) {
        // don't read the length, it's fixed length and the length was networked down already
        if (table.userDataFixedSize) {
          const userDataArray = [bitbuf.readUBits(table.userDataSizeBits)];
          userData = Buffer.from(userDataArray);
        } else {
          const bytes = bitbuf.readUBits(consts.MAX_USERDATA_BITS);
          userData = bitbuf.readBytes(bytes);
        }

        if (userDataCallback !== undefined) {
          userData = userDataCallback(userData as Buffer);
        }
      } else {
        userData = existingEntry?.userData;
      }

      const oldUserData: unknown = existingEntry?.userData;
      table.entries[entryIndex] = { entry, userData };

      // add to history
      if (history.length > 31) {
        history.shift();
      }

      history.push(entry);

      this.emit("update", {
        table,
        entryIndex,
        entry,
        userData,
        oldUserData
      });
    }
  }

  private _handleCreateStringTable(msg: CSVCMsgCreateStringTable) {
    const bitbuf = BitStream.from(msg.stringData);

    // table shouldn't already exist
    assert(
      this.findTableByName(msg.name as WellKnownStringTable) === undefined,
      "table already exists"
    );

    assert(
      msg.userDataSize === Math.ceil(msg.userDataSizeBits / 8),
      "invalid user data byte size"
    );
    assert(msg.userDataSizeBits <= 32, "userdata value too large");

    // create an empty table
    const table: IStringTable<any> = {
      name: msg.name,
      entries: [],
      userDataSizeBits: msg.userDataSizeBits,
      userDataFixedSize: msg.userDataFixedSize,
      maxEntries: msg.maxEntries
    };

    this.emit("create", table);

    this._parseStringTableUpdate(bitbuf, table, msg.numEntries);

    this.tables.push(table);
  }

  private _handleUpdateStringTable(msg: CSVCMsgUpdateStringTable) {
    const bitbuf = BitStream.from(msg.stringData);

    const table = assertExists(this.tables[msg.tableId], "bad table index");
    this._parseStringTableUpdate(bitbuf, table, msg.numChangedEntries);
  }
}
