'use strict';

var Long = require('long');

module.exports = {
  swap16(val) {
    return ((val & 0xFF) << 8)
      | ((val >> 8) & 0xFF);
  },

  swap32(val) {
    return ((val & 0xFF) << 24)
      | ((val & 0xFF00) << 8)
      | ((val >> 8) & 0xFF00)
      | ((val >> 24) & 0xFF);
  },

  swapu64(lo, hi) {
    return Long.fromBits(this.swap32(hi), this.swap32(lo), true);
  }
};
