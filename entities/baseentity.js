'use strict';

/**
 * Represents an in-game entity.
 */
class BaseEntity {
  constructor(demo, index, classId, serialNum, baseline) {
    this._demo = demo;

    /**
     * Entity index.
     * @type {int}
     */
    this.index = index;

    /**
     * Server class ID.
     * @type {int}
     */
    this.classId = classId;

    /**
     * Serial number.
     * @type {int}
     */
    this.serialNum = serialNum;

    this.props = baseline || {};
  }

  /**
   * Retrieves the value of a networked property
   * @param {string} tableName - Table name (e.g., DT_BaseEntity)
   * @param {string} varName - Network variable name (e.g., m_vecOrigin)
   * @returns {*} Property value, `undefined` if non-existent
   * @public
   */
  getProp(tableName, varName) {
    var value = this.props[tableName] && this.props[tableName][varName];

    if (value === undefined && this.baseline) {
      return this.baseline[tableName] && this.baseline[tableName][varName];
    } else {
      return value;
    }
  }

  updateProp(tableName, varName, newValue) {
    if (this.props[tableName] === undefined) {
      this.props[tableName] = {[varName]: newValue};
    } else {
      this.props[tableName][varName] = newValue;
    }
  }

  /**
   * Get the serverclass associated with this entity.
   * @returns {object} Object representing the entity's class
   */
  get serverClass() {
    return this._demo.entities.serverClasses[this.classId];
  }

  /**
   * Position of this entity in the game world.
   * @returns {object} {x, y, z} world-space coordinates
   */
  get position() {
    return this.getProp('DT_BaseEntity', 'm_vecOrigin');
  }

  /**
   * @returns {Entity|null} Owning entity, if it exists
   */
  get owner() {
    return this._demo.entities.getByHandle(this.getProp('DT_BaseEntity', 'm_hOwnerEntity'));
  }

  /**
   * @returns {int} Team number (0: Unassigned, 1: Spectator, 2: Terrorist, 3: Counter-Terrorist)
   */
  get teamNumber() {
    return this.getProp('DT_BaseEntity', 'm_iTeamNum');
  }

  /**
   * @returns {Team|null} Team if assigned, null if unassigned.
   */
  get team() {
    let teamNum = this.teamNumber;
    if (teamNum === 0) {
      return null;
    }

    return this._demo.entities.teams[teamNum];
  }
}

module.exports = BaseEntity;
