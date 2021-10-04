import { DemoFile, extractPublicEncryptionKey } from "../src/index";
import { monitorProgress, startParsing, Timeline } from "./util";
import { readFile } from "fs";
import { join } from "path";

test("public matchmaking chat can be decrypted", done => {
  const demoFileName = "match730_003456990748161867873_0727052756_188.dem";
  const demo = new DemoFile();
  monitorProgress(demoFileName, demo);

  const timeline = new Timeline(demo);

  demo.userMessages.on("SayText2", um => {
    timeline.log("SayText2", `${um.msgName} ${um.params.join(" ")}`);
  });

  demo.on("end", e => {
    expect(e.error).toBeFalsy();
    timeline.assertMatches();

    done();
  });

  readFile(
    join(
      __dirname,
      "..",
      "demos",
      "match730_003456990748161867873_0727052756_188.dem.info"
    ),
    (err, data) => {
      expect(err).toBeFalsy();

      const publicKey = extractPublicEncryptionKey(data);
      demo.setEncryptionKey(publicKey);

      startParsing(demoFileName, demo);
    }
  );
});
