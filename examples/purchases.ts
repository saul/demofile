/*
Example output:

...
'PC419 FluentSwede' bought 1 'High Explosive Grenade' (normal)
'CHF| yam-' bought 1 'Smoke Grenade' (normal)
'CHF| yam-' bought 1 'Molotov' (normal)
'PC419 m0nt-S-' bought 1 'P250' (strange)
'CHF| soju_j' bought 1 'AK-47' (unique)
'CHF| soju_j' bought 1 'Kevlar' (normal)
'CHF| soju_j' bought 1 'Smoke Grenade' (normal)
'CHF| soju_j' bought 1 'Molotov' (normal)
'CHF| soju_j' bought 1 'Flashbang' (normal)
'CHF| soju_j' bought 1 'Flashbang' (normal)
'CHF| yam-' bought 1 'Flashbang' (normal)
Finished.
*/

import { DemoFile } from "demofile";
import * as fs from "fs";

function parseDemoFile(path: string) {
  const stream = fs.createReadStream(path);
  const demoFile = new DemoFile();

  demoFile.on("itemPurchase", e => {
    console.log(
      `'${e.player.name}' bought ${e.count} '${e.itemName}' (${
        e.weapon?.quality || "normal"
      })`
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
