import { DemoFile } from "../demo";
import { IServerClass, UnknownEntityProps } from "../entities";
/**
 * Represents an in-game entity.
 */
export declare class Networkable<Props = UnknownEntityProps> {
    /**
     * Get the serverclass associated with this entity.
     * @returns Object representing the entity's class
     */
    get serverClass(): IServerClass;
    /**
     * @returns Number uniquely identifying this entity. Should be unique throughout the entire demo.
     */
    get handle(): number;
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
    deleting: boolean;
    protected _demo: DemoFile;
    constructor(demo: DemoFile, index: number, classId: number, serialNum: number, props: Props | undefined);
    /**
     * Retrieves the value of a networked property
     * @param {string} tableName - Table name (e.g., DT_BaseEntity)
     * @param {string} varName - Network variable name (e.g., m_vecOrigin)
     * @returns {*} Property value, `undefined` if non-existent
     * @public
     */
    getProp<Table extends keyof Props, VarName extends keyof Props[Table]>(tableName: Table, varName: VarName): Props[Table][VarName];
    /**
     * Interpret an array-like data table (e.g., m_iAmmo) as an array
     * @param tableName Name of the data table
     */
    getIndexedProps<TableName extends keyof Props, TableKeys extends keyof Props[TableName], ArrayType extends "000" extends TableKeys ? Array<Props[TableName][TableKeys]> : undefined>(tableName: TableName): ArrayType;
    /**
     * Update the value of a prop
     * @param tableName Name of the data table
     * @param varName Name of the prop to update
     * @param newValue New prop value
     */
    updateProp<Table extends keyof Props, VarName extends keyof Props[Table], PropType extends Props[Table][VarName]>(tableName: Table, varName: VarName, newValue: PropType): void;
}
