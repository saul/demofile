import assert = require("assert");
import _ = require("lodash");
import {
  CSVCMsg_GameEventList,
  ICSVCMsg_GameEvent
} from "./protobufs/netmessages";

export class GameEvent {
  public name: string;
  public id: number;
  public keyNames: string[];

  constructor(
    descriptor: RequiredNonNullable<CSVCMsg_GameEventList.Idescriptor_t>
  ) {
    this.name = descriptor.name;
    this.id = descriptor.eventid;
    this.keyNames = descriptor.keys.map(key => key.name);
  }

  public messageToObject(eventMsg: RequiredNonNullable<ICSVCMsg_GameEvent>) {
    assert(eventMsg.eventid === this.id);

    return _.zipObject(
      this.keyNames,
      eventMsg.keys.map(key => {
        return _.find(key, (value, name) => value !== null && name !== "type");
      })
    );
  }
}
