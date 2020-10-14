import { CWeaponCSBase } from "../sendtabletypes";
import { BaseEntity } from "./baseentity";
import { Player } from "./player";
/**
 * Represents an in-game weapon (guns, grenades, knifes).
 */
export declare class Weapon extends BaseEntity<CWeaponCSBase> {
    /**
     * @returns Owning player, if any
     */
    get owner(): Player | null;
    /**
     * @returns Item definition index
     */
    get itemIndex(): number;
    /**
     * @returns Name of the weapon (e.g. "Five-SeveN")
     */
    get itemName(): string | null;
    /**
     * @returns Entity class name of the weapon (e.g. "weapon_ak47")
     */
    get className(): string | null;
    /**
     * @returns Previous owner
     */
    get prevOwner(): Player | null;
    /**
     * @returns Amount of ammo in the clip of the weapon
     */
    get clipAmmo(): number;
    /**
     * @returns The amount ammo this weapon has in reserve
     */
    get reserveAmmo(): number;
    /**
     * @returns The amount of ammo the owner holds for this weapon. Null if no owner.
     */
    get ownerAmmo(): number | null;
}
