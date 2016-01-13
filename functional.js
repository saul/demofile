'use strict';

module.exports.fillUntil = function fillUntil(endValue, callback, initial) {
  var value = initial;
  var ret = [];

  while (true) {
    value = callback(value);
    if (value === endValue) {
      return ret;
    }

    ret.push(value);
  }
};

