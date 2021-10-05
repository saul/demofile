/* eslint-disable no-console */

import * as assert from "assert";
import * as fs from "fs";

const enumRegex = /^enum ECstrike15UserMessages \{\n((?:\tCS_UM_\w+ = \d+;\r?\n)+)}$/m;

const skipUserMessages = ["UpdateTeamMoney", "DisconnectToLobby2"];

const userMessages = new Array<string>();

if (process.argv.length < 3) {
  throw new Error("expected args: <path to cstrike15_usermessages.proto>");
}

const path = process.argv[2]!;
fs.readFile(path, "utf-8", (err, contents) => {
  assert.ifError(err);

  const match = enumRegex.exec(contents);
  if (!match) {
    throw new Error(`Could not find ECstrike15UserMessages enum in ${path}`);
  }

  const cases = match[1]!.split(/\r?\n/);
  for (const enumCase of cases) {
    const m = /^\tCS_UM_(\w+) = \d+;$/.exec(enumCase);
    if (!m) continue;

    const name = m[1]!;
    if (skipUserMessages.indexOf(name) !== -1) continue;

    userMessages.push(name);
  }

  console.log("// DO NOT MODIFY!");
  console.log("// Auto-generated by ./generators/usermessagetypes.ts");
  console.log("");

  console.log(`import * as um from "./protobufs/cstrike15_usermessages";`);

  console.log("export type UserMessageName =");
  for (const name of userMessages) {
    console.log(`  | "${name}"`);
  }

  console.log("");
  console.log(`interface IUserMessageDescriptor {
  name: UserMessageName;
  class: { decode: (buffer: Uint8Array) => unknown };
}`);

  console.log("");
  console.log(`export const userMessages: IUserMessageDescriptor[] = [];`);
  for (const name of userMessages) {
    console.log(
      `userMessages[um.ECstrike15UserMessages.CS_UM_${name}] = { name: "${name}", class: um.CCSUsrMsg${name} };`
    );
  }

  console.log("");
  console.log(`interface IUserMessageEvent { name: string; msg: any; }`);

  console.log("");
  console.log(`declare module './usermessages' {`);
  console.log(`  export interface UserMessages {`);

  console.log(`    /**
     * Fired when any user message is sent.
     * @note Fired after specific event is fired.
     */
    on(message: "message", listener: (event: IUserMessageEvent) => void): this;
    emit(message: "message", event: IUserMessageEvent): boolean;

    emit(message: UserMessageName, msg: any): boolean;
`);

  for (const name of userMessages) {
    console.log(
      `    on(message: "${name}", listener: (msg: um.CCSUsrMsg${name}) => void): this;`
    );
  }

  console.log(`  }`);
  console.log(`}`);
});
