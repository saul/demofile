import { BaseEntity } from './baseentity';
import { UnknownEntityProps } from '../entities';
import { DemoFile } from '../demo';
import { Vector } from '../props';
import { IPlayerInfo } from '../stringtables';
import { Weapon } from './weapon';

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
export class Player extends BaseEntity<UnknownEntityProps> {
  clientSlot: number;

  constructor(demo: DemoFile, index: number, classId: number, serialNum: number, baseline: UnknownEntityProps) {
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
    return this.getProp('DT_BasePlayer', 'm_iHealth');
  }

  get eyeAngles() {
    return {
      pitch: this.getProp('DT_CSPlayer', 'm_angEyeAngles[0]'),
      yaw: this.getProp('DT_CSPlayer', 'm_angEyeAngles[1]')
    };
  }

  get position(): Vector {
    let xy = this.getProp('DT_CSLocalPlayerExclusive', 'm_vecOrigin');
    return {
      x: xy.x,
      y: xy.y,
      z: this.getProp('DT_CSLocalPlayerExclusive', 'm_vecOrigin[2]')
    };
  }

  get velocity(): Vector {
    return {
      x: this.getProp('DT_LocalPlayerExclusive', 'm_vecVelocity[0]'),
      y: this.getProp('DT_LocalPlayerExclusive', 'm_vecVelocity[1]'),
      z: this.getProp('DT_LocalPlayerExclusive', 'm_vecVelocity[2]')
    };
  }

  /**
   * @returns Current cash
   */
  get account(): number {
    return this.getProp('DT_CSPlayer', 'm_iAccount');
  }

  get lifeState(): LifeState {
    return this.getProp('DT_BasePlayer', 'm_lifeState');
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
    let userInfoTable = this._demo.stringTables.findTableByName('userinfo');
    return userInfoTable ? userInfoTable.entries[this.clientSlot].userData : null;
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
    return this.userInfo!.xuid.toString();
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
    return this.getProp('DT_CSPlayer', 'm_ArmorValue');
  }

  /**
   * @returns Current navmesh place name
   */
  get placeName(): string {
    return this.getProp('DT_BasePlayer', 'm_szLastPlaceName');
  }

  /**
   * @returns Currently held weapon
   */
  get weapon(): Weapon | null {
    return this._demo.entities.getByHandle(this.getProp('DT_BaseCombatCharacter', 'm_hActiveWeapon'));
  }

  /**
   * @returns All weapons helds by this player
   */
  get weapons(): Weapon[] {
    let weapons = [];

    for (let index in this.props.get('m_hMyWeapons')) {
      let weapon = this._demo.entities.getByHandle(this.props.get('m_hMyWeapons')[index]);

      if (weapon) {
        weapons.push(weapon);
      }
    }

    return weapons;
  }

  /**
   * @returns Is the player is the bomb zone?
   */
  get isInBombZone(): boolean {
    return this.getProp('DT_CSPlayer', 'm_bInBombZone');
  }

  /**
   * @returns Is the player in the buy zone?
   */
  get isInBuyZone(): boolean {
    return this.getProp('DT_CSPlayer', 'm_bInBuyZone');
  }

  /**
   * @returns Is the player defusing?
   */
  get isDefusing(): boolean {
    return this.getProp('DT_CSPlayer', 'm_bIsDefusing');
  }

  /**
   * @returns Does the player have a defuser?
   */
  get hasDefuser(): boolean {
    return this.getProp('DT_CSPlayer', 'm_bHasDefuser');
  }

  /**
   * @returns Does the player have a helmet?
   */
  get hasHelmet(): boolean {
    return this.getProp('DT_CSPlayer', 'm_bHasHelmet');
  }

  /**
   * Retrieves the value of an array property on the singleton entity DT_CSPlayerResource.
   * @param {string} propName - Name of the property on DT_CSPlayerResource to retrieve
   * @returns {*} Property value
   */
  resourceProp(propName: string) {
    let pr = this._demo.entities.getSingleton('DT_CSPlayerResource');
    let values = pr.props[propName];
    return values[Object.keys(values)[this.index]];
  }

  /**
   * @returns How many kills the player has made
   */
  get kills(): number {
    return this.resourceProp('m_iKills');
  }

  /**
   * @returns How many assists the player has made
   */
  get assists(): number {
    return this.resourceProp('m_iAssists');
  }

  /**
   * @returns How many times the player has died
   */
  get deaths(): number {
    return this.resourceProp('m_iDeaths');
  }

  /**
   * @returns Cash that this player has spent this round
   */
  get cashSpendThisRound(): number {
    return this.resourceProp('m_iCashSpentThisRound');
  }

  /**
   * @returns Cash that the player has spent all game
   */
  get cashSpendTotal(): number {
    return this.resourceProp('m_iTotalCashSpent');
  }

  /**
   * @returns Whether the player holds the C4
   */
  get hasC4(): boolean {
    let pr = this._demo.entities.getSingleton('DT_CSPlayerResource');
    return pr.getProp('DT_CSPlayerResource', 'm_iPlayerC4') === this.index;
  }

