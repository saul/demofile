import { DemoFile } from "../src/index";
import { monitorProgress, startParsing, startParsingReadFull } from "./util";

const demoFileName = "vitality-vs-faze-m1-mirage.dem";

function makeIncompleteDemo(done: jest.DoneCallback): DemoFile {
  const demoFileName = "vitality-vs-faze-m1-mirage.dem";
  const demo = new DemoFile();
  monitorProgress(demoFileName, demo);

  demo.on("end", e => {
    expect(e.error).toBeFalsy();
    expect(e.incomplete).toStrictEqual(true);
    done();
  });

  return demo;
}

test("incomplete demos can be parsed as a stream", done => {
  startParsing(demoFileName, makeIncompleteDemo(done));
});

test("incomplete demos can be parsed from a byte array", done => {
  startParsingReadFull(demoFileName, makeIncompleteDemo(done));
});
