"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityHandle = void 0;
const consts_1 = require("./consts");
class EntityHandle {
    constructor(value) {
        this.value = value;
    }
    get isValid() {
        return this.value !== consts_1.NUM_NETWORKED_EHANDLE_BITS;
    }
    get index() {
        return this.value & consts_1.NETWORKED_EHANDLE_ENT_ENTRY_MASK;
    }
    get serialNum() {
        return this.value >> consts_1.MAX_EDICT_BITS;
    }
}
exports.EntityHandle = EntityHandle;
//# sourceMappingURL=entityhandle.js.map