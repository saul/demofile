"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const timers = require("timers");
const ByteBuffer = require("bytebuffer");
const bitbuffer_1 = require("./ext/bitbuffer");
const assert = require("assert");
const consts_1 = require("./consts");
const convars_1 = require("./convars");
const entities_1 = require("./entities");
var gamerules_1 = require("./entities/gamerules");
exports.GameRules = gamerules_1.GameRules;
var player_1 = require("./entities/player");
exports.Player = player_1.Player;
var team_1 = require("./entities/team");
exports.Team = team_1.Team;
const gameevents_1 = require("./gameevents");
const net = require("./net");
const stringtables_1 = require("./stringtables");
const usermessages_1 = require("./usermessages");
var keyvalues_1 = require("./keyvalues");
exports.parseBinaryKeyValues = keyvalues_1.parseBinaryKeyValues;
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
         * When parsing, set to player slot for current command.
         */
        this.playerSlot = 0;
        this._lastThreadYieldTime = 0;
        this._immediateTimerToken = null;
        this._timeoutTimerToken = null;
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
    }
    /**
     * @returns Number of ticks per second
     */
    get tickRate() {
        return this.header.playbackTicks / this.header.playbackTime;
    }
    /**
     * @returns Number of seconds elapsed
     */
    get currentTime() {
        return (this.currentTick * (this.header.playbackTime / this.header.playbackTicks));
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
        this._bytebuf = ByteBuffer.wrap(buffer.slice(1072), true);
        this.emit("start");
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
            if (message === null) {
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
        this._handleDataChunk(); // TODO: parse user command
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
                    this.emit("end", {});
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
            this.emit("tickend", this.currentTick);
            this.emit("end", { error: e });
            // See GH #11: A sizeable proportion of demo files aren't complete.
            // If we hit a RangeError, just silently swallow it (as the official
            // game client does)
            if (!(e instanceof RangeError)) {
                throw e;
            }
        }
    }
}
exports.DemoFile = DemoFile;
