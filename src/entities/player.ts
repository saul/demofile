import { decodeCrosshairCode, ICrosshairInfo } from "../crosshair";
import { DemoFile } from "../demo";
import { CCSPlayer, CCSPlayerResource, Vector } from "../sendtabletypes";
import { IPlayerInfo } from "../stringtables";
import { BaseEntity } from "./baseentity";
import { Weapon } from "./weapon";

export const enum LifeState {
  Alive = 0,
  Dying,
  Dead
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
export class Player extends BaseEntity<CCSPlayer> {
  public clientSlot: number;

  private _steam64IdCache: string | undefined;

  constructor(
    demo: DemoFile,
    index: number,
    classId: number,
    serialNum: number,
    baseline: CCSPlayer
  ) {
    super(demo, index, classId, serialNum, baseline);

    /**
     * The 'client slot' is the index into various arrays such as the userinfo table.
     */
    this.clientSlot = index - 1;
  }

  /**
   * @returns {int} Current health
   */
  get health() {
    return this.getProp("DT_BasePlayer", "m_iHealth");
  }

  get eyeAngles() {
    return {
      pitch: this.getProp("DT_CSPlayer", "m_angEyeAngles[0]"),
      yaw: this.getProp("DT_CSPlayer", "m_angEyeAngles[1]")
    };
  }

  get position(): Vector {
    const xy = this.getProp("DT_CSLocalPlayerExclusive", "m_vecOrigin");
    return {
      x: xy.x,
      y: xy.y,
      z: this.getProp("DT_CSLocalPlayerExclusive", "m_vecOrigin[2]")
    };
  }

  get velocity(): Vector {
    return {
      x: this.getProp("DT_LocalPlayerExclusive", "m_vecVelocity[0]"),
      y: this.getProp("DT_LocalPlayerExclusive", "m_vecVelocity[1]"),
      z: this.getProp("DT_LocalPlayerExclusive", "m_vecVelocity[2]")
    };
  }

  /**
   * Speed of the entity.
   * @returns Speed in game units.
   */
  get speed(): number {
    const vel = this.velocity;
    return Math.sqrt(vel.x * vel.x + vel.y * vel.y + vel.z * vel.z);
  }

  /**
   * @returns Current cash
   */
  get account(): number {
    return this.getProp("DT_CSPlayer", "m_iAccount");
  }

  get lifeState(): LifeState {
    return this.getProp("DT_BasePlayer", "m_lifeState");
  }

  /**
   * @returns lifeState == 0
   */
  get isAlive(): boolean {
    return this.lifeState === LifeState.Alive;
  }

  /**
   * @returns User info associated with this player
   */
  get userInfo(): IPlayerInfo | null {
    const userInfoTable = this._demo.stringTables.findTableByName("userinfo");
    return userInfoTable
      ? userInfoTable.entries[this.clientSlot].userData
      : null;
  }

  /**
   * @returns User ID
   */
  get userId(): number {
    return this.userInfo!.userId;
  }

  /**
   * @returns Steam ID
   */
  get steamId(): string {
    return this.userInfo!.guid;
  }

  /**
   * @returns Steam 64 ID
   */
  get steam64Id(): string {
    if (this._steam64IdCache === undefined)
      this._steam64IdCache = this.userInfo!.xuid.toString();

    return this._steam64IdCache;
  }

  /**
   * @returns Player name
   */
  get name() {
    return this.userInfo!.name;
  }

  /**
   * @returns Is this player fake (i.e. a bot)
   */
  get isFakePlayer(): boolean {
    return this.userInfo!.fakePlayer;
  }

  /**
   * @returns Is this player a HLTV relay
   */
  get isHltv(): boolean {
    return this.userInfo!.isHltv;
  }

  /**
   * @returns Player armor (0-100)
   */
  get armor(): number {
    return this.getProp("DT_CSPlayer", "m_ArmorValue");
  }

  /**
   * @returns Current navmesh place name
   */
  get placeName(): string {
    return this.getProp("DT_BasePlayer", "m_szLastPlaceName");
  }

  /**
   * @returns Currently held weapon
   */
  get weapon(): Weapon | null {
    return this._demo.entities.getByHandle(
      this.getProp("DT_BaseCombatCharacter", "m_hActiveWeapon")
    ) as Weapon | null;
  }

  /**
   * @returns All weapons helds by this player
   */
  get weapons(): Weapon[] {
    return (this.getIndexedProps("m_hMyWeapons")
      .map(handle => this._demo.entities.getByHandle(handle))
      .filter(ent =>
        ent ? ent instanceof Weapon : false
      ) as unknown) as Weapon[];
  }

  /**
   * @returns Is the player is the bomb zone?
   */
  get isInBombZone(): boolean {
    return this.getProp("DT_CSPlayer", "m_bInBombZone");
  }

  /**
   * @returns Is the player in the buy zone?
   */
  get isInBuyZone(): boolean {
    return this.getProp("DT_CSPlayer", "m_bInBuyZone");
  }

  /**
   * @returns Is the player defusing?
   */
  get isDefusing(): boolean {
    return this.getProp("DT_CSPlayer", "m_bIsDefusing");
  }

  /**
   * @returns Does the player have a defuser?
   */
  get hasDefuser(): boolean {
    return this.getProp("DT_CSPlayer", "m_bHasDefuser");
  }

  /**
   * @returns Does the player have a helmet?
   */
  get hasHelmet(): boolean {
    return this.getProp("DT_CSPlayer", "m_bHasHelmet");
  }

  /**
   * @returns Does the player is controlling a BOT?
   */
  get isControllingBot(): boolean {
    return this.getProp("DT_CSPlayer", "m_bIsControllingBot");
  }

  /**
   * Retrieves the value of an array property on the singleton entity DT_CSPlayerResource.
   * @param {string} propName - Name of the property on DT_CSPlayerResource to retrieve
   * @returns {*} Property value
   */
  public resourceProp<
    TableName extends keyof CCSPlayerResource,
    TableKeys extends keyof CCSPlayerResource[TableName],
    ElementType extends "000" extends TableKeys
      ? CCSPlayerResource[TableName][TableKeys]
      : never
  >(tableName: TableName): ElementType {
    // tslint:disable-next-line:no-useless-cast
    const array = this._demo.entities.playerResource.getIndexedProps(
      tableName
    )!;
    return array[this.index] as ElementType;
  }

  /**
   * @returns How many kills the player has made
   */
  get kills(): number {
    return this.resourceProp("m_iKills");
  }

  /**
   * @returns How many assists the player has made
   */
  get assists(): number {
    return this.resourceProp("m_iAssists");
  }

  /**
   * @returns How many times the player has died
   */
  get deaths(): number {
    return this.resourceProp("m_iDeaths");
  }

  /**
   * @returns Cash that this player has spent this round
   */
  get cashSpendThisRound(): number {
    return this.resourceProp("m_iCashSpentThisRound");
  }

  /**
   * @returns Cash that the player has spent all game
   */
  get cashSpendTotal(): number {
    return this.resourceProp("m_iTotalCashSpent");
  }

  /**
   * @returns Whether the player holds the C4
   */
  get hasC4(): boolean {
    const pr = this._demo.entities.playerResource;
    return pr.getProp("DT_CSPlayerResource", "m_iPlayerC4") === this.index;
  }

  /**
   * @returns Score of the player
   */
  get score(): number {
    const pr = this._demo.entities.playerResource;
    return pr.getIndexedProps("m_iScore")[this.index];
  }

  /**
   * @returns MVPs of the player
   */
  get mvps(): number {
    const pr = this._demo.entities.playerResource;
    return pr.getIndexedProps("m_iMVPs")[this.index];
  }

  /**
   * @returns Clantag of the player
   */
  get clanTag(): string {
    const pr = this._demo.entities.playerResource;
    return pr.getIndexedProps("m_szClan")[this.index];
  }

  /**
   * @returns Has this player been spotted by any others?
   */
  get isSpotted(): boolean {
    return this.getProp("DT_BaseEntity", "m_bSpotted");
  }

  /**
   * Checks if this player has been spotted by the other.
   * Note that this still returns true if spotted by the other player even if
   * the other player is dead.
   * @param other - Other player entity
   * @returns Is this player spotted by the other?
   */
  public isSpottedBy(other: Player): boolean {
    let bit = other.clientSlot;
    let mask = null;

    if (other.clientSlot < 32) {
      mask = this.getProp("m_bSpottedByMask", "000");
    } else {
      bit = other.clientSlot - 32;
      mask = this.getProp("m_bSpottedByMask", "001");
    }

    return (mask & (1 << bit)) !== 0;
  }

  /**
   * @returns Alive players that have spotted this player
   */
  get allSpotters(): Player[] {
    return this._demo.players.filter(
      p => p.clientSlot !== this.clientSlot && p.isAlive && this.isSpottedBy(p)
    );
  }

  /**
   * Checks if this player has spotted another.
   * Can still return true even if this player is dead.
   * @param other - Other player entity
   * @returns Has this player spotted the other?
   */
  public hasSpotted(other: Player): boolean {
    return other.isSpottedBy(this);
  }

  /**
   * @returns Alive players that this player has spotted
   */
  get allSpotted(): Player[] {
    return this._demo.players.filter(
      p => p.clientSlot !== this.clientSlot && p.isAlive && this.hasSpotted(p)
    );
  }

  /**
   * @param other - Other player entity
   * @returns Whether the two players are on the same team
   */
  public isFriendly(other: Player): boolean {
    const sameTeam = this.teamNumber === other.teamNumber;
    const teammatesAreEnemies =
      this._demo.conVars.vars.get("mp_teammates_are_enemies") || 0;

    return sameTeam && !teammatesAreEnemies;
  }

  /**
   * @returns Is scoped
   */
  get isScoped(): boolean {
    return this.getProp("DT_CSPlayer", "m_bIsScoped");
  }

  /**
   * @returns Is walking
   */
  get isWalking(): boolean {
    return this.getProp("DT_CSPlayer", "m_bIsWalking");
  }

  /**
   * @returns Player is transitioning from ducked -> standing or standing -> ducked
   */
  get isDucking(): boolean {
    return this.getProp("DT_Local", "m_bDucking");
  }

  /**
   * @returns Is ducked
   */
  get isDucked(): boolean {
    return this.getProp("DT_Local", "m_bDucked");
  }

  /**
   * @returns Duration of a flash that hit the player
   */
  get flashDuration(): number {
    return this.getProp("DT_CSPlayer", "m_flFlashDuration");
  }

  /**
   * @returns Current equipment value
   */
  get currentEquipmentValue(): number {
    return this.getProp("DT_CSPlayer", "m_unCurrentEquipmentValue");
  }

  /**
   * @returns Round start equipment value
   */
  get roundStartEquipmentValue(): number {
    return this.getProp("DT_CSPlayer", "m_unRoundStartEquipmentValue");
  }

  /**
   * @returns Freeze time end equipment value
   */
  get freezeTimeEndEquipmentValue(): number {
    return this.getProp("DT_CSPlayer", "m_unFreezetimeEndEquipmentValue");
  }

  /**
   * @returns Object representing the player's performance per round
   */
  get matchStats(): IPlayerRoundStats[] {
    const kills = this.getIndexedProps("m_iMatchStats_Kills");
    const damage = this.getIndexedProps("m_iMatchStats_Damage");
    const equipmentValue = this.getIndexedProps("m_iMatchStats_EquipmentValue");
    const moneySaved = this.getIndexedProps("m_iMatchStats_MoneySaved");
    const killReward = this.getIndexedProps("m_iMatchStats_KillReward");
    const liveTime = this.getIndexedProps("m_iMatchStats_LiveTime");
    const deaths = this.getIndexedProps("m_iMatchStats_Deaths");
    const assists = this.getIndexedProps("m_iMatchStats_Assists");
    const headShotKills = this.getIndexedProps("m_iMatchStats_HeadShotKills");
    const objective = this.getIndexedProps("m_iMatchStats_Objective");

    const rounds = [];
    for (let roundIdx = 0; roundIdx < kills.length; ++roundIdx) {
      rounds.push({
        kills: kills[roundIdx],
        damage: damage[roundIdx],
        equipmentValue: equipmentValue[roundIdx],
        moneySaved: moneySaved[roundIdx],
        killReward: killReward[roundIdx],
        liveTime: liveTime[roundIdx],
        deaths: deaths[roundIdx],
        assists: assists[roundIdx],
        headShotKills: headShotKills[roundIdx],
        objective: objective[roundIdx]
      });
    }

    return rounds;
  }

  /**
   * @returns Object representing user-customisable crosshair settings.
   */
  get crosshairInfo(): ICrosshairInfo {
    return decodeCrosshairCode(this.resourceProp("m_szCrosshairCodes"));
  }
}
