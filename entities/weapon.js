'use strict';

const BaseEntity = require('./baseentity.js');

var itemDefinitionIndexMap = {
  1: 'Desert Eagle',
  2: 'Dual Berettas',
  3: 'Five-SeveN',
  4: 'Glock-18',
  7: 'AK-47',
  8: 'AUG',
  9: 'AWP',
  10: 'FAMAS',
  11: 'G3SG1',
  13: 'Galil AR', 14: 'M249',
  16: 'M4A4',
  17: 'MAC-10',
  19: 'P90',
  24: 'UMP-45',
  25: 'XM1014',
  26: 'PP-Bizon',
  27: 'MAG-7',
  28: 'Negev',
  29: 'Sawed-Off',
  30: 'Tec-9',
  31: 'Zeus x27',
  32: 'P2000',
  33: 'MP7',
  34: 'MP9',
  35: 'Nova',
  36: 'P250',
  38: 'SCAR-20',
  39: 'SG 553',
  40: 'SSG 08',
  42: 'Knife',
  43: 'Flashbang',
  44: 'High Explosive Grenade',
  45: 'Smoke Grenade',
  46: 'Molotov',
  47: 'Decoy Grenade',
  48: 'Incendiary Grenade',
  49: 'C4 Explosive',
  58: 'Music Kit',
  59: 'Knife',
  60: 'M4A1-S',
  61: 'USP-S',
  63: 'CZ75-Auto',
  64: 'R8 Revolver',
  500: 'Bayonet',
  505: 'Flip Knife',
  506: 'Gut Knife',
  507: 'Karambit',
  508: 'M9 Bayonet',
  509: 'Huntsman Knife',
  512: 'Falchion Knife',
  514: 'Bowie Knife',
  515: 'Butterfly Knife',
  516: 'Shadow Dag',
};

/**
 * Represents an in-game weapon (guns, grenades, knifes).
 */
class Weapon extends BaseEntity {
  /**
   * @returns {string} Name of the weapon
   */
  get name() {
    var weaponId = this.getProp('DT_ScriptCreatedItem', 'm_iItemDefinitionIndex');

    return itemDefinitionIndexMap[weaponId] != undefined ? itemDefinitionIndexMap[weaponId] : 'unknown';
  }

  /**
   * @returns {Player|null} Previous Owner
   */
  get prevOwner() {
    var userId = this.getProp('DT_WeaponCSBase', 'm_hPrevOwner'),
        user = null;

    if (user = this._demo.entities.getByUserId(userId)) {
      return user;
    }

    return null;
  }
}

module.exports = Weapon;
