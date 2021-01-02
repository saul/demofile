export interface IEventAchievementEarned {
    player: number;
    achievement: number;
}
export interface IEventAnnouncePhaseEnd {
}
export interface IEventBeginNewMatch {
}
export interface IEventBombBegindefuse {
    userid: number;
    haskit: boolean;
}
export interface IEventBombBeginplant {
    userid: number;
    site: number;
}
export interface IEventBombDefused {
    userid: number;
    site: number;
}
export interface IEventBombDropped {
    userid: number;
    entindex: number;
}
export interface IEventBombExploded {
    userid: number;
    site: number;
}
export interface IEventBombPickup {
    userid: number;
}
export interface IEventBombPlanted {
    userid: number;
    site: number;
}
export interface IEventBotTakeover {
    userid: number;
    botid: number;
    index: number;
}
export interface IEventBuytimeEnded {
}
export interface IEventChoppersIncomingWarning {
    global: boolean;
}
export interface IEventCsGameDisconnected {
}
export interface IEventCsMatchEndRestart {
}
export interface IEventCsPreRestart {
}
export interface IEventCsRoundFinalBeep {
}
export interface IEventCsRoundStartBeep {
}
export interface IEventCsWinPanelMatch {
}
export interface IEventCsWinPanelRound {
    show_timer_defend: boolean;
    show_timer_attack: boolean;
    timer_time: number;
    final_event: number;
    funfact_token: string;
    funfact_player: number;
    funfact_data1: number;
    funfact_data2: number;
    funfact_data3: number;
}
export interface IEventDecoyDetonate {
    userid: number;
    entityid: number;
    x: number;
    y: number;
    z: number;
}
export interface IEventDecoyStarted {
    userid: number;
    entityid: number;
    x: number;
    y: number;
    z: number;
}
export interface IEventDefuserDropped {
    entityid: number;
}
export interface IEventDefuserPickup {
    entityid: number;
    userid: number;
}
export interface IEventDmBonusWeaponStart {
    time: number;
    Pos: number;
}
export interface IEventEndmatchCmmStartRevealItems {
}
export interface IEventEndmatchMapvoteSelectingMap {
    count: number;
    slot1: number;
    slot2: number;
    slot3: number;
    slot4: number;
    slot5: number;
    slot6: number;
    slot7: number;
    slot8: number;
    slot9: number;
    slot10: number;
}
export interface IEventFirstbombsIncomingWarning {
    global: boolean;
}
export interface IEventFlashbangDetonate {
    userid: number;
    entityid: number;
    x: number;
    y: number;
    z: number;
}
export interface IEventGameNewmap {
    mapname: string;
}
export interface IEventHegrenadeDetonate {
    userid: number;
    entityid: number;
    x: number;
    y: number;
    z: number;
}
export interface IEventHltvChat {
    text: string;
}
export interface IEventHltvStatus {
    clients: number;
    slots: number;
    proxies: number;
    master: string;
    externaltotal: number;
    externallinked: number;
}
export interface IEventHostageHurt {
    userid: number;
    hostage: number;
}
export interface IEventHostageKilled {
    userid: number;
    hostage: number;
}
export interface IEventHostageRescued {
    userid: number;
    hostage: number;
    site: number;
}
export interface IEventHostageRescuedAll {
}
export interface IEventInfernoExpire {
    entityid: number;
    x: number;
    y: number;
    z: number;
}
export interface IEventInfernoStartburn {
    entityid: number;
    x: number;
    y: number;
    z: number;
}
export interface IEventItemEquip {
    userid: number;
    item: string;
    defindex: number;
    canzoom: boolean;
    hassilencer: boolean;
    issilenced: boolean;
    hastracers: boolean;
    weptype: number;
    ispainted: boolean;
}
export interface IEventItemFound {
    player: number;
    quality: number;
    method: number;
    itemdef: number;
    itemid: number;
}
export interface IEventItemPickup {
    userid: number;
    item: string;
    silent: boolean;
    defindex: number;
}
export interface IEventItemRemove {
    userid: number;
    item: string;
    defindex: number;
}
export interface IEventItemsGifted {
    player: number;
    itemdef: number;
    numgifts: number;
    giftidx: number;
    accountid: number;
}
export interface IEventOtherDeath {
    otherid: number;
    othertype: string;
    attacker: number;
    weapon: string;
    weapon_itemid: string;
    weapon_fauxitemid: string;
    weapon_originalowner_xuid: string;
    headshot: boolean;
    penetrated: number;
    noscope: boolean;
    thrusmoke: boolean;
    attackerblind: boolean;
}
export interface IEventPlayerBlind {
    userid: number;
    attacker: number;
    entityid: number;
    blind_duration: number;
}
export interface IEventPlayerChangename {
    userid: number;
    oldname: string;
    newname: string;
}
export interface IEventPlayerChat {
    teamonly: boolean;
    userid: number;
    text: string;
}
export interface IEventPlayerConnect {
    name: string;
    index: number;
    userid: number;
    networkid: string;
    address: string;
}
export interface IEventPlayerConnectFull {
    userid: number;
    index: number;
}
export interface IEventPlayerDeath {
    userid: number;
    attacker: number;
    assister: number;
    assistedflash: boolean;
    weapon: string;
    weapon_itemid: string;
    weapon_fauxitemid: string;
    weapon_originalowner_xuid: string;
    headshot: boolean;
    dominated: number;
    revenge: number;
    wipe: number;
    penetrated: number;
    noreplay: boolean;
    noscope: boolean;
    thrusmoke: boolean;
    attackerblind: boolean;
    distance: number;
}
export interface IEventPlayerDisconnect {
    userid: number;
    reason: string;
    name: string;
    networkid: string;
}
export interface IEventPlayerFalldamage {
    userid: number;
    damage: number;
}
export interface IEventPlayerFootstep {
    userid: number;
}
export interface IEventPlayerHurt {
    userid: number;
    attacker: number;
    health: number;
    armor: number;
    weapon: string;
    dmg_health: number;
    dmg_armor: number;
    hitgroup: number;
}
export interface IEventPlayerInfo {
    name: string;
    index: number;
    userid: number;
    networkid: string;
    bot: boolean;
}
export interface IEventPlayerJump {
    userid: number;
}
export interface IEventPlayerSpawn {
    userid: number;
    teamnum: number;
}
export interface IEventPlayerTeam {
    userid: number;
    team: number;
    oldteam: number;
    disconnect: boolean;
    autoteam: boolean;
    silent: boolean;
    isbot: boolean;
}
export interface IEventRoundAnnounceFinal {
}
export interface IEventRoundAnnounceLastRoundHalf {
}
export interface IEventRoundAnnounceMatchPoint {
}
export interface IEventRoundAnnounceMatchStart {
}
export interface IEventRoundAnnounceWarmup {
}
export interface IEventRoundEnd {
    winner: number;
    reason: number;
    message: string;
    legacy: number;
    player_count: number;
    nomusic: number;
}
export interface IEventRoundFreezeEnd {
}
export interface IEventRoundMvp {
    userid: number;
    reason: number;
    value: number;
    musickitmvps: number;
    nomusic: number;
}
export interface IEventRoundOfficiallyEnded {
}
export interface IEventRoundPoststart {
}
export interface IEventRoundPrestart {
}
export interface IEventRoundStart {
    timelimit: number;
    fraglimit: number;
    objective: string;
}
export interface IEventRoundTimeWarning {
}
export interface IEventSeasoncoinLevelup {
    player: number;
    category: number;
    rank: number;
}
export interface IEventServerCvar {
    cvarname: string;
    cvarvalue: string;
}
export interface IEventServerSpawn {
    hostname: string;
    address: string;
    port: number;
    game: string;
    mapname: string;
    maxplayers: number;
    os: string;
    dedicated: boolean;
    official: boolean;
    password: boolean;
}
export interface IEventSmokegrenadeDetonate {
    userid: number;
    entityid: number;
    x: number;
    y: number;
    z: number;
}
export interface IEventSmokegrenadeExpired {
    userid: number;
    entityid: number;
    x: number;
    y: number;
    z: number;
}
export interface IEventSurvivalParadropBreak {
    entityid: number;
}
export interface IEventSurvivalParadropSpawn {
    entityid: number;
}
export interface IEventTeamplayBroadcastAudio {
    team: number;
    sound: string;
}
export interface IEventTournamentReward {
    defindex: number;
    totalrewards: number;
    accountid: number;
}
export interface IEventWeaponFire {
    userid: number;
    weapon: string;
    silenced: boolean;
}
export interface IEventWeaponFireOnEmpty {
    userid: number;
    weapon: string;
}
export interface IEventWeaponOutofammo {
    userid: number;
}
export interface IEventWeaponReload {
    userid: number;
}
export interface IEventWeaponZoom {
    userid: number;
}
export interface INonSpecificGameEventAchievementEarned {
    name: "achievement_earned";
    event: IEventAchievementEarned;
}
export interface INonSpecificGameEventAnnouncePhaseEnd {
    name: "announce_phase_end";
    event: IEventAnnouncePhaseEnd;
}
export interface INonSpecificGameEventBeginNewMatch {
    name: "begin_new_match";
    event: IEventBeginNewMatch;
}
export interface INonSpecificGameEventBombBegindefuse {
    name: "bomb_begindefuse";
    event: IEventBombBegindefuse;
}
export interface INonSpecificGameEventBombBeginplant {
    name: "bomb_beginplant";
    event: IEventBombBeginplant;
}
export interface INonSpecificGameEventBombDefused {
    name: "bomb_defused";
    event: IEventBombDefused;
}
export interface INonSpecificGameEventBombDropped {
    name: "bomb_dropped";
    event: IEventBombDropped;
}
export interface INonSpecificGameEventBombExploded {
    name: "bomb_exploded";
    event: IEventBombExploded;
}
export interface INonSpecificGameEventBombPickup {
    name: "bomb_pickup";
    event: IEventBombPickup;
}
export interface INonSpecificGameEventBombPlanted {
    name: "bomb_planted";
    event: IEventBombPlanted;
}
export interface INonSpecificGameEventBotTakeover {
    name: "bot_takeover";
    event: IEventBotTakeover;
}
export interface INonSpecificGameEventBuytimeEnded {
    name: "buytime_ended";
    event: IEventBuytimeEnded;
}
export interface INonSpecificGameEventChoppersIncomingWarning {
    name: "choppers_incoming_warning";
    event: IEventChoppersIncomingWarning;
}
export interface INonSpecificGameEventCsGameDisconnected {
    name: "cs_game_disconnected";
    event: IEventCsGameDisconnected;
}
export interface INonSpecificGameEventCsMatchEndRestart {
    name: "cs_match_end_restart";
    event: IEventCsMatchEndRestart;
}
export interface INonSpecificGameEventCsPreRestart {
    name: "cs_pre_restart";
    event: IEventCsPreRestart;
}
export interface INonSpecificGameEventCsRoundFinalBeep {
    name: "cs_round_final_beep";
    event: IEventCsRoundFinalBeep;
}
export interface INonSpecificGameEventCsRoundStartBeep {
    name: "cs_round_start_beep";
    event: IEventCsRoundStartBeep;
}
export interface INonSpecificGameEventCsWinPanelMatch {
    name: "cs_win_panel_match";
    event: IEventCsWinPanelMatch;
}
export interface INonSpecificGameEventCsWinPanelRound {
    name: "cs_win_panel_round";
    event: IEventCsWinPanelRound;
}
export interface INonSpecificGameEventDecoyDetonate {
    name: "decoy_detonate";
    event: IEventDecoyDetonate;
}
export interface INonSpecificGameEventDecoyStarted {
    name: "decoy_started";
    event: IEventDecoyStarted;
}
export interface INonSpecificGameEventDefuserDropped {
    name: "defuser_dropped";
    event: IEventDefuserDropped;
}
export interface INonSpecificGameEventDefuserPickup {
    name: "defuser_pickup";
    event: IEventDefuserPickup;
}
export interface INonSpecificGameEventDmBonusWeaponStart {
    name: "dm_bonus_weapon_start";
    event: IEventDmBonusWeaponStart;
}
export interface INonSpecificGameEventEndmatchCmmStartRevealItems {
    name: "endmatch_cmm_start_reveal_items";
    event: IEventEndmatchCmmStartRevealItems;
}
export interface INonSpecificGameEventEndmatchMapvoteSelectingMap {
    name: "endmatch_mapvote_selecting_map";
    event: IEventEndmatchMapvoteSelectingMap;
}
export interface INonSpecificGameEventFirstbombsIncomingWarning {
    name: "firstbombs_incoming_warning";
    event: IEventFirstbombsIncomingWarning;
}
export interface INonSpecificGameEventFlashbangDetonate {
    name: "flashbang_detonate";
    event: IEventFlashbangDetonate;
}
export interface INonSpecificGameEventGameNewmap {
    name: "game_newmap";
    event: IEventGameNewmap;
}
export interface INonSpecificGameEventHegrenadeDetonate {
    name: "hegrenade_detonate";
    event: IEventHegrenadeDetonate;
}
export interface INonSpecificGameEventHltvChat {
    name: "hltv_chat";
    event: IEventHltvChat;
}
export interface INonSpecificGameEventHltvStatus {
    name: "hltv_status";
    event: IEventHltvStatus;
}
export interface INonSpecificGameEventHostageHurt {
    name: "hostage_hurt";
    event: IEventHostageHurt;
}
export interface INonSpecificGameEventHostageKilled {
    name: "hostage_killed";
    event: IEventHostageKilled;
}
export interface INonSpecificGameEventHostageRescued {
    name: "hostage_rescued";
    event: IEventHostageRescued;
}
export interface INonSpecificGameEventHostageRescuedAll {
    name: "hostage_rescued_all";
    event: IEventHostageRescuedAll;
}
export interface INonSpecificGameEventInfernoExpire {
    name: "inferno_expire";
    event: IEventInfernoExpire;
}
export interface INonSpecificGameEventInfernoStartburn {
    name: "inferno_startburn";
    event: IEventInfernoStartburn;
}
export interface INonSpecificGameEventItemEquip {
    name: "item_equip";
    event: IEventItemEquip;
}
export interface INonSpecificGameEventItemFound {
    name: "item_found";
    event: IEventItemFound;
}
export interface INonSpecificGameEventItemPickup {
    name: "item_pickup";
    event: IEventItemPickup;
}
export interface INonSpecificGameEventItemRemove {
    name: "item_remove";
    event: IEventItemRemove;
}
export interface INonSpecificGameEventItemsGifted {
    name: "items_gifted";
    event: IEventItemsGifted;
}
export interface INonSpecificGameEventOtherDeath {
    name: "other_death";
    event: IEventOtherDeath;
}
export interface INonSpecificGameEventPlayerBlind {
    name: "player_blind";
    event: IEventPlayerBlind;
}
export interface INonSpecificGameEventPlayerChangename {
    name: "player_changename";
    event: IEventPlayerChangename;
}
export interface INonSpecificGameEventPlayerChat {
    name: "player_chat";
    event: IEventPlayerChat;
}
export interface INonSpecificGameEventPlayerConnect {
    name: "player_connect";
    event: IEventPlayerConnect;
}
export interface INonSpecificGameEventPlayerConnectFull {
    name: "player_connect_full";
    event: IEventPlayerConnectFull;
}
export interface INonSpecificGameEventPlayerDeath {
    name: "player_death";
    event: IEventPlayerDeath;
}
export interface INonSpecificGameEventPlayerDisconnect {
    name: "player_disconnect";
    event: IEventPlayerDisconnect;
}
export interface INonSpecificGameEventPlayerFalldamage {
    name: "player_falldamage";
    event: IEventPlayerFalldamage;
}
export interface INonSpecificGameEventPlayerFootstep {
    name: "player_footstep";
    event: IEventPlayerFootstep;
}
export interface INonSpecificGameEventPlayerHurt {
    name: "player_hurt";
    event: IEventPlayerHurt;
}
export interface INonSpecificGameEventPlayerInfo {
    name: "player_info";
    event: IEventPlayerInfo;
}
export interface INonSpecificGameEventPlayerJump {
    name: "player_jump";
    event: IEventPlayerJump;
}
export interface INonSpecificGameEventPlayerSpawn {
    name: "player_spawn";
    event: IEventPlayerSpawn;
}
export interface INonSpecificGameEventPlayerTeam {
    name: "player_team";
    event: IEventPlayerTeam;
}
export interface INonSpecificGameEventRoundAnnounceFinal {
    name: "round_announce_final";
    event: IEventRoundAnnounceFinal;
}
export interface INonSpecificGameEventRoundAnnounceLastRoundHalf {
    name: "round_announce_last_round_half";
    event: IEventRoundAnnounceLastRoundHalf;
}
export interface INonSpecificGameEventRoundAnnounceMatchPoint {
    name: "round_announce_match_point";
    event: IEventRoundAnnounceMatchPoint;
}
export interface INonSpecificGameEventRoundAnnounceMatchStart {
    name: "round_announce_match_start";
    event: IEventRoundAnnounceMatchStart;
}
export interface INonSpecificGameEventRoundAnnounceWarmup {
    name: "round_announce_warmup";
    event: IEventRoundAnnounceWarmup;
}
export interface INonSpecificGameEventRoundEnd {
    name: "round_end";
    event: IEventRoundEnd;
}
export interface INonSpecificGameEventRoundFreezeEnd {
    name: "round_freeze_end";
    event: IEventRoundFreezeEnd;
}
export interface INonSpecificGameEventRoundMvp {
    name: "round_mvp";
    event: IEventRoundMvp;
}
export interface INonSpecificGameEventRoundOfficiallyEnded {
    name: "round_officially_ended";
    event: IEventRoundOfficiallyEnded;
}
export interface INonSpecificGameEventRoundPoststart {
    name: "round_poststart";
    event: IEventRoundPoststart;
}
export interface INonSpecificGameEventRoundPrestart {
    name: "round_prestart";
    event: IEventRoundPrestart;
}
export interface INonSpecificGameEventRoundStart {
    name: "round_start";
    event: IEventRoundStart;
}
export interface INonSpecificGameEventRoundTimeWarning {
    name: "round_time_warning";
    event: IEventRoundTimeWarning;
}
export interface INonSpecificGameEventSeasoncoinLevelup {
    name: "seasoncoin_levelup";
    event: IEventSeasoncoinLevelup;
}
export interface INonSpecificGameEventServerCvar {
    name: "server_cvar";
    event: IEventServerCvar;
}
export interface INonSpecificGameEventServerSpawn {
    name: "server_spawn";
    event: IEventServerSpawn;
}
export interface INonSpecificGameEventSmokegrenadeDetonate {
    name: "smokegrenade_detonate";
    event: IEventSmokegrenadeDetonate;
}
export interface INonSpecificGameEventSmokegrenadeExpired {
    name: "smokegrenade_expired";
    event: IEventSmokegrenadeExpired;
}
export interface INonSpecificGameEventSurvivalParadropBreak {
    name: "survival_paradrop_break";
    event: IEventSurvivalParadropBreak;
}
export interface INonSpecificGameEventSurvivalParadropSpawn {
    name: "survival_paradrop_spawn";
    event: IEventSurvivalParadropSpawn;
}
export interface INonSpecificGameEventTeamplayBroadcastAudio {
    name: "teamplay_broadcast_audio";
    event: IEventTeamplayBroadcastAudio;
}
export interface INonSpecificGameEventTournamentReward {
    name: "tournament_reward";
    event: IEventTournamentReward;
}
export interface INonSpecificGameEventWeaponFire {
    name: "weapon_fire";
    event: IEventWeaponFire;
}
export interface INonSpecificGameEventWeaponFireOnEmpty {
    name: "weapon_fire_on_empty";
    event: IEventWeaponFireOnEmpty;
}
export interface INonSpecificGameEventWeaponOutofammo {
    name: "weapon_outofammo";
    event: IEventWeaponOutofammo;
}
export interface INonSpecificGameEventWeaponReload {
    name: "weapon_reload";
    event: IEventWeaponReload;
}
export interface INonSpecificGameEventWeaponZoom {
    name: "weapon_zoom";
    event: IEventWeaponZoom;
}
export declare type INonSpecificGameEvent = INonSpecificGameEventAchievementEarned | INonSpecificGameEventAnnouncePhaseEnd | INonSpecificGameEventBeginNewMatch | INonSpecificGameEventBombBegindefuse | INonSpecificGameEventBombBeginplant | INonSpecificGameEventBombDefused | INonSpecificGameEventBombDropped | INonSpecificGameEventBombExploded | INonSpecificGameEventBombPickup | INonSpecificGameEventBombPlanted | INonSpecificGameEventBotTakeover | INonSpecificGameEventBuytimeEnded | INonSpecificGameEventChoppersIncomingWarning | INonSpecificGameEventCsGameDisconnected | INonSpecificGameEventCsMatchEndRestart | INonSpecificGameEventCsPreRestart | INonSpecificGameEventCsRoundFinalBeep | INonSpecificGameEventCsRoundStartBeep | INonSpecificGameEventCsWinPanelMatch | INonSpecificGameEventCsWinPanelRound | INonSpecificGameEventDecoyDetonate | INonSpecificGameEventDecoyStarted | INonSpecificGameEventDefuserDropped | INonSpecificGameEventDefuserPickup | INonSpecificGameEventDmBonusWeaponStart | INonSpecificGameEventEndmatchCmmStartRevealItems | INonSpecificGameEventEndmatchMapvoteSelectingMap | INonSpecificGameEventFirstbombsIncomingWarning | INonSpecificGameEventFlashbangDetonate | INonSpecificGameEventGameNewmap | INonSpecificGameEventHegrenadeDetonate | INonSpecificGameEventHltvChat | INonSpecificGameEventHltvStatus | INonSpecificGameEventHostageHurt | INonSpecificGameEventHostageKilled | INonSpecificGameEventHostageRescued | INonSpecificGameEventHostageRescuedAll | INonSpecificGameEventInfernoExpire | INonSpecificGameEventInfernoStartburn | INonSpecificGameEventItemEquip | INonSpecificGameEventItemFound | INonSpecificGameEventItemPickup | INonSpecificGameEventItemRemove | INonSpecificGameEventItemsGifted | INonSpecificGameEventOtherDeath | INonSpecificGameEventPlayerBlind | INonSpecificGameEventPlayerChangename | INonSpecificGameEventPlayerChat | INonSpecificGameEventPlayerConnect | INonSpecificGameEventPlayerConnectFull | INonSpecificGameEventPlayerDeath | INonSpecificGameEventPlayerDisconnect | INonSpecificGameEventPlayerFalldamage | INonSpecificGameEventPlayerFootstep | INonSpecificGameEventPlayerHurt | INonSpecificGameEventPlayerInfo | INonSpecificGameEventPlayerJump | INonSpecificGameEventPlayerSpawn | INonSpecificGameEventPlayerTeam | INonSpecificGameEventRoundAnnounceFinal | INonSpecificGameEventRoundAnnounceLastRoundHalf | INonSpecificGameEventRoundAnnounceMatchPoint | INonSpecificGameEventRoundAnnounceMatchStart | INonSpecificGameEventRoundAnnounceWarmup | INonSpecificGameEventRoundEnd | INonSpecificGameEventRoundFreezeEnd | INonSpecificGameEventRoundMvp | INonSpecificGameEventRoundOfficiallyEnded | INonSpecificGameEventRoundPoststart | INonSpecificGameEventRoundPrestart | INonSpecificGameEventRoundStart | INonSpecificGameEventRoundTimeWarning | INonSpecificGameEventSeasoncoinLevelup | INonSpecificGameEventServerCvar | INonSpecificGameEventServerSpawn | INonSpecificGameEventSmokegrenadeDetonate | INonSpecificGameEventSmokegrenadeExpired | INonSpecificGameEventSurvivalParadropBreak | INonSpecificGameEventSurvivalParadropSpawn | INonSpecificGameEventTeamplayBroadcastAudio | INonSpecificGameEventTournamentReward | INonSpecificGameEventWeaponFire | INonSpecificGameEventWeaponFireOnEmpty | INonSpecificGameEventWeaponOutofammo | INonSpecificGameEventWeaponReload | INonSpecificGameEventWeaponZoom;
declare module "./gameevents" {
    interface GameEvents {
        on(event: "event", listener: (event: INonSpecificGameEvent) => void): this;
        on(event: "achievement_earned", listener: (event: IEventAchievementEarned) => void): this;
        on(event: "announce_phase_end", listener: (event: IEventAnnouncePhaseEnd) => void): this;
        on(event: "begin_new_match", listener: (event: IEventBeginNewMatch) => void): this;
        on(event: "bomb_begindefuse", listener: (event: IEventBombBegindefuse) => void): this;
        on(event: "bomb_beginplant", listener: (event: IEventBombBeginplant) => void): this;
        on(event: "bomb_defused", listener: (event: IEventBombDefused) => void): this;
        on(event: "bomb_dropped", listener: (event: IEventBombDropped) => void): this;
        on(event: "bomb_exploded", listener: (event: IEventBombExploded) => void): this;
        on(event: "bomb_pickup", listener: (event: IEventBombPickup) => void): this;
        on(event: "bomb_planted", listener: (event: IEventBombPlanted) => void): this;
        on(event: "bot_takeover", listener: (event: IEventBotTakeover) => void): this;
        on(event: "buytime_ended", listener: (event: IEventBuytimeEnded) => void): this;
        on(event: "choppers_incoming_warning", listener: (event: IEventChoppersIncomingWarning) => void): this;
        on(event: "cs_game_disconnected", listener: (event: IEventCsGameDisconnected) => void): this;
        on(event: "cs_match_end_restart", listener: (event: IEventCsMatchEndRestart) => void): this;
        on(event: "cs_pre_restart", listener: (event: IEventCsPreRestart) => void): this;
        on(event: "cs_round_final_beep", listener: (event: IEventCsRoundFinalBeep) => void): this;
        on(event: "cs_round_start_beep", listener: (event: IEventCsRoundStartBeep) => void): this;
        on(event: "cs_win_panel_match", listener: (event: IEventCsWinPanelMatch) => void): this;
        on(event: "cs_win_panel_round", listener: (event: IEventCsWinPanelRound) => void): this;
        on(event: "decoy_detonate", listener: (event: IEventDecoyDetonate) => void): this;
        on(event: "decoy_started", listener: (event: IEventDecoyStarted) => void): this;
        on(event: "defuser_dropped", listener: (event: IEventDefuserDropped) => void): this;
        on(event: "defuser_pickup", listener: (event: IEventDefuserPickup) => void): this;
        on(event: "dm_bonus_weapon_start", listener: (event: IEventDmBonusWeaponStart) => void): this;
        on(event: "endmatch_cmm_start_reveal_items", listener: (event: IEventEndmatchCmmStartRevealItems) => void): this;
        on(event: "endmatch_mapvote_selecting_map", listener: (event: IEventEndmatchMapvoteSelectingMap) => void): this;
        on(event: "firstbombs_incoming_warning", listener: (event: IEventFirstbombsIncomingWarning) => void): this;
        on(event: "flashbang_detonate", listener: (event: IEventFlashbangDetonate) => void): this;
        on(event: "game_newmap", listener: (event: IEventGameNewmap) => void): this;
        on(event: "hegrenade_detonate", listener: (event: IEventHegrenadeDetonate) => void): this;
        on(event: "hltv_chat", listener: (event: IEventHltvChat) => void): this;
        on(event: "hltv_status", listener: (event: IEventHltvStatus) => void): this;
        on(event: "hostage_hurt", listener: (event: IEventHostageHurt) => void): this;
        on(event: "hostage_killed", listener: (event: IEventHostageKilled) => void): this;
        on(event: "hostage_rescued", listener: (event: IEventHostageRescued) => void): this;
        on(event: "hostage_rescued_all", listener: (event: IEventHostageRescuedAll) => void): this;
        on(event: "inferno_expire", listener: (event: IEventInfernoExpire) => void): this;
        on(event: "inferno_startburn", listener: (event: IEventInfernoStartburn) => void): this;
        on(event: "item_equip", listener: (event: IEventItemEquip) => void): this;
        on(event: "item_found", listener: (event: IEventItemFound) => void): this;
        on(event: "item_pickup", listener: (event: IEventItemPickup) => void): this;
        on(event: "item_remove", listener: (event: IEventItemRemove) => void): this;
        on(event: "items_gifted", listener: (event: IEventItemsGifted) => void): this;
        on(event: "other_death", listener: (event: IEventOtherDeath) => void): this;
        on(event: "player_blind", listener: (event: IEventPlayerBlind) => void): this;
        on(event: "player_changename", listener: (event: IEventPlayerChangename) => void): this;
        on(event: "player_chat", listener: (event: IEventPlayerChat) => void): this;
        on(event: "player_connect", listener: (event: IEventPlayerConnect) => void): this;
        on(event: "player_connect_full", listener: (event: IEventPlayerConnectFull) => void): this;
        on(event: "player_death", listener: (event: IEventPlayerDeath) => void): this;
        on(event: "player_disconnect", listener: (event: IEventPlayerDisconnect) => void): this;
        on(event: "player_falldamage", listener: (event: IEventPlayerFalldamage) => void): this;
        on(event: "player_footstep", listener: (event: IEventPlayerFootstep) => void): this;
        on(event: "player_hurt", listener: (event: IEventPlayerHurt) => void): this;
        on(event: "player_info", listener: (event: IEventPlayerInfo) => void): this;
        on(event: "player_jump", listener: (event: IEventPlayerJump) => void): this;
        on(event: "player_spawn", listener: (event: IEventPlayerSpawn) => void): this;
        on(event: "player_team", listener: (event: IEventPlayerTeam) => void): this;
        on(event: "round_announce_final", listener: (event: IEventRoundAnnounceFinal) => void): this;
        on(event: "round_announce_last_round_half", listener: (event: IEventRoundAnnounceLastRoundHalf) => void): this;
        on(event: "round_announce_match_point", listener: (event: IEventRoundAnnounceMatchPoint) => void): this;
        on(event: "round_announce_match_start", listener: (event: IEventRoundAnnounceMatchStart) => void): this;
        on(event: "round_announce_warmup", listener: (event: IEventRoundAnnounceWarmup) => void): this;
        on(event: "round_end", listener: (event: IEventRoundEnd) => void): this;
        on(event: "round_freeze_end", listener: (event: IEventRoundFreezeEnd) => void): this;
        on(event: "round_mvp", listener: (event: IEventRoundMvp) => void): this;
        on(event: "round_officially_ended", listener: (event: IEventRoundOfficiallyEnded) => void): this;
        on(event: "round_poststart", listener: (event: IEventRoundPoststart) => void): this;
        on(event: "round_prestart", listener: (event: IEventRoundPrestart) => void): this;
        on(event: "round_start", listener: (event: IEventRoundStart) => void): this;
        on(event: "round_time_warning", listener: (event: IEventRoundTimeWarning) => void): this;
        on(event: "seasoncoin_levelup", listener: (event: IEventSeasoncoinLevelup) => void): this;
        on(event: "server_cvar", listener: (event: IEventServerCvar) => void): this;
        on(event: "server_spawn", listener: (event: IEventServerSpawn) => void): this;
        on(event: "smokegrenade_detonate", listener: (event: IEventSmokegrenadeDetonate) => void): this;
        on(event: "smokegrenade_expired", listener: (event: IEventSmokegrenadeExpired) => void): this;
        on(event: "survival_paradrop_break", listener: (event: IEventSurvivalParadropBreak) => void): this;
        on(event: "survival_paradrop_spawn", listener: (event: IEventSurvivalParadropSpawn) => void): this;
        on(event: "teamplay_broadcast_audio", listener: (event: IEventTeamplayBroadcastAudio) => void): this;
        on(event: "tournament_reward", listener: (event: IEventTournamentReward) => void): this;
        on(event: "weapon_fire", listener: (event: IEventWeaponFire) => void): this;
        on(event: "weapon_fire_on_empty", listener: (event: IEventWeaponFireOnEmpty) => void): this;
        on(event: "weapon_outofammo", listener: (event: IEventWeaponOutofammo) => void): this;
        on(event: "weapon_reload", listener: (event: IEventWeaponReload) => void): this;
        on(event: "weapon_zoom", listener: (event: IEventWeaponZoom) => void): this;
    }
}
