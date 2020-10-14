"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringTables = void 0;
const assert = require("assert");
const ByteBuffer = require("bytebuffer");
const events_1 = require("events");
const _ = require("lodash");
const Long = require("long");
const assert_exists_1 = require("./assert-exists");
const consts = require("./consts");
const consts_1 = require("./consts");
const bitbuffer_1 = require("./ext/bitbuffer");
function parseUserInfoData(buf) {
    const bytebuf = ByteBuffer.wrap(buf, ByteBuffer.BIG_ENDIAN);
    bytebuf.skip(8);
    const hi = bytebuf.readUint32();
    const lo = bytebuf.readUint32();
    const xuid = Long.fromBits(lo, hi);
    const name = bytebuf
        .readString(consts_1.MAX_PLAYER_NAME_LENGTH, ByteBuffer.METRICS_BYTES)
        .split("\0", 2)[0];
    const userId = bytebuf.readUint32();
    const guid = bytebuf
        .readString(consts_1.SIGNED_GUID_LEN + 1, ByteBuffer.METRICS_BYTES)
        .split("\0", 2)[0];
    bytebuf.skip(3);
    const friendsId = bytebuf.readUint32();
    const friendsName = bytebuf
        .readString(consts_1.MAX_PLAYER_NAME_LENGTH, ByteBuffer.METRICS_BYTES)
        .split("\0", 2)[0];
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
/**
 * Handles string tables for a demo file.
 */
class StringTables extends events_1.EventEmitter {
    constructor() {
        super();
        this.tables = [];
        /**
         * User data handlers. Transform raw buffer into any other value.
         * By default, `userinfo` user data is transformed to {@link PlayerInfo}
         * objects.
         */
        this.userDataCallbacks = {
            userinfo: parseUserInfoData
        };
    }
    listen(messageEvents) {
        messageEvents.on("svc_UpdateStringTable", this._handleUpdateStringTable.bind(this));
        messageEvents.on("svc_CreateStringTable", this._handleCreateStringTable.bind(this));
    }
    findTableByName(name) {
        return this.tables.find(table => table.name === name);
    }
    handleStringTables(bitbuf) {
        const numTables = bitbuf.readUInt8();
        for (let i = 0; i < numTables; ++i) {
            const tableName = bitbuf.readCString();
            this._handleStringTable(tableName, bitbuf);
        }
    }
    _handleStringTable(name, bitbuf) {
        const userDataCallback = this.userDataCallbacks[name];
        const table = assert_exists_1.default(this.findTableByName(name));
        const numEntries = bitbuf.readUInt16();
        for (let entryIndex = 0; entryIndex < numEntries; ++entryIndex) {
            const entry = bitbuf.readCString();
            let userData = null;
            // has user data?
            if (bitbuf.readOneBit()) {
                const userDataSize = bitbuf.readUInt16();
                const userDataBuf = bitbuf.readBytes(userDataSize);
                userData =
                    userDataCallback === undefined
                        ? userDataBuf
                        : userDataCallback(userDataBuf);
            }
            table.entries[entryIndex] = { entry, userData };
            this.emit("update", {
                table,
                entryIndex,
                entry,
                userData
            });
        }
        // parse client-side entries
        if (bitbuf.readOneBit()) {
            const numStrings = bitbuf.readUInt16();
            for (let i = 0; i < numStrings; ++i) {
                const entry = bitbuf.readCString(); // tslint:disable-line no-dead-store
                let userData = null;
                if (bitbuf.readOneBit()) {
                    const userDataSize = bitbuf.readUInt16();
                    const userDataBuf = bitbuf.readBytes(userDataSize);
                    // tslint:disable-next-line no-dead-store
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
    _parseStringTableUpdate(bitbuf, table, entries) {
        // overflow silently. this is how the official parser handles overflows...
        bitbuf.view.silentOverflow = true;
        const history = [];
        const entryBits = Math.ceil(Math.log2(table.maxEntries));
        const userDataCallback = this.userDataCallbacks[table.name];
        assert(!bitbuf.readOneBit(), "dictionary encoding unsupported");
        _.reduce(_.range(entries), lastEntry => {
            let entryIndex = lastEntry + 1;
            if (!bitbuf.readOneBit()) {
                entryIndex = bitbuf.readUBits(entryBits);
            }
            assert(entryIndex >= 0 && entryIndex < table.maxEntries, "bogus string index");
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
                        throw new Error("string table entry is delta from non existent entry");
                    }
                    const subStr = last.slice(0, bytesToCopy);
                    const suffix = bitbuf.readCString();
                    entry = subStr + suffix;
                }
                else {
                    entry = bitbuf.readCString();
                }
            }
            else {
                // If the string itself hasn't changed, this entry must already exist
                entry = assert_exists_1.default(existingEntry).entry;
            }
            // read in the user data
            let userData = null;
            if (bitbuf.readOneBit()) {
                // don't read the length, it's fixed length and the length was networked down already
                if (table.userDataFixedSize) {
                    const userDataArray = [bitbuf.readUBits(table.userDataSizeBits)];
                    userData = Buffer.from(userDataArray);
                }
                else {
                    const bytes = bitbuf.readUBits(consts.MAX_USERDATA_BITS);
                    userData = bitbuf.readBytes(bytes);
                }
                if (userDataCallback !== undefined) {
                    userData = userDataCallback(userData);
                }
            }
            else {
                userData = existingEntry ? existingEntry.userData : null;
            }
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
                userData
            });
            return entryIndex;
        }, -1);
    }
    _handleCreateStringTable(msg) {
        const bitbuf = bitbuffer_1.BitStream.from(msg.stringData);
        // table shouldn't already exist
        assert(this.findTableByName(msg.name) === undefined, "table already exists");
        assert(msg.userDataSize === Math.ceil(msg.userDataSizeBits / 8), "invalid user data byte size");
        assert(msg.userDataSizeBits <= 32, "userdata value too large");
        // create an empty table
        const table = {
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
    _handleUpdateStringTable(msg) {
        const bitbuf = bitbuffer_1.BitStream.from(msg.stringData);
        const table = this.tables[msg.tableId];
        assert(table !== undefined, "bad table index");
        this._parseStringTableUpdate(bitbuf, table, msg.numChangedEntries);
    }
}
exports.StringTables = StringTables;
//# sourceMappingURL=stringtables.js.map