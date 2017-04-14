'use strict';

var Parser = require('binary-parser').Parser;
var EventEmitter = require('events');
var timers = require('timers');

var ByteBuffer = require('./ext/bytebuffer');
var bitBuffer = require('./ext/bitbuffer');

var net = require('./net');
var consts = require('./consts');
var StringTables = require('./stringtables');
var UserMessages = require('./usermessages');
var GameEvents = require('./gameevents');
var Entities = require('./entities');
var ConVars = require('./convars');

const FDEMO_NORMAL = 0;
const FDEMO_USE_ORIGIN2 = ( 1 << 0 );
const FDEMO_USE_ANGLES2 = ( 1 << 1 );
const FDEMO_NOINTERP = ( 1 << 2 );	// don't interpolate between this an last view

const TEAM_UNASSIGNED = 0;
const TEAM_SPECTATOR = 1;
const TEAM_TERRORISTS = 2;
const TEAM_CTS = 3;

/**
 * @property {string} magic - Header magic
 * @property {int} protocol - Demo protocol version
 * @property {int} networkProtocol - Network protocol version
 * @property {string} serverName - Server hostname
 * @property {string} clientName - Recording player name
 * @property {string} mapName - Level name
 * @property {string} gameDirectory - Game directory
 * @property {float} playbackTime - Total playback time (seconds)
 * @property {int} playbackTicks - Total playback ticks
 * @property {int} playbackFrames - Total playback frames
 * @property {int} signonLength - Length of signon (bytes)
 */
var DemoHeader = new Parser()
  .endianess('little')
  .string('magic', {length: 8, stripNull: true})
  .int32('protocol')
  .int32('networkProtocol')
  .string('serverName', {length: consts.MAX_OSPATH, stripNull: true})
  .string('clientName', {length: consts.MAX_OSPATH, stripNull: true})
  .string('mapName', {length: consts.MAX_OSPATH, stripNull: true})
  .string('gameDirectory', {length: consts.MAX_OSPATH, stripNull: true})
  .float('playbackTime')
  .int32('playbackTicks')
  .int32('playbackFrames')
  .int32('signonLength');

var DemoCommands = {
  signon: 1, // startup message
  packet: 2, // normal network packet
  syncTick: 3, // sync client clock to demo tick
  consoleCmd: 4, // console command
  userCmd: 5, // user input command
  dataTables: 6, // network data tables
  stop: 7, // end of time
  customData: 8, // a blob of binary data understood by a callback function
  stringTables: 9
};

var QAngle = new Parser()
  .endianess('little')
  .float('pitch')
  .float('yaw')
  .float('roll');

var Vector = new Parser()
  .endianess('little')
  .float('x')
  .float('y')
  .float('z');

var OriginViewAngles = new Parser()
  .endianess('little')
  .nest('viewOrigin', {type: Vector})
  .nest('viewAngles', {type: QAngle})
  .nest('localViewAngles', {type: QAngle});

var SplitCmdInfo = new Parser()
  .endianess('little')
  .int32('flags')
  .nest('original', {type: OriginViewAngles})
  .nest('resampled', {type: OriginViewAngles});

var CmdInfo = new Parser()
  .endianess('little')
  .array('u', {
    type: SplitCmdInfo,
    length: consts.MAX_SPLITSCREEN_CLIENTS
  });

/**
 * Parses a demo file header from the buffer.
 * @param {ArrayBuffer} buffer - Buffer of the demo header
 * @returns {DemoHeader} Header object
 */
function parseHeader(buffer) {
  return DemoHeader.parse(new Buffer(buffer));
}

/**
 * Represents a demo file for parsing.
 */
class DemoFile extends EventEmitter {
  constructor() {
    super();

    this._lastThreadYieldTime = 0;
    this._immediateTimerToken = null;
    this._timeoutTimerToken = null;

    this._bytebuf = null;

    /**
     * @type {DemoHeader}
     */
    this.header = null;

    /**
     * When parsing, set to current tick.
     * @type {int}
     */
    this.currentTick = null;

    /**
     * When parsing, set to player slot for current command.
     * @type {int}
     */
    this.playerSlot = null;

    /** @type {Entities} */
    this.entities = new Entities();

    /** @type {GameEvents} */
    this.gameEvents = new GameEvents();

    /** @type {StringTables} */
    this.stringTables = new StringTables();

    /** @type {UserMessages} */
    this.userMessages = new UserMessages();

    /** @type {ConVars} */
    this.conVars = new ConVars();

    this.entities.listen(this);
    this.gameEvents.listen(this);
    this.stringTables.listen(this);
    this.userMessages.listen(this);
    this.conVars.listen(this);
  }

  /**
   * @returns {float} Number of seconds elapsed
   */
  get currentTime() {
    return this.currentTick * (this.header.playbackTicks / this.header.playbackTime);
  }

  /**
   * Shortcut for `this.entities.players`
   * @returns {Player[]} All connected player entities
   */
  get players() {
    return this.entities.players;
  }

  /**
   * Shortcut for `this.entities.teams`
   * @returns {Team[]} All team entities
   */
  get teams() {
    return this.entities.teams;
  }

