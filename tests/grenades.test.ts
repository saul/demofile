import { DemoFile } from "../src/index";
import { monitorProgress, startParsing, Timeline } from "./util";

test("grenade events from GOTV demo", done => {
  const demoFileName = "pc419-vs-chiefs-mirage.dem";
  const demo = new DemoFile();
  monitorProgress(demoFileName, demo);

  const timeline = new Timeline(demo);

  demo.on("molotovDetonate", e => {
    timeline.log("molotovDetonate", {
      ...e,
      grenadeType: e.projectile.grenadeType
    });
  });

  demo.on("grenadeTrajectory", e => {
    timeline.log("grenadeTrajectory", {
      ...e,
      grenadeType: e.projectile.grenadeType
    });
  });

  demo.on("end", e => {
    expect(e.error).toBeFalsy();
    timeline.assertMatches();
    done();
  });

  startParsing(demoFileName, demo);
});
