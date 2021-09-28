import { EventEmitter } from "events";
import * as timers from "timers";

import * as ByteBuffer from "bytebuffer";
import { BitStream } from "./ext/bitbuffer";

import * as assert from "assert";
import { MAX_EDICT_BITS, MAX_OSPATH } from "./consts";
import { ConVars } from "./convars";
import { Entities } from "./entities";
import { GameRules } from "./entities/gamerules";
import { Player } from "./entities/player";
import { Team } from "./entities/team";
import { GameEvents } from "./gameevents";
import { IceKey } from "./icekey";
import * as net from "./net";
import { NetMessageName } from "./net";
import {
  CNETMsgDisconnect,
  CNETMsgFile,
  CNETMsgNOP,
  CNETMsgPlayerAvatarData,
  CNETMsgSetConVar,
  CNETMsgSignonState,
  CNETMsgSplitScreenUser,
  CNETMsgStringCmd,
  CNETMsgTick,
  CSVCMsgBroadcastCommand,
  CSVCMsgBSPDecal,
  CSVCMsgClassInfo,
  CSVCMsgCmdKeyValues,
  CSVCMsgCreateStringTable,
  CSVCMsgCrosshairAngle,
  CSVCMsgEncryptedData,
  CSVCMsgEntityMsg,
  CSVCMsgFixAngle,
  CSVCMsgGameEvent,
  CSVCMsgGameEventList,
  CSVCMsgGetCvarValue,
  CSVCMsgHltvReplay,
  CSVCMsgMenu,
  CSVCMsgPacketEntities,
  CSVCMsgPaintmapData,
  CSVCMsgPrefetch,
  CSVCMsgPrint,
  CSVCMsgSendTable,
  CSVCMsgServerInfo,
  CSVCMsgSetPause,
  CSVCMsgSetView,
  CSVCMsgSounds,
  CSVCMsgSplitScreen,
  CSVCMsgTempEntities,
  CSVCMsgUpdateStringTable,
  CSVCMsgUserMessage,
  CSVCMsgVoiceData,
  CSVCMsgVoiceInit
} from "./protobufs/netmessages";
import { Vector } from "./sendtabletypes";
import { StringTables } from "./stringtables";
import { UserMessages } from "./usermessages";

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
  const bytebuf = ByteBuffer.wrap(buffer, true);
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
  const length = bytebuf.readInt32();
  return bytebuf.readBytes(length);
}

export interface IDemoStartEvent {
  /**
   * Cancel parsing the demo.
   */
  cancel: () => void;
}

export interface IDemoEndEvent {
  /**
   * Error that caused the premature end of parsing.
   */
  error?: Error;

  /**
   * Did parsing finish prematurely because the demo was incomplete?
   */
  incomplete: boolean;
}

export declare interface DemoFile {
  /**
   * Fired when parsing begins.
   */
  on(event: "start", listener: (event: IDemoStartEvent) => void): this;
  emit(name: "start", event: IDemoStartEvent): boolean;

  /**
   * Fired when parsing failed.
   */
  on(event: "error", listener: (error: Error) => void): this;
  emit(name: "error", error: Error): boolean;

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
   * Fired each frame indicating all inputs of the recording player.
   * Note this is only fired for in-eye/perspective demos.
   */
  on(event: "usercmd", listener: (userCmd: IUserCmd) => void): this;
  emit(name: "usercmd", userCmd: IUserCmd): boolean;

  /**
   * Fired after all commands are processed for a tick.
   */
  on(event: "tickend", listener: (tick: number) => void): this;
  emit(name: "tickend", tick: number): boolean;

