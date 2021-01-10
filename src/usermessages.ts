import * as assert from "assert";
import { EventEmitter } from "events";
import { DemoFile } from "./demo";
import { CSVCMsgUserMessage } from "./protobufs/netmessages";
import { userMessages } from "./usermessagetypes";

/**
 * Handles user messages for a demo file.
 */
export class UserMessages extends EventEmitter {
  public listen(demo: DemoFile) {
    demo.on("svc_UserMessage", this._handleUserMessage.bind(this));
  }

  private _handleUserMessage(msg: CSVCMsgUserMessage) {
    const um = userMessages[msg.msgType];
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
