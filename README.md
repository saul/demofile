# demofile ![npm](https://img.shields.io/npm/v/demofile) ![CI](https://github.com/saul/demofile/workflows/CI/badge.svg)

A node.js library for parsing Counter-Strike Global Offensive (CSGO) demo files.
The library is also Browserify-able, and a standalone bundle that you can `<script src="...">` is available in [browser/bundle.js](browser/bundle.js).

> ⚠️ This library requires Node v14 or later.

### ❓ Need help

- First, search the ['Questions' discussion board](https://github.com/saul/demofile/discussions/categories/questions) - your question has probably already been asked.
- If not, [start a new 'Questions' discussion](https://github.com/saul/demofile/discussions/new?category=questions).
- If you think you've found a bug, [raise an issue](https://github.com/saul/demofile/issues/new/choose).

## Supported demo features

- GOTV and POV perspective fully supported
- Game events (e.g. `player_death`)
- User messages (e.g. chat messages, HUD text)
- Console variables (cvar/convars)
- Entity updates, server classes, data tables
- String tables
- Reading encrypted messages (e.g. chat in public matchmaking demos)

## Running the examples

Getting started is simple:

```bash
.../demofile$ npm ci
.../demofile$ cd examples
.../demofile/examples$ npm ci
```

You can now run the example scripts. Take a look in the [`examples`](https://github.com/saul/demofile/tree/master/examples) folder for some scripts to try out. Detailed descriptions of these scripts can be found below in the [Examples](#examples) section below.

If you don't have any demo files to hand, use the `demos/download.sh` Bash script to download the ones used for testing.

```bash
.../demofile/examples$ npx ts-node dumpfile.ts ../demos/pc419-vs-chiefs-mirage.dem
npx: installed 14 in 1.883s
Demo header: {
  magic: 'HL2DEMO',
  protocol: 4,
  networkProtocol: 13753,
  serverName: 'Counter-Strike: Global Offensive',
  clientName: 'GOTV Demo',
  mapName: 'de_mirage',
  gameDirectory: 'csgo',
  playbackTime: 2569.375,
  playbackTicks: 328880,
  playbackFrames: 164271,
  signonLength: 433479
}
...
```

## Installation

### Node

```bash
npm install --save demofile
```

### Browser

```html
<script src="browser/bundle.js"></script>
```

The `DemoFile` module will be available as `window.demofile`.

## Screenshot

Using the [dumpfile example](https://github.com/saul/demofile/blob/master/examples/dumpfile.ts):

![Example output](./example.png)

## Documentation

Auto-generated API documentation is available at [saul.github.io/demofile](https://saul.github.io/demofile).

| Class                                                                   | Description                         |
| ----------------------------------------------------------------------- | ----------------------------------- |
| [DemoFile](https://saul.github.io/demofile/classes/_demo_demofile.html) | Represents a demo file for parsing. |

The _DemoFile_ object has properties which point to instances of several other classes that can be used to inspect and listen to changes in the game world:

| Class                                                                                    | Property                | Description                                                                            |
| ---------------------------------------------------------------------------------------- | ----------------------- | -------------------------------------------------------------------------------------- |
| [ConVars](https://saul.github.io/demofile/classes/_convars_.convars.html)                | `demoFile.conVars`      | Manages console variables. (Only `FCVAR_NOTIFY` and `FCVAR_REPLICATED` are available.) |
| [Entities](https://saul.github.io/demofile/classes/_entities_.entities.html)             | `demoFile.entities`     | Represents entities and networked properties within a demo.                            |
| [GameEvents](https://saul.github.io/demofile/classes/_gameevents_.gameevents.html)       | `demoFile.gameEvents`   | Manages game events for a demo file. (e.g. `player_death`, `bomb_defused`)             |
| [StringTables](https://saul.github.io/demofile/classes/_stringtables_.stringtables.html) | `demoFile.stringTables` | Handles string tables for a demo file. (e.g. `userinfo`)                               |
| [UserMessages](https://saul.github.io/demofile/classes/_usermessages_.usermessages.html) | `demoFile.userMessages` | Handles user messages for a demo file. (e.g. `SayText` for in-game chat messages)      |

There are several classes which allow access to different types of entities (e.g. players, items, props). These are summarised below:

| Entity                                                                                         | Usage                                                                         | Description                                                                                                 |
| ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| [Networkable](https://saul.github.io/demofile/classes/_entities_networkable_.networkable.html) | `demoFile.entities.getByHandle`<br>`demoFile.entities.entities.get(entIndex)` | Base class of all in-game entities, even non-renderable entities (e.g. `CCSTeam`).                          |
| [BaseEntity](https://saul.github.io/demofile/classes/_entities_baseentity_.baseentity.html)    |                                                                               | Base class of the vast majority of in-game entities (e.g. players, weapons, all other renderable entities). |
| [Player](https://saul.github.io/demofile/classes/_entities_player_.player.html)                | `demoFile.entities.players`<br>`demoFile.entities.getByUserId`                | Represents an in-game player.                                                                               |
| [Team](https://saul.github.io/demofile/classes/_entities_team_.team.html)                      | `demoFile.entities.teams`<br>`player.team`                                    | Represents a team (terrorists, counter-terrorists, spectators).                                             |
| [Weapon](https://saul.github.io/demofile/classes/_entities_weapon_.weapon.html)                | `demoFile.entities.weapons`<br>`player.weapon`<br>`player.weapons`            | Represents an in-game weapon (guns, grenades, knifes).                                                      |
| [Projectile](https://saul.github.io/demofile/classes/_entities_projectile_.projectile.html)    |                                                                               | Represents a thrown grenade projectile (e.g. a flying smoke grenade).                                       |
| [GameRules](https://saul.github.io/demofile/classes/_entities_gamerules_.gamerules.html)       | `demoFile.gameRules`                                                          | Represents the game rules and parts of the match state (e.g. round number, is warmup)                       |

## API

This library provides full access to all data available in CSGO demo files. Unlike some other libraries, `demofile` is feature complete and supports the latest demos. As well as providing high-level APIs to access the state of the game, low-level access is available and is not discouraged.

Note that events are fired at the end of a tick, after all entity props and string tables have been updated.

### Examples

Various examples are available in the `examples` folder:

| Example                                                                                        | Description                                                                            |
| ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| [`join-leave.ts`](https://github.com/saul/demofile/blob/master/examples/join-leave.ts)         | Print all players that join and leave the game during the course of the demo.          |
| [`molotov.ts`](https://github.com/saul/demofile/blob/master/examples/molotov.ts)               | Prints the location of molotov/incendiary grenade explosions.                          |
| [`paintkits.ts`](https://github.com/saul/demofile/blob/master/examples/paintkits.ts)           | Collects paint kits of each weapon that is used in a kill.                             |
| [`plant-site.ts`](https://github.com/saul/demofile/blob/master/examples/plant-site.ts)         | Prints which player planted the bomb and at which site.                                |
| [`purchases.ts`](https://github.com/saul/demofile/blob/master/examples/purchases.ts)           | Prints which items are purchased by each player.                                       |
| [`rank.ts`](https://github.com/saul/demofile/blob/master/examples/rank.ts)                     | At the end of the game, prints all player ranks.                                       |
| [`scores.ts`](https://github.com/saul/demofile/blob/master/examples/scores.ts)                 | Prints team scores after each round.                                                   |
| [`tickrate.ts`](https://github.com/saul/demofile/blob/master/examples/tickrate.ts)             | Prints demo tick rate and duration in seconds.                                         |
| [`trajectory.ts`](https://github.com/saul/demofile/blob/master/examples/trajectory.ts)         | Prints grenade trajectories and who threw them.                                        |
| ⚠ Advanced: [`dumpfile.ts`](https://github.com/saul/demofile/blob/master/examples/dumpfile.ts) | Advanced example of recreating coloured chat messages, round scores and the kill feed. |

#### Print kills

```js
const fs = require("fs");
const demofile = require("demofile");

const demoFile = new demofile.DemoFile();

demoFile.gameEvents.on("player_death", e => {
  const victim = demoFile.entities.getByUserId(e.userid);
  const victimName = victim ? victim.name : "unnamed";

  // Attacker may have disconnected so be aware.
  // e.g. attacker could have thrown a grenade, disconnected, then that grenade
  // killed another player.
  const attacker = demoFile.entities.getByUserId(e.attacker);
  const attackerName = attacker ? attacker.name : "unnamed";

  const headshotText = e.headshot ? " HS" : "";

  console.log(`${attackerName} [${e.weapon}${headshotText}] ${victimName}`);
});

demoFile.parseStream(fs.createReadStream("test.dem"));

/* Outputs:

HS [cz75a HS] flusha
Lekr0 [ak47 HS] friberg
KRIMZ [ak47] HS
JW [mac10 HS] Mixwell
JW [hegrenade] HS
JW [mac10 HS] Magisk

*/
```

#### Print player information when it changes

```js
const fs = require("fs");
const demofile = require("demofile");

const demoFile = new demofile.DemoFile();

demoFile.stringTables.on("update", e => {
  if (e.table.name === "userinfo" && e.userData != null) {
    console.log("\nPlayer info updated:");
    console.log(e.entryIndex, e.userData);
  }
});

demoFile.parseStream(fs.createReadStream("test.dem"));

/* Outputs:

Player info updated:
0 {
  xuid: Long { low: 0, high: 0, unsigned: false },
  name: 'ESEA SourceTV',
  userId: 2,
  guid: 'BOT',
  friendsId: 0,
  friendsName: '',
  fakePlayer: true,
  isHltv: false
}

Player info updated:
1 {
  xuid: Long { low: 32578248, high: 17825793, unsigned: false },
  name: 'PC419 m0nt-S-',
  userId: 3,
  guid: 'STEAM_1:0:16289124',
  friendsId: 32578248,
  friendsName: '',
  fakePlayer: false,
  isHltv: false
}

[repeated for other players]
*/
```

### Useful links

- [CS:GO Game Events - AlliedModders Wiki](https://wiki.alliedmods.net/Counter-Strike:_Global_Offensive_Events)

## Contributing

Please read the [Contributing Guidelines](./CONTRIBUTING.md) to learn how you can help out on the project.
