import { EventEmitter } from "events";
import * as timers from "timers";

import * as ByteBuffer from "bytebuffer";
import { BitStream } from "./ext/bitbuffer";

import * as net from "./net";
import { StringTables } from "./stringtables";
import { UserMessages } from "./usermessages";
import { GameEvents } from "./gameevents";
import { Entities } from "./entities";
import { ConVars } from "./convars";
import {
  ICNETMsg_NOP,
  ICNETMsg_Disconnect,
  ICNETMsg_File,
  ICNETMsg_SplitScreenUser,
  ICNETMsg_Tick,
  ICNETMsg_StringCmd,
  ICNETMsg_SetConVar,
  ICNETMsg_SignonState,
  ICNETMsg_PlayerAvatarData,
  ICSVCMsg_ServerInfo,
  ICSVCMsg_SendTable,
  ICSVCMsg_ClassInfo,
  ICSVCMsg_SetPause,
  ICSVCMsg_CreateStringTable,
  ICSVCMsg_UpdateStringTable,
  ICSVCMsg_VoiceInit,
  ICSVCMsg_VoiceData,
  ICSVCMsg_Print,
  ICSVCMsg_Sounds,
  ICSVCMsg_SetView,
  ICSVCMsg_FixAngle,
  ICSVCMsg_CrosshairAngle,
  ICSVCMsg_BSPDecal,
  ICSVCMsg_SplitScreen,
  ICSVCMsg_UserMessage,
  ICSVCMsg_GameEvent,
  ICSVCMsg_PacketEntities,
  ICSVCMsg_TempEntities,
  ICSVCMsg_Prefetch,
  ICSVCMsg_Menu,
  ICSVCMsg_GameEventList,
  ICSVCMsg_GetCvarValue,
  ICSVCMsg_PaintmapData,
  ICSVCMsg_CmdKeyValues,
  ICSVCMsg_EncryptedData,
  ICSVCMsg_HltvReplay,
  ICSVCMsg_EntityMsg
} from "./protobufs/netmessages";
import assert = require("assert");
import { Player } from "./entities/player";
import { Team } from "./entities/team";
import { GameRules } from "./entities/gamerules";
import { MAX_OSPATH } from "./consts";
import { NetMessageName } from "./net";
export { parseBinaryKeyValues } from "./keyvalues";

interface IDemoHeader {
  /**
   * Header magic (HL2DEMO)
   */
  magic: string;

  /**
   * Demo protocol version
   */
  protocol: number;

  /**
   * Network protocol version
   */
  networkProtocol: number;

  /**
   * Server hostname
   */
  serverName: string;

  /**
   * Recording player name
   */
  clientName: string;

  /**
   * Level name
   */
  mapName: string;

  /**
   * Game directory
   */
  gameDirectory: string;

  /**
   * Total playback time (seconds)
   */
  playbackTime: number;

  /**
   * Total playback ticks
   */
  playbackTicks: number;

  /**
   * Total playback frames
   */
  playbackFrames: number;

  /**
   * Length of signon (bytes)
   */
  signonLength: number;
}

const enum DemoCommands {
  Signon = 1,
  Packet = 2,

  /**
   * Sync client clock to demo tick
   */
  SyncTick = 3,

  ConsoleCmd = 4,
  UserCmd = 5,
  DataTables = 6,
  Stop = 7,

  /**
   * A blob of binary data understood by a callback function
   */
  CustomData = 8,
  StringTables = 9
}

/**
 * Parses a demo file header from the buffer.
 * @param {ArrayBuffer} buffer - Buffer of the demo header
 * @returns {IDemoHeader} Header object
 */
