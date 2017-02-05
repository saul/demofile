'use strict';

const BaseEntity = require('./baseentity.js');

/**
 * Represents the game rules.
 */
class GameRules extends BaseEntity {
  /**
   * @returns {bool}
   */
  get isWarmup() {
    return this.getProp('DT_CSGameRules', 'm_bWarmupPeriod');
  }

  /**
   * @returns {int}
   */
  get roundNumber() {
    return this.getProp('DT_CSGameRules', 'm_totalRoundsPlayed');
  }

  /**
   * One of: 'first', 'second', 'halftime', 'postgame'
   * @returns {string}
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
