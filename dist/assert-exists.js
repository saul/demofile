"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function assertExists(value, message) {
    if (value == null)
        throw new Error(message || "expected non-null value");
    return value;
}
exports.default = assertExists;
//# sourceMappingURL=assert-exists.js.map