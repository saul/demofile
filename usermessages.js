'use strict';

var assert = require('assert');
var EventEmitter = require('events');
var net = require('./net');

class UserMessages extends EventEmitter {
  constructor() {
    super();
  }

  listen(messageEvents) {
    messageEvents.on('svc_UserMessage', this.handleUserMessage.bind(this));
  }

  handleUserMessage(msg) {
    var um = net.findUserMessageByType(msg.msgType);
    if (!um) {
      // TODO: warn of unknown user message
      return;
    }

    var msgInst = um.class.decode(msg.msgData);
    assert(msgInst, 'unable to decode user message');

    this.emit('message', {
      name: um.name,
      msg: msgInst
    });

    this.emit(um.name, msgInst);
  }
}

module.exports = UserMessages;
