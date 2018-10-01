import { DemoFile } from "../demo";
import { UnknownEntityProps, IServerClass } from "../entities";
import { Vector, PropValue } from "../props";
import { MAX_EDICT_BITS } from "../consts";

export declare interface BaseEntity<Props extends UnknownEntityProps> {
  //getProp(table: 'DT_BaseEntity', name: 'moveparent'): number;
}

/**
 * Represents an in-game entity.
 */
export class BaseEntity<Props extends UnknownEntityProps> {
  protected _demo: DemoFile;

  /**
   * Entity index.
   */
  index: number;

  /**
   * Server class ID.
   */
  classId: number;

  /**
   * Serial number.
   */
  serialNum: number;

  props: Props | null;

  /**
   * Entity is scheduled for removal this tick.
   */
  deleting: boolean = false;

  constructor(demo: DemoFile, index: number, classId: number, serialNum: number, props: Props | undefined) {
    this._demo = demo;
    this.index = index;
    this.classId = classId;
    this.serialNum = serialNum;
    this.props = props || null;
  }

  /**
   * Retrieves the value of a networked property
   * @param {string} tableName - Table name (e.g., DT_BaseEntity)
   * @param {string} varName - Network variable name (e.g., m_vecOrigin)
   * @returns {*} Property value, `undefined` if non-existent
   * @public
   */
  getProp(tableName: keyof Props, varName: keyof Props[keyof Props]) {
    return this.props && this.props[tableName] && this.props[tableName][varName];
  }

  updateProp(tableName, varName, newValue) {
    if (this.props[tableName] === undefined) {
      this.props[tableName] = { [varName]: newValue };
    } else {
      this.props[tableName][varName] = newValue;
    }
  }

  /**
   * Get the serverclass associated with this entity.
   * @returns Object representing the entity's class
   */
  get serverClass(): IServerClass {
    return this._demo.entities.serverClasses[this.classId];
  }

  /**
   * Position of this entity in the game world.
   * @returns World-space coordinates
   */
  get position(): Vector {
    let cellWidth = 1 << this.getProp('DT_BaseEntity', 'm_cellbits');
    let cellX = this.getProp('DT_BaseEntity', 'm_cellX');
    let cellY = this.getProp('DT_BaseEntity', 'm_cellY');
    let cellZ = this.getProp('DT_BaseEntity', 'm_cellZ');
    let cellOffset = this.getProp('DT_BaseEntity', 'm_vecOrigin');

    return {
      x: (cellX * cellWidth - 16384) + cellOffset.x,
      y: (cellY * cellWidth - 16384) + cellOffset.y,
      z: (cellZ * cellWidth - 16384) + cellOffset.z
    };
  }

  /**
   * Velocity of the entity.
   * @returns Speed in each axis
   */
  get velocity(): Vector {
    return this.getProp('DT_BaseEntity', 'm_vecVelocity');
  }

  /**
   * Speed of the entity.
   * @returns Speed in game units.
   */
  get speed(): number {
    var vel = this.velocity;
    return Math.sqrt(vel.x * vel.x + vel.y * vel.y + vel.z * vel.z);
  }

  /**
   * @returns Entity which this entity is moving with, if any
   */
  get moveParent(): BaseEntity<UnknownEntityProps> | null {
    return this._demo.entities.getByHandle(this.getProp('DT_BaseEntity', 'moveparent'));
  }

  /**
   * @returns Owning entity, if any
   */
  get owner(): BaseEntity<UnknownEntityProps> | null {
    return this._demo.entities.getByHandle(this.getProp('DT_BaseEntity', 'm_hOwnerEntity'));
  }

  /**
   * @returns Team number (0: Unassigned, 1: Spectator, 2: Terrorist, 3: Counter-Terrorist)
   */
  get teamNumber(): number {
    return this.getProp('DT_BaseEntity', 'm_iTeamNum');
  }

  /**
   * @returns Team if assigned, null if unassigned.
   */
  get team(): Team | null {
    let teamNum = this.teamNumber;
    if (teamNum === 0) {
      return null;
    }

    return this._demo.entities.teams[teamNum];
  }

  /**
   * @returns Name of the model that should be rendered for this entity. (e.g. 'models/Weapons/w_eq_smokegrenade_thrown.mdl')
   */
  get modelName(): string | null {
    let modelprecache = this._demo.stringTables.findTableByName('modelprecache');
    if (!modelprecache)
      return null;
    return modelprecache.entries[this.getProp('DT_BaseEntity', 'm_nModelIndex')].entry;
  }

  /**
   * @returns Number uniquely identifying this entity. Should be unique throughout the entire demo.
   */
  get handle(): number {
    return this.index | (this.serialNum << MAX_EDICT_BITS);
  }
}
