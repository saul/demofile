"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseentity_1 = require("./baseentity");
const itemdefs_1 = require("./itemdefs");
/**
 * Represents an in-game weapon (guns, grenades, knifes).
 */
class Weapon extends baseentity_1.BaseEntity {
    /**
     * @returns Item definition index
     */
    get itemIndex() {
        return this.getProp("DT_ScriptCreatedItem", "m_iItemDefinitionIndex");
    }
    /**
     * @returns Name of the weapon (e.g. "Five-SeveN")
     */
    get itemName() {
        const weaponId = this.itemIndex;
        const itemDefinition = itemdefs_1.itemDefinitionIndexMap[weaponId];
        return itemDefinition !== undefined ? itemDefinition.itemName : null;
    }
    /**
     * @returns Entity class name of the weapon (e.g. "weapon_ak47")
     */
    get className() {
        const weaponId = this.itemIndex;
        const itemDefinition = itemdefs_1.itemDefinitionIndexMap[weaponId];
        return itemDefinition !== undefined ? itemDefinition.className : null;
    }
    /**
     * @returns Previous owner
     */
    get prevOwner() {
        const handle = this.getProp("DT_WeaponCSBase", "m_hPrevOwner");
        return this._demo.entities.getByHandle(handle);
    }
}
exports.Weapon = Weapon;
//# sourceMappingURL=weapon.js.map