/// <reference types="long" />
import { CSVCMsgGameEvent, CSVCMsgGameEventList_descriptorT } from "./protobufs/netmessages";
export declare class GameEvent {
    name: string;
    id: number;
    keyNames: string[];
    constructor(descriptor: CSVCMsgGameEventList_descriptorT);
    messageToObject(eventMsg: CSVCMsgGameEvent): Record<string, string | number | boolean | Uint8Array | Long | undefined>;
}
