'use strict';

const BaseEntity = require('./baseentity.js');

/**
 * Represents the game rules.
 */
class GameRules extends BaseEntity {
  /**
   * @returns {bool} Is the game currently in 'warmup' mode?
   */
  get isWarmup() {
    return this.getProp('DT_CSGameRules', 'm_bWarmupPeriod');
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
   * @returns {int} Total number of rounds played.
   */
  get roundsPlayed() {
    return this.getProp('DT_CSGameRules', 'm_totalRoundsPlayed');
  }

  /**
   * @returns {string} 'first', 'second', 'halftime' or 'postgame'
   */
  get phase() {
    const gamePhases = {
      2: 'first',
      3: 'second',
      4: 'halftime',
      5: 'postgame'
    };

    let phase = this.getProp('DT_CSGameRules', 'm_gamePhase');
    return gamePhases[phase];
  }
}

module.exports = GameRules;
