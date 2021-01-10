import { EventEmitter } from "events";
import { DemoFile } from "./demo";
import { CNETMsgSetConVar } from "./protobufs/netmessages";

interface IConVarChangeEvent {
  name: string;
  value: string;
  oldValue?: string;
}

export declare interface ConVars {
  /**
   * Fired when any console variable is changed (e.g., 'mp_buytime').
   */
  on(
    event: "change" | string,
    listener: (event: IConVarChangeEvent) => void
  ): this;
  emit(name: "change" | string, event: IConVarChangeEvent): boolean;
}

/**
 * Manages console variables.
 */
export class ConVars extends EventEmitter {
  public vars: Map<string, string> = new Map();

  public listen(demo: DemoFile) {
    demo.on("net_SetConVar", (msg: CNETMsgSetConVar) => {
      const convars = msg.convars;
      if (!convars) return;
      for (const cvar of convars.cvars) {
        if (cvar.name == null || cvar.value == null) {
          continue;
        }

        const oldValue = this.vars.get(cvar.name);
        this.vars.set(cvar.name, cvar.value);

        const args = {
          name: cvar.name,
          value: cvar.value,
          oldValue
        };

        this.emit(cvar.name, args);
        this.emit("change", args);
      }
    });
  }
}
