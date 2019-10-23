import { DemoFile } from "../demo";
import { CCSPlayer, CCSPlayerResource, Vector } from "../sendtabletypes";
import { IPlayerInfo } from "../stringtables";
import { BaseEntity } from "./baseentity";
import { Weapon } from "./weapon";
export const enum LifeState {
  Alive = 0,
  Dying = 1,
  Dead = 2
}
export interface IPlayerRoundStats {
  /**
   * Kills dealt
   */
  kills: number;
  /**
   * Damage dealt
   */
  damage: number;
  /**
   * Total value of equipment (snapshot at the end of buy time)
   */
  equipmentValue: number;
  /**
   * Money remaining (snapshot at the end of buy time)
   */
  moneySaved: number;
  /**
   * Money earnt by killing other players
   */
  killReward: number;
  /**
   * Number of seconds this player stayed alive (zero if survived the whole round)
   */
  liveTime: number;
  /**
   * Number of times the player died this round
   */
  deaths: number;
  /**
   * Kills assisted by this player
   */
  assists: number;
  /**
   * Kills that were headshots
   */
  headShotKills: number;
  /**
   * Number of times the player achieved the objective (e.g defused the bomb or planted the exploding bomb)
   */
  objective: number;
}
/**
 * Represents an in-game player.
 */
export declare class Player extends BaseEntity<CCSPlayer> {
  clientSlot: number;
  constructor(
    demo: DemoFile,
    index: number,
    classId: number,
    serialNum: number,
    baseline: CCSPlayer
  );
  /**
   * @returns {int} Current health
   */
  readonly health: number;
  readonly eyeAngles: {
    pitch: number;
    yaw: number;
  };
  readonly position: Vector;
  readonly velocity: Vector;
  /**
   * Speed of the entity.
   * @returns Speed in game units.
   */
  readonly speed: number;
  /**
   * @returns Current cash
   */
  readonly account: number;
  readonly lifeState: LifeState;
  /**
   * @returns lifeState == 0
   */
  readonly isAlive: boolean;
  /**
   * @returns User info associated with this player
   */
  readonly userInfo: IPlayerInfo | null;
  /**
   * @returns User ID
   */
  readonly userId: number;
  /**
   * @returns Steam ID
   */
  readonly steamId: string;
  /**
   * @returns Steam 64 ID
   */
  readonly steam64Id: string;
  /**
   * @returns Player name
   */
  readonly name: string;
  /**
   * @returns Is this player fake (i.e. a bot)
   */
  readonly isFakePlayer: boolean;
  /**
   * @returns Is this player a HLTV relay
   */
  readonly isHltv: boolean;
  /**
   * @returns Player armor (0-100)
   */
  readonly armor: number;
  /**
   * @returns Current navmesh place name
   */
  readonly placeName: string;
  /**
   * @returns Currently held weapon
   */
  readonly weapon: Weapon | null;
  /**
   * @returns All weapons helds by this player
   */
  readonly weapons: Weapon[];
  /**
   * @returns Is the player is the bomb zone?
   */
  readonly isInBombZone: boolean;
  /**
   * @returns Is the player in the buy zone?
   */
  readonly isInBuyZone: boolean;
  /**
   * @returns Is the player defusing?
   */
  readonly isDefusing: boolean;
  /**
   * @returns Does the player have a defuser?
   */
  readonly hasDefuser: boolean;
  /**
   * @returns Does the player have a helmet?
   */
  readonly hasHelmet: boolean;
  /**
   * Retrieves the value of an array property on the singleton entity DT_CSPlayerResource.
   * @param {string} propName - Name of the property on DT_CSPlayerResource to retrieve
   * @returns {*} Property value
   */
  resourceProp<
    TableName extends keyof CCSPlayerResource,
    TableKeys extends keyof CCSPlayerResource[TableName],
    ElementType extends "000" extends TableKeys
      ? CCSPlayerResource[TableName][TableKeys]
      : never
  >(tableName: TableName): ElementType;
  /**
   * @returns How many kills the player has made
   */
  readonly kills: number;
  /**
   * @returns How many assists the player has made
   */
  readonly assists: number;
  /**
   * @returns How many times the player has died
   */
  readonly deaths: number;
  /**
   * @returns Cash that this player has spent this round
   */
  readonly cashSpendThisRound: number;
  /**
   * @returns Cash that the player has spent all game
   */
  readonly cashSpendTotal: number;
  /**
   * @returns Whether the player holds the C4
   */
  readonly hasC4: boolean;
  /**
   * @returns Score of the player
   */
  readonly score: number;
  /**
   * @returns MVPs of the player
   */
  readonly mvps: number;
  /**
   * @returns Clantag of the player
   */
  readonly clanTag: string;
  /**
   * @returns Has this player been spotted by any others?
   */
  readonly isSpotted: boolean;
  /**
   * Checks if this player has been spotted by the other.
   * Note that this still returns true if spotted by the other player even if
   * the other player is dead.
   * @param other - Other player entity
   * @returns Is this player spotted by the other?
   */
  isSpottedBy(other: Player): boolean;
  /**
   * @returns Alive players that have spotted this player
   */
  readonly allSpotters: Player[];
  /**
   * Checks if this player has spotted another.
   * Can still return true even if this player is dead.
   * @param other - Other player entity
   * @returns Has this player spotted the other?
   */
  hasSpotted(other: Player): boolean;
  /**
   * @returns Alive players that this player has spotted
   */
  readonly allSpotted: Player[];
  /**
   * @param other - Other player entity
   * @returns Whether the two players are on the same team
   */
  isFriendly(other: Player): boolean;
  /**
   * @returns Is scoped
   */
  readonly isScoped: boolean;
  /**
   * @returns Is walking
   */
  readonly isWalking: boolean;
  /**
   * @returns Duration of a flash that hit the player
   */
  readonly flashDuration: number;
  /**
   * @returns Current equipment value
   */
  readonly currentEquipmentValue: number;
  /**
   * @returns Round start equipment value
   */
  readonly roundStartEquipmentValue: number;
  /**
   * @returns Freeze time end equipment value
   */
  readonly freezeTimeEndEquipmentValue: number;
  /**
   * @returns Object representing the player's performance per round
   */
  readonly matchStats: IPlayerRoundStats[];
}
