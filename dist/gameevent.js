"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameEvent = void 0;
const assert = require("assert");
var EventKeyType;
(function (EventKeyType) {
    EventKeyType[EventKeyType["TYPE_STRING"] = 1] = "TYPE_STRING";
    EventKeyType[EventKeyType["TYPE_FLOAT"] = 2] = "TYPE_FLOAT";
    EventKeyType[EventKeyType["TYPE_LONG"] = 3] = "TYPE_LONG";
    EventKeyType[EventKeyType["TYPE_SHORT"] = 4] = "TYPE_SHORT";
    EventKeyType[EventKeyType["TYPE_BYTE"] = 5] = "TYPE_BYTE";
    EventKeyType[EventKeyType["TYPE_BOOL"] = 6] = "TYPE_BOOL";
    EventKeyType[EventKeyType["TYPE_UINT64"] = 7] = "TYPE_UINT64";
    EventKeyType[EventKeyType["TYPE_WSTRING"] = 8] = "TYPE_WSTRING";
})(EventKeyType || (EventKeyType = {}));
class GameEvent {
    constructor(descriptor) {
        this.name = descriptor.name;
        this.id = descriptor.eventid;
        this.keyNames = descriptor.keys.map(key => key.name);
    }
    messageToObject(eventMsg) {
        assert(eventMsg.eventid === this.id);
        const event = {};
        for (let i = 0; i < this.keyNames.length; ++i) {
            const keyName = this.keyNames[i];
            const value = eventMsg.keys[i];
            switch (value.type) {
                case EventKeyType.TYPE_STRING:
                    event[keyName] = value.valString;
                    break;
                case EventKeyType.TYPE_FLOAT:
                    event[keyName] = value.valFloat;
                    break;
                case EventKeyType.TYPE_LONG:
                    event[keyName] = value.valLong;
                    break;
                case EventKeyType.TYPE_SHORT:
                    event[keyName] = value.valShort;
                    break;
                case EventKeyType.TYPE_BYTE:
                    event[keyName] = value.valByte;
                    break;
                case EventKeyType.TYPE_BOOL:
                    event[keyName] = value.valBool;
                    break;
                case EventKeyType.TYPE_UINT64:
                    event[keyName] = value.valUint64;
                    break;
                case EventKeyType.TYPE_WSTRING:
                    event[keyName] = value.valWstring;
                    break;
            }
        }
        return event;
    }
}
exports.GameEvent = GameEvent;
//# sourceMappingURL=gameevent.js.map