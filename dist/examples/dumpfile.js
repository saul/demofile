"use strict";
// tslint:disable:no-console
Object.defineProperty(exports, "__esModule", { value: true });
// This file is an thorough example of how to log player kills,
// team scores, chat text and server cvar changes from a demo file.
const ansiStyles = require("ansi-styles");
const assert = require("assert");
const fs = require("fs");
const util = require("util");
const demo = require("../demo");
const player_1 = require("../entities/player");
const colourReplacements = [
    { pattern: /\x01/g, ansi: ansiStyles.whiteBright.open },
    { pattern: /\x02/g, ansi: ansiStyles.red.open },
    { pattern: /\x03/g, ansi: ansiStyles.magenta.open },
    { pattern: /\x04/g, ansi: ansiStyles.greenBright.open },
    { pattern: /\x05/g, ansi: ansiStyles.green.open },
    { pattern: /\x06/g, ansi: ansiStyles.greenBright.open },
    { pattern: /\x07/g, ansi: ansiStyles.redBright.open },
    { pattern: /\x08/g, ansi: ansiStyles.gray.open },
    { pattern: /\x09/g, ansi: ansiStyles.yellowBright.open },
    { pattern: /\x0A/g, ansi: ansiStyles.white.open },
    { pattern: /\x0B/g, ansi: ansiStyles.blueBright.open },
    { pattern: /\x0C/g, ansi: ansiStyles.blue.open },
    { pattern: /\x0D/g, ansi: ansiStyles.magenta.open },
    { pattern: /\x0E/g, ansi: ansiStyles.magentaBright.open },
    { pattern: /\x0F/g, ansi: ansiStyles.red.open },
    { pattern: /\x10/g, ansi: ansiStyles.yellow.open } // Orange
];
const standardMessages = {
    Cstrike_Chat_All: "\x03%s\x01 : %s",
    Cstrike_Chat_AllDead: "*DEAD* \x03%s\x01 : %s",
    Game_connected: "%s connected."
};
function teamNumberToAnsi(teamNum) {
    if (teamNum === 2 /* Terrorists */) {
        return ansiStyles.redBright.open;
    }
    if (teamNum === 3 /* CounterTerrorists */) {
        return ansiStyles.blueBright.open;
    }
    return ansiStyles.gray.open;
}
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
        function formatSayText(entityIndex, text) {
            text = "\x01" + text;
            // If we have an entity index set, colour 0x03 in that entity's team colour
            if (entityIndex > 0) {
                const ent = demoFile.entities.entities[entityIndex];
                if (ent instanceof player_1.Player) {
                    text = text.replace(/\x03/g, teamNumberToAnsi(ent.teamNumber));
                }
            }
            // Replace each colour code with its corresponding ANSI escape sequence
            for (const r of colourReplacements) {
                text = text.replace(r.pattern, ansiStyles.reset.open + r.ansi);
            }
            return text + ansiStyles.reset.open;
        }
        demoFile.on("start", () => {
            console.log("Demo header:", demoFile.header);
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
        demoFile.conVars.on("change", e => {
            console.log("%s: %s -> %s", e.name, e.oldValue, e.value);
        });
        demoFile.gameEvents.on("player_death", e => {
            const victim = demoFile.entities.getByUserId(e.userid);
            const victimColour = teamNumberToAnsi(victim ? victim.teamNumber : 1 /* Spectator */);
            const victimName = victim ? victim.name : "unnamed";
            const attacker = demoFile.entities.getByUserId(e.attacker);
            const attackerColour = teamNumberToAnsi(attacker ? attacker.teamNumber : 1 /* Spectator */);
            const attackerName = attacker ? attacker.name : "unnamed";
            const headshotText = e.headshot ? " HS" : "";
            console.log(`${attackerColour}${attackerName}${ansiStyles.reset.open} [${e.weapon}${headshotText}] ${victimColour}${victimName}${ansiStyles.reset.open}`);
        });
        demoFile.userMessages.on("TextMsg", e => {
            const params = e.params
                .map(param => param[0] === "#"
                ? standardMessages[param.substring(1)] || param
                : param)
                .filter(s => s.length);
            const formatted = util.format.apply(null, params);
            console.log(formatSayText(0, formatted));
        });
        demoFile.userMessages.on("SayText", e => {
            console.log(formatSayText(0, e.text));
        });
        demoFile.userMessages.on("SayText2", e => {
            const nonEmptyParams = e.params.filter(s => s.length);
            const msgText = standardMessages[e.msgName];
            const formatted = msgText
                ? util.format.apply(null, [msgText, ...nonEmptyParams])
                : `${e.msgName} ${nonEmptyParams.join(" ")}`;
            console.log(formatSayText(e.entIdx, formatted));
        });
        demoFile.gameEvents.on("round_end", e => {
            console.log("*** Round ended '%s' (reason: %s, tick: %d, time: %d secs)", demoFile.gameRules.phase, e.reason, demoFile.currentTick, demoFile.currentTime | 0);
            // We can't print the team scores here as they haven't been updated yet.
            // See round_officially_ended below.
        });
        demoFile.gameEvents.on("round_officially_ended", logTeamScores);
        demoFile.entities.on("create", e => {
            // We're only interested in player entities being created.
            if (!(e.entity instanceof player_1.Player)) {
                return;
            }
            console.log("%s (%s) joined the game", e.entity.name, e.entity.steamId);
        });
        demoFile.entities.on("beforeremove", e => {
            if (!(e.entity instanceof player_1.Player)) {
                return;
            }
            console.log("%s left the game", e.entity.name);
        });
        // Start parsing the buffer now that we've added our event listeners
        demoFile.parse(buffer);
    });
}
parseDemoFile(process.argv[2]);
//# sourceMappingURL=dumpfile.js.map