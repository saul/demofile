import * as _ from "lodash";
import * as assert from "assert";
import { EventEmitter } from "events";
import { DemoFile } from "./demo";
import {
  ICSVCMsg_GameEvent,
  ICSVCMsg_GameEventList,
  CSVCMsg_GameEventList
} from "./protobufs/netmessages";

class GameEvent {
  name: string;
  id: number;
  keyNames: string[];

  constructor(
    descriptor: RequiredNonNullable<CSVCMsg_GameEventList.Idescriptor_t>
  ) {
    this.name = descriptor.name;
    this.id = descriptor.eventid;
    this.keyNames = descriptor.keys.map(key => key.name);
  }

  messageToObject(eventMsg: RequiredNonNullable<ICSVCMsg_GameEvent>) {
    assert(eventMsg.eventid === this.id);

    return _.zipObject(
      this.keyNames,
      eventMsg.keys.map(key => {
        return _.find(key, (value, name) => value !== null && name !== "type");
      })
    );
  }
}

interface GameEventEvent<T> {
  name: string;
  event: T;
}

/**
 * Manages game events for a demo file.
 */
export class GameEvents extends EventEmitter {
  gameEventList: GameEvent[] = [];
  private _tickEvents: GameEventEvent<any>[] = [];

  listen(demo: DemoFile) {
    demo.on("svc_GameEventList", this._handleGameEventList.bind(this));

    demo.on("svc_GameEvent", msg => {
      var event = this.gameEventList[msg.eventid];
      if (!event) return;

      var eventVars = event.messageToObject(msg);

      // buffer game events until the end of the tick
      this._tickEvents.push({
        name: event.name,
        event: eventVars
      });
    });

    demo.on("tickend", () => {
      this._tickEvents.forEach(event => {
        this.emit(event.name, event.event);

        this.emit("event", {
          name: event.name,
          event: event.event
        });
      });

      this._tickEvents = [];
    });
  }

  _handleGameEventList(msg: RequiredNonNullable<ICSVCMsg_GameEventList>) {
    for (let descriptor of msg.descriptors) {
      this.gameEventList[descriptor.eventid] = new GameEvent(descriptor);
    }
  }
}
