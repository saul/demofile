import { DemoFile, Player, Team, TeamNumber } from "../src/index";
import { monitorProgress, Timeline } from "./util";
import * as nock from "nock";
import * as ByteBuffer from "bytebuffer";

test("broadcast stream can be read", done => {
  const demo = new DemoFile();
  monitorProgress("broadcast", demo);

  const timeline = new Timeline(demo);

  demo.conVars.on("change", e => {
    timeline.log("cvar_change", e);
  });

  demo.gameEvents.on("event", e => {
    if (e.name === "player_footstep") return;
    timeline.log("game_event", e);
  });

  demo.gameEvents.on("round_end", e => {
    for (const player of demo.players) {
      timeline.log(`player:${player.userId}`, {
        name: player.name,
        location: player.placeName,
        lifeState: player.lifeState,
        type: player.isFakePlayer ? "bot" : player.isHltv ? "gotv" : "human",
        position: player.position,
        velocity: player.velocity,
        weapon: player.weapon?.itemName
      });
    }

    timeline.log("round_end", {
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

    timeline.log("player_activate", {
      name: e.entity.name,
      steamId: e.entity.steamId,
      steam64Id: e.entity.steam64Id,
      userInfo: e.entity.userInfo
    });
  });

  demo.gameEvents.on("round_officially_ended", e => {
    const teams = demo.teams;

    const terrorists = teams[TeamNumber.Terrorists]!;
    const cts = teams[TeamNumber.CounterTerrorists]!;

    const getTeamData = (team: Team) => ({
      name: team.teamName,
      clanName: team.clanName,
      score: team.score
    });

    timeline.log("team_scores", {
      t: getTeamData(terrorists),
      ct: getTeamData(cts)
    });
  });

  demo.userMessages.on("message", e => {
    // Skip particularly noisy user messages
    if (e.name === "HudMsg" || e.name === "ProcessSpottedEntityUpdate") return;

    timeline.log("user_message", e);
  });

  demo.on("end", e => {
    expect(e.error).toBeFalsy();
    timeline.assertMatches();

    done();
  });

  nock("https://demofile.local")
    .get("/live/sync")
    .replyWithFile(200, __dirname + "/fragments/sync.json");

  nock("https://demofile.local")
    .get("/live/0/start")
    .replyWithFile(200, __dirname + "/fragments/0_start.bin");

  nock("https://demofile.local")
    .get("/live/386/full")
    .replyWithFile(200, __dirname + "/fragments/386_full.bin");

  [386, 387, 388, 389, 390].forEach(fragmentId => {
    nock("https://demofile.local")
      .get(`/live/${fragmentId}/delta`)
      .replyWithFile(200, __dirname + `/fragments/${fragmentId}_delta.bin`);
  });

  // Assume last fragment could not be found for the first attempt
  nock("https://demofile.local").get(`/live/391/delta`).reply(404, "not found");

  // Construct a fake 'dem_stop' fragment to finish the stream
  nock("https://demofile.local")
    .get(`/live/391/delta`)
    .reply(200, Buffer.from(new Uint8Array([7, 0, 0, 0, 0, 0])));

  demo.parseBroadcast("https://demofile.local/live/");
});
