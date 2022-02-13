/*
Example output:

...
'PC419 m0nt-S-' just bought a 'M9 Bayonet' (unusual)
'PC419 m0nt-S-' just bought a 'USP-S' (strange)
'PC419 valentino' just bought a 'Karambit' (unusual)
'PC419 valentino' just bought a 'USP-S' (unique)
'PC419 DANZ' just bought a 'Karambit' (unusual)
'PC419 DANZ' just bought a 'USP-S' (unique)
'CHF| soju_j' just bought a 'Knife' (normal)
'CHF| soju_j' just bought a 'Glock-18' (unique)
'CHF| zephh' just bought a 'Butterfly Knife' (unusual)
'CHF| zephh' just bought a 'Glock-18' (unique)
'CHF| soju_j' just bought a 'C4 Explosive' (normal)
Finished.
*/

import * as assert from "assert";
import { DemoFile, Weapon } from "demofile";
import * as fs from "fs";

function parseDemoFile(path: string) {
  fs.readFile(path, (err, buffer) => {
    assert.ifError(err);

    const demoFile = new DemoFile();

    demoFile.entities.on("postcreate", e => {
      const weapon = e.entity;
      if (!(weapon instanceof Weapon)) return;

      const owner = weapon.owner;
      if (!owner) return;

      console.log(
        `'${owner.name}' just bought a '${weapon.itemName}' (${weapon.quality})`
      );
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

parseDemoFile(process.argv[2]!);
