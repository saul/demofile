'use strict';

const BaseEntity = require('./baseentity.js');

/**
 * Represents an in-game team.
 */
class Team extends BaseEntity {
  /**
   * @returns {Player[]} All players in this team
   */
  get members() {
    return this.getProp('DT_Team', '"player_array"').map(index => this._demo.entities.entities[index]);
  }

  /**
   * @returns {int} 0: Unassigned, 1: Spectator, 2: Terrorist, 3: Counter-Terrorist
   */
  get teamNumber() {
    return this.getProp('DT_Team', 'm_iTeamNum');
  }

  /**
   * @returns {string} Clan name
   */
  get clanName() {
    return this.getProp('DT_Team', 'm_szClanTeamname');
  }

  /**
   * @returns {string} 'SPECTATOR', 'TERRORIST' or 'COUNTERTERRORIST'
   */
  get teamName() {
    return this.getProp('DT_Team', 'm_szTeamname');
  }

  /**
   * @returns {int} Total score
   */
  get score() {
    return this.getProp('DT_Team', 'm_scoreTotal');
  }

  /**
   * @returns {int} First half score
   */
  get scoreFirstHalf() {
    return this.getProp('DT_Team', 'm_scoreFirstHalf');
  }

  /**
   * @returns {int} Second half score
   */
  get scoreSecondHalf() {
    return this.getProp('DT_Team', 'm_scoreSecondHalf');
  }

  /**
   * @returns {string}
   */
  get flagImage() {
    return this.getProp('DT_Team', 'm_szTeamFlagImage');
  }

  /**
   * @returns {string}
   */
  get logoImage() {
    return this.getProp('DT_Team', 'm_szTeamLogoImage');
  }
}

module.exports = Team;
