"use strict";
// tslint:disable:no-console
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const fs = require("fs");
const demo = require("../index");
function parseDemoFile(path) {
    fs.readFile(path, (err, buffer) => {
        assert.ifError(err);
        const demoFile = new demo.DemoFile();
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
            demoFile.players.forEach(player => {
                if (player.isFakePlayer || player.isHltv)
                    return;
                try {
                    console.log(`${player.name}:`, player.crosshairInfo);
                }
                catch (error) {
                    console.error(`${player.name}: ${error}`);
                }
            });
            demoFile.cancel();
        });
        demoFile.on("end", e => {
            if (e.error) {
                console.error("Error during parsing:", e.error);
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
//# sourceMappingURL=simple.js.map