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

class DemoFile extends EventEmitter {
  constructor() {
    super();

    this.header = null;
    this.bytebuf = null;
    this.currentTick = null;
    this.playerSlot = null;

    this.entities = new Entities();
    this.entities.listen(this);

    this.gameEvents = new GameEvents();
    this.gameEvents.listen(this);

    this.stringTables = new StringTables();
    this.stringTables.listen(this);

    this.userMessages = new UserMessages();
    this.userMessages.listen(this);
  }

  handleDemoPacket() {
    CmdInfo.get(this.bytebuf.readBytes(CmdInfo.size).toSlicedBuffer());

    // skip over sequence info
    this.bytebuf.readInt32();
    this.bytebuf.readInt32();

    var chunk = this.bytebuf.readIBytes();

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

  handleDataChunk() {
    this.bytebuf.readIBytes();
  }

  handleDataTables() {
    var chunk = this.bytebuf.readIBytes();
    this.entities.handleDataTables(chunk);
  }

  handleUserCmd() {
    this.bytebuf.readInt32(); // outgoing sequence
    this.handleDataChunk(); // TODO: parse user command
  }

  handleStringTables() {
    // no need to parse
    this.handleDataChunk();
  }

  parse(buffer) {
    this.header = DemoHeader.get(buffer).toObject();
    this.bytebuf = ByteBuffer.wrap(buffer.slice(DemoHeader.size), true);

    this.emit('start');

    while (true) {
      var command = this.bytebuf.readUInt8();
      var tick = this.bytebuf.readInt32();
      this.playerSlot = this.bytebuf.readUInt8();

      if (tick !== this.currentTick) {
        this.emit('tickend', this.currentTick);
        this.currentTick = tick;
        this.emit('tickstart', this.currentTick);
      }

      if (command === DemoCommands.stop) {
        this.emit('tickend', this.currentTick);
        this.emit('end');
        return;
      }

      if (command === DemoCommands.syncTick) {
        continue;
      }

      if (command === DemoCommands.customData) {
        throw 'Custom data not supported';
      }

      switch (command) {
        case DemoCommands.packet:
        case DemoCommands.signon:
          this.handleDemoPacket();
          break;
        case DemoCommands.dataTables:
          this.handleDataTables();
          break;
        case DemoCommands.stringTables:
          this.handleStringTables();
          break;
        case DemoCommands.consoleCmd: // TODO
          this.handleDataChunk();
          break;
        case DemoCommands.userCmd:
          this.handleUserCmd();
          break;
        default:
          throw 'Unrecognised command';
      }
    }
  }
}

module.exports = {
  DemoFile,
  FDEMO_NORMAL,
  FDEMO_USE_ORIGIN2,
  FDEMO_USE_ANGLES2,
  FDEMO_NOINTERP
};
