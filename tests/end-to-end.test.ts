import * as fs from "fs";
import { join } from "path";
import { DemoFile, TeamNumber, Team, Player } from "../src/index";

// Some headroom to parse large demo files
jest.setTimeout(5 * 60 * 1000);

const root = join(__dirname, "..");

function monitorProgress(name: string, demo: DemoFile) {
  let lastProgressTime = 0;
  demo.on("progress", frac => {
    const now = Date.now();
    if (now - lastProgressTime > 5000) {
      lastProgressTime = now;
      console.log(`[${name}] Progress: ${(frac * 100) | 0}%`);
    }
  });

  let startTime = 0;
  demo.on("start", () => {
    startTime = Date.now();
  });

  demo.on("end", () => {
    if (startTime === 0) return;

    // Some demos do not have complete header information.
    // Treat current tick at the end of the demo as the total number of ticks.
    let totalTicks = demo.header.playbackTicks || demo.currentTick;

    let elapsedSecs = (Date.now() - startTime) / 1000;
    console.log(
      `[${name}] Parsed ${totalTicks} ticks in ${elapsedSecs.toFixed(
        2
      )} secs (${(totalTicks / elapsedSecs) | 0} ticks/sec)`
    );
  });
}

function startParsing(demoFileName: string, demo: DemoFile) {
  fs.readFile(join(root, "demos", demoFileName), (err, buffer) => {
    expect(err).toBeFalsy();
    demo.parse(buffer);
  });
}

test.concurrent(
  "parses real world GOTV demo",
  () =>
    new Promise(resolve => {
      const demoFileName = "pc419-vs-chiefs-mirage.dem";
      const demo = new DemoFile();
      monitorProgress(demoFileName, demo);

      const timeline: string[] = [];

      function log(name: string, data: any) {
        const line = `[${demo.currentTick}] ${name}: ${JSON.stringify(data)}`;
        timeline[timeline.length] = line;
      }

      demo.on("start", () => {
        log("start", demo.header);
      });

      demo.conVars.on("change", e => {
        log("cvar_change", e);
      });

      demo.gameEvents.on("event", e => {
        if (e.name === "player_footstep") return;
        log("game_event", e);
      });

      demo.gameEvents.on("round_end", e => {
        for (const player of demo.players) {
          log(`player:${player.userId}`, {
            name: player.name,
            lifeState: player.lifeState,
            type: player.isFakePlayer
              ? "bot"
              : player.isHltv
              ? "gotv"
              : "human",
            position: player.position,
            velocity: player.velocity,
            weapon: player.weapon?.itemName
          });
        }

        log("round_end", {
          ...e,
          phase: demo.gameRules.phase,
          time: demo.currentTime
        });
      });

      demo.entities.on("create", e => {
        // We're only interested in player entities being created.
        if (!(e.entity instanceof Player)) {
          return;
        }

        log("player_activate", {
          name: e.entity.name,
          steamId: e.entity.steamId,
          steam64Id: e.entity.steam64Id,
          userInfo: e.entity.userInfo
        });
      });

      demo.gameEvents.on("round_officially_ended", e => {
        const teams = demo.teams;

        const terrorists = teams[TeamNumber.Terrorists];
        const cts = teams[TeamNumber.CounterTerrorists];

        const getTeamData = (team: Team) => ({
          name: team.teamName,
          clanName: team.clanName,
          score: team.score
        });

        log("team_scores", {
          t: getTeamData(terrorists),
          ct: getTeamData(cts)
        });
      });

      demo.userMessages.on("message", e => {
        // Skip particularly noisy user messages
        if (e.name === "HudMsg" || e.name === "ProcessSpottedEntityUpdate")
          return;

        log("user_message", e);
      });

      demo.on("end", e => {
        expect(e.error).toBeFalsy();
        expect(timeline).toMatchSnapshot();
        resolve();
      });

      startParsing(demoFileName, demo);
    })
);

test.concurrent(
  "incomplete demos can be fully parsed",
  () =>
    new Promise(resolve => {
      const demoFileName = "vitality-vs-faze-m1-mirage.dem";
      const demo = new DemoFile();
      monitorProgress(demoFileName, demo);

      demo.on("end", e => {
        expect(e.error).toBeFalsy();
        expect(e.incomplete).toStrictEqual(true);
        resolve();
      });

      startParsing(demoFileName, demo);
    })
);