  emit(name: NetMessageName, msg: any): boolean;
  on(message: "net_NOP", listener: (msg: CNETMsgNOP) => void): this;
  on(
    message: "net_Disconnect",
    listener: (msg: CNETMsgDisconnect) => void
  ): this;
  on(message: "net_File", listener: (msg: CNETMsgFile) => void): this;
  on(
    message: "net_SplitScreenUser",
    listener: (msg: CNETMsgSplitScreenUser) => void
  ): this;
  on(message: "net_Tick", listener: (msg: CNETMsgTick) => void): this;
  on(message: "net_StringCmd", listener: (msg: CNETMsgStringCmd) => void): this;
  on(message: "net_SetConVar", listener: (msg: CNETMsgSetConVar) => void): this;
  on(
    message: "net_SignonState",
    listener: (msg: CNETMsgSignonState) => void
  ): this;
  on(
    message: "net_PlayerAvatarData",
    listener: (msg: CNETMsgPlayerAvatarData) => void
  ): this;
  on(
    message: "svc_ServerInfo",
    listener: (msg: CSVCMsgServerInfo) => void
  ): this;
  on(message: "svc_SendTable", listener: (msg: CSVCMsgSendTable) => void): this;
  on(message: "svc_ClassInfo", listener: (msg: CSVCMsgClassInfo) => void): this;
  on(message: "svc_SetPause", listener: (msg: CSVCMsgSetPause) => void): this;
  on(
    message: "svc_CreateStringTable",
    listener: (msg: CSVCMsgCreateStringTable) => void
  ): this;
  on(
    message: "svc_UpdateStringTable",
    listener: (msg: CSVCMsgUpdateStringTable) => void
  ): this;
  on(message: "svc_VoiceInit", listener: (msg: CSVCMsgVoiceInit) => void): this;
  on(message: "svc_VoiceData", listener: (msg: CSVCMsgVoiceData) => void): this;
  on(message: "svc_Print", listener: (msg: CSVCMsgPrint) => void): this;
  on(message: "svc_Sounds", listener: (msg: CSVCMsgSounds) => void): this;
  on(message: "svc_SetView", listener: (msg: CSVCMsgSetView) => void): this;
  on(message: "svc_FixAngle", listener: (msg: CSVCMsgFixAngle) => void): this;
  on(
    message: "svc_CrosshairAngle",
    listener: (msg: CSVCMsgCrosshairAngle) => void
  ): this;
  on(message: "svc_BSPDecal", listener: (msg: CSVCMsgBSPDecal) => void): this;
  on(
    message: "svc_SplitScreen",
    listener: (msg: CSVCMsgSplitScreen) => void
  ): this;
  on(
    message: "svc_UserMessage",
    listener: (msg: CSVCMsgUserMessage) => void
  ): this;
  on(
    message: "svc_EntityMessage",
    listener: (msg: CSVCMsgEntityMsg) => void
  ): this;
  on(message: "svc_GameEvent", listener: (msg: CSVCMsgGameEvent) => void): this;
  on(
    message: "svc_PacketEntities",
    listener: (msg: CSVCMsgPacketEntities) => void
  ): this;
  on(
    message: "svc_TempEntities",
    listener: (msg: CSVCMsgTempEntities) => void
  ): this;
  on(message: "svc_Prefetch", listener: (msg: CSVCMsgPrefetch) => void): this;
  on(message: "svc_Menu", listener: (msg: CSVCMsgMenu) => void): this;
  on(
    message: "svc_GameEventList",
    listener: (msg: CSVCMsgGameEventList) => void
  ): this;
  on(
    message: "svc_GetCvarValue",
    listener: (msg: CSVCMsgGetCvarValue) => void
  ): this;
  on(
    message: "svc_PaintmapData",
    listener: (msg: CSVCMsgPaintmapData) => void
  ): this;
  on(
    message: "svc_CmdKeyValues",
    listener: (msg: CSVCMsgCmdKeyValues) => void
  ): this;
  on(
    message: "svc_EncryptedData",
    listener: (msg: CSVCMsgEncryptedData) => void
  ): this;
  on(
    message: "svc_HltvReplay",
    listener: (msg: CSVCMsgHltvReplay) => void
  ): this;
  on(
    message: "svc_Broadcast_Command",
    listener: (msg: CSVCMsgBroadcastCommand) => void
  ): this;
}

export type InputButton =
  | "attack" // = 1 << 0,
  | "jump" // = 1 << 1,
  | "duck" // = 1 << 2,
  | "forward" // = 1 << 3,
  | "back" // = 1 << 4,
  | "use" // = 1 << 5,
  | "cancel" // = 1 << 6,
  | "left" // = 1 << 7,
  | "right" // = 1 << 8,
  | "moveleft" // = 1 << 9,
  | "moveright" // = 1 << 10,
  | "attack2" // = 1 << 11,
  | "run" // = 1 << 12,
  | "reload" // = 1 << 13,
  | "alt1" // = 1 << 14,
  | "alt2" // = 1 << 15,
  | "score" // = 1 << 16, // Used by client.dll for when scoreboard is held down
  | "speed" // = 1 << 17, // Player is holding the speed key
  | "walk" // = 1 << 18, // Player holding walk key
  | "zoom" // = 1 << 19, // Zoom key for HUD zoom
  | "weapon1" // = 1 << 20, // weapon defines these bits
  | "weapon2" // = 1 << 21, // weapon defines these bits
  | "bullrush" // = 1 << 22,
  | "grenade1" // = 1 << 23, // grenade 1
  | "grenade2" // = 1 << 24, // grenade 2
  | "lookspin"; // = 1 << 25

