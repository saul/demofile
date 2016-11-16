var ProtoBuf = require('protobufjs');
var path = require('path');
var fs = require('fs');

// overwrite ProtoBuf fetch with our own static content
// the btfs module replaces fs.readFileSync calls with static strings
ProtoBuf.Util.fetch = function(filePath, callback) {
  if (callback && typeof callback != 'function')
    callback = null;

  let files = {
    '/protobufs/cstrike15_usermessages.proto': fs.readFileSync(path.resolve(__dirname, '../protobufs/cstrike15_usermessages.proto')),
    '/protobufs/netmessages.proto': fs.readFileSync(path.resolve(__dirname, '../protobufs/netmessages.proto')),
    '/protobufs/network_connection.proto': fs.readFileSync(path.resolve(__dirname, '../protobufs/network_connection.proto')),
    '/protobufs/cstrike15_gcmessages.proto': fs.readFileSync(path.resolve(__dirname, '../protobufs/cstrike15_gcmessages.proto')),
    '/protobufs/steammessages.proto': '' // not used
  };

  let content = files[filePath];

  if (typeof content === 'undefined') {
    throw new Error('No static content available for proto file: ' + filePath);
  }

  if (callback) {
    callback(content);
  } else {
    return content;
  }
};

window.Buffer = require('buffer').Buffer;
window.demofile = require('../demo');
