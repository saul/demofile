import { EventEmitter } from "events";
import { DemoFile } from "./demo";
import { GameEvent } from "./gameevent";
import { CSVCMsgGameEventList } from "./protobufs/netmessages";
import { annotateEvent } from "./eventtypes";

interface GameEventEvent<T> {
  name: string;
  event: T;
}

/**
 * Manages game events for a demo file.
 */
export class GameEvents extends EventEmitter {
  public gameEventList: GameEvent[] = [];
  private _tickEvents: Array<GameEventEvent<any>> = [];

  public listen(demo: DemoFile): void {
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
        event: annotateEvent(
          entities,
          event.name,
          eventVars
        ) as typeof eventVars
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

  private _handleGameEventList(msg: CSVCMsgGameEventList) {
    for (const descriptor of msg.descriptors) {
      this.gameEventList[descriptor.eventid] = new GameEvent(descriptor);
    }
  }
}
