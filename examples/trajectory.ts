/*
Example output:

...
models/Weapons/w_eq_smokegrenade_thrown.mdl thrown by PC419 FluentSwede { x: -373.46875, y: -2382.0625, z: -95.09375 } -> { x: 274.3125, y: -1496.21875, z: -173.96875 }
models/Weapons/w_eq_flashbang_dropped.mdl thrown by PC419 FluentSwede { x: 593.28125, y: -1396.46875, z: -182.65625 } -> { x: 1176.25, y: -1128.90625, z: -86.96875 }
models/Weapons/w_eq_smokegrenade_thrown.mdl thrown by PC419 FluentSwede { x: 795, y: -1546.25, z: -8.28125 } -> { x: -659.6875, y: -1271.625, z: -165.96875 }
models/Weapons/w_eq_flashbang_dropped.mdl thrown by PC419 FluentSwede { x: 368.6875, y: -1544.40625, z: -144.3125 } -> { x: -581.4375, y: -1531.34375, z: -6.21875 }
models/Weapons/w_eq_smokegrenade_thrown.mdl thrown by PC419 valentino { x: -1256.96875, y: -1469.8125, z: -92.15625 } -> { x: -1245.0625, y: -1420.0625, z: -173.96875 }
Finished.
*/

import { DemoFile } from "demofile";
import * as fs from "fs";

function parseDemoFile(path: string) {
  const stream = fs.createReadStream(path);
  const demoFile = new DemoFile();

  demoFile.on("grenadeTrajectory", e => {
    const start = e.trajectory[0]!;
    const end = e.trajectory[e.trajectory.length - 1]!;

    console.log(
      `${e.projectile.modelName} thrown by ${e.thrower.name}`,
      start,
      "->",
      end
    );
  });

  demoFile.on("end", e => {
    if (e.error) {
      console.error("Error during parsing:", e.error);
      process.exitCode = 1;
    }

    console.log("Finished.");
  });

  // Start parsing the stream now that we've added our event listeners
  demoFile.parseStream(stream);
}

parseDemoFile(process.argv[2]!);
