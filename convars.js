'use strict';

var EventEmitter = require('events');

/**
 * Manages console variables.
 */
class ConVars extends EventEmitter {
  constructor() {
    super();
    this.vars = {};
  }

  /**
   * Fired when a console variable is changed (e.g., 'mp_buytime').
   * @event ConVars#cvar_name
   * @type {Object}
   * @property {string} value - New value
   * @property {string} oldValue - Old value
   */

  /**
   * Fired when a console variable is changed (e.g., 'mp_buytime').
   * @event ConVars#change
   * @type {Object}
   * @property {string} name - Console variable name
   * @property {string} value - New value
   * @property {string} oldValue - Old value
   */

  listen(demo) {
    demo.on('net_SetConVar', msg => {
      for (let cvar of msg.convars.cvars) {
        if (cvar.name == null) {
          continue;
        }

        let value = cvar.value;

        let oldValue = this.vars[cvar.name];
        this.vars[cvar.name] = cvar.value;

        this.emit(cvar.name, {value, oldValue});

        this.emit('change', {
          name: cvar.name,
          value,
          oldValue
        });
      }
    });
  }
}

module.exports = ConVars;
