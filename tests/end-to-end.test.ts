import * as fs from "fs";
import { join } from "path";
import { DemoFile } from "../src/index";

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

      demo.gameEvents.on("event", e => {
        if (e.name === "player_footstep") return;
        log("game_event", e);
      });

      demo.userMessages.on("message", e => {
        log("user_message", e);
      });

      demo.on("end", e => {
        expect(e.error).toBeFalsy();
        //expect(timeline).toMatchSnapshot();
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
