import { CBaseEntity, Vector } from "../sendtabletypes";
import { Networkable } from "./networkable";
import { Team } from "./team";
/**
 * Represents an in-game entity.
 */
export declare class BaseEntity<
  Props extends CBaseEntity = CBaseEntity
> extends Networkable<Props> {
  /**
   * Position of this entity in the game world.
   * @returns World-space coordinates
   */
  readonly position: Vector;
  /**
   * @returns Entity which this entity is moving with, if any
   */
  readonly moveParent: BaseEntity | null;
  /**
   * @returns Owning entity, if any
   */
  readonly owner: BaseEntity | null;
  /**
   * @returns Team number (0: Unassigned, 1: Spectator, 2: Terrorist, 3: Counter-Terrorist)
   */
  readonly teamNumber: number;
  /**
   * @returns Team if assigned, null if unassigned.
   */
  readonly team: Team | null;
  /**
   * @returns Name of the model that should be rendered for this entity. (e.g. 'models/Weapons/w_eq_smokegrenade_thrown.mdl')
   */
  readonly modelName: string | null;
}
