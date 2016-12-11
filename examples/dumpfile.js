/*eslint-disable no-console*/

'use strict';

var fs = require('fs');
var assert = require('assert');

var demo = require('../demo');

function parseDemoFile(path) {
  fs.readFile(path, function (err, buffer) {
    assert.ifError(err);

    var demoFile = new demo.DemoFile();

    demoFile.on('start', () => {
      console.log(demoFile.header);
    });

    demoFile.stringTables.on('update', e => {
      if (e.table.name !== 'userinfo' || e.userData == null) {
        return;
      }

      console.log(e.entryIndex, e.userData);
    });

    demoFile.parse(buffer);
  });
}

parseDemoFile(process.argv[2]);
