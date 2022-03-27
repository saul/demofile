"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Projectile = void 0;
const baseentity_1 = require("./baseentity");
/**
 * Represents a grenade projectile.
 */
class Projectile extends baseentity_1.BaseEntity {
    /**
     * @returns {GrenadeType} Type of grenade that this projectile is.
     */
    get grenadeType() {
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
exports.Projectile = Projectile;
//# sourceMappingURL=projectile.js.map