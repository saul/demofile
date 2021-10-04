import { CWeaponCSBase } from "../sendtabletypes";
import { BaseEntity } from "./baseentity";
import { itemDefinitionIndexMap } from "./itemdefs";
import { Player } from "./player";

const qualities = [
  "normal",
  "genuine",
  "vintage",
  "unusual",
  "unique",
  "community",
  "developer",
  "selfmade",
  "customized",
  "strange",
  "completed",
  "haunted",
  "tournament",
  "favored"
] as const;

export type ItemQuality = typeof qualities[number];

/**
 * Represents an in-game weapon (guns, grenades, knifes).
 */
export class Weapon extends BaseEntity<CWeaponCSBase> {
  /**
   * @returns Owning player, if any
   */
  get owner(): Player | null {
    return super.owner as Player | null;
  }

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

  /**
   * @returns Amount of ammo in the clip of the weapon
   */
  get clipAmmo(): number {
    return this.getProp("DT_BaseCombatWeapon", "m_iClip1");
  }

  /**
   * @returns The amount ammo this weapon has in reserve
   */
  get reserveAmmo(): number {
    return this.getProp("DT_BaseCombatWeapon", "m_iPrimaryReserveAmmoCount");
  }

  /**
   * @returns The amount of ammo the owner holds for this weapon. Null if no owner.
   */
  get ownerAmmo(): number | null {
    if (!this.owner) return null;
    const ammoType = this.getProp("DT_LocalWeaponData", "m_iPrimaryAmmoType");
    if (ammoType === -1) return null;
    return this.owner.getIndexedProps("m_iAmmo")[ammoType];
  }

  /**
   * @returns Quality of the item.
   */
  get quality(): ItemQuality {
    const quality = this.getProp("DT_ScriptCreatedItem", "m_iEntityQuality");
    return qualities[quality];
  }
}
