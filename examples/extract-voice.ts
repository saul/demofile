import { DemoFile } from "demofile";
import * as fs from "fs";

function parseDemoFile(path: string) {
  const stream = fs.createReadStream(path);
  const demoFile = new DemoFile();

  const audioFds = new Map<number, number>();

  demoFile.on("svc_VoiceInit", data => {
    console.log("svc_VoiceInit", data);

    if (
      data.codec !== "vaudio_celt" ||
      data.quality !== 5 ||
      data.version !== 3
    ) {
      console.error("Unexpected voice codec");
      process.exit(1);
    }
  });

  demoFile.on("svc_VoiceData", msg => {
    const player = demoFile.entities.getBySteam64Id(msg.xuid);
    if (!player) return;

    let fd = audioFds.get(player.userId);
    if (!fd) {
      fd = fs.openSync(`voice-${msg.xuid}.bin`, "w");
      audioFds.set(player.userId, fd);
    }

    fs.writeSync(fd, msg.voiceData);
  });

  demoFile.on("end", e => {
    if (e.error) {
      console.error("Error during parsing:", e.error);
      process.exitCode = 1;
    }

    audioFds.forEach(fd => {
      fs.closeSync(fd);
    });

    console.log("Finished.");
  });

  // Start parsing the stream now that we've added our event listeners
  demoFile.parseStream(stream);
}

parseDemoFile(process.argv[2]!);
