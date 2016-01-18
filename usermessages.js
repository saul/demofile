'use strict';

var assert = require('assert');
var EventEmitter = require('events');
var net = require('./net');

/**
 * Handles user messages for a demo file.
 */
class UserMessages extends EventEmitter {
  constructor() {
    super();
  }

  listen(messageEvents) {
    messageEvents.on('svc_UserMessage', this._handleUserMessage.bind(this));
  }

  /**
   * Fired for a specific user message being sent.
   * Note the event has the name of the username (e.g., `SayText2`)
   * @event UserMessages#UserMessageName
   * @type {object}
   */

  /**
   * Fired for a specific user message being sent.
   * @note Fired after specific event is fired.
   *
   * @event UserMessages#message
   * @type {object}
   * @property {string} name - User message name
   * @property {object} msg - User message
   */

  _handleUserMessage(msg) {
    var um = net.findUserMessageByType(msg.msgType);
    if (!um) {
      // TODO: warn of unknown user message
      return;
    }

    var msgInst = um.class.decode(msg.msgData);
    assert(msgInst, 'unable to decode user message');

    this.emit(um.name, msgInst);

    this.emit('message', {
      name: um.name,
      msg: msgInst
    });
  }
}

module.exports = UserMessages;
