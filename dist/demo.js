"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoFile = exports.parseHeader = void 0;
const events_1 = require("events");
const timers = require("timers");
const url_1 = require("url");
const https = require("https");
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
const assert_exists_1 = require("./assert-exists");
const grenadetrajectory_1 = require("./supplements/grenadetrajectory");
const molotovdetonate_1 = require("./supplements/molotovdetonate");
const itempurchase_1 = require("./supplements/itempurchase");
function httpGet(url) {
    return new Promise((resolve, reject) => {
        https
            .request(url, res => {
            const chunks = [];
            res.on("data", chunk => {
                chunks.push(chunk);
            });
            res.on("end", () => {
                if (res.statusCode == 200) {
                    resolve(Buffer.concat(chunks));
                }
                else {
                    reject(`request '${url}' failed: ${res.statusCode} (${res.statusMessage})`);
                }
            });
        })
            .end();
    });
}
function parseHeaderBytebuf(bytebuf) {
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
/**
 * Parses a demo file header from the buffer.
 * @param {ArrayBuffer} buffer - Buffer of the demo header
 * @returns {IDemoHeader} Header object
 */
function parseHeader(buffer) {
    const bytebuf = ByteBuffer.wrap(buffer, true);
    return parseHeaderBytebuf(bytebuf);
}
exports.parseHeader = parseHeader;
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
        this.currentTick = -1;
        /**
         * Number of seconds per tick
         */
        this.tickInterval = NaN;
        /**
         * When parsing, set to the splitscreen slot for the current command.
         * @deprecated Splitscreen slot is unused for PC games.
         */
        this.playerSlot = 0;
        /**
         * Set to the client slot of the recording player.
         * Always null for GOTV demos.
         */
        this.recordingClientSlot = null;
        this._chunks = [];
        this._lastThreadYieldTime = 0;
        this._immediateTimerToken = null;
        this._timeoutTimerToken = null;
        this._encryptionKey = null;
        this._hasEnded = false;
        this._isBroadcastFragment = false;
        this._supplementEvents = [
            grenadetrajectory_1.default,
            molotovdetonate_1.default,
            itempurchase_1.default
        ];
        this._supplementCleanupFns = new Map();
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
        this.on("svc_EncryptedData", msg => {
            if (!this._handleEncryptedData(msg)) {
                // Some demos appear to have the encryption key recorded
                // incorrectly in the .dem.info file. Don't throw an error
                // if we can't decode it correctly.
                // The game client silently skips bad encrypted messages.
                // See https://github.com/saul/demofile/issues/322#issuecomment-1085776379
                this.emit("warning", { message: "Unable to read encrypted message" });
            }
        });
        this.on("newListener", (event) => {
            // If we already have listeners for this event, nothing to do
            if (this.listenerCount(event) > 0)
                return;
            const supplement = this._findSupplement(event);
            if (supplement == null)
                return;
            const cleanupFn = supplement.setup(this);
            this._supplementCleanupFns.set(supplement, cleanupFn);
        });
        this.on("removeListener", (event) => {
            // If there are still listeners for this event, early out
            if (this.listenerCount(event) > 0)
                return;
            const supplement = this._findSupplement(event);
            if (supplement == null)
                return;
            // Don't cleanup if there are listeners on other emits that this supplement emits
            const existingListenerCount = supplement.emits.reduce((prev, name) => prev + this.listenerCount(name), 0);
            if (existingListenerCount > 0)
                return;
            const cleanupFn = (0, assert_exists_1.default)(this._supplementCleanupFns.get(supplement));
            cleanupFn();
            this._supplementCleanupFns.delete(supplement);
        });
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
    _findSupplement(eventName) {
        for (const supplement of this._supplementEvents) {
            if (supplement.emits.indexOf(eventName) >= 0)
                return supplement;
        }
        return null;
    }
    /**
     * Start streaming a GOTV broadcast over HTTP.
     * Will keep streaming until the broadcast finishes.
     *
     * @param url URL to the GOTV broadcast.
     * @returns Promise that resolves then the broadcast finishes.
     */
    async parseBroadcast(url) {
        if (!url.endsWith("/"))
            url += "/";
        // Some packets are formatted slightly differently in
        // broadcast fragments compared to a normal demo file.
        this._isBroadcastFragment = true;
        const syncUrl = new url_1.URL("sync", url).toString();
        const syncResponse = await httpGet(syncUrl);
        const syncDto = JSON.parse(syncResponse.toString());
        if (syncDto.protocol !== 4) {
            throw new Error(`expected protocol version 4, got: ${syncDto.protocol}`);
        }
        if (syncDto.token_redirect != null) {
            url = new url_1.URL(syncDto.token_redirect, url).toString();
            if (!url.endsWith("/"))
                url += "/";
        }
        this.header = {
            magic: "HL2DEMO",
            protocol: syncDto.protocol,
            networkProtocol: 0,
            serverName: `GOTV Broadcast: ${url}`,
            clientName: "GOTV Demo",
            mapName: syncDto.map,
            gameDirectory: "csgo",
            playbackTime: 0,
            playbackTicks: 0,
            playbackFrames: 0,
            signonLength: 0
        };
        this.tickInterval = 1 / syncDto.tps;
        let cancelled = false;
        this.emit("start", {
            cancel() {
                cancelled = true;
            }
        });
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (cancelled) {
            return;
        }
        const startUrl = new url_1.URL(`${syncDto.signup_fragment | 0}/start`, url).toString();
        const startResponse = await httpGet(startUrl);
        // Read the signon fragment
        this._bytebuf = ByteBuffer.wrap(startResponse, true);
        while (this._bytebuf.remaining() > 0) {
            this._readCommand();
        }
        // Keep reading fragments until we run out
        let fragment = syncDto.fragment | 0;
        let fragmentType = "full";
        while (!this._hasEnded) {
            const fragmentUrl = new url_1.URL(`${fragment}/${fragmentType}`, url).toString();
            let fragmentResponse;
            try {
                fragmentResponse = await httpGet(fragmentUrl);
            }
            catch {
                // HTTP 404 errors are expected - each fragment only lasts for a few seconds.
                // Wait for 1-2 secs before retrying to avoid spamming the relay.
                await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
                continue;
            }
            // We need to request {fragment}/full + {fragment}/delta
            if (fragmentType == "full") {
                fragmentType = "delta";
            }
            else {
                fragment += 1;
            }
            this._bytebuf = ByteBuffer.wrap(fragmentResponse, true);
            while (this._bytebuf.remaining() > 0) {
                this._readCommand();
            }
        }
    }
    parseStream(stream) {
        this._hasEnded = false;
        const onReceiveChunk = (chunk) => {
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            if (this._bytebuf == null) {
                this._bytebuf = ByteBuffer.wrap(chunk, true);
            }
            else {
                this._chunks.push(chunk);
            }
        };
        const readPacketChunk = () => {
            try {
                // Keep reading until we can't read any more
                while (this._bytebuf.remaining() > 0 || this._chunks.length > 0) {
                    this._bytebuf.mark();
                    this._readCommand();
                }
            }
            catch (e) {
                if (e instanceof RangeError) {
                    // Reset the byte buffer to the start of the last command
                    this._bytebuf.offset = Math.max(0, this._bytebuf.markedOffset);
                }
                else {
                    stream.off("data", onReceiveChunk);
                    const error = e instanceof Error
                        ? e
                        : new Error(`Exception during parsing: ${e}`);
                    this._emitEnd({ error, incomplete: false });
                }
            }
        };
        const readHeaderChunk = () => {
            // Wait for enough bytes for us to read the header
            if (!this._tryEnsureRemaining(1072))
                return;
            // Once we've read the header, remove this handler
            stream.off("data", readHeaderChunk);
            const cancelled = this._parseHeader();
            if (!cancelled)
                stream.on("data", readPacketChunk);
        };
        stream.on("data", onReceiveChunk);
        stream.on("data", readHeaderChunk);
        stream.on("error", e => {
            stream.off("data", onReceiveChunk);
            this._emitEnd({ error: e, incomplete: false });
        });
        stream.on("end", () => {
            var _a;
            const fullyConsumed = 
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            ((_a = this._bytebuf) === null || _a === void 0 ? void 0 : _a.remaining()) === 0 && this._chunks.length === 0;
            if (fullyConsumed)
                return;
            this._emitEnd({ incomplete: true });
        });
    }
    parse(buffer) {
        this._hasEnded = false;
        this._bytebuf = ByteBuffer.wrap(buffer, true);
        const cancelled = this._parseHeader();
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
    _emitEnd(e) {
        if (this._hasEnded)
            return;
        if (e.error) {
            this.emit("error", e.error);
        }
        this.emit("end", e);
        this._hasEnded = true;
    }
    _parseHeader() {
        this.header = parseHeaderBytebuf(this._bytebuf);
        // #65: Some demos are missing playbackTicks from the header
        if (this.header.playbackTicks > 0) {
            this.tickInterval = this.header.playbackTime / this.header.playbackTicks;
        }
        // If this is a POV demo, try to figure out who the recording player is
        if (this.header.clientName !== "GOTV Demo") {
            this.stringTables.on("update", this._handleStringTableUpdate.bind(this));
        }
        let cancelled = false;
        this.emit("start", {
            cancel: () => {
                cancelled = true;
            }
        });
        return cancelled;
    }
    _readIBytes() {
        this._ensureRemaining(4);
        const length = this._bytebuf.readInt32();
        this._ensureRemaining(length);
        return this._bytebuf.readBytes(length);
    }
    _handleEncryptedData(msg) {
        if (msg.keyType !== 2 || this._encryptionKey == null)
            return true;
        const key = new icekey_1.IceKey(2);
        key.set(this._encryptionKey);
        assert(msg.encrypted.length % key.blockSize() === 0);
        const plainText = new Uint8Array(msg.encrypted.length);
        key.decryptUint8Array(msg.encrypted, plainText);
        // Create a ByteBuffer skipped past the padding
        const buf = ByteBuffer.wrap(plainText, true);
        const paddingBytes = buf.readUint8();
        if (paddingBytes + 4 > buf.remaining())
            return false;
        buf.skip(paddingBytes);
        // For some reason, the size is encoded as an int32, then as a varint32
        buf.BE();
        const bytesWritten = buf.readInt32();
        buf.LE();
        if (buf.remaining() !== bytesWritten)
            return false;
        const cmd = buf.readVarint32();
        const size = buf.readVarint32();
        if (buf.remaining() !== size)
            return false;
        const message = net.findByType(cmd);
        assert(message != null, `No message handler for ${cmd}`);
        if (this.listenerCount(message.name)) {
            const msgInst = message.class.decode(new Uint8Array(buf.toBuffer()));
            this.emit(message.name, msgInst);
        }
        return true;
    }
    _handleStringTableUpdate(update) {
        if (this.recordingClientSlot != null)
            return;
        if (update.table.name === "userinfo" && update.userData != null) {
            const playerInfo = update.userData;
            if (playerInfo.name === this.header.clientName) {
                this.recordingClientSlot = update.entryIndex;
            }
        }
    }
    /**
     * Fired when a packet of this type is hit. `svc_MessageName` events are also fired.
     * @public
     * @event DemoFile#net_MessageName
     */
    _handleDemoPacket() {
        if (!this._isBroadcastFragment) {
            this._ensureRemaining(160);
            // skip cmd info
            this._bytebuf.skip(152);
            // skip over sequence info
            this._bytebuf.readInt32();
            this._bytebuf.readInt32();
        }
        const chunk = this._readIBytes();
        while (chunk.remaining()) {
            const cmd = chunk.readVarint32();
            const size = chunk.readVarint32();
            const message = net.findByType(cmd);
            assert(message != null, `No message handler for ${cmd}`);
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
        this._readIBytes();
    }
    _handleDataTables() {
        const chunk = this._isBroadcastFragment
            ? this._bytebuf
            : this._readIBytes();
        this.entities.handleDataTables(chunk);
    }
    _handleUserCmd() {
        this._ensureRemaining(4);
        this._bytebuf.readInt32(); // outgoing sequence
        const chunk = this._readIBytes();
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
        const chunk = this._readIBytes();
        const bitbuf = bitbuffer_1.BitStream.from(chunk.buffer.slice(chunk.offset, chunk.limit));
        this.stringTables.handleStringTables(bitbuf);
    }
    _tryEnsureRemaining(bytes) {
        const remaining = this._bytebuf.remaining();
        if (remaining >= bytes)
            return true;
        let left = bytes - remaining;
        for (let i = 0; i < this._chunks.length && left > 0; ++i)
            left -= this._chunks[i].length;
        // We don't have enough bytes with what we have buffered up
        if (left > 0)
            return false;
        const mark = Math.max(0, this._bytebuf.markedOffset);
        const newOffset = this._bytebuf.offset - mark;
        // Reset to the marked offset. We're never going to need the bytes preceding it
        this._bytebuf.offset = mark;
        this._bytebuf = ByteBuffer.wrap(Buffer.concat([
            new Uint8Array(this._bytebuf.toBuffer()),
            ...this._chunks
        ]), true);
        this._chunks = [];
        // Advance to the point we'd already read up to
        this._bytebuf.offset = newOffset;
        return true;
    }
    _ensureRemaining(bytes) {
        if (!this._tryEnsureRemaining(bytes)) {
            throw new RangeError(`Not enough data to continue parsing. ${bytes} bytes needed`);
        }
    }
    _readCommand() {
        this._ensureRemaining(6);
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
                this._emitEnd({ incomplete: false });
                return;
            case 8 /* CustomData */:
                throw new Error("Custom data not supported");
            case 3 /* SyncTick */:
                break;
            default:
                throw new Error(`Unrecognised command: ${command}`);
        }
    }
    _parseRecurse() {
        const now = Date.now();
        // Schedule another round of parsing
        if (now - this._lastThreadYieldTime < 32) {
            this._immediateTimerToken = timers.setImmediate(this._parseRecurse.bind(this));
        }
        else {
            this._lastThreadYieldTime = now;
            this._timeoutTimerToken = timers.setTimeout(this._parseRecurse.bind(this), 0);
        }
        try {
            this.emit("progress", this._bytebuf.offset / this._bytebuf.limit);
            this._readCommand();
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
                this._emitEnd({ incomplete: true });
            }
            else {
                const error = e instanceof Error ? e : new Error(`Exception during parsing: ${e}`);
                this._emitEnd({ error, incomplete: false });
            }
        }
    }
}
exports.DemoFile = DemoFile;
//# sourceMappingURL=demo.js.map