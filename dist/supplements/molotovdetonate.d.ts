import { Player } from "../entities/player";
import { Projectile } from "../entities/projectile";
import { ISupplementInfo } from "./supplementinfo";
export interface IMolotovDetonateEvent {
    thrower: Player;
    projectile: Projectile;
}
declare const supplement: ISupplementInfo;
export default supplement;
