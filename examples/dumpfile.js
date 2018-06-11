/*eslint-disable no-console*/
/*eslint-disable no-control-regex*/

// This file is an thorough example of how to log player kills,
// team scores, chat text and server cvar changes from a demo file.

'use strict';

const fs = require('fs');
const assert = require('assert');
const ansiStyles = require('ansi-styles');
const demo = require('../demo');
const util = require('util');

const colourReplacements = [
  { 'pattern': /\x01/g, 'ansi': ansiStyles.whiteBright.open }, // Default
  { 'pattern': /\x02/g, 'ansi': ansiStyles.red.open }, // Dark Red
  { 'pattern': /\x03/g, 'ansi': ansiStyles.magenta.open }, // Light purple
  { 'pattern': /\x04/g, 'ansi': ansiStyles.greenBright.open }, // Bright Green
  { 'pattern': /\x05/g, 'ansi': ansiStyles.green.open }, // Pale Green
  { 'pattern': /\x06/g, 'ansi': ansiStyles.greenBright.open }, // Green
  { 'pattern': /\x07/g, 'ansi': ansiStyles.redBright.open }, // Pale Red
  { 'pattern': /\x08/g, 'ansi': ansiStyles.gray.open }, // Grey
  { 'pattern': /\x09/g, 'ansi': ansiStyles.yellowBright.open }, // Yellow
  { 'pattern': /\x0A/g, 'ansi': ansiStyles.white.open }, // Silver
  { 'pattern': /\x0B/g, 'ansi': ansiStyles.blueBright.open }, // Blue
  { 'pattern': /\x0C/g, 'ansi': ansiStyles.blue.open }, // Dark Blue
  { 'pattern': /\x0D/g, 'ansi': ansiStyles.magenta.open }, // Blue Grey for SayText2, Purple for SayText
  { 'pattern': /\x0E/g, 'ansi': ansiStyles.magentaBright.open }, // Magenta
  { 'pattern': /\x0F/g, 'ansi': ansiStyles.red.open }, // Dull Red
  { 'pattern': /\x10/g, 'ansi': ansiStyles.yellow.open } // Orange
];

const standardMessages = {
  'Cstrike_Chat_All': '\x03%s\x01 : %s',
  'Cstrike_Chat_AllDead': '*DEAD* \x03%s\x01 : %s',
  'Game_connected': '%s connected.'
};

function teamNumberToAnsi(teamNum) {
  if (teamNum === demo.TEAM_TERRORISTS)
    return ansiStyles.redBright.open;
  if (teamNum === demo.TEAM_CTS)
    return ansiStyles.blueBright.open;
  return ansiStyles.gray.open;
}

function parseDemoFile(path) {
  fs.readFile(path, function (err, buffer) {
    assert.ifError(err);

    const demoFile = new demo.DemoFile();

    function logTeamScores() {
      let teams = demoFile.teams;

      let terrorists = teams[demo.TEAM_TERRORISTS];
      let cts = teams[demo.TEAM_CTS];

      console.log('\tTerrorists: %s score %d\n\tCTs: %s score %d', terrorists.clanName, terrorists.score, cts.clanName, cts.score);
    }

    function formatSayText(entityIndex, text) {
      text = '\x01' + text;

      // If we have an entity index set, colour 0x03 in that entity's team colour
      if (entityIndex > 0) {
        let ent = demoFile.entities.entities[entityIndex];
        if (ent) {
          text = text.replace(/\x03/g, teamNumberToAnsi(ent.teamNumber));
        }
      }

      // Replace each colour code with its corresponding ANSI escape sequence
      for (var r of colourReplacements) {
        text = text.replace(r.pattern, ansiStyles.reset.open + r.ansi);
      }

      return text + ansiStyles.reset.open;
    }

    demoFile.on('start', () => {
      console.log('Demo header:', demoFile.header);
    });

    demoFile.on('end', () => {
      logTeamScores();

      console.log('Finished.');
    });

    demoFile.conVars.on('change', e => {
      console.log('%s: %s -> %s', e.name, e.oldValue, e.value);
    });

    demoFile.gameEvents.on('player_death', e => {
      let victim = demoFile.entities.getByUserId(e.userid);
      let victimColour = teamNumberToAnsi(victim && victim.teamNumber);
      let victimName = victim ? victim.name : 'unnamed';

      let attacker = demoFile.entities.getByUserId(e.attacker);
      let attackerColour = teamNumberToAnsi(attacker && attacker.teamNumber);
      let attackerName = attacker ? attacker.name : 'unnamed';

      let headshotText = e.headshot ? ' HS' : '';

      console.log(`${attackerColour}${attackerName}${ansiStyles.reset.open} [${e.weapon}${headshotText}] ${victimColour}${victimName}${ansiStyles.reset.open}`);
    });

    demoFile.userMessages.on('CS_UM_TextMsg', e => {
      let params =
        e.params
          .map(param => param[0] === '#' ? standardMessages[param.substring(1)] || param : param)
          .filter(s => s.length);

      let formatted = util.format.apply(null, params);
      console.log(formatSayText(0, formatted));
    });

    demoFile.userMessages.on('CS_UM_SayText', e => {
      console.log(formatSayText(0, e.text));
    });

    demoFile.userMessages.on('CS_UM_SayText2', e => {
      let nonEmptyParams = e.params.filter(s => s.length);
      let msgText = standardMessages[e.msgName];
      let formatted = msgText
        ? util.format.apply(null, [msgText].concat(nonEmptyParams))
        : `${e.msgName} ${nonEmptyParams.join(' ')}`;

      console.log(formatSayText(e.entIdx, formatted));
    });

    demoFile.gameEvents.on('round_end', e => {
      console.log('*** Round ended \'%s\' (reason: %s, tick: %d)', demoFile.gameRules.phase, e.reason, demoFile.currentTick);

      // We can't print the team scores here as they haven't been updated yet.
      // See round_officially_ended below.
    });

    demoFile.gameEvents.on('round_officially_ended', logTeamScores);

    demoFile.entities.on('create', e => {
      // We're only interested in player entities being created.
      if (e.entity.serverClass.name !== 'CCSPlayer') {
        return;
      }

      console.log('%s (%s) joined the game', e.entity.name, e.entity.steamId);
    });

    demoFile.entities.on('beforeremove', e => {
      if (e.entity.serverClass.name !== 'CCSPlayer') {
        return;
      }

      console.log('%s left the game', e.entity.name);
    });
    
    // Start parsing the buffer now that we've added our event listeners
    demoFile.parse(buffer);
  });
}

parseDemoFile(process.argv[2]);
