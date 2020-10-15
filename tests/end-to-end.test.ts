import * as fs from "fs";
import { join } from "path";
import { DemoFile } from "../src/index";

const root = join(__dirname, "..");

it("parses real world GOTV demo", done => {
  // 5 minute timeout to parse the whole demo
  jest.setTimeout(5 * 60 * 1000);

  const demo = new DemoFile();
  const timeline: string[] = [];

  function log(name: string, data: any) {
    const line = `[${demo.currentTick}] ${name}: ${JSON.stringify(data)}`;
    timeline[timeline.length] = line;
  }

  demo.on("start", () => {
    log("start", demo.header);
  });

  let lastProgressTime = 0;
  demo.on("progress", frac => {
    const now = Date.now();
    if (now - lastProgressTime > 5000) {
      lastProgressTime = now;
      console.log(`Progress: ${(frac * 100) | 0}%`);
    }
  });

  demo.gameEvents.on("event", e => {
    if (e.name === "player_footstep") return;
    log("game_event", e);
  });

  fs.readFile(join(root, "demos/pc419-vs-chiefs-mirage.dem"), (err, buffer) => {
    expect(err).toBeFalsy();

    const startTime = Date.now();
    demo.parse(buffer);

    demo.on("end", e => {
      expect(e.error).toBeFalsy();
      //expect(timeline).toMatchSnapshot();

      let elapsedSecs = (Date.now() - startTime) / 1000;
      console.log(
        `Parsed ${demo.header.playbackTicks} ticks in ${elapsedSecs.toFixed(
          2
        )} secs (${(demo.header.playbackTicks / elapsedSecs) | 0} ticks/sec)`
      );

      done();
    });
  });
});
