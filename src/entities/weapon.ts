import { CWeaponCSBase } from "../sendtabletypes";
import { BaseEntity } from "./baseentity";
import { itemDefinitionIndexMap } from "./itemdefs";
import { Player } from "./player";

/**
 * Represents an in-game weapon (guns, grenades, knifes).
 */
export class Weapon extends BaseEntity<CWeaponCSBase> {
  /**
   * @returns Item definition index
   */
  get itemIndex(): number {
    return this.getProp("DT_ScriptCreatedItem", "m_iItemDefinitionIndex");
  }

  /**
   * @returns Name of the weapon (e.g. "Five-SeveN")
   */
  get itemName(): string | null {
    const weaponId = this.itemIndex;
    const itemDefinition = itemDefinitionIndexMap[weaponId];
    return itemDefinition !== undefined ? itemDefinition.itemName : null;
  }

  /**
   * @returns Entity class name of the weapon (e.g. "weapon_ak47")
   */
  get className(): string | null {
    const weaponId = this.itemIndex;
    const itemDefinition = itemDefinitionIndexMap[weaponId];
    return itemDefinition !== undefined ? itemDefinition.className : null;
  }

  /**
   * @returns Previous owner
   */
  get prevOwner(): Player | null {
    const handle = this.getProp("DT_WeaponCSBase", "m_hPrevOwner");
    return this._demo.entities.getByHandle(handle) as Player | null;
  }
}
