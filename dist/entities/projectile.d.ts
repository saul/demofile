import { CBaseCSGrenadeProjectile } from "../sendtabletypes";
import { BaseEntity } from "./baseentity";
export declare type GrenadeType = "explosive" | "flashbang" | "molotov" | "incendiary" | "decoy" | "smoke";
/**
 * Represents a grenade projectile.
 */
export declare class Projectile extends BaseEntity<CBaseCSGrenadeProjectile> {
    /**
     * @returns {GrenadeType} Type of grenade that this projectile is.
     */
    get grenadeType(): GrenadeType;
}
