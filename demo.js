'use strict';

var ref = require('ref');
var StructType = require('ref-struct');
var refArray = require('ref-array');
var EventEmitter = require('events');

var ByteBuffer = require('./ext/bytebuffer');

var net = require('./net');
var consts = require('./consts');
var extraTypes = require('./extratypes');
var StringTables = require('./stringtables');
var UserMessages = require('./usermessages');
var GameEvents = require('./gameevents');
var Entities = require('./entities');

const FDEMO_NORMAL = 0;
const FDEMO_USE_ORIGIN2 = ( 1 << 0 );
const FDEMO_USE_ANGLES2 = ( 1 << 1 );
const FDEMO_NOINTERP = ( 1 << 2 );	// don't interpolate between this an last view

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
var DemoHeader = StructType({
  magic: extraTypes.charArray(8),
  protocol: ref.types.int32,
  networkProtocol: ref.types.int32,
  serverName: extraTypes.charArray(consts.MAX_OSPATH),
  clientName: extraTypes.charArray(consts.MAX_OSPATH),
  mapName: extraTypes.charArray(consts.MAX_OSPATH),
  gameDirectory: extraTypes.charArray(consts.MAX_OSPATH),
  playbackTime: ref.types.float,
  playbackTicks: ref.types.int32,
  playbackFrames: ref.types.int32,
  signonLength: ref.types.int32
});

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

var QAngle = StructType({
  x: ref.types.float,
  y: ref.types.float,
  z: ref.types.float
});

var Vector = StructType({
  x: ref.types.float,
  y: ref.types.float,
  z: ref.types.float
});

var OriginViewAngles = StructType({
  viewOrigin: Vector,
  viewAngles: QAngle,
  localViewAngles: QAngle
});

var SplitCmdInfo = StructType({
  flags: ref.types.int32,
  original: OriginViewAngles,
  resampled: OriginViewAngles
});

var CmdInfo = StructType({
  u: refArray(SplitCmdInfo, consts.MAX_SPLITSCREEN_CLIENTS)
});

/**
 * Parses a demo file header from the buffer.
 * @param {ArrayBuffer} buffer - Buffer of the demo header
 * @returns {DemoHeader} Header object
 */
function parseHeader(buffer) {
  return DemoHeader.get(buffer).toObject();
}

/**
 * Represents a demo file for parsing.
 */
class DemoFile extends EventEmitter {
  constructor() {
    super();

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

    this.entities.listen(this);
    this.gameEvents.listen(this);
    this.stringTables.listen(this);
    this.userMessages.listen(this);
  }

  /**
   * Fired when a packet of this type is hit. `svc_MessageName` events are also fired.
   * @public
   * @event DemoFile#net_MessageName
   */

  _handleDemoPacket() {
    CmdInfo.get(this._bytebuf.readBytes(CmdInfo.size).toSlicedBuffer());

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
    // no need to parse
    this._handleDataChunk();
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
   * Fired after all commands are processed for a tick.
   * @event DemoFile#tickend
   * @type {int}
   */

  _parseRecurse() {
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

    setImmediate(this._parseRecurse.bind(this));
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
    this._bytebuf = ByteBuffer.wrap(buffer.slice(DemoHeader.size), true);

    this.emit('start');

    setImmediate(this._parseRecurse.bind(this));
  }
}

module.exports = {
  DemoFile,
  parseHeader,
  FDEMO_NORMAL,
  FDEMO_USE_ORIGIN2,
  FDEMO_USE_ANGLES2,
  FDEMO_NOINTERP
};
