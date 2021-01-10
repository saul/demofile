/* tslint:disable */
import * as Long from "long";
import { Writer, Reader } from "protobufjs/minimal";

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

const baseCEngineGotvSyncPacket: object = {
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

export const protobufPackage = "";

export const CEngineGotvSyncPacket = {
  encode(
    message: CEngineGotvSyncPacket,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(8).uint64(message.matchId);
    writer.uint32(16).uint32(message.instanceId);
    writer.uint32(24).uint32(message.signupfragment);
    writer.uint32(32).uint32(message.currentfragment);
    writer.uint32(45).float(message.tickrate);
    writer.uint32(48).uint32(message.tick);
    writer.uint32(69).float(message.rtdelay);
    writer.uint32(77).float(message.rcvage);
    writer.uint32(85).float(message.keyframeInterval);
    writer.uint32(88).uint32(message.cdndelay);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CEngineGotvSyncPacket {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCEngineGotvSyncPacket } as CEngineGotvSyncPacket;
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
  }
};
