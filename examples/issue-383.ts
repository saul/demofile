import { DemoFile, TeamNumber } from "demofile";
import * as fs from "fs";

//async function parseDemoFile(url: string) {
function parseDemoFile(path: string): Promise<{ t: string; ct: string }> {
  return new Promise((resolve, reject) => {
    const stream = fs.createReadStream(path);
    const df = new DemoFile();

    let res = {
      t: "",
      ct: ""
    };

    df.on("start", () => {
      // Start reading
      console.log("Start reading !");
      console.log(df.header);
    });

    df.on("tickend", () => {
      df.teams.forEach(team => {
        if (team.clanName) {
          if (team.teamNumber === TeamNumber.Terrorists) {
            res.t = team.clanName;
          } else if (team.teamNumber === TeamNumber.CounterTerrorists) {
            res.ct = team.clanName;
          }
        }
      });

      // If we have both team names, resolve the promise as we have the result.
      if (res.t && res.ct) {
        df.cancel();
        resolve(res);
      }
    });

    df.on("end", e => {
      if (e.error) {
        reject(e.error);
      } else {
        reject(new Error("Teams do not have clan names"));
      }
    });

    // Start parsing the stream now that we've added our event listeners
    //await df.parseBroadcast(url, abortController.signal);
    df.parseStream(stream);
  });
}

//parseDemoFile("https://url/match/s111t222");
parseDemoFile(process.argv[2]!).then(res => console.log("Teams:", res));
