# demofile

A node.js library for parsing modern (protobuf) Source 1 demo files.

## Supported Games

- Counter-Strike: Global Offensive

## Supported Demo Features

- [x] Entity updates, server classes, data tables
- [x] User messages
- [x] String tables
- [x] Game events
- [ ] User commands
- [ ] Console commands

## Installation

    npm install --save demofile

Generate documentation to `./out/`:

    jsdoc .

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

### 0.1.0 (18/01/16)

- Initial Release

## Acknowledgements

- [CS:GO Protobuf sources copied from SteamKit](https://github.com/SteamRE/SteamKit)
