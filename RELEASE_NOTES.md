## Release Notes

<!--
### Unreleased

- Unreleased release notes here
-->

### 1.5.0 (2020-06-18)

- :zap: #156: Added `error` event to demofile when parsing fails
- :zap: #156: Don't emit `tickend` on error

### 1.4.0 (2020-06-15)

- :sparkles: #152: Updated event definitions
- :sparkles: #148: Added `Player#isControllingBot` (thanks @akiver)
- :bug: #147: Fix `Team#members` returning null players (thanks @akiver)
- :bug: #154: Fix `EventEmitter` TypeScript compilation error

### 1.3.1 (2020-03-03)

- :sparkles: Update item definitions

### 1.3.0 (2020-02-09)

- :sparkles: #128: Add `Weapon#clipAmmo`, `Weapon#reserveAmmo` and `Weapon#ownerAmmo`

### 1.2.0 (2020-02-08)

- :bug: #65: Fixed tick/time calculations on demos with incomplete headers

### 1.1.1 (2019-11-06)

- :bug: Fix .js protobuf files not being compiled

### 1.1.0 (2019-11-06)

- :sparkles: #115: TypeScript definitions are now available (thanks to @akiver)

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
