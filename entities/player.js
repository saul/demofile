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
    }
  }

  get position() {
    let xy = this.getProp('DT_CSLocalPlayerExclusive', 'm_vecOrigin');
    return {
      x: xy.x,
      y: xy.y,
      z: this.getProp('DT_CSLocalPlayerExclusive', 'm_vecOrigin[2]')
    }
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
   * @returns {bool} getLifeState() == 0
   */
  get isAlive() {
    return this.getLifeState() == 0;
  }

  /**
   * @returns {PlayerInfo}
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
   * @returns {string} Player name
   */
  get name() {
    return this.userInfo.name;
  }

  /**
   * @returns {bool}
   */
  get isFakePlayer() {
    return this.userInfo.fakePlayer;
  }

  /**
   * @returns {bool}
   */
  get isHltv() {
    return this.userInfo.isHltv;
  }

  /**
   * @returns {int}
   */
  get armor() {
    return this.getProp('DT_CSPlayer', 'm_ArmorValue');
  }

  /**
   * @returns {string}
   */
  get placeName() {
    return this.getProp('DT_BasePlayer', 'm_szLastPlaceName');
  }

  /**
   * @returns {Entity|null}
   */
  get weapon() {
    return this._demo.entities.getByHandle(this.getProp('DT_BaseCombatCharacter', 'm_hActiveWeapon'));
  }

  /**
   * @returns {Entity[]}
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
   * @returns {bool}
   */
  get isInBombZone() {
    return this.getProp('DT_CSPlayer', 'm_bInBombZone');
  }

  /**
   * @returns {bool}
   */
  get isInBuyZone() {
    return this.getProp('DT_CSPlayer', 'm_bInBuyZone');
  }

  /**
   * @returns {bool}
   */
  get isDefusing() {
    return this.getProp('DT_CSPlayer', 'm_bIsDefusing');
  }

  /**
   * @returns {bool}
   */
  get hasDefuser() {
    return this.getProp('DT_CSPlayer', 'm_bHasDefuser');
  }

  /**
   * @returns {bool}
   */
  get hasHelmet() {
    return this.getProp('DT_CSPlayer', 'm_bHasHelmet');
  }

  /**
   * @returns {int}
   */
  get kills() {
    let pr = this._demo.entities.getSingleton('DT_CSPlayerResource');
    let kills = pr.props['m_iKills'];
    return kills[Object.keys(kills)[this.index]];
  }

  /**
   * @returns {int}
   */
  get assists() {
    let pr = this._demo.entities.getSingleton('DT_CSPlayerResource');
    let assists = pr.props['m_iAssists'];
    return assists[Object.keys(assists)[this.index]];
  }

  /**
   * @returns {int}
   */
  get deaths() {
    let pr = this._demo.entities.getSingleton('DT_CSPlayerResource');
    let deaths = pr.props['m_iDeaths'];
    return deaths[Object.keys(deaths)[this.index]];
  }

  /**
   * @returns {bool}
   */
  get hasC4() {
    let pr = this._demo.entities.getSingleton('DT_CSPlayerResource');
    return pr.getProp('DT_CSPlayerResource', 'm_iPlayerC4') == this.index;
  }
}

module.exports = Player;
