"use strict";
// tslint:disable:no-console
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const fs = require("fs");
const index_1 = require("../index");
function parseDemoFile(path) {
    fs.readFile(path, (err, buffer) => {
        assert.ifError(err);
        const demoFile = new index_1.DemoFile();
        function logTeamScores() {
            const teams = demoFile.teams;
            const terrorists = teams[2 /* Terrorists */];
            const cts = teams[3 /* CounterTerrorists */];
            console.log("\t%s: %s score %d\n\t%s: %s score %d", terrorists.teamName, terrorists.clanName, terrorists.score, cts.teamName, cts.clanName, cts.score);
        }
        demoFile.on("start", () => {
            console.log("Demo header:", demoFile.header);
        });
        demoFile.gameEvents.on("round_end", e => {
            console.log("*** Round ended '%s' (reason: %s)", demoFile.gameRules.phase, e.reason);
            // We can't print the team scores here as they haven't been updated yet.
            // See round_officially_ended below.
        });
        demoFile.gameEvents.on("round_officially_ended", logTeamScores);
        demoFile.on("end", e => {
            if (e.error) {
                console.error("Error during parsing:", e.error);
                process.exitCode = 1;
            }
            else {
                logTeamScores();
            }
            console.log("Finished.");
        });
        // Start parsing the buffer now that we've added our event listeners
        demoFile.parse(buffer);
    });
}
parseDemoFile(process.argv[2]);
//# sourceMappingURL=scores.js.map