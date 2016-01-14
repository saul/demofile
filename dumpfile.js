'use strict';

var fs = require('fs');
var assert = require('assert');

var demo = require('./demo');

function parseDemoFile(path) {
  fs.readFile(path, function(err, buffer) {
    assert.ifError(err);

    var demoFile = new demo.DemoFile();
    demoFile.parse(buffer);
  });
}

parseDemoFile('fnatic vs tsm de dust2 part 1.dem');
//parseDemoFile('auto0-20160107-211630-2083922612-de_dust2-Bog_Standard.dem');
