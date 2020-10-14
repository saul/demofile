"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameRules = void 0;
const networkable_1 = require("./networkable");
/**
 * Represents the game rules.
 */
class GameRules extends networkable_1.Networkable {
    /**
     * @returns Is the game currently in 'warmup' mode?
     */
    get isWarmup() {
        return this.getProp("DT_CSGameRules", "m_bWarmupPeriod");
    }
    /**
     * @deprecated Use `GameRules#roundsPlayed` instead.
     */
    get roundNumber() {
        return this.roundsPlayed;
    }
    /**
     * This value is incremented when the scores are updated at round end.
     * If you need to keep track of the current round number, store this value
     * at each `round_start`.
     *
     * @returns Total number of rounds played.
     */
    get roundsPlayed() {
        return this.getProp("DT_CSGameRules", "m_totalRoundsPlayed");
    }
    /**
     * @returns 'first', 'second', 'halftime' or 'postgame'
     */
    get phase() {
        const gamePhases = {
            2: "first",
            3: "second",
            4: "halftime",
            5: "postgame"
        };
        const phase = this.getProp("DT_CSGameRules", "m_gamePhase");
        return gamePhases[phase];
    }
}
exports.GameRules = GameRules;
//# sourceMappingURL=gamerules.js.map