export function parseHeader(buffer: Buffer): IDemoHeader {
  let bytebuf = ByteBuffer.wrap(buffer, true);
  return {
    magic: bytebuf.readString(8, ByteBuffer.METRICS_BYTES).split("\0", 2)[0],
    protocol: bytebuf.readInt32(),
    networkProtocol: bytebuf.readInt32(),
    serverName: bytebuf
      .readString(MAX_OSPATH, ByteBuffer.METRICS_BYTES)
      .split("\0", 2)[0],
    clientName: bytebuf
      .readString(MAX_OSPATH, ByteBuffer.METRICS_BYTES)
      .split("\0", 2)[0],
    mapName: bytebuf
      .readString(MAX_OSPATH, ByteBuffer.METRICS_BYTES)
      .split("\0", 2)[0],
    gameDirectory: bytebuf
      .readString(MAX_OSPATH, ByteBuffer.METRICS_BYTES)
      .split("\0", 2)[0],
    playbackTime: bytebuf.readFloat(),
    playbackTicks: bytebuf.readInt32(),
    playbackFrames: bytebuf.readInt32(),
    signonLength: bytebuf.readInt32()
  };
}

function readIBytes(bytebuf: ByteBuffer) {
  var length = bytebuf.readInt32();
  return bytebuf.readBytes(length);
}

export interface IDemoEndEvent {
  /**
   * Error that caused the premature end of parsing.
   */
  error?: Error;
}

export declare interface DemoFile {
  /**
   * Fired when parsing begins.
   */
  on(event: "start", listener: () => void): this;
  emit(name: "start"): boolean;

  /**
   * Fired when parsing has finished, successfully or otherwise.
   */
  on(event: "end", listener: (event: IDemoEndEvent) => void): this;
  emit(name: "end", event: IDemoEndEvent): boolean;

  /**
   * Fired when a tick starts, before any tick command processing.
   */
  on(event: "tickstart", listener: (tick: number) => void): this;
  emit(name: "tickstart", tick: number): boolean;

  /**
   * Fired per command. Parameter is a value in range [0,1] that indicates
   * the percentage of the demo file has been parsed so far.
   */
  on(event: "progress", listener: (progressFraction: number) => void): this;
  emit(name: "progress", progressFraction: number): boolean;

  /**
   * Fired after all commands are processed for a tick.
   */
  on(event: "tickend", listener: (tick: number) => void): this;
  emit(name: "tickend", tick: number): boolean;

