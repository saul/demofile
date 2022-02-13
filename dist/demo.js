"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoFile = exports.parseHeader = void 0;
const events_1 = require("events");
const timers = require("timers");
const ByteBuffer = require("bytebuffer");
const bitbuffer_1 = require("./ext/bitbuffer");
const assert = require("assert");
const consts_1 = require("./consts");
const convars_1 = require("./convars");
const entities_1 = require("./entities");
const gameevents_1 = require("./gameevents");
const icekey_1 = require("./icekey");
const net = require("./net");
const stringtables_1 = require("./stringtables");
const usermessages_1 = require("./usermessages");
/**
 * Parses a demo file header from the buffer.
 * @param {ArrayBuffer} buffer - Buffer of the demo header
 * @returns {IDemoHeader} Header object
 */
function parseHeader(buffer) {
    const bytebuf = ByteBuffer.wrap(buffer, true);
    return {
        magic: bytebuf.readString(8, ByteBuffer.METRICS_BYTES).split("\0", 2)[0],
        protocol: bytebuf.readInt32(),
        networkProtocol: bytebuf.readInt32(),
        serverName: bytebuf
            .readString(consts_1.MAX_OSPATH, ByteBuffer.METRICS_BYTES)
            .split("\0", 2)[0],
        clientName: bytebuf
            .readString(consts_1.MAX_OSPATH, ByteBuffer.METRICS_BYTES)
            .split("\0", 2)[0],
        mapName: bytebuf
            .readString(consts_1.MAX_OSPATH, ByteBuffer.METRICS_BYTES)
            .split("\0", 2)[0],
        gameDirectory: bytebuf
            .readString(consts_1.MAX_OSPATH, ByteBuffer.METRICS_BYTES)
            .split("\0", 2)[0],
        playbackTime: bytebuf.readFloat(),
        playbackTicks: bytebuf.readInt32(),
        playbackFrames: bytebuf.readInt32(),
        signonLength: bytebuf.readInt32()
    };
}
exports.parseHeader = parseHeader;
function readIBytes(bytebuf) {
    const length = bytebuf.readInt32();
    return bytebuf.readBytes(length);
}
/**
 * Represents a demo file for parsing.
 */
