'use strict';

var fs = require('fs');
var assert = require('assert');
var pace = require('pace');

var demo = require('./demo');

function parseDemoFile(path) {
  fs.readFile(path, function (err, buffer) {
    assert.ifError(err);

    var demoFile = new demo.DemoFile();
    var pace;

    demoFile.on('start', () => {
      pace = require('pace')({total: demoFile.header.playbackTicks, maxBurden: 0.1});
    });

    demoFile.on('tickend', tick => {
      pace.op(tick);
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
