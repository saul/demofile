/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "";

export interface CEngineGotvSyncPacket {
  matchId: Long;
  instanceId: number;
  signupfragment: number;
  currentfragment: number;
  tickrate: number;
  tick: number;
  rtdelay: number;
  rcvage: number;
  keyframeInterval: number;
  cdndelay: number;
}

function createBaseCEngineGotvSyncPacket(): CEngineGotvSyncPacket {
  return {
    matchId: Long.UZERO,
    instanceId: 0,
    signupfragment: 0,
    currentfragment: 0,
    tickrate: 0,
    tick: 0,
    rtdelay: 0,
    rcvage: 0,
    keyframeInterval: 0,
    cdndelay: 0
  };
}

export const CEngineGotvSyncPacket = {
  encode(
    message: CEngineGotvSyncPacket,
    writer: Writer = Writer.create()
  ): Writer {
    if (!message.matchId.isZero()) {
      writer.uint32(8).uint64(message.matchId);
    }
    if (message.instanceId !== 0) {
      writer.uint32(16).uint32(message.instanceId);
    }
    if (message.signupfragment !== 0) {
      writer.uint32(24).uint32(message.signupfragment);
    }
    if (message.currentfragment !== 0) {
      writer.uint32(32).uint32(message.currentfragment);
    }
    if (message.tickrate !== 0) {
      writer.uint32(45).float(message.tickrate);
    }
    if (message.tick !== 0) {
      writer.uint32(48).uint32(message.tick);
    }
    if (message.rtdelay !== 0) {
      writer.uint32(69).float(message.rtdelay);
    }
    if (message.rcvage !== 0) {
      writer.uint32(77).float(message.rcvage);
    }
    if (message.keyframeInterval !== 0) {
      writer.uint32(85).float(message.keyframeInterval);
    }
    if (message.cdndelay !== 0) {
      writer.uint32(88).uint32(message.cdndelay);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CEngineGotvSyncPacket {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCEngineGotvSyncPacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.matchId = reader.uint64() as Long;
          break;
        case 2:
          message.instanceId = reader.uint32();
          break;
        case 3:
          message.signupfragment = reader.uint32();
          break;
        case 4:
          message.currentfragment = reader.uint32();
          break;
        case 5:
          message.tickrate = reader.float();
          break;
        case 6:
          message.tick = reader.uint32();
          break;
        case 8:
          message.rtdelay = reader.float();
          break;
        case 9:
          message.rcvage = reader.float();
          break;
        case 10:
          message.keyframeInterval = reader.float();
          break;
        case 11:
          message.cdndelay = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<CEngineGotvSyncPacket>, I>>(
    object: I
  ): CEngineGotvSyncPacket {
    const message = createBaseCEngineGotvSyncPacket();
    message.matchId =
      object.matchId !== undefined && object.matchId !== null
        ? Long.fromValue(object.matchId)
        : Long.UZERO;
    message.instanceId = object.instanceId ?? 0;
    message.signupfragment = object.signupfragment ?? 0;
    message.currentfragment = object.currentfragment ?? 0;
    message.tickrate = object.tickrate ?? 0;
    message.tick = object.tick ?? 0;
    message.rtdelay = object.rtdelay ?? 0;
    message.rcvage = object.rcvage ?? 0;
    message.keyframeInterval = object.keyframeInterval ?? 0;
    message.cdndelay = object.cdndelay ?? 0;
    return message;
  }
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
