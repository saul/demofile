"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEntity = void 0;
const networkable_1 = require("./networkable");
/**
 * Represents an in-game entity.
 */
class BaseEntity extends networkable_1.Networkable {
    /**
     * Position of this entity in the game world.
     * @returns World-space coordinates
     */
    get position() {
        const cellWidth = 1 << this.getProp("DT_BaseEntity", "m_cellbits");
        const cellX = this.getProp("DT_BaseEntity", "m_cellX");
        const cellY = this.getProp("DT_BaseEntity", "m_cellY");
        const cellZ = this.getProp("DT_BaseEntity", "m_cellZ");
        const cellOffset = this.getProp("DT_BaseEntity", "m_vecOrigin");
        return {
            x: cellX * cellWidth - 16384 + cellOffset.x,
            y: cellY * cellWidth - 16384 + cellOffset.y,
            z: cellZ * cellWidth - 16384 + cellOffset.z
        };
    }
    /**
     * @returns Entity which this entity is moving with, if any
     */
    get moveParent() {
        // UNSAFE: cast here as move parent will always be a proper entity
        return this._demo.entities.getByHandle(this.getProp("DT_BaseEntity", "moveparent"));
    }
    /**
     * @returns Owning entity, if any
     */
    get owner() {
        // UNSAFE: cast here as owner will always be a proper entity
        return this._demo.entities.getByHandle(this.getProp("DT_BaseEntity", "m_hOwnerEntity"));
    }
    /**
     * @returns Team number (0: Unassigned, 1: Spectator, 2: Terrorist, 3: Counter-Terrorist)
     */
    get teamNumber() {
        return this.getProp("DT_BaseEntity", "m_iTeamNum");
    }
    /**
     * @returns Team if assigned, null if unassigned.
     */
    get team() {
        const teamNum = this.teamNumber;
        if (teamNum === 0) {
            return null;
        }
        return this._demo.entities.teams[teamNum];
    }
    /**
     * @returns Name of the model that should be rendered for this entity. (e.g. 'models/Weapons/w_eq_smokegrenade_thrown.mdl')
     */
    get modelName() {
        const modelprecache = this._demo.stringTables.findTableByName("modelprecache");
        if (!modelprecache) {
            return null;
        }
        return modelprecache.entries[this.getProp("DT_BaseEntity", "m_nModelIndex")]
            .entry;
    }
}
exports.BaseEntity = BaseEntity;
//# sourceMappingURL=baseentity.js.map