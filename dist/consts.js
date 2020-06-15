"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAX_EDICT_BITS = 11;
exports.NETWORKED_EHANDLE_ENT_ENTRY_MASK = (1 << exports.MAX_EDICT_BITS) - 1;
exports.NUM_NETWORKED_EHANDLE_SERIAL_NUMBER_BITS = 10;
exports.NUM_NETWORKED_EHANDLE_BITS =
  exports.MAX_EDICT_BITS + exports.NUM_NETWORKED_EHANDLE_SERIAL_NUMBER_BITS;
exports.MAX_OSPATH = 260;
exports.MAX_SPLITSCREEN_CLIENTS = 260;
exports.MAX_PLAYER_NAME_LENGTH = 128;
exports.SIGNED_GUID_LEN = 32;
exports.MAX_CUSTOM_FILES = 4;
exports.SUBSTRING_BITS = 5;
exports.MAX_USERDATA_BITS = 14;
exports.INVALID_NETWORKED_EHANDLE_VALUE =
  (1 << exports.NUM_NETWORKED_EHANDLE_BITS) - 1;
//# sourceMappingURL=consts.js.map
