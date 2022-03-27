import { CBaseCSGrenadeProjectile } from "../sendtabletypes";
import { BaseEntity } from "./baseentity";

export type GrenadeType =
  | "explosive"
  | "flashbang"
  | "molotov"
  | "incendiary"
  | "decoy"
  | "smoke";

/**
 * Represents a grenade projectile.
 */
export class Projectile extends BaseEntity<CBaseCSGrenadeProjectile> {
  /**
   * @returns {GrenadeType} Type of grenade that this projectile is.
   */
  get grenadeType(): GrenadeType {
    switch (this.modelName) {
      case "models/Weapons/w_eq_fraggrenade_dropped.mdl":
        return "explosive";
      case "models/Weapons/w_eq_flashbang_dropped.mdl":
        return "flashbang";
      case "models/Weapons/w_eq_molotov_dropped.mdl":
        return "molotov";
      case "models/Weapons/w_eq_incendiarygrenade_dropped.mdl":
        return "incendiary";
      case "models/Weapons/w_eq_decoy_dropped.mdl":
        return "decoy";
      case "models/Weapons/w_eq_smokegrenade_thrown.mdl":
        return "smoke";
      default:
        throw new Error(`Unknown projectile with model: ${this.modelName}`);
    }
  }
}