export interface IUserCmd {
  commandNumber: number;
  tickCount: number;
  viewAngles: Vector;
  aimDirection: Vector;
  forwardMove: number;
  sideMove: number;
  upMove: number;
  buttons: ReadonlyArray<InputButton>;
  impulse: number;
  weaponSelect: number;
  weaponSubType: number;
  randomSeed: number;
  mouseDeltaX: number;
  mouseDeltaY: number;
}

/**
 * Represents a demo file for parsing.
 */
export class DemoFile extends EventEmitter {
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
  get players(): ReadonlyArray<Player> {
    return this.entities.players;
  }

  /**
   * Shortcut for `this.entities.teams`
   * @returns All team entities
   */
  get teams(): ReadonlyArray<Team> {
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
   * When parsing, set to current tick.
   */
  public currentTick: number = 0;

  /**
   * Number of seconds per tick
   */
  public tickInterval: number = NaN;

  public header!: IDemoHeader;

  /**
   * When parsing, set to player slot for current command.
   */
  public playerSlot: number = 0;

  public readonly entities: Entities;
  public readonly gameEvents: GameEvents;
  public readonly stringTables: StringTables;
  public readonly userMessages: UserMessages;
  public readonly conVars: ConVars;

  private _bytebuf!: ByteBuffer;
  private _lastThreadYieldTime = 0;
  private _immediateTimerToken: NodeJS.Immediate | null = null;
  private _timeoutTimerToken: NodeJS.Timer | null = null;

  private _encryptionKey: Uint8Array | null = null;

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

    // #65: Some demos are missing playbackTicks from the header
    // Pull the tick interval from ServerInfo
    this.on("svc_ServerInfo", msg => {
      this.tickInterval = msg.tickInterval;
    });

    this.on("svc_EncryptedData", this._handleEncryptedData.bind(this));
  }

  public parse(buffer: Buffer) {
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

    if (!cancelled) timers.setTimeout(this._parseRecurse.bind(this), 0);
  }

  /**
   * Cancel the current parse operation.
   */
  public cancel() {
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
  public setEncryptionKey(publicKey: Uint8Array | null) {
    if (publicKey != null && publicKey.length !== 16) {
      throw new Error(
        `Public key must be 16 bytes long, got ${publicKey.length} bytes instead`
      );
    }

    this._encryptionKey = publicKey;
  }

  private _handleEncryptedData(msg: CSVCMsgEncryptedData) {
    if (msg.keyType !== 2 || this._encryptionKey == null) return;

    const key = new IceKey(2);
    key.set(this._encryptionKey);

    assert(msg.encrypted.length % key.blockSize() === 0);

    const plainText = new Uint8Array(msg.encrypted.length);
    key.decryptUint8Array(msg.encrypted, plainText);

    // Create a ByteBuffer skipped past the padding
    const buf = ByteBuffer.wrap(plainText, true);
    const paddingBytes = buf.readUint8();

    buf.skip(paddingBytes);

    // Read size of netmessage. For some reason, it's encoded several times.
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

  private _handleDemoPacket() {
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
        const msgInst = message.class.decode(
          new Uint8Array(messageBuffer.toBuffer())
        );
        this.emit(message.name, msgInst);
      } else {
        chunk.skip(size);
      }
    }
  }

  private _handleDataChunk() {
    readIBytes(this._bytebuf);
  }

  private _handleDataTables() {
    const chunk = readIBytes(this._bytebuf);
    this.entities.handleDataTables(chunk);
  }

