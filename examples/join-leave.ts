/*
Example output:

[Time: 0] ESEA SourceTV (BOT) joined the game
[Time: 0] PC419 m0nt-S- (STEAM_1:0:16289124) joined the game     
[Time: 0] PC419 Chrismagnum (STEAM_1:1:16522881) joined the game 
[Time: 0] PC419 FluentSwede (STEAM_1:0:101477774) joined the game
[Time: 0] PC419 valentino (STEAM_1:0:234221856) joined the game  
[Time: 0] CHF| zephh (STEAM_1:0:88720676) joined the game        
[Time: 0] CHF| yam- (STEAM_1:1:15329) joined the game
[Time: 0] CHF| apocdud (STEAM_1:0:29162650) joined the game      
...
[Time: 23.2265625] zeph (STEAM_1:0:88720676) joined the game
[Time: 2451.65625] PC419 Chrismagnum left the game
[Time: 2451.6875] CHF| yam- left the game
[Time: 2451.90625] CHF| HUGHMUNGUS left the game
[Time: 2453.609375] PC419 FluentSwede left the game
[Time: 2453.875] CHF| apocdud left the game
[Time: 2454] CHF| zephh left the game
[Time: 2454.1875] PC419 DANZ left the game
[Time: 2454.71875] CHF| soju_j left the game
[Time: 2454.796875] PC419 m0nt-S- left the game
[Time: 2457.765625] PC419 valentino left the game
Finished.
*/

import * as assert from "assert";
import { DemoFile, Player } from "demofile";
import * as fs from "fs";

function parseDemoFile(path: string) {
  fs.readFile(path, (err, buffer) => {
    assert.ifError(err);

    const demoFile = new DemoFile();

    demoFile.entities.on("create", e => {
      // We're only interested in player entities being created.
      if (!(e.entity instanceof Player)) {
        return;
      }

      console.log(
        "[Time: %d] %s (%s) joined the game",
        demoFile.currentTime,
        e.entity.name,
        e.entity.steamId
      );
    });

    demoFile.gameEvents.on("player_disconnect", e => {
      const player = demoFile.entities.getByUserId(e.userid);
      if (!player) {
        console.log(`! player_disconnect: unknown player ${e.userid}`);
        return;
      }

      console.log(
        "[Time: %d] %s left the game",
        demoFile.currentTime,
        player.name
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
