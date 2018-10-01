import { BaseEntity } from './baseentity';
import { Player } from './player';
import { UnknownEntityProps } from '../entities';

export type TeamName = 'SPECTATOR' | 'TERRORIST' | 'COUNTERTERRORIST';

export const enum TeamNumber {
  Unassigned = 0,
  Spectator,
  Terrorists,
  CounterTerrorists
}

/**
 * Represents an in-game team.
 */
export class Team extends BaseEntity<UnknownEntityProps> {
  /**
   * @returns {Player[]} All players in this team
   */
  get members(): Player[] {
    return this.getProp('DT_Team', '"player_array"').map(index => this._demo.entities.entities[index]);
  }

  /**
   * @returns {int} 0: Unassigned, 1: Spectator, 2: Terrorist, 3: Counter-Terrorist
   */
  get teamNumber(): TeamNumber {
    return this.getProp('DT_Team', 'm_iTeamNum');
  }

  /**
   * @returns Clan name
   */
  get clanName(): string {
    return this.getProp('DT_Team', 'm_szClanTeamname');
  }

  /**
   * @returns 'SPECTATOR', 'TERRORIST' or 'COUNTERTERRORIST'
   */
  get teamName(): TeamName {
    return this.getProp('DT_Team', 'm_szTeamname');
  }

  /**
   * @returns Total score
   */
  get score(): number {
    return this.getProp('DT_Team', 'm_scoreTotal');
  }

  /**
   * @returns First half score
   */
  get scoreFirstHalf(): number {
    return this.getProp('DT_Team', 'm_scoreFirstHalf');
  }

  /**
   * @returns Second half score
   */
  get scoreSecondHalf(): number {
    return this.getProp('DT_Team', 'm_scoreSecondHalf');
  }

  /**
   * @returns Team flag image
   */
  get flagImage(): string {
    return this.getProp('DT_Team', 'm_szTeamFlagImage');
  }

  /**
   * @returns Team logo image
   */
  get logoImage(): string {
    return this.getProp('DT_Team', 'm_szTeamLogoImage');
  }
}
