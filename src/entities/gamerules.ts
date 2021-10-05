import { CCSGameRulesProxy } from "../sendtabletypes";
import { Networkable } from "./networkable";

/**
 * Represents the game rules.
 */
export class GameRules extends Networkable<CCSGameRulesProxy> {
  /**
   * @returns Is the game currently in 'warmup' mode?
   */
  get isWarmup(): boolean {
    return this.getProp("DT_CSGameRules", "m_bWarmupPeriod");
  }

  /**
   * @deprecated Use `GameRules#roundsPlayed` instead.
   */
  get roundNumber(): number {
    return this.roundsPlayed;
  }

  /**
   * This value is incremented when the scores are updated at round end.
   * If you need to keep track of the current round number, store this value
   * at each `round_start`.
   *
   * @returns Total number of rounds played.
   */
  get roundsPlayed(): number {
    return this.getProp("DT_CSGameRules", "m_totalRoundsPlayed");
  }

  /**
   * @returns 'first', 'second', 'halftime' or 'postgame'
   */
  get phase(): string {
    const gamePhases: { [phase: number]: string } = {
      2: "first",
      3: "second",
      4: "halftime",
      5: "postgame"
    };

    const phase = this.getProp("DT_CSGameRules", "m_gamePhase");
    return gamePhases[phase]!;
  }
}
