import { DemoFile, TeamNumber, Team, Player } from "../src/index";
import { monitorProgress, startParsing, Timeline } from "./util";

test("parses real world GOTV demo", done => {
  const demoFileName = "pc419-vs-chiefs-mirage.dem";
  const demo = new DemoFile();
  monitorProgress(demoFileName, demo);

  const timeline = new Timeline(demo);

  demo.on("start", () => {
    timeline.log("start", demo.header);
  });

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

    const terrorists = teams[TeamNumber.Terrorists];
    const cts = teams[TeamNumber.CounterTerrorists];

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

  startParsing(demoFileName, demo);
});
