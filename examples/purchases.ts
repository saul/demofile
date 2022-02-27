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

import { DemoFile, Weapon } from "demofile";
import * as fs from "fs";

function parseDemoFile(path: string) {
  const stream = fs.createReadStream(path);
  const demoFile = new DemoFile();

  demoFile.entities.on("create", e => {
    const weapon = e.entity;
    if (!(weapon instanceof Weapon)) return;

    const owner = weapon.owner;
    if (!owner) return;

    // Skip over weapons that are given and not bought
    if (
      weapon.serverClass.name === "CKnife" ||
      weapon.serverClass.name === "CC4" ||
      (owner.teamNumber === 2 && weapon.serverClass.name === "CWeaponGlock") ||
      (owner.teamNumber === 3 && weapon.serverClass.name === "CWeaponHKP2000")
    )
      return;

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

  // Start parsing the stream now that we've added our event listeners
  demoFile.parseStream(stream);
}

parseDemoFile(process.argv[2]!);
