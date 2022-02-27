/*
Example output:

PC419 valentino's Glock-18 - Off World        
CHF| soju_j's USP-S - Cortex
PC419 DANZ's Glock-18 - Sacrifice
CHF| apocdud's USP-S - Cortex
PC419 Chrismagnum's Glock-18 - Off World      
PC419 FluentSwede's Glock-18 - Water Elemental
CHF| HUGHMUNGUS's MP9 - Airlock
CHF| soju_j's M4A4 - Radiation Hazard
CHF| zephh's M4A4 - The Emperor
PC419 valentino's AK-47 - Black Laminate
CHF| yam-'s FAMAS - Afterimage
PC419 m0nt-S-'s AK-47 - Redline
PC419 Chrismagnum's AK-47 - The Empress
PC419 FluentSwede's AK-47 - Phantom Disruptor
*/

import { DemoFile } from "demofile";
import * as fs from "fs";

interface PaintKit {
  player: string;
  itemName: string;
  paintKit: string;
}

function parseDemoFile(path: string) {
  const stream = fs.createReadStream(path);
  const demoFile = new DemoFile();

  const paintKits: Map<string, PaintKit> = new Map();

  demoFile.gameEvents.on("player_death", e => {
    if (paintKits.has(e.weapon_itemid)) return;

    if (!e.originalOwner || !e.itemDefinition || !e.paintKit) return;

    // Keep track of all the paint kits we see
    paintKits.set(e.weapon_itemid, {
      player: e.originalOwner?.name,
      itemName: e.itemDefinition?.itemName,
      paintKit: e.paintKit?.tag
    });
  });

  demoFile.on("end", e => {
    paintKits.forEach(paintKit => {
      console.log(
        `${paintKit.player}'s ${paintKit.itemName} - ${paintKit.paintKit}`
      );
    });

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
