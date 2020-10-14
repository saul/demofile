"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConVars = void 0;
const events_1 = require("events");
/**
 * Manages console variables.
 */
class ConVars extends events_1.EventEmitter {
    constructor() {
        super(...arguments);
        this.vars = new Map();
    }
    listen(demo) {
        demo.on("net_SetConVar", (msg) => {
            const convars = msg.convars;
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
exports.ConVars = ConVars;
//# sourceMappingURL=convars.js.map