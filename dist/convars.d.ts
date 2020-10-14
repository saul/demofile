/// <reference types="node" />
import { EventEmitter } from "events";
import { DemoFile } from "./demo";
interface IConVarChangeEvent {
    name: string;
    value: string;
    oldValue?: string;
}
export declare interface ConVars {
    /**
     * Fired when any console variable is changed (e.g., 'mp_buytime').
     */
    on(event: "change" | string, listener: (event: IConVarChangeEvent) => void): this;
    emit(name: "change" | string, event: IConVarChangeEvent): boolean;
}
/**
 * Manages console variables.
 */
export declare class ConVars extends EventEmitter {
    vars: Map<string, string>;
    listen(demo: DemoFile): void;
}
export {};
