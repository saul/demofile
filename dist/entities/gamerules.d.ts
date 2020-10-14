import { CCSGameRulesProxy } from "../sendtabletypes";
import { Networkable } from "./networkable";
/**
 * Represents the game rules.
 */
export declare class GameRules extends Networkable<CCSGameRulesProxy> {
    /**
     * @returns Is the game currently in 'warmup' mode?
     */
    get isWarmup(): boolean;
    /**
     * @deprecated Use `GameRules#roundsPlayed` instead.
     */
    get roundNumber(): number;
    /**
     * This value is incremented when the scores are updated at round end.
     * If you need to keep track of the current round number, store this value
     * at each `round_start`.
     *
     * @returns Total number of rounds played.
     */
    get roundsPlayed(): number;
    /**
     * @returns 'first', 'second', 'halftime' or 'postgame'
     */
    get phase(): string;
}
