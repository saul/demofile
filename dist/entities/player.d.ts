import { DemoFile } from "../demo";
import { CCSPlayer, CCSPlayerResource, Vector } from "../sendtabletypes";
import { IPlayerInfo } from "../stringtables";
import { BaseEntity } from "./baseentity";
import { Weapon } from "./weapon";
export declare const enum LifeState {
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
    private _steam64IdCache;
    constructor(demo: DemoFile, index: number, classId: number, serialNum: number, baseline: CCSPlayer);
    /**
     * @returns {int} Current health
     */
    get health(): number;
    get eyeAngles(): {
        pitch: number;
        yaw: number;
    };
    get position(): Vector;
    get velocity(): Vector;
    /**
     * Speed of the entity.
     * @returns Speed in game units.
     */
    get speed(): number;
    /**
     * @returns Current cash
     */
    get account(): number;
    get lifeState(): LifeState;
    /**
     * @returns lifeState == 0
     */
    get isAlive(): boolean;
    /**
     * @returns User info associated with this player
     */
    get userInfo(): IPlayerInfo | null;
    /**
     * @returns User ID
     */
    get userId(): number;
    /**
     * @returns Steam ID
     */
    get steamId(): string;
    /**
     * @returns Steam 64 ID
     */
    get steam64Id(): string;
    /**
     * @returns Player name
     */
    get name(): string;
    /**
     * @returns Is this player fake (i.e. a bot)
     */
    get isFakePlayer(): boolean;
    /**
     * @returns Is this player a HLTV relay
     */
    get isHltv(): boolean;
    /**
     * @returns Player armor (0-100)
     */
    get armor(): number;
    /**
     * @returns Current navmesh place name
     */
    get placeName(): string;
    /**
     * @returns Currently held weapon
     */
    get weapon(): Weapon | null;
    /**
     * @returns All weapons helds by this player
     */
    get weapons(): Weapon[];
    /**
     * @returns Is the player is the bomb zone?
     */
    get isInBombZone(): boolean;
    /**
     * @returns Is the player in the buy zone?
     */
    get isInBuyZone(): boolean;
    /**
     * @returns Is the player defusing?
     */
    get isDefusing(): boolean;
    /**
     * @returns Does the player have a defuser?
     */
    get hasDefuser(): boolean;
    /**
     * @returns Does the player have a helmet?
     */
    get hasHelmet(): boolean;
    /**
     * @returns Does the player is controlling a BOT?
     */
    get isControllingBot(): boolean;
    /**
     * Retrieves the value of an array property on the singleton entity DT_CSPlayerResource.
     * @param {string} propName - Name of the property on DT_CSPlayerResource to retrieve
     * @returns {*} Property value
     */
    resourceProp<TableName extends keyof CCSPlayerResource, TableKeys extends keyof CCSPlayerResource[TableName], ElementType extends "000" extends TableKeys ? CCSPlayerResource[TableName][TableKeys] : never>(tableName: TableName): ElementType;
    /**
     * @returns How many kills the player has made
     */
    get kills(): number;
    /**
     * @returns How many assists the player has made
     */
    get assists(): number;
    /**
     * @returns How many times the player has died
     */
    get deaths(): number;
    /**
     * @returns Cash that this player has spent this round
     */
    get cashSpendThisRound(): number;
    /**
     * @returns Cash that the player has spent all game
     */
    get cashSpendTotal(): number;
    /**
     * @returns Whether the player holds the C4
     */
    get hasC4(): boolean;
    /**
     * @returns Score of the player
     */
    get score(): number;
    /**
     * @returns MVPs of the player
     */
    get mvps(): number;
    /**
     * @returns Clantag of the player
     */
    get clanTag(): string;
    /**
     * @returns Has this player been spotted by any others?
     */
    get isSpotted(): boolean;
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
    get allSpotters(): Player[];
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
    get allSpotted(): Player[];
    /**
     * @param other - Other player entity
     * @returns Whether the two players are on the same team
     */
    isFriendly(other: Player): boolean;
    /**
     * @returns Is scoped
     */
    get isScoped(): boolean;
    /**
     * @returns Is walking
     */
    get isWalking(): boolean;
    /**
     * @returns Player is transitioning from ducked -> standing or standing -> ducked
     */
    get isDucking(): boolean;
    /**
     * @returns Is ducked
     */
    get isDucked(): boolean;
    /**
     * @returns Duration of a flash that hit the player
     */
    get flashDuration(): number;
    /**
     * @returns Current equipment value
     */
    get currentEquipmentValue(): number;
    /**
     * @returns Round start equipment value
     */
    get roundStartEquipmentValue(): number;
    /**
     * @returns Freeze time end equipment value
     */
    get freezeTimeEndEquipmentValue(): number;
    /**
     * @returns Object representing the player's performance per round
     */
    get matchStats(): IPlayerRoundStats[];
}
