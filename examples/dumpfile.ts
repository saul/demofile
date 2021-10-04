/* eslint-disable no-console */

// This file is an thorough example of how to log player kills,
// team scores, chat text and server cvar changes from a demo file.

import * as ansiStyles from "ansi-styles";
import * as assert from "assert";
import * as fs from "fs";
import * as util from "util";
import { DemoFile, Player, TeamNumber } from "demofile";

const colourReplacements = [
  { pattern: /\x01/g, ansi: ansiStyles.whiteBright.open }, // Default
  { pattern: /\x02/g, ansi: ansiStyles.red.open }, // Dark Red
  { pattern: /\x03/g, ansi: ansiStyles.magenta.open }, // Light purple
  { pattern: /\x04/g, ansi: ansiStyles.greenBright.open }, // Bright Green
  { pattern: /\x05/g, ansi: ansiStyles.green.open }, // Pale Green
  { pattern: /\x06/g, ansi: ansiStyles.greenBright.open }, // Green
  { pattern: /\x07/g, ansi: ansiStyles.redBright.open }, // Pale Red
  { pattern: /\x08/g, ansi: ansiStyles.gray.open }, // Grey
  { pattern: /\x09/g, ansi: ansiStyles.yellowBright.open }, // Yellow
  { pattern: /\x0A/g, ansi: ansiStyles.white.open }, // Silver
  { pattern: /\x0B/g, ansi: ansiStyles.blueBright.open }, // Blue
  { pattern: /\x0C/g, ansi: ansiStyles.blue.open }, // Dark Blue
  { pattern: /\x0D/g, ansi: ansiStyles.magenta.open }, // Blue Grey for SayText2, Purple for SayText
  { pattern: /\x0E/g, ansi: ansiStyles.magentaBright.open }, // Magenta
  { pattern: /\x0F/g, ansi: ansiStyles.red.open }, // Dull Red
  { pattern: /\x10/g, ansi: ansiStyles.yellow.open } // Orange
];

const standardMessages: { [message: string]: string | undefined } = {
  Cstrike_Chat_All: "\x03%s\x01 : %s",
  Cstrike_Chat_AllDead: "*DEAD* \x03%s\x01 : %s",
  Game_connected: "%s connected."
};

function teamNumberToAnsi(teamNum: TeamNumber) {
  if (teamNum === TeamNumber.Terrorists) {
    return ansiStyles.redBright.open;
  }
  if (teamNum === TeamNumber.CounterTerrorists) {
    return ansiStyles.blueBright.open;
  }
  return ansiStyles.gray.open;
}

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

    function formatSayText(entityIndex: number, text: string) {
      text = "\x01" + text;

      // If we have an entity index set, colour 0x03 in that entity's team colour
      if (entityIndex > 0) {
        const ent = demoFile.entities.entities.get(entityIndex);
        if (ent instanceof Player) {
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
      } else {
        logTeamScores();
      }

      console.log("Finished.");
    });

    demoFile.conVars.on("change", e => {
      console.log("%s: %s -> %s", e.name, e.oldValue, e.value);
    });

    demoFile.gameEvents.on("player_death", e => {
      const victim = demoFile.entities.getByUserId(e.userid);
      const victimColour = teamNumberToAnsi(
        victim ? victim.teamNumber : TeamNumber.Spectator
      );
      const victimName = victim ? victim.name : "unnamed";

      const attacker = demoFile.entities.getByUserId(e.attacker);
      const attackerColour = teamNumberToAnsi(
        attacker ? attacker.teamNumber : TeamNumber.Spectator
      );
      const attackerName = attacker ? attacker.name : "unnamed";

      const headshotText = e.headshot ? " HS" : "";

      console.log(
        `${attackerColour}${attackerName}${ansiStyles.reset.open} [${e.weapon}${headshotText}] ${victimColour}${victimName}${ansiStyles.reset.open}`
      );
    });

    demoFile.userMessages.on("TextMsg", e => {
      const params = e.params
        .map(param =>
          param[0] === "#"
            ? standardMessages[param.substring(1)] || param
            : param
        )
        .filter(s => s.length) as [string, ...string[]];

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
      console.log(
        "*** Round ended '%s' (reason: %s, tick: %d, time: %d secs)",
        demoFile.gameRules.phase,
        e.reason,
        demoFile.currentTick,
        demoFile.currentTime | 0
      );

      // We can't print the team scores here as they haven't been updated yet.
      // See round_officially_ended below.
    });

    demoFile.gameEvents.on("round_officially_ended", logTeamScores);

    demoFile.entities.on("create", e => {
      // We're only interested in player entities being created.
      if (!(e.entity instanceof Player)) {
        return;
      }

      console.log("%s (%s) joined the game", e.entity.name, e.entity.steamId);
    });

    demoFile.entities.on("beforeremove", e => {
      if (!(e.entity instanceof Player)) {
        return;
      }

      console.log("%s left the game", e.entity.name);
    });

    // Start parsing the buffer now that we've added our event listeners
    demoFile.parse(buffer);
  });
}

parseDemoFile(process.argv[2]);
