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

## Installation

### Browser

    <script src="browser/bundle.js"></script>

The `DemoFile` module will be available as `window.demofile`. 

### Node

    npm install --save demofile

Generate documentation to `./docs/`:

    npm run generate-docs

## API

This library provides full access to the data available in CSGO demo files. Unlike some other libraries, `demofile` is feature complete and supports the latest demos. As well as providing high-level APIs to access the state of the game, low-level access is available and is not discouraged.

Take a look at the `examples/dumpfile.js` file for an indication as to how the library can be used to introspect demo files. This example is by no means exhaustive -- see the 'docs' folder for documentation on all public classes and methods.

Note: It is important to note that events are fired at the end of a tick, after all entity props and string tables have been updated.

### Useful links

- [CS:GO Game Events - AlliedModders Wiki](https://wiki.alliedmods.net/Counter-Strike:_Global_Offensive_Events)
- [Gitter community](https://gitter.im/saul/demofile)

## Example

Print all player information to console:

```js
var demofile = require('demofile');
var fs = require('fs');

fs.readFile('test.dem', function (err, buffer) {
  var demo = new demofile.DemoFile();

  demo.stringTables.on('update', e => {
    if (e.table.name === 'userinfo' && e.userData != null) {
      console.log('Player info updated:');
      console.log(e.entryIndex, e.userData);
    }
  });

  demo.parse(buffer);
});
```

## Release History

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