  emit(name: NetMessageName, msg: any): boolean;
  on(
    message: "net_NOP",
    listener: (msg: RequiredNonNullable<ICNETMsg_NOP>) => void
  ): this;
  on(
    message: "net_Disconnect",
    listener: (msg: RequiredNonNullable<ICNETMsg_Disconnect>) => void
  ): this;
  on(
    message: "net_File",
    listener: (msg: RequiredNonNullable<ICNETMsg_File>) => void
  ): this;
  on(
    message: "net_SplitScreenUser",
    listener: (msg: RequiredNonNullable<ICNETMsg_SplitScreenUser>) => void
  ): this;
  on(
    message: "net_Tick",
    listener: (msg: RequiredNonNullable<ICNETMsg_Tick>) => void
  ): this;
  on(
    message: "net_StringCmd",
    listener: (msg: RequiredNonNullable<ICNETMsg_StringCmd>) => void
  ): this;
  on(
    message: "net_SetConVar",
    listener: (msg: RequiredNonNullable<ICNETMsg_SetConVar>) => void
  ): this;
  on(
    message: "net_SignonState",
    listener: (msg: RequiredNonNullable<ICNETMsg_SignonState>) => void
  ): this;
  on(
    message: "net_PlayerAvatarData",
    listener: (msg: RequiredNonNullable<ICNETMsg_PlayerAvatarData>) => void
  ): this;
  on(
    message: "svc_ServerInfo",
    listener: (msg: RequiredNonNullable<ICSVCMsg_ServerInfo>) => void
  ): this;
  on(
    message: "svc_SendTable",
    listener: (msg: RequiredNonNullable<ICSVCMsg_SendTable>) => void
  ): this;
  on(
    message: "svc_ClassInfo",
    listener: (msg: RequiredNonNullable<ICSVCMsg_ClassInfo>) => void
  ): this;
  on(
    message: "svc_SetPause",
    listener: (msg: RequiredNonNullable<ICSVCMsg_SetPause>) => void
  ): this;
  on(
    message: "svc_CreateStringTable",
    listener: (msg: RequiredNonNullable<ICSVCMsg_CreateStringTable>) => void
  ): this;
  on(
    message: "svc_UpdateStringTable",
    listener: (msg: RequiredNonNullable<ICSVCMsg_UpdateStringTable>) => void
  ): this;
  on(
    message: "svc_VoiceInit",
    listener: (msg: RequiredNonNullable<ICSVCMsg_VoiceInit>) => void
  ): this;
  on(
    message: "svc_VoiceData",
    listener: (msg: RequiredNonNullable<ICSVCMsg_VoiceData>) => void
  ): this;
  on(
    message: "svc_Print",
    listener: (msg: RequiredNonNullable<ICSVCMsg_Print>) => void
  ): this;
  on(
    message: "svc_Sounds",
    listener: (msg: RequiredNonNullable<ICSVCMsg_Sounds>) => void
  ): this;
  on(
    message: "svc_SetView",
    listener: (msg: RequiredNonNullable<ICSVCMsg_SetView>) => void
  ): this;
  on(
    message: "svc_FixAngle",
    listener: (msg: RequiredNonNullable<ICSVCMsg_FixAngle>) => void
  ): this;
  on(
    message: "svc_CrosshairAngle",
    listener: (msg: RequiredNonNullable<ICSVCMsg_CrosshairAngle>) => void
  ): this;
  on(
    message: "svc_BSPDecal",
    listener: (msg: RequiredNonNullable<ICSVCMsg_BSPDecal>) => void
  ): this;
  on(
    message: "svc_SplitScreen",
    listener: (msg: RequiredNonNullable<ICSVCMsg_SplitScreen>) => void
  ): this;
  on(
    message: "svc_UserMessage",
    listener: (msg: RequiredNonNullable<ICSVCMsg_UserMessage>) => void
  ): this;
  on(
    message: "svc_EntityMessage",
    listener: (msg: RequiredNonNullable<ICSVCMsg_EntityMsg>) => void
  ): this;
  on(
    message: "svc_GameEvent",
    listener: (msg: RequiredNonNullable<ICSVCMsg_GameEvent>) => void
  ): this;
  on(
    message: "svc_PacketEntities",
    listener: (msg: RequiredNonNullable<ICSVCMsg_PacketEntities>) => void
  ): this;
  on(
    message: "svc_TempEntities",
    listener: (msg: RequiredNonNullable<ICSVCMsg_TempEntities>) => void
  ): this;
  on(
    message: "svc_Prefetch",
    listener: (msg: RequiredNonNullable<ICSVCMsg_Prefetch>) => void
  ): this;
  on(
    message: "svc_Menu",
    listener: (msg: RequiredNonNullable<ICSVCMsg_Menu>) => void
  ): this;
  on(
    message: "svc_GameEventList",
    listener: (msg: RequiredNonNullable<ICSVCMsg_GameEventList>) => void
  ): this;
  on(
    message: "svc_GetCvarValue",
    listener: (msg: RequiredNonNullable<ICSVCMsg_GetCvarValue>) => void
  ): this;
  on(
    message: "svc_PaintmapData",
    listener: (msg: RequiredNonNullable<ICSVCMsg_PaintmapData>) => void
  ): this;
  on(
    message: "svc_CmdKeyValues",
    listener: (msg: RequiredNonNullable<ICSVCMsg_CmdKeyValues>) => void
  ): this;
  on(
    message: "svc_EncryptedData",
    listener: (msg: RequiredNonNullable<ICSVCMsg_EncryptedData>) => void
  ): this;
  on(
    message: "svc_HltvReplay",
    listener: (msg: RequiredNonNullable<ICSVCMsg_HltvReplay>) => void
  ): this;
}

/**
 * Represents a demo file for parsing.
 */
export class DemoFile extends EventEmitter {
  private _lastThreadYieldTime = 0;
  private _immediateTimerToken: NodeJS.Timer | null = null;
  private _timeoutTimerToken: NodeJS.Timer | null = null;

  /**
   * When parsing, set to current tick.
   */
  currentTick: number = 0;

  header!: IDemoHeader;
  _bytebuf!: ByteBuffer;

  /**
   * When parsing, set to player slot for current command.
   */
  playerSlot: number = 0;

  readonly entities: Entities;
  readonly gameEvents: GameEvents;
  readonly stringTables: StringTables;
  readonly userMessages: UserMessages;
  readonly conVars: ConVars;

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

