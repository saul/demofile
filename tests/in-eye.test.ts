import { DemoFile } from "../src/index";
import { monitorProgress, startParsing, Timeline } from "./util";

test("in eye demos can be parsed", done => {
  const demoFileName = "testgamedeouf.dem";
  const demo = new DemoFile();
  monitorProgress(demoFileName, demo);

  const timeline = new Timeline(demo);

  demo.gameEvents.on("round_end", e => {
    for (const player of demo.players) {
      timeline.log(`player:${player.userId}`, {
        name: player.name,
        dormant: player.isDormant,
        lifeState: player.lifeState,
        type: player.isHltv ? "gotv" : player.isFakePlayer ? "bot" : "human",
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

  demo.entities.on("create", ({ entity }) => {
    timeline.log("entities.create", {
      index: entity.index,
      serialNum: entity.serialNum,
      serverClass: entity.serverClass.name
    });
  });

  demo.entities.on("beforeremove", ({ entity, immediate }) => {
    timeline.log("entities.before_remove", {
      index: entity.index,
      serialNum: entity.serialNum,
      serverClass: entity.serverClass.name,
      immediate
    });
  });

  demo.entities.on("remove", index => {
    timeline.log("entities.remove", { index });
  });

  demo.on("end", e => {
    expect(e.error).toBeFalsy();
    timeline.assertMatches();

    done();
  });

  startParsing(demoFileName, demo);
});
