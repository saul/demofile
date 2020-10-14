"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMessages = void 0;
const assert = require("assert");
const events_1 = require("events");
const net = require("./net");
/**
 * Handles user messages for a demo file.
 */
class UserMessages extends events_1.EventEmitter {
    listen(demo) {
        demo.on("svc_UserMessage", this._handleUserMessage.bind(this));
    }
    _handleUserMessage(msg) {
        const um = net.findUserMessageByType(msg.msgType);
        if (!um) {
            return;
        }
        if (this.listenerCount(um.name) || this.listenerCount("message")) {
            const msgInst = um.class.decode(msg.msgData);
            assert(msgInst, "unable to decode user message");
            this.emit(um.name, msgInst);
            this.emit("message", {
                name: um.name,
                msg: msgInst
            });
        }
    }
}
exports.UserMessages = UserMessages;
//# sourceMappingURL=usermessages.js.map