  /**
   * Shortcut for `this.entities.gameRules`
   * @returns {GameRules|null} GameRules entity
   */
  get gameRules() {
    return this.entities.gameRules;
  }

  /**
   * Fired when a packet of this type is hit. `svc_MessageName` events are also fired.
   * @public
   * @event DemoFile#net_MessageName
   */

  _handleDemoPacket() {
    CmdInfo.parse(new Buffer(this._bytebuf.readBytes(152).toSlicedBuffer()));

    // skip over sequence info
    this._bytebuf.readInt32();
    this._bytebuf.readInt32();

    var chunk = this._bytebuf.readIBytes();

    while (chunk.remaining()) {
      var cmd = chunk.readVarint32();
      var size = chunk.readVarint32();

      var messageBuffer = chunk.readBytes(size);

      var message = net.findByType(cmd);
      if (message === undefined) {
        continue; // unknown net message
      }

      var msgInst = message.class.decode(messageBuffer);

      this.emit(message.name, msgInst);
    }
  }

  _handleDataChunk() {
    this._bytebuf.readIBytes();
  }

  _handleDataTables() {
    var chunk = this._bytebuf.readIBytes();
    this.entities._handleDataTables(chunk);
  }

  _handleUserCmd() {
    this._bytebuf.readInt32(); // outgoing sequence
    this._handleDataChunk(); // TODO: parse user command
  }

  _handleStringTables() {
    let bitbuf = new bitBuffer.BitStream(this._bytebuf.readIBytes().toSlicedBuffer());
    this.stringTables._handleStringTables(bitbuf);
  }

  /**
   * Fired when parsing begins.
   * @event DemoFile#start
   */

  /**
   * Fired when parsing is complete.
   * @event DemoFile#end
   */

  /**
   * Fired when a tick starts, before any tick command processing.
   * @event DemoFile#tickstart
   * @type {int}
   */

  /**
   * Fired per command. Parameter is a value in range [0,1] that indicates
   * the percentage of the demo file has been parsed so far. 
   * @event DemoFile#progress
   * @type {number}
   */

  /**
   * Fired after all commands are processed for a tick.
   * @event DemoFile#tickend
   * @type {int}
   */

  _recurse() {
    let now = Date.now();

    if (now - this._lastThreadYieldTime < 32) {
      this._immediateTimerToken = timers.setImmediate(this._parseRecurse.bind(this));
    } else {
      this._lastThreadYieldTime = now;
      this._timeoutTimerToken = timers.setTimeout(this._parseRecurse.bind(this), 0);
    }
  }

  /**
   * Cancel the current parse operation.
   * @returns {void}
   */
  cancel() {
    if (this._immediateTimerToken) {
      timers.cancelImmediate(this._immediateTimerToken);
      this._immediateTimerToken = null;
    }
    if (this._timeoutTimerToken) {
      timers.cancelTimeout(this._timeoutTimerToken);
      this._timeoutTimerToken = null;
    }
  }

  _parseRecurse() {
    this._recurse();

    this.emit('progress', this._bytebuf.offset / this._bytebuf.limit);

    var command = this._bytebuf.readUInt8();
    var tick = this._bytebuf.readInt32();
    this.playerSlot = this._bytebuf.readUInt8();

    if (tick !== this.currentTick) {
      this.emit('tickend', this.currentTick);
      this.currentTick = tick;
      this.emit('tickstart', this.currentTick);
    }

    switch (command) {
      case DemoCommands.packet:
      case DemoCommands.signon:
        this._handleDemoPacket();
        break;
      case DemoCommands.dataTables:
        this._handleDataTables();
        break;
      case DemoCommands.stringTables:
        this._handleStringTables();
        break;
      case DemoCommands.consoleCmd: // TODO
        this._handleDataChunk();
        break;
      case DemoCommands.userCmd:
        this._handleUserCmd();
        break;
      case DemoCommands.stop:
        this.emit('tickend', this.currentTick);
        this.emit('end');
        return;
      case DemoCommands.customData:
        throw 'Custom data not supported';
      case DemoCommands.syncTick:
        break;
      default:
        throw 'Unrecognised command';
    }
  }

  /**
   * Parse buffer as a demo file.
   *
   * @fires DemoFile#start
   * @fires DemoFile#tickstart
   * @fires DemoFile#tickend
   * @fires DemoFile#end
   *
   * @param {ArrayBuffer} buffer - Buffer pointing to start of demo header
   * @returns {undefined}
   */
  parse(buffer) {
    this.header = parseHeader(buffer);
    this._bytebuf = ByteBuffer.wrap(buffer.slice(1072), true);

    this.emit('start');

    timers.setTimeout(this._parseRecurse.bind(this), 0);
  }
}

module.exports = {
  DemoFile,
  parseHeader,
  FDEMO_NORMAL,
  FDEMO_USE_ORIGIN2,
  FDEMO_USE_ANGLES2,
  FDEMO_NOINTERP,
  TEAM_UNASSIGNED,
  TEAM_SPECTATOR,
  TEAM_TERRORISTS,
  TEAM_CTS
};
