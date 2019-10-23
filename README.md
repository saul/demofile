# demofile

[![Join the chat at https://gitter.im/saul/demofile](https://badges.gitter.im/saul/demofile.svg)](https://gitter.im/saul/demofile?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

A node.js library for parsing Counter-Strike Global Offensive (CSGO) demo files.
The library is also Browserify-able, and a standalone bundle that you can `<script src="...">` is available in [browser/bundle.js](browser/bundle.js).

## Supported Demo Features

- Entity updates, server classes, data tables (including instance baselines)
- Both perspectives (GOTV and client-side recorded)
- User messages
- String tables
- Game events
- Console variables

## Documentation

Auto-generated API documentation is available at [saul.github.io/demofile](https://saul.github.io/demofile).

| Class                                                                   | Description                         |
| ----------------------------------------------------------------------- | ----------------------------------- |
| [DemoFile](https://saul.github.io/demofile/classes/_demo_demofile.html) | Represents a demo file for parsing. |

The _DemoFile_ object has properties which point to instances of several other classes that can be used to query the game world:

| Class                                                                                    | Property                | Description                                                                            |
| ---------------------------------------------------------------------------------------- | ----------------------- | -------------------------------------------------------------------------------------- |
| [ConVars](https://saul.github.io/demofile/classes/_convars_.convars.html)                | `demoFile.conVars`      | Manages console variables. (Only `FCVAR_NOTIFY` and `FCVAR_REPLICATED` are available.) |
| [Entities](https://saul.github.io/demofile/classes/_entities_.entities.html)             | `demoFile.entities`     | Represents entities and networked properties within a demo.                            |
| [GameEvents](https://saul.github.io/demofile/classes/_gameevents_.gameevents.html)       | `demoFile.gameEvents`   | Manages game events for a demo file. (e.g. `player_death`, `player_footstep`)          |
| [StringTables](https://saul.github.io/demofile/classes/_stringtables_.stringtables.html) | `demoFile.stringTables` | Handles string tables for a demo file. (e.g. `userinfo`)                               |
| [UserMessages](https://saul.github.io/demofile/classes/_usermessages_.usermessages.html) | `demoFile.userMessages` | Handles user messages for a demo file. (e.g. `SayText` for in-game chat messages)      |

There are several classes which allow access to different types of entities (e.g. players, items, props). These are summarised below:

| Entity                                                                                         | Usage                                                                     | Description                                                                                 |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| [Networkable](https://saul.github.io/demofile/classes/_entities_networkable_.networkable.html) | `demoFile.entities.getByHandle`<br>`demoFile.entities.entities[entIndex]` | Base class of all in-game entities, even non-renderable entities (e.g. `CCSTeam`).          |
| [BaseEntity](https://saul.github.io/demofile/classes/_entities_baseentity_.baseentity.html)    |                                                                           | Base class of most in-game entities (e.g. players, weapons, all other renderable entities). |
| [Player](https://saul.github.io/demofile/classes/_entities_player_.player.html)                | `demoFile.entities.players`<br>`demoFile.entities.getByUserId`            | Represents an in-game player.                                                               |
| [Weapon](https://saul.github.io/demofile/classes/_entities_weapon_.weapon.html)                | `demoFile.entities.weapons`<br>`player.weapon`<br>`player.weapons`        | Represents an in-game weapon (guns, grenades, knifes).                                      |

## Installation

### Browser

    <script src="browser/bundle.js"></script>

The `DemoFile` module will be available as `window.demofile`.

### Node

    npm install --save demofile

## Screenshot

![Example output](./example.png)

## API

This library provides full access to the data available in CSGO demo files. Unlike some other libraries, `demofile` is feature complete and supports the latest demos. As well as providing high-level APIs to access the state of the game, low-level access is available and is not discouraged.

Take a look at the `examples/dumpfile.js` file for an indication as to how the library can be used to introspect demo files. This example is by no means exhaustive -- see the 'docs' folder for documentation on all public classes and methods.

Note: It is important to note that events are fired at the end of a tick, after all entity props and string tables have been updated.

### Useful links

- [CS:GO Game Events - AlliedModders Wiki](https://wiki.alliedmods.net/Counter-Strike:_Global_Offensive_Events)
- [Gitter community](https://gitter.im/saul/demofile)

## Examples

### Print player information when it changes

```ts
import fs = require("fs");
import demofile = require("demofile");

fs.readFile("test.dem", (err, buffer) => {
  const demoFile = new demofile.DemoFile();

  demoFile.stringTables.on("update", e => {
    if (e.table.name === "userinfo" && e.userData != null) {
      console.log("\nPlayer info updated:");
      console.log(e.entryIndex, e.userData);
    }
  });

  demoFile.parse(buffer);
});

/* Outputs:

Player info updated:
12 { unknown_lo: 4294967295,
  unknown_hi: 4294963202,
  xuid_lo: 17825793,
  xuid_hi: 3417033,
  name: 'HS',
  userId: 20,
  guid: 'STEAM_1:1:1708516',
  friendsId: 3417033,
  friendsName: '',
  fakePlayer: false,
  isHltv: false,
  customFiles: [ 0, 0, 0, 0 ],
  xuid: Long { low: 3417033, high: 17825793, unsigned: false } }

[repeated for other players]
*/
```

### Print kills

```ts
import fs = require("fs");
import demofile = require("demofile");

fs.readFile("test.dem", (err, buffer) => {
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

  demoFile.parse(buffer);
});

/* Outputs:

HS [cz75a HS] flusha
Lekr0 [ak47 HS] friberg
KRIMZ [ak47] HS
JW [mac10 HS] Mixwell
JW [hegrenade] HS
JW [mac10 HS] Magisk

*/
```

### Print round changes

```ts
import fs = require("fs");
import demofile = require("demofile");

fs.readFile("test.dem", (err, buffer) => {
  const demoFile = new demofile.DemoFile();

  demoFile.gameEvents.on("round_end", e => {
    console.log(
      "*** Round ended '%s' (reason: %s, time: %d seconds)",
      demoFile.gameRules.phase,
      e.reason,
      demoFile.currentTime
    );

    // We can't print the team scores here as they haven't been updated yet.
    // See round_officially_ended below.
  });

  demoFile.gameEvents.on("round_officially_ended", e => {
    const teams = demoFile.teams;

    const terrorists = teams[2];
    const cts = teams[3];

    console.log(
      "\tTerrorists: %s score %d\n\tCTs: %s score %d",
      terrorists.clanName,
      terrorists.score,
      cts.clanName,
      cts.score
    );
  });

  demoFile.parse(buffer);
});

/* Outputs:

*** Round ended 'first' (reason: 7, time: 74.3828125 seconds)
        Terrorists: fnatic score 0
        CTs: OpTic Gaming score 1
*** Round ended 'first' (reason: 8, time: 134.203125 seconds)
        Terrorists: fnatic score 0
        CTs: OpTic Gaming score 2
*** Round ended 'first' (reason: 9, time: 217.609375 seconds)
        Terrorists: fnatic score 1
        CTs: OpTic Gaming score 2

*/
```

### Print player joining/leaving

```ts
import fs = require("fs");
import demofile = require("demofile");

fs.readFile("test.dem", (err, buffer) => {
  const demoFile = new demofile.DemoFile();

  demoFile.entities.on("create", e => {
    // We're only interested in player entities being created.
    if (!(e.entity instanceof demofile.Player)) {
      return;
    }

    console.log(
      "[Time: %d] %s (%s) joined the game",
      demoFile.currentTime,
      e.entity.name,
      e.entity.steamId
    );
  });

  demoFile.entities.on("beforeremove", e => {
    if (!(e.entity instanceof demofile.Player)) {
      return;
    }

    console.log(
      "[Time: %d] %s left the game",
      demoFile.currentTime,
      e.entity.name
    );
  });

  demoFile.parse(buffer);
});

/* Outputs:

[Time: 51.3125] btx`akatro (STEAM_1:0:2143797827) joined the game
[Time: 60.78125] Nabeegh (STEAM_1:0:427524390) joined the game
[Time: 65.71875] TAURUS left the game
[Time: 76.65625] drragster (STEAM_1:0:2144425259) joined the game

*/
```

### Print demo information (e.g. tick rate)

```js
import fs = require("fs");
import demofile = require("demofile");

fs.readFile("test.dem", (err, buffer) => {
  const demoFile = new demofile.DemoFile();

  demoFile.on("start", () => {
    console.log("Demo header:", demoFile.header);
    console.log("Tick rate:", demoFile.tickRate);

    // Stop parsing - we're finished
    demoFile.cancel();
  });

  demoFile.parse(buffer);
});

/* Outputs:

Demo header: { magic: 'HL2DEMO',
  protocol: 4,
  networkProtocol: 13637,
  serverName: '--== CSGO.PGLARENA.RO # Competitive ==--',
  clientName: 'GOTV Demo',
  mapName: 'de_inferno',
  gameDirectory: 'csgo',
  playbackTime: 3001.1875,
  playbackTicks: 192076,
  playbackFrames: 95995,
  signonLength: 325854 }
Tick rate: 64

*/
```

## Release History

### 1.0.7 (2019-10-23)

- :sparkles: #122: Update item definitions

### 1.0.6 (2019-03-23)

- :zap: #112: Removed reference to `ts-assert-exists`

### 1.0.5 (2019-03-20)

- :zap: #112: Moved some package dependencies to be devDependencies (thanks @razor-x)

### 1.0.4 (2019-02-19)

- :bug: #106: Fixed _Cannot read property 'm_iPrimaryAmmoType' of undefined_

### 1.0.3 (2019-02-19)

- :zap: Add source maps to dist `.js` files

### 1.0.2 (2019-01-13)

- :bug: #101: Fixed player resource indexing one-off error

### 1.0.1 (2019-01-07)

- :bug: #98: Fixed Steam 64 IDs being invalid

### 1.0.0 (2019-01-06)

- :zap: Removed `process.emitWarning` on parsing error. Use `IDemoEndEvent#error` instead.
- :bug: #95: Fixed array decoding bug which made demos made after the Danger Zone update unparseable (thanks @JeffreyLimbacher)

### 1.0.0-beta.1 (2018-10-21)

- :sparkles: #56: **Ported to TypeScript**!
- :sparkles: Added `Networkable` type, which is the new base class of all entities
- :sparkles: `BaseEntity` is now only the base class of renderable entities
- :zap: Removed `BaseEntity#velocity`
- :zap: User messages are now listened without the 'CS_UM\_' prefix
- :zap: String tables are now no longer initialised to their maximum size, instead they grow as needed
- :bug: #86: Fixed `Cannot read property 'messageToObject' of undefined` on some game events
- :bug: Fixed error when trying to parse svc_EntityMsg messages

### 0.4.20 (2018-08-24)

- :bug: Fixed #80, #78: Resource properties returning `undefined`

### 0.4.19 (2018-08-24)

- :sparkles: Added `DemoFile#tickRate`
- :sparkles: Added support for MP5SD (thanks @thorebear)

### 0.4.18 (2018-05-14)

- :sparkles: Added `BaseEntity#handle`
- :sparkles: Added `BaseEntity#modelName` - Name of the model that should be rendered for this entity. (e.g. 'models/Weapons/w_eq_smokegrenade_thrown.mdl')

### 0.4.17 (2018-04-29)

- :sparkles: Added `BaseEntity#velocity`, `BaseEntity#speed`.
- :sparkles: Improved `dumpfile.js` example to be more through.
- :zap: #69: `Player#allSpotters` and `Player#allSpotted` now only returns alive players.

### 0.4.16 (2018-03-22)

- :zap: #62: Fix entity position calculation. Use cell coordinates to determine entity positions.

### 0.4.15 (2018-03-10)

- :zap: #58: Entities are now removed at `tickend`, after events are fired. This means the grenade entity can be accessed in flashbang_detonate and decoy_detonate.

### 0.4.14 (2018-02-26)

- :sparkles: Added `Entities#weapons` (thanks @thorebear)

### 0.4.13 (2018-02-26)

- :sparkles: Added `Player#matchStats` to represent player performance on a per-round basis

### 0.4.12 (2018-02-02)

- :sparkles: #11: Fixed malformed demos resulting in an exception. Added `error` property to the `DemoFile#end` event
- :zap: #52: `GameRules#roundNumber` has been renamed to `GameRules#roundsPlayed` - the old name is available for backwards compatibility

### 0.4.11 (2017-12-20)

- :bug: #43: Fixed parsing of string tables updates for tables with fixed userdata sizes

### 0.4.10 (2017-12-08)

- :sparkles: Added `Player#cashSpendTotal` and `Player#cashSpendThisRound`

### 0.4.9 (2017-10-05)

- :bug: #31: Fixed `DemoFile#currentTime` returning the wrong game time

### 0.4.8 (2017-05-08)

- :bug: #11: Fixed parse error when a 'stop' command is missing from the demo file

### 0.4.7 (2017-05-08)

- :sparkles: Added `Weapon` entity class to represent in-game items (thanks @pedrofornaza)

### 0.4.6 (2017-04-22)

- :sparkles: Added `Player#score`, `Player#mvps` and `Player#clanTag` (thanks @derpalmer)

### 0.4.5 (2017-04-15)

- :bug: Fix exception when calling `DemoFile#cancel` (thanks @derpalmer)

### 0.4.4 (2017-03-21)

- :bug: Revert accidental bit-buffer upgrade

### 0.4.2 (2017-03-20)

- :sparkles: Added `Player#steam64Id` for easy access to Steam64 ID (thanks @derpalmer)

### 0.4.1 (2017-02-23)

- :bug: Fixed exception in `Player#isAlive`

### 0.4.0 (2017-02-05)

Major update

- Added new `Player`, `Team` and `GameRules` entities
- Added `DemoFile#conVars` for accessing console variables and listening for changes
- Updated `dumpfile.js` example to be more representative of real-world usage

### 0.3.1 (2017-01-30)

- :bug: Fixed `Entity#getProp` exception when a prop is updated that is not part of the entity baseline

### 0.3 (2016-11-16)

Major update

- The library now support Browserify and the compiled bundle can be included in web browsers
- Added DemoFile#progress event that indicates what percentage of the demo file has been parsed
- Removed dependency on the `pace` library

### 0.2.11 (2016-10-16)

- :sparkles: Added entities `isHandleSet` to determine if a networked entity handle is set (the game uses `(1 << 21) - 1` to mean empty)

### 0.2.10 (2016-10-11)

- :sparkles: Added entities `getByHandle` to find an entity from a given networked entity handle (e.g., from m_hMyWeapons)

### 0.2.9 (2016-09-12)

- :sparkles: Added entities `baselineupdate` event which is fired whenever the `instancebaseline` string table is updated with new properties.

### 0.2.8 (2016-08-30)

- :sparkles: The `dem_StringTables` command, which holds additional string table data on client-side recorded demos, is now parsed
- :zap: String table `postcreate` is now fired after `svc_CreateStringTable` and `dem_StringTables` are parsed

### 0.2.7 (2016-08-23)

- :sparkles: Added entities `datatablesready` event which is fired when data tables have been parsed.

### 0.2.6 (2016-08-23)

- :sparkles: Added entity `postcreate` event which is fired after an entity has been created and all of its properties parsed.

### 0.2.5 (2016-07-08)

- :sparkles: Added string table `postcreate` event which is fired after a new stringtable's entries have been populated

### 0.2.4 (2016-07-08)

- :bug: Fixed retrieving properties on entities whose server class has no instance baseline

### 0.2.3 (2016-07-03)

- :sparkles: Instance baselines are now parsed and used by `Entity#getProp`

### 0.2.2 (2016-07-03)

- :bug: Fixed stringtable updates affecting all entries in the table

### 0.2.1 (2016-03-25)

- :card_index: Removed `node-protobuf` un-used dependency

### 0.2.0 (2016-01-30)

- :zap: Each tick is now parsed on a separate process tick.
- :zap: Game event callbacks are now fired at the end of the tick.
- :bug: Fixed Vector props decoding to `undefined`.

### 0.1.0 (2016-01-18)

- :tada: Initial release.

## Acknowledgements

- [CS:GO Protobuf sources copied from SteamKit](https://github.com/SteamRE/SteamKit)
