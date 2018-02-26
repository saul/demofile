'use strict';

const BaseEntity = require('./baseentity.js');

/**
 * Represents an in-game player.
 */
class Player extends BaseEntity {
  constructor(demo, index, classId, serialNum, baseline) {
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

  get position() {
    let xy = this.getProp('DT_CSLocalPlayerExclusive', 'm_vecOrigin');
    return {
      x: xy.x,
      y: xy.y,
      z: this.getProp('DT_CSLocalPlayerExclusive', 'm_vecOrigin[2]')
    };
  }

  /**
   * @returns {int} Current cash
   */
  get account() {
    return this.getProp('DT_CSPlayer', 'm_iAccount');
  }

  /**
   * @returns {int} 0: Alive, 1: Dying, 2: Dead
   */
  get lifeState() {
    return this.getProp('DT_BasePlayer', 'm_lifeState');
  }

  /**
   * @returns {bool} lifeState == 0
   */
  get isAlive() {
    return this.lifeState === 0;
  }

  /**
   * @returns {PlayerInfo|null} User info associated with this player
   */
  get userInfo() {
    let userInfoTable = this._demo.stringTables.findTableByName('userinfo');
    return userInfoTable.entries[this.clientSlot].userData;
  }

  /**
   * @returns {int} User ID
   */
  get userId() {
    return this.userInfo.userId;
  }

  /**
   * @returns {string} Steam ID
   */
  get steamId() {
    return this.userInfo.guid;
  }

  /**
   * @returns {string} Steam 64 ID
   */
  get steam64Id() {
    return this.userInfo.xuid.toString();
  }

  /**
   * @returns {string} Player name
   */
  get name() {
    return this.userInfo.name;
  }

  /**
   * @returns {bool} Is this player fake (i.e. a bot)
   */
  get isFakePlayer() {
    return this.userInfo.fakePlayer;
  }

  /**
   * @returns {bool} Is this player a HLTV relay
   */
  get isHltv() {
    return this.userInfo.isHltv;
  }

  /**
   * @returns {int} Player armor (0-100)
   */
  get armor() {
    return this.getProp('DT_CSPlayer', 'm_ArmorValue');
  }

  /**
   * @returns {string} Current navmesh place name
   */
  get placeName() {
    return this.getProp('DT_BasePlayer', 'm_szLastPlaceName');
  }

  /**
   * @returns {Entity|null} Currently held weapon
   */
  get weapon() {
    return this._demo.entities.getByHandle(this.getProp('DT_BaseCombatCharacter', 'm_hActiveWeapon'));
  }

  /**
   * @returns {Entity[]} All weapons helds by this player
   */
  get weapons() {
    let weapons = [];

    for (let index in this.props['m_hMyWeapons']) {
      let weapon = this._demo.entities.getByHandle(this.props['m_hMyWeapons'][index]);

      if (weapon) {
        weapons.push(weapon);
      }
    }

    return weapons;
  }

  /**
   * @returns {bool} Is the player is the bomb zone?
   */
  get isInBombZone() {
    return this.getProp('DT_CSPlayer', 'm_bInBombZone');
  }

  /**
   * @returns {bool} Is the player in the buy zone?
   */
  get isInBuyZone() {
    return this.getProp('DT_CSPlayer', 'm_bInBuyZone');
  }

  /**
   * @returns {bool} Is the player defusing?
   */
  get isDefusing() {
    return this.getProp('DT_CSPlayer', 'm_bIsDefusing');
  }

  /**
   * @returns {bool} Does the player have a defuser?
   */
  get hasDefuser() {
    return this.getProp('DT_CSPlayer', 'm_bHasDefuser');
  }

  /**
   * @returns {bool} Does the player have a helmet?
   */
  get hasHelmet() {
    return this.getProp('DT_CSPlayer', 'm_bHasHelmet');
  }

  /**
   * Retrieves the value of an array property on the singleton entity DT_CSPlayerResource.
   * @param {string} propName - Name of the property on DT_CSPlayerResource to retrieve
   * @returns {*} Property value
   */
  resourceProp(propName) {
    let pr = this._demo.entities.getSingleton('DT_CSPlayerResource');
    let values = pr.props[propName];
    return values[Object.keys(values)[this.index]];
  }

  /**
   * @returns {int} How many kills the player has made
   */
  get kills() {
    return this.resourceProp('m_iKills');
  }

  /**
   * @returns {int} How many assists the player has made
   */
  get assists() {
    return this.resourceProp('m_iAssists');
  }

  /**
   * @returns {int} How many times the player has died
   */
  get deaths() {
    return this.resourceProp('m_iDeaths');
  }

  /**
   * @returns {int} Cash that this player has spent this round
   */
  get cashSpendThisRound() {
    return this.resourceProp('m_iCashSpentThisRound');
  }

  /**
   * @returns {int} Cash that the player has spent all game
   */
  get cashSpendTotal() {
    return this.resourceProp('m_iTotalCashSpent');
  }

  /**
   * @returns {bool} Whether the player holds the C4
   */
  get hasC4() {
    let pr = this._demo.entities.getSingleton('DT_CSPlayerResource');
    return pr.getProp('DT_CSPlayerResource', 'm_iPlayerC4') === this.index;
  }

  /**
   * @returns {int} Score of the player
   */
  get score() {
    let pr = this._demo.entities.getSingleton('DT_CSPlayerResource');
    let score = pr.props['m_iScore'];
    return score[Object.keys(score)[this.index]];
  }

  /**
   * @returns {int} MVPs of the player
   */
  get mvps() {
    let pr = this._demo.entities.getSingleton('DT_CSPlayerResource');
    let mvps = pr.props['m_iMVPs'];
    return mvps[Object.keys(mvps)[this.index]];
  }

  /**
   * @returns {string} Clantag of the player
   */
  get clanTag() {
    let pr = this._demo.entities.getSingleton('DT_CSPlayerResource');
    let clantag = pr.props['m_szClan'];
    return clantag[Object.keys(clantag)[this.index]];
  }

  /**
   * @returns {bool} Has this player been spotted by any others?
   */
  get isSpotted() {
    return this.getProp('DT_BaseEntity', 'm_bSpotted');
  }

  /**
   * @param {Player} other - Other player entity
   * @returns {bool} Is this player spotted by the other?
   */
  isSpottedBy(other) {
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
   * @returns {Player[]} Players that have spotted this player
   */
  get allSpotters() {
    let masks = [
      this.getProp('m_bSpottedByMask', '000'),
      this.getProp('m_bSpottedByMask', '001')
    ];

    return Array.from({ length: 64 }, (_, i) => i)
      .filter(i => {
        let bit = i % 32;
        let mask = masks[(i / 32) >> 0];
        return (mask & (1 << bit)) !== 0;
      })
      .map(clientSlot => this._demo.entities.entities[clientSlot + 1]);
  }

  /**
   * @param {Player} other - Other player entity
   * @returns {bool} Has this player spotted the other?
   */
  hasSpotted(other) {
    return other.isSpottedBy(this);
  }

  /**
   * @returns {Player[]} All players that this player has spotted
   */
  get allSpotted() {
    return this._demo.players
      .filter(p => p.clientSlot !== this.clientSlot && this.hasSpotted(p));
  }

  /**
   * @param {Player} other - Other player entity
   * @returns {bool} Whether the two players are on the same team
   */
  isFriendly(other) {
    let sameTeam = this.teamNumber === other.teamNumber;
    let teammatesAreEnemies = this._demo.conVars.vars['mp_teammates_are_enemies'] || 0;

    return sameTeam && !teammatesAreEnemies;
  }

  /**
   * @returns {bool} Is scoped
   */
  get isScoped() {
    return this.getProp('DT_CSPlayer', 'm_bIsScoped');
  }

  /**
   * @returns {bool} Is walking
   */
  get isWalking() {
    return this.getProp('DT_CSPlayer', 'm_bIsWalking');
  }

  /**
   * @returns {float} Duration of a flash that hit the player
   */
  get flashDuration() {
    return this.getProp('DT_CSPlayer', 'm_flFlashDuration');
  }

  /**
   * @returns {int} Current equipment value
   */
  get currentEquipmentValue() {
    return this.getProp('DT_CSPlayer', 'm_unCurrentEquipmentValue');
  }

  /**
   * @returns {int} Round start equipment value
   */
  get roundStartEquipmentValue() {
    return this.getProp('DT_CSPlayer', 'm_unRoundStartEquipmentValue');
  }

  /**
   * @returns {int} Freeze time end equipment value
   */
  get freezeTimeEndEquipmentValue() {
    return this.getProp('DT_CSPlayer', 'm_unFreezetimeEndEquipmentValue');
  }

  /**
   * @returns {Object[]} Object representing the player's performance per round
   * @property {string} kills - Kills dealt
   * @property {string} damage - Damage dealt
   * @property {string} equipmentValue - Total value of equipment (snapshot at the end of buy time)
   * @property {string} moneySaved - Money remaining (snapshot at the end of buy time)
   * @property {string} killReward - Money earnt by killing other players
   * @property {string} liveTime - Number of seconds this player stayed alive (zero if survived the whole round)
   * @property {string} deaths - Number of times the player died this round
   * @property {string} assists - Kills assisted by this player
   * @property {string} headShotKills - Kills that were headshots
   * @property {string} objective - Number of times the player achieved the objective (e.g defused the bomb or planted the exploding bomb)
   */
  get matchStats() {
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

module.exports = Player;
