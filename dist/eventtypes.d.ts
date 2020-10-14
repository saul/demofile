/// <reference types="long" />
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
export interface IEventServerPreShutdown {
    reason: string;
}
export interface IEventServerShutdown {
    reason: string;
}
export interface IEventServerCvar {
    cvarname: string;
    cvarvalue: string;
}
export interface IEventServerMessage {
    text: string;
}
export interface IEventServerAddban {
    name: string;
    userid: number;
    networkid: string;
    ip: string;
    duration: string;
    by: string;
    kicked: boolean;
}
export interface IEventServerRemoveban {
    networkid: string;
    ip: string;
    by: string;
}
export interface IEventPlayerConnect {
    name: string;
    index: number;
    userid: number;
    networkid: string;
    address: string;
}
export interface IEventPlayerInfo {
    name: string;
    index: number;
    userid: number;
    networkid: string;
    bot: boolean;
}
export interface IEventPlayerDisconnect {
    userid: number;
    reason: string;
    name: string;
    networkid: string;
}
export interface IEventPlayerActivate {
    userid: number;
}
export interface IEventPlayerConnectFull {
    userid: number;
    index: number;
}
export interface IEventPlayerSay {
    userid: number;
    text: string;
}
export interface IEventCsRoundStartBeep {
}
export interface IEventCsRoundFinalBeep {
}
export interface IEventRoundTimeWarning {
}
export interface IEventHltvReplay {
    delay: number;
}
export interface IEventTeamInfo {
    teamid: number;
    teamname: string;
}
export interface IEventTeamScore {
    teamid: number;
    score: number;
}
export interface IEventTeamplayBroadcastAudio {
    team: number;
    sound: string;
}
export interface IEventGameuiHidden {
}
export interface IEventItemsGifted {
    player: number;
    itemdef: number;
    numgifts: number;
    giftidx: number;
    accountid: number;
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
export interface IEventPlayerClass {
    userid: number;
    class: string;
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
export interface IEventPlayerChat {
    teamonly: boolean;
    userid: number;
    text: string;
}
export interface IEventPlayerScore {
    userid: number;
    kills: number;
    deaths: number;
    score: number;
}
export interface IEventPlayerSpawn {
    userid: number;
    teamnum: number;
}
export interface IEventPlayerShoot {
    userid: number;
    weapon: number;
    mode: number;
}
export interface IEventPlayerUse {
    userid: number;
    entity: number;
}
export interface IEventPlayerChangename {
    userid: number;
    oldname: string;
    newname: string;
}
export interface IEventPlayerHintmessage {
    hintmessage: string;
}
export interface IEventGameInit {
}
export interface IEventGameNewmap {
    mapname: string;
}
export interface IEventGameStart {
    roundslimit: number;
    timelimit: number;
    fraglimit: number;
    objective: string;
}
export interface IEventGameEnd {
    winner: number;
}
export interface IEventRoundStart {
    timelimit: number;
    fraglimit: number;
    objective: string;
}
export interface IEventRoundAnnounceMatchPoint {
}
export interface IEventRoundAnnounceFinal {
}
export interface IEventRoundAnnounceLastRoundHalf {
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
export interface IEventRoundEndUploadStats {
}
export interface IEventRoundOfficiallyEnded {
}
export interface IEventUgcMapInfoReceived {
    published_file_id: Long;
}
export interface IEventUgcMapUnsubscribed {
    published_file_id: Long;
}
export interface IEventUgcMapDownloadError {
    published_file_id: Long;
    error_code: number;
}
export interface IEventUgcFileDownloadFinished {
    hcontent: Long;
}
export interface IEventUgcFileDownloadStart {
    hcontent: Long;
    published_file_id: Long;
}
export interface IEventBeginNewMatch {
}
export interface IEventRoundStartPreEntity {
}
export interface IEventTeamplayRoundStart {
    full_reset: boolean;
}
export interface IEventHostnameChanged {
    hostname: string;
}
export interface IEventDifficultyChanged {
    newDifficulty: number;
    oldDifficulty: number;
    strDifficulty: string;
}
export interface IEventFinaleStart {
    rushes: number;
}
export interface IEventGameMessage {
    target: number;
    text: string;
}
export interface IEventDmBonusWeaponStart {
    time: number;
    Pos: number;
}
export interface IEventSurvivalAnnouncePhase {
    phase: number;
}
export interface IEventBreakBreakable {
    entindex: number;
    userid: number;
    material: number;
}
export interface IEventBreakProp {
    entindex: number;
    userid: number;
}
export interface IEventPlayerDecal {
    userid: number;
}
export interface IEventEntityKilled {
    entindex_killed: number;
    entindex_attacker: number;
    entindex_inflictor: number;
    damagebits: number;
}
export interface IEventBonusUpdated {
    numadvanced: number;
    numbronze: number;
    numsilver: number;
    numgold: number;
}
export interface IEventPlayerStatsUpdated {
    forceupload: boolean;
}
export interface IEventAchievementEvent {
    achievement_name: string;
    cur_val: number;
    max_val: number;
}
export interface IEventAchievementIncrement {
    achievement_id: number;
    cur_val: number;
    max_val: number;
}
export interface IEventAchievementEarned {
    player: number;
    achievement: number;
}
export interface IEventAchievementWriteFailed {
}
export interface IEventPhysgunPickup {
    entindex: number;
}
export interface IEventFlareIgniteNpc {
    entindex: number;
}
export interface IEventHelicopterGrenadePuntMiss {
}
export interface IEventUserDataDownloaded {
}
export interface IEventRagdollDissolved {
    entindex: number;
}
export interface IEventGameinstructorDraw {
}
export interface IEventGameinstructorNodraw {
}
export interface IEventMapTransition {
}
export interface IEventEntityVisible {
    userid: number;
    subject: number;
    classname: string;
    entityname: string;
}
export interface IEventSetInstructorGroupEnabled {
    group: string;
    enabled: number;
}
export interface IEventInstructorServerHintCreate {
    hint_name: string;
    hint_replace_key: string;
    hint_target: number;
    hint_activator_userid: number;
    hint_timeout: number;
    hint_icon_onscreen: string;
    hint_icon_offscreen: string;
    hint_caption: string;
    hint_activator_caption: string;
    hint_color: string;
    hint_icon_offset: number;
    hint_range: number;
    hint_flags: number;
    hint_binding: string;
    hint_gamepad_binding: string;
    hint_allow_nodraw_target: boolean;
    hint_nooffscreen: boolean;
    hint_forcecaption: boolean;
    hint_local_player_only: boolean;
}
export interface IEventInstructorServerHintStop {
    hint_name: string;
}
export interface IEventReadGameTitledata {
    controllerId: number;
}
export interface IEventWriteGameTitledata {
    controllerId: number;
}
export interface IEventResetGameTitledata {
    controllerId: number;
}
export interface IEventWeaponhudSelection {
    userid: number;
    mode: number;
    entindex: number;
}
export interface IEventVoteEnded {
}
export interface IEventVoteStarted {
    issue: string;
    param1: string;
    team: number;
    initiator: number;
}
export interface IEventVoteChanged {
    vote_option1: number;
    vote_option2: number;
    vote_option3: number;
    vote_option4: number;
    vote_option5: number;
    potentialVotes: number;
}
export interface IEventVotePassed {
    details: string;
    param1: string;
    team: number;
}
export interface IEventVoteFailed {
    team: number;
}
export interface IEventVoteCast {
    vote_option: number;
    team: number;
    entityid: number;
}
export interface IEventVoteOptions {
    count: number;
    option1: string;
    option2: string;
    option3: string;
    option4: string;
    option5: string;
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
export interface IEventEndmatchCmmStartRevealItems {
}
export interface IEventInventoryUpdated {
}
export interface IEventCartUpdated {
}
export interface IEventStorePricesheetUpdated {
}
export interface IEventGcConnected {
}
export interface IEventItemSchemaInitialized {
}
export interface IEventClientLoadoutChanged {
}
export interface IEventAddPlayerSonarIcon {
    userid: number;
    pos_x: number;
    pos_y: number;
    pos_z: number;
}
export interface IEventAddBulletHitMarker {
    userid: number;
    bone: number;
    pos_x: number;
    pos_y: number;
    pos_z: number;
    ang_x: number;
    ang_y: number;
    ang_z: number;
    start_x: number;
    start_y: number;
    start_z: number;
    hit: boolean;
}
export interface IEventVerifyClientHit {
    userid: number;
    pos_x: number;
    pos_y: number;
    pos_z: number;
    timestamp: number;
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
export interface IEventItemPurchase {
    userid: number;
    team: number;
    loadout: number;
    weapon: string;
}
export interface IEventBombBeginplant {
    userid: number;
    site: number;
}
export interface IEventBombAbortplant {
    userid: number;
    site: number;
}
export interface IEventBombPlanted {
    userid: number;
    site: number;
}
export interface IEventBombDefused {
    userid: number;
    site: number;
}
export interface IEventBombExploded {
    userid: number;
    site: number;
}
export interface IEventBombDropped {
    userid: number;
    entindex: number;
}
export interface IEventBombPickup {
    userid: number;
}
export interface IEventDefuserDropped {
    entityid: number;
}
export interface IEventDefuserPickup {
    entityid: number;
    userid: number;
}
export interface IEventAnnouncePhaseEnd {
}
export interface IEventCsIntermission {
}
export interface IEventBombBegindefuse {
    userid: number;
    haskit: boolean;
}
export interface IEventBombAbortdefuse {
    userid: number;
}
export interface IEventHostageFollows {
    userid: number;
    hostage: number;
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
export interface IEventHostageStopsFollowing {
    userid: number;
    hostage: number;
}
export interface IEventHostageRescuedAll {
}
export interface IEventHostageCallForHelp {
    hostage: number;
}
export interface IEventVipEscaped {
    userid: number;
}
export interface IEventVipKilled {
    userid: number;
    attacker: number;
}
export interface IEventPlayerRadio {
    userid: number;
    slot: number;
}
export interface IEventBombBeep {
    entindex: number;
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
export interface IEventGrenadeThrown {
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
export interface IEventSilencerDetach {
    userid: number;
}
export interface IEventInspectWeapon {
    userid: number;
}
export interface IEventWeaponZoomRifle {
    userid: number;
}
export interface IEventPlayerSpawned {
    userid: number;
    inrestart: boolean;
}
export interface IEventItemPickup {
    userid: number;
    item: string;
    silent: boolean;
    defindex: number;
}
export interface IEventItemPickupSlerp {
    userid: number;
    index: number;
    behavior: number;
}
export interface IEventItemPickupFailed {
    userid: number;
    item: string;
    reason: number;
    limit: number;
}
export interface IEventItemRemove {
    userid: number;
    item: string;
    defindex: number;
}
export interface IEventAmmoPickup {
    userid: number;
    item: string;
    index: number;
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
export interface IEventEnterBuyzone {
    userid: number;
    canbuy: boolean;
}
export interface IEventExitBuyzone {
    userid: number;
    canbuy: boolean;
}
export interface IEventBuytimeEnded {
}
export interface IEventEnterBombzone {
    userid: number;
    hasbomb: boolean;
    isplanted: boolean;
}
export interface IEventExitBombzone {
    userid: number;
    hasbomb: boolean;
    isplanted: boolean;
}
export interface IEventEnterRescueZone {
    userid: number;
}
export interface IEventExitRescueZone {
    userid: number;
}
export interface IEventSilencerOff {
    userid: number;
}
export interface IEventSilencerOn {
    userid: number;
}
export interface IEventBuymenuOpen {
    userid: number;
}
export interface IEventBuymenuClose {
    userid: number;
}
export interface IEventRoundPrestart {
}
export interface IEventRoundPoststart {
}
export interface IEventGrenadeBounce {
    userid: number;
}
export interface IEventHegrenadeDetonate {
    userid: number;
    entityid: number;
    x: number;
    y: number;
    z: number;
}
export interface IEventFlashbangDetonate {
    userid: number;
    entityid: number;
    x: number;
    y: number;
    z: number;
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
export interface IEventMolotovDetonate {
    userid: number;
    x: number;
    y: number;
    z: number;
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
export interface IEventTagrenadeDetonate {
    userid: number;
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
export interface IEventInfernoExpire {
    entityid: number;
    x: number;
    y: number;
    z: number;
}
export interface IEventInfernoExtinguish {
    entityid: number;
    x: number;
    y: number;
    z: number;
}
export interface IEventDecoyFiring {
    userid: number;
    entityid: number;
    x: number;
    y: number;
    z: number;
}
export interface IEventBulletImpact {
    userid: number;
    x: number;
    y: number;
    z: number;
}
export interface IEventPlayerFootstep {
    userid: number;
}
export interface IEventPlayerJump {
    userid: number;
}
export interface IEventPlayerBlind {
    userid: number;
    attacker: number;
    entityid: number;
    blind_duration: number;
}
export interface IEventPlayerFalldamage {
    userid: number;
    damage: number;
}
export interface IEventDoorMoving {
    entindex: number;
    userid: number;
}
export interface IEventRoundFreezeEnd {
}
export interface IEventMbInputLockSuccess {
}
export interface IEventMbInputLockCancel {
}
export interface IEventNavBlocked {
    area: number;
    blocked: boolean;
}
export interface IEventNavGenerate {
}
export interface IEventAchievementInfoLoaded {
}
export interface IEventSpecTargetUpdated {
    userid: number;
}
export interface IEventSpecModeUpdated {
    userid: number;
}
export interface IEventHltvChangedMode {
    oldmode: number;
    newmode: number;
    obs_target: number;
}
export interface IEventCsGameDisconnected {
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
export interface IEventCsWinPanelMatch {
}
export interface IEventCsMatchEndRestart {
}
export interface IEventCsPreRestart {
}
export interface IEventShowFreezepanel {
    victim: number;
    killer: number;
    hits_taken: number;
    damage_taken: number;
    hits_given: number;
    damage_given: number;
}
export interface IEventHideFreezepanel {
}
export interface IEventFreezecamStarted {
}
export interface IEventPlayerAvengedTeammate {
    avenger_id: number;
    avenged_player_id: number;
}
export interface IEventAchievementEarnedLocal {
    achievement: number;
    splitscreenplayer: number;
}
export interface IEventItemFound {
    player: number;
    quality: number;
    method: number;
    itemdef: number;
    itemid: number;
}
export interface IEventRepostXboxAchievements {
    splitscreenplayer: number;
}
export interface IEventMatchEndConditions {
    frags: number;
    max_rounds: number;
    win_rounds: number;
    time: number;
}
export interface IEventRoundMvp {
    userid: number;
    reason: number;
    musickitmvps: number;
    nomusic: number;
}
export interface IEventShowSurvivalRespawnStatus {
    loc_token: string;
    duration: number;
    userid: number;
}
export interface IEventClientDisconnect {
}
export interface IEventGgPlayerLevelup {
    userid: number;
    weaponrank: number;
    weaponname: string;
}
export interface IEventGgtrPlayerLevelup {
    userid: number;
    weaponrank: number;
    weaponname: string;
}
export interface IEventAssassinationTargetKilled {
    target: number;
    killer: number;
}
export interface IEventGgprogressivePlayerLevelup {
    userid: number;
    weaponrank: number;
    weaponname: string;
}
export interface IEventGgKilledEnemy {
    victimid: number;
    attackerid: number;
    dominated: number;
    revenge: number;
    bonus: boolean;
}
export interface IEventGgFinalWeaponAchieved {
    playerid: number;
}
export interface IEventGgBonusGrenadeAchieved {
    userid: number;
}
export interface IEventSwitchTeam {
    numPlayers: number;
    numSpectators: number;
    avg_rank: number;
    numTSlotsFree: number;
    numCTSlotsFree: number;
}
export interface IEventGgLeader {
    playerid: number;
}
export interface IEventGgTeamLeader {
    playerid: number;
}
export interface IEventGgPlayerImpendingUpgrade {
    userid: number;
}
export interface IEventWriteProfileData {
}
export interface IEventTrialTimeExpired {
    slot: number;
}
export interface IEventUpdateMatchmakingStats {
}
export interface IEventPlayerResetVote {
    userid: number;
    vote: boolean;
}
export interface IEventEnableRestartVoting {
    enable: boolean;
}
export interface IEventSfuievent {
    action: string;
    data: string;
    slot: number;
}
export interface IEventStartVote {
    userid: number;
    type: number;
    vote_parameter: number;
}
export interface IEventPlayerGivenC4 {
    userid: number;
}
export interface IEventPlayerBecomeGhost {
    userid: number;
}
export interface IEventGgResetRoundStartSounds {
    userid: number;
}
export interface IEventTrPlayerFlashbanged {
    userid: number;
}
export interface IEventTrMarkComplete {
    complete: number;
}
export interface IEventTrMarkBestTime {
    time: number;
}
export interface IEventTrExitHintTrigger {
}
export interface IEventBotTakeover {
    userid: number;
    botid: number;
    index: number;
}
export interface IEventTrShowFinishMsgbox {
    userid: number;
}
export interface IEventTrShowExitMsgbox {
    userid: number;
}
export interface IEventResetPlayerControls {
}
export interface IEventJointeamFailed {
    userid: number;
    reason: number;
}
export interface IEventTeamchangePending {
    userid: number;
    toteam: number;
}
export interface IEventMaterialDefaultComplete {
}
export interface IEventCsPrevNextSpectator {
    next: boolean;
}
export interface IEventNextlevelChanged {
    nextlevel: string;
    mapgroup: string;
    skirmishmode: string;
}
export interface IEventSeasoncoinLevelup {
    player: number;
    category: number;
    rank: number;
}
export interface IEventTournamentReward {
    defindex: number;
    totalrewards: number;
    accountid: number;
}
export interface IEventStartHalftime {
}
export interface IEventAmmoRefill {
    userid: number;
    success: boolean;
}
export interface IEventParachutePickup {
    userid: number;
}
export interface IEventParachuteDeploy {
    userid: number;
}
export interface IEventDronegunAttack {
    userid: number;
}
export interface IEventDroneDispatched {
    userid: number;
    priority: number;
    drone_dispatched: number;
}
export interface IEventLootCrateVisible {
    userid: number;
    subject: number;
    type: string;
}
export interface IEventLootCrateOpened {
    userid: number;
    type: string;
}
export interface IEventOpenCrateInstr {
    userid: number;
    subject: number;
    type: string;
}
export interface IEventSmokeBeaconParadrop {
    userid: number;
    paradrop: number;
}
export interface IEventSurvivalParadropSpawn {
    entityid: number;
}
export interface IEventSurvivalParadropBreak {
    entityid: number;
}
export interface IEventDroneCargoDetached {
    userid: number;
    cargo: number;
    delivered: boolean;
}
export interface IEventDroneAboveRoof {
    userid: number;
    cargo: number;
}
export interface IEventChoppersIncomingWarning {
    global: boolean;
}
export interface IEventFirstbombsIncomingWarning {
    global: boolean;
}
export interface IEventDzItemInteraction {
    userid: number;
    subject: number;
    type: string;
}
export interface IEventSnowballHitPlayerFace {
    userid: number;
}
export interface IEventSurvivalTeammateRespawn {
    userid: number;
}
export interface IEventSurvivalNoRespawnsWarning {
    userid: number;
}
export interface IEventSurvivalNoRespawnsFinal {
    userid: number;
}
export interface IEventPlayerPing {
    userid: number;
    entityid: number;
    x: number;
    y: number;
    z: number;
}
export interface IEventPlayerPingStop {
    entityid: number;
}
export interface IEventGuardianWaveRestart {
}
export interface IEventHltvStatus {
    clients: number;
    slots: number;
    proxies: number;
    master: string;
    externaltotal: number;
    externallinked: number;
}
export interface IEventHltvCameraman {
    index: number;
}
export interface IEventHltvRankCamera {
    index: number;
    rank: number;
    target: number;
}
export interface IEventHltvRankEntity {
    index: number;
    rank: number;
    target: number;
}
export interface IEventHltvFixed {
    posx: number;
    posy: number;
    posz: number;
    theta: number;
    phi: number;
    offset: number;
    fov: number;
    target: number;
}
export interface IEventHltvChase {
    target1: number;
    target2: number;
    distance: number;
    theta: number;
    phi: number;
    inertia: number;
    ineye: number;
}
export interface IEventHltvMessage {
    text: string;
}
export interface IEventHltvTitle {
    text: string;
}
export interface IEventHltvChat {
    text: string;
}
export interface IEventHltvChangedTarget {
    mode: number;
    old_target: number;
    obs_target: number;
}
export interface INonSpecificGameEventServerSpawn {
    name: "server_spawn";
    event: IEventServerSpawn;
}
export interface INonSpecificGameEventServerPreShutdown {
    name: "server_pre_shutdown";
    event: IEventServerPreShutdown;
}
export interface INonSpecificGameEventServerShutdown {
    name: "server_shutdown";
    event: IEventServerShutdown;
}
export interface INonSpecificGameEventServerCvar {
    name: "server_cvar";
    event: IEventServerCvar;
}
export interface INonSpecificGameEventServerMessage {
    name: "server_message";
    event: IEventServerMessage;
}
export interface INonSpecificGameEventServerAddban {
    name: "server_addban";
    event: IEventServerAddban;
}
export interface INonSpecificGameEventServerRemoveban {
    name: "server_removeban";
    event: IEventServerRemoveban;
}
export interface INonSpecificGameEventPlayerConnect {
    name: "player_connect";
    event: IEventPlayerConnect;
}
export interface INonSpecificGameEventPlayerInfo {
    name: "player_info";
    event: IEventPlayerInfo;
}
export interface INonSpecificGameEventPlayerDisconnect {
    name: "player_disconnect";
    event: IEventPlayerDisconnect;
}
export interface INonSpecificGameEventPlayerActivate {
    name: "player_activate";
    event: IEventPlayerActivate;
}
export interface INonSpecificGameEventPlayerConnectFull {
    name: "player_connect_full";
    event: IEventPlayerConnectFull;
}
export interface INonSpecificGameEventPlayerSay {
    name: "player_say";
    event: IEventPlayerSay;
}
export interface INonSpecificGameEventCsRoundStartBeep {
    name: "cs_round_start_beep";
    event: IEventCsRoundStartBeep;
}
export interface INonSpecificGameEventCsRoundFinalBeep {
    name: "cs_round_final_beep";
    event: IEventCsRoundFinalBeep;
}
export interface INonSpecificGameEventRoundTimeWarning {
    name: "round_time_warning";
    event: IEventRoundTimeWarning;
}
export interface INonSpecificGameEventHltvReplay {
    name: "hltv_replay";
    event: IEventHltvReplay;
}
export interface INonSpecificGameEventTeamInfo {
    name: "team_info";
    event: IEventTeamInfo;
}
export interface INonSpecificGameEventTeamScore {
    name: "team_score";
    event: IEventTeamScore;
}
export interface INonSpecificGameEventTeamplayBroadcastAudio {
    name: "teamplay_broadcast_audio";
    event: IEventTeamplayBroadcastAudio;
}
export interface INonSpecificGameEventGameuiHidden {
    name: "gameui_hidden";
    event: IEventGameuiHidden;
}
export interface INonSpecificGameEventItemsGifted {
    name: "items_gifted";
    event: IEventItemsGifted;
}
export interface INonSpecificGameEventPlayerTeam {
    name: "player_team";
    event: IEventPlayerTeam;
}
export interface INonSpecificGameEventPlayerClass {
    name: "player_class";
    event: IEventPlayerClass;
}
export interface INonSpecificGameEventPlayerDeath {
    name: "player_death";
    event: IEventPlayerDeath;
}
export interface INonSpecificGameEventPlayerHurt {
    name: "player_hurt";
    event: IEventPlayerHurt;
}
export interface INonSpecificGameEventPlayerChat {
    name: "player_chat";
    event: IEventPlayerChat;
}
export interface INonSpecificGameEventPlayerScore {
    name: "player_score";
    event: IEventPlayerScore;
}
export interface INonSpecificGameEventPlayerSpawn {
    name: "player_spawn";
    event: IEventPlayerSpawn;
}
export interface INonSpecificGameEventPlayerShoot {
    name: "player_shoot";
    event: IEventPlayerShoot;
}
export interface INonSpecificGameEventPlayerUse {
    name: "player_use";
    event: IEventPlayerUse;
}
export interface INonSpecificGameEventPlayerChangename {
    name: "player_changename";
    event: IEventPlayerChangename;
}
export interface INonSpecificGameEventPlayerHintmessage {
    name: "player_hintmessage";
    event: IEventPlayerHintmessage;
}
export interface INonSpecificGameEventGameInit {
    name: "game_init";
    event: IEventGameInit;
}
export interface INonSpecificGameEventGameNewmap {
    name: "game_newmap";
    event: IEventGameNewmap;
}
export interface INonSpecificGameEventGameStart {
    name: "game_start";
    event: IEventGameStart;
}
export interface INonSpecificGameEventGameEnd {
    name: "game_end";
    event: IEventGameEnd;
}
export interface INonSpecificGameEventRoundStart {
    name: "round_start";
    event: IEventRoundStart;
}
export interface INonSpecificGameEventRoundAnnounceMatchPoint {
    name: "round_announce_match_point";
    event: IEventRoundAnnounceMatchPoint;
}
export interface INonSpecificGameEventRoundAnnounceFinal {
    name: "round_announce_final";
    event: IEventRoundAnnounceFinal;
}
export interface INonSpecificGameEventRoundAnnounceLastRoundHalf {
    name: "round_announce_last_round_half";
    event: IEventRoundAnnounceLastRoundHalf;
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
export interface INonSpecificGameEventRoundEndUploadStats {
    name: "round_end_upload_stats";
    event: IEventRoundEndUploadStats;
}
export interface INonSpecificGameEventRoundOfficiallyEnded {
    name: "round_officially_ended";
    event: IEventRoundOfficiallyEnded;
}
export interface INonSpecificGameEventUgcMapInfoReceived {
    name: "ugc_map_info_received";
    event: IEventUgcMapInfoReceived;
}
export interface INonSpecificGameEventUgcMapUnsubscribed {
    name: "ugc_map_unsubscribed";
    event: IEventUgcMapUnsubscribed;
}
export interface INonSpecificGameEventUgcMapDownloadError {
    name: "ugc_map_download_error";
    event: IEventUgcMapDownloadError;
}
export interface INonSpecificGameEventUgcFileDownloadFinished {
    name: "ugc_file_download_finished";
    event: IEventUgcFileDownloadFinished;
}
export interface INonSpecificGameEventUgcFileDownloadStart {
    name: "ugc_file_download_start";
    event: IEventUgcFileDownloadStart;
}
export interface INonSpecificGameEventBeginNewMatch {
    name: "begin_new_match";
    event: IEventBeginNewMatch;
}
export interface INonSpecificGameEventRoundStartPreEntity {
    name: "round_start_pre_entity";
    event: IEventRoundStartPreEntity;
}
export interface INonSpecificGameEventTeamplayRoundStart {
    name: "teamplay_round_start";
    event: IEventTeamplayRoundStart;
}
export interface INonSpecificGameEventHostnameChanged {
    name: "hostname_changed";
    event: IEventHostnameChanged;
}
export interface INonSpecificGameEventDifficultyChanged {
    name: "difficulty_changed";
    event: IEventDifficultyChanged;
}
export interface INonSpecificGameEventFinaleStart {
    name: "finale_start";
    event: IEventFinaleStart;
}
export interface INonSpecificGameEventGameMessage {
    name: "game_message";
    event: IEventGameMessage;
}
export interface INonSpecificGameEventDmBonusWeaponStart {
    name: "dm_bonus_weapon_start";
    event: IEventDmBonusWeaponStart;
}
export interface INonSpecificGameEventSurvivalAnnouncePhase {
    name: "survival_announce_phase";
    event: IEventSurvivalAnnouncePhase;
}
export interface INonSpecificGameEventBreakBreakable {
    name: "break_breakable";
    event: IEventBreakBreakable;
}
export interface INonSpecificGameEventBreakProp {
    name: "break_prop";
    event: IEventBreakProp;
}
export interface INonSpecificGameEventPlayerDecal {
    name: "player_decal";
    event: IEventPlayerDecal;
}
export interface INonSpecificGameEventEntityKilled {
    name: "entity_killed";
    event: IEventEntityKilled;
}
export interface INonSpecificGameEventBonusUpdated {
    name: "bonus_updated";
    event: IEventBonusUpdated;
}
export interface INonSpecificGameEventPlayerStatsUpdated {
    name: "player_stats_updated";
    event: IEventPlayerStatsUpdated;
}
export interface INonSpecificGameEventAchievementEvent {
    name: "achievement_event";
    event: IEventAchievementEvent;
}
export interface INonSpecificGameEventAchievementIncrement {
    name: "achievement_increment";
    event: IEventAchievementIncrement;
}
export interface INonSpecificGameEventAchievementEarned {
    name: "achievement_earned";
    event: IEventAchievementEarned;
}
export interface INonSpecificGameEventAchievementWriteFailed {
    name: "achievement_write_failed";
    event: IEventAchievementWriteFailed;
}
export interface INonSpecificGameEventPhysgunPickup {
    name: "physgun_pickup";
    event: IEventPhysgunPickup;
}
export interface INonSpecificGameEventFlareIgniteNpc {
    name: "flare_ignite_npc";
    event: IEventFlareIgniteNpc;
}
export interface INonSpecificGameEventHelicopterGrenadePuntMiss {
    name: "helicopter_grenade_punt_miss";
    event: IEventHelicopterGrenadePuntMiss;
}
export interface INonSpecificGameEventUserDataDownloaded {
    name: "user_data_downloaded";
    event: IEventUserDataDownloaded;
}
export interface INonSpecificGameEventRagdollDissolved {
    name: "ragdoll_dissolved";
    event: IEventRagdollDissolved;
}
export interface INonSpecificGameEventGameinstructorDraw {
    name: "gameinstructor_draw";
    event: IEventGameinstructorDraw;
}
export interface INonSpecificGameEventGameinstructorNodraw {
    name: "gameinstructor_nodraw";
    event: IEventGameinstructorNodraw;
}
export interface INonSpecificGameEventMapTransition {
    name: "map_transition";
    event: IEventMapTransition;
}
export interface INonSpecificGameEventEntityVisible {
    name: "entity_visible";
    event: IEventEntityVisible;
}
export interface INonSpecificGameEventSetInstructorGroupEnabled {
    name: "set_instructor_group_enabled";
    event: IEventSetInstructorGroupEnabled;
}
export interface INonSpecificGameEventInstructorServerHintCreate {
    name: "instructor_server_hint_create";
    event: IEventInstructorServerHintCreate;
}
export interface INonSpecificGameEventInstructorServerHintStop {
    name: "instructor_server_hint_stop";
    event: IEventInstructorServerHintStop;
}
export interface INonSpecificGameEventReadGameTitledata {
    name: "read_game_titledata";
    event: IEventReadGameTitledata;
}
export interface INonSpecificGameEventWriteGameTitledata {
    name: "write_game_titledata";
    event: IEventWriteGameTitledata;
}
export interface INonSpecificGameEventResetGameTitledata {
    name: "reset_game_titledata";
    event: IEventResetGameTitledata;
}
export interface INonSpecificGameEventWeaponhudSelection {
    name: "weaponhud_selection";
    event: IEventWeaponhudSelection;
}
export interface INonSpecificGameEventVoteEnded {
    name: "vote_ended";
    event: IEventVoteEnded;
}
export interface INonSpecificGameEventVoteStarted {
    name: "vote_started";
    event: IEventVoteStarted;
}
export interface INonSpecificGameEventVoteChanged {
    name: "vote_changed";
    event: IEventVoteChanged;
}
export interface INonSpecificGameEventVotePassed {
    name: "vote_passed";
    event: IEventVotePassed;
}
export interface INonSpecificGameEventVoteFailed {
    name: "vote_failed";
    event: IEventVoteFailed;
}
export interface INonSpecificGameEventVoteCast {
    name: "vote_cast";
    event: IEventVoteCast;
}
export interface INonSpecificGameEventVoteOptions {
    name: "vote_options";
    event: IEventVoteOptions;
}
export interface INonSpecificGameEventEndmatchMapvoteSelectingMap {
    name: "endmatch_mapvote_selecting_map";
    event: IEventEndmatchMapvoteSelectingMap;
}
export interface INonSpecificGameEventEndmatchCmmStartRevealItems {
    name: "endmatch_cmm_start_reveal_items";
    event: IEventEndmatchCmmStartRevealItems;
}
export interface INonSpecificGameEventInventoryUpdated {
    name: "inventory_updated";
    event: IEventInventoryUpdated;
}
export interface INonSpecificGameEventCartUpdated {
    name: "cart_updated";
    event: IEventCartUpdated;
}
export interface INonSpecificGameEventStorePricesheetUpdated {
    name: "store_pricesheet_updated";
    event: IEventStorePricesheetUpdated;
}
export interface INonSpecificGameEventGcConnected {
    name: "gc_connected";
    event: IEventGcConnected;
}
export interface INonSpecificGameEventItemSchemaInitialized {
    name: "item_schema_initialized";
    event: IEventItemSchemaInitialized;
}
export interface INonSpecificGameEventClientLoadoutChanged {
    name: "client_loadout_changed";
    event: IEventClientLoadoutChanged;
}
export interface INonSpecificGameEventAddPlayerSonarIcon {
    name: "add_player_sonar_icon";
    event: IEventAddPlayerSonarIcon;
}
export interface INonSpecificGameEventAddBulletHitMarker {
    name: "add_bullet_hit_marker";
    event: IEventAddBulletHitMarker;
}
export interface INonSpecificGameEventVerifyClientHit {
    name: "verify_client_hit";
    event: IEventVerifyClientHit;
}
export interface INonSpecificGameEventOtherDeath {
    name: "other_death";
    event: IEventOtherDeath;
}
export interface INonSpecificGameEventItemPurchase {
    name: "item_purchase";
    event: IEventItemPurchase;
}
export interface INonSpecificGameEventBombBeginplant {
    name: "bomb_beginplant";
    event: IEventBombBeginplant;
}
export interface INonSpecificGameEventBombAbortplant {
    name: "bomb_abortplant";
    event: IEventBombAbortplant;
}
export interface INonSpecificGameEventBombPlanted {
    name: "bomb_planted";
    event: IEventBombPlanted;
}
export interface INonSpecificGameEventBombDefused {
    name: "bomb_defused";
    event: IEventBombDefused;
}
export interface INonSpecificGameEventBombExploded {
    name: "bomb_exploded";
    event: IEventBombExploded;
}
export interface INonSpecificGameEventBombDropped {
    name: "bomb_dropped";
    event: IEventBombDropped;
}
export interface INonSpecificGameEventBombPickup {
    name: "bomb_pickup";
    event: IEventBombPickup;
}
export interface INonSpecificGameEventDefuserDropped {
    name: "defuser_dropped";
    event: IEventDefuserDropped;
}
export interface INonSpecificGameEventDefuserPickup {
    name: "defuser_pickup";
    event: IEventDefuserPickup;
}
export interface INonSpecificGameEventAnnouncePhaseEnd {
    name: "announce_phase_end";
    event: IEventAnnouncePhaseEnd;
}
export interface INonSpecificGameEventCsIntermission {
    name: "cs_intermission";
    event: IEventCsIntermission;
}
export interface INonSpecificGameEventBombBegindefuse {
    name: "bomb_begindefuse";
    event: IEventBombBegindefuse;
}
export interface INonSpecificGameEventBombAbortdefuse {
    name: "bomb_abortdefuse";
    event: IEventBombAbortdefuse;
}
export interface INonSpecificGameEventHostageFollows {
    name: "hostage_follows";
    event: IEventHostageFollows;
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
export interface INonSpecificGameEventHostageStopsFollowing {
    name: "hostage_stops_following";
    event: IEventHostageStopsFollowing;
}
export interface INonSpecificGameEventHostageRescuedAll {
    name: "hostage_rescued_all";
    event: IEventHostageRescuedAll;
}
export interface INonSpecificGameEventHostageCallForHelp {
    name: "hostage_call_for_help";
    event: IEventHostageCallForHelp;
}
export interface INonSpecificGameEventVipEscaped {
    name: "vip_escaped";
    event: IEventVipEscaped;
}
export interface INonSpecificGameEventVipKilled {
    name: "vip_killed";
    event: IEventVipKilled;
}
export interface INonSpecificGameEventPlayerRadio {
    name: "player_radio";
    event: IEventPlayerRadio;
}
export interface INonSpecificGameEventBombBeep {
    name: "bomb_beep";
    event: IEventBombBeep;
}
export interface INonSpecificGameEventWeaponFire {
    name: "weapon_fire";
    event: IEventWeaponFire;
}
export interface INonSpecificGameEventWeaponFireOnEmpty {
    name: "weapon_fire_on_empty";
    event: IEventWeaponFireOnEmpty;
}
export interface INonSpecificGameEventGrenadeThrown {
    name: "grenade_thrown";
    event: IEventGrenadeThrown;
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
export interface INonSpecificGameEventSilencerDetach {
    name: "silencer_detach";
    event: IEventSilencerDetach;
}
export interface INonSpecificGameEventInspectWeapon {
    name: "inspect_weapon";
    event: IEventInspectWeapon;
}
export interface INonSpecificGameEventWeaponZoomRifle {
    name: "weapon_zoom_rifle";
    event: IEventWeaponZoomRifle;
}
export interface INonSpecificGameEventPlayerSpawned {
    name: "player_spawned";
    event: IEventPlayerSpawned;
}
export interface INonSpecificGameEventItemPickup {
    name: "item_pickup";
    event: IEventItemPickup;
}
export interface INonSpecificGameEventItemPickupSlerp {
    name: "item_pickup_slerp";
    event: IEventItemPickupSlerp;
}
export interface INonSpecificGameEventItemPickupFailed {
    name: "item_pickup_failed";
    event: IEventItemPickupFailed;
}
export interface INonSpecificGameEventItemRemove {
    name: "item_remove";
    event: IEventItemRemove;
}
export interface INonSpecificGameEventAmmoPickup {
    name: "ammo_pickup";
    event: IEventAmmoPickup;
}
export interface INonSpecificGameEventItemEquip {
    name: "item_equip";
    event: IEventItemEquip;
}
export interface INonSpecificGameEventEnterBuyzone {
    name: "enter_buyzone";
    event: IEventEnterBuyzone;
}
export interface INonSpecificGameEventExitBuyzone {
    name: "exit_buyzone";
    event: IEventExitBuyzone;
}
export interface INonSpecificGameEventBuytimeEnded {
    name: "buytime_ended";
    event: IEventBuytimeEnded;
}
export interface INonSpecificGameEventEnterBombzone {
    name: "enter_bombzone";
    event: IEventEnterBombzone;
}
export interface INonSpecificGameEventExitBombzone {
    name: "exit_bombzone";
    event: IEventExitBombzone;
}
export interface INonSpecificGameEventEnterRescueZone {
    name: "enter_rescue_zone";
    event: IEventEnterRescueZone;
}
export interface INonSpecificGameEventExitRescueZone {
    name: "exit_rescue_zone";
    event: IEventExitRescueZone;
}
export interface INonSpecificGameEventSilencerOff {
    name: "silencer_off";
    event: IEventSilencerOff;
}
export interface INonSpecificGameEventSilencerOn {
    name: "silencer_on";
    event: IEventSilencerOn;
}
export interface INonSpecificGameEventBuymenuOpen {
    name: "buymenu_open";
    event: IEventBuymenuOpen;
}
export interface INonSpecificGameEventBuymenuClose {
    name: "buymenu_close";
    event: IEventBuymenuClose;
}
export interface INonSpecificGameEventRoundPrestart {
    name: "round_prestart";
    event: IEventRoundPrestart;
}
export interface INonSpecificGameEventRoundPoststart {
    name: "round_poststart";
    event: IEventRoundPoststart;
}
export interface INonSpecificGameEventGrenadeBounce {
    name: "grenade_bounce";
    event: IEventGrenadeBounce;
}
export interface INonSpecificGameEventHegrenadeDetonate {
    name: "hegrenade_detonate";
    event: IEventHegrenadeDetonate;
}
export interface INonSpecificGameEventFlashbangDetonate {
    name: "flashbang_detonate";
    event: IEventFlashbangDetonate;
}
export interface INonSpecificGameEventSmokegrenadeDetonate {
    name: "smokegrenade_detonate";
    event: IEventSmokegrenadeDetonate;
}
export interface INonSpecificGameEventSmokegrenadeExpired {
    name: "smokegrenade_expired";
    event: IEventSmokegrenadeExpired;
}
export interface INonSpecificGameEventMolotovDetonate {
    name: "molotov_detonate";
    event: IEventMolotovDetonate;
}
export interface INonSpecificGameEventDecoyDetonate {
    name: "decoy_detonate";
    event: IEventDecoyDetonate;
}
export interface INonSpecificGameEventDecoyStarted {
    name: "decoy_started";
    event: IEventDecoyStarted;
}
export interface INonSpecificGameEventTagrenadeDetonate {
    name: "tagrenade_detonate";
    event: IEventTagrenadeDetonate;
}
export interface INonSpecificGameEventInfernoStartburn {
    name: "inferno_startburn";
    event: IEventInfernoStartburn;
}
export interface INonSpecificGameEventInfernoExpire {
    name: "inferno_expire";
    event: IEventInfernoExpire;
}
export interface INonSpecificGameEventInfernoExtinguish {
    name: "inferno_extinguish";
    event: IEventInfernoExtinguish;
}
export interface INonSpecificGameEventDecoyFiring {
    name: "decoy_firing";
    event: IEventDecoyFiring;
}
export interface INonSpecificGameEventBulletImpact {
    name: "bullet_impact";
    event: IEventBulletImpact;
}
export interface INonSpecificGameEventPlayerFootstep {
    name: "player_footstep";
    event: IEventPlayerFootstep;
}
export interface INonSpecificGameEventPlayerJump {
    name: "player_jump";
    event: IEventPlayerJump;
}
export interface INonSpecificGameEventPlayerBlind {
    name: "player_blind";
    event: IEventPlayerBlind;
}
export interface INonSpecificGameEventPlayerFalldamage {
    name: "player_falldamage";
    event: IEventPlayerFalldamage;
}
export interface INonSpecificGameEventDoorMoving {
    name: "door_moving";
    event: IEventDoorMoving;
}
export interface INonSpecificGameEventRoundFreezeEnd {
    name: "round_freeze_end";
    event: IEventRoundFreezeEnd;
}
export interface INonSpecificGameEventMbInputLockSuccess {
    name: "mb_input_lock_success";
    event: IEventMbInputLockSuccess;
}
export interface INonSpecificGameEventMbInputLockCancel {
    name: "mb_input_lock_cancel";
    event: IEventMbInputLockCancel;
}
export interface INonSpecificGameEventNavBlocked {
    name: "nav_blocked";
    event: IEventNavBlocked;
}
export interface INonSpecificGameEventNavGenerate {
    name: "nav_generate";
    event: IEventNavGenerate;
}
export interface INonSpecificGameEventAchievementInfoLoaded {
    name: "achievement_info_loaded";
    event: IEventAchievementInfoLoaded;
}
export interface INonSpecificGameEventSpecTargetUpdated {
    name: "spec_target_updated";
    event: IEventSpecTargetUpdated;
}
export interface INonSpecificGameEventSpecModeUpdated {
    name: "spec_mode_updated";
    event: IEventSpecModeUpdated;
}
export interface INonSpecificGameEventHltvChangedMode {
    name: "hltv_changed_mode";
    event: IEventHltvChangedMode;
}
export interface INonSpecificGameEventCsGameDisconnected {
    name: "cs_game_disconnected";
    event: IEventCsGameDisconnected;
}
export interface INonSpecificGameEventCsWinPanelRound {
    name: "cs_win_panel_round";
    event: IEventCsWinPanelRound;
}
export interface INonSpecificGameEventCsWinPanelMatch {
    name: "cs_win_panel_match";
    event: IEventCsWinPanelMatch;
}
export interface INonSpecificGameEventCsMatchEndRestart {
    name: "cs_match_end_restart";
    event: IEventCsMatchEndRestart;
}
export interface INonSpecificGameEventCsPreRestart {
    name: "cs_pre_restart";
    event: IEventCsPreRestart;
}
export interface INonSpecificGameEventShowFreezepanel {
    name: "show_freezepanel";
    event: IEventShowFreezepanel;
}
export interface INonSpecificGameEventHideFreezepanel {
    name: "hide_freezepanel";
    event: IEventHideFreezepanel;
}
export interface INonSpecificGameEventFreezecamStarted {
    name: "freezecam_started";
    event: IEventFreezecamStarted;
}
export interface INonSpecificGameEventPlayerAvengedTeammate {
    name: "player_avenged_teammate";
    event: IEventPlayerAvengedTeammate;
}
export interface INonSpecificGameEventAchievementEarnedLocal {
    name: "achievement_earned_local";
    event: IEventAchievementEarnedLocal;
}
export interface INonSpecificGameEventItemFound {
    name: "item_found";
    event: IEventItemFound;
}
export interface INonSpecificGameEventRepostXboxAchievements {
    name: "repost_xbox_achievements";
    event: IEventRepostXboxAchievements;
}
export interface INonSpecificGameEventMatchEndConditions {
    name: "match_end_conditions";
    event: IEventMatchEndConditions;
}
export interface INonSpecificGameEventRoundMvp {
    name: "round_mvp";
    event: IEventRoundMvp;
}
export interface INonSpecificGameEventShowSurvivalRespawnStatus {
    name: "show_survival_respawn_status";
    event: IEventShowSurvivalRespawnStatus;
}
export interface INonSpecificGameEventClientDisconnect {
    name: "client_disconnect";
    event: IEventClientDisconnect;
}
export interface INonSpecificGameEventGgPlayerLevelup {
    name: "gg_player_levelup";
    event: IEventGgPlayerLevelup;
}
export interface INonSpecificGameEventGgtrPlayerLevelup {
    name: "ggtr_player_levelup";
    event: IEventGgtrPlayerLevelup;
}
export interface INonSpecificGameEventAssassinationTargetKilled {
    name: "assassination_target_killed";
    event: IEventAssassinationTargetKilled;
}
export interface INonSpecificGameEventGgprogressivePlayerLevelup {
    name: "ggprogressive_player_levelup";
    event: IEventGgprogressivePlayerLevelup;
}
export interface INonSpecificGameEventGgKilledEnemy {
    name: "gg_killed_enemy";
    event: IEventGgKilledEnemy;
}
export interface INonSpecificGameEventGgFinalWeaponAchieved {
    name: "gg_final_weapon_achieved";
    event: IEventGgFinalWeaponAchieved;
}
export interface INonSpecificGameEventGgBonusGrenadeAchieved {
    name: "gg_bonus_grenade_achieved";
    event: IEventGgBonusGrenadeAchieved;
}
export interface INonSpecificGameEventSwitchTeam {
    name: "switch_team";
    event: IEventSwitchTeam;
}
export interface INonSpecificGameEventGgLeader {
    name: "gg_leader";
    event: IEventGgLeader;
}
export interface INonSpecificGameEventGgTeamLeader {
    name: "gg_team_leader";
    event: IEventGgTeamLeader;
}
export interface INonSpecificGameEventGgPlayerImpendingUpgrade {
    name: "gg_player_impending_upgrade";
    event: IEventGgPlayerImpendingUpgrade;
}
export interface INonSpecificGameEventWriteProfileData {
    name: "write_profile_data";
    event: IEventWriteProfileData;
}
export interface INonSpecificGameEventTrialTimeExpired {
    name: "trial_time_expired";
    event: IEventTrialTimeExpired;
}
export interface INonSpecificGameEventUpdateMatchmakingStats {
    name: "update_matchmaking_stats";
    event: IEventUpdateMatchmakingStats;
}
export interface INonSpecificGameEventPlayerResetVote {
    name: "player_reset_vote";
    event: IEventPlayerResetVote;
}
export interface INonSpecificGameEventEnableRestartVoting {
    name: "enable_restart_voting";
    event: IEventEnableRestartVoting;
}
export interface INonSpecificGameEventSfuievent {
    name: "sfuievent";
    event: IEventSfuievent;
}
export interface INonSpecificGameEventStartVote {
    name: "start_vote";
    event: IEventStartVote;
}
export interface INonSpecificGameEventPlayerGivenC4 {
    name: "player_given_c4";
    event: IEventPlayerGivenC4;
}
export interface INonSpecificGameEventPlayerBecomeGhost {
    name: "player_become_ghost";
    event: IEventPlayerBecomeGhost;
}
export interface INonSpecificGameEventGgResetRoundStartSounds {
    name: "gg_reset_round_start_sounds";
    event: IEventGgResetRoundStartSounds;
}
export interface INonSpecificGameEventTrPlayerFlashbanged {
    name: "tr_player_flashbanged";
    event: IEventTrPlayerFlashbanged;
}
export interface INonSpecificGameEventTrMarkComplete {
    name: "tr_mark_complete";
    event: IEventTrMarkComplete;
}
export interface INonSpecificGameEventTrMarkBestTime {
    name: "tr_mark_best_time";
    event: IEventTrMarkBestTime;
}
export interface INonSpecificGameEventTrExitHintTrigger {
    name: "tr_exit_hint_trigger";
    event: IEventTrExitHintTrigger;
}
export interface INonSpecificGameEventBotTakeover {
    name: "bot_takeover";
    event: IEventBotTakeover;
}
export interface INonSpecificGameEventTrShowFinishMsgbox {
    name: "tr_show_finish_msgbox";
    event: IEventTrShowFinishMsgbox;
}
export interface INonSpecificGameEventTrShowExitMsgbox {
    name: "tr_show_exit_msgbox";
    event: IEventTrShowExitMsgbox;
}
export interface INonSpecificGameEventResetPlayerControls {
    name: "reset_player_controls";
    event: IEventResetPlayerControls;
}
export interface INonSpecificGameEventJointeamFailed {
    name: "jointeam_failed";
    event: IEventJointeamFailed;
}
export interface INonSpecificGameEventTeamchangePending {
    name: "teamchange_pending";
    event: IEventTeamchangePending;
}
export interface INonSpecificGameEventMaterialDefaultComplete {
    name: "material_default_complete";
    event: IEventMaterialDefaultComplete;
}
export interface INonSpecificGameEventCsPrevNextSpectator {
    name: "cs_prev_next_spectator";
    event: IEventCsPrevNextSpectator;
}
export interface INonSpecificGameEventNextlevelChanged {
    name: "nextlevel_changed";
    event: IEventNextlevelChanged;
}
export interface INonSpecificGameEventSeasoncoinLevelup {
    name: "seasoncoin_levelup";
    event: IEventSeasoncoinLevelup;
}
export interface INonSpecificGameEventTournamentReward {
    name: "tournament_reward";
    event: IEventTournamentReward;
}
export interface INonSpecificGameEventStartHalftime {
    name: "start_halftime";
    event: IEventStartHalftime;
}
export interface INonSpecificGameEventAmmoRefill {
    name: "ammo_refill";
    event: IEventAmmoRefill;
}
export interface INonSpecificGameEventParachutePickup {
    name: "parachute_pickup";
    event: IEventParachutePickup;
}
export interface INonSpecificGameEventParachuteDeploy {
    name: "parachute_deploy";
    event: IEventParachuteDeploy;
}
export interface INonSpecificGameEventDronegunAttack {
    name: "dronegun_attack";
    event: IEventDronegunAttack;
}
export interface INonSpecificGameEventDroneDispatched {
    name: "drone_dispatched";
    event: IEventDroneDispatched;
}
export interface INonSpecificGameEventLootCrateVisible {
    name: "loot_crate_visible";
    event: IEventLootCrateVisible;
}
export interface INonSpecificGameEventLootCrateOpened {
    name: "loot_crate_opened";
    event: IEventLootCrateOpened;
}
export interface INonSpecificGameEventOpenCrateInstr {
    name: "open_crate_instr";
    event: IEventOpenCrateInstr;
}
export interface INonSpecificGameEventSmokeBeaconParadrop {
    name: "smoke_beacon_paradrop";
    event: IEventSmokeBeaconParadrop;
}
export interface INonSpecificGameEventSurvivalParadropSpawn {
    name: "survival_paradrop_spawn";
    event: IEventSurvivalParadropSpawn;
}
export interface INonSpecificGameEventSurvivalParadropBreak {
    name: "survival_paradrop_break";
    event: IEventSurvivalParadropBreak;
}
export interface INonSpecificGameEventDroneCargoDetached {
    name: "drone_cargo_detached";
    event: IEventDroneCargoDetached;
}
export interface INonSpecificGameEventDroneAboveRoof {
    name: "drone_above_roof";
    event: IEventDroneAboveRoof;
}
export interface INonSpecificGameEventChoppersIncomingWarning {
    name: "choppers_incoming_warning";
    event: IEventChoppersIncomingWarning;
}
export interface INonSpecificGameEventFirstbombsIncomingWarning {
    name: "firstbombs_incoming_warning";
    event: IEventFirstbombsIncomingWarning;
}
export interface INonSpecificGameEventDzItemInteraction {
    name: "dz_item_interaction";
    event: IEventDzItemInteraction;
}
export interface INonSpecificGameEventSnowballHitPlayerFace {
    name: "snowball_hit_player_face";
    event: IEventSnowballHitPlayerFace;
}
export interface INonSpecificGameEventSurvivalTeammateRespawn {
    name: "survival_teammate_respawn";
    event: IEventSurvivalTeammateRespawn;
}
export interface INonSpecificGameEventSurvivalNoRespawnsWarning {
    name: "survival_no_respawns_warning";
    event: IEventSurvivalNoRespawnsWarning;
}
export interface INonSpecificGameEventSurvivalNoRespawnsFinal {
    name: "survival_no_respawns_final";
    event: IEventSurvivalNoRespawnsFinal;
}
export interface INonSpecificGameEventPlayerPing {
    name: "player_ping";
    event: IEventPlayerPing;
}
export interface INonSpecificGameEventPlayerPingStop {
    name: "player_ping_stop";
    event: IEventPlayerPingStop;
}
export interface INonSpecificGameEventGuardianWaveRestart {
    name: "guardian_wave_restart";
    event: IEventGuardianWaveRestart;
}
export interface INonSpecificGameEventHltvStatus {
    name: "hltv_status";
    event: IEventHltvStatus;
}
export interface INonSpecificGameEventHltvCameraman {
    name: "hltv_cameraman";
    event: IEventHltvCameraman;
}
export interface INonSpecificGameEventHltvRankCamera {
    name: "hltv_rank_camera";
    event: IEventHltvRankCamera;
}
export interface INonSpecificGameEventHltvRankEntity {
    name: "hltv_rank_entity";
    event: IEventHltvRankEntity;
}
export interface INonSpecificGameEventHltvFixed {
    name: "hltv_fixed";
    event: IEventHltvFixed;
}
export interface INonSpecificGameEventHltvChase {
    name: "hltv_chase";
    event: IEventHltvChase;
}
export interface INonSpecificGameEventHltvMessage {
    name: "hltv_message";
    event: IEventHltvMessage;
}
export interface INonSpecificGameEventHltvTitle {
    name: "hltv_title";
    event: IEventHltvTitle;
}
export interface INonSpecificGameEventHltvChat {
    name: "hltv_chat";
    event: IEventHltvChat;
}
export interface INonSpecificGameEventHltvChangedTarget {
    name: "hltv_changed_target";
    event: IEventHltvChangedTarget;
}
export declare type INonSpecificGameEvent = INonSpecificGameEventServerSpawn | INonSpecificGameEventServerPreShutdown | INonSpecificGameEventServerShutdown | INonSpecificGameEventServerCvar | INonSpecificGameEventServerMessage | INonSpecificGameEventServerAddban | INonSpecificGameEventServerRemoveban | INonSpecificGameEventPlayerConnect | INonSpecificGameEventPlayerInfo | INonSpecificGameEventPlayerDisconnect | INonSpecificGameEventPlayerActivate | INonSpecificGameEventPlayerConnectFull | INonSpecificGameEventPlayerSay | INonSpecificGameEventCsRoundStartBeep | INonSpecificGameEventCsRoundFinalBeep | INonSpecificGameEventRoundTimeWarning | INonSpecificGameEventHltvReplay | INonSpecificGameEventTeamInfo | INonSpecificGameEventTeamScore | INonSpecificGameEventTeamplayBroadcastAudio | INonSpecificGameEventGameuiHidden | INonSpecificGameEventItemsGifted | INonSpecificGameEventPlayerTeam | INonSpecificGameEventPlayerClass | INonSpecificGameEventPlayerDeath | INonSpecificGameEventPlayerHurt | INonSpecificGameEventPlayerChat | INonSpecificGameEventPlayerScore | INonSpecificGameEventPlayerSpawn | INonSpecificGameEventPlayerShoot | INonSpecificGameEventPlayerUse | INonSpecificGameEventPlayerChangename | INonSpecificGameEventPlayerHintmessage | INonSpecificGameEventGameInit | INonSpecificGameEventGameNewmap | INonSpecificGameEventGameStart | INonSpecificGameEventGameEnd | INonSpecificGameEventRoundStart | INonSpecificGameEventRoundAnnounceMatchPoint | INonSpecificGameEventRoundAnnounceFinal | INonSpecificGameEventRoundAnnounceLastRoundHalf | INonSpecificGameEventRoundAnnounceMatchStart | INonSpecificGameEventRoundAnnounceWarmup | INonSpecificGameEventRoundEnd | INonSpecificGameEventRoundEndUploadStats | INonSpecificGameEventRoundOfficiallyEnded | INonSpecificGameEventUgcMapInfoReceived | INonSpecificGameEventUgcMapUnsubscribed | INonSpecificGameEventUgcMapDownloadError | INonSpecificGameEventUgcFileDownloadFinished | INonSpecificGameEventUgcFileDownloadStart | INonSpecificGameEventBeginNewMatch | INonSpecificGameEventRoundStartPreEntity | INonSpecificGameEventTeamplayRoundStart | INonSpecificGameEventHostnameChanged | INonSpecificGameEventDifficultyChanged | INonSpecificGameEventFinaleStart | INonSpecificGameEventGameMessage | INonSpecificGameEventDmBonusWeaponStart | INonSpecificGameEventSurvivalAnnouncePhase | INonSpecificGameEventBreakBreakable | INonSpecificGameEventBreakProp | INonSpecificGameEventPlayerDecal | INonSpecificGameEventEntityKilled | INonSpecificGameEventBonusUpdated | INonSpecificGameEventPlayerStatsUpdated | INonSpecificGameEventAchievementEvent | INonSpecificGameEventAchievementIncrement | INonSpecificGameEventAchievementEarned | INonSpecificGameEventAchievementWriteFailed | INonSpecificGameEventPhysgunPickup | INonSpecificGameEventFlareIgniteNpc | INonSpecificGameEventHelicopterGrenadePuntMiss | INonSpecificGameEventUserDataDownloaded | INonSpecificGameEventRagdollDissolved | INonSpecificGameEventGameinstructorDraw | INonSpecificGameEventGameinstructorNodraw | INonSpecificGameEventMapTransition | INonSpecificGameEventEntityVisible | INonSpecificGameEventSetInstructorGroupEnabled | INonSpecificGameEventInstructorServerHintCreate | INonSpecificGameEventInstructorServerHintStop | INonSpecificGameEventReadGameTitledata | INonSpecificGameEventWriteGameTitledata | INonSpecificGameEventResetGameTitledata | INonSpecificGameEventWeaponhudSelection | INonSpecificGameEventVoteEnded | INonSpecificGameEventVoteStarted | INonSpecificGameEventVoteChanged | INonSpecificGameEventVotePassed | INonSpecificGameEventVoteFailed | INonSpecificGameEventVoteCast | INonSpecificGameEventVoteOptions | INonSpecificGameEventEndmatchMapvoteSelectingMap | INonSpecificGameEventEndmatchCmmStartRevealItems | INonSpecificGameEventInventoryUpdated | INonSpecificGameEventCartUpdated | INonSpecificGameEventStorePricesheetUpdated | INonSpecificGameEventGcConnected | INonSpecificGameEventItemSchemaInitialized | INonSpecificGameEventClientLoadoutChanged | INonSpecificGameEventAddPlayerSonarIcon | INonSpecificGameEventAddBulletHitMarker | INonSpecificGameEventVerifyClientHit | INonSpecificGameEventOtherDeath | INonSpecificGameEventItemPurchase | INonSpecificGameEventBombBeginplant | INonSpecificGameEventBombAbortplant | INonSpecificGameEventBombPlanted | INonSpecificGameEventBombDefused | INonSpecificGameEventBombExploded | INonSpecificGameEventBombDropped | INonSpecificGameEventBombPickup | INonSpecificGameEventDefuserDropped | INonSpecificGameEventDefuserPickup | INonSpecificGameEventAnnouncePhaseEnd | INonSpecificGameEventCsIntermission | INonSpecificGameEventBombBegindefuse | INonSpecificGameEventBombAbortdefuse | INonSpecificGameEventHostageFollows | INonSpecificGameEventHostageHurt | INonSpecificGameEventHostageKilled | INonSpecificGameEventHostageRescued | INonSpecificGameEventHostageStopsFollowing | INonSpecificGameEventHostageRescuedAll | INonSpecificGameEventHostageCallForHelp | INonSpecificGameEventVipEscaped | INonSpecificGameEventVipKilled | INonSpecificGameEventPlayerRadio | INonSpecificGameEventBombBeep | INonSpecificGameEventWeaponFire | INonSpecificGameEventWeaponFireOnEmpty | INonSpecificGameEventGrenadeThrown | INonSpecificGameEventWeaponOutofammo | INonSpecificGameEventWeaponReload | INonSpecificGameEventWeaponZoom | INonSpecificGameEventSilencerDetach | INonSpecificGameEventInspectWeapon | INonSpecificGameEventWeaponZoomRifle | INonSpecificGameEventPlayerSpawned | INonSpecificGameEventItemPickup | INonSpecificGameEventItemPickupSlerp | INonSpecificGameEventItemPickupFailed | INonSpecificGameEventItemRemove | INonSpecificGameEventAmmoPickup | INonSpecificGameEventItemEquip | INonSpecificGameEventEnterBuyzone | INonSpecificGameEventExitBuyzone | INonSpecificGameEventBuytimeEnded | INonSpecificGameEventEnterBombzone | INonSpecificGameEventExitBombzone | INonSpecificGameEventEnterRescueZone | INonSpecificGameEventExitRescueZone | INonSpecificGameEventSilencerOff | INonSpecificGameEventSilencerOn | INonSpecificGameEventBuymenuOpen | INonSpecificGameEventBuymenuClose | INonSpecificGameEventRoundPrestart | INonSpecificGameEventRoundPoststart | INonSpecificGameEventGrenadeBounce | INonSpecificGameEventHegrenadeDetonate | INonSpecificGameEventFlashbangDetonate | INonSpecificGameEventSmokegrenadeDetonate | INonSpecificGameEventSmokegrenadeExpired | INonSpecificGameEventMolotovDetonate | INonSpecificGameEventDecoyDetonate | INonSpecificGameEventDecoyStarted | INonSpecificGameEventTagrenadeDetonate | INonSpecificGameEventInfernoStartburn | INonSpecificGameEventInfernoExpire | INonSpecificGameEventInfernoExtinguish | INonSpecificGameEventDecoyFiring | INonSpecificGameEventBulletImpact | INonSpecificGameEventPlayerFootstep | INonSpecificGameEventPlayerJump | INonSpecificGameEventPlayerBlind | INonSpecificGameEventPlayerFalldamage | INonSpecificGameEventDoorMoving | INonSpecificGameEventRoundFreezeEnd | INonSpecificGameEventMbInputLockSuccess | INonSpecificGameEventMbInputLockCancel | INonSpecificGameEventNavBlocked | INonSpecificGameEventNavGenerate | INonSpecificGameEventAchievementInfoLoaded | INonSpecificGameEventSpecTargetUpdated | INonSpecificGameEventSpecModeUpdated | INonSpecificGameEventHltvChangedMode | INonSpecificGameEventCsGameDisconnected | INonSpecificGameEventCsWinPanelRound | INonSpecificGameEventCsWinPanelMatch | INonSpecificGameEventCsMatchEndRestart | INonSpecificGameEventCsPreRestart | INonSpecificGameEventShowFreezepanel | INonSpecificGameEventHideFreezepanel | INonSpecificGameEventFreezecamStarted | INonSpecificGameEventPlayerAvengedTeammate | INonSpecificGameEventAchievementEarnedLocal | INonSpecificGameEventItemFound | INonSpecificGameEventRepostXboxAchievements | INonSpecificGameEventMatchEndConditions | INonSpecificGameEventRoundMvp | INonSpecificGameEventShowSurvivalRespawnStatus | INonSpecificGameEventClientDisconnect | INonSpecificGameEventGgPlayerLevelup | INonSpecificGameEventGgtrPlayerLevelup | INonSpecificGameEventAssassinationTargetKilled | INonSpecificGameEventGgprogressivePlayerLevelup | INonSpecificGameEventGgKilledEnemy | INonSpecificGameEventGgFinalWeaponAchieved | INonSpecificGameEventGgBonusGrenadeAchieved | INonSpecificGameEventSwitchTeam | INonSpecificGameEventGgLeader | INonSpecificGameEventGgTeamLeader | INonSpecificGameEventGgPlayerImpendingUpgrade | INonSpecificGameEventWriteProfileData | INonSpecificGameEventTrialTimeExpired | INonSpecificGameEventUpdateMatchmakingStats | INonSpecificGameEventPlayerResetVote | INonSpecificGameEventEnableRestartVoting | INonSpecificGameEventSfuievent | INonSpecificGameEventStartVote | INonSpecificGameEventPlayerGivenC4 | INonSpecificGameEventPlayerBecomeGhost | INonSpecificGameEventGgResetRoundStartSounds | INonSpecificGameEventTrPlayerFlashbanged | INonSpecificGameEventTrMarkComplete | INonSpecificGameEventTrMarkBestTime | INonSpecificGameEventTrExitHintTrigger | INonSpecificGameEventBotTakeover | INonSpecificGameEventTrShowFinishMsgbox | INonSpecificGameEventTrShowExitMsgbox | INonSpecificGameEventResetPlayerControls | INonSpecificGameEventJointeamFailed | INonSpecificGameEventTeamchangePending | INonSpecificGameEventMaterialDefaultComplete | INonSpecificGameEventCsPrevNextSpectator | INonSpecificGameEventNextlevelChanged | INonSpecificGameEventSeasoncoinLevelup | INonSpecificGameEventTournamentReward | INonSpecificGameEventStartHalftime | INonSpecificGameEventAmmoRefill | INonSpecificGameEventParachutePickup | INonSpecificGameEventParachuteDeploy | INonSpecificGameEventDronegunAttack | INonSpecificGameEventDroneDispatched | INonSpecificGameEventLootCrateVisible | INonSpecificGameEventLootCrateOpened | INonSpecificGameEventOpenCrateInstr | INonSpecificGameEventSmokeBeaconParadrop | INonSpecificGameEventSurvivalParadropSpawn | INonSpecificGameEventSurvivalParadropBreak | INonSpecificGameEventDroneCargoDetached | INonSpecificGameEventDroneAboveRoof | INonSpecificGameEventChoppersIncomingWarning | INonSpecificGameEventFirstbombsIncomingWarning | INonSpecificGameEventDzItemInteraction | INonSpecificGameEventSnowballHitPlayerFace | INonSpecificGameEventSurvivalTeammateRespawn | INonSpecificGameEventSurvivalNoRespawnsWarning | INonSpecificGameEventSurvivalNoRespawnsFinal | INonSpecificGameEventPlayerPing | INonSpecificGameEventPlayerPingStop | INonSpecificGameEventGuardianWaveRestart | INonSpecificGameEventHltvStatus | INonSpecificGameEventHltvCameraman | INonSpecificGameEventHltvRankCamera | INonSpecificGameEventHltvRankEntity | INonSpecificGameEventHltvFixed | INonSpecificGameEventHltvChase | INonSpecificGameEventHltvMessage | INonSpecificGameEventHltvTitle | INonSpecificGameEventHltvChat | INonSpecificGameEventHltvChangedTarget;
declare module "./gameevents" {
    interface GameEvents {
        on(event: "event", listener: (event: INonSpecificGameEvent) => void): this;
        on(event: "server_spawn", listener: (event: IEventServerSpawn) => void): this;
        on(event: "server_pre_shutdown", listener: (event: IEventServerPreShutdown) => void): this;
        on(event: "server_shutdown", listener: (event: IEventServerShutdown) => void): this;
        on(event: "server_cvar", listener: (event: IEventServerCvar) => void): this;
        on(event: "server_message", listener: (event: IEventServerMessage) => void): this;
        on(event: "server_addban", listener: (event: IEventServerAddban) => void): this;
        on(event: "server_removeban", listener: (event: IEventServerRemoveban) => void): this;
        on(event: "player_connect", listener: (event: IEventPlayerConnect) => void): this;
        on(event: "player_info", listener: (event: IEventPlayerInfo) => void): this;
        on(event: "player_disconnect", listener: (event: IEventPlayerDisconnect) => void): this;
        on(event: "player_activate", listener: (event: IEventPlayerActivate) => void): this;
        on(event: "player_connect_full", listener: (event: IEventPlayerConnectFull) => void): this;
        on(event: "player_say", listener: (event: IEventPlayerSay) => void): this;
        on(event: "cs_round_start_beep", listener: (event: IEventCsRoundStartBeep) => void): this;
        on(event: "cs_round_final_beep", listener: (event: IEventCsRoundFinalBeep) => void): this;
        on(event: "round_time_warning", listener: (event: IEventRoundTimeWarning) => void): this;
        on(event: "hltv_replay", listener: (event: IEventHltvReplay) => void): this;
        on(event: "team_info", listener: (event: IEventTeamInfo) => void): this;
        on(event: "team_score", listener: (event: IEventTeamScore) => void): this;
        on(event: "teamplay_broadcast_audio", listener: (event: IEventTeamplayBroadcastAudio) => void): this;
        on(event: "gameui_hidden", listener: (event: IEventGameuiHidden) => void): this;
        on(event: "items_gifted", listener: (event: IEventItemsGifted) => void): this;
        on(event: "player_team", listener: (event: IEventPlayerTeam) => void): this;
        on(event: "player_class", listener: (event: IEventPlayerClass) => void): this;
        on(event: "player_death", listener: (event: IEventPlayerDeath) => void): this;
        on(event: "player_hurt", listener: (event: IEventPlayerHurt) => void): this;
        on(event: "player_chat", listener: (event: IEventPlayerChat) => void): this;
        on(event: "player_score", listener: (event: IEventPlayerScore) => void): this;
        on(event: "player_spawn", listener: (event: IEventPlayerSpawn) => void): this;
        on(event: "player_shoot", listener: (event: IEventPlayerShoot) => void): this;
        on(event: "player_use", listener: (event: IEventPlayerUse) => void): this;
        on(event: "player_changename", listener: (event: IEventPlayerChangename) => void): this;
        on(event: "player_hintmessage", listener: (event: IEventPlayerHintmessage) => void): this;
        on(event: "game_init", listener: (event: IEventGameInit) => void): this;
        on(event: "game_newmap", listener: (event: IEventGameNewmap) => void): this;
        on(event: "game_start", listener: (event: IEventGameStart) => void): this;
        on(event: "game_end", listener: (event: IEventGameEnd) => void): this;
        on(event: "round_start", listener: (event: IEventRoundStart) => void): this;
        on(event: "round_announce_match_point", listener: (event: IEventRoundAnnounceMatchPoint) => void): this;
        on(event: "round_announce_final", listener: (event: IEventRoundAnnounceFinal) => void): this;
        on(event: "round_announce_last_round_half", listener: (event: IEventRoundAnnounceLastRoundHalf) => void): this;
        on(event: "round_announce_match_start", listener: (event: IEventRoundAnnounceMatchStart) => void): this;
        on(event: "round_announce_warmup", listener: (event: IEventRoundAnnounceWarmup) => void): this;
        on(event: "round_end", listener: (event: IEventRoundEnd) => void): this;
        on(event: "round_end_upload_stats", listener: (event: IEventRoundEndUploadStats) => void): this;
        on(event: "round_officially_ended", listener: (event: IEventRoundOfficiallyEnded) => void): this;
        on(event: "ugc_map_info_received", listener: (event: IEventUgcMapInfoReceived) => void): this;
        on(event: "ugc_map_unsubscribed", listener: (event: IEventUgcMapUnsubscribed) => void): this;
        on(event: "ugc_map_download_error", listener: (event: IEventUgcMapDownloadError) => void): this;
        on(event: "ugc_file_download_finished", listener: (event: IEventUgcFileDownloadFinished) => void): this;
        on(event: "ugc_file_download_start", listener: (event: IEventUgcFileDownloadStart) => void): this;
        on(event: "begin_new_match", listener: (event: IEventBeginNewMatch) => void): this;
        on(event: "round_start_pre_entity", listener: (event: IEventRoundStartPreEntity) => void): this;
        on(event: "teamplay_round_start", listener: (event: IEventTeamplayRoundStart) => void): this;
        on(event: "hostname_changed", listener: (event: IEventHostnameChanged) => void): this;
        on(event: "difficulty_changed", listener: (event: IEventDifficultyChanged) => void): this;
        on(event: "finale_start", listener: (event: IEventFinaleStart) => void): this;
        on(event: "game_message", listener: (event: IEventGameMessage) => void): this;
        on(event: "dm_bonus_weapon_start", listener: (event: IEventDmBonusWeaponStart) => void): this;
        on(event: "survival_announce_phase", listener: (event: IEventSurvivalAnnouncePhase) => void): this;
        on(event: "break_breakable", listener: (event: IEventBreakBreakable) => void): this;
        on(event: "break_prop", listener: (event: IEventBreakProp) => void): this;
        on(event: "player_decal", listener: (event: IEventPlayerDecal) => void): this;
        on(event: "entity_killed", listener: (event: IEventEntityKilled) => void): this;
        on(event: "bonus_updated", listener: (event: IEventBonusUpdated) => void): this;
        on(event: "player_stats_updated", listener: (event: IEventPlayerStatsUpdated) => void): this;
        on(event: "achievement_event", listener: (event: IEventAchievementEvent) => void): this;
        on(event: "achievement_increment", listener: (event: IEventAchievementIncrement) => void): this;
        on(event: "achievement_earned", listener: (event: IEventAchievementEarned) => void): this;
        on(event: "achievement_write_failed", listener: (event: IEventAchievementWriteFailed) => void): this;
        on(event: "physgun_pickup", listener: (event: IEventPhysgunPickup) => void): this;
        on(event: "flare_ignite_npc", listener: (event: IEventFlareIgniteNpc) => void): this;
        on(event: "helicopter_grenade_punt_miss", listener: (event: IEventHelicopterGrenadePuntMiss) => void): this;
        on(event: "user_data_downloaded", listener: (event: IEventUserDataDownloaded) => void): this;
        on(event: "ragdoll_dissolved", listener: (event: IEventRagdollDissolved) => void): this;
        on(event: "gameinstructor_draw", listener: (event: IEventGameinstructorDraw) => void): this;
        on(event: "gameinstructor_nodraw", listener: (event: IEventGameinstructorNodraw) => void): this;
        on(event: "map_transition", listener: (event: IEventMapTransition) => void): this;
        on(event: "entity_visible", listener: (event: IEventEntityVisible) => void): this;
        on(event: "set_instructor_group_enabled", listener: (event: IEventSetInstructorGroupEnabled) => void): this;
        on(event: "instructor_server_hint_create", listener: (event: IEventInstructorServerHintCreate) => void): this;
        on(event: "instructor_server_hint_stop", listener: (event: IEventInstructorServerHintStop) => void): this;
        on(event: "read_game_titledata", listener: (event: IEventReadGameTitledata) => void): this;
        on(event: "write_game_titledata", listener: (event: IEventWriteGameTitledata) => void): this;
        on(event: "reset_game_titledata", listener: (event: IEventResetGameTitledata) => void): this;
        on(event: "weaponhud_selection", listener: (event: IEventWeaponhudSelection) => void): this;
        on(event: "vote_ended", listener: (event: IEventVoteEnded) => void): this;
        on(event: "vote_started", listener: (event: IEventVoteStarted) => void): this;
        on(event: "vote_changed", listener: (event: IEventVoteChanged) => void): this;
        on(event: "vote_passed", listener: (event: IEventVotePassed) => void): this;
        on(event: "vote_failed", listener: (event: IEventVoteFailed) => void): this;
        on(event: "vote_cast", listener: (event: IEventVoteCast) => void): this;
        on(event: "vote_options", listener: (event: IEventVoteOptions) => void): this;
        on(event: "endmatch_mapvote_selecting_map", listener: (event: IEventEndmatchMapvoteSelectingMap) => void): this;
        on(event: "endmatch_cmm_start_reveal_items", listener: (event: IEventEndmatchCmmStartRevealItems) => void): this;
        on(event: "inventory_updated", listener: (event: IEventInventoryUpdated) => void): this;
        on(event: "cart_updated", listener: (event: IEventCartUpdated) => void): this;
        on(event: "store_pricesheet_updated", listener: (event: IEventStorePricesheetUpdated) => void): this;
        on(event: "gc_connected", listener: (event: IEventGcConnected) => void): this;
        on(event: "item_schema_initialized", listener: (event: IEventItemSchemaInitialized) => void): this;
        on(event: "client_loadout_changed", listener: (event: IEventClientLoadoutChanged) => void): this;
        on(event: "add_player_sonar_icon", listener: (event: IEventAddPlayerSonarIcon) => void): this;
        on(event: "add_bullet_hit_marker", listener: (event: IEventAddBulletHitMarker) => void): this;
        on(event: "verify_client_hit", listener: (event: IEventVerifyClientHit) => void): this;
        on(event: "other_death", listener: (event: IEventOtherDeath) => void): this;
        on(event: "item_purchase", listener: (event: IEventItemPurchase) => void): this;
        on(event: "bomb_beginplant", listener: (event: IEventBombBeginplant) => void): this;
        on(event: "bomb_abortplant", listener: (event: IEventBombAbortplant) => void): this;
        on(event: "bomb_planted", listener: (event: IEventBombPlanted) => void): this;
        on(event: "bomb_defused", listener: (event: IEventBombDefused) => void): this;
        on(event: "bomb_exploded", listener: (event: IEventBombExploded) => void): this;
        on(event: "bomb_dropped", listener: (event: IEventBombDropped) => void): this;
        on(event: "bomb_pickup", listener: (event: IEventBombPickup) => void): this;
        on(event: "defuser_dropped", listener: (event: IEventDefuserDropped) => void): this;
        on(event: "defuser_pickup", listener: (event: IEventDefuserPickup) => void): this;
        on(event: "announce_phase_end", listener: (event: IEventAnnouncePhaseEnd) => void): this;
        on(event: "cs_intermission", listener: (event: IEventCsIntermission) => void): this;
        on(event: "bomb_begindefuse", listener: (event: IEventBombBegindefuse) => void): this;
        on(event: "bomb_abortdefuse", listener: (event: IEventBombAbortdefuse) => void): this;
        on(event: "hostage_follows", listener: (event: IEventHostageFollows) => void): this;
        on(event: "hostage_hurt", listener: (event: IEventHostageHurt) => void): this;
        on(event: "hostage_killed", listener: (event: IEventHostageKilled) => void): this;
        on(event: "hostage_rescued", listener: (event: IEventHostageRescued) => void): this;
        on(event: "hostage_stops_following", listener: (event: IEventHostageStopsFollowing) => void): this;
        on(event: "hostage_rescued_all", listener: (event: IEventHostageRescuedAll) => void): this;
        on(event: "hostage_call_for_help", listener: (event: IEventHostageCallForHelp) => void): this;
        on(event: "vip_escaped", listener: (event: IEventVipEscaped) => void): this;
        on(event: "vip_killed", listener: (event: IEventVipKilled) => void): this;
        on(event: "player_radio", listener: (event: IEventPlayerRadio) => void): this;
        on(event: "bomb_beep", listener: (event: IEventBombBeep) => void): this;
        on(event: "weapon_fire", listener: (event: IEventWeaponFire) => void): this;
        on(event: "weapon_fire_on_empty", listener: (event: IEventWeaponFireOnEmpty) => void): this;
        on(event: "grenade_thrown", listener: (event: IEventGrenadeThrown) => void): this;
        on(event: "weapon_outofammo", listener: (event: IEventWeaponOutofammo) => void): this;
        on(event: "weapon_reload", listener: (event: IEventWeaponReload) => void): this;
        on(event: "weapon_zoom", listener: (event: IEventWeaponZoom) => void): this;
        on(event: "silencer_detach", listener: (event: IEventSilencerDetach) => void): this;
        on(event: "inspect_weapon", listener: (event: IEventInspectWeapon) => void): this;
        on(event: "weapon_zoom_rifle", listener: (event: IEventWeaponZoomRifle) => void): this;
        on(event: "player_spawned", listener: (event: IEventPlayerSpawned) => void): this;
        on(event: "item_pickup", listener: (event: IEventItemPickup) => void): this;
        on(event: "item_pickup_slerp", listener: (event: IEventItemPickupSlerp) => void): this;
        on(event: "item_pickup_failed", listener: (event: IEventItemPickupFailed) => void): this;
        on(event: "item_remove", listener: (event: IEventItemRemove) => void): this;
        on(event: "ammo_pickup", listener: (event: IEventAmmoPickup) => void): this;
        on(event: "item_equip", listener: (event: IEventItemEquip) => void): this;
        on(event: "enter_buyzone", listener: (event: IEventEnterBuyzone) => void): this;
        on(event: "exit_buyzone", listener: (event: IEventExitBuyzone) => void): this;
        on(event: "buytime_ended", listener: (event: IEventBuytimeEnded) => void): this;
        on(event: "enter_bombzone", listener: (event: IEventEnterBombzone) => void): this;
        on(event: "exit_bombzone", listener: (event: IEventExitBombzone) => void): this;
        on(event: "enter_rescue_zone", listener: (event: IEventEnterRescueZone) => void): this;
        on(event: "exit_rescue_zone", listener: (event: IEventExitRescueZone) => void): this;
        on(event: "silencer_off", listener: (event: IEventSilencerOff) => void): this;
        on(event: "silencer_on", listener: (event: IEventSilencerOn) => void): this;
        on(event: "buymenu_open", listener: (event: IEventBuymenuOpen) => void): this;
        on(event: "buymenu_close", listener: (event: IEventBuymenuClose) => void): this;
        on(event: "round_prestart", listener: (event: IEventRoundPrestart) => void): this;
        on(event: "round_poststart", listener: (event: IEventRoundPoststart) => void): this;
        on(event: "grenade_bounce", listener: (event: IEventGrenadeBounce) => void): this;
        on(event: "hegrenade_detonate", listener: (event: IEventHegrenadeDetonate) => void): this;
        on(event: "flashbang_detonate", listener: (event: IEventFlashbangDetonate) => void): this;
        on(event: "smokegrenade_detonate", listener: (event: IEventSmokegrenadeDetonate) => void): this;
        on(event: "smokegrenade_expired", listener: (event: IEventSmokegrenadeExpired) => void): this;
        on(event: "molotov_detonate", listener: (event: IEventMolotovDetonate) => void): this;
        on(event: "decoy_detonate", listener: (event: IEventDecoyDetonate) => void): this;
        on(event: "decoy_started", listener: (event: IEventDecoyStarted) => void): this;
        on(event: "tagrenade_detonate", listener: (event: IEventTagrenadeDetonate) => void): this;
        on(event: "inferno_startburn", listener: (event: IEventInfernoStartburn) => void): this;
        on(event: "inferno_expire", listener: (event: IEventInfernoExpire) => void): this;
        on(event: "inferno_extinguish", listener: (event: IEventInfernoExtinguish) => void): this;
        on(event: "decoy_firing", listener: (event: IEventDecoyFiring) => void): this;
        on(event: "bullet_impact", listener: (event: IEventBulletImpact) => void): this;
        on(event: "player_footstep", listener: (event: IEventPlayerFootstep) => void): this;
        on(event: "player_jump", listener: (event: IEventPlayerJump) => void): this;
        on(event: "player_blind", listener: (event: IEventPlayerBlind) => void): this;
        on(event: "player_falldamage", listener: (event: IEventPlayerFalldamage) => void): this;
        on(event: "door_moving", listener: (event: IEventDoorMoving) => void): this;
        on(event: "round_freeze_end", listener: (event: IEventRoundFreezeEnd) => void): this;
        on(event: "mb_input_lock_success", listener: (event: IEventMbInputLockSuccess) => void): this;
        on(event: "mb_input_lock_cancel", listener: (event: IEventMbInputLockCancel) => void): this;
        on(event: "nav_blocked", listener: (event: IEventNavBlocked) => void): this;
        on(event: "nav_generate", listener: (event: IEventNavGenerate) => void): this;
        on(event: "achievement_info_loaded", listener: (event: IEventAchievementInfoLoaded) => void): this;
        on(event: "spec_target_updated", listener: (event: IEventSpecTargetUpdated) => void): this;
        on(event: "spec_mode_updated", listener: (event: IEventSpecModeUpdated) => void): this;
        on(event: "hltv_changed_mode", listener: (event: IEventHltvChangedMode) => void): this;
        on(event: "cs_game_disconnected", listener: (event: IEventCsGameDisconnected) => void): this;
        on(event: "cs_win_panel_round", listener: (event: IEventCsWinPanelRound) => void): this;
        on(event: "cs_win_panel_match", listener: (event: IEventCsWinPanelMatch) => void): this;
        on(event: "cs_match_end_restart", listener: (event: IEventCsMatchEndRestart) => void): this;
        on(event: "cs_pre_restart", listener: (event: IEventCsPreRestart) => void): this;
        on(event: "show_freezepanel", listener: (event: IEventShowFreezepanel) => void): this;
        on(event: "hide_freezepanel", listener: (event: IEventHideFreezepanel) => void): this;
        on(event: "freezecam_started", listener: (event: IEventFreezecamStarted) => void): this;
        on(event: "player_avenged_teammate", listener: (event: IEventPlayerAvengedTeammate) => void): this;
        on(event: "achievement_earned_local", listener: (event: IEventAchievementEarnedLocal) => void): this;
        on(event: "item_found", listener: (event: IEventItemFound) => void): this;
        on(event: "repost_xbox_achievements", listener: (event: IEventRepostXboxAchievements) => void): this;
        on(event: "match_end_conditions", listener: (event: IEventMatchEndConditions) => void): this;
        on(event: "round_mvp", listener: (event: IEventRoundMvp) => void): this;
        on(event: "show_survival_respawn_status", listener: (event: IEventShowSurvivalRespawnStatus) => void): this;
        on(event: "client_disconnect", listener: (event: IEventClientDisconnect) => void): this;
        on(event: "gg_player_levelup", listener: (event: IEventGgPlayerLevelup) => void): this;
        on(event: "ggtr_player_levelup", listener: (event: IEventGgtrPlayerLevelup) => void): this;
        on(event: "assassination_target_killed", listener: (event: IEventAssassinationTargetKilled) => void): this;
        on(event: "ggprogressive_player_levelup", listener: (event: IEventGgprogressivePlayerLevelup) => void): this;
        on(event: "gg_killed_enemy", listener: (event: IEventGgKilledEnemy) => void): this;
        on(event: "gg_final_weapon_achieved", listener: (event: IEventGgFinalWeaponAchieved) => void): this;
        on(event: "gg_bonus_grenade_achieved", listener: (event: IEventGgBonusGrenadeAchieved) => void): this;
        on(event: "switch_team", listener: (event: IEventSwitchTeam) => void): this;
        on(event: "gg_leader", listener: (event: IEventGgLeader) => void): this;
        on(event: "gg_team_leader", listener: (event: IEventGgTeamLeader) => void): this;
        on(event: "gg_player_impending_upgrade", listener: (event: IEventGgPlayerImpendingUpgrade) => void): this;
        on(event: "write_profile_data", listener: (event: IEventWriteProfileData) => void): this;
        on(event: "trial_time_expired", listener: (event: IEventTrialTimeExpired) => void): this;
        on(event: "update_matchmaking_stats", listener: (event: IEventUpdateMatchmakingStats) => void): this;
        on(event: "player_reset_vote", listener: (event: IEventPlayerResetVote) => void): this;
        on(event: "enable_restart_voting", listener: (event: IEventEnableRestartVoting) => void): this;
        on(event: "sfuievent", listener: (event: IEventSfuievent) => void): this;
        on(event: "start_vote", listener: (event: IEventStartVote) => void): this;
        on(event: "player_given_c4", listener: (event: IEventPlayerGivenC4) => void): this;
        on(event: "player_become_ghost", listener: (event: IEventPlayerBecomeGhost) => void): this;
        on(event: "gg_reset_round_start_sounds", listener: (event: IEventGgResetRoundStartSounds) => void): this;
        on(event: "tr_player_flashbanged", listener: (event: IEventTrPlayerFlashbanged) => void): this;
        on(event: "tr_mark_complete", listener: (event: IEventTrMarkComplete) => void): this;
        on(event: "tr_mark_best_time", listener: (event: IEventTrMarkBestTime) => void): this;
        on(event: "tr_exit_hint_trigger", listener: (event: IEventTrExitHintTrigger) => void): this;
        on(event: "bot_takeover", listener: (event: IEventBotTakeover) => void): this;
        on(event: "tr_show_finish_msgbox", listener: (event: IEventTrShowFinishMsgbox) => void): this;
        on(event: "tr_show_exit_msgbox", listener: (event: IEventTrShowExitMsgbox) => void): this;
        on(event: "reset_player_controls", listener: (event: IEventResetPlayerControls) => void): this;
        on(event: "jointeam_failed", listener: (event: IEventJointeamFailed) => void): this;
        on(event: "teamchange_pending", listener: (event: IEventTeamchangePending) => void): this;
        on(event: "material_default_complete", listener: (event: IEventMaterialDefaultComplete) => void): this;
        on(event: "cs_prev_next_spectator", listener: (event: IEventCsPrevNextSpectator) => void): this;
        on(event: "nextlevel_changed", listener: (event: IEventNextlevelChanged) => void): this;
        on(event: "seasoncoin_levelup", listener: (event: IEventSeasoncoinLevelup) => void): this;
        on(event: "tournament_reward", listener: (event: IEventTournamentReward) => void): this;
        on(event: "start_halftime", listener: (event: IEventStartHalftime) => void): this;
        on(event: "ammo_refill", listener: (event: IEventAmmoRefill) => void): this;
        on(event: "parachute_pickup", listener: (event: IEventParachutePickup) => void): this;
        on(event: "parachute_deploy", listener: (event: IEventParachuteDeploy) => void): this;
        on(event: "dronegun_attack", listener: (event: IEventDronegunAttack) => void): this;
        on(event: "drone_dispatched", listener: (event: IEventDroneDispatched) => void): this;
        on(event: "loot_crate_visible", listener: (event: IEventLootCrateVisible) => void): this;
        on(event: "loot_crate_opened", listener: (event: IEventLootCrateOpened) => void): this;
        on(event: "open_crate_instr", listener: (event: IEventOpenCrateInstr) => void): this;
        on(event: "smoke_beacon_paradrop", listener: (event: IEventSmokeBeaconParadrop) => void): this;
        on(event: "survival_paradrop_spawn", listener: (event: IEventSurvivalParadropSpawn) => void): this;
        on(event: "survival_paradrop_break", listener: (event: IEventSurvivalParadropBreak) => void): this;
        on(event: "drone_cargo_detached", listener: (event: IEventDroneCargoDetached) => void): this;
        on(event: "drone_above_roof", listener: (event: IEventDroneAboveRoof) => void): this;
        on(event: "choppers_incoming_warning", listener: (event: IEventChoppersIncomingWarning) => void): this;
        on(event: "firstbombs_incoming_warning", listener: (event: IEventFirstbombsIncomingWarning) => void): this;
        on(event: "dz_item_interaction", listener: (event: IEventDzItemInteraction) => void): this;
        on(event: "snowball_hit_player_face", listener: (event: IEventSnowballHitPlayerFace) => void): this;
        on(event: "survival_teammate_respawn", listener: (event: IEventSurvivalTeammateRespawn) => void): this;
        on(event: "survival_no_respawns_warning", listener: (event: IEventSurvivalNoRespawnsWarning) => void): this;
        on(event: "survival_no_respawns_final", listener: (event: IEventSurvivalNoRespawnsFinal) => void): this;
        on(event: "player_ping", listener: (event: IEventPlayerPing) => void): this;
        on(event: "player_ping_stop", listener: (event: IEventPlayerPingStop) => void): this;
        on(event: "guardian_wave_restart", listener: (event: IEventGuardianWaveRestart) => void): this;
        on(event: "hltv_status", listener: (event: IEventHltvStatus) => void): this;
        on(event: "hltv_cameraman", listener: (event: IEventHltvCameraman) => void): this;
        on(event: "hltv_rank_camera", listener: (event: IEventHltvRankCamera) => void): this;
        on(event: "hltv_rank_entity", listener: (event: IEventHltvRankEntity) => void): this;
        on(event: "hltv_fixed", listener: (event: IEventHltvFixed) => void): this;
        on(event: "hltv_chase", listener: (event: IEventHltvChase) => void): this;
        on(event: "hltv_message", listener: (event: IEventHltvMessage) => void): this;
        on(event: "hltv_title", listener: (event: IEventHltvTitle) => void): this;
        on(event: "hltv_chat", listener: (event: IEventHltvChat) => void): this;
        on(event: "hltv_changed_target", listener: (event: IEventHltvChangedTarget) => void): this;
    }
}
