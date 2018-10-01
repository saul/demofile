import { EventEmitter } from 'events';
import { DemoFile } from './demo';
import { ICNETMsg_SetConVar } from './protobufs/netmessages';
import { ICMsg_CVars } from './protobufs/cstrike15_usermessages';

interface IConVarChangeEvent {
  name: string;
  value: string;
  oldValue?: string;
}

export declare interface ConVars {
  on(event: 'change', listener: (event: IConVarChangeEvent) => void): this;
  on(event: string, listener: (event: IConVarChangeEvent) => void): this;
}

/**
 * Manages console variables.
 */
export class ConVars extends EventEmitter {
  private _vars: Map<string, string> = new Map();
  readonly vars: ReadonlyMap<string, string> = this._vars;

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

  listen(demo: DemoFile) {
    demo.on('net_SetConVar', (msg: RequiredNonNullable<ICNETMsg_SetConVar>) => {
      var convars = msg.convars as RequiredNonNullable<ICMsg_CVars>;
      for (let cvar of convars.cvars) {
        if (cvar.name == null || cvar.value == null) {
          continue;
        }

        let oldValue = this.vars.get(cvar.name);
        this._vars.set(cvar.name, cvar.value);

        let args: IConVarChangeEvent = {
          name: cvar.name,
          value: cvar.value,
          oldValue
        };

        this.emit(cvar.name, args);
        this.emit('change', args);
      }
    });
  }
}