  private _handleUserCmd() {
    this._bytebuf.readInt32(); // outgoing sequence
    const chunk = readIBytes(this._bytebuf);

    // If nobody's listening, don't waste cycles decoding it
    if (!this.listenerCount("usercmd")) return;

    const bitbuf = BitStream.from(
      chunk.buffer.slice(chunk.offset, chunk.limit)
    );

    const move = {
      commandNumber: 0,
      tickCount: 0,
      viewAngles: { x: 0, y: 0, z: 0 },
      aimDirection: { x: 0, y: 0, z: 0 },
      forwardMove: 0,
      sideMove: 0,
      upMove: 0,
      buttons: new Array<InputButton>(),
      impulse: 0,
      weaponSelect: 0,
      weaponSubType: 0,
      randomSeed: 0,
      mouseDeltaX: 0,
      mouseDeltaY: 0
    };

    if (bitbuf.readOneBit()) {
      move.commandNumber = bitbuf.readUInt32();
    } else {
      move.commandNumber = 1;
    }

    if (bitbuf.readOneBit()) {
      move.tickCount = bitbuf.readUInt32();
    } else {
      move.tickCount = 1;
    }

    // Read direction
    if (bitbuf.readOneBit()) move.viewAngles.x = bitbuf.readFloat32();
    if (bitbuf.readOneBit()) move.viewAngles.y = bitbuf.readFloat32();
    if (bitbuf.readOneBit()) move.viewAngles.z = bitbuf.readFloat32();

    // Read aim direction
    if (bitbuf.readOneBit()) move.aimDirection.x = bitbuf.readFloat32();
    if (bitbuf.readOneBit()) move.aimDirection.y = bitbuf.readFloat32();
    if (bitbuf.readOneBit()) move.aimDirection.z = bitbuf.readFloat32();

    // Read movement
    if (bitbuf.readOneBit()) move.forwardMove = bitbuf.readFloat32();
    if (bitbuf.readOneBit()) move.sideMove = bitbuf.readFloat32();
    if (bitbuf.readOneBit()) move.upMove = bitbuf.readFloat32();

    if (bitbuf.readOneBit()) {
      const buttons = bitbuf.readUInt32();
      if (buttons & (1 << 0)) move.buttons.push("attack");
      if (buttons & (1 << 1)) move.buttons.push("jump");
      if (buttons & (1 << 2)) move.buttons.push("duck");
      if (buttons & (1 << 3)) move.buttons.push("forward");
      if (buttons & (1 << 4)) move.buttons.push("back");
      if (buttons & (1 << 5)) move.buttons.push("use");
      if (buttons & (1 << 6)) move.buttons.push("cancel");
      if (buttons & (1 << 7)) move.buttons.push("left");
      if (buttons & (1 << 8)) move.buttons.push("right");
      if (buttons & (1 << 9)) move.buttons.push("moveleft");
      if (buttons & (1 << 10)) move.buttons.push("moveright");
      if (buttons & (1 << 11)) move.buttons.push("attack2");
      if (buttons & (1 << 12)) move.buttons.push("run");
      if (buttons & (1 << 13)) move.buttons.push("reload");
      if (buttons & (1 << 14)) move.buttons.push("alt1");
      if (buttons & (1 << 15)) move.buttons.push("alt2");
      if (buttons & (1 << 16)) move.buttons.push("score");
      if (buttons & (1 << 17)) move.buttons.push("speed");
      if (buttons & (1 << 18)) move.buttons.push("walk");
      if (buttons & (1 << 19)) move.buttons.push("zoom");
      if (buttons & (1 << 20)) move.buttons.push("weapon1");
      if (buttons & (1 << 21)) move.buttons.push("weapon2");
      if (buttons & (1 << 22)) move.buttons.push("bullrush");
      if (buttons & (1 << 23)) move.buttons.push("grenade1");
      if (buttons & (1 << 24)) move.buttons.push("grenade2");
      if (buttons & (1 << 25)) move.buttons.push("lookspin");
    }
    if (bitbuf.readOneBit()) move.impulse = bitbuf.readUInt8();

    if (bitbuf.readOneBit()) {
      move.weaponSelect = bitbuf.readUBits(MAX_EDICT_BITS);
      if (bitbuf.readOneBit()) move.weaponSubType = bitbuf.readUBits(6);
    }

    if (bitbuf.readOneBit()) move.mouseDeltaX = bitbuf.readInt16();
    if (bitbuf.readOneBit()) move.mouseDeltaY = bitbuf.readInt16();

    this.emit("usercmd", move);
  }

  private _handleStringTables() {
    const chunk = readIBytes(this._bytebuf);
    const bitbuf = BitStream.from(
      chunk.buffer.slice(chunk.offset, chunk.limit)
    );
    this.stringTables.handleStringTables(bitbuf);
  }

  private _recurse() {
    const now = Date.now();

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

  private _parseRecurse() {
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
          this.emit("end", { incomplete: false });
          return;
        case DemoCommands.CustomData:
          throw new Error("Custom data not supported");
        case DemoCommands.SyncTick:
          break;
        default:
          throw new Error("Unrecognised command");
      }
    } catch (e) {
      // Always cancel if we have an error - we've already scheduled the next tick
      this.cancel();

      // #11, #172: Some demos have been written incompletely.
      // Don't throw an error when we run out of bytes to read.
      if (
        e instanceof RangeError &&
        this.header.playbackTicks === 0 &&
        this.header.playbackTime === 0 &&
        this.header.playbackFrames === 0
      ) {
        this.emit("end", { incomplete: true });
      } else {
        this.emit("error", e);
        this.emit("end", { error: e, incomplete: false });
      }
    }
  }
}
