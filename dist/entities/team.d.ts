import { CTeam } from "../sendtabletypes";
import { Networkable } from "./networkable";
import { Player } from "./player";
export declare type TeamName = "SPECTATOR" | "TERRORIST" | "COUNTERTERRORIST";
export declare const enum TeamNumber {
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
    get members(): Player[];
    /**
     * @returns {int} 0: Unassigned, 1: Spectator, 2: Terrorist, 3: Counter-Terrorist
     */
    get teamNumber(): TeamNumber;
    /**
     * @returns Clan name
     */
    get clanName(): string;
    /**
     * @returns 'SPECTATOR', 'TERRORIST' or 'COUNTERTERRORIST'
     */
    get teamName(): TeamName;
    /**
     * @returns Total score
     */
    get score(): number;
    /**
     * @returns First half score
     */
    get scoreFirstHalf(): number;
    /**
     * @returns Second half score
     */
    get scoreSecondHalf(): number;
    /**
     * @returns Team flag image
     */
    get flagImage(): string;
    /**
     * @returns Team logo image
     */
    get logoImage(): string;
}
