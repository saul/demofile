"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameEvent = void 0;
const assert = require("assert");
const _ = require("lodash");
class GameEvent {
    constructor(descriptor) {
        this.name = descriptor.name;
        this.id = descriptor.eventid;
        this.keyNames = descriptor.keys.map(key => key.name);
    }
    messageToObject(eventMsg) {
        assert(eventMsg.eventid === this.id);
        return _.zipObject(this.keyNames, eventMsg.keys.map(key => {
            return _.find(key, (value, name) => value !== null && name !== "type");
        }));
    }
}
exports.GameEvent = GameEvent;
//# sourceMappingURL=gameevent.js.map