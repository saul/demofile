'use strict';

var ref = require('ref');
var _ = require('lodash');

module.exports = {
  charArray(fixedLength) {
    return {
      size: fixedLength,
      alignment: ref.types.int8.alignment,
      indirection: 1,
      get(buffer, offset) {
        if (offset > 0) {
          buffer = buffer.slice(offset, offset + fixedLength);
        }

        return _.chain(_.range(fixedLength))
          .map(i => buffer.readInt8(i))
          .reduce((memo, val) => memo + String.fromCharCode(val), '')
          .value();
      }
    };
  }
}
