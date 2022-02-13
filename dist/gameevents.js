"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameEvents = void 0;
const events_1 = require("events");
const gameevent_1 = require("./gameevent");
const eventtypes_1 = require("./eventtypes");
/**
 * Manages game events for a demo file.
 */
class GameEvents extends events_1.EventEmitter {
    constructor() {
        super(...arguments);
        this.gameEventList = [];
        this._tickEvents = [];
    }
    listen(demo) {
        const entities = demo.entities;
        demo.on("svc_GameEventList", this._handleGameEventList.bind(this));
        demo.on("svc_GameEvent", msg => {
            const event = this.gameEventList[msg.eventid];
            if (!event) {
                return;
            }
            const eventVars = event.messageToObject(msg);
            // buffer game events until the end of the tick
            this._tickEvents.push({
                name: event.name,
                event: (0, eventtypes_1.annotateEvent)(entities, event.name, eventVars)
            });
        });
        demo.on("tickend", () => {
            this._tickEvents.forEach(event => {
                this.emit(event.name, event.event);
                this.emit("event", {
                    name: event.name,
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    event: event.event
                });
            });
            this._tickEvents = [];
        });
    }
    _handleGameEventList(msg) {
        for (const descriptor of msg.descriptors) {
            this.gameEventList[descriptor.eventid] = new gameevent_1.GameEvent(descriptor);
        }
    }
}
exports.GameEvents = GameEvents;
//# sourceMappingURL=gameevents.js.map