import { Player } from "../entities/player";
import { ISupplementInfo } from "./supplementinfo";
import { Weapon } from "../entities/weapon";
export interface IItemPurchaseEvent {
    player: Player;
    count: number;
    weaponId: number;
    itemName: string;
    weapon: Weapon | undefined;
}
declare const supplement: ISupplementInfo;
export default supplement;
