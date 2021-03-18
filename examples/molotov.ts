/*
Example output:

...
Incendiary thrown by PC419 Chrismagnum exploded at (323.90625,-1462.6875,-173.96875)
Molotov thrown by CHF| yam- exploded at (-739.15625,-868.03125,-165.96875)
Incendiary thrown by PC419 FluentSwede exploded at (540.90625,-1692.96875,-261.96875)
Molotov thrown by CHF| HUGHMUNGUS exploded at (-2381.40625,786.5,-124.46875)
Molotov thrown by CHF| zephh exploded at (-815.5625,275.90625,-166.4375)
Finished.
*/

import * as assert from "assert";
import { DemoFile, BaseEntity, CInferno, Player } from "demofile";
import * as fs from "fs";

//const SEED = 1146049601;
const molotovExplode = 3580951569; // murmurHash2("inferno.start", SEED);
const incExplode = 1110819271; // murmurHash2("inferno.start_incgrenade", SEED);

function parseDemoFile(path: string) {
  fs.readFile(path, (err, buffer) => {
    assert.ifError(err);

    const demoFile = new DemoFile();

    demoFile.on("svc_Sounds", e => {
      for (const sound of e.sounds) {
        if (
          sound.soundNumHandle !== molotovExplode &&
          sound.soundNumHandle !== incExplode
        ) {
          continue;
        }

        const inferno = (demoFile.entities.entities.get(
          sound.entityIndex
        ) as unknown) as BaseEntity<CInferno>;
        const pos = inferno.position;

        const thrower = inferno.owner as Player;
        const isMolotov = sound.soundNumHandle === molotovExplode;

        console.log(
          `${isMolotov ? "Molotov" : "Incendiary"} thrown by ${
            thrower.name
          } exploded at (${pos.x},${pos.y},${pos.z})`
        );
      }
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
