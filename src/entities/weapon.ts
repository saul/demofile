import { BaseEntity } from './baseentity';
import { Player } from './player';
import { CWeaponCSBase } from '../netprops';

interface IItemDefinition {
  itemName: string;
  className: string;
}

const itemDefinitionIndexMap: { [itemIndex: number]: IItemDefinition | undefined } = {
  1: {
    itemName: 'Desert Eagle',
    className: 'weapon_deagle',
  },
  2: {
    itemName: 'Dual Berettas',
    className: 'weapon_elite',
  },
  3: {
    itemName: 'Five-SeveN',
    className: 'weapon_fiveseven',
  },
  4: {
    itemName: 'Glock-18',
    className: 'weapon_glock',
  },
  7: {
    itemName: 'AK-47',
    className: 'weapon_ak47',
  },
  8: {
    itemName: 'AUG',
    className: 'weapon_aug',
  },
  9: {
    itemName: 'AWP',
    className: 'weapon_awp',
  },
  10: {
    itemName: 'FAMAS',
    className: 'weapon_famas',
  },
  11: {
    itemName: 'G3SG1',
    className: 'weapon_g3sg1',
  },
  13: {
    itemName: 'Galil AR',
    className: 'weapon_galilar',
  },
  14: {
    itemName: 'M249',
    className: 'weapon_m249',
  },
  16: {
    itemName: 'M4A4',
    className: 'weapon_m4a1',
  },
  17: {
    itemName: 'MAC-10',
    className: 'weapon_mac10',
  },
  19: {
    itemName: 'P90',
    className: 'weapon_p90',
  },
  23: {
    itemName: 'MP5-SD',
    className: 'weapon_mp5sd'
  },
  24: {
    itemName: 'UMP-45',
    className: 'weapon_ump45',
  },
  25: {
    itemName: 'XM1014',
    className: 'weapon_xm1014',
  },
  26: {
    itemName: 'PP-Bizon',
    className: 'weapon_bizon',
  },
  27: {
    itemName: 'MAG-7',
    className: 'weapon_mag7',
  },
  28: {
    itemName: 'Negev',
    className: 'weapon_negev',
  },
  29: {
    itemName: 'Sawed-Off',
    className: 'weapon_sawedoff',
  },
  30: {
    itemName: 'Tec-9',
    className: 'weapon_tec9',
  },
  31: {
    itemName: 'Zeus x27',
    className: 'weapon_taser',
  },
  32: {
    itemName: 'P2000',
    className: 'weapon_hkp2000',
  },
  33: {
    itemName: 'MP7',
    className: 'weapon_mp7',
  },
  34: {
    itemName: 'MP9',
    className: 'weapon_mp9',
  },
  35: {
    itemName: 'Nova',
    className: 'weapon_nova',
  },
  36: {
    itemName: 'P250',
    className: 'weapon_p250',
  },
  38: {
    itemName: 'SCAR-20',
    className: 'weapon_scar20',
  },
  39: {
    itemName: 'SG 553',
    className: 'weapon_sg556',
  },
  40: {
    itemName: 'SSG 08',
    className: 'weapon_ssg08',
  },
  42: {
    itemName: 'Knife',
    className: 'weapon_knife',
  },
  43: {
    itemName: 'Flashbang',
    className: 'weapon_flashbang',
  },
  44: {
    itemName: 'High Explosive Grenade',
    className: 'weapon_hegrenade',
  },
  45: {
    itemName: 'Smoke Grenade',
    className: 'weapon_smokegrenade',
  },
  46: {
    itemName: 'Molotov',
    className: 'weapon_molotov',
  },
  47: {
    itemName: 'Decoy Grenade',
    className: 'weapon_decoy',
  },
  48: {
    itemName: 'Incendiary Grenade',
    className: 'weapon_incgrenade',
  },
  49: {
    itemName: 'C4 Explosive',
    className: 'weapon_c4',
  },
  59: {
    itemName: 'Knife',
    className: 'weapon_knife_t',
  },
  60: {
    itemName: 'M4A1-S',
    className: 'weapon_m4a1_silencer',
  },
  61: {
    itemName: 'USP-S',
    className: 'weapon_usp_silencer',
  },
  63: {
    itemName: 'CZ75-Auto',
    className: 'weapon_cz75a',
  },
  64: {
    itemName: 'R8 Revolver',
    className: 'weapon_revolver',
  },
  500: {
    itemName: 'Bayonet',
    className: 'weapon_bayonet',
  },
  505: {
    itemName: 'Flip Knife',
    className: 'weapon_knife_flip',
  },
  506: {
    itemName: 'Gut Knife',
    className: 'weapon_knife_gut',
  },
  507: {
    itemName: 'Karambit',
    className: 'weapon_knife_karambit',
  },
  508: {
    itemName: 'M9 Bayonet',
    className: 'weapon_knife_m9_bayonet',
  },
  509: {
    itemName: 'Huntsman Knife',
    className: 'weapon_knife_tactical',
  },
  512: {
    itemName: 'Falchion Knife',
    className: 'weapon_knife_falchion',
  },
  514: {
    itemName: 'Bowie Knife',
    className: 'weapon_knife_survival_bowie',
  },
  515: {
    itemName: 'Butterfly Knife',
    className: 'weapon_knife_butterfly',
  },
  516: {
    itemName: 'Shadow Dag',
    className: 'weapon_knife_push',
  },
  519: {
    itemName: 'Ursus Knife',
    className: 'weapon_knife_ursus',
  },
  520: {
    itemName: 'Navaja Knife',
    className: 'weapon_knife_gypsy_jackknife',
  },
  522: {
    itemName: 'Stiletto Knife',
    className: 'weapon_knife_stiletto',
  },
  523: {
    itemName: 'Talon Knife',
    className: 'weapon_knife_widowmaker',
  }
};

/**
 * Represents an in-game weapon (guns, grenades, knifes).
 */
export class Weapon extends BaseEntity<CWeaponCSBase> {
  /**
   * @returns Item definition index
   */
  get itemIndex(): number {
    return this.getProp('DT_ScriptCreatedItem', 'm_iItemDefinitionIndex');
  }

  /**
   * @returns Name of the weapon (e.g. "Five-SeveN")
   */
  get itemName(): string | null {
    var weaponId = this.itemIndex;
    var itemDefinition = itemDefinitionIndexMap[weaponId];
    return itemDefinition !== undefined ? itemDefinition.itemName : null;
  }

  /**
   * @returns Entity class name of the weapon (e.g. "weapon_ak47")
   */
  get className(): string | null {
    var weaponId = this.itemIndex;
    var itemDefinition = itemDefinitionIndexMap[weaponId];
    return itemDefinition !== undefined ? itemDefinition.className : null;
  }

  /**
   * @returns Previous owner
   */
  get prevOwner(): Player | null {
    var handle = this.getProp('DT_WeaponCSBase', 'm_hPrevOwner');
    return this._demo.entities.getByHandle(handle) as Player | null;
  }
}
