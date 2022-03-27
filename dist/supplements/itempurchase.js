"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const player_1 = require("../entities/player");
const itemdefs_1 = require("../entities/itemdefs");
const equipmentIdMap = {
    "50": "C4",
    "51": "Kevlar",
    "52": "Assault Suit",
    "53": "Heavy Assault Suit",
    "54": "Night Vision Goggles",
    "55": "Defuser",
    "56": "Cutters"
};
const supplement = {
    emits: ["itemPurchase"],
    setup: function purchase(demo) {
        let pendingPurchases = [];
        // Wait until tick end to find the entity.
        // m_iWeaponPurchasesThisRound is always updated before the weapon entity is created.
        function onTickEnd() {
            for (const pending of pendingPurchases) {
                // Some items won't have an entity representation, e.g. kevlar.
                let weapon = pending.player.weapons.find(w => w.itemIndex === pending.weaponId);
                // todo: why does molotov need remapping to incendiary?
                if (!weapon && pending.weaponId === 46) {
                    weapon = pending.player.weapons.find(w => w.itemIndex === 48);
                }
                demo.emit("itemPurchase", { ...pending, weapon });
            }
            pendingPurchases = [];
        }
        function onEntityChange(e) {
            var _a;
            if (!(e.entity instanceof player_1.Player))
                return;
            // PERF: add ability to listen on specific tables
            for (const change of e.changes) {
                if (change.tableName !== "m_iWeaponPurchasesThisRound")
                    continue;
                const weaponId = parseInt(change.varName, 10);
                const oldValue = (change.oldValue || 0);
                const newValue = change.newValue;
                const count = newValue - oldValue;
                if (count > 0) {
                    pendingPurchases.push({
                        player: e.entity,
                        weaponId,
                        itemName: ((_a = itemdefs_1.itemDefinitionIndexMap[weaponId]) === null || _a === void 0 ? void 0 : _a.itemName) ||
                            equipmentIdMap[weaponId] ||
                            "Unknown",
                        count,
                        weapon: undefined
                    });
                }
            }
        }
        demo.on("tickend", onTickEnd);
        demo.entities.on("change", onEntityChange);
        return () => {
            demo.off("tickend", onTickEnd);
            demo.entities.off("change", onEntityChange);
        };
    }
};
exports.default = supplement;
//# sourceMappingURL=itempurchase.js.map