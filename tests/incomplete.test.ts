import { DemoFile } from "../src/index";
import { monitorProgress, startParsing } from "./util";

test("incomplete demos can be fully parsed", done => {
  const demoFileName = "vitality-vs-faze-m1-mirage.dem";
  const demo = new DemoFile();
  monitorProgress(demoFileName, demo);

  demo.on("end", e => {
    expect(e.error).toBeFalsy();
    expect(e.incomplete).toStrictEqual(true);
    done();
  });

  startParsing(demoFileName, demo);
});
