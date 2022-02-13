/*
Example output:

Tick rate: 128
Duration (seconds): 2569.375
*/

import { DemoFile } from "demofile";
import * as fs from "fs";

function parseDemoFile(path: string) {
  const stream = fs.createReadStream(path);
  const demoFile = new DemoFile();

  demoFile.on("start", ({ cancel }) => {
    console.log("Tick rate:", demoFile.tickRate);
    console.log("Duration (seconds):", demoFile.header.playbackTime);

    // Stop parsing - we're finished
    cancel();
  });

  demoFile.on("end", e => {
    if (e.error) {
      console.error("Error during parsing:", e.error);
      process.exitCode = 1;
    }
  });

  // Start parsing the stream now that we've added our event listeners
  demoFile.parseStream(stream);
}

parseDemoFile(process.argv[2]!);
