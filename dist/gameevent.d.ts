/// <reference types="long" />
import * as _ from "lodash";
import { RequiredNonNullable } from "./pervasive";
import { CSVCMsg_GameEventList, ICSVCMsg_GameEvent } from "./protobufs/netmessages";
export declare class GameEvent {
    name: string;
    id: number;
    keyNames: string[];
    constructor(descriptor: RequiredNonNullable<CSVCMsg_GameEventList.Idescriptor_t>);
    messageToObject(eventMsg: RequiredNonNullable<ICSVCMsg_GameEvent>): _.Dictionary<string | number | boolean | RequiredNonNullable<Uint8Array> | RequiredNonNullable<Long> | undefined>;
}
