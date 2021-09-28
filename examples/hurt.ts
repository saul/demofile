import * as assert from "assert";
import { DemoFile } from "demofile";
import * as fs from "fs";

function parseDemoFile(path: string) {
  fs.readFile(path, (err, buffer) => {
    assert.ifError(err);

    const demoFile = new DemoFile();

    demoFile.on("usercmd", usercmd => {
      // Only log every 1000th user command to reduce spam
      if (usercmd.tickCount % 1000 !== 0) return;

      console.log("usercmd", usercmd.buttons);
    });

    demoFile.on("end", e => {
      if (e.error) {
        console.error("Error during parsing:", e.error);
        process.exitCode = 1;
      }

      console.log("Finished.");
    });

    // Start parsing the buffer now that we've added our event listeners
    demoFile.parse(buffer);
  });
}

parseDemoFile(process.argv[2]);
