/*
Example output:

*** Round ended 'first' (reason: 12)
        TERRORIST: Heroic score 0
        CT: BIG score 1
*** Round ended 'first' (reason: 7)
        TERRORIST: Heroic score 0
        CT: BIG score 1
...
*** Round ended 'second' (reason: 1)
        TERRORIST: BIG score 14
        CT: Heroic score 14
*** Round ended 'second' (reason: 1)
        TERRORIST: BIG score 15
        CT: Heroic score 14
*** Round ended 'postgame' (reason: 9)
        TERRORIST: BIG score 16
        CT: Heroic score 14
        TERRORIST: Heroic score 0
        CT: BIG score 0
Finished.
*/

import * as assert from "assert";
import { DemoFile, TeamNumber } from "demofile";
import * as fs from "fs";

function parseDemoFile(path: string) {
  fs.readFile(path, (err, buffer) => {
    assert.ifError(err);

    const demoFile = new DemoFile();

    function logTeamScores() {
      const teams = demoFile.teams;

      const terrorists = teams[TeamNumber.Terrorists];
      const cts = teams[TeamNumber.CounterTerrorists];

      console.log(
        "\t%s: %s score %d\n\t%s: %s score %d",
        terrorists.teamName,
        terrorists.clanName,
        terrorists.score,
        cts.teamName,
        cts.clanName,
        cts.score
      );
    }

    demoFile.gameEvents.on("round_end", e => {
      console.log(
        "*** Round ended '%s' (reason: %s)",
        demoFile.gameRules.phase,
        e.reason
      );

      // We can't print the team scores here as they haven't been updated yet.
      // See round_officially_ended below.
    });

    demoFile.gameEvents.on("round_officially_ended", logTeamScores);

    demoFile.on("end", e => {
      if (e.error) {
        console.error("Error during parsing:", e.error);
        process.exitCode = 1;
      } else {
        logTeamScores();
      }

      console.log("Finished.");
    });

    // Start parsing the buffer now that we've added our event listeners
    demoFile.parse(buffer);
  });
}

parseDemoFile(process.argv[2]);
