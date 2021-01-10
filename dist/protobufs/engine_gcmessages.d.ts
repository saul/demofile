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
export declare const protobufPackage = "";
export declare const CEngineGotvSyncPacket: {
    encode(message: CEngineGotvSyncPacket, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CEngineGotvSyncPacket;
};
