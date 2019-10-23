import { CWeaponCSBase } from "../sendtabletypes";
import { BaseEntity } from "./baseentity";
import { Player } from "./player";
/**
 * Represents an in-game weapon (guns, grenades, knifes).
 */
export declare class Weapon extends BaseEntity<CWeaponCSBase> {
  /**
   * @returns Item definition index
   */
  readonly itemIndex: number;
  /**
   * @returns Name of the weapon (e.g. "Five-SeveN")
   */
  readonly itemName: string | null;
  /**
   * @returns Entity class name of the weapon (e.g. "weapon_ak47")
   */
  readonly className: string | null;
  /**
   * @returns Previous owner
   */
  readonly prevOwner: Player | null;
}
