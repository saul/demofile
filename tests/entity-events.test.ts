import { DemoFile } from "../src/index";
import { monitorProgress, startParsing, Timeline } from "./util";

test("entity events on GOTV demo", done => {
  const demoFileName = "pc419-vs-chiefs-mirage.dem";
  const demo = new DemoFile();
  monitorProgress(demoFileName, demo);

  const timeline = new Timeline(demo);

  demo.gameEvents.on("round_end", e => {
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
