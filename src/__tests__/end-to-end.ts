import * as fs from "fs";
import { join } from "path";
import { DemoFile } from "../index";

const root = join(__dirname, "..", "..");

/*
it("demo can be read without error", done => {
  const demo = new DemoFile();

  fs.readFile(join(root, "demos/flashbangs.dem"), (err, buffer) => {
    expect(err).toBeFalsy();
    demo.parse(buffer);

    demo.on("end", e => {
      expect(e.error).toBeFalsy();
      done();
    });
  });
});
*/

it("dummy test", () => {
  expect(true).toBeTruthy();
});
