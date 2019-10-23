import { CTeam } from "../sendtabletypes";
import { Networkable } from "./networkable";
import { Player } from "./player";
export declare type TeamName = "SPECTATOR" | "TERRORIST" | "COUNTERTERRORIST";
export const enum TeamNumber {
  Unassigned = 0,
  Spectator = 1,
  Terrorists = 2,
  CounterTerrorists = 3
}
/**
 * Represents an in-game team.
 */
export declare class Team extends Networkable<CTeam> {
  /**
   * @returns {Player[]} All players in this team
   */
  readonly members: Player[];
  /**
   * @returns {int} 0: Unassigned, 1: Spectator, 2: Terrorist, 3: Counter-Terrorist
   */
  readonly teamNumber: TeamNumber;
  /**
   * @returns Clan name
   */
  readonly clanName: string;
  /**
   * @returns 'SPECTATOR', 'TERRORIST' or 'COUNTERTERRORIST'
   */
  readonly teamName: TeamName;
  /**
   * @returns Total score
   */
  readonly score: number;
  /**
   * @returns First half score
   */
  readonly scoreFirstHalf: number;
  /**
   * @returns Second half score
   */
  readonly scoreSecondHalf: number;
  /**
   * @returns Team flag image
   */
  readonly flagImage: string;
  /**
   * @returns Team logo image
   */
  readonly logoImage: string;
}
