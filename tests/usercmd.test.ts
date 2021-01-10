import { DemoFile } from "../src/index";
import { monitorProgress, startParsing, Timeline } from "./util";

test("usercmds are emitted", done => {
  const demoFileName = "testgamedeouf.dem";
  const demo = new DemoFile();
  monitorProgress(demoFileName, demo);

  const timeline = new Timeline(demo);

  demo.on("start", () => {
    timeline.log("start", demo.header);
  });

  demo.on("usercmd", usercmd => {
    if (usercmd.tickCount % 1000 === 0) timeline.log("usercmd", usercmd);
  });

  demo.on("end", e => {
    expect(e.error).toBeFalsy();
    timeline.assertMatches();

    done();
  });

  startParsing(demoFileName, demo);
});
