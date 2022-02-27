"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CEngineGotvSyncPacket = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = require("protobufjs/minimal");
const Long = require("long");
exports.protobufPackage = "";
function createBaseCEngineGotvSyncPacket() {
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
exports.CEngineGotvSyncPacket = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.Reader ? input : new minimal_1.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCEngineGotvSyncPacket();
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
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseCEngineGotvSyncPacket();
        message.matchId =
            object.matchId !== undefined && object.matchId !== null
                ? Long.fromValue(object.matchId)
                : Long.UZERO;
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : 0;
        message.signupfragment = (_b = object.signupfragment) !== null && _b !== void 0 ? _b : 0;
        message.currentfragment = (_c = object.currentfragment) !== null && _c !== void 0 ? _c : 0;
        message.tickrate = (_d = object.tickrate) !== null && _d !== void 0 ? _d : 0;
        message.tick = (_e = object.tick) !== null && _e !== void 0 ? _e : 0;
        message.rtdelay = (_f = object.rtdelay) !== null && _f !== void 0 ? _f : 0;
        message.rcvage = (_g = object.rcvage) !== null && _g !== void 0 ? _g : 0;
        message.keyframeInterval = (_h = object.keyframeInterval) !== null && _h !== void 0 ? _h : 0;
        message.cdndelay = (_j = object.cdndelay) !== null && _j !== void 0 ? _j : 0;
        return message;
    }
};
// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (minimal_1.util.Long !== Long) {
    minimal_1.util.Long = Long;
    (0, minimal_1.configure)();
}
//# sourceMappingURL=engine_gcmessages.js.map