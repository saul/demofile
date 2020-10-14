"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Networkable = void 0;
const consts_1 = require("../consts");
/**
 * Represents an in-game entity.
 */
class Networkable {
    constructor(demo, index, classId, serialNum, props) {
        /**
         * Entity is scheduled for removal this tick.
         */
        this.deleting = false;
        this._demo = demo;
        this.index = index;
        this.classId = classId;
        this.serialNum = serialNum;
        this.props = props || {};
    }
    /**
     * Get the serverclass associated with this entity.
     * @returns Object representing the entity's class
     */
    get serverClass() {
        return this._demo.entities.serverClasses[this.classId];
    }
    /**
     * @returns Number uniquely identifying this entity. Should be unique throughout the entire demo.
     */
    get handle() {
        return this.index | (this.serialNum << consts_1.MAX_EDICT_BITS);
    }
    /**
     * Retrieves the value of a networked property
     * @param {string} tableName - Table name (e.g., DT_BaseEntity)
     * @param {string} varName - Network variable name (e.g., m_vecOrigin)
     * @returns {*} Property value, `undefined` if non-existent
     * @public
     */
    getProp(tableName, varName) {
        return this.props[tableName][varName];
    }
    /**
     * Interpret an array-like data table (e.g., m_iAmmo) as an array
     * @param tableName Name of the data table
     */
    getIndexedProps(tableName) {
        if (!("000" in this.props[tableName])) {
            return undefined;
        }
        return Object.values(this.props[tableName]);
    }
    /**
     * Update the value of a prop
     * @param tableName Name of the data table
     * @param varName Name of the prop to update
     * @param newValue New prop value
     */
    updateProp(tableName, varName, newValue) {
        const table = this.props[tableName];
        if (table === undefined) {
            this.props[tableName] = {
                [varName]: newValue
            };
        }
        else {
            table[varName] = newValue;
        }
    }
}
exports.Networkable = Networkable;
//# sourceMappingURL=networkable.js.map