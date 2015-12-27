'use strict';

var _ = require('lodash');
var assert = require('assert');
var ProtoBuf = require('protobufjs');
var util = require('util');

ProtoBuf.convertFieldsToCamelCase = true;
var builder = ProtoBuf.loadProtoFile('demoinfogo/src/cstrike15_usermessages_public.proto').build();
assert(builder !== null);

function enumNameToClassName(enumName) {
  var type = enumName.slice(0, 3);
  assert(['net', 'svc'].indexOf(type) !== -1, 'unexpected message type');

  return util.format('C%sMsg_%s', type.toUpperCase(), enumName.slice(4));
}

var combinedMessages = _.chain(_.merge(builder['NET_Messages'], builder['SVC_Messages']))
  .invert()
  .mapValues((name, type) => {
    var cls = builder[enumNameToClassName(name)];
    assert(typeof cls !== 'undefined', 'cannot find ProtoBuf Message builder');

    return {
      'type': type,
      'name': name,
      'class': cls
    };
  })
  .value();

module.exports = {
  builder: builder,
  messages: combinedMessages,
  
  findByName(name) { return _.find(combinedMessages, _.matchesProperty('name', name)); },
  findByType(type) { return combinedMessages[type]; }
};
