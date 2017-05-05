'use strict';

const BaseEntity = require('./baseentity.js');

var itemDefinitionIndexMap = {
  1: {
    itemName: 'Desert Eagle',
    name: 'weapon_deagle',
  },
  2: {
    itemName: 'Dual Berettas',
    name: 'weapon_elite',
  },
  3: {
    itemName: 'Five-SeveN',
    name: 'weapon_fiveseven',
  },
  4: {
    itemName: 'Glock-18',
    name: 'weapon_glock',
  },
  7: {
    itemName: 'AK-47',
    name: 'weapon_ak47',
  },
  8: {
    itemName: 'AUG',
    name: 'weapon_aug',
  },
  9: {
    itemName: 'AWP',
    name: 'weapon_awp',
  },
  10: {
    itemName: 'FAMAS',
    name: 'weapon_famas',
  },
  11: {
    itemName: 'G3SG1',
    name: 'weapon_g3sg1',
  },
  13: {
    itemName: 'Galil AR',
    name: 'weapon_galilar',
  },
  14: {
    itemName: 'M249',
    name: 'weapon_m249',
  },
  16: {
    itemName: 'M4A4',
    name: 'weapon_m4a1',
  },
  17: {
    itemName: 'MAC-10',
    name: 'weapon_mac10',
  },
  19: {
    itemName: 'P90',
    name: 'weapon_p90',
  },
  24: {
    itemName: 'UMP-45',
    name: 'weapon_ump45',
  },
  25: {
    itemName: 'XM1014',
    name: 'weapon_xm1014',
  },
  26: {
    itemName: 'PP-Bizon',
    name: 'weapon_bizon',
  },
  27: {
    itemName: 'MAG-7',
    name: 'weapon_mag7',
  },
  28: {
    itemName: 'Negev',
    name: 'weapon_negev',
  },
  29: {
    itemName: 'Sawed-Off',
    name: 'weapon_sawedoff',
  },
  30: {
    itemName: 'Tec-9',
    name: 'weapon_tec9',
  },
  31: {
    itemName: 'Zeus x27',
    name: 'weapon_taser',
  },
  32: {
    itemName: 'P2000',
    name: 'weapon_hkp2000',
  },
  33: {
    itemName: 'MP7',
    name: 'weapon_mp7',
  },
  34: {
    itemName: 'MP9',
    name: 'weapon_mp9',
  },
  35: {
    itemName: 'Nova',
    name: 'weapon_nova',
  },
  36: {
    itemName: 'P250',
    name: 'weapon_p250',
  },
  38: {
    itemName: 'SCAR-20',
    name: 'weapon_scar20',
  },
  39: {
    itemName: 'SG 553',
    name: 'weapon_sg556',
  },
  40: {
    itemName: 'SSG 08',
    name: 'weapon_ssg08',
  },
  42: {
    itemName: 'Knife',
    name: 'weapon_knife',
  },
  43: {
    itemName: 'Flashbang',
    name: 'weapon_flashbang',
  },
  44: {
    itemName: 'High Explosive Grenade',
    name: 'weapon_hegrenade',
  },
  45: {
    itemName: 'Smoke Grenade',
    name: 'weapon_smokegrenade',
  },
  46: {
    itemName: 'Molotov',
    name: 'weapon_molotov',
  },
  47: {
    itemName: 'Decoy Grenade',
    name: 'weapon_decoy',
  },
  48: {
    itemName: 'Incendiary Grenade',
    name: 'weapon_incgrenade',
  },
  49: {
    itemName: 'C4 Explosive',
    name: 'weapon_c4',
  },
  59: {
    itemName: 'Knife',
    name: 'weapon_knife_t',
  },
  60: {
    itemName: 'M4A1-S',
    name: 'weapon_m4a1_silencer',
  },
  61: {
    itemName: 'USP-S',
    name: 'weapon_usp_silencer',
  },
  63: {
    itemName: 'CZ75-Auto',
    name: 'weapon_cz75a',
  },
  64: {
    itemName: 'R8 Revolver',
    name: 'weapon_revolver',
  },
  500: {
    itemName: 'Bayonet',
    name: 'weapon_bayonet',
  },
  505: {
    itemName: 'Flip Knife',
    name: 'weapon_knife_flip',
  },
  506: {
    itemName: 'Gut Knife',
    name: 'weapon_knife_gut',
  },
  507: {
    itemName: 'Karambit',
    name: 'weapon_knife_karambit',
  },
  508: {
    itemName: 'M9 Bayonet',
    name: 'weapon_knife_m9_bayonet',
  },
  509: {
    itemName: 'Huntsman Knife',
    name: 'weapon_knife_tactical',
  },
  512: {
    itemName: 'Falchion Knife',
    name: 'weapon_knife_falchion',
  },
  514: {
    itemName: 'Bowie Knife',
    name: 'weapon_knife_survival_bowie',
  },
  515: {
    itemName: 'Butterfly Knife',
    name: 'weapon_knife_butterfly',
  },
  516: {
    itemName: 'Shadow Dag',
    name: 'weapon_knife_push',
  },
};

/**
 * Represents an in-game weapon (guns, grenades, knifes).
 */
class Weapon extends BaseEntity {
  /**
   * @returns {integer} Item index
   */
  get itemIndex() {
    return this.getProp('DT_ScriptCreatedItem', 'm_iItemDefinitionIndex');
  }

  /**
   * @returns {string} Name of the weapon
   */
  get itemName() {
    var weaponId = this.itemIndex;

    return itemDefinitionIndexMap[weaponId] != undefined ? itemDefinitionIndexMap[weaponId].itemName : 'unknown';
  }

  get name() {
    var weaponId = this.itemIndex;

    return itemDefinitionIndexMap[weaponId] != undefined ? itemDefinitionIndexMap[weaponId].name : 'unknown';
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
