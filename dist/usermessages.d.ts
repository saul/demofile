/// <reference types="node" />
import { EventEmitter } from "events";
import { DemoFile } from "./demo";
import "./usermessagetypes";
/**
 * Handles user messages for a demo file.
 */
export declare class UserMessages extends EventEmitter {
    listen(demo: DemoFile): void;
    private _handleUserMessage;
}
