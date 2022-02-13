/*
Example output:

'PC419 Chrismagnum' planted the bomb at 'BombsiteA'
'PC419 FluentSwede' planted the bomb at 'BombsiteA'
'PC419 DANZ' planted the bomb at 'BombsiteA'
'PC419 Chrismagnum' planted the bomb at 'BombsiteA'
'PC419 DANZ' planted the bomb at 'BombsiteA'
'PC419 valentino' planted the bomb at 'BombsiteA'
'CHF| HUGHMUNGUS' planted the bomb at 'BombsiteA'
'CHF| soju_j' planted the bomb at 'BombsiteA'
'CHF| apocdud' planted the bomb at 'BombsiteA'
'CHF| soju_j' planted the bomb at 'BombsiteB'
'CHF| yam-' planted the bomb at 'BombsiteB'
'CHF| yam-' planted the bomb at 'BombsiteA'
Finished.
*/

import * as assert from "assert";
import { DemoFile } from "demofile";
import * as fs from "fs";

function parseDemoFile(path: string) {
  fs.readFile(path, (err, buffer) => {
    assert.ifError(err);

    const demoFile = new DemoFile();

    demoFile.gameEvents.on("bomb_planted", e => {
      const player = demoFile.entities.getByUserId(e.userid)!;
      console.log(`'${player.name}' planted the bomb at '${player.placeName}'`);
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
