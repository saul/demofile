'use strict';

var fs = require('fs');
var ref = require('ref');
var StructType = require('ref-struct');
var refArray = require('ref-array');
var _ = require('lodash');
var async = require('async');
var util = require('util');
var assert = require('assert');
var EventEmitter = require('events');

var ByteBuffer = require('./ext/bytebuffer');

var net = require('./net');
var consts = require('./consts');
var extraTypes = require('./extratypes');
var StringTables = require('./stringtables');
var UserMessages = require('./usermessages');
var GameEvents = require('./gameevents');
var Entities = require('./entities');

var FDEMO_NORMAL = 0;
var FDEMO_USE_ORIGIN2 = ( 1 << 0 );
var FDEMO_USE_ANGLES2 = ( 1 << 1 );
var FDEMO_NOINTERP = ( 1 << 2 );	// don't interpolate between this an last view

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

class DemoFile {
  constructor(path) {
    this.path = path;
    this.fd = null;
    this.header = null;
    this.bytebuf = null;

    this.messageEvents = new EventEmitter();

    this.entities = new Entities();
    this.entities.listen(this.messageEvents);

    this.gameEvents = new GameEvents();
    this.gameEvents.listen(this.messageEvents);

    this.stringTables = new StringTables();
    this.stringTables.listen(this.messageEvents);

    this.userMessages = new UserMessages();
    this.userMessages.listen(this.messageEvents);
  }

  open() {
    async.waterfall([
      cb => {
        fs.open(this.path, 'r', cb);
      },
      (fd, cb) => {
        this.fd = fd;
        fs.fstat(fd, cb);
      },
      (stats, cb) => {
        cb(null, stats.size);
      },
      (size, cb) => {
        fs.read(this.fd, new Buffer(size), 0, size, 0, cb);
      },
      (bytes, buf, cb) => {
        this.header = DemoHeader.get(buf).toObject();
        this.bytebuf = ByteBuffer.wrap(buf.slice(DemoHeader.size), true);

        this.parse();
        cb(null);
      }
    ], err => {
      if (err) {
        throw util.format('Failed to open demo file: %s', err);
      }
    });
  }

  handleDemoPacket() {
    var cmdInfo = CmdInfo.get(this.bytebuf.readBytes(CmdInfo.size).toSlicedBuffer());

    // skip over sequence info
    this.bytebuf.readInt32();
    this.bytebuf.readInt32();

    var chunk = this.bytebuf.readIBytes();

    while (chunk.remaining()) {
      var cmd = chunk.readVarint32();
      var size = chunk.readVarint32();

      var messageBuffer = chunk.readBytes(size);

      var message = net.findByType(cmd);
      if (typeof message === 'undefined') {
        continue; // unknown net message
      }

      var msgInst = message.class.decode(messageBuffer);

      this.messageEvents.emit(message.name, msgInst);
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
    var chunk = this.bytebuf.readIBytes();
    this.stringTables.handleStringTables(chunk);
  }

  parse() {
    while (this.bytebuf.remaining()) {
      var cmdHeader = {
        command: this.bytebuf.readUInt8(),
        tick: this.bytebuf.readInt32(),
        playerSlot: this.bytebuf.readUInt8()
      };

      if (cmdHeader.command === DemoCommands.stop) {
        break;
      }

      if (cmdHeader.command === DemoCommands.syncTick) {
        continue;
      }

      if (cmdHeader.command === DemoCommands.customData) {
        throw 'Custom data not supported';
      }

      var handlers = {
        [DemoCommands.signon]: this.handleDemoPacket,
        [DemoCommands.packet]: this.handleDemoPacket,
        [DemoCommands.dataTables]: this.handleDataTables,
        [DemoCommands.stringTables]: this.handleStringTables,
        [DemoCommands.consoleCmd]: this.handleDataChunk, // TODO
        [DemoCommands.userCmd]: this.handleUserCmd
      };

      if (typeof handlers[cmdHeader.command] === 'undefined') {
        throw 'Unrecognised command';
      }

      var callback = handlers[cmdHeader.command];
      callback.call(this);
    }
  }
}

var demo = new DemoFile('fnatic vs tsm de dust2 part 1.dem');
//var demo = new DemoFile('auto0-20160107-211630-2083922612-de_dust2-Bog_Standard.dem');
demo.open();
