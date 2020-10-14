import { CBaseEntity, Vector } from "../sendtabletypes";
import { Networkable } from "./networkable";
import { Team } from "./team";
/**
 * Represents an in-game entity.
 */
export declare class BaseEntity<Props extends CBaseEntity = CBaseEntity> extends Networkable<Props> {
    /**
     * Position of this entity in the game world.
     * @returns World-space coordinates
     */
    get position(): Vector;
    /**
     * @returns Entity which this entity is moving with, if any
     */
    get moveParent(): BaseEntity | null;
    /**
     * @returns Owning entity, if any
     */
    get owner(): BaseEntity | null;
    /**
     * @returns Team number (0: Unassigned, 1: Spectator, 2: Terrorist, 3: Counter-Terrorist)
     */
    get teamNumber(): number;
    /**
     * @returns Team if assigned, null if unassigned.
     */
    get team(): Team | null;
    /**
     * @returns Name of the model that should be rendered for this entity. (e.g. 'models/Weapons/w_eq_smokegrenade_thrown.mdl')
     */
    get modelName(): string | null;
}
