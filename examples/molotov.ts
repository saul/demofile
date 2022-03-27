/*
Example output:

...
incendiary thrown by PC419 Chrismagnum exploded at (323.90625,-1462.6875,-173.96875)
molotov thrown by CHF| yam- exploded at (-739.15625,-868.03125,-165.96875)
incendiary thrown by PC419 FluentSwede exploded at (540.90625,-1692.96875,-261.96875)
molotov thrown by CHF| HUGHMUNGUS exploded at (-2381.40625,786.5,-124.46875)
molotov thrown by CHF| zephh exploded at (-815.5625,275.90625,-166.4375)
Finished.
*/

import { DemoFile } from "demofile";
import * as fs from "fs";

function parseDemoFile(path: string) {
  const stream = fs.createReadStream(path);
  const demoFile = new DemoFile();

  demoFile.on("molotovDetonate", e => {
    const pos = e.projectile.position;
    console.log(
      `${e.projectile.grenadeType} thrown by ${e.thrower.name} exploded at (${pos.x},${pos.y},${pos.z})`
    );
  });

  demoFile.on("end", e => {
    if (e.error) {
      console.error("Error during parsing:", e.error);
      process.exitCode = 1;
    }

    console.log("Finished.");
  });

  // Start parsing the stream now that we've added our event listeners
  demoFile.parseStream(stream);
}

parseDemoFile(process.argv[2]!);
