import * as assert from "assert";
import {
  CSVCMsgGameEvent,
  CSVCMsgGameEventList_descriptorT
} from "./protobufs/netmessages";

enum EventKeyType {
  TYPE_STRING = 1,
  TYPE_FLOAT,
  TYPE_LONG,
  TYPE_SHORT,
  TYPE_BYTE,
  TYPE_BOOL,
  TYPE_UINT64,
  TYPE_WSTRING
}

export class GameEvent {
  public name: string;
  public id: number;
  public keyNames: string[];

  constructor(descriptor: CSVCMsgGameEventList_descriptorT) {
    this.name = descriptor.name;
    this.id = descriptor.eventid;
    this.keyNames = descriptor.keys.map(key => key.name);
  }

  public messageToObject(
    eventMsg: CSVCMsgGameEvent
  ): Record<string, string | number | boolean | Uint8Array | Long | undefined> {
    assert(eventMsg.eventid === this.id);

    const event: Record<
      string,
      string | number | boolean | Uint8Array | Long | undefined
    > = {};
    for (let i = 0; i < this.keyNames.length; ++i) {
      const keyName = this.keyNames[i]!;
      const value = eventMsg.keys[i]!;

      switch (value.type as EventKeyType) {
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
