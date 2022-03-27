import { DemoFile } from "../src/index";
import { monitorProgress, startParsing, Timeline } from "./util";

test("item purchases from GOTV demo", done => {
  const demoFileName = "pc419-vs-chiefs-mirage.dem";
  const demo = new DemoFile();
  monitorProgress(demoFileName, demo);

  const timeline = new Timeline(demo);

  demo.on("itemPurchase", e => {
    timeline.log("itemPurchase", e);
  });

  demo.on("end", e => {
    expect(e.error).toBeFalsy();
    timeline.assertMatches();
    done();
  });

  startParsing(demoFileName, demo);
});
