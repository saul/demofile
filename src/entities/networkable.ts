import { IServerClass, UnknownEntityProps } from "../entities";
import { DemoFile } from "../demo";
import { MAX_EDICT_BITS } from "../consts";

/**
 * Represents an in-game entity.
 */
export class Networkable<Props = UnknownEntityProps> {
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

  props: Props;

  /**
   * Entity is scheduled for removal this tick.
   */
  deleting: boolean = false;

  constructor(
    demo: DemoFile,
    index: number,
    classId: number,
    serialNum: number,
    props: Props | undefined
  ) {
    this._demo = demo;
    this.index = index;
    this.classId = classId;
    this.serialNum = serialNum;
    this.props = props || ({} as Props);
  }

  /**
   * Retrieves the value of a networked property
   * @param {string} tableName - Table name (e.g., DT_BaseEntity)
   * @param {string} varName - Network variable name (e.g., m_vecOrigin)
   * @returns {*} Property value, `undefined` if non-existent
   * @public
   */
  getProp<Table extends keyof Props, VarName extends keyof Props[Table]>(
    tableName: Table,
    varName: VarName
  ): Props[Table][VarName] {
    return this.props[tableName][varName];
  }

  /**
   * Interpret an array-like data table (e.g., m_iAmmo) as an array
   * @param tableName Name of the data table
   */
  getIndexedProps<
    TableName extends keyof Props,
    TableKeys extends keyof Props[TableName],
    ArrayType extends "000" extends TableKeys
      ? Props[TableName][TableKeys][]
      : undefined
  >(tableName: TableName): ArrayType {
    if (!("000" in this.props[tableName])) return undefined as ArrayType;
    return Object.values(this.props[tableName]) as ArrayType;
  }

  /**
   * Update the value of a prop
   * @param tableName Name of the data table
   * @param varName Name of the prop to update
   * @param newValue New prop value
   */
  updateProp<
    Table extends keyof Props,
    VarName extends keyof Props[Table],
    PropType extends Props[Table][VarName]
  >(tableName: Table, varName: VarName, newValue: PropType) {
    const table = this.props[tableName];
    if (table === undefined) {
      this.props[tableName] = ({
        [varName]: newValue
      } as unknown) as Props[Table];
    } else {
      table[varName] = newValue;
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
   * @returns Number uniquely identifying this entity. Should be unique throughout the entire demo.
   */
  get handle(): number {
    return this.index | (this.serialNum << MAX_EDICT_BITS);
  }
}
