import { DemoFile } from "../demo";
import { IEntityChangeEvent } from "../entities";
import { Player } from "../entities/player";
import { ISupplementInfo } from "./supplementinfo";
import { Weapon } from "../entities/weapon";
import { itemDefinitionIndexMap } from "../entities/itemdefs";

export interface IItemPurchaseEvent {
  player: Player;
  count: number;
  weaponId: number;
  itemName: string;
  weapon: Weapon | undefined;
}

const equipmentIdMap: Record<string, string | undefined> = {
  "50": "C4",
  "51": "Kevlar",
  "52": "Assault Suit",
  "53": "Heavy Assault Suit",
  "54": "Night Vision Goggles",
  "55": "Defuser",
  "56": "Cutters"
};

const supplement: ISupplementInfo = {
  emits: ["itemPurchase"],
  setup: function purchase(demo: DemoFile) {
    let pendingPurchases: IItemPurchaseEvent[] = [];

    // Wait until tick end to find the entity.
    // m_iWeaponPurchasesThisRound is always updated before the weapon entity is created.
    function onTickEnd() {
      for (const pending of pendingPurchases) {
        // Some items won't have an entity representation, e.g. kevlar.
        let weapon = pending.player.weapons.find(
          w => w.itemIndex === pending.weaponId
        );

        // todo: why does molotov need remapping to incendiary?
        if (!weapon && pending.weaponId === 46) {
          weapon = pending.player.weapons.find(w => w.itemIndex === 48);
        }

        demo.emit("itemPurchase", { ...pending, weapon });
      }

      pendingPurchases = [];
    }

    function onEntityChange(e: IEntityChangeEvent) {
      if (!(e.entity instanceof Player)) return;

      // PERF: add ability to listen on specific tables
      for (const change of e.changes) {
        if (change.tableName !== "m_iWeaponPurchasesThisRound") continue;

        const weaponId = parseInt(change.varName, 10);
        const oldValue = (change.oldValue || 0) as number;
        const newValue = change.newValue as number;

        const count = newValue - oldValue;
        if (count > 0) {
          pendingPurchases.push({
            player: e.entity,
            weaponId,
            itemName:
              itemDefinitionIndexMap[weaponId]?.itemName ||
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

export default supplement;
