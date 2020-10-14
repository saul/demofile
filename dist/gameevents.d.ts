/// <reference types="node" />
import { EventEmitter } from "events";
import { DemoFile } from "./demo";
import { GameEvent } from "./gameevent";
/**
 * Manages game events for a demo file.
 */
export declare class GameEvents extends EventEmitter {
    gameEventList: GameEvent[];
    private _tickEvents;
    listen(demo: DemoFile): void;
    private _handleGameEventList;
}
