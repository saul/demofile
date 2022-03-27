import { Player } from "../entities/player";
import { Projectile } from "../entities/projectile";
import { Vector } from "../sendtabletypes";
import { ISupplementInfo } from "./supplementinfo";
export interface IGrenadeTrajectoryEvent {
    projectile: Projectile;
    thrower: Player;
    trajectory: ReadonlyArray<Vector>;
}
declare const supplement: ISupplementInfo;
export default supplement;
