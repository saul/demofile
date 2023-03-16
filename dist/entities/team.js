"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = exports.TeamNumber = void 0;
const networkable_1 = require("./networkable");
const player_1 = require("./player");
var TeamNumber;
(function (TeamNumber) {
    TeamNumber[TeamNumber["Unassigned"] = 0] = "Unassigned";
    TeamNumber[TeamNumber["Spectator"] = 1] = "Spectator";
    TeamNumber[TeamNumber["Terrorists"] = 2] = "Terrorists";
    TeamNumber[TeamNumber["CounterTerrorists"] = 3] = "CounterTerrorists";
})(TeamNumber = exports.TeamNumber || (exports.TeamNumber = {}));
/**
 * Represents an in-game team.
 */
class Team extends networkable_1.Networkable {
    /**
     * @returns {Player[]} All players in this team
     */
    get members() {
        // UNSAFE: cast here as members will always be players
        return this.getProp("DT_Team", '"player_array"')
            .map(index => this._demo.entities.entities.get(index))
            .filter(player => player instanceof player_1.Player);
    }
    /**
     * @returns {int} 0: Unassigned, 1: Spectator, 2: Terrorist, 3: Counter-Terrorist
     */
    get teamNumber() {
        return this.getProp("DT_Team", "m_iTeamNum");
    }
    /**
     * @returns Clan name
     */
    get clanName() {
        return this.getProp("DT_Team", "m_szClanTeamname");
    }
    /**
     * @returns 'SPECTATOR', 'TERRORIST' or 'COUNTERTERRORIST'
     */
    get teamName() {
        return this.getProp("DT_Team", "m_szTeamname");
    }
    /**
     * @returns Total score
     */
    get score() {
        return this.getProp("DT_Team", "m_scoreTotal");
    }
    /**
     * @returns First half score
     */
    get scoreFirstHalf() {
        return this.getProp("DT_Team", "m_scoreFirstHalf");
    }
    /**
     * @returns Second half score
     */
    get scoreSecondHalf() {
        return this.getProp("DT_Team", "m_scoreSecondHalf");
    }
    /**
     * @returns Team flag image
     */
    get flagImage() {
        return this.getProp("DT_Team", "m_szTeamFlagImage");
    }
    /**
     * @returns Team logo image
     */
    get logoImage() {
        return this.getProp("DT_Team", "m_szTeamLogoImage");
    }
}
exports.Team = Team;
//# sourceMappingURL=team.js.map