'use strict';

module.exports.fillUntil = function fillUntil(endValue, callback, initial) {
  var value = initial;
  var ret = [];

  while (true) { // eslint-disable-line no-constant-condition
    value = callback(value);
    if (value === endValue) {
      return ret;
    }

    ret.push(value);
  }
};

