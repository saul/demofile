'use strict';

var _ = require('lodash');
var assert = require('assert');
var EventEmitter = require('events');

class GameEvent {
  constructor(descriptor) {
    this.name = descriptor.name;
    this.id = descriptor.eventid;
    this.keyNames = _.map(descriptor.keys, key => key.name);
  }

  messageToObject(eventMsg) {
    assert(eventMsg.eventid === this.id);

    return _.zipObject(
      this.keyNames,
      _.map(eventMsg.keys, key => {
        return _.find(key, (value, name) => value !== null && name !== 'type');
      })
    );
  }
}

class GameEvents extends EventEmitter {
  constructor() {
    super();

    this.gameEventList = {};
  }

  listen(messageEvents) {
    messageEvents.on('svc_GameEventList', this.handleGameEventList.bind(this));

    messageEvents.on('svc_GameEvent', msg => {
      var event = this.gameEventList[msg.eventid];

      var eventVars = event.messageToObject(msg);
      this.emit(event.name, eventVars);

      this.emit('event', {
        name: event.name,
        event: eventVars
      });
    });
  }

  handleGameEventList(msg) {
    _.each(msg.descriptors, descriptor => {
      this.gameEventList[descriptor.eventid] = new GameEvent(descriptor);
    });
  }
}

module.exports = GameEvents;
