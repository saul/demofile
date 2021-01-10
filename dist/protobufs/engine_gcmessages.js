"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CEngineGotvSyncPacket = exports.protobufPackage = void 0;
/* tslint:disable */
const Long = require("long");
const minimal_1 = require("protobufjs/minimal");
const baseCEngineGotvSyncPacket = {
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
exports.protobufPackage = "";
exports.CEngineGotvSyncPacket = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCEngineGotvSyncPacket };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.matchId = reader.uint64();
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
//# sourceMappingURL=engine_gcmessages.js.map