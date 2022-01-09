import { NETMessages, SVCMessages } from "./protobufs/netmessages";
export declare type NetMessageName = keyof typeof NETMessages | keyof typeof SVCMessages;
interface NetMessage {
    decode(buf: Uint8Array): unknown;
}
interface INetMessageDescriptor {
    name: NetMessageName;
    class: NetMessage;
}
export declare const messages: INetMessageDescriptor[];
export declare function findByName(name: NetMessageName): INetMessageDescriptor;
export declare function findByType(type: NETMessages | SVCMessages): INetMessageDescriptor | undefined;
export {};