    this.entities = new Entities();
    this.gameEvents = new GameEvents();
    this.stringTables = new StringTables();
    this.userMessages = new UserMessages();
    this.conVars = new ConVars();

    this.gameEvents.listen(this);

    // It is important that entities listens after game events, as they both listen on
    // tickend.
    this.entities.listen(this);

    this.stringTables.listen(this);
    this.userMessages.listen(this);
    this.conVars.listen(this);
  }

  parse(buffer: Buffer) {
    this.header = parseHeader(buffer);
    this._bytebuf = ByteBuffer.wrap(buffer.slice(1072), true);

    this.emit("start");

    timers.setTimeout(this._parseRecurse.bind(this), 0);
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
    return (
      this.currentTick * (this.header.playbackTime / this.header.playbackTicks)
    );
  }

  /**
   * Shortcut for `this.entities.players`
   * @returns All connected player entities
   */
  get players(): Player[] {
    return this.entities.players;
  }

  /**
   * Shortcut for `this.entities.teams`
   * @returns All team entities
   */
  get teams(): Team[] {
    return this.entities.teams;
  }

  /**
   * Shortcut for `this.entities.gameRules`
   * @returns GameRules entity
   */
  get gameRules(): GameRules {
    return this.entities.gameRules;
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

    var chunk = readIBytes(this._bytebuf);

    while (chunk.remaining()) {
      var cmd = chunk.readVarint32();
      var size = chunk.readVarint32();

      var message = net.findByType(cmd);
      assert(message != null, `No message handler for ${cmd}`);

      if (message === null) {
        chunk.skip(size);
        continue;
      }

      if (this.listenerCount(message.name)) {
        var messageBuffer = chunk.readBytes(size);
        var msgInst = message.class.decode(
          new Uint8Array(messageBuffer.toBuffer())
        );
        this.emit(message.name, msgInst);
      } else {
        chunk.skip(size);
      }
    }
  }

  _handleDataChunk() {
    readIBytes(this._bytebuf);
  }

  _handleDataTables() {
    var chunk = readIBytes(this._bytebuf);
    this.entities._handleDataTables(chunk);
  }

  _handleUserCmd() {
    this._bytebuf.readInt32(); // outgoing sequence
    this._handleDataChunk(); // TODO: parse user command
  }

  _handleStringTables() {
    var chunk = readIBytes(this._bytebuf);
    let bitbuf = BitStream.from(chunk.buffer.slice(chunk.offset, chunk.limit));
    this.stringTables._handleStringTables(bitbuf);
  }

  _recurse() {
    let now = Date.now();

    if (now - this._lastThreadYieldTime < 32) {
      this._immediateTimerToken = timers.setImmediate(
        this._parseRecurse.bind(this)
      );
    } else {
      this._lastThreadYieldTime = now;
      this._timeoutTimerToken = timers.setTimeout(
        this._parseRecurse.bind(this),
        0
      );
    }
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

  _parseRecurse() {
    this._recurse();

    try {
      this.emit("progress", this._bytebuf.offset / this._bytebuf.limit);

      var command = this._bytebuf.readUint8();
      var tick = this._bytebuf.readInt32();
      this.playerSlot = this._bytebuf.readUint8();

      if (tick !== this.currentTick) {
        this.emit("tickend", this.currentTick);
        this.currentTick = tick;
        this.emit("tickstart", this.currentTick);
      }

      switch (command) {
        case DemoCommands.Packet:
        case DemoCommands.Signon:
          this._handleDemoPacket();
          break;
        case DemoCommands.DataTables:
          this._handleDataTables();
          break;
        case DemoCommands.StringTables:
          this._handleStringTables();
          break;
        case DemoCommands.ConsoleCmd: // TODO
          this._handleDataChunk();
          break;
        case DemoCommands.UserCmd:
          this._handleUserCmd();
          break;
        case DemoCommands.Stop:
          this.cancel();
          this.emit("tickend", this.currentTick);
          this.emit("end", {});
          return;
        case DemoCommands.CustomData:
          throw "Custom data not supported";
        case DemoCommands.SyncTick:
          break;
        default:
          throw "Unrecognised command";
      }
    } catch (e) {
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
