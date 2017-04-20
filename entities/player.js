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

    for(let index in this.props['m_hMyWeapons']) {
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
   * @returns {int} How many kills the player has made
   */
  get kills() {
    let pr = this._demo.entities.getSingleton('DT_CSPlayerResource');
    let kills = pr.props['m_iKills'];
    return kills[Object.keys(kills)[this.index]];
  }

  /**
   * @returns {int} How many assists the player has made
   */
  get assists() {
    let pr = this._demo.entities.getSingleton('DT_CSPlayerResource');
    let assists = pr.props['m_iAssists'];
    return assists[Object.keys(assists)[this.index]];
  }

  /**
   * @returns {int} How many times the player has died
   */
  get deaths() {
    let pr = this._demo.entities.getSingleton('DT_CSPlayerResource');
    let deaths = pr.props['m_iDeaths'];
    return deaths[Object.keys(deaths)[this.index]];
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
  get clantag() {
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

    return Array.from({length: 64}, (_, i) => i)
      .filter(i => {
        let bit = i % 32;
        let mask = masks[(i/32) >> 0];
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
}

module.exports = Player;