class DemoFile extends events_1.EventEmitter {
    /**
     * Starts parsing buffer as a demo file.
     *
     * @fires DemoFile#tickstart
     * @fires DemoFile#tickend
     * @fires DemoFile#end
     *
     * @param {ArrayBuffer} buffer - Buffer pointing to start of demo header
     */
    constructor() {
        super();
        /**
         * When parsing, set to current tick.
         */
        this.currentTick = 0;
        /**
         * Number of seconds per tick
         */
        this.tickInterval = NaN;
        /**
         * When parsing, set to player slot for current command.
         */
        this.playerSlot = 0;
        this._lastThreadYieldTime = 0;
        this._immediateTimerToken = null;
        this._timeoutTimerToken = null;
        this._encryptionKey = null;
        this.entities = new entities_1.Entities();
        this.gameEvents = new gameevents_1.GameEvents();
        this.stringTables = new stringtables_1.StringTables();
        this.userMessages = new usermessages_1.UserMessages();
        this.conVars = new convars_1.ConVars();
        this.gameEvents.listen(this);
        // It is important that entities listens after game events, as they both listen on
        // tickend.
        this.entities.listen(this);
        this.stringTables.listen(this);
        this.userMessages.listen(this);
        this.conVars.listen(this);
        // #65: Some demos are missing playbackTicks from the header
        // Pull the tick interval from ServerInfo
        this.on("svc_ServerInfo", msg => {
            this.tickInterval = msg.tickInterval;
        });
        this.on("svc_EncryptedData", this._handleEncryptedData.bind(this));
    }
    /**
     * @returns Number of ticks per second
     */
    get tickRate() {
        return 1.0 / this.tickInterval;
    }
    /**
     * @returns Number of seconds elapsed
     */
    get currentTime() {
        return this.currentTick * this.tickInterval;
    }
    /**
     * Shortcut for `this.entities.players`
     * @returns All connected player entities
     */
    get players() {
        return this.entities.players;
    }
    /**
     * Shortcut for `this.entities.teams`
     * @returns All team entities
     */
    get teams() {
        return this.entities.teams;
    }
    /**
     * Shortcut for `this.entities.gameRules`
     * @returns GameRules entity
     */
    get gameRules() {
        return this.entities.gameRules;
    }
    parse(buffer) {
        this.header = parseHeader(buffer);
        // #65: Some demos are missing playbackTicks from the header
        if (this.header.playbackTicks > 0) {
            this.tickInterval = this.header.playbackTime / this.header.playbackTicks;
        }
        this._bytebuf = ByteBuffer.wrap(buffer.slice(1072), true);
        let cancelled = false;
        this.emit("start", {
            cancel: () => {
                cancelled = true;
            }
        });
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (!cancelled)
            timers.setTimeout(this._parseRecurse.bind(this), 0);
    }
    /**
     * Cancel the current parse operation.
     */
    cancel() {
        if (this._immediateTimerToken) {
            timers.clearImmediate(this._immediateTimerToken);
            this._immediateTimerToken = null;
        }
        if (this._timeoutTimerToken) {
            timers.clearTimeout(this._timeoutTimerToken);
            this._timeoutTimerToken = null;
        }
    }
    /**
     * Set encryption key for decrypting `svc_EncryptedData` packets.
     * This allows decryption of messages from public matchmaking, like
     * chat messages and caster voice data.
     *
     * The key can be extracted from `match730_*.dem.info` files with `extractPublicEncryptionKey`.
     *
     * @param publicKey Public encryption key.
     */
    setEncryptionKey(publicKey) {
        if (publicKey != null && publicKey.length !== 16) {
            throw new Error(`Public key must be 16 bytes long, got ${publicKey.length} bytes instead`);
        }
        this._encryptionKey = publicKey;
    }
    _handleEncryptedData(msg) {
        if (msg.keyType !== 2 || this._encryptionKey == null)
            return;
        const key = new icekey_1.IceKey(2);
        key.set(this._encryptionKey);
        assert(msg.encrypted.length % key.blockSize() === 0);
        const plainText = new Uint8Array(msg.encrypted.length);
        key.decryptUint8Array(msg.encrypted, plainText);
        // Create a ByteBuffer skipped past the padding
        const buf = ByteBuffer.wrap(plainText, true);
        const paddingBytes = buf.readUint8();
        buf.skip(paddingBytes);
        // Read size of netmessage. For some reason, it's encoded
        // redundantly encoded several times.
        buf.BE();
        const bytesWritten = buf.readInt32();
        buf.LE();
        assert(buf.remaining() === bytesWritten);
        const cmd = buf.readVarint32();
        const size = buf.readVarint32();
        assert(buf.remaining() === size);
        const message = net.findByType(cmd);
        assert(message != null, `No message handler for ${cmd}`);
        if (message != null && this.listenerCount(message.name)) {
            const msgInst = message.class.decode(new Uint8Array(buf.toBuffer()));
            this.emit(message.name, msgInst);
        }
    }
    /**
     * Fired when a packet of this type is hit. `svc_MessageName` events are also fired.
     * @public
     * @event DemoFile#net_MessageName
     */
    _handleDemoPacket() {
        // skip cmd info
        this._bytebuf.skip(152);
        // skip over sequence info
        this._bytebuf.readInt32();
        this._bytebuf.readInt32();
        const chunk = readIBytes(this._bytebuf);
        while (chunk.remaining()) {
            const cmd = chunk.readVarint32();
            const size = chunk.readVarint32();
            const message = net.findByType(cmd);
            assert(message != null, `No message handler for ${cmd}`);
            if (message == null) {
                chunk.skip(size);
                continue;
            }
            if (this.listenerCount(message.name)) {
                const messageBuffer = chunk.readBytes(size);
                const msgInst = message.class.decode(new Uint8Array(messageBuffer.toBuffer()));
                this.emit(message.name, msgInst);
            }
            else {
                chunk.skip(size);
            }
        }
    }
    _handleDataChunk() {
        readIBytes(this._bytebuf);
    }
    _handleDataTables() {
        const chunk = readIBytes(this._bytebuf);
        this.entities.handleDataTables(chunk);
    }
    _handleUserCmd() {
        this._bytebuf.readInt32(); // outgoing sequence
        const chunk = readIBytes(this._bytebuf);
        // If nobody's listening, don't waste cycles decoding it
        if (!this.listenerCount("usercmd"))
            return;
        const bitbuf = bitbuffer_1.BitStream.from(chunk.buffer.slice(chunk.offset, chunk.limit));
        const move = {
            commandNumber: 0,
            tickCount: 0,
            viewAngles: { x: 0, y: 0, z: 0 },
            aimDirection: { x: 0, y: 0, z: 0 },
            forwardMove: 0,
            sideMove: 0,
            upMove: 0,
            buttons: new Array(),
            impulse: 0,
            weaponSelect: 0,
            weaponSubType: 0,
            randomSeed: 0,
            mouseDeltaX: 0,
            mouseDeltaY: 0
        };
        if (bitbuf.readOneBit()) {
            move.commandNumber = bitbuf.readUInt32();
        }
        else {
            move.commandNumber = 1;
        }
        if (bitbuf.readOneBit()) {
            move.tickCount = bitbuf.readUInt32();
        }
        else {
            move.tickCount = 1;
        }
        // Read direction
        if (bitbuf.readOneBit())
            move.viewAngles.x = bitbuf.readFloat32();
        if (bitbuf.readOneBit())
            move.viewAngles.y = bitbuf.readFloat32();
        if (bitbuf.readOneBit())
            move.viewAngles.z = bitbuf.readFloat32();
        // Read aim direction
        if (bitbuf.readOneBit())
            move.aimDirection.x = bitbuf.readFloat32();
        if (bitbuf.readOneBit())
            move.aimDirection.y = bitbuf.readFloat32();
        if (bitbuf.readOneBit())
            move.aimDirection.z = bitbuf.readFloat32();
        // Read movement
        if (bitbuf.readOneBit())
            move.forwardMove = bitbuf.readFloat32();
        if (bitbuf.readOneBit())
            move.sideMove = bitbuf.readFloat32();
        if (bitbuf.readOneBit())
            move.upMove = bitbuf.readFloat32();
        if (bitbuf.readOneBit()) {
            const buttons = bitbuf.readUInt32();
            if (buttons & (1 << 0))
                move.buttons.push("attack");
            if (buttons & (1 << 1))
                move.buttons.push("jump");
            if (buttons & (1 << 2))
                move.buttons.push("duck");
            if (buttons & (1 << 3))
                move.buttons.push("forward");
            if (buttons & (1 << 4))
                move.buttons.push("back");
            if (buttons & (1 << 5))
                move.buttons.push("use");
            if (buttons & (1 << 6))
                move.buttons.push("cancel");
            if (buttons & (1 << 7))
                move.buttons.push("left");
            if (buttons & (1 << 8))
                move.buttons.push("right");
            if (buttons & (1 << 9))
                move.buttons.push("moveleft");
            if (buttons & (1 << 10))
                move.buttons.push("moveright");
            if (buttons & (1 << 11))
                move.buttons.push("attack2");
            if (buttons & (1 << 12))
                move.buttons.push("run");
            if (buttons & (1 << 13))
                move.buttons.push("reload");
            if (buttons & (1 << 14))
                move.buttons.push("alt1");
            if (buttons & (1 << 15))
                move.buttons.push("alt2");
            if (buttons & (1 << 16))
                move.buttons.push("score");
            if (buttons & (1 << 17))
                move.buttons.push("speed");
            if (buttons & (1 << 18))
                move.buttons.push("walk");
            if (buttons & (1 << 19))
                move.buttons.push("zoom");
            if (buttons & (1 << 20))
                move.buttons.push("weapon1");
            if (buttons & (1 << 21))
                move.buttons.push("weapon2");
            if (buttons & (1 << 22))
                move.buttons.push("bullrush");
            if (buttons & (1 << 23))
                move.buttons.push("grenade1");
            if (buttons & (1 << 24))
                move.buttons.push("grenade2");
            if (buttons & (1 << 25))
                move.buttons.push("lookspin");
        }
        if (bitbuf.readOneBit())
            move.impulse = bitbuf.readUInt8();
        if (bitbuf.readOneBit()) {
            move.weaponSelect = bitbuf.readUBits(consts_1.MAX_EDICT_BITS);
            if (bitbuf.readOneBit())
                move.weaponSubType = bitbuf.readUBits(6);
        }
        if (bitbuf.readOneBit())
            move.mouseDeltaX = bitbuf.readInt16();
        if (bitbuf.readOneBit())
            move.mouseDeltaY = bitbuf.readInt16();
        this.emit("usercmd", move);
    }
    _handleStringTables() {
        const chunk = readIBytes(this._bytebuf);
        const bitbuf = bitbuffer_1.BitStream.from(chunk.buffer.slice(chunk.offset, chunk.limit));
        this.stringTables.handleStringTables(bitbuf);
    }
    _recurse() {
        const now = Date.now();
        if (now - this._lastThreadYieldTime < 32) {
            this._immediateTimerToken = timers.setImmediate(this._parseRecurse.bind(this));
        }
        else {
            this._lastThreadYieldTime = now;
            this._timeoutTimerToken = timers.setTimeout(this._parseRecurse.bind(this), 0);
        }
    }
    _parseRecurse() {
        this._recurse();
        try {
            this.emit("progress", this._bytebuf.offset / this._bytebuf.limit);
            const command = this._bytebuf.readUint8();
            const tick = this._bytebuf.readInt32();
            this.playerSlot = this._bytebuf.readUint8();
            if (tick !== this.currentTick) {
                this.emit("tickend", this.currentTick);
                this.currentTick = tick;
                this.emit("tickstart", this.currentTick);
            }
            switch (command) {
                case 2 /* Packet */:
                case 1 /* Signon */:
                    this._handleDemoPacket();
                    break;
                case 6 /* DataTables */:
                    this._handleDataTables();
                    break;
                case 9 /* StringTables */:
                    this._handleStringTables();
                    break;
                case 4 /* ConsoleCmd */: // TODO
                    this._handleDataChunk();
                    break;
                case 5 /* UserCmd */:
                    this._handleUserCmd();
                    break;
                case 7 /* Stop */:
                    this.cancel();
                    this.emit("tickend", this.currentTick);
                    this.emit("end", { incomplete: false });
                    return;
                case 8 /* CustomData */:
                    throw new Error("Custom data not supported");
                case 3 /* SyncTick */:
                    break;
                default:
                    throw new Error("Unrecognised command");
            }
        }
        catch (e) {
            // Always cancel if we have an error - we've already scheduled the next tick
            this.cancel();
            // #11, #172: Some demos have been written incompletely.
            // Don't throw an error when we run out of bytes to read.
            if (e instanceof RangeError &&
                this.header.playbackTicks === 0 &&
                this.header.playbackTime === 0 &&
                this.header.playbackFrames === 0) {
                this.emit("end", { incomplete: true });
            }
            else {
                const error = e instanceof Error ? e : new Error(`Exception during parsing: ${e}`);
                this.emit("error", error);
                this.emit("end", { error, incomplete: false });
            }
        }
    }
}
exports.DemoFile = DemoFile;
//# sourceMappingURL=demo.js.map