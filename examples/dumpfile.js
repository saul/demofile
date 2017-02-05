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
      console.log('Demo header:', demoFile.header);
    });

    demoFile.on('end', () => {
      console.log('Finished.');
    })

    demoFile.conVars.on('change', e => {
      console.log('%s: %s -> %s', e.name, e.oldValue, e.value)
    })

    demoFile.gameEvents.on('player_death', e => {
      let victim = demoFile.entities.getByUserId(e.userid);
      let attacker = demoFile.entities.getByUserId(e.attacker);
      if (victim && attacker) {
        console.log('%s killed %s with %s (attacker has %d hp remaining)', attacker.name, victim.name, e.weapon, attacker.health);
      }
    });

    demoFile.gameEvents.on('round_end', e => {
      let teams = demoFile.teams;
      let terrorists = teams[demo.TEAM_TERRORISTS];
      let cts = teams[demo.TEAM_CTS];
      console.log('*** Round ended \'%s\'\n\tTerrorists: %s score %d\n\tCTs: %s score %d', demoFile.gameRules.phase, terrorists.clanName, terrorists.score, cts.clanName, cts.score);
    })

    demoFile.entities.on('create', e => {
      if (e.entity.serverClass.name !== 'CCSPlayer') {
        return;
      }

      if (e.entity.userInfo) {
        console.log('%s (%s) joined the game', e.entity.name, e.entity.steamId);
      }
    });

    demoFile.parse(buffer);
  });
}

parseDemoFile(process.argv[2]);
