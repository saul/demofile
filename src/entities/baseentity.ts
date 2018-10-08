import { CBaseEntity, Vector } from "../sendtabletypes";
import { Networkable } from "./networkable";
import { Team } from "./team";

/**
 * Represents an in-game entity.
 */
export class BaseEntity<
  Props extends CBaseEntity = CBaseEntity
> extends Networkable<Props> {
  /**
   * Position of this entity in the game world.
   * @returns World-space coordinates
   */
  get position(): Vector {
    const cellWidth = 1 << this.getProp("DT_BaseEntity", "m_cellbits")!;
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
  get moveParent(): BaseEntity | null {
    // UNSAFE: cast here as move parent will always be a proper entity
    return (this._demo.entities.getByHandle(
      this.getProp("DT_BaseEntity", "moveparent")
    ) as unknown) as BaseEntity | null;
  }

  /**
   * @returns Owning entity, if any
   */
  get owner(): BaseEntity | null {
    // UNSAFE: cast here as owner will always be a proper entity
    return (this._demo.entities.getByHandle(
      this.getProp("DT_BaseEntity", "m_hOwnerEntity")
    ) as unknown) as BaseEntity | null;
  }

  /**
   * @returns Team number (0: Unassigned, 1: Spectator, 2: Terrorist, 3: Counter-Terrorist)
   */
  get teamNumber(): number {
    return this.getProp("DT_BaseEntity", "m_iTeamNum");
  }

  /**
   * @returns Team if assigned, null if unassigned.
   */
  get team(): Team | null {
    const teamNum = this.teamNumber;
    if (teamNum === 0) {
      return null;
    }

    return this._demo.entities.teams[teamNum];
  }

  /**
   * @returns Name of the model that should be rendered for this entity. (e.g. 'models/Weapons/w_eq_smokegrenade_thrown.mdl')
   */
  get modelName(): string | null {
    const modelprecache = this._demo.stringTables.findTableByName(
      "modelprecache"
    );
    if (!modelprecache) {
      return null;
    }
    return modelprecache.entries[this.getProp("DT_BaseEntity", "m_nModelIndex")]
      .entry;
  }
}
