"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const baseentity_1 = require("./baseentity");
const weapon_1 = require("./weapon");
/**
 * Represents an in-game player.
 */
class Player extends baseentity_1.BaseEntity {
    constructor(demo, index, classId, serialNum, baseline) {
        super(demo, index, classId, serialNum, baseline);
        /**
         * The 'client slot' is the index into various arrays such as the userinfo table.
         */
        this.clientSlot = index - 1;
    }
    /**
     * @returns {int} Current health
     */
    get health() {
        return this.getProp("DT_BasePlayer", "m_iHealth");
    }
    get eyeAngles() {
        return {
            pitch: this.getProp("DT_CSPlayer", "m_angEyeAngles[0]"),
            yaw: this.getProp("DT_CSPlayer", "m_angEyeAngles[1]")
        };
    }
    get position() {
        const xy = this.getProp("DT_CSLocalPlayerExclusive", "m_vecOrigin");
        return {
            x: xy.x,
            y: xy.y,
            z: this.getProp("DT_CSLocalPlayerExclusive", "m_vecOrigin[2]")
        };
    }
    get velocity() {
        return {
            x: this.getProp("DT_LocalPlayerExclusive", "m_vecVelocity[0]"),
            y: this.getProp("DT_LocalPlayerExclusive", "m_vecVelocity[1]"),
            z: this.getProp("DT_LocalPlayerExclusive", "m_vecVelocity[2]")
        };
    }
    /**
     * Speed of the entity.
     * @returns Speed in game units.
     */
    get speed() {
        const vel = this.velocity;
        return Math.sqrt(vel.x * vel.x + vel.y * vel.y + vel.z * vel.z);
    }
    /**
     * @returns Current cash
     */
    get account() {
        return this.getProp("DT_CSPlayer", "m_iAccount");
    }
    get lifeState() {
        return this.getProp("DT_BasePlayer", "m_lifeState");
    }
    /**
     * @returns lifeState == 0
     */
    get isAlive() {
        return this.lifeState === 0 /* Alive */;
    }
    /**
     * @returns User info associated with this player
     */
    get userInfo() {
        const userInfoTable = this._demo.stringTables.findTableByName("userinfo");
        return userInfoTable
            ? userInfoTable.entries[this.clientSlot].userData
            : null;
    }
    /**
     * @returns User ID
     */
    get userId() {
        return this.userInfo.userId;
    }
    /**
     * @returns Steam ID
     */
    get steamId() {
        return this.userInfo.guid;
    }
    /**
     * @returns Steam 64 ID
     */
    get steam64Id() {
        if (this._steam64IdCache === undefined)
            this._steam64IdCache = this.userInfo.xuid.toString();
        return this._steam64IdCache;
    }
    /**
     * @returns Player name
     */
    get name() {
        return this.userInfo.name;
    }
    /**
     * @returns Is this player fake (i.e. a bot)
     */
    get isFakePlayer() {
        return this.userInfo.fakePlayer;
    }
    /**
     * @returns Is this player a HLTV relay
     */
    get isHltv() {
        return this.userInfo.isHltv;
    }
    /**
     * @returns Player armor (0-100)
     */
    get armor() {
        return this.getProp("DT_CSPlayer", "m_ArmorValue");
    }
    /**
     * @returns Current navmesh place name
     */
    get placeName() {
        return this.getProp("DT_BasePlayer", "m_szLastPlaceName");
    }
    /**
     * @returns Currently held weapon
     */
    get weapon() {
        return this._demo.entities.getByHandle(this.getProp("DT_BaseCombatCharacter", "m_hActiveWeapon"));
    }
    /**
     * @returns All weapons helds by this player
     */
    get weapons() {
        return this.getIndexedProps("m_hMyWeapons")
            .map(handle => this._demo.entities.getByHandle(handle))
            .filter(ent => ent ? ent instanceof weapon_1.Weapon : false);
    }
    /**
     * @returns Is the player is the bomb zone?
     */
    get isInBombZone() {
        return this.getProp("DT_CSPlayer", "m_bInBombZone");
    }
    /**
     * @returns Is the player in the buy zone?
     */
    get isInBuyZone() {
        return this.getProp("DT_CSPlayer", "m_bInBuyZone");
    }
    /**
     * @returns Is the player defusing?
     */
    get isDefusing() {
        return this.getProp("DT_CSPlayer", "m_bIsDefusing");
    }
    /**
     * @returns Does the player have a defuser?
     */
    get hasDefuser() {
        return this.getProp("DT_CSPlayer", "m_bHasDefuser");
    }
    /**
     * @returns Does the player have a helmet?
     */
    get hasHelmet() {
        return this.getProp("DT_CSPlayer", "m_bHasHelmet");
    }
    /**
     * @returns Does the player is controlling a BOT?
     */
    get isControllingBot() {
        return this.getProp("DT_CSPlayer", "m_bIsControllingBot");
    }
    /**
     * Retrieves the value of an array property on the singleton entity DT_CSPlayerResource.
     * @param {string} propName - Name of the property on DT_CSPlayerResource to retrieve
     * @returns {*} Property value
     */
    resourceProp(tableName) {
        // tslint:disable-next-line:no-useless-cast
        const array = this._demo.entities.playerResource.getIndexedProps(tableName);
        return array[this.index];
    }
    /**
     * @returns How many kills the player has made
     */
    get kills() {
        return this.resourceProp("m_iKills");
    }
    /**
     * @returns How many assists the player has made
     */
    get assists() {
        return this.resourceProp("m_iAssists");
    }
    /**
     * @returns How many times the player has died
     */
    get deaths() {
        return this.resourceProp("m_iDeaths");
    }
    /**
     * @returns Cash that this player has spent this round
     */
    get cashSpendThisRound() {
        return this.resourceProp("m_iCashSpentThisRound");
    }
    /**
     * @returns Cash that the player has spent all game
     */
    get cashSpendTotal() {
        return this.resourceProp("m_iTotalCashSpent");
    }
    /**
     * @returns Whether the player holds the C4
     */
    get hasC4() {
        const pr = this._demo.entities.playerResource;
        return pr.getProp("DT_CSPlayerResource", "m_iPlayerC4") === this.index;
    }
    /**
     * @returns Score of the player
     */
    get score() {
        const pr = this._demo.entities.playerResource;
        return pr.getIndexedProps("m_iScore")[this.index];
    }
    /**
     * @returns MVPs of the player
     */
    get mvps() {
        const pr = this._demo.entities.playerResource;
        return pr.getIndexedProps("m_iMVPs")[this.index];
    }
    /**
     * @returns Clantag of the player
     */
    get clanTag() {
        const pr = this._demo.entities.playerResource;
        return pr.getIndexedProps("m_szClan")[this.index];
    }
    /**
     * @returns Has this player been spotted by any others?
     */
    get isSpotted() {
        return this.getProp("DT_BaseEntity", "m_bSpotted");
    }
    /**
     * Checks if this player has been spotted by the other.
     * Note that this still returns true if spotted by the other player even if
     * the other player is dead.
     * @param other - Other player entity
     * @returns Is this player spotted by the other?
     */
    isSpottedBy(other) {
        let bit = other.clientSlot;
        let mask = null;
        if (other.clientSlot < 32) {
            mask = this.getProp("m_bSpottedByMask", "000");
        }
        else {
            bit = other.clientSlot - 32;
            mask = this.getProp("m_bSpottedByMask", "001");
        }
        return (mask & (1 << bit)) !== 0;
    }
    /**
     * @returns Alive players that have spotted this player
     */
    get allSpotters() {
        return this._demo.players.filter(p => p.clientSlot !== this.clientSlot && p.isAlive && this.isSpottedBy(p));
    }
    /**
     * Checks if this player has spotted another.
     * Can still return true even if this player is dead.
     * @param other - Other player entity
     * @returns Has this player spotted the other?
     */
    hasSpotted(other) {
        return other.isSpottedBy(this);
    }
    /**
     * @returns Alive players that this player has spotted
     */
    get allSpotted() {
        return this._demo.players.filter(p => p.clientSlot !== this.clientSlot && p.isAlive && this.hasSpotted(p));
    }
    /**
     * @param other - Other player entity
     * @returns Whether the two players are on the same team
     */
    isFriendly(other) {
        const sameTeam = this.teamNumber === other.teamNumber;
        const teammatesAreEnemies = this._demo.conVars.vars.get("mp_teammates_are_enemies") || 0;
        return sameTeam && !teammatesAreEnemies;
    }
    /**
     * @returns Is scoped
     */
    get isScoped() {
        return this.getProp("DT_CSPlayer", "m_bIsScoped");
    }
    /**
     * @returns Is walking
     */
    get isWalking() {
        return this.getProp("DT_CSPlayer", "m_bIsWalking");
    }
    /**
     * @returns Player is transitioning from ducked -> standing or standing -> ducked
     */
    get isDucking() {
        return this.getProp("DT_Local", "m_bDucking");
    }
    /**
     * @returns Is ducked
     */
    get isDucked() {
        return this.getProp("DT_Local", "m_bDucked");
    }
    /**
     * @returns Duration of a flash that hit the player
     */
    get flashDuration() {
        return this.getProp("DT_CSPlayer", "m_flFlashDuration");
    }
    /**
     * @returns Current equipment value
     */
    get currentEquipmentValue() {
        return this.getProp("DT_CSPlayer", "m_unCurrentEquipmentValue");
    }
    /**
     * @returns Round start equipment value
     */
    get roundStartEquipmentValue() {
        return this.getProp("DT_CSPlayer", "m_unRoundStartEquipmentValue");
    }
    /**
     * @returns Freeze time end equipment value
     */
    get freezeTimeEndEquipmentValue() {
        return this.getProp("DT_CSPlayer", "m_unFreezetimeEndEquipmentValue");
    }
    /**
     * @returns Object representing the player's performance per round
     */
    get matchStats() {
        const kills = this.getIndexedProps("m_iMatchStats_Kills");
        const damage = this.getIndexedProps("m_iMatchStats_Damage");
        const equipmentValue = this.getIndexedProps("m_iMatchStats_EquipmentValue");
        const moneySaved = this.getIndexedProps("m_iMatchStats_MoneySaved");
        const killReward = this.getIndexedProps("m_iMatchStats_KillReward");
        const liveTime = this.getIndexedProps("m_iMatchStats_LiveTime");
        const deaths = this.getIndexedProps("m_iMatchStats_Deaths");
        const assists = this.getIndexedProps("m_iMatchStats_Assists");
        const headShotKills = this.getIndexedProps("m_iMatchStats_HeadShotKills");
        const objective = this.getIndexedProps("m_iMatchStats_Objective");
        const rounds = [];
        for (let roundIdx = 0; roundIdx < kills.length; ++roundIdx) {
            rounds.push({
                kills: kills[roundIdx],
                damage: damage[roundIdx],
                equipmentValue: equipmentValue[roundIdx],
                moneySaved: moneySaved[roundIdx],
                killReward: killReward[roundIdx],
                liveTime: liveTime[roundIdx],
                deaths: deaths[roundIdx],
                assists: assists[roundIdx],
                headShotKills: headShotKills[roundIdx],
                objective: objective[roundIdx]
            });
        }
        return rounds;
    }
}
exports.Player = Player;
//# sourceMappingURL=player.js.map