  /**
   * @returns Score of the player
   */
  get score(): number {
    let pr = this._demo.entities.getSingleton('DT_CSPlayerResource');
    let score = pr.props['m_iScore'];
    return score[Object.keys(score)[this.index]];
  }

  /**
   * @returns MVPs of the player
   */
  get mvps(): number {
    let pr = this._demo.entities.getSingleton('DT_CSPlayerResource');
    let mvps = pr.props['m_iMVPs'];
    return mvps[Object.keys(mvps)[this.index]];
  }

  /**
   * @returns Clantag of the player
   */
  get clanTag(): string {
    let pr = this._demo.entities.getSingleton('DT_CSPlayerResource');
    let clantag = pr.props['m_szClan'];
    return clantag[Object.keys(clantag)[this.index]];
  }

  /**
   * @returns Has this player been spotted by any others?
   */
  get isSpotted(): boolean {
    return this.getProp('DT_BaseEntity', 'm_bSpotted');
  }

  /**
   * Checks if this player has been spotted by the other.
   * Note that this still returns true if spotted by the other player even if
   * the other player is dead.
   * @param other - Other player entity
   * @returns Is this player spotted by the other?
   */
  isSpottedBy(other: Player): boolean {
    let bit = other.clientSlot;
    let mask = null;

    if (other.clientSlot < 32) {
      mask = this.getProp('m_bSpottedByMask', '000');
    } else {
      bit = other.clientSlot - 32;
      mask = this.getProp('m_bSpottedByMask', '001');
    }

    return (mask & (1 << bit)) !== 0;
  }

  /**
   * @returns Alive players that have spotted this player
   */
  get allSpotters(): Player[] {
    return this._demo.players
      .filter(p => p.clientSlot !== this.clientSlot && p.isAlive && this.isSpottedBy(p));
  }

  /**
   * Checks if this player has spotted another.
   * Can still return true even if this player is dead.
   * @param other - Other player entity
   * @returns Has this player spotted the other?
   */
  hasSpotted(other: Player): boolean {
    return other.isSpottedBy(this);
  }

  /**
   * @returns Alive players that this player has spotted
   */
  get allSpotted(): Player[] {
    return this._demo.players
      .filter(p => p.clientSlot !== this.clientSlot && p.isAlive && this.hasSpotted(p));
  }

  /**
   * @param other - Other player entity
   * @returns Whether the two players are on the same team
   */
  isFriendly(other: Player): boolean {
    let sameTeam = this.teamNumber === other.teamNumber;
    let teammatesAreEnemies = this._demo.conVars.vars.get('mp_teammates_are_enemies') || 0;

    return sameTeam && !teammatesAreEnemies;
  }

  /**
   * @returns Is scoped
   */
  get isScoped(): boolean {
    return this.getProp('DT_CSPlayer', 'm_bIsScoped');
  }

  /**
   * @returns Is walking
   */
  get isWalking(): boolean {
    return this.getProp('DT_CSPlayer', 'm_bIsWalking');
  }

  /**
   * @returns Duration of a flash that hit the player
   */
  get flashDuration(): number {
    return this.getProp('DT_CSPlayer', 'm_flFlashDuration');
  }

  /**
   * @returns Current equipment value
   */
  get currentEquipmentValue(): number {
    return this.getProp('DT_CSPlayer', 'm_unCurrentEquipmentValue');
  }

  /**
   * @returns Round start equipment value
   */
  get roundStartEquipmentValue(): number {
    return this.getProp('DT_CSPlayer', 'm_unRoundStartEquipmentValue');
  }

  /**
   * @returns Freeze time end equipment value
   */
  get freezeTimeEndEquipmentValue(): number {
    return this.getProp('DT_CSPlayer', 'm_unFreezetimeEndEquipmentValue');
  }

  /**
   * @returns Object representing the player's performance per round
   */
  get matchStats(): IPlayerRoundStats[] {
    return Object.keys(this.props['m_iMatchStats_Kills'])
      .map(roundIdx => {
        return {
          kills: this.props['m_iMatchStats_Kills'][roundIdx],
          damage: this.props['m_iMatchStats_Damage'][roundIdx],
          equipmentValue: this.props['m_iMatchStats_EquipmentValue'][roundIdx],
          moneySaved: this.props['m_iMatchStats_MoneySaved'][roundIdx],
          killReward: this.props['m_iMatchStats_KillReward'][roundIdx],
          liveTime: this.props['m_iMatchStats_LiveTime'][roundIdx],
          deaths: this.props['m_iMatchStats_Deaths'][roundIdx],
          assists: this.props['m_iMatchStats_Assists'][roundIdx],
          headShotKills: this.props['m_iMatchStats_HeadShotKills'][roundIdx],
          objective: this.props['m_iMatchStats_Objective'][roundIdx]
        };
      });
  }
}
