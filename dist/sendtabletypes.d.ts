/// <reference types="long" />
import { EntityHandle } from "./entityhandle";
export interface Vector {
    x: number;
    y: number;
    z: number;
}
export interface DT_AI_BaseNPC {
    m_lifeState: number;
    m_bPerformAvoidance: boolean;
    m_bIsMoving: boolean;
    m_bFadeCorpse: boolean;
    m_iDeathPose: number;
    m_iDeathFrame: number;
    m_bSpeedModActive: boolean;
    m_iSpeedModRadius: number;
    m_iSpeedModSpeed: number;
    m_bImportanRagdoll: boolean;
    m_flTimePingEffect: number;
}
export interface DT_WeaponAK47 {
}
export interface DT_BaseAnimating {
    m_nForceBone: number;
    m_vecForce: Vector;
    m_nSkin: number;
    m_nBody: number;
    m_nHitboxSet: number;
    m_flModelScale: number;
    m_nSequence: number;
    m_flPlaybackRate: number;
    m_bClientSideAnimation: boolean;
    m_bClientSideFrameReset: boolean;
    m_bClientSideRagdoll: boolean;
    m_nNewSequenceParity: number;
    m_nResetEventsParity: number;
    m_nMuzzleFlashParity: number;
    m_hLightingOrigin: EntityHandle;
    m_flFrozen: number;
    m_ScaleType: number;
    m_bSuppressAnimSounds: boolean;
    m_nHighlightColorR: number;
    m_nHighlightColorG: number;
    m_nHighlightColorB: number;
}
export interface DT_BaseAnimatingOverlay {
}
export interface DT_BaseAttributableItem {
    m_OriginalOwnerXuidLow: number;
    m_OriginalOwnerXuidHigh: number;
    m_nFallbackPaintKit: number;
    m_nFallbackSeed: number;
    m_flFallbackWear: number;
    m_nFallbackStatTrak: number;
}
export interface DT_BaseButton {
}
export interface DT_BaseCombatCharacter {
    m_LastHitGroup: number;
    m_hActiveWeapon: EntityHandle;
    m_flTimeOfLastInjury: number;
    m_nRelativeDirectionOfLastInjury: number;
}
export interface DT_BaseCombatWeapon {
    m_iViewModelIndex: number;
    m_iWorldModelIndex: number;
    m_iWorldDroppedModelIndex: number;
    m_iState: number;
    m_hOwner: EntityHandle;
    m_iClip1: number;
    m_iClip2: number;
    m_iPrimaryReserveAmmoCount: number;
    m_iSecondaryReserveAmmoCount: number;
    m_hWeaponWorldModel: EntityHandle;
    m_iNumEmptyAttacks: number;
}
export interface DT_BaseCSGrenade {
    m_bRedraw: boolean;
    m_bIsHeldByPlayer: boolean;
    m_bPinPulled: boolean;
    m_fThrowTime: number;
    m_bLoopingSoundPlaying: boolean;
    m_flThrowStrength: number;
}
export interface DT_BaseCSGrenadeProjectile {
    m_vInitialVelocity: Vector;
    m_nBounces: number;
    m_nExplodeEffectIndex: number;
    m_nExplodeEffectTickBegin: number;
    m_vecExplodeEffectOrigin: Vector;
}
export interface DT_BaseDoor {
    m_flWaveHeight: number;
}
export interface DT_BaseEntity {
    m_flSimulationTime: number;
    m_cellbits: number;
    m_cellX: number;
    m_cellY: number;
    m_cellZ: number;
    m_vecOrigin: Vector;
    m_nModelIndex: number;
    m_nRenderFX: number;
    m_nRenderMode: number;
    m_fEffects: number;
    m_clrRender: number;
    m_iTeamNum: number;
    m_iPendingTeamNum: number;
    m_CollisionGroup: number;
    m_flElasticity: number;
    m_flShadowCastDistance: number;
    m_hOwnerEntity: EntityHandle;
    m_hEffectEntity: EntityHandle;
    moveparent: EntityHandle;
    m_iParentAttachment: number;
    m_iName: string;
    movetype: number;
    movecollide: number;
    m_angRotation: Vector;
    m_iTextureFrameIndex: number;
    m_bSimulatedEveryTick: boolean;
    m_bAnimatedEveryTick: boolean;
    m_bAlternateSorting: boolean;
    m_bSpotted: boolean;
    m_bIsAutoaimTarget: boolean;
    m_fadeMinDist: number;
    m_fadeMaxDist: number;
    m_flFadeScale: number;
    m_nMinCPULevel: number;
    m_nMaxCPULevel: number;
    m_nMinGPULevel: number;
    m_nMaxGPULevel: number;
    m_flUseLookAtAngle: number;
    m_flLastMadeNoiseTime: number;
    m_flMaxFallVelocity: number;
    m_bEligibleForScreenHighlight: boolean;
}
export interface DT_BaseFlex {
    m_blinktoggle: boolean;
    m_viewtarget: Vector;
}
export interface DT_BaseGrenade {
    m_flDamage: number;
    m_DmgRadius: number;
    m_bIsLive: boolean;
    m_hThrower: EntityHandle;
    m_vecVelocity: Vector;
    m_fFlags: number;
}
export interface DT_BaseParticleEntity {
}
export interface DT_BasePlayer {
    m_afPhysicsFlags: number;
    m_hVehicle: EntityHandle;
    m_hUseEntity: EntityHandle;
    m_hGroundEntity: EntityHandle;
    m_iHealth: number;
    m_lifeState: number;
    m_iBonusProgress: number;
    m_iBonusChallenge: number;
    m_flMaxspeed: number;
    m_fFlags: number;
    m_iObserverMode: number;
    m_bActiveCameraMan: boolean;
    m_bCameraManXRay: boolean;
    m_bCameraManOverview: boolean;
    m_bCameraManScoreBoard: boolean;
    m_uCameraManGraphs: number;
    m_iCoachingTeam: number;
    m_hObserverTarget: EntityHandle;
    m_iFOV: number;
    m_iFOVStart: number;
    m_flFOVTime: number;
    m_iDefaultFOV: number;
    m_hZoomOwner: EntityHandle;
    m_hViewModel: EntityHandle[];
    m_szLastPlaceName: string;
    m_vecLadderNormal: Vector;
    m_ladderSurfaceProps: number;
    m_ubEFNoInterpParity: number;
    m_iDeathPostEffect: number;
    m_hPostProcessCtrl: EntityHandle;
    m_hColorCorrectionCtrl: EntityHandle;
    ["m_PlayerFog.m_hCtrl"]: EntityHandle;
    m_vphysicsCollisionState: number;
    m_hViewEntity: EntityHandle;
    m_bShouldDrawPlayerWhileUsingViewEntity: boolean;
    m_flDuckAmount: number;
    m_flDuckSpeed: number;
    m_nWaterLevel: number;
}
export interface DT_BasePropDoor {
}
export interface DT_BaseTeamObjectiveResource {
    m_iTimerToShowInHUD: number;
    m_iStopWatchTimer: number;
    m_iNumControlPoints: number;
    m_bPlayingMiniRounds: boolean;
    m_bControlPointsReset: boolean;
    m_iUpdateCapHudParity: number;
    m_vCPPositions: Vector[];
    m_iszWarnSound: string[];
    m_pszCapLayoutInHUD: string;
}
export interface DT_BaseTempEntity {
}
export interface DT_BaseToggle {
    m_vecFinalDest: Vector;
    m_movementType: number;
    m_flMoveTargetTime: number;
}
export interface DT_BaseTrigger {
    m_bClientSidePredicted: boolean;
    m_spawnflags: number;
}
export interface DT_BaseViewModel {
    m_nModelIndex: number;
    m_hWeapon: EntityHandle;
    m_nBody: number;
    m_nSkin: number;
    m_nSequence: number;
    m_nViewModelIndex: number;
    m_flPlaybackRate: number;
    m_fEffects: number;
    m_nAnimationParity: number;
    m_hOwner: EntityHandle;
    m_nNewSequenceParity: number;
    m_nResetEventsParity: number;
    m_nMuzzleFlashParity: number;
    m_bShouldIgnoreOffsetAndAccuracy: boolean;
}
export interface DT_BaseVPhysicsTrigger {
}
export interface DT_BaseWeaponWorldModel {
    m_nModelIndex: number;
    m_nBody: number;
    m_fEffects: number;
    moveparent: EntityHandle;
    m_hCombatWeaponParent: EntityHandle;
}
export interface DT_Beam {
    m_nBeamType: number;
    m_nBeamFlags: number;
    m_nNumBeamEnts: number;
    m_nHaloIndex: number;
    m_fHaloScale: number;
    m_fWidth: number;
    m_fEndWidth: number;
    m_fFadeLength: number;
    m_fAmplitude: number;
    m_fStartFrame: number;
    m_fSpeed: number;
    m_nRenderFX: number;
    m_nRenderMode: number;
    m_flFrameRate: number;
    m_flHDRColorScale: number;
    m_flFrame: number;
    m_clrRender: number;
    m_nClipStyle: number;
    m_vecEndPos: Vector;
    m_nModelIndex: number;
    m_vecOrigin: Vector;
    moveparent: EntityHandle;
}
export interface DT_BeamSpotlight {
    m_nHaloIndex: number;
    m_bSpotlightOn: boolean;
    m_bHasDynamicLight: boolean;
    m_flSpotlightMaxLength: number;
    m_flSpotlightGoalWidth: number;
    m_flHDRColorScale: number;
    m_flRotationSpeed: number;
    m_nRotationAxis: number;
}
export interface DT_BoneFollower {
    m_modelIndex: number;
    m_solidIndex: number;
}
export interface DT_BRC4Target {
    m_bBrokenOpen: boolean;
    m_flRadius: number;
}
export interface DT_WeaponBreachCharge {
}
export interface DT_BreachChargeProjectile {
    m_bShouldExplode: boolean;
    m_weaponThatThrewMe: EntityHandle;
    m_nParentBoneIndex: number;
    m_vecParentBonePos: Vector;
}
export interface DT_BreakableProp {
    m_qPreferredPlayerCarryAngles: Vector;
    m_bClientPhysics: boolean;
}
export interface DT_BreakableSurface {
    m_nNumWide: number;
    m_nNumHigh: number;
    m_flPanelWidth: number;
    m_flPanelHeight: number;
    m_vNormal: Vector;
    m_vCorner: Vector;
    m_bIsBroken: boolean;
    m_nSurfaceType: number;
}
export interface DT_WeaponBumpMine {
}
export interface DT_BumpMineProjectile {
    m_nParentBoneIndex: number;
    m_vecParentBonePos: Vector;
    m_bArmed: boolean;
}
export interface DT_WeaponC4 {
    m_bStartedArming: boolean;
    m_bBombPlacedAnimation: boolean;
    m_fArmedTime: number;
    m_bShowC4LED: boolean;
    m_bIsPlantingViaUse: boolean;
}
export interface DT_CascadeLight {
    m_shadowDirection: Vector;
    m_envLightShadowDirection: Vector;
    m_bEnabled: boolean;
    m_bUseLightEnvAngles: boolean;
    m_LightColor: number;
    m_LightColorScale: number;
    m_flMaxShadowDist: number;
}
export interface DT_CChicken {
    m_jumpedThisFrame: boolean;
    m_leader: EntityHandle;
}
export interface DT_ColorCorrection {
    m_vecOrigin: Vector;
    m_MinFalloff: number;
    m_MaxFalloff: number;
    m_flCurWeight: number;
    m_flMaxWeight: number;
    m_flFadeInDuration: number;
    m_flFadeOutDuration: number;
    m_netlookupFilename: string;
    m_bEnabled: boolean;
    m_bMaster: boolean;
    m_bClientSide: boolean;
    m_bExclusive: boolean;
}
export interface DT_ColorCorrectionVolume {
    m_Weight: number;
    m_lookupFilename: string;
}
export interface DT_CSGameRulesProxy {
}
export interface DT_CSPlayer {
    ["m_angEyeAngles[0]"]: number;
    ["m_angEyeAngles[1]"]: number;
    m_iAddonBits: number;
    m_iPrimaryAddon: number;
    m_iSecondaryAddon: number;
    m_iThrowGrenadeCounter: number;
    m_bWaitForNoAttack: boolean;
    m_bIsRespawningForDMBonus: boolean;
    m_iPlayerState: number;
    m_iAccount: number;
    m_iStartAccount: number;
    m_totalHitsOnServer: number;
    m_bInBombZone: boolean;
    m_bInBuyZone: boolean;
    m_bInNoDefuseArea: boolean;
    m_bKilledByTaser: boolean;
    m_iMoveState: number;
    m_iClass: number;
    m_ArmorValue: number;
    m_bHasDefuser: boolean;
    m_bNightVisionOn: boolean;
    m_bHasNightVision: boolean;
    m_bInHostageRescueZone: boolean;
    m_bIsDefusing: boolean;
    m_bIsGrabbingHostage: boolean;
    m_iBlockingUseActionInProgress: number;
    m_bIsScoped: boolean;
    m_bIsWalking: boolean;
    m_nIsAutoMounting: number;
    m_bResumeZoom: boolean;
    m_fImmuneToGunGameDamageTime: number;
    m_bGunGameImmunity: boolean;
    m_bHasMovedSinceSpawn: boolean;
    m_bMadeFinalGunGameProgressiveKill: boolean;
    m_iGunGameProgressiveWeaponIndex: number;
    m_iNumGunGameTRKillPoints: number;
    m_iNumGunGameKillsWithCurrentWeapon: number;
    m_iNumRoundKills: number;
    m_fMolotovUseTime: number;
    m_fMolotovDamageTime: number;
    m_szArmsModel: string;
    m_hCarriedHostage: EntityHandle;
    m_hCarriedHostageProp: EntityHandle;
    m_bIsRescuing: boolean;
    m_flGroundAccelLinearFracLastTime: number;
    m_flGuardianTooFarDistFrac: number;
    m_flDetectedByEnemySensorTime: number;
    m_bCanMoveDuringFreezePeriod: boolean;
    m_isCurrentGunGameLeader: boolean;
    m_isCurrentGunGameTeamLeader: boolean;
    m_unMusicID: number;
    m_bIsPlayerGhost: boolean;
    m_bHasHelmet: boolean;
    m_bHasHeavyArmor: boolean;
    m_nHeavyAssaultSuitCooldownRemaining: number;
    m_flFlashDuration: number;
    m_flFlashMaxAlpha: number;
    m_iProgressBarDuration: number;
    m_flProgressBarStartTime: number;
    m_hRagdoll: EntityHandle;
    m_hPlayerPing: EntityHandle;
    m_cycleLatch: number;
    m_unCurrentEquipmentValue: number;
    m_unRoundStartEquipmentValue: number;
    m_unFreezetimeEndEquipmentValue: number;
    m_bIsControllingBot: boolean;
    m_bHasControlledBotThisRound: boolean;
    m_bCanControlObservedBot: boolean;
    m_iControlledBotEntIndex: number;
    m_bHud_MiniScoreHidden: boolean;
    m_bHud_RadarHidden: boolean;
    m_nLastKillerIndex: number;
    m_nLastConcurrentKilled: number;
    m_nDeathCamMusic: number;
    m_bIsLookingAtWeapon: boolean;
    m_bIsHoldingLookAtWeapon: boolean;
    m_iNumRoundKillsHeadshots: number;
    m_unTotalRoundDamageDealt: number;
    m_flLowerBodyYawTarget: number;
    m_bStrafing: boolean;
    m_flThirdpersonRecoil: number;
    m_bHideTargetID: boolean;
    m_bIsSpawnRappelling: boolean;
    m_vecSpawnRappellingRopeOrigin: Vector;
    m_nSurvivalTeam: number;
    m_hSurvivalAssassinationTarget: EntityHandle;
    m_vecAutomoveTargetEnd: Vector;
    m_flAutoMoveStartTime: number;
    m_flAutoMoveTargetTime: number;
    m_flHealthShotBoostExpirationTime: number;
    m_flLastExoJumpTime: number;
}
export interface DT_CSPlayerResource {
    m_iPlayerC4: number;
    m_iPlayerVIP: number;
    m_bombsiteCenterA: Vector;
    m_bombsiteCenterB: Vector;
    m_bEndMatchNextMapAllVoted: boolean;
}
export interface DT_CSRagdoll {
    m_vecOrigin: Vector;
    m_vecRagdollOrigin: Vector;
    m_hPlayer: EntityHandle;
    m_nModelIndex: number;
    m_nForceBone: number;
    m_vecForce: Vector;
    m_vecRagdollVelocity: Vector;
    m_iDeathPose: number;
    m_iDeathFrame: number;
    m_iTeamNum: number;
    m_bClientSideAnimation: boolean;
    m_flDeathYaw: number;
    m_flAbsYaw: number;
}
export interface DT_CSTeam {
}
export interface DT_DangerZone {
    m_vecDangerZoneOriginStartedAt: Vector;
    m_flBombLaunchTime: number;
    m_flExtraRadius: number;
    m_flExtraRadiusStartTime: number;
    m_flExtraRadiusTotalLerpTime: number;
    m_nDropOrder: number;
    m_iWave: number;
}
export interface DT_DangerZoneController {
    m_bDangerZoneControllerEnabled: boolean;
    m_bMissionControlledExplosions: boolean;
    m_flStartTime: number;
    m_flFinalExpansionTime: number;
    m_vecEndGameCircleStart: Vector;
    m_vecEndGameCircleEnd: Vector;
    m_hTheFinalZone: EntityHandle;
}
export interface DT_WeaponDEagle {
}
export interface DT_DecoyGrenade {
}
export interface DT_DecoyProjectile {
}
export interface DT_Drone {
    m_hMoveToThisEntity: EntityHandle;
    m_hDeliveryCargo: EntityHandle;
    m_bPilotTakeoverAllowed: boolean;
    m_hPotentialCargo: EntityHandle;
    m_hCurrentPilot: EntityHandle;
    m_vecTagPositions: Vector[];
    m_vecTagIncrements: number[];
}
export interface DT_Dronegun {
    m_vecAttentionTarget: Vector;
    m_vecTargetOffset: Vector;
    m_iHealth: number;
    m_bHasTarget: boolean;
}
export interface DT_DynamicLight {
    m_Flags: number;
    m_LightStyle: number;
    m_Radius: number;
    m_Exponent: number;
    m_InnerAngle: number;
    m_OuterAngle: number;
    m_SpotRadius: number;
}
export interface DT_DynamicProp {
    m_bUseHitboxesForRenderBox: boolean;
    m_flGlowMaxDist: number;
    m_bShouldGlow: boolean;
    m_clrGlow: number;
    m_nGlowStyle: number;
}
export interface DT_EconEntity {
    m_OriginalOwnerXuidLow: number;
    m_OriginalOwnerXuidHigh: number;
    m_nFallbackPaintKit: number;
    m_nFallbackSeed: number;
    m_flFallbackWear: number;
    m_nFallbackStatTrak: number;
}
export interface DT_WearableItem {
}
export interface DT_Embers {
    m_nDensity: number;
    m_nLifetime: number;
    m_nSpeed: number;
    m_bEmit: number;
}
export interface DT_EntityDissolve {
    m_flStartTime: number;
    m_flFadeInStart: number;
    m_flFadeInLength: number;
    m_flFadeOutModelStart: number;
    m_flFadeOutModelLength: number;
    m_flFadeOutStart: number;
    m_flFadeOutLength: number;
    m_nDissolveType: number;
    m_vDissolverOrigin: Vector;
    m_nMagnitude: number;
}
export interface DT_EntityFlame {
    m_hEntAttached: EntityHandle;
    m_bCheapEffect: boolean;
}
export interface DT_EntityFreezing {
    m_vFreezingOrigin: Vector;
    m_flFrozen: number;
    m_bFinishFreezing: boolean;
}
export interface DT_EntityParticleTrail {
    m_iMaterialName: number;
    m_hConstraintEntity: EntityHandle;
}
export interface DT_EnvAmbientLight {
    m_vecColor: Vector;
}
export interface DT_DetailController {
    m_flFadeStartDist: number;
    m_flFadeEndDist: number;
}
export interface DT_EnvDOFController {
    m_bDOFEnabled: boolean;
    m_flNearBlurDepth: number;
    m_flNearFocusDepth: number;
    m_flFarFocusDepth: number;
    m_flFarBlurDepth: number;
    m_flNearBlurRadius: number;
    m_flFarBlurRadius: number;
}
export interface DT_EnvGasCanister {
    m_flFlightSpeed: number;
    m_flLaunchTime: number;
    m_vecParabolaDirection: Vector;
    m_flFlightTime: number;
    m_flWorldEnterTime: number;
    m_flInitialZSpeed: number;
    m_flZAcceleration: number;
    m_flHorizSpeed: number;
    m_bLaunchedFromWithinWorld: boolean;
    m_vecImpactPosition: Vector;
    m_vecStartPosition: Vector;
    m_vecEnterWorldPosition: Vector;
    m_vecDirection: Vector;
    m_vecStartAngles: Vector;
    m_vecSkyboxOrigin: Vector;
    m_flSkyboxScale: number;
    m_bInSkybox: boolean;
    m_bDoImpactEffects: boolean;
    m_bLanded: boolean;
    m_hSkyboxCopy: EntityHandle;
    m_nMyZoneIndex: number;
    m_vecOrigin: Vector;
    ["m_vecOrigin[2]"]: number;
}
export interface DT_EnvParticleScript {
    m_flSequenceScale: number;
}
export interface DT_EnvProjectedTexture {
    m_hTargetEntity: EntityHandle;
    m_bState: boolean;
    m_bAlwaysUpdate: boolean;
    m_flLightFOV: number;
    m_bEnableShadows: boolean;
    m_bSimpleProjection: boolean;
    m_bLightOnlyTarget: boolean;
    m_bLightWorld: boolean;
    m_bCameraSpace: boolean;
    m_flBrightnessScale: number;
    m_LightColor: number;
    m_flColorTransitionTime: number;
    m_flAmbient: number;
    m_SpotlightTextureName: string;
    m_nSpotlightTextureFrame: number;
    m_flNearZ: number;
    m_flFarZ: number;
    m_nShadowQuality: boolean;
    m_flProjectionSize: number;
    m_flRotation: number;
    m_iStyle: number;
}
export interface DT_QuadraticBeam {
    m_targetPosition: Vector;
    m_controlPosition: Vector;
    m_scrollRate: number;
    m_flWidth: number;
}
export interface DT_EnvScreenEffect {
    m_flDuration: number;
    m_nType: number;
}
export interface DT_EnvScreenOverlay {
    m_iszOverlayNames: string[];
    m_flOverlayTimes: number[];
    m_flStartTime: number;
    m_iDesiredOverlay: number;
    m_bIsActive: boolean;
}
export interface DT_EnvTonemapController {
    m_bUseCustomAutoExposureMin: boolean;
    m_bUseCustomAutoExposureMax: boolean;
    m_bUseCustomBloomScale: boolean;
    m_flCustomAutoExposureMin: number;
    m_flCustomAutoExposureMax: number;
    m_flCustomBloomScale: number;
    m_flCustomBloomScaleMinimum: number;
    m_flBloomExponent: number;
    m_flBloomSaturation: number;
    m_flTonemapPercentTarget: number;
    m_flTonemapPercentBrightPixels: number;
    m_flTonemapMinAvgLum: number;
    m_flTonemapRate: number;
}
export interface DT_EnvWind {
}
export interface DT_FEPlayerDecal {
    m_nUniqueID: number;
    m_unAccountID: number;
    m_unTraceID: number;
    m_rtGcTime: number;
    m_vecEndPos: Vector;
    m_vecStart: Vector;
    m_vecRight: Vector;
    m_vecNormal: Vector;
    m_nEntity: number;
    m_nPlayer: number;
    m_nHitbox: number;
    m_nTintID: number;
    m_flCreationTime: number;
    m_nVersion: number;
}
export interface DT_FireCrackerBlast {
}
export interface DT_FireSmoke {
    m_flStartScale: number;
    m_flScale: number;
    m_flScaleTime: number;
    m_nFlags: number;
    m_nFlameModelIndex: number;
    m_nFlameFromAboveModelIndex: number;
}
export interface DT_FireTrail {
    m_nAttachment: number;
    m_flLifetime: number;
}
export interface DT_CFish {
    m_poolOrigin: Vector;
    m_angle: number;
    m_x: number;
    m_y: number;
    m_z: number;
    m_nModelIndex: number;
    m_lifeState: number;
    m_waterLevel: number;
}
export interface DT_WeaponFists {
    m_bPlayingUninterruptableAct: boolean;
}
export interface DT_Flashbang {
}
export interface DT_FogController {
    ["m_fog.enable"]: boolean;
    ["m_fog.blend"]: boolean;
    ["m_fog.dirPrimary"]: Vector;
    ["m_fog.colorPrimary"]: number;
    ["m_fog.colorSecondary"]: number;
    ["m_fog.start"]: number;
    ["m_fog.end"]: number;
    ["m_fog.maxdensity"]: number;
    ["m_fog.farz"]: number;
    ["m_fog.colorPrimaryLerpTo"]: number;
    ["m_fog.colorSecondaryLerpTo"]: number;
    ["m_fog.startLerpTo"]: number;
    ["m_fog.endLerpTo"]: number;
    ["m_fog.maxdensityLerpTo"]: number;
    ["m_fog.lerptime"]: number;
    ["m_fog.duration"]: number;
    ["m_fog.HDRColorScale"]: number;
    ["m_fog.ZoomFogScale"]: number;
}
export interface DT_FootstepControl {
    m_source: string;
    m_destination: string;
}
export interface DT_Func_Dust {
    m_Color: number;
    m_SpawnRate: number;
    m_SpeedMax: number;
    m_flSizeMin: number;
    m_flSizeMax: number;
    m_DistMax: number;
    m_LifetimeMin: number;
    m_LifetimeMax: number;
    m_DustFlags: number;
    m_nModelIndex: number;
    m_FallSpeed: number;
    m_bAffectedByWind: boolean;
}
export interface DT_Func_LOD {
    m_nDisappearMinDist: number;
    m_nDisappearMaxDist: number;
}
export interface DT_FuncAreaPortalWindow {
    m_flFadeDist: number;
    m_flFadeStartDist: number;
    m_flTranslucencyLimit: number;
    m_iBackgroundModelIndex: number;
}
export interface DT_FuncBrush {
}
export interface DT_FuncConveyor {
    m_flConveyorSpeed: number;
}
export interface DT_FuncLadder {
    m_vecPlayerMountPositionTop: Vector;
    m_vecPlayerMountPositionBottom: Vector;
    m_vecLadderDir: Vector;
    m_bFakeLadder: boolean;
}
export interface DT_FuncMonitor {
}
export interface DT_FuncMoveLinear {
    m_vecVelocity: Vector;
    m_fFlags: number;
}
export interface DT_FuncOccluder {
    m_bActive: boolean;
    m_nOccluderIndex: number;
}
export interface DT_FuncReflectiveGlass {
}
export interface DT_FuncRotating {
    m_vecOrigin: Vector;
    ["m_angRotation[0]"]: number;
    ["m_angRotation[1]"]: number;
    ["m_angRotation[2]"]: number;
    m_flSimulationTime: number;
}
export interface DT_FuncSmokeVolume {
    m_Color1: number;
    m_Color2: number;
    m_MaterialName: string;
    m_ParticleDrawWidth: number;
    m_ParticleSpacingDistance: number;
    m_DensityRampSpeed: number;
    m_RotationSpeed: number;
    m_MovementSpeed: number;
    m_Density: number;
    m_maxDrawDistance: number;
    m_spawnflags: number;
}
export interface DT_FuncTrackTrain {
}
export interface DT_GameRulesProxy {
}
export interface DT_GrassBurn {
    m_flGrassBurnClearTime: number;
}
export interface DT_HandleTest {
    m_Handle: EntityHandle;
    m_bSendHandle: number;
}
export interface DT_HEGrenade {
}
export interface DT_CHostage {
    m_isRescued: boolean;
    m_jumpedThisFrame: boolean;
    m_iHealth: number;
    m_iMaxHealth: number;
    m_lifeState: number;
    m_fFlags: number;
    m_vel: Vector;
    m_leader: EntityHandle;
    m_nHostageState: number;
    m_flRescueStartTime: number;
    m_flGrabSuccessTime: number;
    m_flDropStartTime: number;
}
export interface DT_HostageCarriableProp {
}
export interface DT_IncendiaryGrenade {
}
export interface DT_Inferno {
    m_fireCount: number;
    m_nFireEffectTickBegin: number;
}
export interface DT_InfoLadderDismount {
}
export interface DT_InfoMapRegion {
    m_flRadius: number;
    m_szLocToken: string;
}
export interface DT_InfoOverlayAccessor {
    m_iTextureFrameIndex: number;
    m_iOverlayID: number;
}
export interface DT_Item_Healthshot {
}
export interface DT_ItemCash {
}
export interface DT_ItemDogtags {
    m_OwningPlayer: EntityHandle;
    m_KillingPlayer: EntityHandle;
}
export interface DT_WeaponKnife {
}
export interface DT_WeaponKnifeGG {
}
export interface DT_LightGlow {
    m_clrRender: number;
    m_nHorizontalSize: number;
    m_nVerticalSize: number;
    m_nMinDist: number;
    m_nMaxDist: number;
    m_nOuterMaxDist: number;
    m_spawnflags: number;
    m_vecOrigin: Vector;
    m_angRotation: Vector;
    moveparent: EntityHandle;
    m_flGlowProxySize: number;
    HDRColorScale: number;
}
export interface DT_MaterialModifyControl {
    m_szMaterialName: string;
    m_szMaterialVar: string;
    m_szMaterialVarValue: string;
    m_iFrameStart: number;
    m_iFrameEnd: number;
    m_bWrap: boolean;
    m_flFramerate: number;
    m_bNewAnimCommandsSemaphore: boolean;
    m_flFloatLerpStartValue: number;
    m_flFloatLerpEndValue: number;
    m_flFloatLerpTransitionTime: number;
    m_nModifyMode: number;
}
export interface DT_WeaponMelee {
    m_flThrowAt: number;
}
export interface DT_MolotovGrenade {
}
export interface DT_MolotovProjectile {
    m_bIsIncGrenade: boolean;
}
export interface DT_MovieDisplay {
    m_bEnabled: boolean;
    m_bLooping: boolean;
    m_szMovieFilename: string;
    m_szGroupName: string;
    m_bStretchToFill: boolean;
    m_bForcedSlave: boolean;
    m_bUseCustomUVs: boolean;
    m_flUMin: number;
    m_flUMax: number;
    m_flVMin: number;
    m_flVMax: number;
}
export interface DT_ParadropChopper {
    m_vecOrigin: Vector;
    ["m_vecOrigin[2]"]: number;
    m_hCallingPlayer: EntityHandle;
}
export interface DT_ParticleFire {
    m_vOrigin: Vector;
    m_vDirection: Vector;
}
export interface DT_ParticlePerformanceMonitor {
    m_bDisplayPerf: boolean;
    m_bMeasurePerf: boolean;
}
export interface DT_ParticleSystem {
    m_vecOrigin: Vector;
    m_fEffects: number;
    m_hOwnerEntity: EntityHandle;
    moveparent: EntityHandle;
    m_iParentAttachment: number;
    m_angRotation: Vector;
    m_iEffectIndex: number;
    m_bActive: boolean;
    m_nStopType: number;
    m_flStartTime: number;
    m_szSnapshotFileName: string;
}
export interface DT_PhysBox {
}
export interface DT_PhysBoxMultiplayer {
    m_iPhysicsMode: boolean;
    m_fMass: number;
}
export interface DT_PhysicsProp {
    m_bAwake: boolean;
}
export interface DT_PhysicsPropMultiplayer {
    m_iPhysicsMode: number;
    m_fMass: number;
    m_collisionMins: Vector;
    m_collisionMaxs: Vector;
}
export interface DT_PhysMagnet {
}
export interface DT_PhysPropAmmoBox {
}
export interface DT_PhysPropLootCrate {
    m_bRenderInPSPM: boolean;
    m_bRenderInTablet: boolean;
    m_iHealth: number;
    m_iMaxHealth: number;
}
export interface DT_PhysPropRadarJammer {
}
export interface DT_PhysPropWeaponUpgrade {
}
export interface DT_PlantedC4 {
    m_bBombTicking: boolean;
    m_nBombSite: number;
    m_flC4Blow: number;
    m_flTimerLength: number;
    m_flDefuseLength: number;
    m_flDefuseCountDown: number;
    m_bBombDefused: boolean;
    m_hBombDefuser: EntityHandle;
}
export interface DT_Plasma {
    m_flScale: number;
    m_flScaleTime: number;
    m_nFlags: number;
    m_nPlasmaModelIndex: number;
    m_nPlasmaModelIndex2: number;
    m_nGlowModelIndex: number;
}
export interface DT_PlayerPing {
    m_hPlayer: EntityHandle;
    m_hPingedEntity: EntityHandle;
    m_iType: number;
}
export interface DT_PlayerResource {
}
export interface DT_PointCamera {
    m_FOV: number;
    m_Resolution: number;
    m_bFogEnable: boolean;
    m_FogColor: number;
    m_flFogStart: number;
    m_flFogEnd: number;
    m_flFogMaxDensity: number;
    m_bActive: boolean;
    m_bUseScreenAspectRatio: boolean;
}
export interface DT_PointCommentaryNode {
    m_bActive: boolean;
    m_iszCommentaryFile: string;
    m_iszCommentaryFileNoHDR: string;
    m_flStartTime: number;
    m_iszSpeakers: string;
    m_iNodeNumber: number;
    m_iNodeNumberMax: number;
    m_hViewPosition: EntityHandle;
}
export interface DT_PointWorldText {
    m_szText: string;
    m_textColor: number;
    m_flTextSize: number;
}
export interface DT_PoseController {
    m_bPoseValueParity: boolean;
    m_fPoseValue: number;
    m_fInterpolationTime: number;
    m_bInterpolationWrap: boolean;
    m_fCycleFrequency: number;
    m_nFModType: number;
    m_fFModTimeOffset: number;
    m_fFModRate: number;
    m_fFModAmplitude: number;
}
export interface DT_PostProcessController {
    m_bMaster: boolean;
}
export interface DT_Precipitation {
    m_nPrecipType: number;
}
export interface DT_PrecipitationBlocker {
}
export interface DT_PredictedViewModel {
}
export interface DT_Prop_Hallucination {
    m_bEnabled: boolean;
    m_fVisibleTime: number;
    m_fRechargeTime: number;
}
export interface DT_PropCounter {
    m_flDisplayValue: number;
}
export interface DT_PropDoorRotating {
}
export interface DT_PropJeep {
    m_bHeadlightIsOn: boolean;
}
export interface DT_PropVehicleDriveable {
    m_hPlayer: EntityHandle;
    m_nSpeed: number;
    m_nRPM: number;
    m_flThrottle: number;
    m_nBoostTimeLeft: number;
    m_nHasBoost: boolean;
    m_nScannerDisabledWeapons: boolean;
    m_nScannerDisabledVehicle: boolean;
    m_bEnterAnimOn: boolean;
    m_bExitAnimOn: boolean;
    m_bUnableToFire: boolean;
    m_vecEyeExitEndpoint: Vector;
    m_bHasGun: boolean;
    m_vecGunCrosshair: Vector;
}
export interface DT_RagdollManager {
    m_iCurrentMaxRagdollCount: number;
}
export interface DT_Ragdoll {
    m_ragAngles: Vector[];
    m_ragPos: Vector[];
    m_hUnragdoll: EntityHandle;
    m_flBlendWeight: number;
    m_nOverlaySequence: number;
}
export interface DT_Ragdoll_Attached {
    m_boneIndexAttached: number;
    m_ragdollAttachedObjectIndex: number;
    m_attachmentPointBoneSpace: Vector;
    m_attachmentPointRagdollSpace: Vector;
}
export interface DT_RopeKeyframe {
    m_hStartPoint: EntityHandle;
    m_hEndPoint: EntityHandle;
    m_iStartAttachment: number;
    m_iEndAttachment: number;
    m_Slack: number;
    m_RopeLength: number;
    m_fLockedPoints: number;
    m_nChangeCount: number;
    m_RopeFlags: number;
    m_nSegments: number;
    m_bConstrainBetweenEndpoints: boolean;
    m_iRopeMaterialModelIndex: number;
    m_Subdiv: number;
    m_TextureScale: number;
    m_Width: number;
    m_flScrollSpeed: number;
    m_vecOrigin: Vector;
    moveparent: EntityHandle;
    m_iParentAttachment: number;
    m_iDefaultRopeMaterialModelIndex: number;
    m_nMinCPULevel: number;
    m_nMaxCPULevel: number;
    m_nMinGPULevel: number;
    m_nMaxGPULevel: number;
}
export interface DT_WeaponSCAR17 {
}
export interface DT_SceneEntity {
    m_nSceneStringIndex: number;
    m_bIsPlayingBack: boolean;
    m_bPaused: boolean;
    m_bMultiplayer: boolean;
    m_flForceClientTime: number;
}
export interface DT_SensorGrenade {
}
export interface DT_SensorGrenadeProjectile {
}
export interface DT_ShadowControl {
    m_shadowDirection: Vector;
    m_shadowColor: number;
    m_flShadowMaxDist: number;
    m_bDisableShadows: boolean;
    m_bEnableLocalLightShadows: boolean;
}
export interface DT_SlideshowDisplay {
    m_bEnabled: boolean;
    m_szDisplayText: string;
    m_szSlideshowDirectory: string;
    m_fMinSlideTime: number;
    m_fMaxSlideTime: number;
    m_iCycleType: number;
    m_bNoListRepeats: boolean;
}
export interface DT_SmokeGrenade {
}
export interface DT_SmokeGrenadeProjectile {
    m_bDidSmokeEffect: boolean;
    m_nSmokeEffectTickBegin: number;
}
export interface DT_SmokeStack {
    m_SpreadSpeed: number;
    m_Speed: number;
    m_StartSize: number;
    m_EndSize: number;
    m_Rate: number;
    m_JetLength: number;
    m_bEmit: boolean;
    m_flBaseSpread: number;
    m_flRollSpeed: number;
    ["m_DirLight.m_vPos"]: Vector;
    ["m_DirLight.m_vColor"]: Vector;
    ["m_DirLight.m_flIntensity"]: number;
    ["m_AmbientLight.m_vPos"]: Vector;
    ["m_AmbientLight.m_vColor"]: Vector;
    ["m_AmbientLight.m_flIntensity"]: number;
    m_vWind: Vector;
    m_flTwist: number;
    m_iMaterialModel: number;
}
export interface DT_Snowball {
}
export interface DT_SnowballPile {
}
export interface DT_SnowballProjectile {
}
export interface DT_SpatialEntity {
    m_vecOrigin: Vector;
    m_MinFalloff: number;
    m_MaxFalloff: number;
    m_flCurWeight: number;
    m_bEnabled: boolean;
}
export interface DT_SpotlightEnd {
    m_flLightScale: number;
    m_Radius: number;
}
export interface DT_Sprite {
    m_hAttachedToEntity: EntityHandle;
    m_nAttachment: number;
    m_flScaleTime: number;
    m_flSpriteScale: number;
    m_flGlowProxySize: number;
    m_flHDRColorScale: number;
    m_flSpriteFramerate: number;
    m_flFrame: number;
    m_flBrightnessTime: number;
    m_nBrightness: number;
    m_bWorldSpaceScale: boolean;
}
export interface DT_SpriteOriented {
}
export interface DT_SpriteTrail {
    m_flLifeTime: number;
    m_flStartWidth: number;
    m_flEndWidth: number;
    m_flStartWidthVariance: number;
    m_flTextureRes: number;
    m_flMinFadeLength: number;
    m_vecSkyboxOrigin: Vector;
    m_flSkyboxScale: number;
}
export interface DT_StatueProp {
    m_hInitBaseAnimating: EntityHandle;
    m_bShatter: boolean;
    m_nShatterFlags: number;
    m_vShatterPosition: Vector;
    m_vShatterForce: Vector;
}
export interface DT_SteamJet {
    m_SpreadSpeed: number;
    m_Speed: number;
    m_StartSize: number;
    m_EndSize: number;
    m_Rate: number;
    m_JetLength: number;
    m_bEmit: boolean;
    m_bFaceLeft: boolean;
    m_nType: number;
    m_spawnflags: number;
    m_flRollSpeed: number;
}
export interface DT_Sun {
    m_clrRender: number;
    m_clrOverlay: number;
    m_vDirection: Vector;
    m_bOn: boolean;
    m_nSize: number;
    m_nOverlaySize: number;
    m_nMaterial: number;
    m_nOverlayMaterial: number;
    HDRColorScale: number;
    glowDistanceScale: number;
}
export interface DT_SunlightShadowControl {
    m_shadowDirection: Vector;
    m_bEnabled: boolean;
    m_TextureName: string;
    m_LightColor: number;
    m_flColorTransitionTime: number;
    m_flSunDistance: number;
    m_flFOV: number;
    m_flNearZ: number;
    m_flNorthOffset: number;
    m_bEnableShadows: boolean;
}
export interface DT_SurvivalSpawnChopper {
    m_vecOrigin: Vector;
    ["m_vecOrigin[2]"]: number;
}
export interface DT_WeaponTablet {
    m_flUpgradeExpirationTime: number[];
    m_vecLocalHexFlags: number[];
    m_nContractKillGridIndex: number;
    m_nContractKillGridHighResIndex: number;
    m_bTabletReceptionIsBlocked: boolean;
    m_flScanProgress: number;
    m_flBootTime: number;
    m_flShowMapTime: number;
    m_vecNotificationIds: number[];
    m_vecNotificationTimestamps: number[];
    m_vecPlayerPositionHistory: Vector[];
    m_nLastPurchaseIndex: number;
    m_vecNearestMetalCratePos: Vector;
}
export interface DT_Team {
    m_iTeamNum: number;
    m_bSurrendered: number;
    m_scoreTotal: number;
    m_scoreFirstHalf: number;
    m_scoreSecondHalf: number;
    m_scoreOvertime: number;
    m_iClanID: number;
    m_szTeamname: string;
    m_szClanTeamname: string;
    m_szTeamFlagImage: string;
    m_szTeamLogoImage: string;
    m_szTeamMatchStat: string;
    m_nGGLeaderEntIndex_CT: number;
    m_nGGLeaderEntIndex_T: number;
    m_numMapVictories: number;
    ['"player_array"']: number[];
}
export interface DT_TeamplayRoundBasedRulesProxy {
}
export interface DT_TEArmorRicochet {
}
export interface DT_BaseBeam {
    m_nModelIndex: number;
    m_nHaloIndex: number;
    m_nStartFrame: number;
    m_nFrameRate: number;
    m_fLife: number;
    m_fWidth: number;
    m_fEndWidth: number;
    m_nFadeLength: number;
    m_fAmplitude: number;
    m_nSpeed: number;
    r: number;
    g: number;
    b: number;
    a: number;
    m_nFlags: number;
}
export interface DT_TEBeamEntPoint {
    m_nStartEntity: number;
    m_nEndEntity: number;
    m_vecStartPoint: Vector;
    m_vecEndPoint: Vector;
}
export interface DT_TEBeamEnts {
    m_nStartEntity: number;
    m_nEndEntity: number;
}
export interface DT_TEBeamFollow {
    m_iEntIndex: number;
}
export interface DT_TEBeamLaser {
    m_nStartEntity: number;
    m_nEndEntity: number;
}
export interface DT_TEBeamPoints {
    m_vecStartPoint: Vector;
    m_vecEndPoint: Vector;
}
export interface DT_TEBeamRing {
    m_nStartEntity: number;
    m_nEndEntity: number;
}
export interface DT_TEBeamRingPoint {
    m_vecCenter: Vector;
    m_flStartRadius: number;
    m_flEndRadius: number;
}
export interface DT_TEBeamSpline {
    m_nPoints: number;
    m_vecPoints: Vector[];
}
export interface DT_TEBloodSprite {
    m_vecOrigin: Vector;
    m_vecDirection: Vector;
    r: number;
    g: number;
    b: number;
    a: number;
    m_nSprayModel: number;
    m_nDropModel: number;
    m_nSize: number;
}
export interface DT_TEBloodStream {
    m_vecDirection: Vector;
    r: number;
    g: number;
    b: number;
    a: number;
    m_nAmount: number;
}
export interface DT_TEBreakModel {
    m_vecOrigin: Vector;
    ["m_angRotation[0]"]: number;
    ["m_angRotation[1]"]: number;
    ["m_angRotation[2]"]: number;
    m_vecSize: Vector;
    m_vecVelocity: Vector;
    m_nModelIndex: number;
    m_nRandomization: number;
    m_nCount: number;
    m_fTime: number;
    m_nFlags: number;
}
export interface DT_TEBSPDecal {
    m_vecOrigin: Vector;
    m_nEntity: number;
    m_nIndex: number;
}
export interface DT_TEBubbles {
    m_vecMins: Vector;
    m_vecMaxs: Vector;
    m_nModelIndex: number;
    m_fHeight: number;
    m_nCount: number;
    m_fSpeed: number;
}
export interface DT_TEBubbleTrail {
    m_vecMins: Vector;
    m_vecMaxs: Vector;
    m_nModelIndex: number;
    m_flWaterZ: number;
    m_nCount: number;
    m_fSpeed: number;
}
export interface DT_TEClientProjectile {
    m_vecOrigin: Vector;
    m_vecVelocity: Vector;
    m_nModelIndex: number;
    m_nLifeTime: number;
    m_hOwner: EntityHandle;
}
export interface DT_TEDecal {
    m_vecOrigin: Vector;
    m_vecStart: Vector;
    m_nEntity: number;
    m_nHitbox: number;
    m_nIndex: number;
}
export interface DT_TEDust {
    m_flSize: number;
    m_flSpeed: number;
    m_vecDirection: Vector;
}
export interface DT_TEDynamicLight {
    m_vecOrigin: Vector;
    r: number;
    g: number;
    b: number;
    exponent: number;
    m_fRadius: number;
    m_fTime: number;
    m_fDecay: number;
}
export interface DT_TEEffectDispatch {
}
export interface DT_TEEnergySplash {
    m_vecPos: Vector;
    m_vecDir: Vector;
    m_bExplosive: boolean;
}
export interface DT_TEExplosion {
    m_nModelIndex: number;
    m_fScale: number;
    m_nFrameRate: number;
    m_nFlags: number;
    m_vecNormal: Vector;
    m_chMaterialType: number;
    m_nRadius: number;
    m_nMagnitude: number;
}
export interface DT_TEFireBullets {
    m_vecOrigin: Vector;
    ["m_vecAngles[0]"]: number;
    ["m_vecAngles[1]"]: number;
    m_weapon: EntityHandle;
    m_iMode: boolean;
    m_iSeed: number;
    m_iPlayer: number;
    m_fInaccuracy: number;
    m_flRecoilIndex: number;
    m_fSpread: number;
    m_nItemDefIndex: number;
    m_iSoundType: number;
}
export interface DT_TEFizz {
    m_nEntity: number;
    m_nModelIndex: number;
    m_nDensity: number;
    m_nCurrent: number;
}
export interface DT_TEFootprintDecal {
    m_vecOrigin: Vector;
    m_vecDirection: Vector;
    m_nEntity: number;
    m_nIndex: number;
    m_chMaterialType: number;
}
export interface DT_TEFoundryHelpers {
    m_iEntity: number;
}
export interface DT_TEGaussExplosion {
    m_nType: number;
    m_vecDirection: Vector;
}
export interface DT_TEGlowSprite {
    m_vecOrigin: Vector;
    m_nModelIndex: number;
    m_fScale: number;
    m_fLife: number;
    m_nBrightness: number;
}
export interface DT_TEImpact {
    m_vecOrigin: Vector;
    m_vecNormal: Vector;
    m_iType: number;
}
export interface DT_TEKillPlayerAttachments {
    m_nPlayer: number;
}
export interface DT_TELargeFunnel {
    m_nModelIndex: number;
    m_nReversed: number;
}
export interface DT_TEMetalSparks {
    m_vecPos: Vector;
    m_vecDir: Vector;
}
export interface DT_TEMuzzleFlash {
    m_vecOrigin: Vector;
    m_vecAngles: Vector;
    m_flScale: number;
    m_nType: number;
}
export interface DT_TEParticleSystem {
    ["m_vecOrigin[0]"]: number;
    ["m_vecOrigin[1]"]: number;
    ["m_vecOrigin[2]"]: number;
}
export interface DT_TEPhysicsProp {
    m_vecOrigin: Vector;
    ["m_angRotation[0]"]: number;
    ["m_angRotation[1]"]: number;
    ["m_angRotation[2]"]: number;
    m_vecVelocity: Vector;
    m_nModelIndex: number;
    m_nSkin: number;
    m_nFlags: number;
    m_nEffects: number;
    m_clrRender: number;
}
export interface DT_TEPlantBomb {
    m_vecOrigin: Vector;
    m_iPlayer: number;
    m_option: boolean;
}
export interface DT_TEPlayerAnimEvent {
    m_hPlayer: EntityHandle;
    m_iEvent: number;
    m_nData: number;
}
export interface DT_TEPlayerDecal {
    m_vecOrigin: Vector;
    m_vecStart: Vector;
    m_vecRight: Vector;
    m_nEntity: number;
    m_nPlayer: number;
    m_nHitbox: number;
}
export interface DT_TEProjectedDecal {
    m_vecOrigin: Vector;
    m_angRotation: Vector;
    m_flDistance: number;
    m_nIndex: number;
}
export interface DT_TERadioIcon {
    m_iAttachToClient: number;
}
export interface DT_TEShatterSurface {
    m_vecOrigin: Vector;
    m_vecAngles: Vector;
    m_vecForce: Vector;
    m_vecForcePos: Vector;
    m_flWidth: number;
    m_flHeight: number;
    m_flShardSize: number;
    m_nSurfaceType: number;
    ["m_uchFrontColor[0]"]: number;
    ["m_uchFrontColor[1]"]: number;
    ["m_uchFrontColor[2]"]: number;
    ["m_uchBackColor[0]"]: number;
    ["m_uchBackColor[1]"]: number;
    ["m_uchBackColor[2]"]: number;
}
export interface DT_TEShowLine {
    m_vecEnd: Vector;
}
export interface DT_Tesla {
    m_SoundName: string;
    m_iszSpriteName: string;
}
export interface DT_TESmoke {
    m_vecOrigin: Vector;
    m_nModelIndex: number;
    m_fScale: number;
    m_nFrameRate: number;
}
export interface DT_TESparks {
    m_nMagnitude: number;
    m_nTrailLength: number;
    m_vecDir: Vector;
}
export interface DT_TESprite {
    m_vecOrigin: Vector;
    m_nModelIndex: number;
    m_fScale: number;
    m_nBrightness: number;
}
export interface DT_TESpriteSpray {
    m_vecOrigin: Vector;
    m_vecDirection: Vector;
    m_nModelIndex: number;
    m_fNoise: number;
    m_nSpeed: number;
    m_nCount: number;
}
export interface DT_ProxyToggle {
}
export interface DT_TestTraceline {
    m_clrRender: number;
    m_vecOrigin: Vector;
    ["m_angRotation[0]"]: number;
    ["m_angRotation[1]"]: number;
    ["m_angRotation[2]"]: number;
    moveparent: EntityHandle;
}
export interface DT_TEWorldDecal {
    m_vecOrigin: Vector;
    m_nIndex: number;
}
export interface DT_TriggerPlayerMovement {
}
export interface DT_TriggerSoundOperator {
    m_nSoundOperator: number;
}
export interface DT_VGuiScreen {
    m_flWidth: number;
    m_flHeight: number;
    m_nAttachmentIndex: number;
    m_nPanelName: number;
    m_fScreenFlags: number;
    m_nOverlayMaterial: number;
    m_hPlayerOwner: EntityHandle;
}
export interface DT_VoteController {
    m_iActiveIssueIndex: number;
    m_iOnlyTeamToVote: number;
    m_nPotentialVotes: number;
    m_bIsYesNoVote: boolean;
}
export interface DT_WaterBullet {
}
export interface DT_WaterLODControl {
    m_flCheapWaterStartDistance: number;
    m_flCheapWaterEndDistance: number;
}
export interface DT_WeaponAug {
}
export interface DT_WeaponAWP {
}
export interface DT_WeaponBaseItem {
    m_bRedraw: boolean;
}
export interface DT_WeaponBizon {
}
export interface DT_WeaponCSBase {
    m_weaponMode: boolean;
    m_fAccuracyPenalty: number;
    m_fLastShotTime: number;
    m_flRecoilIndex: number;
    m_hPrevOwner: EntityHandle;
    m_bBurstMode: boolean;
    m_flPostponeFireReadyTime: number;
    m_bReloadVisuallyComplete: boolean;
    m_bSilencerOn: boolean;
    m_flDoneSwitchingSilencer: number;
    m_iOriginalTeamNumber: number;
    m_iIronSightMode: number;
}
export interface DT_WeaponCSBaseGun {
    m_zoomLevel: number;
    m_iBurstShotsRemaining: number;
}
export interface DT_WeaponCycler {
}
export interface DT_WeaponElite {
}
export interface DT_WeaponFamas {
}
export interface DT_WeaponFiveSeven {
}
export interface DT_WeaponG3SG1 {
}
export interface DT_WeaponGalil {
}
export interface DT_WeaponGalilAR {
}
export interface DT_WeaponGlock {
}
export interface DT_WeaponHKP2000 {
}
export interface DT_WeaponM249 {
}
export interface DT_WeaponM3 {
    m_reloadState: number;
}
export interface DT_WeaponM4A1 {
}
export interface DT_WeaponMAC10 {
}
export interface DT_WeaponMag7 {
}
export interface DT_WeaponMP5Navy {
}
export interface DT_WeaponMP7 {
}
export interface DT_WeaponMP9 {
}
export interface DT_WeaponNegev {
}
export interface DT_WeaponNOVA {
    m_reloadState: number;
}
export interface DT_WeaponP228 {
}
export interface DT_WeaponP250 {
}
export interface DT_WeaponP90 {
}
export interface DT_WeaponSawedoff {
    m_reloadState: number;
}
export interface DT_WeaponSCAR20 {
}
export interface DT_WeaponScout {
}
export interface DT_WeaponSG550 {
}
export interface DT_WeaponSG552 {
}
export interface DT_WeaponSG556 {
}
export interface DT_WeaponShield {
}
export interface DT_WeaponSSG08 {
}
export interface DT_WeaponTaser {
    m_fFireTime: number;
}
export interface DT_WeaponTec9 {
}
export interface DT_WeaponTMP {
}
export interface DT_WeaponUMP45 {
}
export interface DT_WeaponUSP {
}
export interface DT_WeaponXM1014 {
    m_reloadState: number;
}
export interface DT_WeaponZoneRepulsor {
}
export interface DT_WORLD {
    m_flWaveHeight: number;
    m_WorldMins: Vector;
    m_WorldMaxs: Vector;
    m_bStartDark: boolean;
    m_flMaxOccludeeArea: number;
    m_flMinOccluderArea: number;
    m_flMaxPropScreenSpaceWidth: number;
    m_flMinPropScreenSpaceWidth: number;
    m_iszDetailSpriteMaterial: string;
    m_bColdWorld: boolean;
}
export interface DT_WorldVguiText {
    m_bEnabled: boolean;
    m_szDisplayText: string;
    m_szDisplayTextOption: string;
    m_szFont: string;
    m_iTextPanelWidth: number;
    m_clrText: number;
}
export interface DT_DustTrail {
    m_SpawnRate: number;
    m_Color: Vector;
    m_ParticleLifetime: number;
    m_StopEmitTime: number;
    m_MinSpeed: number;
    m_MaxSpeed: number;
    m_MinDirectedSpeed: number;
    m_MaxDirectedSpeed: number;
    m_StartSize: number;
    m_EndSize: number;
    m_SpawnRadius: number;
    m_bEmit: boolean;
    m_Opacity: number;
}
export interface DT_MovieExplosion {
}
export interface DT_ParticleSmokeGrenade {
    m_flSpawnTime: number;
    m_FadeStartTime: number;
    m_FadeEndTime: number;
    m_MinColor: Vector;
    m_MaxColor: Vector;
    m_CurrentStage: boolean;
}
export interface DT_RocketTrail {
    m_SpawnRate: number;
    m_StartColor: Vector;
    m_EndColor: Vector;
    m_ParticleLifetime: number;
    m_StopEmitTime: number;
    m_MinSpeed: number;
    m_MaxSpeed: number;
    m_StartSize: number;
    m_EndSize: number;
    m_SpawnRadius: number;
    m_bEmit: boolean;
    m_nAttachment: number;
    m_Opacity: number;
    m_bDamaged: boolean;
    m_flFlareScale: number;
}
export interface DT_SmokeTrail {
    m_SpawnRate: number;
    m_StartColor: Vector;
    m_EndColor: Vector;
    m_ParticleLifetime: number;
    m_StopEmitTime: number;
    m_MinSpeed: number;
    m_MaxSpeed: number;
    m_MinDirectedSpeed: number;
    m_MaxDirectedSpeed: number;
    m_StartSize: number;
    m_EndSize: number;
    m_SpawnRadius: number;
    m_bEmit: boolean;
    m_nAttachment: number;
    m_Opacity: number;
}
export interface DT_SporeExplosion {
    m_flSpawnRate: number;
    m_flParticleLifetime: number;
    m_flStartSize: number;
    m_flEndSize: number;
    m_flSpawnRadius: number;
    m_bEmit: boolean;
    m_bDontRemove: boolean;
}
export interface DT_SporeTrail {
    m_flSpawnRate: number;
    m_vecEndColor: Vector;
    m_flParticleLifetime: number;
    m_flStartSize: number;
    m_flEndSize: number;
    m_flSpawnRadius: number;
    m_bEmit: boolean;
}
export interface DT_AnimTimeMustBeFirst {
    m_flAnimTime: number;
}
export interface DT_CollisionProperty {
    m_vecMins: Vector;
    m_vecMaxs: Vector;
    m_nSolidType: number;
    m_usSolidFlags: number;
    m_nSurroundType: number;
    m_triggerBloat: number;
    m_vecSpecifiedSurroundingMins: Vector;
    m_vecSpecifiedSurroundingMaxs: Vector;
}
export interface m_bSpottedByMask {
    ["000"]: number;
    ["001"]: number;
}
export interface m_flPoseParameter {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
}
export interface m_flEncodedController {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
}
export interface DT_ServerAnimationData {
    m_flCycle: number;
}
export interface DT_OverlayVars {
}
export interface _ST_m_AnimOverlay_15 {
}
export interface _LPT_m_AnimOverlay_15 {
    lengthprop15: number;
}
export interface DT_Animationlayer {
    m_nSequence: number;
    m_flCycle: number;
    m_flPlaybackRate: number;
    m_flPrevCycle: number;
    m_flWeight: number;
    m_flWeightDeltaRate: number;
    m_nOrder: number;
}
export interface m_flexWeight {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
    ["065"]: number;
    ["066"]: number;
    ["067"]: number;
    ["068"]: number;
    ["069"]: number;
    ["070"]: number;
    ["071"]: number;
    ["072"]: number;
    ["073"]: number;
    ["074"]: number;
    ["075"]: number;
    ["076"]: number;
    ["077"]: number;
    ["078"]: number;
    ["079"]: number;
    ["080"]: number;
    ["081"]: number;
    ["082"]: number;
    ["083"]: number;
    ["084"]: number;
    ["085"]: number;
    ["086"]: number;
    ["087"]: number;
    ["088"]: number;
    ["089"]: number;
    ["090"]: number;
    ["091"]: number;
    ["092"]: number;
    ["093"]: number;
    ["094"]: number;
    ["095"]: number;
}
export interface DT_BCCLocalPlayerExclusive {
    m_flNextAttack: number;
}
export interface DT_BCCNonLocalPlayerExclusive {
}
export interface m_hMyWeapons {
    ["000"]: EntityHandle;
    ["001"]: EntityHandle;
    ["002"]: EntityHandle;
    ["003"]: EntityHandle;
    ["004"]: EntityHandle;
    ["005"]: EntityHandle;
    ["006"]: EntityHandle;
    ["007"]: EntityHandle;
    ["008"]: EntityHandle;
    ["009"]: EntityHandle;
    ["010"]: EntityHandle;
    ["011"]: EntityHandle;
    ["012"]: EntityHandle;
    ["013"]: EntityHandle;
    ["014"]: EntityHandle;
    ["015"]: EntityHandle;
    ["016"]: EntityHandle;
    ["017"]: EntityHandle;
    ["018"]: EntityHandle;
    ["019"]: EntityHandle;
    ["020"]: EntityHandle;
    ["021"]: EntityHandle;
    ["022"]: EntityHandle;
    ["023"]: EntityHandle;
    ["024"]: EntityHandle;
    ["025"]: EntityHandle;
    ["026"]: EntityHandle;
    ["027"]: EntityHandle;
    ["028"]: EntityHandle;
    ["029"]: EntityHandle;
    ["030"]: EntityHandle;
    ["031"]: EntityHandle;
    ["032"]: EntityHandle;
    ["033"]: EntityHandle;
    ["034"]: EntityHandle;
    ["035"]: EntityHandle;
    ["036"]: EntityHandle;
    ["037"]: EntityHandle;
    ["038"]: EntityHandle;
    ["039"]: EntityHandle;
    ["040"]: EntityHandle;
    ["041"]: EntityHandle;
    ["042"]: EntityHandle;
    ["043"]: EntityHandle;
    ["044"]: EntityHandle;
    ["045"]: EntityHandle;
    ["046"]: EntityHandle;
    ["047"]: EntityHandle;
    ["048"]: EntityHandle;
    ["049"]: EntityHandle;
    ["050"]: EntityHandle;
    ["051"]: EntityHandle;
    ["052"]: EntityHandle;
    ["053"]: EntityHandle;
    ["054"]: EntityHandle;
    ["055"]: EntityHandle;
    ["056"]: EntityHandle;
    ["057"]: EntityHandle;
    ["058"]: EntityHandle;
    ["059"]: EntityHandle;
    ["060"]: EntityHandle;
    ["061"]: EntityHandle;
    ["062"]: EntityHandle;
    ["063"]: EntityHandle;
}
export interface m_hMyWearables {
    ["000"]: EntityHandle;
}
export interface DT_AttributeContainer {
    m_hOuter: EntityHandle;
    m_ProviderType: number;
    m_iReapplyProvisionParity: number;
}
export interface DT_ScriptCreatedItem {
    m_iItemDefinitionIndex: number;
    m_iEntityLevel: number;
    m_iItemIDHigh: number;
    m_iItemIDLow: number;
    m_iAccountID: number;
    m_iEntityQuality: number;
    m_bInitialized: boolean;
    m_szCustomName: string;
}
export interface DT_AttributeList {
}
export interface _ST_m_Attributes_32 {
}
export interface _LPT_m_Attributes_32 {
    lengthprop32: number;
}
export interface DT_ScriptCreatedAttribute {
    m_iAttributeDefinitionIndex: number;
    m_iRawValue32: number;
    m_iRawInitialValue32: number;
    m_nRefundableCurrency: number;
    m_bSetBonus: boolean;
}
export interface DT_LocalWeaponData {
    m_iPrimaryAmmoType: number;
    m_iSecondaryAmmoType: number;
    m_nViewModelIndex: number;
    m_bFlipViewModel: number;
    m_iWeaponOrigin: number;
    m_iWeaponModule: number;
}
export interface DT_LocalActiveWeaponData {
    m_flNextPrimaryAttack: number;
    m_flNextSecondaryAttack: number;
    m_nNextThinkTick: number;
    m_flTimeWeaponIdle: number;
}
export interface DT_PlayerState {
    deadflag: boolean;
}
export interface m_iAmmo {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
}
export interface DT_LocalPlayerExclusive {
    ["m_vecViewOffset[0]"]: number;
    ["m_vecViewOffset[1]"]: number;
    ["m_vecViewOffset[2]"]: number;
    m_flFriction: number;
    m_fOnTarget: number;
    m_nTickBase: number;
    m_nNextThinkTick: number;
    m_hLastWeapon: EntityHandle;
    ["m_vecVelocity[0]"]: number;
    ["m_vecVelocity[1]"]: number;
    ["m_vecVelocity[2]"]: number;
    m_vecBaseVelocity: Vector;
    m_hConstraintEntity: EntityHandle;
    m_vecConstraintCenter: Vector;
    m_flConstraintRadius: number;
    m_flConstraintWidth: number;
    m_flConstraintSpeedFactor: number;
    m_bConstraintPastRadius: boolean;
    m_flDeathTime: number;
    m_flNextDecalTime: number;
    m_fForceTeam: number;
    m_flLaggedMovementValue: number;
    m_hTonemapController: EntityHandle;
}
export interface DT_Local {
    m_iHideHUD: number;
    m_flFOVRate: number;
    m_bDucked: boolean;
    m_bDucking: boolean;
    m_flLastDuckTime: number;
    m_bInDuckJump: boolean;
    m_nDuckTimeMsecs: number;
    m_nDuckJumpTimeMsecs: number;
    m_nJumpTimeMsecs: number;
    m_flFallVelocity: number;
    m_viewPunchAngle: Vector;
    m_aimPunchAngle: Vector;
    m_aimPunchAngleVel: Vector;
    m_bDrawViewmodel: boolean;
    m_bWearingSuit: boolean;
    m_bPoisoned: boolean;
    m_flStepSize: number;
    m_bAllowAutoMovement: boolean;
    ["m_skybox3d.scale"]: number;
    ["m_skybox3d.origin"]: Vector;
    ["m_skybox3d.area"]: number;
    ["m_skybox3d.fog.enable"]: boolean;
    ["m_skybox3d.fog.blend"]: boolean;
    ["m_skybox3d.fog.dirPrimary"]: Vector;
    ["m_skybox3d.fog.colorPrimary"]: number;
    ["m_skybox3d.fog.colorSecondary"]: number;
    ["m_skybox3d.fog.start"]: number;
    ["m_skybox3d.fog.end"]: number;
    ["m_skybox3d.fog.maxdensity"]: number;
    ["m_skybox3d.fog.HDRColorScale"]: number;
    ["m_audio.localSound[0]"]: Vector;
    ["m_audio.localSound[1]"]: Vector;
    ["m_audio.localSound[2]"]: Vector;
    ["m_audio.localSound[3]"]: Vector;
    ["m_audio.localSound[4]"]: Vector;
    ["m_audio.localSound[5]"]: Vector;
    ["m_audio.localSound[6]"]: Vector;
    ["m_audio.localSound[7]"]: Vector;
    ["m_audio.soundscapeIndex"]: number;
    ["m_audio.localBits"]: number;
    ["m_audio.entIndex"]: number;
}
export interface m_chAreaBits {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
}
export interface m_chAreaPortalBits {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
}
export interface m_bCPIsVisible {
    ["000"]: boolean;
    ["001"]: boolean;
    ["002"]: boolean;
    ["003"]: boolean;
    ["004"]: boolean;
    ["005"]: boolean;
    ["006"]: boolean;
    ["007"]: boolean;
}
export interface m_flLazyCapPerc {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
}
export interface m_iTeamIcons {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
}
export interface m_iTeamOverlays {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
}
export interface m_iTeamReqCappers {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
}
export interface m_flTeamCapTime {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
}
export interface m_iPreviousPoints {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
    ["065"]: number;
    ["066"]: number;
    ["067"]: number;
    ["068"]: number;
    ["069"]: number;
    ["070"]: number;
    ["071"]: number;
    ["072"]: number;
    ["073"]: number;
    ["074"]: number;
    ["075"]: number;
    ["076"]: number;
    ["077"]: number;
    ["078"]: number;
    ["079"]: number;
    ["080"]: number;
    ["081"]: number;
    ["082"]: number;
    ["083"]: number;
    ["084"]: number;
    ["085"]: number;
    ["086"]: number;
    ["087"]: number;
    ["088"]: number;
    ["089"]: number;
    ["090"]: number;
    ["091"]: number;
    ["092"]: number;
    ["093"]: number;
    ["094"]: number;
    ["095"]: number;
    ["096"]: number;
    ["097"]: number;
    ["098"]: number;
    ["099"]: number;
    ["100"]: number;
    ["101"]: number;
    ["102"]: number;
    ["103"]: number;
    ["104"]: number;
    ["105"]: number;
    ["106"]: number;
    ["107"]: number;
    ["108"]: number;
    ["109"]: number;
    ["110"]: number;
    ["111"]: number;
    ["112"]: number;
    ["113"]: number;
    ["114"]: number;
    ["115"]: number;
    ["116"]: number;
    ["117"]: number;
    ["118"]: number;
    ["119"]: number;
    ["120"]: number;
    ["121"]: number;
    ["122"]: number;
    ["123"]: number;
    ["124"]: number;
    ["125"]: number;
    ["126"]: number;
    ["127"]: number;
    ["128"]: number;
    ["129"]: number;
    ["130"]: number;
    ["131"]: number;
    ["132"]: number;
    ["133"]: number;
    ["134"]: number;
    ["135"]: number;
    ["136"]: number;
    ["137"]: number;
    ["138"]: number;
    ["139"]: number;
    ["140"]: number;
    ["141"]: number;
    ["142"]: number;
    ["143"]: number;
    ["144"]: number;
    ["145"]: number;
    ["146"]: number;
    ["147"]: number;
    ["148"]: number;
    ["149"]: number;
    ["150"]: number;
    ["151"]: number;
    ["152"]: number;
    ["153"]: number;
    ["154"]: number;
    ["155"]: number;
    ["156"]: number;
    ["157"]: number;
    ["158"]: number;
    ["159"]: number;
    ["160"]: number;
    ["161"]: number;
    ["162"]: number;
    ["163"]: number;
    ["164"]: number;
    ["165"]: number;
    ["166"]: number;
    ["167"]: number;
    ["168"]: number;
    ["169"]: number;
    ["170"]: number;
    ["171"]: number;
    ["172"]: number;
    ["173"]: number;
    ["174"]: number;
    ["175"]: number;
    ["176"]: number;
    ["177"]: number;
    ["178"]: number;
    ["179"]: number;
    ["180"]: number;
    ["181"]: number;
    ["182"]: number;
    ["183"]: number;
    ["184"]: number;
    ["185"]: number;
    ["186"]: number;
    ["187"]: number;
    ["188"]: number;
    ["189"]: number;
    ["190"]: number;
    ["191"]: number;
}
export interface m_bTeamCanCap {
    ["000"]: boolean;
    ["001"]: boolean;
    ["002"]: boolean;
    ["003"]: boolean;
    ["004"]: boolean;
    ["005"]: boolean;
    ["006"]: boolean;
    ["007"]: boolean;
    ["008"]: boolean;
    ["009"]: boolean;
    ["010"]: boolean;
    ["011"]: boolean;
    ["012"]: boolean;
    ["013"]: boolean;
    ["014"]: boolean;
    ["015"]: boolean;
    ["016"]: boolean;
    ["017"]: boolean;
    ["018"]: boolean;
    ["019"]: boolean;
    ["020"]: boolean;
    ["021"]: boolean;
    ["022"]: boolean;
    ["023"]: boolean;
    ["024"]: boolean;
    ["025"]: boolean;
    ["026"]: boolean;
    ["027"]: boolean;
    ["028"]: boolean;
    ["029"]: boolean;
    ["030"]: boolean;
    ["031"]: boolean;
    ["032"]: boolean;
    ["033"]: boolean;
    ["034"]: boolean;
    ["035"]: boolean;
    ["036"]: boolean;
    ["037"]: boolean;
    ["038"]: boolean;
    ["039"]: boolean;
    ["040"]: boolean;
    ["041"]: boolean;
    ["042"]: boolean;
    ["043"]: boolean;
    ["044"]: boolean;
    ["045"]: boolean;
    ["046"]: boolean;
    ["047"]: boolean;
    ["048"]: boolean;
    ["049"]: boolean;
    ["050"]: boolean;
    ["051"]: boolean;
    ["052"]: boolean;
    ["053"]: boolean;
    ["054"]: boolean;
    ["055"]: boolean;
    ["056"]: boolean;
    ["057"]: boolean;
    ["058"]: boolean;
    ["059"]: boolean;
    ["060"]: boolean;
    ["061"]: boolean;
    ["062"]: boolean;
    ["063"]: boolean;
}
export interface m_iTeamBaseIcons {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
}
export interface m_iBaseControlPoints {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
}
export interface m_bInMiniRound {
    ["000"]: boolean;
    ["001"]: boolean;
    ["002"]: boolean;
    ["003"]: boolean;
    ["004"]: boolean;
    ["005"]: boolean;
    ["006"]: boolean;
    ["007"]: boolean;
}
export interface m_iWarnOnCap {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
}
export interface m_flPathDistance {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
}
export interface m_iNumTeamMembers {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
}
export interface m_iCappingTeam {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
}
export interface m_iTeamInZone {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
}
export interface m_bBlocked {
    ["000"]: boolean;
    ["001"]: boolean;
    ["002"]: boolean;
    ["003"]: boolean;
    ["004"]: boolean;
    ["005"]: boolean;
    ["006"]: boolean;
    ["007"]: boolean;
}
export interface m_iOwner {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
}
export interface m_hAttachEntity {
    ["000"]: EntityHandle;
    ["001"]: EntityHandle;
    ["002"]: EntityHandle;
    ["003"]: EntityHandle;
    ["004"]: EntityHandle;
    ["005"]: EntityHandle;
    ["006"]: EntityHandle;
    ["007"]: EntityHandle;
    ["008"]: EntityHandle;
    ["009"]: EntityHandle;
}
export interface m_nAttachIndex {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
}
export interface m_RawPanelBitVec {
    ["000"]: boolean;
    ["001"]: boolean;
    ["002"]: boolean;
    ["003"]: boolean;
    ["004"]: boolean;
    ["005"]: boolean;
    ["006"]: boolean;
    ["007"]: boolean;
    ["008"]: boolean;
    ["009"]: boolean;
    ["010"]: boolean;
    ["011"]: boolean;
    ["012"]: boolean;
    ["013"]: boolean;
    ["014"]: boolean;
    ["015"]: boolean;
    ["016"]: boolean;
    ["017"]: boolean;
    ["018"]: boolean;
    ["019"]: boolean;
    ["020"]: boolean;
    ["021"]: boolean;
    ["022"]: boolean;
    ["023"]: boolean;
    ["024"]: boolean;
    ["025"]: boolean;
    ["026"]: boolean;
    ["027"]: boolean;
    ["028"]: boolean;
    ["029"]: boolean;
    ["030"]: boolean;
    ["031"]: boolean;
    ["032"]: boolean;
    ["033"]: boolean;
    ["034"]: boolean;
    ["035"]: boolean;
    ["036"]: boolean;
    ["037"]: boolean;
    ["038"]: boolean;
    ["039"]: boolean;
    ["040"]: boolean;
    ["041"]: boolean;
    ["042"]: boolean;
    ["043"]: boolean;
    ["044"]: boolean;
    ["045"]: boolean;
    ["046"]: boolean;
    ["047"]: boolean;
    ["048"]: boolean;
    ["049"]: boolean;
    ["050"]: boolean;
    ["051"]: boolean;
    ["052"]: boolean;
    ["053"]: boolean;
    ["054"]: boolean;
    ["055"]: boolean;
    ["056"]: boolean;
    ["057"]: boolean;
    ["058"]: boolean;
    ["059"]: boolean;
    ["060"]: boolean;
    ["061"]: boolean;
    ["062"]: boolean;
    ["063"]: boolean;
    ["064"]: boolean;
    ["065"]: boolean;
    ["066"]: boolean;
    ["067"]: boolean;
    ["068"]: boolean;
    ["069"]: boolean;
    ["070"]: boolean;
    ["071"]: boolean;
    ["072"]: boolean;
    ["073"]: boolean;
    ["074"]: boolean;
    ["075"]: boolean;
    ["076"]: boolean;
    ["077"]: boolean;
    ["078"]: boolean;
    ["079"]: boolean;
    ["080"]: boolean;
    ["081"]: boolean;
    ["082"]: boolean;
    ["083"]: boolean;
    ["084"]: boolean;
    ["085"]: boolean;
    ["086"]: boolean;
    ["087"]: boolean;
    ["088"]: boolean;
    ["089"]: boolean;
    ["090"]: boolean;
    ["091"]: boolean;
    ["092"]: boolean;
    ["093"]: boolean;
    ["094"]: boolean;
    ["095"]: boolean;
    ["096"]: boolean;
    ["097"]: boolean;
    ["098"]: boolean;
    ["099"]: boolean;
    ["100"]: boolean;
    ["101"]: boolean;
    ["102"]: boolean;
    ["103"]: boolean;
    ["104"]: boolean;
    ["105"]: boolean;
    ["106"]: boolean;
    ["107"]: boolean;
    ["108"]: boolean;
    ["109"]: boolean;
    ["110"]: boolean;
    ["111"]: boolean;
    ["112"]: boolean;
    ["113"]: boolean;
    ["114"]: boolean;
    ["115"]: boolean;
    ["116"]: boolean;
    ["117"]: boolean;
    ["118"]: boolean;
    ["119"]: boolean;
    ["120"]: boolean;
    ["121"]: boolean;
    ["122"]: boolean;
    ["123"]: boolean;
    ["124"]: boolean;
    ["125"]: boolean;
    ["126"]: boolean;
    ["127"]: boolean;
    ["128"]: boolean;
    ["129"]: boolean;
    ["130"]: boolean;
    ["131"]: boolean;
    ["132"]: boolean;
    ["133"]: boolean;
    ["134"]: boolean;
    ["135"]: boolean;
    ["136"]: boolean;
    ["137"]: boolean;
    ["138"]: boolean;
    ["139"]: boolean;
    ["140"]: boolean;
    ["141"]: boolean;
    ["142"]: boolean;
    ["143"]: boolean;
    ["144"]: boolean;
    ["145"]: boolean;
    ["146"]: boolean;
    ["147"]: boolean;
    ["148"]: boolean;
    ["149"]: boolean;
    ["150"]: boolean;
    ["151"]: boolean;
    ["152"]: boolean;
    ["153"]: boolean;
    ["154"]: boolean;
    ["155"]: boolean;
    ["156"]: boolean;
    ["157"]: boolean;
    ["158"]: boolean;
    ["159"]: boolean;
    ["160"]: boolean;
    ["161"]: boolean;
    ["162"]: boolean;
    ["163"]: boolean;
    ["164"]: boolean;
    ["165"]: boolean;
    ["166"]: boolean;
    ["167"]: boolean;
    ["168"]: boolean;
    ["169"]: boolean;
    ["170"]: boolean;
    ["171"]: boolean;
    ["172"]: boolean;
    ["173"]: boolean;
    ["174"]: boolean;
    ["175"]: boolean;
    ["176"]: boolean;
    ["177"]: boolean;
    ["178"]: boolean;
    ["179"]: boolean;
    ["180"]: boolean;
    ["181"]: boolean;
    ["182"]: boolean;
    ["183"]: boolean;
    ["184"]: boolean;
    ["185"]: boolean;
    ["186"]: boolean;
    ["187"]: boolean;
    ["188"]: boolean;
    ["189"]: boolean;
    ["190"]: boolean;
    ["191"]: boolean;
    ["192"]: boolean;
    ["193"]: boolean;
    ["194"]: boolean;
    ["195"]: boolean;
    ["196"]: boolean;
    ["197"]: boolean;
    ["198"]: boolean;
    ["199"]: boolean;
    ["200"]: boolean;
    ["201"]: boolean;
    ["202"]: boolean;
    ["203"]: boolean;
    ["204"]: boolean;
    ["205"]: boolean;
    ["206"]: boolean;
    ["207"]: boolean;
    ["208"]: boolean;
    ["209"]: boolean;
    ["210"]: boolean;
    ["211"]: boolean;
    ["212"]: boolean;
    ["213"]: boolean;
    ["214"]: boolean;
    ["215"]: boolean;
    ["216"]: boolean;
    ["217"]: boolean;
    ["218"]: boolean;
    ["219"]: boolean;
    ["220"]: boolean;
    ["221"]: boolean;
    ["222"]: boolean;
    ["223"]: boolean;
    ["224"]: boolean;
    ["225"]: boolean;
    ["226"]: boolean;
    ["227"]: boolean;
    ["228"]: boolean;
    ["229"]: boolean;
    ["230"]: boolean;
    ["231"]: boolean;
    ["232"]: boolean;
    ["233"]: boolean;
    ["234"]: boolean;
    ["235"]: boolean;
    ["236"]: boolean;
    ["237"]: boolean;
    ["238"]: boolean;
    ["239"]: boolean;
    ["240"]: boolean;
    ["241"]: boolean;
    ["242"]: boolean;
    ["243"]: boolean;
    ["244"]: boolean;
    ["245"]: boolean;
    ["246"]: boolean;
    ["247"]: boolean;
    ["248"]: boolean;
    ["249"]: boolean;
    ["250"]: boolean;
    ["251"]: boolean;
    ["252"]: boolean;
    ["253"]: boolean;
    ["254"]: boolean;
    ["255"]: boolean;
}
export interface DT_CSGameRules {
    m_bFreezePeriod: boolean;
    m_bMatchWaitingForResume: boolean;
    m_bWarmupPeriod: boolean;
    m_fWarmupPeriodEnd: number;
    m_fWarmupPeriodStart: number;
    m_bTerroristTimeOutActive: boolean;
    m_bCTTimeOutActive: boolean;
    m_flTerroristTimeOutRemaining: number;
    m_flCTTimeOutRemaining: number;
    m_nTerroristTimeOuts: number;
    m_nCTTimeOuts: number;
    m_iRoundTime: number;
    m_gamePhase: number;
    m_totalRoundsPlayed: number;
    m_nOvertimePlaying: number;
    m_timeUntilNextPhaseStarts: number;
    m_flCMMItemDropRevealStartTime: number;
    m_flCMMItemDropRevealEndTime: number;
    m_fRoundStartTime: number;
    m_flRestartRoundTime: number;
    m_bGameRestart: boolean;
    m_flGameStartTime: number;
    m_iHostagesRemaining: number;
    m_bAnyHostageReached: boolean;
    m_bMapHasBombTarget: boolean;
    m_bMapHasRescueZone: boolean;
    m_bMapHasBuyZone: boolean;
    m_bIsQueuedMatchmaking: boolean;
    m_bIsValveDS: boolean;
    m_bIsQuestEligible: boolean;
    m_bLogoMap: boolean;
    m_bPlayAllStepSoundsOnServer: boolean;
    m_iNumGunGameProgressiveWeaponsCT: number;
    m_iNumGunGameProgressiveWeaponsT: number;
    m_iSpectatorSlotCount: number;
    m_bBombDropped: boolean;
    m_bBombPlanted: boolean;
    m_iRoundWinStatus: number;
    m_eRoundWinReason: number;
    m_flDMBonusStartTime: number;
    m_flDMBonusTimeLength: number;
    m_unDMBonusWeaponLoadoutSlot: number;
    m_bDMBonusActive: boolean;
    m_bTCantBuy: boolean;
    m_bCTCantBuy: boolean;
    m_flGuardianBuyUntilTime: number;
    m_MatchDevice: number;
    m_bHasMatchStarted: boolean;
    m_nNextMapInMapgroup: number;
    m_nEndMatchMapVoteWinner: number;
    m_bIsDroppingItems: boolean;
    m_iActiveAssassinationTargetMissionID: number;
    m_fMatchStartTime: number;
    m_szTournamentEventName: string;
    m_szTournamentEventStage: string;
    m_szTournamentPredictionsTxt: string;
    m_nTournamentPredictionsPct: number;
    m_szMatchStatTxt: string;
    m_nGuardianModeWaveNumber: number;
    m_nGuardianModeSpecialKillsRemaining: number;
    m_nGuardianModeSpecialWeaponNeeded: number;
    m_nHalloweenMaskListSeed: number;
    m_numGlobalGiftsGiven: number;
    m_numGlobalGifters: number;
    m_numGlobalGiftsPeriodSeconds: number;
    m_numBestOfMaps: number;
    m_iNumConsecutiveCTLoses: number;
    m_iNumConsecutiveTerroristLoses: number;
}
export interface m_iMatchStats_RoundResults {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
}
export interface m_iMatchStats_PlayersAlive_T {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
}
export interface m_iMatchStats_PlayersAlive_CT {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
}
export interface m_GGProgressiveWeaponOrderCT {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
}
export interface m_GGProgressiveWeaponOrderT {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
}
export interface m_GGProgressiveWeaponKillUpgradeOrderCT {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
}
export interface m_GGProgressiveWeaponKillUpgradeOrderT {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
}
export interface m_TeamRespawnWaveTimes {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
}
export interface m_flNextRespawnWave {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
}
export interface m_nEndMatchMapGroupVoteTypes {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
}
export interface m_nEndMatchMapGroupVoteOptions {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
}
export interface m_arrFeaturedGiftersAccounts {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
}
export interface m_arrFeaturedGiftersGifts {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
}
export interface m_arrProhibitedItemIndices {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
    ["065"]: number;
    ["066"]: number;
    ["067"]: number;
    ["068"]: number;
    ["069"]: number;
    ["070"]: number;
    ["071"]: number;
    ["072"]: number;
    ["073"]: number;
    ["074"]: number;
    ["075"]: number;
    ["076"]: number;
    ["077"]: number;
    ["078"]: number;
    ["079"]: number;
    ["080"]: number;
    ["081"]: number;
    ["082"]: number;
    ["083"]: number;
    ["084"]: number;
    ["085"]: number;
    ["086"]: number;
    ["087"]: number;
    ["088"]: number;
    ["089"]: number;
    ["090"]: number;
    ["091"]: number;
    ["092"]: number;
    ["093"]: number;
    ["094"]: number;
    ["095"]: number;
    ["096"]: number;
    ["097"]: number;
    ["098"]: number;
    ["099"]: number;
}
export interface m_arrTournamentActiveCasterAccounts {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
}
export interface DT_SurvivalGameRules {
    m_vecPlayAreaMins: Vector;
    m_vecPlayAreaMaxs: Vector;
    m_flSpawnSelectionTimeStart: number;
    m_flSpawnSelectionTimeEnd: number;
    m_flSpawnSelectionTimeLoadout: number;
    m_spawnStage: number;
    m_flTabletHexOriginX: number;
    m_flTabletHexOriginY: number;
    m_flTabletHexSize: number;
    m_flSurvivalStartTime: number;
}
export interface m_iPlayerSpawnHexIndices {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
}
export interface m_SpawnTileState {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
    ["065"]: number;
    ["066"]: number;
    ["067"]: number;
    ["068"]: number;
    ["069"]: number;
    ["070"]: number;
    ["071"]: number;
    ["072"]: number;
    ["073"]: number;
    ["074"]: number;
    ["075"]: number;
    ["076"]: number;
    ["077"]: number;
    ["078"]: number;
    ["079"]: number;
    ["080"]: number;
    ["081"]: number;
    ["082"]: number;
    ["083"]: number;
    ["084"]: number;
    ["085"]: number;
    ["086"]: number;
    ["087"]: number;
    ["088"]: number;
    ["089"]: number;
    ["090"]: number;
    ["091"]: number;
    ["092"]: number;
    ["093"]: number;
    ["094"]: number;
    ["095"]: number;
    ["096"]: number;
    ["097"]: number;
    ["098"]: number;
    ["099"]: number;
    ["100"]: number;
    ["101"]: number;
    ["102"]: number;
    ["103"]: number;
    ["104"]: number;
    ["105"]: number;
    ["106"]: number;
    ["107"]: number;
    ["108"]: number;
    ["109"]: number;
    ["110"]: number;
    ["111"]: number;
    ["112"]: number;
    ["113"]: number;
    ["114"]: number;
    ["115"]: number;
    ["116"]: number;
    ["117"]: number;
    ["118"]: number;
    ["119"]: number;
    ["120"]: number;
    ["121"]: number;
    ["122"]: number;
    ["123"]: number;
    ["124"]: number;
    ["125"]: number;
    ["126"]: number;
    ["127"]: number;
    ["128"]: number;
    ["129"]: number;
    ["130"]: number;
    ["131"]: number;
    ["132"]: number;
    ["133"]: number;
    ["134"]: number;
    ["135"]: number;
    ["136"]: number;
    ["137"]: number;
    ["138"]: number;
    ["139"]: number;
    ["140"]: number;
    ["141"]: number;
    ["142"]: number;
    ["143"]: number;
    ["144"]: number;
    ["145"]: number;
    ["146"]: number;
    ["147"]: number;
    ["148"]: number;
    ["149"]: number;
    ["150"]: number;
    ["151"]: number;
    ["152"]: number;
    ["153"]: number;
    ["154"]: number;
    ["155"]: number;
    ["156"]: number;
    ["157"]: number;
    ["158"]: number;
    ["159"]: number;
    ["160"]: number;
    ["161"]: number;
    ["162"]: number;
    ["163"]: number;
    ["164"]: number;
    ["165"]: number;
    ["166"]: number;
    ["167"]: number;
    ["168"]: number;
    ["169"]: number;
    ["170"]: number;
    ["171"]: number;
    ["172"]: number;
    ["173"]: number;
    ["174"]: number;
    ["175"]: number;
    ["176"]: number;
    ["177"]: number;
    ["178"]: number;
    ["179"]: number;
    ["180"]: number;
    ["181"]: number;
    ["182"]: number;
    ["183"]: number;
    ["184"]: number;
    ["185"]: number;
    ["186"]: number;
    ["187"]: number;
    ["188"]: number;
    ["189"]: number;
    ["190"]: number;
    ["191"]: number;
    ["192"]: number;
    ["193"]: number;
    ["194"]: number;
    ["195"]: number;
    ["196"]: number;
    ["197"]: number;
    ["198"]: number;
    ["199"]: number;
    ["200"]: number;
    ["201"]: number;
    ["202"]: number;
    ["203"]: number;
    ["204"]: number;
    ["205"]: number;
    ["206"]: number;
    ["207"]: number;
    ["208"]: number;
    ["209"]: number;
    ["210"]: number;
    ["211"]: number;
    ["212"]: number;
    ["213"]: number;
    ["214"]: number;
    ["215"]: number;
    ["216"]: number;
    ["217"]: number;
    ["218"]: number;
    ["219"]: number;
    ["220"]: number;
    ["221"]: number;
    ["222"]: number;
    ["223"]: number;
}
export interface m_roundData_playerXuids {
    ["000"]: Long;
    ["001"]: Long;
    ["002"]: Long;
    ["003"]: Long;
    ["004"]: Long;
    ["005"]: Long;
    ["006"]: Long;
    ["007"]: Long;
    ["008"]: Long;
    ["009"]: Long;
    ["010"]: Long;
    ["011"]: Long;
    ["012"]: Long;
    ["013"]: Long;
    ["014"]: Long;
    ["015"]: Long;
    ["016"]: Long;
    ["017"]: Long;
    ["018"]: Long;
    ["019"]: Long;
    ["020"]: Long;
    ["021"]: Long;
    ["022"]: Long;
    ["023"]: Long;
    ["024"]: Long;
    ["025"]: Long;
    ["026"]: Long;
    ["027"]: Long;
    ["028"]: Long;
    ["029"]: Long;
    ["030"]: Long;
    ["031"]: Long;
    ["032"]: Long;
    ["033"]: Long;
    ["034"]: Long;
    ["035"]: Long;
    ["036"]: Long;
    ["037"]: Long;
    ["038"]: Long;
    ["039"]: Long;
    ["040"]: Long;
    ["041"]: Long;
    ["042"]: Long;
    ["043"]: Long;
    ["044"]: Long;
    ["045"]: Long;
    ["046"]: Long;
    ["047"]: Long;
    ["048"]: Long;
    ["049"]: Long;
    ["050"]: Long;
    ["051"]: Long;
    ["052"]: Long;
    ["053"]: Long;
    ["054"]: Long;
    ["055"]: Long;
    ["056"]: Long;
    ["057"]: Long;
    ["058"]: Long;
    ["059"]: Long;
    ["060"]: Long;
    ["061"]: Long;
    ["062"]: Long;
    ["063"]: Long;
    ["064"]: Long;
}
export interface m_roundData_playerPositions {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_roundData_playerTeams {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_SurvivalGameRuleDecisionTypes {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
}
export interface m_SurvivalGameRuleDecisionValues {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
}
export interface DT_CSLocalPlayerExclusive {
    m_vecOrigin: Vector;
    ["m_vecOrigin[2]"]: number;
    m_flStamina: number;
    m_iDirection: boolean;
    m_iShotsFired: number;
    m_nNumFastDucks: number;
    m_bDuckOverride: boolean;
    m_flVelocityModifier: number;
    m_unActiveQuestId: number;
    m_nQuestProgressReason: number;
}
export interface m_bPlayerDominated {
    ["000"]: boolean;
    ["001"]: boolean;
    ["002"]: boolean;
    ["003"]: boolean;
    ["004"]: boolean;
    ["005"]: boolean;
    ["006"]: boolean;
    ["007"]: boolean;
    ["008"]: boolean;
    ["009"]: boolean;
    ["010"]: boolean;
    ["011"]: boolean;
    ["012"]: boolean;
    ["013"]: boolean;
    ["014"]: boolean;
    ["015"]: boolean;
    ["016"]: boolean;
    ["017"]: boolean;
    ["018"]: boolean;
    ["019"]: boolean;
    ["020"]: boolean;
    ["021"]: boolean;
    ["022"]: boolean;
    ["023"]: boolean;
    ["024"]: boolean;
    ["025"]: boolean;
    ["026"]: boolean;
    ["027"]: boolean;
    ["028"]: boolean;
    ["029"]: boolean;
    ["030"]: boolean;
    ["031"]: boolean;
    ["032"]: boolean;
    ["033"]: boolean;
    ["034"]: boolean;
    ["035"]: boolean;
    ["036"]: boolean;
    ["037"]: boolean;
    ["038"]: boolean;
    ["039"]: boolean;
    ["040"]: boolean;
    ["041"]: boolean;
    ["042"]: boolean;
    ["043"]: boolean;
    ["044"]: boolean;
    ["045"]: boolean;
    ["046"]: boolean;
    ["047"]: boolean;
    ["048"]: boolean;
    ["049"]: boolean;
    ["050"]: boolean;
    ["051"]: boolean;
    ["052"]: boolean;
    ["053"]: boolean;
    ["054"]: boolean;
    ["055"]: boolean;
    ["056"]: boolean;
    ["057"]: boolean;
    ["058"]: boolean;
    ["059"]: boolean;
    ["060"]: boolean;
    ["061"]: boolean;
    ["062"]: boolean;
    ["063"]: boolean;
    ["064"]: boolean;
}
export interface m_bPlayerDominatingMe {
    ["000"]: boolean;
    ["001"]: boolean;
    ["002"]: boolean;
    ["003"]: boolean;
    ["004"]: boolean;
    ["005"]: boolean;
    ["006"]: boolean;
    ["007"]: boolean;
    ["008"]: boolean;
    ["009"]: boolean;
    ["010"]: boolean;
    ["011"]: boolean;
    ["012"]: boolean;
    ["013"]: boolean;
    ["014"]: boolean;
    ["015"]: boolean;
    ["016"]: boolean;
    ["017"]: boolean;
    ["018"]: boolean;
    ["019"]: boolean;
    ["020"]: boolean;
    ["021"]: boolean;
    ["022"]: boolean;
    ["023"]: boolean;
    ["024"]: boolean;
    ["025"]: boolean;
    ["026"]: boolean;
    ["027"]: boolean;
    ["028"]: boolean;
    ["029"]: boolean;
    ["030"]: boolean;
    ["031"]: boolean;
    ["032"]: boolean;
    ["033"]: boolean;
    ["034"]: boolean;
    ["035"]: boolean;
    ["036"]: boolean;
    ["037"]: boolean;
    ["038"]: boolean;
    ["039"]: boolean;
    ["040"]: boolean;
    ["041"]: boolean;
    ["042"]: boolean;
    ["043"]: boolean;
    ["044"]: boolean;
    ["045"]: boolean;
    ["046"]: boolean;
    ["047"]: boolean;
    ["048"]: boolean;
    ["049"]: boolean;
    ["050"]: boolean;
    ["051"]: boolean;
    ["052"]: boolean;
    ["053"]: boolean;
    ["054"]: boolean;
    ["055"]: boolean;
    ["056"]: boolean;
    ["057"]: boolean;
    ["058"]: boolean;
    ["059"]: boolean;
    ["060"]: boolean;
    ["061"]: boolean;
    ["062"]: boolean;
    ["063"]: boolean;
    ["064"]: boolean;
}
export interface m_iWeaponPurchasesThisRound {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
    ["065"]: number;
    ["066"]: number;
    ["067"]: number;
    ["068"]: number;
    ["069"]: number;
    ["070"]: number;
    ["071"]: number;
    ["072"]: number;
    ["073"]: number;
    ["074"]: number;
    ["075"]: number;
    ["076"]: number;
    ["077"]: number;
    ["078"]: number;
    ["079"]: number;
    ["080"]: number;
    ["081"]: number;
    ["082"]: number;
    ["083"]: number;
    ["084"]: number;
    ["085"]: number;
    ["086"]: number;
    ["087"]: number;
    ["088"]: number;
    ["089"]: number;
    ["090"]: number;
    ["091"]: number;
    ["092"]: number;
    ["093"]: number;
    ["094"]: number;
    ["095"]: number;
    ["096"]: number;
    ["097"]: number;
    ["098"]: number;
    ["099"]: number;
    ["100"]: number;
    ["101"]: number;
    ["102"]: number;
    ["103"]: number;
    ["104"]: number;
    ["105"]: number;
    ["106"]: number;
    ["107"]: number;
    ["108"]: number;
    ["109"]: number;
    ["110"]: number;
    ["111"]: number;
    ["112"]: number;
    ["113"]: number;
    ["114"]: number;
    ["115"]: number;
    ["116"]: number;
    ["117"]: number;
    ["118"]: number;
    ["119"]: number;
    ["120"]: number;
    ["121"]: number;
    ["122"]: number;
    ["123"]: number;
    ["124"]: number;
    ["125"]: number;
    ["126"]: number;
    ["127"]: number;
    ["128"]: number;
    ["129"]: number;
    ["130"]: number;
    ["131"]: number;
    ["132"]: number;
    ["133"]: number;
    ["134"]: number;
    ["135"]: number;
    ["136"]: number;
    ["137"]: number;
    ["138"]: number;
    ["139"]: number;
    ["140"]: number;
    ["141"]: number;
    ["142"]: number;
    ["143"]: number;
    ["144"]: number;
    ["145"]: number;
    ["146"]: number;
    ["147"]: number;
    ["148"]: number;
    ["149"]: number;
    ["150"]: number;
    ["151"]: number;
    ["152"]: number;
    ["153"]: number;
    ["154"]: number;
    ["155"]: number;
    ["156"]: number;
    ["157"]: number;
    ["158"]: number;
    ["159"]: number;
    ["160"]: number;
    ["161"]: number;
    ["162"]: number;
    ["163"]: number;
    ["164"]: number;
    ["165"]: number;
    ["166"]: number;
    ["167"]: number;
    ["168"]: number;
    ["169"]: number;
    ["170"]: number;
    ["171"]: number;
    ["172"]: number;
    ["173"]: number;
    ["174"]: number;
    ["175"]: number;
    ["176"]: number;
    ["177"]: number;
    ["178"]: number;
    ["179"]: number;
    ["180"]: number;
    ["181"]: number;
    ["182"]: number;
    ["183"]: number;
    ["184"]: number;
    ["185"]: number;
    ["186"]: number;
    ["187"]: number;
    ["188"]: number;
    ["189"]: number;
    ["190"]: number;
    ["191"]: number;
    ["192"]: number;
    ["193"]: number;
    ["194"]: number;
    ["195"]: number;
    ["196"]: number;
    ["197"]: number;
    ["198"]: number;
    ["199"]: number;
    ["200"]: number;
    ["201"]: number;
    ["202"]: number;
    ["203"]: number;
    ["204"]: number;
    ["205"]: number;
    ["206"]: number;
    ["207"]: number;
    ["208"]: number;
    ["209"]: number;
    ["210"]: number;
    ["211"]: number;
    ["212"]: number;
    ["213"]: number;
    ["214"]: number;
    ["215"]: number;
    ["216"]: number;
    ["217"]: number;
    ["218"]: number;
    ["219"]: number;
    ["220"]: number;
    ["221"]: number;
    ["222"]: number;
    ["223"]: number;
    ["224"]: number;
    ["225"]: number;
    ["226"]: number;
    ["227"]: number;
    ["228"]: number;
    ["229"]: number;
    ["230"]: number;
    ["231"]: number;
    ["232"]: number;
    ["233"]: number;
    ["234"]: number;
    ["235"]: number;
    ["236"]: number;
    ["237"]: number;
    ["238"]: number;
    ["239"]: number;
    ["240"]: number;
    ["241"]: number;
    ["242"]: number;
    ["243"]: number;
    ["244"]: number;
    ["245"]: number;
    ["246"]: number;
    ["247"]: number;
    ["248"]: number;
    ["249"]: number;
    ["250"]: number;
    ["251"]: number;
    ["252"]: number;
    ["253"]: number;
    ["254"]: number;
    ["255"]: number;
}
export interface DT_CSNonLocalPlayerExclusive {
    m_vecOrigin: Vector;
    ["m_vecOrigin[2]"]: number;
}
export interface DT_CSTeamExclusive {
}
export interface m_iWeaponPurchasesThisMatch {
    ["000"]: boolean;
    ["001"]: boolean;
    ["002"]: boolean;
    ["003"]: boolean;
    ["004"]: boolean;
    ["005"]: boolean;
    ["006"]: boolean;
    ["007"]: boolean;
    ["008"]: boolean;
    ["009"]: boolean;
    ["010"]: boolean;
    ["011"]: boolean;
    ["012"]: boolean;
    ["013"]: boolean;
    ["014"]: boolean;
    ["015"]: boolean;
    ["016"]: boolean;
    ["017"]: boolean;
    ["018"]: boolean;
    ["019"]: boolean;
    ["020"]: boolean;
    ["021"]: boolean;
    ["022"]: boolean;
    ["023"]: boolean;
    ["024"]: boolean;
    ["025"]: boolean;
    ["026"]: boolean;
    ["027"]: boolean;
    ["028"]: boolean;
    ["029"]: boolean;
    ["030"]: boolean;
    ["031"]: boolean;
    ["032"]: boolean;
    ["033"]: boolean;
    ["034"]: boolean;
    ["035"]: boolean;
    ["036"]: boolean;
    ["037"]: boolean;
    ["038"]: boolean;
    ["039"]: boolean;
    ["040"]: boolean;
    ["041"]: boolean;
    ["042"]: boolean;
    ["043"]: boolean;
    ["044"]: boolean;
    ["045"]: boolean;
    ["046"]: boolean;
    ["047"]: boolean;
    ["048"]: boolean;
    ["049"]: boolean;
    ["050"]: boolean;
    ["051"]: boolean;
    ["052"]: boolean;
    ["053"]: boolean;
    ["054"]: boolean;
    ["055"]: boolean;
    ["056"]: boolean;
    ["057"]: boolean;
    ["058"]: boolean;
    ["059"]: boolean;
    ["060"]: boolean;
    ["061"]: boolean;
    ["062"]: boolean;
    ["063"]: boolean;
    ["064"]: boolean;
    ["065"]: boolean;
    ["066"]: boolean;
    ["067"]: boolean;
    ["068"]: boolean;
    ["069"]: boolean;
    ["070"]: boolean;
    ["071"]: boolean;
    ["072"]: boolean;
    ["073"]: boolean;
    ["074"]: boolean;
    ["075"]: boolean;
    ["076"]: boolean;
    ["077"]: boolean;
    ["078"]: boolean;
    ["079"]: boolean;
    ["080"]: boolean;
    ["081"]: boolean;
    ["082"]: boolean;
    ["083"]: boolean;
    ["084"]: boolean;
    ["085"]: boolean;
    ["086"]: boolean;
    ["087"]: boolean;
    ["088"]: boolean;
    ["089"]: boolean;
    ["090"]: boolean;
    ["091"]: boolean;
    ["092"]: boolean;
    ["093"]: boolean;
    ["094"]: boolean;
    ["095"]: boolean;
    ["096"]: boolean;
    ["097"]: boolean;
    ["098"]: boolean;
    ["099"]: boolean;
    ["100"]: boolean;
    ["101"]: boolean;
    ["102"]: boolean;
    ["103"]: boolean;
    ["104"]: boolean;
    ["105"]: boolean;
    ["106"]: boolean;
    ["107"]: boolean;
    ["108"]: boolean;
    ["109"]: boolean;
    ["110"]: boolean;
    ["111"]: boolean;
    ["112"]: boolean;
    ["113"]: boolean;
    ["114"]: boolean;
    ["115"]: boolean;
    ["116"]: boolean;
    ["117"]: boolean;
    ["118"]: boolean;
    ["119"]: boolean;
    ["120"]: boolean;
    ["121"]: boolean;
    ["122"]: boolean;
    ["123"]: boolean;
    ["124"]: boolean;
    ["125"]: boolean;
    ["126"]: boolean;
    ["127"]: boolean;
    ["128"]: boolean;
    ["129"]: boolean;
    ["130"]: boolean;
    ["131"]: boolean;
    ["132"]: boolean;
    ["133"]: boolean;
    ["134"]: boolean;
    ["135"]: boolean;
    ["136"]: boolean;
    ["137"]: boolean;
    ["138"]: boolean;
    ["139"]: boolean;
    ["140"]: boolean;
    ["141"]: boolean;
    ["142"]: boolean;
    ["143"]: boolean;
    ["144"]: boolean;
    ["145"]: boolean;
    ["146"]: boolean;
    ["147"]: boolean;
    ["148"]: boolean;
    ["149"]: boolean;
    ["150"]: boolean;
    ["151"]: boolean;
    ["152"]: boolean;
    ["153"]: boolean;
    ["154"]: boolean;
    ["155"]: boolean;
    ["156"]: boolean;
    ["157"]: boolean;
    ["158"]: boolean;
    ["159"]: boolean;
    ["160"]: boolean;
    ["161"]: boolean;
    ["162"]: boolean;
    ["163"]: boolean;
    ["164"]: boolean;
    ["165"]: boolean;
    ["166"]: boolean;
    ["167"]: boolean;
    ["168"]: boolean;
    ["169"]: boolean;
    ["170"]: boolean;
    ["171"]: boolean;
    ["172"]: boolean;
    ["173"]: boolean;
    ["174"]: boolean;
    ["175"]: boolean;
    ["176"]: boolean;
    ["177"]: boolean;
    ["178"]: boolean;
    ["179"]: boolean;
    ["180"]: boolean;
    ["181"]: boolean;
    ["182"]: boolean;
    ["183"]: boolean;
    ["184"]: boolean;
    ["185"]: boolean;
    ["186"]: boolean;
    ["187"]: boolean;
    ["188"]: boolean;
    ["189"]: boolean;
    ["190"]: boolean;
    ["191"]: boolean;
    ["192"]: boolean;
    ["193"]: boolean;
    ["194"]: boolean;
    ["195"]: boolean;
    ["196"]: boolean;
    ["197"]: boolean;
    ["198"]: boolean;
    ["199"]: boolean;
    ["200"]: boolean;
    ["201"]: boolean;
    ["202"]: boolean;
    ["203"]: boolean;
    ["204"]: boolean;
    ["205"]: boolean;
    ["206"]: boolean;
    ["207"]: boolean;
    ["208"]: boolean;
    ["209"]: boolean;
    ["210"]: boolean;
    ["211"]: boolean;
    ["212"]: boolean;
    ["213"]: boolean;
    ["214"]: boolean;
    ["215"]: boolean;
    ["216"]: boolean;
    ["217"]: boolean;
    ["218"]: boolean;
    ["219"]: boolean;
    ["220"]: boolean;
    ["221"]: boolean;
    ["222"]: boolean;
    ["223"]: boolean;
    ["224"]: boolean;
    ["225"]: boolean;
    ["226"]: boolean;
    ["227"]: boolean;
    ["228"]: boolean;
    ["229"]: boolean;
    ["230"]: boolean;
    ["231"]: boolean;
    ["232"]: boolean;
    ["233"]: boolean;
    ["234"]: boolean;
    ["235"]: boolean;
    ["236"]: boolean;
    ["237"]: boolean;
    ["238"]: boolean;
    ["239"]: boolean;
    ["240"]: boolean;
    ["241"]: boolean;
    ["242"]: boolean;
    ["243"]: boolean;
    ["244"]: boolean;
    ["245"]: boolean;
    ["246"]: boolean;
    ["247"]: boolean;
    ["248"]: boolean;
    ["249"]: boolean;
    ["250"]: boolean;
    ["251"]: boolean;
    ["252"]: boolean;
    ["253"]: boolean;
    ["254"]: boolean;
    ["255"]: boolean;
}
export interface m_EquippedLoadoutItemDefIndices {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
}
export interface m_rank {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
}
export interface m_passiveItems {
    ["000"]: boolean;
    ["001"]: boolean;
    ["002"]: boolean;
    ["003"]: boolean;
}
export interface m_iMatchStats_Kills {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
}
export interface m_iMatchStats_Damage {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
}
export interface m_iMatchStats_EquipmentValue {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
}
export interface m_iMatchStats_MoneySaved {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
}
export interface m_iMatchStats_KillReward {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
}
export interface m_iMatchStats_LiveTime {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
}
export interface m_iMatchStats_Deaths {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
}
export interface m_iMatchStats_Assists {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
}
export interface m_iMatchStats_HeadShotKills {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
}
export interface m_iMatchStats_Objective {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
}
export interface m_iMatchStats_CashEarned {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
}
export interface m_iMatchStats_UtilityDamage {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
}
export interface m_iMatchStats_EnemiesFlashed {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
}
export interface m_vecPlayerPatchEconIndices {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
}
export interface m_iPing {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_iKills {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_iAssists {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_iDeaths {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_bConnected {
    ["000"]: boolean;
    ["001"]: boolean;
    ["002"]: boolean;
    ["003"]: boolean;
    ["004"]: boolean;
    ["005"]: boolean;
    ["006"]: boolean;
    ["007"]: boolean;
    ["008"]: boolean;
    ["009"]: boolean;
    ["010"]: boolean;
    ["011"]: boolean;
    ["012"]: boolean;
    ["013"]: boolean;
    ["014"]: boolean;
    ["015"]: boolean;
    ["016"]: boolean;
    ["017"]: boolean;
    ["018"]: boolean;
    ["019"]: boolean;
    ["020"]: boolean;
    ["021"]: boolean;
    ["022"]: boolean;
    ["023"]: boolean;
    ["024"]: boolean;
    ["025"]: boolean;
    ["026"]: boolean;
    ["027"]: boolean;
    ["028"]: boolean;
    ["029"]: boolean;
    ["030"]: boolean;
    ["031"]: boolean;
    ["032"]: boolean;
    ["033"]: boolean;
    ["034"]: boolean;
    ["035"]: boolean;
    ["036"]: boolean;
    ["037"]: boolean;
    ["038"]: boolean;
    ["039"]: boolean;
    ["040"]: boolean;
    ["041"]: boolean;
    ["042"]: boolean;
    ["043"]: boolean;
    ["044"]: boolean;
    ["045"]: boolean;
    ["046"]: boolean;
    ["047"]: boolean;
    ["048"]: boolean;
    ["049"]: boolean;
    ["050"]: boolean;
    ["051"]: boolean;
    ["052"]: boolean;
    ["053"]: boolean;
    ["054"]: boolean;
    ["055"]: boolean;
    ["056"]: boolean;
    ["057"]: boolean;
    ["058"]: boolean;
    ["059"]: boolean;
    ["060"]: boolean;
    ["061"]: boolean;
    ["062"]: boolean;
    ["063"]: boolean;
    ["064"]: boolean;
}
export interface m_iTeam {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_iPendingTeam {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_bAlive {
    ["000"]: boolean;
    ["001"]: boolean;
    ["002"]: boolean;
    ["003"]: boolean;
    ["004"]: boolean;
    ["005"]: boolean;
    ["006"]: boolean;
    ["007"]: boolean;
    ["008"]: boolean;
    ["009"]: boolean;
    ["010"]: boolean;
    ["011"]: boolean;
    ["012"]: boolean;
    ["013"]: boolean;
    ["014"]: boolean;
    ["015"]: boolean;
    ["016"]: boolean;
    ["017"]: boolean;
    ["018"]: boolean;
    ["019"]: boolean;
    ["020"]: boolean;
    ["021"]: boolean;
    ["022"]: boolean;
    ["023"]: boolean;
    ["024"]: boolean;
    ["025"]: boolean;
    ["026"]: boolean;
    ["027"]: boolean;
    ["028"]: boolean;
    ["029"]: boolean;
    ["030"]: boolean;
    ["031"]: boolean;
    ["032"]: boolean;
    ["033"]: boolean;
    ["034"]: boolean;
    ["035"]: boolean;
    ["036"]: boolean;
    ["037"]: boolean;
    ["038"]: boolean;
    ["039"]: boolean;
    ["040"]: boolean;
    ["041"]: boolean;
    ["042"]: boolean;
    ["043"]: boolean;
    ["044"]: boolean;
    ["045"]: boolean;
    ["046"]: boolean;
    ["047"]: boolean;
    ["048"]: boolean;
    ["049"]: boolean;
    ["050"]: boolean;
    ["051"]: boolean;
    ["052"]: boolean;
    ["053"]: boolean;
    ["054"]: boolean;
    ["055"]: boolean;
    ["056"]: boolean;
    ["057"]: boolean;
    ["058"]: boolean;
    ["059"]: boolean;
    ["060"]: boolean;
    ["061"]: boolean;
    ["062"]: boolean;
    ["063"]: boolean;
    ["064"]: boolean;
}
export interface m_iHealth {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_iCoachingTeam {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_bHostageAlive {
    ["000"]: boolean;
    ["001"]: boolean;
    ["002"]: boolean;
    ["003"]: boolean;
    ["004"]: boolean;
    ["005"]: boolean;
    ["006"]: boolean;
    ["007"]: boolean;
    ["008"]: boolean;
    ["009"]: boolean;
    ["010"]: boolean;
    ["011"]: boolean;
}
export interface m_isHostageFollowingSomeone {
    ["000"]: boolean;
    ["001"]: boolean;
    ["002"]: boolean;
    ["003"]: boolean;
    ["004"]: boolean;
    ["005"]: boolean;
    ["006"]: boolean;
    ["007"]: boolean;
    ["008"]: boolean;
    ["009"]: boolean;
    ["010"]: boolean;
    ["011"]: boolean;
}
export interface m_iHostageEntityIDs {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
}
export interface m_hostageRescueX {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
}
export interface m_hostageRescueY {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
}
export interface m_hostageRescueZ {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
}
export interface m_iMVPs {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_iArmor {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_bHasDefuser {
    ["000"]: boolean;
    ["001"]: boolean;
    ["002"]: boolean;
    ["003"]: boolean;
    ["004"]: boolean;
    ["005"]: boolean;
    ["006"]: boolean;
    ["007"]: boolean;
    ["008"]: boolean;
    ["009"]: boolean;
    ["010"]: boolean;
    ["011"]: boolean;
    ["012"]: boolean;
    ["013"]: boolean;
    ["014"]: boolean;
    ["015"]: boolean;
    ["016"]: boolean;
    ["017"]: boolean;
    ["018"]: boolean;
    ["019"]: boolean;
    ["020"]: boolean;
    ["021"]: boolean;
    ["022"]: boolean;
    ["023"]: boolean;
    ["024"]: boolean;
    ["025"]: boolean;
    ["026"]: boolean;
    ["027"]: boolean;
    ["028"]: boolean;
    ["029"]: boolean;
    ["030"]: boolean;
    ["031"]: boolean;
    ["032"]: boolean;
    ["033"]: boolean;
    ["034"]: boolean;
    ["035"]: boolean;
    ["036"]: boolean;
    ["037"]: boolean;
    ["038"]: boolean;
    ["039"]: boolean;
    ["040"]: boolean;
    ["041"]: boolean;
    ["042"]: boolean;
    ["043"]: boolean;
    ["044"]: boolean;
    ["045"]: boolean;
    ["046"]: boolean;
    ["047"]: boolean;
    ["048"]: boolean;
    ["049"]: boolean;
    ["050"]: boolean;
    ["051"]: boolean;
    ["052"]: boolean;
    ["053"]: boolean;
    ["054"]: boolean;
    ["055"]: boolean;
    ["056"]: boolean;
    ["057"]: boolean;
    ["058"]: boolean;
    ["059"]: boolean;
    ["060"]: boolean;
    ["061"]: boolean;
    ["062"]: boolean;
    ["063"]: boolean;
    ["064"]: boolean;
}
export interface m_bHasHelmet {
    ["000"]: boolean;
    ["001"]: boolean;
    ["002"]: boolean;
    ["003"]: boolean;
    ["004"]: boolean;
    ["005"]: boolean;
    ["006"]: boolean;
    ["007"]: boolean;
    ["008"]: boolean;
    ["009"]: boolean;
    ["010"]: boolean;
    ["011"]: boolean;
    ["012"]: boolean;
    ["013"]: boolean;
    ["014"]: boolean;
    ["015"]: boolean;
    ["016"]: boolean;
    ["017"]: boolean;
    ["018"]: boolean;
    ["019"]: boolean;
    ["020"]: boolean;
    ["021"]: boolean;
    ["022"]: boolean;
    ["023"]: boolean;
    ["024"]: boolean;
    ["025"]: boolean;
    ["026"]: boolean;
    ["027"]: boolean;
    ["028"]: boolean;
    ["029"]: boolean;
    ["030"]: boolean;
    ["031"]: boolean;
    ["032"]: boolean;
    ["033"]: boolean;
    ["034"]: boolean;
    ["035"]: boolean;
    ["036"]: boolean;
    ["037"]: boolean;
    ["038"]: boolean;
    ["039"]: boolean;
    ["040"]: boolean;
    ["041"]: boolean;
    ["042"]: boolean;
    ["043"]: boolean;
    ["044"]: boolean;
    ["045"]: boolean;
    ["046"]: boolean;
    ["047"]: boolean;
    ["048"]: boolean;
    ["049"]: boolean;
    ["050"]: boolean;
    ["051"]: boolean;
    ["052"]: boolean;
    ["053"]: boolean;
    ["054"]: boolean;
    ["055"]: boolean;
    ["056"]: boolean;
    ["057"]: boolean;
    ["058"]: boolean;
    ["059"]: boolean;
    ["060"]: boolean;
    ["061"]: boolean;
    ["062"]: boolean;
    ["063"]: boolean;
    ["064"]: boolean;
}
export interface m_iScore {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_iCompetitiveRanking {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_iCompetitiveWins {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_iCompetitiveRankType {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_iCompTeammateColor {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_iLifetimeStart {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_iLifetimeEnd {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_bControllingBot {
    ["000"]: boolean;
    ["001"]: boolean;
    ["002"]: boolean;
    ["003"]: boolean;
    ["004"]: boolean;
    ["005"]: boolean;
    ["006"]: boolean;
    ["007"]: boolean;
    ["008"]: boolean;
    ["009"]: boolean;
    ["010"]: boolean;
    ["011"]: boolean;
    ["012"]: boolean;
    ["013"]: boolean;
    ["014"]: boolean;
    ["015"]: boolean;
    ["016"]: boolean;
    ["017"]: boolean;
    ["018"]: boolean;
    ["019"]: boolean;
    ["020"]: boolean;
    ["021"]: boolean;
    ["022"]: boolean;
    ["023"]: boolean;
    ["024"]: boolean;
    ["025"]: boolean;
    ["026"]: boolean;
    ["027"]: boolean;
    ["028"]: boolean;
    ["029"]: boolean;
    ["030"]: boolean;
    ["031"]: boolean;
    ["032"]: boolean;
    ["033"]: boolean;
    ["034"]: boolean;
    ["035"]: boolean;
    ["036"]: boolean;
    ["037"]: boolean;
    ["038"]: boolean;
    ["039"]: boolean;
    ["040"]: boolean;
    ["041"]: boolean;
    ["042"]: boolean;
    ["043"]: boolean;
    ["044"]: boolean;
    ["045"]: boolean;
    ["046"]: boolean;
    ["047"]: boolean;
    ["048"]: boolean;
    ["049"]: boolean;
    ["050"]: boolean;
    ["051"]: boolean;
    ["052"]: boolean;
    ["053"]: boolean;
    ["054"]: boolean;
    ["055"]: boolean;
    ["056"]: boolean;
    ["057"]: boolean;
    ["058"]: boolean;
    ["059"]: boolean;
    ["060"]: boolean;
    ["061"]: boolean;
    ["062"]: boolean;
    ["063"]: boolean;
    ["064"]: boolean;
}
export interface m_iControlledPlayer {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_iControlledByPlayer {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_iBotDifficulty {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_szClan {
    ["000"]: string;
    ["001"]: string;
    ["002"]: string;
    ["003"]: string;
    ["004"]: string;
    ["005"]: string;
    ["006"]: string;
    ["007"]: string;
    ["008"]: string;
    ["009"]: string;
    ["010"]: string;
    ["011"]: string;
    ["012"]: string;
    ["013"]: string;
    ["014"]: string;
    ["015"]: string;
    ["016"]: string;
    ["017"]: string;
    ["018"]: string;
    ["019"]: string;
    ["020"]: string;
    ["021"]: string;
    ["022"]: string;
    ["023"]: string;
    ["024"]: string;
    ["025"]: string;
    ["026"]: string;
    ["027"]: string;
    ["028"]: string;
    ["029"]: string;
    ["030"]: string;
    ["031"]: string;
    ["032"]: string;
    ["033"]: string;
    ["034"]: string;
    ["035"]: string;
    ["036"]: string;
    ["037"]: string;
    ["038"]: string;
    ["039"]: string;
    ["040"]: string;
    ["041"]: string;
    ["042"]: string;
    ["043"]: string;
    ["044"]: string;
    ["045"]: string;
    ["046"]: string;
    ["047"]: string;
    ["048"]: string;
    ["049"]: string;
    ["050"]: string;
    ["051"]: string;
    ["052"]: string;
    ["053"]: string;
    ["054"]: string;
    ["055"]: string;
    ["056"]: string;
    ["057"]: string;
    ["058"]: string;
    ["059"]: string;
    ["060"]: string;
    ["061"]: string;
    ["062"]: string;
    ["063"]: string;
    ["064"]: string;
}
export interface m_nCharacterDefIndex {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_iTotalCashSpent {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_iGunGameLevel {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_iCashSpentThisRound {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_nEndMatchNextMapVotes {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_nActiveCoinRank {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_nMusicID {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_nPersonaDataPublicLevel {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_nPersonaDataPublicCommendsLeader {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_nPersonaDataPublicCommendsTeacher {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_nPersonaDataPublicCommendsFriendly {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_bHasCommunicationAbuseMute {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_szCrosshairCodes {
    ["000"]: string;
    ["001"]: string;
    ["002"]: string;
    ["003"]: string;
    ["004"]: string;
    ["005"]: string;
    ["006"]: string;
    ["007"]: string;
    ["008"]: string;
    ["009"]: string;
    ["010"]: string;
    ["011"]: string;
    ["012"]: string;
    ["013"]: string;
    ["014"]: string;
    ["015"]: string;
    ["016"]: string;
    ["017"]: string;
    ["018"]: string;
    ["019"]: string;
    ["020"]: string;
    ["021"]: string;
    ["022"]: string;
    ["023"]: string;
    ["024"]: string;
    ["025"]: string;
    ["026"]: string;
    ["027"]: string;
    ["028"]: string;
    ["029"]: string;
    ["030"]: string;
    ["031"]: string;
    ["032"]: string;
    ["033"]: string;
    ["034"]: string;
    ["035"]: string;
    ["036"]: string;
    ["037"]: string;
    ["038"]: string;
    ["039"]: string;
    ["040"]: string;
    ["041"]: string;
    ["042"]: string;
    ["043"]: string;
    ["044"]: string;
    ["045"]: string;
    ["046"]: string;
    ["047"]: string;
    ["048"]: string;
    ["049"]: string;
    ["050"]: string;
    ["051"]: string;
    ["052"]: string;
    ["053"]: string;
    ["054"]: string;
    ["055"]: string;
    ["056"]: string;
    ["057"]: string;
    ["058"]: string;
    ["059"]: string;
    ["060"]: string;
    ["061"]: string;
    ["062"]: string;
    ["063"]: string;
    ["064"]: string;
}
export interface m_iMatchStats_Kills_Total {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_iMatchStats_5k_Total {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_iMatchStats_4k_Total {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_iMatchStats_3k_Total {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_iMatchStats_Damage_Total {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_iMatchStats_EquipmentValue_Total {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_iMatchStats_KillReward_Total {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_iMatchStats_LiveTime_Total {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_iMatchStats_Deaths_Total {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_iMatchStats_Assists_Total {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_iMatchStats_HeadShotKills_Total {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_iMatchStats_Objective_Total {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_iMatchStats_CashEarned_Total {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_iMatchStats_UtilityDamage_Total {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_iMatchStats_EnemiesFlashed_Total {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
}
export interface m_DangerZones {
    ["000"]: EntityHandle;
    ["001"]: EntityHandle;
    ["002"]: EntityHandle;
    ["003"]: EntityHandle;
    ["004"]: EntityHandle;
    ["005"]: EntityHandle;
    ["006"]: EntityHandle;
    ["007"]: EntityHandle;
    ["008"]: EntityHandle;
    ["009"]: EntityHandle;
    ["010"]: EntityHandle;
    ["011"]: EntityHandle;
    ["012"]: EntityHandle;
    ["013"]: EntityHandle;
    ["014"]: EntityHandle;
    ["015"]: EntityHandle;
    ["016"]: EntityHandle;
    ["017"]: EntityHandle;
    ["018"]: EntityHandle;
    ["019"]: EntityHandle;
    ["020"]: EntityHandle;
    ["021"]: EntityHandle;
    ["022"]: EntityHandle;
    ["023"]: EntityHandle;
    ["024"]: EntityHandle;
    ["025"]: EntityHandle;
    ["026"]: EntityHandle;
    ["027"]: EntityHandle;
    ["028"]: EntityHandle;
    ["029"]: EntityHandle;
    ["030"]: EntityHandle;
    ["031"]: EntityHandle;
    ["032"]: EntityHandle;
    ["033"]: EntityHandle;
    ["034"]: EntityHandle;
    ["035"]: EntityHandle;
    ["036"]: EntityHandle;
    ["037"]: EntityHandle;
    ["038"]: EntityHandle;
    ["039"]: EntityHandle;
    ["040"]: EntityHandle;
    ["041"]: EntityHandle;
}
export interface m_flWaveEndTimes {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
}
export interface m_flFrozenPerHitbox {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
}
export interface DT_EntityParticleTrailInfo {
    m_flLifetime: number;
    m_flStartSize: number;
    m_flEndSize: number;
}
export interface DT_EnvWindShared {
    m_iMinWind: number;
    m_iMaxWind: number;
    m_iMinGust: number;
    m_iMaxGust: number;
    m_flMinGustDelay: number;
    m_flMaxGustDelay: number;
    m_iGustDirChange: number;
    m_iWindSeed: number;
    m_iInitialWindDir: number;
    m_flInitialWindSpeed: number;
    m_flStartTime: number;
    m_flGustDuration: number;
}
export interface m_ubSignature {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
    ["064"]: number;
    ["065"]: number;
    ["066"]: number;
    ["067"]: number;
    ["068"]: number;
    ["069"]: number;
    ["070"]: number;
    ["071"]: number;
    ["072"]: number;
    ["073"]: number;
    ["074"]: number;
    ["075"]: number;
    ["076"]: number;
    ["077"]: number;
    ["078"]: number;
    ["079"]: number;
    ["080"]: number;
    ["081"]: number;
    ["082"]: number;
    ["083"]: number;
    ["084"]: number;
    ["085"]: number;
    ["086"]: number;
    ["087"]: number;
    ["088"]: number;
    ["089"]: number;
    ["090"]: number;
    ["091"]: number;
    ["092"]: number;
    ["093"]: number;
    ["094"]: number;
    ["095"]: number;
    ["096"]: number;
    ["097"]: number;
    ["098"]: number;
    ["099"]: number;
    ["100"]: number;
    ["101"]: number;
    ["102"]: number;
    ["103"]: number;
    ["104"]: number;
    ["105"]: number;
    ["106"]: number;
    ["107"]: number;
    ["108"]: number;
    ["109"]: number;
    ["110"]: number;
    ["111"]: number;
    ["112"]: number;
    ["113"]: number;
    ["114"]: number;
    ["115"]: number;
    ["116"]: number;
    ["117"]: number;
    ["118"]: number;
    ["119"]: number;
    ["120"]: number;
    ["121"]: number;
    ["122"]: number;
    ["123"]: number;
    ["124"]: number;
    ["125"]: number;
    ["126"]: number;
    ["127"]: number;
}
export interface m_fireXDelta {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
}
export interface m_fireYDelta {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
}
export interface m_fireZDelta {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
    ["063"]: number;
}
export interface m_bFireIsBurning {
    ["000"]: boolean;
    ["001"]: boolean;
    ["002"]: boolean;
    ["003"]: boolean;
    ["004"]: boolean;
    ["005"]: boolean;
    ["006"]: boolean;
    ["007"]: boolean;
    ["008"]: boolean;
    ["009"]: boolean;
    ["010"]: boolean;
    ["011"]: boolean;
    ["012"]: boolean;
    ["013"]: boolean;
    ["014"]: boolean;
    ["015"]: boolean;
    ["016"]: boolean;
    ["017"]: boolean;
    ["018"]: boolean;
    ["019"]: boolean;
    ["020"]: boolean;
    ["021"]: boolean;
    ["022"]: boolean;
    ["023"]: boolean;
    ["024"]: boolean;
    ["025"]: boolean;
    ["026"]: boolean;
    ["027"]: boolean;
    ["028"]: boolean;
    ["029"]: boolean;
    ["030"]: boolean;
    ["031"]: boolean;
    ["032"]: boolean;
    ["033"]: boolean;
    ["034"]: boolean;
    ["035"]: boolean;
    ["036"]: boolean;
    ["037"]: boolean;
    ["038"]: boolean;
    ["039"]: boolean;
    ["040"]: boolean;
    ["041"]: boolean;
    ["042"]: boolean;
    ["043"]: boolean;
    ["044"]: boolean;
    ["045"]: boolean;
    ["046"]: boolean;
    ["047"]: boolean;
    ["048"]: boolean;
    ["049"]: boolean;
    ["050"]: boolean;
    ["051"]: boolean;
    ["052"]: boolean;
    ["053"]: boolean;
    ["054"]: boolean;
    ["055"]: boolean;
    ["056"]: boolean;
    ["057"]: boolean;
    ["058"]: boolean;
    ["059"]: boolean;
    ["060"]: boolean;
    ["061"]: boolean;
    ["062"]: boolean;
    ["063"]: boolean;
}
export interface m_vServerControlPoints {
    ["000"]: Vector;
    ["001"]: Vector;
    ["002"]: Vector;
    ["003"]: Vector;
}
export interface m_iServerControlPointAssignments {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
}
export interface m_hControlPointEnts {
    ["000"]: EntityHandle;
    ["001"]: EntityHandle;
    ["002"]: EntityHandle;
    ["003"]: EntityHandle;
    ["004"]: EntityHandle;
    ["005"]: EntityHandle;
    ["006"]: EntityHandle;
    ["007"]: EntityHandle;
    ["008"]: EntityHandle;
    ["009"]: EntityHandle;
    ["010"]: EntityHandle;
    ["011"]: EntityHandle;
    ["012"]: EntityHandle;
    ["013"]: EntityHandle;
    ["014"]: EntityHandle;
    ["015"]: EntityHandle;
    ["016"]: EntityHandle;
    ["017"]: EntityHandle;
    ["018"]: EntityHandle;
    ["019"]: EntityHandle;
    ["020"]: EntityHandle;
    ["021"]: EntityHandle;
    ["022"]: EntityHandle;
    ["023"]: EntityHandle;
    ["024"]: EntityHandle;
    ["025"]: EntityHandle;
    ["026"]: EntityHandle;
    ["027"]: EntityHandle;
    ["028"]: EntityHandle;
    ["029"]: EntityHandle;
    ["030"]: EntityHandle;
    ["031"]: EntityHandle;
    ["032"]: EntityHandle;
    ["033"]: EntityHandle;
    ["034"]: EntityHandle;
    ["035"]: EntityHandle;
    ["036"]: EntityHandle;
    ["037"]: EntityHandle;
    ["038"]: EntityHandle;
    ["039"]: EntityHandle;
    ["040"]: EntityHandle;
    ["041"]: EntityHandle;
    ["042"]: EntityHandle;
    ["043"]: EntityHandle;
    ["044"]: EntityHandle;
    ["045"]: EntityHandle;
    ["046"]: EntityHandle;
    ["047"]: EntityHandle;
    ["048"]: EntityHandle;
    ["049"]: EntityHandle;
    ["050"]: EntityHandle;
    ["051"]: EntityHandle;
    ["052"]: EntityHandle;
    ["053"]: EntityHandle;
    ["054"]: EntityHandle;
    ["055"]: EntityHandle;
    ["056"]: EntityHandle;
    ["057"]: EntityHandle;
    ["058"]: EntityHandle;
    ["059"]: EntityHandle;
    ["060"]: EntityHandle;
    ["061"]: EntityHandle;
    ["062"]: EntityHandle;
}
export interface m_iControlPointParents {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
    ["032"]: number;
    ["033"]: number;
    ["034"]: number;
    ["035"]: number;
    ["036"]: number;
    ["037"]: number;
    ["038"]: number;
    ["039"]: number;
    ["040"]: number;
    ["041"]: number;
    ["042"]: number;
    ["043"]: number;
    ["044"]: number;
    ["045"]: number;
    ["046"]: number;
    ["047"]: number;
    ["048"]: number;
    ["049"]: number;
    ["050"]: number;
    ["051"]: number;
    ["052"]: number;
    ["053"]: number;
    ["054"]: number;
    ["055"]: number;
    ["056"]: number;
    ["057"]: number;
    ["058"]: number;
    ["059"]: number;
    ["060"]: number;
    ["061"]: number;
    ["062"]: number;
}
export interface m_hProps {
    ["000"]: EntityHandle;
    ["001"]: EntityHandle;
    ["002"]: EntityHandle;
    ["003"]: EntityHandle;
}
export interface m_chPoseIndex {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
}
export interface m_flPostProcessParameters {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
}
export interface _ST_m_hActorList_16 {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
}
export interface _LPT_m_hActorList_16 {
    lengthprop16: number;
}
export interface m_chCurrentSlideLists {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
}
export interface DT_TeamplayRoundBasedRules {
    m_iRoundState: number;
    m_bInWaitingForPlayers: boolean;
    m_iWinningTeam: number;
    m_bInOvertime: boolean;
    m_bInSetup: boolean;
    m_bSwitchedTeamsThisRound: boolean;
    m_bAwaitingReadyRestart: boolean;
    m_flRestartRoundTime: number;
    m_flMapResetTime: number;
    m_bStopWatch: boolean;
}
export interface m_flNextRespawnWave {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
}
export interface m_TeamRespawnWaveTimes {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
    ["005"]: number;
    ["006"]: number;
    ["007"]: number;
    ["008"]: number;
    ["009"]: number;
    ["010"]: number;
    ["011"]: number;
    ["012"]: number;
    ["013"]: number;
    ["014"]: number;
    ["015"]: number;
    ["016"]: number;
    ["017"]: number;
    ["018"]: number;
    ["019"]: number;
    ["020"]: number;
    ["021"]: number;
    ["022"]: number;
    ["023"]: number;
    ["024"]: number;
    ["025"]: number;
    ["026"]: number;
    ["027"]: number;
    ["028"]: number;
    ["029"]: number;
    ["030"]: number;
    ["031"]: number;
}
export interface m_bTeamReady {
    ["000"]: boolean;
    ["001"]: boolean;
    ["002"]: boolean;
    ["003"]: boolean;
    ["004"]: boolean;
    ["005"]: boolean;
    ["006"]: boolean;
    ["007"]: boolean;
    ["008"]: boolean;
    ["009"]: boolean;
    ["010"]: boolean;
    ["011"]: boolean;
    ["012"]: boolean;
    ["013"]: boolean;
    ["014"]: boolean;
    ["015"]: boolean;
    ["016"]: boolean;
    ["017"]: boolean;
    ["018"]: boolean;
    ["019"]: boolean;
    ["020"]: boolean;
    ["021"]: boolean;
    ["022"]: boolean;
    ["023"]: boolean;
    ["024"]: boolean;
    ["025"]: boolean;
    ["026"]: boolean;
    ["027"]: boolean;
    ["028"]: boolean;
    ["029"]: boolean;
    ["030"]: boolean;
    ["031"]: boolean;
}
export interface DT_EffectData {
    ["m_vOrigin.x"]: number;
    ["m_vOrigin.y"]: number;
    ["m_vOrigin.z"]: number;
    ["m_vStart.x"]: number;
    ["m_vStart.y"]: number;
    ["m_vStart.z"]: number;
    m_vAngles: Vector;
    m_vNormal: Vector;
    m_fFlags: number;
    m_flMagnitude: number;
    m_flScale: number;
    m_nAttachmentIndex: number;
    m_nSurfaceProp: number;
    m_iEffectName: number;
    m_nMaterial: number;
    m_nDamageType: number;
    m_nHitBox: number;
    entindex: number;
    m_nOtherEntIndex: number;
    m_nColor: number;
    m_flRadius: number;
    m_bPositionsAreRelativeToEntity: boolean;
}
export interface DT_ProxyToggle_ProxiedData {
    m_WithProxy: number;
}
export interface m_nVoteOptionCount {
    ["000"]: number;
    ["001"]: number;
    ["002"]: number;
    ["003"]: number;
    ["004"]: number;
}
export interface CAI_BaseNPC {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    DT_BCCLocalPlayerExclusive: DT_BCCLocalPlayerExclusive;
    m_hMyWeapons: m_hMyWeapons;
    m_hMyWearables: m_hMyWearables;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_BaseCombatCharacter: DT_BaseCombatCharacter;
    DT_AI_BaseNPC: DT_AI_BaseNPC;
}
export interface CAK47 {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponCSBaseGun: DT_WeaponCSBaseGun;
}
export interface CBaseAnimating {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    DT_BaseAnimating: DT_BaseAnimating;
}
export interface CBaseAnimatingOverlay {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    DT_BaseAnimating: DT_BaseAnimating;
}
export interface CBaseAttributableItem {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseAttributableItem: DT_BaseAttributableItem;
}
export interface CBaseButton {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_BaseToggle: DT_BaseToggle;
}
export interface CBaseCombatCharacter {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    DT_BCCLocalPlayerExclusive: DT_BCCLocalPlayerExclusive;
    m_hMyWeapons: m_hMyWeapons;
    m_hMyWearables: m_hMyWearables;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_BaseCombatCharacter: DT_BaseCombatCharacter;
}
export interface CBaseCombatWeapon {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
}
export interface CBaseCSGrenade {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_BaseCSGrenade: DT_BaseCSGrenade;
}
export interface CBaseCSGrenadeProjectile {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseGrenade: DT_BaseGrenade;
    DT_BaseCSGrenadeProjectile: DT_BaseCSGrenadeProjectile;
}
export interface CBaseDoor {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_BaseToggle: DT_BaseToggle;
    DT_BaseDoor: DT_BaseDoor;
}
export interface CBaseEntity {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
}
export interface CBaseFlex {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
}
export interface CBaseGrenade {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseGrenade: DT_BaseGrenade;
}
export interface CBaseParticleEntity {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
}
export interface CBasePlayer {
    DT_BaseEntity: DT_BaseEntity;
    DT_LocalPlayerExclusive: DT_LocalPlayerExclusive;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_Local: DT_Local;
    DT_BasePlayer: DT_BasePlayer;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    m_bSpottedByMask: m_bSpottedByMask;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    DT_BCCLocalPlayerExclusive: DT_BCCLocalPlayerExclusive;
    m_hMyWeapons: m_hMyWeapons;
    m_hMyWearables: m_hMyWearables;
    DT_PlayerState: DT_PlayerState;
    m_iAmmo: m_iAmmo;
    m_chAreaBits: m_chAreaBits;
    m_chAreaPortalBits: m_chAreaPortalBits;
    DT_CollisionProperty: DT_CollisionProperty;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_BaseCombatCharacter: DT_BaseCombatCharacter;
}
export interface CBasePropDoor {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BreakableProp: DT_BreakableProp;
    DT_DynamicProp: DT_DynamicProp;
}
export interface CBaseTeamObjectiveResource {
    m_bCPIsVisible: m_bCPIsVisible;
    m_flLazyCapPerc: m_flLazyCapPerc;
    m_iTeamIcons: m_iTeamIcons;
    m_iTeamOverlays: m_iTeamOverlays;
    m_iTeamReqCappers: m_iTeamReqCappers;
    m_flTeamCapTime: m_flTeamCapTime;
    m_iPreviousPoints: m_iPreviousPoints;
    m_bTeamCanCap: m_bTeamCanCap;
    m_iTeamBaseIcons: m_iTeamBaseIcons;
    m_iBaseControlPoints: m_iBaseControlPoints;
    m_bInMiniRound: m_bInMiniRound;
    m_iWarnOnCap: m_iWarnOnCap;
    m_flPathDistance: m_flPathDistance;
    m_iNumTeamMembers: m_iNumTeamMembers;
    m_iCappingTeam: m_iCappingTeam;
    m_iTeamInZone: m_iTeamInZone;
    m_bBlocked: m_bBlocked;
    m_iOwner: m_iOwner;
    DT_BaseTeamObjectiveResource: DT_BaseTeamObjectiveResource;
}
export interface CBaseTempEntity {
}
export interface CBaseToggle {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_BaseToggle: DT_BaseToggle;
}
export interface CBaseTrigger {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_BaseToggle: DT_BaseToggle;
    DT_BaseTrigger: DT_BaseTrigger;
}
export interface CBaseViewModel {
    DT_BaseViewModel: DT_BaseViewModel;
}
export interface CBaseVPhysicsTrigger {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
}
export interface CBaseWeaponWorldModel {
    DT_BaseWeaponWorldModel: DT_BaseWeaponWorldModel;
}
export interface CBeam {
    DT_Beam: DT_Beam;
    m_hAttachEntity: m_hAttachEntity;
    m_nAttachIndex: m_nAttachIndex;
}
export interface CBeamSpotlight {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_BeamSpotlight: DT_BeamSpotlight;
}
export interface CBoneFollower {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_BoneFollower: DT_BoneFollower;
}
export interface CBRC4Target {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BRC4Target: DT_BRC4Target;
}
export interface CBreachCharge {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
}
export interface CBreachChargeProjectile {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseGrenade: DT_BaseGrenade;
    DT_BreachChargeProjectile: DT_BreachChargeProjectile;
}
export interface CBreakableProp {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BreakableProp: DT_BreakableProp;
}
export interface CBreakableSurface {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    m_RawPanelBitVec: m_RawPanelBitVec;
    DT_BreakableSurface: DT_BreakableSurface;
}
export interface CBumpMine {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
}
export interface CBumpMineProjectile {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseGrenade: DT_BaseGrenade;
    DT_BumpMineProjectile: DT_BumpMineProjectile;
}
export interface CC4 {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponC4: DT_WeaponC4;
}
export interface CCascadeLight {
    DT_CascadeLight: DT_CascadeLight;
}
export interface CChicken {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BreakableProp: DT_BreakableProp;
    DT_DynamicProp: DT_DynamicProp;
    DT_CChicken: DT_CChicken;
}
export interface CColorCorrection {
    DT_ColorCorrection: DT_ColorCorrection;
}
export interface CColorCorrectionVolume {
    DT_ColorCorrectionVolume: DT_ColorCorrectionVolume;
}
export interface CCSGameRulesProxy {
    m_iMatchStats_RoundResults: m_iMatchStats_RoundResults;
    m_iMatchStats_PlayersAlive_T: m_iMatchStats_PlayersAlive_T;
    m_iMatchStats_PlayersAlive_CT: m_iMatchStats_PlayersAlive_CT;
    m_GGProgressiveWeaponOrderCT: m_GGProgressiveWeaponOrderCT;
    m_GGProgressiveWeaponOrderT: m_GGProgressiveWeaponOrderT;
    m_GGProgressiveWeaponKillUpgradeOrderCT: m_GGProgressiveWeaponKillUpgradeOrderCT;
    m_GGProgressiveWeaponKillUpgradeOrderT: m_GGProgressiveWeaponKillUpgradeOrderT;
    m_TeamRespawnWaveTimes: m_TeamRespawnWaveTimes;
    m_flNextRespawnWave: m_flNextRespawnWave;
    m_nEndMatchMapGroupVoteTypes: m_nEndMatchMapGroupVoteTypes;
    m_nEndMatchMapGroupVoteOptions: m_nEndMatchMapGroupVoteOptions;
    m_arrFeaturedGiftersAccounts: m_arrFeaturedGiftersAccounts;
    m_arrFeaturedGiftersGifts: m_arrFeaturedGiftersGifts;
    m_arrProhibitedItemIndices: m_arrProhibitedItemIndices;
    m_arrTournamentActiveCasterAccounts: m_arrTournamentActiveCasterAccounts;
    m_iPlayerSpawnHexIndices: m_iPlayerSpawnHexIndices;
    m_SpawnTileState: m_SpawnTileState;
    m_roundData_playerXuids: m_roundData_playerXuids;
    m_roundData_playerPositions: m_roundData_playerPositions;
    m_roundData_playerTeams: m_roundData_playerTeams;
    m_SurvivalGameRuleDecisionTypes: m_SurvivalGameRuleDecisionTypes;
    m_SurvivalGameRuleDecisionValues: m_SurvivalGameRuleDecisionValues;
    DT_SurvivalGameRules: DT_SurvivalGameRules;
    DT_CSGameRules: DT_CSGameRules;
}
export interface CCSPlayer {
    DT_BaseEntity: DT_BaseEntity;
    DT_LocalPlayerExclusive: DT_LocalPlayerExclusive;
    DT_CSLocalPlayerExclusive: DT_CSLocalPlayerExclusive;
    DT_CSNonLocalPlayerExclusive: DT_CSNonLocalPlayerExclusive;
    DT_Local: DT_Local;
    DT_BasePlayer: DT_BasePlayer;
    DT_CSPlayer: DT_CSPlayer;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    DT_BCCLocalPlayerExclusive: DT_BCCLocalPlayerExclusive;
    m_hMyWeapons: m_hMyWeapons;
    m_hMyWearables: m_hMyWearables;
    DT_PlayerState: DT_PlayerState;
    m_iAmmo: m_iAmmo;
    m_chAreaBits: m_chAreaBits;
    m_chAreaPortalBits: m_chAreaPortalBits;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flEncodedController: m_flEncodedController;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bPlayerDominated: m_bPlayerDominated;
    m_bPlayerDominatingMe: m_bPlayerDominatingMe;
    m_iWeaponPurchasesThisRound: m_iWeaponPurchasesThisRound;
    m_iWeaponPurchasesThisMatch: m_iWeaponPurchasesThisMatch;
    m_EquippedLoadoutItemDefIndices: m_EquippedLoadoutItemDefIndices;
    m_rank: m_rank;
    m_passiveItems: m_passiveItems;
    m_vecPlayerPatchEconIndices: m_vecPlayerPatchEconIndices;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_BaseCombatCharacter: DT_BaseCombatCharacter;
    m_iMatchStats_Deaths: m_iMatchStats_Deaths;
    m_iMatchStats_Assists: m_iMatchStats_Assists;
    m_iMatchStats_HeadShotKills: m_iMatchStats_HeadShotKills;
    m_iMatchStats_Objective: m_iMatchStats_Objective;
    m_iMatchStats_CashEarned: m_iMatchStats_CashEarned;
    m_iMatchStats_UtilityDamage: m_iMatchStats_UtilityDamage;
    m_iMatchStats_EnemiesFlashed: m_iMatchStats_EnemiesFlashed;
    m_iMatchStats_Kills: m_iMatchStats_Kills;
    m_iMatchStats_Damage: m_iMatchStats_Damage;
    m_iMatchStats_EquipmentValue: m_iMatchStats_EquipmentValue;
    m_iMatchStats_MoneySaved: m_iMatchStats_MoneySaved;
    m_iMatchStats_KillReward: m_iMatchStats_KillReward;
    m_iMatchStats_LiveTime: m_iMatchStats_LiveTime;
}
export interface CCSPlayerResource {
    m_iPing: m_iPing;
    m_iKills: m_iKills;
    m_iAssists: m_iAssists;
    m_iDeaths: m_iDeaths;
    m_bConnected: m_bConnected;
    m_iTeam: m_iTeam;
    m_iPendingTeam: m_iPendingTeam;
    m_bAlive: m_bAlive;
    m_iHealth: m_iHealth;
    m_iCoachingTeam: m_iCoachingTeam;
    m_bHostageAlive: m_bHostageAlive;
    m_isHostageFollowingSomeone: m_isHostageFollowingSomeone;
    m_iHostageEntityIDs: m_iHostageEntityIDs;
    m_hostageRescueX: m_hostageRescueX;
    m_hostageRescueY: m_hostageRescueY;
    m_hostageRescueZ: m_hostageRescueZ;
    m_iMVPs: m_iMVPs;
    m_iArmor: m_iArmor;
    m_bHasDefuser: m_bHasDefuser;
    m_bHasHelmet: m_bHasHelmet;
    m_iScore: m_iScore;
    m_iCompetitiveRanking: m_iCompetitiveRanking;
    m_iCompetitiveWins: m_iCompetitiveWins;
    m_iCompetitiveRankType: m_iCompetitiveRankType;
    m_iCompTeammateColor: m_iCompTeammateColor;
    m_iLifetimeStart: m_iLifetimeStart;
    m_iLifetimeEnd: m_iLifetimeEnd;
    m_bControllingBot: m_bControllingBot;
    m_iControlledPlayer: m_iControlledPlayer;
    m_iControlledByPlayer: m_iControlledByPlayer;
    m_iBotDifficulty: m_iBotDifficulty;
    m_szClan: m_szClan;
    m_nCharacterDefIndex: m_nCharacterDefIndex;
    m_iTotalCashSpent: m_iTotalCashSpent;
    m_iGunGameLevel: m_iGunGameLevel;
    m_iCashSpentThisRound: m_iCashSpentThisRound;
    m_nEndMatchNextMapVotes: m_nEndMatchNextMapVotes;
    m_nActiveCoinRank: m_nActiveCoinRank;
    m_nMusicID: m_nMusicID;
    m_nPersonaDataPublicLevel: m_nPersonaDataPublicLevel;
    m_nPersonaDataPublicCommendsLeader: m_nPersonaDataPublicCommendsLeader;
    m_nPersonaDataPublicCommendsTeacher: m_nPersonaDataPublicCommendsTeacher;
    m_nPersonaDataPublicCommendsFriendly: m_nPersonaDataPublicCommendsFriendly;
    m_bHasCommunicationAbuseMute: m_bHasCommunicationAbuseMute;
    m_szCrosshairCodes: m_szCrosshairCodes;
    m_iMatchStats_Kills_Total: m_iMatchStats_Kills_Total;
    m_iMatchStats_5k_Total: m_iMatchStats_5k_Total;
    m_iMatchStats_4k_Total: m_iMatchStats_4k_Total;
    m_iMatchStats_3k_Total: m_iMatchStats_3k_Total;
    m_iMatchStats_Damage_Total: m_iMatchStats_Damage_Total;
    m_iMatchStats_EquipmentValue_Total: m_iMatchStats_EquipmentValue_Total;
    m_iMatchStats_KillReward_Total: m_iMatchStats_KillReward_Total;
    m_iMatchStats_LiveTime_Total: m_iMatchStats_LiveTime_Total;
    m_iMatchStats_Deaths_Total: m_iMatchStats_Deaths_Total;
    m_iMatchStats_Assists_Total: m_iMatchStats_Assists_Total;
    m_iMatchStats_HeadShotKills_Total: m_iMatchStats_HeadShotKills_Total;
    m_iMatchStats_Objective_Total: m_iMatchStats_Objective_Total;
    m_iMatchStats_CashEarned_Total: m_iMatchStats_CashEarned_Total;
    m_iMatchStats_UtilityDamage_Total: m_iMatchStats_UtilityDamage_Total;
    m_iMatchStats_EnemiesFlashed_Total: m_iMatchStats_EnemiesFlashed_Total;
    DT_CSPlayerResource: DT_CSPlayerResource;
}
export interface CCSRagdoll {
    DT_CSRagdoll: DT_CSRagdoll;
}
export interface CCSTeam {
    DT_Team: DT_Team;
}
export interface CDangerZone {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_DangerZone: DT_DangerZone;
}
export interface CDangerZoneController {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    m_DangerZones: m_DangerZones;
    m_flWaveEndTimes: m_flWaveEndTimes;
    DT_DangerZoneController: DT_DangerZoneController;
}
export interface CDEagle {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponCSBaseGun: DT_WeaponCSBaseGun;
}
export interface CDecoyGrenade {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_BaseCSGrenade: DT_BaseCSGrenade;
}
export interface CDecoyProjectile {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseGrenade: DT_BaseGrenade;
    DT_BaseCSGrenadeProjectile: DT_BaseCSGrenadeProjectile;
}
export interface CDrone {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BreakableProp: DT_BreakableProp;
    DT_PhysicsProp: DT_PhysicsProp;
    DT_Drone: DT_Drone;
}
export interface CDronegun {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_Dronegun: DT_Dronegun;
}
export interface CDynamicLight {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_DynamicLight: DT_DynamicLight;
}
export interface CDynamicProp {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BreakableProp: DT_BreakableProp;
    DT_DynamicProp: DT_DynamicProp;
}
export interface CEconEntity {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
}
export interface CEconWearable {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
}
export interface CEmbers {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_Embers: DT_Embers;
}
export interface CEntityDissolve {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_EntityDissolve: DT_EntityDissolve;
}
export interface CEntityFlame {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_EntityFlame: DT_EntityFlame;
}
export interface CEntityFreezing {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flFrozenPerHitbox: m_flFrozenPerHitbox;
    DT_EntityFreezing: DT_EntityFreezing;
}
export interface CEntityParticleTrail {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_EntityParticleTrailInfo: DT_EntityParticleTrailInfo;
    DT_EntityParticleTrail: DT_EntityParticleTrail;
}
export interface CEnvAmbientLight {
    DT_SpatialEntity: DT_SpatialEntity;
    DT_EnvAmbientLight: DT_EnvAmbientLight;
}
export interface CEnvDetailController {
    DT_DetailController: DT_DetailController;
}
export interface CEnvDOFController {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_EnvDOFController: DT_EnvDOFController;
}
export interface CEnvGasCanister {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_EnvGasCanister: DT_EnvGasCanister;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_BaseAnimating: DT_BaseAnimating;
}
export interface CEnvParticleScript {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_EnvParticleScript: DT_EnvParticleScript;
}
export interface CEnvProjectedTexture {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_EnvProjectedTexture: DT_EnvProjectedTexture;
}
export interface CEnvQuadraticBeam {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_QuadraticBeam: DT_QuadraticBeam;
}
export interface CEnvScreenEffect {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_EnvScreenEffect: DT_EnvScreenEffect;
}
export interface CEnvScreenOverlay {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_EnvScreenOverlay: DT_EnvScreenOverlay;
}
export interface CEnvTonemapController {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_EnvTonemapController: DT_EnvTonemapController;
}
export interface CEnvWind {
    DT_EnvWindShared: DT_EnvWindShared;
}
export interface CFEPlayerDecal {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    m_ubSignature: m_ubSignature;
    DT_FEPlayerDecal: DT_FEPlayerDecal;
}
export interface CFireCrackerBlast {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    m_fireXDelta: m_fireXDelta;
    m_fireYDelta: m_fireYDelta;
    m_fireZDelta: m_fireZDelta;
    m_bFireIsBurning: m_bFireIsBurning;
    DT_Inferno: DT_Inferno;
}
export interface CFireSmoke {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_FireSmoke: DT_FireSmoke;
}
export interface CFireTrail {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_FireTrail: DT_FireTrail;
}
export interface CFish {
    DT_CFish: DT_CFish;
}
export interface CFists {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponFists: DT_WeaponFists;
}
export interface CFlashbang {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_BaseCSGrenade: DT_BaseCSGrenade;
}
export interface CFogController {
    DT_FogController: DT_FogController;
}
export interface CFootstepControl {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_BaseToggle: DT_BaseToggle;
    DT_BaseTrigger: DT_BaseTrigger;
    DT_FootstepControl: DT_FootstepControl;
}
export interface CFunc_Dust {
    DT_CollisionProperty: DT_CollisionProperty;
    DT_Func_Dust: DT_Func_Dust;
}
export interface CFunc_LOD {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_Func_LOD: DT_Func_LOD;
}
export interface CFuncAreaPortalWindow {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_FuncAreaPortalWindow: DT_FuncAreaPortalWindow;
}
export interface CFuncBrush {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
}
export interface CFuncConveyor {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_FuncConveyor: DT_FuncConveyor;
}
export interface CFuncLadder {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_FuncLadder: DT_FuncLadder;
}
export interface CFuncMonitor {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
}
export interface CFuncMoveLinear {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_BaseToggle: DT_BaseToggle;
    DT_FuncMoveLinear: DT_FuncMoveLinear;
}
export interface CFuncOccluder {
    DT_FuncOccluder: DT_FuncOccluder;
}
export interface CFuncReflectiveGlass {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
}
export interface CFuncRotating {
    DT_BaseEntity: DT_BaseEntity;
    DT_FuncRotating: DT_FuncRotating;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_CollisionProperty: DT_CollisionProperty;
}
export interface CFuncSmokeVolume {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_FuncSmokeVolume: DT_FuncSmokeVolume;
}
export interface CFuncTrackTrain {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
}
export interface CGameRulesProxy {
}
export interface CGrassBurn {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_GrassBurn: DT_GrassBurn;
}
export interface CHandleTest {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_HandleTest: DT_HandleTest;
}
export interface CHEGrenade {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_BaseCSGrenade: DT_BaseCSGrenade;
}
export interface CHostage {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flEncodedController: m_flEncodedController;
    m_flexWeight: m_flexWeight;
    DT_BCCLocalPlayerExclusive: DT_BCCLocalPlayerExclusive;
    m_hMyWeapons: m_hMyWeapons;
    m_hMyWearables: m_hMyWearables;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_BaseCombatCharacter: DT_BaseCombatCharacter;
    DT_CHostage: DT_CHostage;
}
export interface CHostageCarriableProp {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    DT_BaseAnimating: DT_BaseAnimating;
}
export interface CIncendiaryGrenade {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_BaseCSGrenade: DT_BaseCSGrenade;
}
export interface CInferno {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    m_fireXDelta: m_fireXDelta;
    m_fireYDelta: m_fireYDelta;
    m_fireZDelta: m_fireZDelta;
    m_bFireIsBurning: m_bFireIsBurning;
    DT_Inferno: DT_Inferno;
}
export interface CInfoLadderDismount {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
}
export interface CInfoMapRegion {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_InfoMapRegion: DT_InfoMapRegion;
}
export interface CInfoOverlayAccessor {
    DT_InfoOverlayAccessor: DT_InfoOverlayAccessor;
}
export interface CItem_Healthshot {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponBaseItem: DT_WeaponBaseItem;
}
export interface CItemCash {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
}
export interface CItemDogtags {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_ItemDogtags: DT_ItemDogtags;
}
export interface CKnife {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
}
export interface CKnifeGG {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
}
export interface CLightGlow {
    DT_LightGlow: DT_LightGlow;
}
export interface CMaterialModifyControl {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_MaterialModifyControl: DT_MaterialModifyControl;
}
export interface CMelee {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponMelee: DT_WeaponMelee;
}
export interface CMolotovGrenade {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_BaseCSGrenade: DT_BaseCSGrenade;
}
export interface CMolotovProjectile {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseGrenade: DT_BaseGrenade;
    DT_BaseCSGrenadeProjectile: DT_BaseCSGrenadeProjectile;
    DT_MolotovProjectile: DT_MolotovProjectile;
}
export interface CMovieDisplay {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_MovieDisplay: DT_MovieDisplay;
}
export interface CParadropChopper {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_ParadropChopper: DT_ParadropChopper;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_BaseAnimating: DT_BaseAnimating;
}
export interface CParticleFire {
    DT_ParticleFire: DT_ParticleFire;
}
export interface CParticlePerformanceMonitor {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_ParticlePerformanceMonitor: DT_ParticlePerformanceMonitor;
}
export interface CParticleSystem {
    DT_ParticleSystem: DT_ParticleSystem;
    m_vServerControlPoints: m_vServerControlPoints;
    m_iServerControlPointAssignments: m_iServerControlPointAssignments;
    m_hControlPointEnts: m_hControlPointEnts;
    m_iControlPointParents: m_iControlPointParents;
}
export interface CPhysBox {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
}
export interface CPhysBoxMultiplayer {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_PhysBoxMultiplayer: DT_PhysBoxMultiplayer;
}
export interface CPhysicsProp {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BreakableProp: DT_BreakableProp;
    DT_PhysicsProp: DT_PhysicsProp;
}
export interface CPhysicsPropMultiplayer {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BreakableProp: DT_BreakableProp;
    DT_PhysicsProp: DT_PhysicsProp;
    DT_PhysicsPropMultiplayer: DT_PhysicsPropMultiplayer;
}
export interface CPhysMagnet {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    DT_BaseAnimating: DT_BaseAnimating;
}
export interface CPhysPropAmmoBox {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BreakableProp: DT_BreakableProp;
    DT_PhysicsProp: DT_PhysicsProp;
    DT_PhysicsPropMultiplayer: DT_PhysicsPropMultiplayer;
}
export interface CPhysPropLootCrate {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BreakableProp: DT_BreakableProp;
    DT_PhysicsProp: DT_PhysicsProp;
    DT_PhysicsPropMultiplayer: DT_PhysicsPropMultiplayer;
    DT_PhysPropLootCrate: DT_PhysPropLootCrate;
}
export interface CPhysPropRadarJammer {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BreakableProp: DT_BreakableProp;
    DT_PhysicsProp: DT_PhysicsProp;
    DT_PhysicsPropMultiplayer: DT_PhysicsPropMultiplayer;
}
export interface CPhysPropWeaponUpgrade {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BreakableProp: DT_BreakableProp;
    DT_PhysicsProp: DT_PhysicsProp;
    DT_PhysicsPropMultiplayer: DT_PhysicsPropMultiplayer;
}
export interface CPlantedC4 {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_PlantedC4: DT_PlantedC4;
}
export interface CPlasma {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_Plasma: DT_Plasma;
}
export interface CPlayerPing {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_PlayerPing: DT_PlayerPing;
}
export interface CPlayerResource {
    m_iPing: m_iPing;
    m_iKills: m_iKills;
    m_iAssists: m_iAssists;
    m_iDeaths: m_iDeaths;
    m_bConnected: m_bConnected;
    m_iTeam: m_iTeam;
    m_iPendingTeam: m_iPendingTeam;
    m_bAlive: m_bAlive;
    m_iHealth: m_iHealth;
    m_iCoachingTeam: m_iCoachingTeam;
}
export interface CPointCamera {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_PointCamera: DT_PointCamera;
}
export interface CPointCommentaryNode {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_PointCommentaryNode: DT_PointCommentaryNode;
}
export interface CPointWorldText {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_PointWorldText: DT_PointWorldText;
}
export interface CPoseController {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    m_hProps: m_hProps;
    m_chPoseIndex: m_chPoseIndex;
    DT_PoseController: DT_PoseController;
}
export interface CPostProcessController {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPostProcessParameters: m_flPostProcessParameters;
    DT_PostProcessController: DT_PostProcessController;
}
export interface CPrecipitation {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_Precipitation: DT_Precipitation;
}
export interface CPrecipitationBlocker {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
}
export interface CPredictedViewModel {
    DT_BaseViewModel: DT_BaseViewModel;
}
export interface CProp_Hallucination {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_Prop_Hallucination: DT_Prop_Hallucination;
}
export interface CPropCounter {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_PropCounter: DT_PropCounter;
}
export interface CPropDoorRotating {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BreakableProp: DT_BreakableProp;
    DT_DynamicProp: DT_DynamicProp;
}
export interface CPropJeep {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_PropVehicleDriveable: DT_PropVehicleDriveable;
    DT_PropJeep: DT_PropJeep;
}
export interface CPropVehicleDriveable {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_PropVehicleDriveable: DT_PropVehicleDriveable;
}
export interface CRagdollManager {
    DT_RagdollManager: DT_RagdollManager;
}
export interface CRagdollProp {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_Ragdoll: DT_Ragdoll;
}
export interface CRagdollPropAttached {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_Ragdoll: DT_Ragdoll;
    DT_Ragdoll_Attached: DT_Ragdoll_Attached;
}
export interface CRopeKeyframe {
    DT_RopeKeyframe: DT_RopeKeyframe;
}
export interface CSCAR17 {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponCSBaseGun: DT_WeaponCSBaseGun;
}
export interface CSceneEntity {
    _LPT_m_hActorList_16: _LPT_m_hActorList_16;
    _ST_m_hActorList_16: _ST_m_hActorList_16;
    DT_SceneEntity: DT_SceneEntity;
}
export interface CSensorGrenade {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_BaseCSGrenade: DT_BaseCSGrenade;
}
export interface CSensorGrenadeProjectile {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseGrenade: DT_BaseGrenade;
    DT_BaseCSGrenadeProjectile: DT_BaseCSGrenadeProjectile;
}
export interface CShadowControl {
    DT_ShadowControl: DT_ShadowControl;
}
export interface CSlideshowDisplay {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    m_chCurrentSlideLists: m_chCurrentSlideLists;
    DT_SlideshowDisplay: DT_SlideshowDisplay;
}
export interface CSmokeGrenade {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_BaseCSGrenade: DT_BaseCSGrenade;
}
export interface CSmokeGrenadeProjectile {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseGrenade: DT_BaseGrenade;
    DT_BaseCSGrenadeProjectile: DT_BaseCSGrenadeProjectile;
    DT_SmokeGrenadeProjectile: DT_SmokeGrenadeProjectile;
}
export interface CSmokeStack {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_SmokeStack: DT_SmokeStack;
}
export interface CSnowball {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_BaseCSGrenade: DT_BaseCSGrenade;
}
export interface CSnowballPile {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    DT_BaseAnimating: DT_BaseAnimating;
}
export interface CSnowballProjectile {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseGrenade: DT_BaseGrenade;
    DT_BaseCSGrenadeProjectile: DT_BaseCSGrenadeProjectile;
}
export interface CSpatialEntity {
    DT_SpatialEntity: DT_SpatialEntity;
}
export interface CSpotlightEnd {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_SpotlightEnd: DT_SpotlightEnd;
}
export interface CSprite {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_Sprite: DT_Sprite;
}
export interface CSpriteOriented {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_Sprite: DT_Sprite;
}
export interface CSpriteTrail {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_Sprite: DT_Sprite;
    DT_SpriteTrail: DT_SpriteTrail;
}
export interface CStatueProp {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BreakableProp: DT_BreakableProp;
    DT_PhysicsProp: DT_PhysicsProp;
    DT_StatueProp: DT_StatueProp;
}
export interface CSteamJet {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_SteamJet: DT_SteamJet;
}
export interface CSun {
    DT_Sun: DT_Sun;
}
export interface CSunlightShadowControl {
    DT_SunlightShadowControl: DT_SunlightShadowControl;
}
export interface CSurvivalSpawnChopper {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_SurvivalSpawnChopper: DT_SurvivalSpawnChopper;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_BaseAnimating: DT_BaseAnimating;
}
export interface CTablet {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponTablet: DT_WeaponTablet;
}
export interface CTeam {
    DT_Team: DT_Team;
}
export interface CTeamplayRoundBasedRulesProxy {
    m_flNextRespawnWave: m_flNextRespawnWave;
    m_TeamRespawnWaveTimes: m_TeamRespawnWaveTimes;
    m_bTeamReady: m_bTeamReady;
    DT_TeamplayRoundBasedRules: DT_TeamplayRoundBasedRules;
}
export interface CTEArmorRicochet {
    DT_TEMetalSparks: DT_TEMetalSparks;
}
export interface CTEBaseBeam {
    DT_BaseBeam: DT_BaseBeam;
}
export interface CTEBeamEntPoint {
    DT_BaseBeam: DT_BaseBeam;
    DT_TEBeamEntPoint: DT_TEBeamEntPoint;
}
export interface CTEBeamEnts {
    DT_BaseBeam: DT_BaseBeam;
    DT_TEBeamEnts: DT_TEBeamEnts;
}
export interface CTEBeamFollow {
    DT_BaseBeam: DT_BaseBeam;
    DT_TEBeamFollow: DT_TEBeamFollow;
}
export interface CTEBeamLaser {
    DT_BaseBeam: DT_BaseBeam;
    DT_TEBeamLaser: DT_TEBeamLaser;
}
export interface CTEBeamPoints {
    DT_BaseBeam: DT_BaseBeam;
    DT_TEBeamPoints: DT_TEBeamPoints;
}
export interface CTEBeamRing {
    DT_BaseBeam: DT_BaseBeam;
    DT_TEBeamRing: DT_TEBeamRing;
}
export interface CTEBeamRingPoint {
    DT_BaseBeam: DT_BaseBeam;
    DT_TEBeamRingPoint: DT_TEBeamRingPoint;
}
export interface CTEBeamSpline {
    DT_TEBeamSpline: DT_TEBeamSpline;
}
export interface CTEBloodSprite {
    DT_TEBloodSprite: DT_TEBloodSprite;
}
export interface CTEBloodStream {
    DT_TEParticleSystem: DT_TEParticleSystem;
    DT_TEBloodStream: DT_TEBloodStream;
}
export interface CTEBreakModel {
    DT_TEBreakModel: DT_TEBreakModel;
}
export interface CTEBSPDecal {
    DT_TEBSPDecal: DT_TEBSPDecal;
}
export interface CTEBubbles {
    DT_TEBubbles: DT_TEBubbles;
}
export interface CTEBubbleTrail {
    DT_TEBubbleTrail: DT_TEBubbleTrail;
}
export interface CTEClientProjectile {
    DT_TEClientProjectile: DT_TEClientProjectile;
}
export interface CTEDecal {
    DT_TEDecal: DT_TEDecal;
}
export interface CTEDust {
    DT_TEParticleSystem: DT_TEParticleSystem;
    DT_TEDust: DT_TEDust;
}
export interface CTEDynamicLight {
    DT_TEDynamicLight: DT_TEDynamicLight;
}
export interface CTEEffectDispatch {
    DT_EffectData: DT_EffectData;
}
export interface CTEEnergySplash {
    DT_TEEnergySplash: DT_TEEnergySplash;
}
export interface CTEExplosion {
    DT_TEParticleSystem: DT_TEParticleSystem;
    DT_TEExplosion: DT_TEExplosion;
}
export interface CTEFireBullets {
    DT_TEFireBullets: DT_TEFireBullets;
}
export interface CTEFizz {
    DT_TEFizz: DT_TEFizz;
}
export interface CTEFootprintDecal {
    DT_TEFootprintDecal: DT_TEFootprintDecal;
}
export interface CTEFoundryHelpers {
    DT_TEFoundryHelpers: DT_TEFoundryHelpers;
}
export interface CTEGaussExplosion {
    DT_TEParticleSystem: DT_TEParticleSystem;
    DT_TEGaussExplosion: DT_TEGaussExplosion;
}
export interface CTEGlowSprite {
    DT_TEGlowSprite: DT_TEGlowSprite;
}
export interface CTEImpact {
    DT_TEImpact: DT_TEImpact;
}
export interface CTEKillPlayerAttachments {
    DT_TEKillPlayerAttachments: DT_TEKillPlayerAttachments;
}
export interface CTELargeFunnel {
    DT_TEParticleSystem: DT_TEParticleSystem;
    DT_TELargeFunnel: DT_TELargeFunnel;
}
export interface CTEMetalSparks {
    DT_TEMetalSparks: DT_TEMetalSparks;
}
export interface CTEMuzzleFlash {
    DT_TEMuzzleFlash: DT_TEMuzzleFlash;
}
export interface CTEParticleSystem {
    DT_TEParticleSystem: DT_TEParticleSystem;
}
export interface CTEPhysicsProp {
    DT_TEPhysicsProp: DT_TEPhysicsProp;
}
export interface CTEPlantBomb {
    DT_TEPlantBomb: DT_TEPlantBomb;
}
export interface CTEPlayerAnimEvent {
    DT_TEPlayerAnimEvent: DT_TEPlayerAnimEvent;
}
export interface CTEPlayerDecal {
    DT_TEPlayerDecal: DT_TEPlayerDecal;
}
export interface CTEProjectedDecal {
    DT_TEProjectedDecal: DT_TEProjectedDecal;
}
export interface CTERadioIcon {
    DT_TERadioIcon: DT_TERadioIcon;
}
export interface CTEShatterSurface {
    DT_TEShatterSurface: DT_TEShatterSurface;
}
export interface CTEShowLine {
    DT_TEParticleSystem: DT_TEParticleSystem;
    DT_TEShowLine: DT_TEShowLine;
}
export interface CTesla {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_Tesla: DT_Tesla;
}
export interface CTESmoke {
    DT_TESmoke: DT_TESmoke;
}
export interface CTESparks {
    DT_TEParticleSystem: DT_TEParticleSystem;
    DT_TESparks: DT_TESparks;
}
export interface CTESprite {
    DT_TESprite: DT_TESprite;
}
export interface CTESpriteSpray {
    DT_TESpriteSpray: DT_TESpriteSpray;
}
export interface CTest_ProxyToggle_Networkable {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_ProxyToggle_ProxiedData: DT_ProxyToggle_ProxiedData;
}
export interface CTestTraceline {
    DT_TestTraceline: DT_TestTraceline;
}
export interface CTEWorldDecal {
    DT_TEWorldDecal: DT_TEWorldDecal;
}
export interface CTriggerPlayerMovement {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_BaseToggle: DT_BaseToggle;
    DT_BaseTrigger: DT_BaseTrigger;
}
export interface CTriggerSoundOperator {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_BaseToggle: DT_BaseToggle;
    DT_BaseTrigger: DT_BaseTrigger;
    DT_TriggerSoundOperator: DT_TriggerSoundOperator;
}
export interface CVGuiScreen {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_VGuiScreen: DT_VGuiScreen;
}
export interface CVoteController {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    m_nVoteOptionCount: m_nVoteOptionCount;
    DT_VoteController: DT_VoteController;
}
export interface CWaterBullet {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    DT_BaseAnimating: DT_BaseAnimating;
}
export interface CWaterLODControl {
    DT_WaterLODControl: DT_WaterLODControl;
}
export interface CWeaponAug {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponCSBaseGun: DT_WeaponCSBaseGun;
}
export interface CWeaponAWP {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponCSBaseGun: DT_WeaponCSBaseGun;
}
export interface CWeaponBaseItem {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponBaseItem: DT_WeaponBaseItem;
}
export interface CWeaponBizon {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponCSBaseGun: DT_WeaponCSBaseGun;
}
export interface CWeaponCSBase {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
}
export interface CWeaponCSBaseGun {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponCSBaseGun: DT_WeaponCSBaseGun;
}
export interface CWeaponCycler {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
}
export interface CWeaponElite {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponCSBaseGun: DT_WeaponCSBaseGun;
}
export interface CWeaponFamas {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponCSBaseGun: DT_WeaponCSBaseGun;
}
export interface CWeaponFiveSeven {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponCSBaseGun: DT_WeaponCSBaseGun;
}
export interface CWeaponG3SG1 {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponCSBaseGun: DT_WeaponCSBaseGun;
}
export interface CWeaponGalil {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponCSBaseGun: DT_WeaponCSBaseGun;
}
export interface CWeaponGalilAR {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponCSBaseGun: DT_WeaponCSBaseGun;
}
export interface CWeaponGlock {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponCSBaseGun: DT_WeaponCSBaseGun;
}
export interface CWeaponHKP2000 {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponCSBaseGun: DT_WeaponCSBaseGun;
}
export interface CWeaponM249 {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponCSBaseGun: DT_WeaponCSBaseGun;
}
export interface CWeaponM3 {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponM3: DT_WeaponM3;
}
export interface CWeaponM4A1 {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponCSBaseGun: DT_WeaponCSBaseGun;
}
export interface CWeaponMAC10 {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponCSBaseGun: DT_WeaponCSBaseGun;
}
export interface CWeaponMag7 {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponCSBaseGun: DT_WeaponCSBaseGun;
}
export interface CWeaponMP5Navy {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponCSBaseGun: DT_WeaponCSBaseGun;
}
export interface CWeaponMP7 {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponCSBaseGun: DT_WeaponCSBaseGun;
}
export interface CWeaponMP9 {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponCSBaseGun: DT_WeaponCSBaseGun;
}
export interface CWeaponNegev {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponCSBaseGun: DT_WeaponCSBaseGun;
}
export interface CWeaponNOVA {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponNOVA: DT_WeaponNOVA;
}
export interface CWeaponP228 {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponCSBaseGun: DT_WeaponCSBaseGun;
}
export interface CWeaponP250 {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponCSBaseGun: DT_WeaponCSBaseGun;
}
export interface CWeaponP90 {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponCSBaseGun: DT_WeaponCSBaseGun;
}
export interface CWeaponSawedoff {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponSawedoff: DT_WeaponSawedoff;
}
export interface CWeaponSCAR20 {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponCSBaseGun: DT_WeaponCSBaseGun;
}
export interface CWeaponScout {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponCSBaseGun: DT_WeaponCSBaseGun;
}
export interface CWeaponSG550 {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponCSBaseGun: DT_WeaponCSBaseGun;
}
export interface CWeaponSG552 {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponCSBaseGun: DT_WeaponCSBaseGun;
}
export interface CWeaponSG556 {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponCSBaseGun: DT_WeaponCSBaseGun;
}
export interface CWeaponShield {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponCSBaseGun: DT_WeaponCSBaseGun;
}
export interface CWeaponSSG08 {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponCSBaseGun: DT_WeaponCSBaseGun;
}
export interface CWeaponTaser {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponCSBaseGun: DT_WeaponCSBaseGun;
    DT_WeaponTaser: DT_WeaponTaser;
}
export interface CWeaponTec9 {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponCSBaseGun: DT_WeaponCSBaseGun;
}
export interface CWeaponTMP {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponCSBaseGun: DT_WeaponCSBaseGun;
}
export interface CWeaponUMP45 {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponCSBaseGun: DT_WeaponCSBaseGun;
}
export interface CWeaponUSP {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponCSBaseGun: DT_WeaponCSBaseGun;
}
export interface CWeaponXM1014 {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponXM1014: DT_WeaponXM1014;
}
export interface CWeaponZoneRepulsor {
    DT_BaseEntity: DT_BaseEntity;
    DT_ServerAnimationData: DT_ServerAnimationData;
    DT_WeaponCSBase: DT_WeaponCSBase;
    m_bSpottedByMask: m_bSpottedByMask;
    m_flPoseParameter: m_flPoseParameter;
    m_flEncodedController: m_flEncodedController;
    DT_CollisionProperty: DT_CollisionProperty;
    _LPT_m_AnimOverlay_15: _LPT_m_AnimOverlay_15;
    DT_Animationlayer: DT_Animationlayer;
    m_flexWeight: m_flexWeight;
    _LPT_m_Attributes_32: _LPT_m_Attributes_32;
    DT_ScriptCreatedAttribute: DT_ScriptCreatedAttribute;
    DT_ScriptCreatedItem: DT_ScriptCreatedItem;
    DT_AttributeContainer: DT_AttributeContainer;
    DT_LocalWeaponData: DT_LocalWeaponData;
    DT_LocalActiveWeaponData: DT_LocalActiveWeaponData;
    DT_BaseAnimating: DT_BaseAnimating;
    DT_BaseFlex: DT_BaseFlex;
    DT_EconEntity: DT_EconEntity;
    DT_BaseCombatWeapon: DT_BaseCombatWeapon;
    DT_WeaponCSBaseGun: DT_WeaponCSBaseGun;
}
export interface CWorld {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_WORLD: DT_WORLD;
}
export interface CWorldVguiText {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_WorldVguiText: DT_WorldVguiText;
}
export interface DustTrail {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_DustTrail: DT_DustTrail;
}
export interface MovieExplosion {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
}
export interface ParticleSmokeGrenade {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_ParticleSmokeGrenade: DT_ParticleSmokeGrenade;
}
export interface RocketTrail {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_RocketTrail: DT_RocketTrail;
}
export interface SmokeTrail {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_SmokeTrail: DT_SmokeTrail;
}
export interface SporeExplosion {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_SporeExplosion: DT_SporeExplosion;
}
export interface SporeTrail {
    DT_BaseEntity: DT_BaseEntity;
    DT_CollisionProperty: DT_CollisionProperty;
    m_bSpottedByMask: m_bSpottedByMask;
    DT_SporeTrail: DT_SporeTrail;
}
