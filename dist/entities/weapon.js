"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weapon = void 0;
const baseentity_1 = require("./baseentity");
const itemdefs_1 = require("./itemdefs");
/**
 * Represents an in-game weapon (guns, grenades, knifes).
 */
class Weapon extends baseentity_1.BaseEntity {
    /**
     * @returns Owning player, if any
     */
    get owner() {
        return super.owner;
    }
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
    /**
     * @returns Amount of ammo in the clip of the weapon
     */
    get clipAmmo() {
        return this.getProp("DT_BaseCombatWeapon", "m_iClip1");
    }
    /**
     * @returns The amount ammo this weapon has in reserve
     */
    get reserveAmmo() {
        return this.getProp("DT_BaseCombatWeapon", "m_iPrimaryReserveAmmoCount");
    }
    /**
     * @returns The amount of ammo the owner holds for this weapon. Null if no owner.
     */
    get ownerAmmo() {
        if (!this.owner)
            return null;
        const ammoType = this.getProp("DT_LocalWeaponData", "m_iPrimaryAmmoType");
        if (ammoType === -1)
            return null;
        return this.owner.getIndexedProps("m_iAmmo")[ammoType];
    }
}
exports.Weapon = Weapon;
//# sourceMappingURL=weapon.js.map