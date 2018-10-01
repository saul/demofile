import * as $protobuf from "protobufjs";
/** ECstrike15UserMessages enum. */
export enum ECstrike15UserMessages {
    CS_UM_VGUIMenu = 1,
    CS_UM_Geiger = 2,
    CS_UM_Train = 3,
    CS_UM_HudText = 4,
    CS_UM_SayText = 5,
    CS_UM_SayText2 = 6,
    CS_UM_TextMsg = 7,
    CS_UM_HudMsg = 8,
    CS_UM_ResetHud = 9,
    CS_UM_GameTitle = 10,
    CS_UM_Shake = 12,
    CS_UM_Fade = 13,
    CS_UM_Rumble = 14,
    CS_UM_CloseCaption = 15,
    CS_UM_CloseCaptionDirect = 16,
    CS_UM_SendAudio = 17,
    CS_UM_RawAudio = 18,
    CS_UM_VoiceMask = 19,
    CS_UM_RequestState = 20,
    CS_UM_Damage = 21,
    CS_UM_RadioText = 22,
    CS_UM_HintText = 23,
    CS_UM_KeyHintText = 24,
    CS_UM_ProcessSpottedEntityUpdate = 25,
    CS_UM_ReloadEffect = 26,
    CS_UM_AdjustMoney = 27,
    CS_UM_UpdateTeamMoney = 28,
    CS_UM_StopSpectatorMode = 29,
    CS_UM_KillCam = 30,
    CS_UM_DesiredTimescale = 31,
    CS_UM_CurrentTimescale = 32,
    CS_UM_AchievementEvent = 33,
    CS_UM_MatchEndConditions = 34,
    CS_UM_DisconnectToLobby = 35,
    CS_UM_PlayerStatsUpdate = 36,
    CS_UM_DisplayInventory = 37,
    CS_UM_WarmupHasEnded = 38,
    CS_UM_ClientInfo = 39,
    CS_UM_XRankGet = 40,
    CS_UM_XRankUpd = 41,
    CS_UM_CallVoteFailed = 45,
    CS_UM_VoteStart = 46,
    CS_UM_VotePass = 47,
    CS_UM_VoteFailed = 48,
    CS_UM_VoteSetup = 49,
    CS_UM_ServerRankRevealAll = 50,
    CS_UM_SendLastKillerDamageToClient = 51,
    CS_UM_ServerRankUpdate = 52,
    CS_UM_ItemPickup = 53,
    CS_UM_ShowMenu = 54,
    CS_UM_BarTime = 55,
    CS_UM_AmmoDenied = 56,
    CS_UM_MarkAchievement = 57,
    CS_UM_MatchStatsUpdate = 58,
    CS_UM_ItemDrop = 59,
    CS_UM_GlowPropTurnOff = 60,
    CS_UM_SendPlayerItemDrops = 61,
    CS_UM_RoundBackupFilenames = 62,
    CS_UM_SendPlayerItemFound = 63,
    CS_UM_ReportHit = 64,
    CS_UM_XpUpdate = 65,
    CS_UM_QuestProgress = 66
}

/** Properties of a CCSUsrMsg_VGUIMenu. */
export interface ICCSUsrMsg_VGUIMenu {

    /** CCSUsrMsg_VGUIMenu name */
    name?: (string|null);

    /** CCSUsrMsg_VGUIMenu show */
    show?: (boolean|null);

    /** CCSUsrMsg_VGUIMenu subkeys */
    subkeys?: (CCSUsrMsg_VGUIMenu.ISubkey[]|null);
}

/** Represents a CCSUsrMsg_VGUIMenu. */
export class CCSUsrMsg_VGUIMenu implements ICCSUsrMsg_VGUIMenu {

    /**
     * Constructs a new CCSUsrMsg_VGUIMenu.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_VGUIMenu);

    /** CCSUsrMsg_VGUIMenu name. */
    public name: string;

    /** CCSUsrMsg_VGUIMenu show. */
    public show: boolean;

    /** CCSUsrMsg_VGUIMenu subkeys. */
    public subkeys: CCSUsrMsg_VGUIMenu.ISubkey[];

    /**
     * Decodes a CCSUsrMsg_VGUIMenu message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_VGUIMenu
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_VGUIMenu;
}

export namespace CCSUsrMsg_VGUIMenu {

    /** Properties of a Subkey. */
    interface ISubkey {

        /** Subkey name */
        name?: (string|null);

        /** Subkey str */
        str?: (string|null);
    }

    /** Represents a Subkey. */
    class Subkey implements ISubkey {

        /**
         * Constructs a new Subkey.
         * @param [properties] Properties to set
         */
        constructor(properties?: CCSUsrMsg_VGUIMenu.ISubkey);

        /** Subkey name. */
        public name: string;

        /** Subkey str. */
        public str: string;

        /**
         * Decodes a Subkey message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Subkey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_VGUIMenu.Subkey;
    }
}

/** Properties of a CCSUsrMsg_Geiger. */
export interface ICCSUsrMsg_Geiger {

    /** CCSUsrMsg_Geiger range */
    range?: (number|null);
}

/** Represents a CCSUsrMsg_Geiger. */
export class CCSUsrMsg_Geiger implements ICCSUsrMsg_Geiger {

    /**
     * Constructs a new CCSUsrMsg_Geiger.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_Geiger);

    /** CCSUsrMsg_Geiger range. */
    public range: number;

    /**
     * Decodes a CCSUsrMsg_Geiger message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_Geiger
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_Geiger;
}

/** Properties of a CCSUsrMsg_Train. */
export interface ICCSUsrMsg_Train {

    /** CCSUsrMsg_Train train */
    train?: (number|null);
}

/** Represents a CCSUsrMsg_Train. */
export class CCSUsrMsg_Train implements ICCSUsrMsg_Train {

    /**
     * Constructs a new CCSUsrMsg_Train.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_Train);

    /** CCSUsrMsg_Train train. */
    public train: number;

    /**
     * Decodes a CCSUsrMsg_Train message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_Train
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_Train;
}

/** Properties of a CCSUsrMsg_HudText. */
export interface ICCSUsrMsg_HudText {

    /** CCSUsrMsg_HudText text */
    text?: (string|null);
}

/** Represents a CCSUsrMsg_HudText. */
export class CCSUsrMsg_HudText implements ICCSUsrMsg_HudText {

    /**
     * Constructs a new CCSUsrMsg_HudText.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_HudText);

    /** CCSUsrMsg_HudText text. */
    public text: string;

    /**
     * Decodes a CCSUsrMsg_HudText message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_HudText
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_HudText;
}

/** Properties of a CCSUsrMsg_SayText. */
export interface ICCSUsrMsg_SayText {

    /** CCSUsrMsg_SayText entIdx */
    entIdx?: (number|null);

    /** CCSUsrMsg_SayText text */
    text?: (string|null);

    /** CCSUsrMsg_SayText chat */
    chat?: (boolean|null);

    /** CCSUsrMsg_SayText textallchat */
    textallchat?: (boolean|null);
}

/** Represents a CCSUsrMsg_SayText. */
export class CCSUsrMsg_SayText implements ICCSUsrMsg_SayText {

    /**
     * Constructs a new CCSUsrMsg_SayText.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_SayText);

    /** CCSUsrMsg_SayText entIdx. */
    public entIdx: number;

    /** CCSUsrMsg_SayText text. */
    public text: string;

    /** CCSUsrMsg_SayText chat. */
    public chat: boolean;

    /** CCSUsrMsg_SayText textallchat. */
    public textallchat: boolean;

    /**
     * Decodes a CCSUsrMsg_SayText message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_SayText
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_SayText;
}

/** Properties of a CCSUsrMsg_SayText2. */
export interface ICCSUsrMsg_SayText2 {

    /** CCSUsrMsg_SayText2 entIdx */
    entIdx?: (number|null);

    /** CCSUsrMsg_SayText2 chat */
    chat?: (boolean|null);

    /** CCSUsrMsg_SayText2 msgName */
    msgName?: (string|null);

    /** CCSUsrMsg_SayText2 params */
    params?: (string[]|null);

    /** CCSUsrMsg_SayText2 textallchat */
    textallchat?: (boolean|null);
}

/** Represents a CCSUsrMsg_SayText2. */
export class CCSUsrMsg_SayText2 implements ICCSUsrMsg_SayText2 {

    /**
     * Constructs a new CCSUsrMsg_SayText2.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_SayText2);

    /** CCSUsrMsg_SayText2 entIdx. */
    public entIdx: number;

    /** CCSUsrMsg_SayText2 chat. */
    public chat: boolean;

    /** CCSUsrMsg_SayText2 msgName. */
    public msgName: string;

    /** CCSUsrMsg_SayText2 params. */
    public params: string[];

    /** CCSUsrMsg_SayText2 textallchat. */
    public textallchat: boolean;

    /**
     * Decodes a CCSUsrMsg_SayText2 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_SayText2
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_SayText2;
}

/** Properties of a CCSUsrMsg_TextMsg. */
export interface ICCSUsrMsg_TextMsg {

    /** CCSUsrMsg_TextMsg msgDst */
    msgDst?: (number|null);

    /** CCSUsrMsg_TextMsg params */
    params?: (string[]|null);
}

/** Represents a CCSUsrMsg_TextMsg. */
export class CCSUsrMsg_TextMsg implements ICCSUsrMsg_TextMsg {

    /**
     * Constructs a new CCSUsrMsg_TextMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_TextMsg);

    /** CCSUsrMsg_TextMsg msgDst. */
    public msgDst: number;

    /** CCSUsrMsg_TextMsg params. */
    public params: string[];

    /**
     * Decodes a CCSUsrMsg_TextMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_TextMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_TextMsg;
}

/** Properties of a CCSUsrMsg_HudMsg. */
export interface ICCSUsrMsg_HudMsg {

    /** CCSUsrMsg_HudMsg channel */
    channel?: (number|null);

    /** CCSUsrMsg_HudMsg pos */
    pos?: (ICMsgVector2D|null);

    /** CCSUsrMsg_HudMsg clr1 */
    clr1?: (ICMsgRGBA|null);

    /** CCSUsrMsg_HudMsg clr2 */
    clr2?: (ICMsgRGBA|null);

    /** CCSUsrMsg_HudMsg effect */
    effect?: (number|null);

    /** CCSUsrMsg_HudMsg fadeInTime */
    fadeInTime?: (number|null);

    /** CCSUsrMsg_HudMsg fadeOutTime */
    fadeOutTime?: (number|null);

    /** CCSUsrMsg_HudMsg holdTime */
    holdTime?: (number|null);

    /** CCSUsrMsg_HudMsg fxTime */
    fxTime?: (number|null);

    /** CCSUsrMsg_HudMsg text */
    text?: (string|null);
}

/** Represents a CCSUsrMsg_HudMsg. */
export class CCSUsrMsg_HudMsg implements ICCSUsrMsg_HudMsg {

    /**
     * Constructs a new CCSUsrMsg_HudMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_HudMsg);

    /** CCSUsrMsg_HudMsg channel. */
    public channel: number;

    /** CCSUsrMsg_HudMsg pos. */
    public pos?: (ICMsgVector2D|null);

    /** CCSUsrMsg_HudMsg clr1. */
    public clr1?: (ICMsgRGBA|null);

    /** CCSUsrMsg_HudMsg clr2. */
    public clr2?: (ICMsgRGBA|null);

    /** CCSUsrMsg_HudMsg effect. */
    public effect: number;

    /** CCSUsrMsg_HudMsg fadeInTime. */
    public fadeInTime: number;

    /** CCSUsrMsg_HudMsg fadeOutTime. */
    public fadeOutTime: number;

    /** CCSUsrMsg_HudMsg holdTime. */
    public holdTime: number;

    /** CCSUsrMsg_HudMsg fxTime. */
    public fxTime: number;

    /** CCSUsrMsg_HudMsg text. */
    public text: string;

    /**
     * Decodes a CCSUsrMsg_HudMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_HudMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_HudMsg;
}

/** Properties of a CCSUsrMsg_Shake. */
export interface ICCSUsrMsg_Shake {

    /** CCSUsrMsg_Shake command */
    command?: (number|null);

    /** CCSUsrMsg_Shake localAmplitude */
    localAmplitude?: (number|null);

    /** CCSUsrMsg_Shake frequency */
    frequency?: (number|null);

    /** CCSUsrMsg_Shake duration */
    duration?: (number|null);
}

/** Represents a CCSUsrMsg_Shake. */
export class CCSUsrMsg_Shake implements ICCSUsrMsg_Shake {

    /**
     * Constructs a new CCSUsrMsg_Shake.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_Shake);

    /** CCSUsrMsg_Shake command. */
    public command: number;

    /** CCSUsrMsg_Shake localAmplitude. */
    public localAmplitude: number;

    /** CCSUsrMsg_Shake frequency. */
    public frequency: number;

    /** CCSUsrMsg_Shake duration. */
    public duration: number;

    /**
     * Decodes a CCSUsrMsg_Shake message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_Shake
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_Shake;
}

/** Properties of a CCSUsrMsg_Fade. */
export interface ICCSUsrMsg_Fade {

    /** CCSUsrMsg_Fade duration */
    duration?: (number|null);

    /** CCSUsrMsg_Fade holdTime */
    holdTime?: (number|null);

    /** CCSUsrMsg_Fade flags */
    flags?: (number|null);

    /** CCSUsrMsg_Fade clr */
    clr?: (ICMsgRGBA|null);
}

/** Represents a CCSUsrMsg_Fade. */
export class CCSUsrMsg_Fade implements ICCSUsrMsg_Fade {

    /**
     * Constructs a new CCSUsrMsg_Fade.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_Fade);

    /** CCSUsrMsg_Fade duration. */
    public duration: number;

    /** CCSUsrMsg_Fade holdTime. */
    public holdTime: number;

    /** CCSUsrMsg_Fade flags. */
    public flags: number;

    /** CCSUsrMsg_Fade clr. */
    public clr?: (ICMsgRGBA|null);

    /**
     * Decodes a CCSUsrMsg_Fade message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_Fade
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_Fade;
}

/** Properties of a CCSUsrMsg_Rumble. */
export interface ICCSUsrMsg_Rumble {

    /** CCSUsrMsg_Rumble index */
    index?: (number|null);

    /** CCSUsrMsg_Rumble data */
    data?: (number|null);

    /** CCSUsrMsg_Rumble flags */
    flags?: (number|null);
}

/** Represents a CCSUsrMsg_Rumble. */
export class CCSUsrMsg_Rumble implements ICCSUsrMsg_Rumble {

    /**
     * Constructs a new CCSUsrMsg_Rumble.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_Rumble);

    /** CCSUsrMsg_Rumble index. */
    public index: number;

    /** CCSUsrMsg_Rumble data. */
    public data: number;

    /** CCSUsrMsg_Rumble flags. */
    public flags: number;

    /**
     * Decodes a CCSUsrMsg_Rumble message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_Rumble
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_Rumble;
}

/** Properties of a CCSUsrMsg_CloseCaption. */
export interface ICCSUsrMsg_CloseCaption {

    /** CCSUsrMsg_CloseCaption hash */
    hash?: (number|null);

    /** CCSUsrMsg_CloseCaption duration */
    duration?: (number|null);

    /** CCSUsrMsg_CloseCaption fromPlayer */
    fromPlayer?: (boolean|null);
}

/** Represents a CCSUsrMsg_CloseCaption. */
export class CCSUsrMsg_CloseCaption implements ICCSUsrMsg_CloseCaption {

    /**
     * Constructs a new CCSUsrMsg_CloseCaption.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_CloseCaption);

    /** CCSUsrMsg_CloseCaption hash. */
    public hash: number;

    /** CCSUsrMsg_CloseCaption duration. */
    public duration: number;

    /** CCSUsrMsg_CloseCaption fromPlayer. */
    public fromPlayer: boolean;

    /**
     * Decodes a CCSUsrMsg_CloseCaption message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_CloseCaption
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_CloseCaption;
}

/** Properties of a CCSUsrMsg_CloseCaptionDirect. */
export interface ICCSUsrMsg_CloseCaptionDirect {

    /** CCSUsrMsg_CloseCaptionDirect hash */
    hash?: (number|null);

    /** CCSUsrMsg_CloseCaptionDirect duration */
    duration?: (number|null);

    /** CCSUsrMsg_CloseCaptionDirect fromPlayer */
    fromPlayer?: (boolean|null);
}

/** Represents a CCSUsrMsg_CloseCaptionDirect. */
export class CCSUsrMsg_CloseCaptionDirect implements ICCSUsrMsg_CloseCaptionDirect {

    /**
     * Constructs a new CCSUsrMsg_CloseCaptionDirect.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_CloseCaptionDirect);

    /** CCSUsrMsg_CloseCaptionDirect hash. */
    public hash: number;

    /** CCSUsrMsg_CloseCaptionDirect duration. */
    public duration: number;

    /** CCSUsrMsg_CloseCaptionDirect fromPlayer. */
    public fromPlayer: boolean;

    /**
     * Decodes a CCSUsrMsg_CloseCaptionDirect message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_CloseCaptionDirect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_CloseCaptionDirect;
}

/** Properties of a CCSUsrMsg_SendAudio. */
export interface ICCSUsrMsg_SendAudio {

    /** CCSUsrMsg_SendAudio radioSound */
    radioSound?: (string|null);
}

/** Represents a CCSUsrMsg_SendAudio. */
export class CCSUsrMsg_SendAudio implements ICCSUsrMsg_SendAudio {

    /**
     * Constructs a new CCSUsrMsg_SendAudio.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_SendAudio);

    /** CCSUsrMsg_SendAudio radioSound. */
    public radioSound: string;

    /**
     * Decodes a CCSUsrMsg_SendAudio message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_SendAudio
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_SendAudio;
}

/** Properties of a CCSUsrMsg_RawAudio. */
export interface ICCSUsrMsg_RawAudio {

    /** CCSUsrMsg_RawAudio pitch */
    pitch?: (number|null);

    /** CCSUsrMsg_RawAudio entidx */
    entidx?: (number|null);

    /** CCSUsrMsg_RawAudio duration */
    duration?: (number|null);

    /** CCSUsrMsg_RawAudio voiceFilename */
    voiceFilename?: (string|null);
}

/** Represents a CCSUsrMsg_RawAudio. */
export class CCSUsrMsg_RawAudio implements ICCSUsrMsg_RawAudio {

    /**
     * Constructs a new CCSUsrMsg_RawAudio.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_RawAudio);

    /** CCSUsrMsg_RawAudio pitch. */
    public pitch: number;

    /** CCSUsrMsg_RawAudio entidx. */
    public entidx: number;

    /** CCSUsrMsg_RawAudio duration. */
    public duration: number;

    /** CCSUsrMsg_RawAudio voiceFilename. */
    public voiceFilename: string;

    /**
     * Decodes a CCSUsrMsg_RawAudio message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_RawAudio
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_RawAudio;
}

/** Properties of a CCSUsrMsg_VoiceMask. */
export interface ICCSUsrMsg_VoiceMask {

    /** CCSUsrMsg_VoiceMask playerMasks */
    playerMasks?: (CCSUsrMsg_VoiceMask.IPlayerMask[]|null);

    /** CCSUsrMsg_VoiceMask playerModEnable */
    playerModEnable?: (boolean|null);
}

/** Represents a CCSUsrMsg_VoiceMask. */
export class CCSUsrMsg_VoiceMask implements ICCSUsrMsg_VoiceMask {

    /**
     * Constructs a new CCSUsrMsg_VoiceMask.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_VoiceMask);

    /** CCSUsrMsg_VoiceMask playerMasks. */
    public playerMasks: CCSUsrMsg_VoiceMask.IPlayerMask[];

    /** CCSUsrMsg_VoiceMask playerModEnable. */
    public playerModEnable: boolean;

    /**
     * Decodes a CCSUsrMsg_VoiceMask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_VoiceMask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_VoiceMask;
}

export namespace CCSUsrMsg_VoiceMask {

    /** Properties of a PlayerMask. */
    interface IPlayerMask {

        /** PlayerMask gameRulesMask */
        gameRulesMask?: (number|null);

        /** PlayerMask banMasks */
        banMasks?: (number|null);
    }

    /** Represents a PlayerMask. */
    class PlayerMask implements IPlayerMask {

        /**
         * Constructs a new PlayerMask.
         * @param [properties] Properties to set
         */
        constructor(properties?: CCSUsrMsg_VoiceMask.IPlayerMask);

        /** PlayerMask gameRulesMask. */
        public gameRulesMask: number;

        /** PlayerMask banMasks. */
        public banMasks: number;

        /**
         * Decodes a PlayerMask message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerMask
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_VoiceMask.PlayerMask;
    }
}

/** Properties of a CCSUsrMsg_Damage. */
export interface ICCSUsrMsg_Damage {

    /** CCSUsrMsg_Damage amount */
    amount?: (number|null);

    /** CCSUsrMsg_Damage inflictorWorldPos */
    inflictorWorldPos?: (ICMsgVector|null);

    /** CCSUsrMsg_Damage victimEntindex */
    victimEntindex?: (number|null);
}

/** Represents a CCSUsrMsg_Damage. */
export class CCSUsrMsg_Damage implements ICCSUsrMsg_Damage {

    /**
     * Constructs a new CCSUsrMsg_Damage.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_Damage);

    /** CCSUsrMsg_Damage amount. */
    public amount: number;

    /** CCSUsrMsg_Damage inflictorWorldPos. */
    public inflictorWorldPos?: (ICMsgVector|null);

    /** CCSUsrMsg_Damage victimEntindex. */
    public victimEntindex: number;

    /**
     * Decodes a CCSUsrMsg_Damage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_Damage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_Damage;
}

/** Properties of a CCSUsrMsg_RadioText. */
export interface ICCSUsrMsg_RadioText {

    /** CCSUsrMsg_RadioText msgDst */
    msgDst?: (number|null);

    /** CCSUsrMsg_RadioText client */
    client?: (number|null);

    /** CCSUsrMsg_RadioText msgName */
    msgName?: (string|null);

    /** CCSUsrMsg_RadioText params */
    params?: (string[]|null);
}

/** Represents a CCSUsrMsg_RadioText. */
export class CCSUsrMsg_RadioText implements ICCSUsrMsg_RadioText {

    /**
     * Constructs a new CCSUsrMsg_RadioText.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_RadioText);

    /** CCSUsrMsg_RadioText msgDst. */
    public msgDst: number;

    /** CCSUsrMsg_RadioText client. */
    public client: number;

    /** CCSUsrMsg_RadioText msgName. */
    public msgName: string;

    /** CCSUsrMsg_RadioText params. */
    public params: string[];

    /**
     * Decodes a CCSUsrMsg_RadioText message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_RadioText
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_RadioText;
}

/** Properties of a CCSUsrMsg_HintText. */
export interface ICCSUsrMsg_HintText {

    /** CCSUsrMsg_HintText text */
    text?: (string|null);
}

/** Represents a CCSUsrMsg_HintText. */
export class CCSUsrMsg_HintText implements ICCSUsrMsg_HintText {

    /**
     * Constructs a new CCSUsrMsg_HintText.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_HintText);

    /** CCSUsrMsg_HintText text. */
    public text: string;

    /**
     * Decodes a CCSUsrMsg_HintText message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_HintText
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_HintText;
}

/** Properties of a CCSUsrMsg_KeyHintText. */
export interface ICCSUsrMsg_KeyHintText {

    /** CCSUsrMsg_KeyHintText hints */
    hints?: (string[]|null);
}

/** Represents a CCSUsrMsg_KeyHintText. */
export class CCSUsrMsg_KeyHintText implements ICCSUsrMsg_KeyHintText {

    /**
     * Constructs a new CCSUsrMsg_KeyHintText.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_KeyHintText);

    /** CCSUsrMsg_KeyHintText hints. */
    public hints: string[];

    /**
     * Decodes a CCSUsrMsg_KeyHintText message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_KeyHintText
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_KeyHintText;
}

/** Properties of a CCSUsrMsg_ProcessSpottedEntityUpdate. */
export interface ICCSUsrMsg_ProcessSpottedEntityUpdate {

    /** CCSUsrMsg_ProcessSpottedEntityUpdate newUpdate */
    newUpdate?: (boolean|null);

    /** CCSUsrMsg_ProcessSpottedEntityUpdate entityUpdates */
    entityUpdates?: (CCSUsrMsg_ProcessSpottedEntityUpdate.ISpottedEntityUpdate[]|null);
}

/** Represents a CCSUsrMsg_ProcessSpottedEntityUpdate. */
export class CCSUsrMsg_ProcessSpottedEntityUpdate implements ICCSUsrMsg_ProcessSpottedEntityUpdate {

    /**
     * Constructs a new CCSUsrMsg_ProcessSpottedEntityUpdate.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_ProcessSpottedEntityUpdate);

    /** CCSUsrMsg_ProcessSpottedEntityUpdate newUpdate. */
    public newUpdate: boolean;

    /** CCSUsrMsg_ProcessSpottedEntityUpdate entityUpdates. */
    public entityUpdates: CCSUsrMsg_ProcessSpottedEntityUpdate.ISpottedEntityUpdate[];

    /**
     * Decodes a CCSUsrMsg_ProcessSpottedEntityUpdate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_ProcessSpottedEntityUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_ProcessSpottedEntityUpdate;
}

export namespace CCSUsrMsg_ProcessSpottedEntityUpdate {

    /** Properties of a SpottedEntityUpdate. */
    interface ISpottedEntityUpdate {

        /** SpottedEntityUpdate entityIdx */
        entityIdx?: (number|null);

        /** SpottedEntityUpdate classId */
        classId?: (number|null);

        /** SpottedEntityUpdate originX */
        originX?: (number|null);

        /** SpottedEntityUpdate originY */
        originY?: (number|null);

        /** SpottedEntityUpdate originZ */
        originZ?: (number|null);

        /** SpottedEntityUpdate angleY */
        angleY?: (number|null);

        /** SpottedEntityUpdate defuser */
        defuser?: (boolean|null);

        /** SpottedEntityUpdate playerHasDefuser */
        playerHasDefuser?: (boolean|null);

        /** SpottedEntityUpdate playerHasC4 */
        playerHasC4?: (boolean|null);
    }

    /** Represents a SpottedEntityUpdate. */
    class SpottedEntityUpdate implements ISpottedEntityUpdate {

        /**
         * Constructs a new SpottedEntityUpdate.
         * @param [properties] Properties to set
         */
        constructor(properties?: CCSUsrMsg_ProcessSpottedEntityUpdate.ISpottedEntityUpdate);

        /** SpottedEntityUpdate entityIdx. */
        public entityIdx: number;

        /** SpottedEntityUpdate classId. */
        public classId: number;

        /** SpottedEntityUpdate originX. */
        public originX: number;

        /** SpottedEntityUpdate originY. */
        public originY: number;

        /** SpottedEntityUpdate originZ. */
        public originZ: number;

        /** SpottedEntityUpdate angleY. */
        public angleY: number;

        /** SpottedEntityUpdate defuser. */
        public defuser: boolean;

        /** SpottedEntityUpdate playerHasDefuser. */
        public playerHasDefuser: boolean;

        /** SpottedEntityUpdate playerHasC4. */
        public playerHasC4: boolean;

        /**
         * Decodes a SpottedEntityUpdate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SpottedEntityUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_ProcessSpottedEntityUpdate.SpottedEntityUpdate;
    }
}

/** Properties of a CCSUsrMsg_SendPlayerItemDrops. */
export interface ICCSUsrMsg_SendPlayerItemDrops {

    /** CCSUsrMsg_SendPlayerItemDrops entityUpdates */
    entityUpdates?: (ICEconItemPreviewDataBlock[]|null);
}

/** Represents a CCSUsrMsg_SendPlayerItemDrops. */
export class CCSUsrMsg_SendPlayerItemDrops implements ICCSUsrMsg_SendPlayerItemDrops {

    /**
     * Constructs a new CCSUsrMsg_SendPlayerItemDrops.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_SendPlayerItemDrops);

    /** CCSUsrMsg_SendPlayerItemDrops entityUpdates. */
    public entityUpdates: ICEconItemPreviewDataBlock[];

    /**
     * Decodes a CCSUsrMsg_SendPlayerItemDrops message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_SendPlayerItemDrops
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_SendPlayerItemDrops;
}

/** Properties of a CCSUsrMsg_SendPlayerItemFound. */
export interface ICCSUsrMsg_SendPlayerItemFound {

    /** CCSUsrMsg_SendPlayerItemFound iteminfo */
    iteminfo?: (ICEconItemPreviewDataBlock|null);

    /** CCSUsrMsg_SendPlayerItemFound entindex */
    entindex?: (number|null);
}

/** Represents a CCSUsrMsg_SendPlayerItemFound. */
export class CCSUsrMsg_SendPlayerItemFound implements ICCSUsrMsg_SendPlayerItemFound {

    /**
     * Constructs a new CCSUsrMsg_SendPlayerItemFound.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_SendPlayerItemFound);

    /** CCSUsrMsg_SendPlayerItemFound iteminfo. */
    public iteminfo?: (ICEconItemPreviewDataBlock|null);

    /** CCSUsrMsg_SendPlayerItemFound entindex. */
    public entindex: number;

    /**
     * Decodes a CCSUsrMsg_SendPlayerItemFound message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_SendPlayerItemFound
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_SendPlayerItemFound;
}

/** Properties of a CCSUsrMsg_ReloadEffect. */
export interface ICCSUsrMsg_ReloadEffect {

    /** CCSUsrMsg_ReloadEffect entidx */
    entidx?: (number|null);

    /** CCSUsrMsg_ReloadEffect actanim */
    actanim?: (number|null);

    /** CCSUsrMsg_ReloadEffect originX */
    originX?: (number|null);

    /** CCSUsrMsg_ReloadEffect originY */
    originY?: (number|null);

    /** CCSUsrMsg_ReloadEffect originZ */
    originZ?: (number|null);
}

/** Represents a CCSUsrMsg_ReloadEffect. */
export class CCSUsrMsg_ReloadEffect implements ICCSUsrMsg_ReloadEffect {

    /**
     * Constructs a new CCSUsrMsg_ReloadEffect.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_ReloadEffect);

    /** CCSUsrMsg_ReloadEffect entidx. */
    public entidx: number;

    /** CCSUsrMsg_ReloadEffect actanim. */
    public actanim: number;

    /** CCSUsrMsg_ReloadEffect originX. */
    public originX: number;

    /** CCSUsrMsg_ReloadEffect originY. */
    public originY: number;

    /** CCSUsrMsg_ReloadEffect originZ. */
    public originZ: number;

    /**
     * Decodes a CCSUsrMsg_ReloadEffect message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_ReloadEffect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_ReloadEffect;
}

/** Properties of a CCSUsrMsg_AdjustMoney. */
export interface ICCSUsrMsg_AdjustMoney {

    /** CCSUsrMsg_AdjustMoney amount */
    amount?: (number|null);
}

/** Represents a CCSUsrMsg_AdjustMoney. */
export class CCSUsrMsg_AdjustMoney implements ICCSUsrMsg_AdjustMoney {

    /**
     * Constructs a new CCSUsrMsg_AdjustMoney.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_AdjustMoney);

    /** CCSUsrMsg_AdjustMoney amount. */
    public amount: number;

    /**
     * Decodes a CCSUsrMsg_AdjustMoney message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_AdjustMoney
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_AdjustMoney;
}

/** Properties of a CCSUsrMsg_ReportHit. */
export interface ICCSUsrMsg_ReportHit {

    /** CCSUsrMsg_ReportHit posX */
    posX?: (number|null);

    /** CCSUsrMsg_ReportHit posY */
    posY?: (number|null);

    /** CCSUsrMsg_ReportHit timestamp */
    timestamp?: (number|null);

    /** CCSUsrMsg_ReportHit posZ */
    posZ?: (number|null);
}

/** Represents a CCSUsrMsg_ReportHit. */
export class CCSUsrMsg_ReportHit implements ICCSUsrMsg_ReportHit {

    /**
     * Constructs a new CCSUsrMsg_ReportHit.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_ReportHit);

    /** CCSUsrMsg_ReportHit posX. */
    public posX: number;

    /** CCSUsrMsg_ReportHit posY. */
    public posY: number;

    /** CCSUsrMsg_ReportHit timestamp. */
    public timestamp: number;

    /** CCSUsrMsg_ReportHit posZ. */
    public posZ: number;

    /**
     * Decodes a CCSUsrMsg_ReportHit message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_ReportHit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_ReportHit;
}

/** Properties of a CCSUsrMsg_KillCam. */
export interface ICCSUsrMsg_KillCam {

    /** CCSUsrMsg_KillCam obsMode */
    obsMode?: (number|null);

    /** CCSUsrMsg_KillCam firstTarget */
    firstTarget?: (number|null);

    /** CCSUsrMsg_KillCam secondTarget */
    secondTarget?: (number|null);
}

/** Represents a CCSUsrMsg_KillCam. */
export class CCSUsrMsg_KillCam implements ICCSUsrMsg_KillCam {

    /**
     * Constructs a new CCSUsrMsg_KillCam.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_KillCam);

    /** CCSUsrMsg_KillCam obsMode. */
    public obsMode: number;

    /** CCSUsrMsg_KillCam firstTarget. */
    public firstTarget: number;

    /** CCSUsrMsg_KillCam secondTarget. */
    public secondTarget: number;

    /**
     * Decodes a CCSUsrMsg_KillCam message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_KillCam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_KillCam;
}

/** Properties of a CCSUsrMsg_DesiredTimescale. */
export interface ICCSUsrMsg_DesiredTimescale {

    /** CCSUsrMsg_DesiredTimescale desiredTimescale */
    desiredTimescale?: (number|null);

    /** CCSUsrMsg_DesiredTimescale durationRealtimeSec */
    durationRealtimeSec?: (number|null);

    /** CCSUsrMsg_DesiredTimescale interpolatorType */
    interpolatorType?: (number|null);

    /** CCSUsrMsg_DesiredTimescale startBlendTime */
    startBlendTime?: (number|null);
}

/** Represents a CCSUsrMsg_DesiredTimescale. */
export class CCSUsrMsg_DesiredTimescale implements ICCSUsrMsg_DesiredTimescale {

    /**
     * Constructs a new CCSUsrMsg_DesiredTimescale.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_DesiredTimescale);

    /** CCSUsrMsg_DesiredTimescale desiredTimescale. */
    public desiredTimescale: number;

    /** CCSUsrMsg_DesiredTimescale durationRealtimeSec. */
    public durationRealtimeSec: number;

    /** CCSUsrMsg_DesiredTimescale interpolatorType. */
    public interpolatorType: number;

    /** CCSUsrMsg_DesiredTimescale startBlendTime. */
    public startBlendTime: number;

    /**
     * Decodes a CCSUsrMsg_DesiredTimescale message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_DesiredTimescale
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_DesiredTimescale;
}

/** Properties of a CCSUsrMsg_CurrentTimescale. */
export interface ICCSUsrMsg_CurrentTimescale {

    /** CCSUsrMsg_CurrentTimescale curTimescale */
    curTimescale?: (number|null);
}

/** Represents a CCSUsrMsg_CurrentTimescale. */
export class CCSUsrMsg_CurrentTimescale implements ICCSUsrMsg_CurrentTimescale {

    /**
     * Constructs a new CCSUsrMsg_CurrentTimescale.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_CurrentTimescale);

    /** CCSUsrMsg_CurrentTimescale curTimescale. */
    public curTimescale: number;

    /**
     * Decodes a CCSUsrMsg_CurrentTimescale message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_CurrentTimescale
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_CurrentTimescale;
}

/** Properties of a CCSUsrMsg_AchievementEvent. */
export interface ICCSUsrMsg_AchievementEvent {

    /** CCSUsrMsg_AchievementEvent achievement */
    achievement?: (number|null);

    /** CCSUsrMsg_AchievementEvent count */
    count?: (number|null);

    /** CCSUsrMsg_AchievementEvent userId */
    userId?: (number|null);
}

/** Represents a CCSUsrMsg_AchievementEvent. */
export class CCSUsrMsg_AchievementEvent implements ICCSUsrMsg_AchievementEvent {

    /**
     * Constructs a new CCSUsrMsg_AchievementEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_AchievementEvent);

    /** CCSUsrMsg_AchievementEvent achievement. */
    public achievement: number;

    /** CCSUsrMsg_AchievementEvent count. */
    public count: number;

    /** CCSUsrMsg_AchievementEvent userId. */
    public userId: number;

    /**
     * Decodes a CCSUsrMsg_AchievementEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_AchievementEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_AchievementEvent;
}

/** Properties of a CCSUsrMsg_MatchEndConditions. */
export interface ICCSUsrMsg_MatchEndConditions {

    /** CCSUsrMsg_MatchEndConditions fraglimit */
    fraglimit?: (number|null);

    /** CCSUsrMsg_MatchEndConditions mpMaxrounds */
    mpMaxrounds?: (number|null);

    /** CCSUsrMsg_MatchEndConditions mpWinlimit */
    mpWinlimit?: (number|null);

    /** CCSUsrMsg_MatchEndConditions mpTimelimit */
    mpTimelimit?: (number|null);
}

/** Represents a CCSUsrMsg_MatchEndConditions. */
export class CCSUsrMsg_MatchEndConditions implements ICCSUsrMsg_MatchEndConditions {

    /**
     * Constructs a new CCSUsrMsg_MatchEndConditions.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_MatchEndConditions);

    /** CCSUsrMsg_MatchEndConditions fraglimit. */
    public fraglimit: number;

    /** CCSUsrMsg_MatchEndConditions mpMaxrounds. */
    public mpMaxrounds: number;

    /** CCSUsrMsg_MatchEndConditions mpWinlimit. */
    public mpWinlimit: number;

    /** CCSUsrMsg_MatchEndConditions mpTimelimit. */
    public mpTimelimit: number;

    /**
     * Decodes a CCSUsrMsg_MatchEndConditions message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_MatchEndConditions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_MatchEndConditions;
}

/** Properties of a CCSUsrMsg_PlayerStatsUpdate. */
export interface ICCSUsrMsg_PlayerStatsUpdate {

    /** CCSUsrMsg_PlayerStatsUpdate version */
    version?: (number|null);

    /** CCSUsrMsg_PlayerStatsUpdate stats */
    stats?: (CCSUsrMsg_PlayerStatsUpdate.IStat[]|null);

    /** CCSUsrMsg_PlayerStatsUpdate userId */
    userId?: (number|null);

    /** CCSUsrMsg_PlayerStatsUpdate crc */
    crc?: (number|null);
}

/** Represents a CCSUsrMsg_PlayerStatsUpdate. */
export class CCSUsrMsg_PlayerStatsUpdate implements ICCSUsrMsg_PlayerStatsUpdate {

    /**
     * Constructs a new CCSUsrMsg_PlayerStatsUpdate.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_PlayerStatsUpdate);

    /** CCSUsrMsg_PlayerStatsUpdate version. */
    public version: number;

    /** CCSUsrMsg_PlayerStatsUpdate stats. */
    public stats: CCSUsrMsg_PlayerStatsUpdate.IStat[];

    /** CCSUsrMsg_PlayerStatsUpdate userId. */
    public userId: number;

    /** CCSUsrMsg_PlayerStatsUpdate crc. */
    public crc: number;

    /**
     * Decodes a CCSUsrMsg_PlayerStatsUpdate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_PlayerStatsUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_PlayerStatsUpdate;
}

export namespace CCSUsrMsg_PlayerStatsUpdate {

    /** Properties of a Stat. */
    interface IStat {

        /** Stat idx */
        idx?: (number|null);

        /** Stat delta */
        delta?: (number|null);
    }

    /** Represents a Stat. */
    class Stat implements IStat {

        /**
         * Constructs a new Stat.
         * @param [properties] Properties to set
         */
        constructor(properties?: CCSUsrMsg_PlayerStatsUpdate.IStat);

        /** Stat idx. */
        public idx: number;

        /** Stat delta. */
        public delta: number;

        /**
         * Decodes a Stat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Stat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_PlayerStatsUpdate.Stat;
    }
}

/** Properties of a CCSUsrMsg_DisplayInventory. */
export interface ICCSUsrMsg_DisplayInventory {

    /** CCSUsrMsg_DisplayInventory display */
    display?: (boolean|null);

    /** CCSUsrMsg_DisplayInventory userId */
    userId?: (number|null);
}

/** Represents a CCSUsrMsg_DisplayInventory. */
export class CCSUsrMsg_DisplayInventory implements ICCSUsrMsg_DisplayInventory {

    /**
     * Constructs a new CCSUsrMsg_DisplayInventory.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_DisplayInventory);

    /** CCSUsrMsg_DisplayInventory display. */
    public display: boolean;

    /** CCSUsrMsg_DisplayInventory userId. */
    public userId: number;

    /**
     * Decodes a CCSUsrMsg_DisplayInventory message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_DisplayInventory
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_DisplayInventory;
}

/** Properties of a CCSUsrMsg_QuestProgress. */
export interface ICCSUsrMsg_QuestProgress {

    /** CCSUsrMsg_QuestProgress questId */
    questId?: (number|null);

    /** CCSUsrMsg_QuestProgress normalPoints */
    normalPoints?: (number|null);

    /** CCSUsrMsg_QuestProgress bonusPoints */
    bonusPoints?: (number|null);
}

/** Represents a CCSUsrMsg_QuestProgress. */
export class CCSUsrMsg_QuestProgress implements ICCSUsrMsg_QuestProgress {

    /**
     * Constructs a new CCSUsrMsg_QuestProgress.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_QuestProgress);

    /** CCSUsrMsg_QuestProgress questId. */
    public questId: number;

    /** CCSUsrMsg_QuestProgress normalPoints. */
    public normalPoints: number;

    /** CCSUsrMsg_QuestProgress bonusPoints. */
    public bonusPoints: number;

    /**
     * Decodes a CCSUsrMsg_QuestProgress message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_QuestProgress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_QuestProgress;
}

/** Properties of a CCSUsrMsg_XRankGet. */
export interface ICCSUsrMsg_XRankGet {

    /** CCSUsrMsg_XRankGet modeIdx */
    modeIdx?: (number|null);

    /** CCSUsrMsg_XRankGet controller */
    controller?: (number|null);
}

/** Represents a CCSUsrMsg_XRankGet. */
export class CCSUsrMsg_XRankGet implements ICCSUsrMsg_XRankGet {

    /**
     * Constructs a new CCSUsrMsg_XRankGet.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_XRankGet);

    /** CCSUsrMsg_XRankGet modeIdx. */
    public modeIdx: number;

    /** CCSUsrMsg_XRankGet controller. */
    public controller: number;

    /**
     * Decodes a CCSUsrMsg_XRankGet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_XRankGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_XRankGet;
}

/** Properties of a CCSUsrMsg_XRankUpd. */
export interface ICCSUsrMsg_XRankUpd {

    /** CCSUsrMsg_XRankUpd modeIdx */
    modeIdx?: (number|null);

    /** CCSUsrMsg_XRankUpd controller */
    controller?: (number|null);

    /** CCSUsrMsg_XRankUpd ranking */
    ranking?: (number|null);
}

/** Represents a CCSUsrMsg_XRankUpd. */
export class CCSUsrMsg_XRankUpd implements ICCSUsrMsg_XRankUpd {

    /**
     * Constructs a new CCSUsrMsg_XRankUpd.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_XRankUpd);

    /** CCSUsrMsg_XRankUpd modeIdx. */
    public modeIdx: number;

    /** CCSUsrMsg_XRankUpd controller. */
    public controller: number;

    /** CCSUsrMsg_XRankUpd ranking. */
    public ranking: number;

    /**
     * Decodes a CCSUsrMsg_XRankUpd message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_XRankUpd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_XRankUpd;
}

/** Properties of a CCSUsrMsg_CallVoteFailed. */
export interface ICCSUsrMsg_CallVoteFailed {

    /** CCSUsrMsg_CallVoteFailed reason */
    reason?: (number|null);

    /** CCSUsrMsg_CallVoteFailed time */
    time?: (number|null);
}

/** Represents a CCSUsrMsg_CallVoteFailed. */
export class CCSUsrMsg_CallVoteFailed implements ICCSUsrMsg_CallVoteFailed {

    /**
     * Constructs a new CCSUsrMsg_CallVoteFailed.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_CallVoteFailed);

    /** CCSUsrMsg_CallVoteFailed reason. */
    public reason: number;

    /** CCSUsrMsg_CallVoteFailed time. */
    public time: number;

    /**
     * Decodes a CCSUsrMsg_CallVoteFailed message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_CallVoteFailed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_CallVoteFailed;
}

/** Properties of a CCSUsrMsg_VoteStart. */
export interface ICCSUsrMsg_VoteStart {

    /** CCSUsrMsg_VoteStart team */
    team?: (number|null);

    /** CCSUsrMsg_VoteStart entIdx */
    entIdx?: (number|null);

    /** CCSUsrMsg_VoteStart voteType */
    voteType?: (number|null);

    /** CCSUsrMsg_VoteStart dispStr */
    dispStr?: (string|null);

    /** CCSUsrMsg_VoteStart detailsStr */
    detailsStr?: (string|null);

    /** CCSUsrMsg_VoteStart otherTeamStr */
    otherTeamStr?: (string|null);

    /** CCSUsrMsg_VoteStart isYesNoVote */
    isYesNoVote?: (boolean|null);
}

/** Represents a CCSUsrMsg_VoteStart. */
export class CCSUsrMsg_VoteStart implements ICCSUsrMsg_VoteStart {

    /**
     * Constructs a new CCSUsrMsg_VoteStart.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_VoteStart);

    /** CCSUsrMsg_VoteStart team. */
    public team: number;

    /** CCSUsrMsg_VoteStart entIdx. */
    public entIdx: number;

    /** CCSUsrMsg_VoteStart voteType. */
    public voteType: number;

    /** CCSUsrMsg_VoteStart dispStr. */
    public dispStr: string;

    /** CCSUsrMsg_VoteStart detailsStr. */
    public detailsStr: string;

    /** CCSUsrMsg_VoteStart otherTeamStr. */
    public otherTeamStr: string;

    /** CCSUsrMsg_VoteStart isYesNoVote. */
    public isYesNoVote: boolean;

    /**
     * Decodes a CCSUsrMsg_VoteStart message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_VoteStart
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_VoteStart;
}

/** Properties of a CCSUsrMsg_VotePass. */
export interface ICCSUsrMsg_VotePass {

    /** CCSUsrMsg_VotePass team */
    team?: (number|null);

    /** CCSUsrMsg_VotePass voteType */
    voteType?: (number|null);

    /** CCSUsrMsg_VotePass dispStr */
    dispStr?: (string|null);

    /** CCSUsrMsg_VotePass detailsStr */
    detailsStr?: (string|null);
}

/** Represents a CCSUsrMsg_VotePass. */
export class CCSUsrMsg_VotePass implements ICCSUsrMsg_VotePass {

    /**
     * Constructs a new CCSUsrMsg_VotePass.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_VotePass);

    /** CCSUsrMsg_VotePass team. */
    public team: number;

    /** CCSUsrMsg_VotePass voteType. */
    public voteType: number;

    /** CCSUsrMsg_VotePass dispStr. */
    public dispStr: string;

    /** CCSUsrMsg_VotePass detailsStr. */
    public detailsStr: string;

    /**
     * Decodes a CCSUsrMsg_VotePass message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_VotePass
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_VotePass;
}

/** Properties of a CCSUsrMsg_VoteFailed. */
export interface ICCSUsrMsg_VoteFailed {

    /** CCSUsrMsg_VoteFailed team */
    team?: (number|null);

    /** CCSUsrMsg_VoteFailed reason */
    reason?: (number|null);
}

/** Represents a CCSUsrMsg_VoteFailed. */
export class CCSUsrMsg_VoteFailed implements ICCSUsrMsg_VoteFailed {

    /**
     * Constructs a new CCSUsrMsg_VoteFailed.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_VoteFailed);

    /** CCSUsrMsg_VoteFailed team. */
    public team: number;

    /** CCSUsrMsg_VoteFailed reason. */
    public reason: number;

    /**
     * Decodes a CCSUsrMsg_VoteFailed message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_VoteFailed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_VoteFailed;
}

/** Properties of a CCSUsrMsg_VoteSetup. */
export interface ICCSUsrMsg_VoteSetup {

    /** CCSUsrMsg_VoteSetup potentialIssues */
    potentialIssues?: (string[]|null);
}

/** Represents a CCSUsrMsg_VoteSetup. */
export class CCSUsrMsg_VoteSetup implements ICCSUsrMsg_VoteSetup {

    /**
     * Constructs a new CCSUsrMsg_VoteSetup.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_VoteSetup);

    /** CCSUsrMsg_VoteSetup potentialIssues. */
    public potentialIssues: string[];

    /**
     * Decodes a CCSUsrMsg_VoteSetup message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_VoteSetup
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_VoteSetup;
}

/** Properties of a CCSUsrMsg_SendLastKillerDamageToClient. */
export interface ICCSUsrMsg_SendLastKillerDamageToClient {

    /** CCSUsrMsg_SendLastKillerDamageToClient numHitsGiven */
    numHitsGiven?: (number|null);

    /** CCSUsrMsg_SendLastKillerDamageToClient damageGiven */
    damageGiven?: (number|null);

    /** CCSUsrMsg_SendLastKillerDamageToClient numHitsTaken */
    numHitsTaken?: (number|null);

    /** CCSUsrMsg_SendLastKillerDamageToClient damageTaken */
    damageTaken?: (number|null);
}

/** Represents a CCSUsrMsg_SendLastKillerDamageToClient. */
export class CCSUsrMsg_SendLastKillerDamageToClient implements ICCSUsrMsg_SendLastKillerDamageToClient {

    /**
     * Constructs a new CCSUsrMsg_SendLastKillerDamageToClient.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_SendLastKillerDamageToClient);

    /** CCSUsrMsg_SendLastKillerDamageToClient numHitsGiven. */
    public numHitsGiven: number;

    /** CCSUsrMsg_SendLastKillerDamageToClient damageGiven. */
    public damageGiven: number;

    /** CCSUsrMsg_SendLastKillerDamageToClient numHitsTaken. */
    public numHitsTaken: number;

    /** CCSUsrMsg_SendLastKillerDamageToClient damageTaken. */
    public damageTaken: number;

    /**
     * Decodes a CCSUsrMsg_SendLastKillerDamageToClient message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_SendLastKillerDamageToClient
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_SendLastKillerDamageToClient;
}

/** Properties of a CCSUsrMsg_ServerRankUpdate. */
export interface ICCSUsrMsg_ServerRankUpdate {

    /** CCSUsrMsg_ServerRankUpdate rankUpdate */
    rankUpdate?: (CCSUsrMsg_ServerRankUpdate.IRankUpdate[]|null);
}

/** Represents a CCSUsrMsg_ServerRankUpdate. */
export class CCSUsrMsg_ServerRankUpdate implements ICCSUsrMsg_ServerRankUpdate {

    /**
     * Constructs a new CCSUsrMsg_ServerRankUpdate.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_ServerRankUpdate);

    /** CCSUsrMsg_ServerRankUpdate rankUpdate. */
    public rankUpdate: CCSUsrMsg_ServerRankUpdate.IRankUpdate[];

    /**
     * Decodes a CCSUsrMsg_ServerRankUpdate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_ServerRankUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_ServerRankUpdate;
}

export namespace CCSUsrMsg_ServerRankUpdate {

    /** Properties of a RankUpdate. */
    interface IRankUpdate {

        /** RankUpdate accountId */
        accountId?: (number|null);

        /** RankUpdate rankOld */
        rankOld?: (number|null);

        /** RankUpdate rankNew */
        rankNew?: (number|null);

        /** RankUpdate numWins */
        numWins?: (number|null);

        /** RankUpdate rankChange */
        rankChange?: (number|null);
    }

    /** Represents a RankUpdate. */
    class RankUpdate implements IRankUpdate {

        /**
         * Constructs a new RankUpdate.
         * @param [properties] Properties to set
         */
        constructor(properties?: CCSUsrMsg_ServerRankUpdate.IRankUpdate);

        /** RankUpdate accountId. */
        public accountId: number;

        /** RankUpdate rankOld. */
        public rankOld: number;

        /** RankUpdate rankNew. */
        public rankNew: number;

        /** RankUpdate numWins. */
        public numWins: number;

        /** RankUpdate rankChange. */
        public rankChange: number;

        /**
         * Decodes a RankUpdate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RankUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_ServerRankUpdate.RankUpdate;
    }
}

/** Properties of a CCSUsrMsg_XpUpdate. */
export interface ICCSUsrMsg_XpUpdate {

    /** CCSUsrMsg_XpUpdate data */
    data?: (ICMsgGCCstrike15_v2_GC2ServerNotifyXPRewarded|null);
}

/** Represents a CCSUsrMsg_XpUpdate. */
export class CCSUsrMsg_XpUpdate implements ICCSUsrMsg_XpUpdate {

    /**
     * Constructs a new CCSUsrMsg_XpUpdate.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_XpUpdate);

    /** CCSUsrMsg_XpUpdate data. */
    public data?: (ICMsgGCCstrike15_v2_GC2ServerNotifyXPRewarded|null);

    /**
     * Decodes a CCSUsrMsg_XpUpdate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_XpUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_XpUpdate;
}

/** Properties of a CCSUsrMsg_ItemPickup. */
export interface ICCSUsrMsg_ItemPickup {

    /** CCSUsrMsg_ItemPickup item */
    item?: (string|null);
}

/** Represents a CCSUsrMsg_ItemPickup. */
export class CCSUsrMsg_ItemPickup implements ICCSUsrMsg_ItemPickup {

    /**
     * Constructs a new CCSUsrMsg_ItemPickup.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_ItemPickup);

    /** CCSUsrMsg_ItemPickup item. */
    public item: string;

    /**
     * Decodes a CCSUsrMsg_ItemPickup message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_ItemPickup
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_ItemPickup;
}

/** Properties of a CCSUsrMsg_ShowMenu. */
export interface ICCSUsrMsg_ShowMenu {

    /** CCSUsrMsg_ShowMenu bitsValidSlots */
    bitsValidSlots?: (number|null);

    /** CCSUsrMsg_ShowMenu displayTime */
    displayTime?: (number|null);

    /** CCSUsrMsg_ShowMenu menuString */
    menuString?: (string|null);
}

/** Represents a CCSUsrMsg_ShowMenu. */
export class CCSUsrMsg_ShowMenu implements ICCSUsrMsg_ShowMenu {

    /**
     * Constructs a new CCSUsrMsg_ShowMenu.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_ShowMenu);

    /** CCSUsrMsg_ShowMenu bitsValidSlots. */
    public bitsValidSlots: number;

    /** CCSUsrMsg_ShowMenu displayTime. */
    public displayTime: number;

    /** CCSUsrMsg_ShowMenu menuString. */
    public menuString: string;

    /**
     * Decodes a CCSUsrMsg_ShowMenu message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_ShowMenu
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_ShowMenu;
}

/** Properties of a CCSUsrMsg_BarTime. */
export interface ICCSUsrMsg_BarTime {

    /** CCSUsrMsg_BarTime time */
    time?: (string|null);
}

/** Represents a CCSUsrMsg_BarTime. */
export class CCSUsrMsg_BarTime implements ICCSUsrMsg_BarTime {

    /**
     * Constructs a new CCSUsrMsg_BarTime.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_BarTime);

    /** CCSUsrMsg_BarTime time. */
    public time: string;

    /**
     * Decodes a CCSUsrMsg_BarTime message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_BarTime
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_BarTime;
}

/** Properties of a CCSUsrMsg_AmmoDenied. */
export interface ICCSUsrMsg_AmmoDenied {

    /** CCSUsrMsg_AmmoDenied ammoIdx */
    ammoIdx?: (number|null);
}

/** Represents a CCSUsrMsg_AmmoDenied. */
export class CCSUsrMsg_AmmoDenied implements ICCSUsrMsg_AmmoDenied {

    /**
     * Constructs a new CCSUsrMsg_AmmoDenied.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_AmmoDenied);

    /** CCSUsrMsg_AmmoDenied ammoIdx. */
    public ammoIdx: number;

    /**
     * Decodes a CCSUsrMsg_AmmoDenied message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_AmmoDenied
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_AmmoDenied;
}

/** Properties of a CCSUsrMsg_MarkAchievement. */
export interface ICCSUsrMsg_MarkAchievement {

    /** CCSUsrMsg_MarkAchievement achievement */
    achievement?: (string|null);
}

/** Represents a CCSUsrMsg_MarkAchievement. */
export class CCSUsrMsg_MarkAchievement implements ICCSUsrMsg_MarkAchievement {

    /**
     * Constructs a new CCSUsrMsg_MarkAchievement.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_MarkAchievement);

    /** CCSUsrMsg_MarkAchievement achievement. */
    public achievement: string;

    /**
     * Decodes a CCSUsrMsg_MarkAchievement message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_MarkAchievement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_MarkAchievement;
}

/** Properties of a CCSUsrMsg_MatchStatsUpdate. */
export interface ICCSUsrMsg_MatchStatsUpdate {

    /** CCSUsrMsg_MatchStatsUpdate update */
    update?: (string|null);
}

/** Represents a CCSUsrMsg_MatchStatsUpdate. */
export class CCSUsrMsg_MatchStatsUpdate implements ICCSUsrMsg_MatchStatsUpdate {

    /**
     * Constructs a new CCSUsrMsg_MatchStatsUpdate.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_MatchStatsUpdate);

    /** CCSUsrMsg_MatchStatsUpdate update. */
    public update: string;

    /**
     * Decodes a CCSUsrMsg_MatchStatsUpdate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_MatchStatsUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_MatchStatsUpdate;
}

/** Properties of a CCSUsrMsg_ItemDrop. */
export interface ICCSUsrMsg_ItemDrop {

    /** CCSUsrMsg_ItemDrop itemid */
    itemid?: (number|Long|null);

    /** CCSUsrMsg_ItemDrop death */
    death?: (boolean|null);
}

/** Represents a CCSUsrMsg_ItemDrop. */
export class CCSUsrMsg_ItemDrop implements ICCSUsrMsg_ItemDrop {

    /**
     * Constructs a new CCSUsrMsg_ItemDrop.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_ItemDrop);

    /** CCSUsrMsg_ItemDrop itemid. */
    public itemid: (number|Long);

    /** CCSUsrMsg_ItemDrop death. */
    public death: boolean;

    /**
     * Decodes a CCSUsrMsg_ItemDrop message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_ItemDrop
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_ItemDrop;
}

/** Properties of a CCSUsrMsg_GlowPropTurnOff. */
export interface ICCSUsrMsg_GlowPropTurnOff {

    /** CCSUsrMsg_GlowPropTurnOff entidx */
    entidx?: (number|null);
}

/** Represents a CCSUsrMsg_GlowPropTurnOff. */
export class CCSUsrMsg_GlowPropTurnOff implements ICCSUsrMsg_GlowPropTurnOff {

    /**
     * Constructs a new CCSUsrMsg_GlowPropTurnOff.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_GlowPropTurnOff);

    /** CCSUsrMsg_GlowPropTurnOff entidx. */
    public entidx: number;

    /**
     * Decodes a CCSUsrMsg_GlowPropTurnOff message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_GlowPropTurnOff
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_GlowPropTurnOff;
}

/** Properties of a CCSUsrMsg_RoundBackupFilenames. */
export interface ICCSUsrMsg_RoundBackupFilenames {

    /** CCSUsrMsg_RoundBackupFilenames count */
    count?: (number|null);

    /** CCSUsrMsg_RoundBackupFilenames index */
    index?: (number|null);

    /** CCSUsrMsg_RoundBackupFilenames filename */
    filename?: (string|null);

    /** CCSUsrMsg_RoundBackupFilenames nicename */
    nicename?: (string|null);
}

/** Represents a CCSUsrMsg_RoundBackupFilenames. */
export class CCSUsrMsg_RoundBackupFilenames implements ICCSUsrMsg_RoundBackupFilenames {

    /**
     * Constructs a new CCSUsrMsg_RoundBackupFilenames.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_RoundBackupFilenames);

    /** CCSUsrMsg_RoundBackupFilenames count. */
    public count: number;

    /** CCSUsrMsg_RoundBackupFilenames index. */
    public index: number;

    /** CCSUsrMsg_RoundBackupFilenames filename. */
    public filename: string;

    /** CCSUsrMsg_RoundBackupFilenames nicename. */
    public nicename: string;

    /**
     * Decodes a CCSUsrMsg_RoundBackupFilenames message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_RoundBackupFilenames
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_RoundBackupFilenames;
}

/** Properties of a CCSUsrMsg_ResetHud. */
export interface ICCSUsrMsg_ResetHud {

    /** CCSUsrMsg_ResetHud reset */
    reset?: (boolean|null);
}

/** Represents a CCSUsrMsg_ResetHud. */
export class CCSUsrMsg_ResetHud implements ICCSUsrMsg_ResetHud {

    /**
     * Constructs a new CCSUsrMsg_ResetHud.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_ResetHud);

    /** CCSUsrMsg_ResetHud reset. */
    public reset: boolean;

    /**
     * Decodes a CCSUsrMsg_ResetHud message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_ResetHud
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_ResetHud;
}

/** Properties of a CCSUsrMsg_GameTitle. */
export interface ICCSUsrMsg_GameTitle {

    /** CCSUsrMsg_GameTitle dummy */
    dummy?: (number|null);
}

/** Represents a CCSUsrMsg_GameTitle. */
export class CCSUsrMsg_GameTitle implements ICCSUsrMsg_GameTitle {

    /**
     * Constructs a new CCSUsrMsg_GameTitle.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_GameTitle);

    /** CCSUsrMsg_GameTitle dummy. */
    public dummy: number;

    /**
     * Decodes a CCSUsrMsg_GameTitle message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_GameTitle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_GameTitle;
}

/** Properties of a CCSUsrMsg_RequestState. */
export interface ICCSUsrMsg_RequestState {

    /** CCSUsrMsg_RequestState dummy */
    dummy?: (number|null);
}

/** Represents a CCSUsrMsg_RequestState. */
export class CCSUsrMsg_RequestState implements ICCSUsrMsg_RequestState {

    /**
     * Constructs a new CCSUsrMsg_RequestState.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_RequestState);

    /** CCSUsrMsg_RequestState dummy. */
    public dummy: number;

    /**
     * Decodes a CCSUsrMsg_RequestState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_RequestState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_RequestState;
}

/** Properties of a CCSUsrMsg_StopSpectatorMode. */
export interface ICCSUsrMsg_StopSpectatorMode {

    /** CCSUsrMsg_StopSpectatorMode dummy */
    dummy?: (number|null);
}

/** Represents a CCSUsrMsg_StopSpectatorMode. */
export class CCSUsrMsg_StopSpectatorMode implements ICCSUsrMsg_StopSpectatorMode {

    /**
     * Constructs a new CCSUsrMsg_StopSpectatorMode.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_StopSpectatorMode);

    /** CCSUsrMsg_StopSpectatorMode dummy. */
    public dummy: number;

    /**
     * Decodes a CCSUsrMsg_StopSpectatorMode message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_StopSpectatorMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_StopSpectatorMode;
}

/** Properties of a CCSUsrMsg_DisconnectToLobby. */
export interface ICCSUsrMsg_DisconnectToLobby {

    /** CCSUsrMsg_DisconnectToLobby dummy */
    dummy?: (number|null);
}

/** Represents a CCSUsrMsg_DisconnectToLobby. */
export class CCSUsrMsg_DisconnectToLobby implements ICCSUsrMsg_DisconnectToLobby {

    /**
     * Constructs a new CCSUsrMsg_DisconnectToLobby.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_DisconnectToLobby);

    /** CCSUsrMsg_DisconnectToLobby dummy. */
    public dummy: number;

    /**
     * Decodes a CCSUsrMsg_DisconnectToLobby message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_DisconnectToLobby
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_DisconnectToLobby;
}

/** Properties of a CCSUsrMsg_WarmupHasEnded. */
export interface ICCSUsrMsg_WarmupHasEnded {

    /** CCSUsrMsg_WarmupHasEnded dummy */
    dummy?: (number|null);
}

/** Represents a CCSUsrMsg_WarmupHasEnded. */
export class CCSUsrMsg_WarmupHasEnded implements ICCSUsrMsg_WarmupHasEnded {

    /**
     * Constructs a new CCSUsrMsg_WarmupHasEnded.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_WarmupHasEnded);

    /** CCSUsrMsg_WarmupHasEnded dummy. */
    public dummy: number;

    /**
     * Decodes a CCSUsrMsg_WarmupHasEnded message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_WarmupHasEnded
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_WarmupHasEnded;
}

/** Properties of a CCSUsrMsg_ClientInfo. */
export interface ICCSUsrMsg_ClientInfo {

    /** CCSUsrMsg_ClientInfo dummy */
    dummy?: (number|null);
}

/** Represents a CCSUsrMsg_ClientInfo. */
export class CCSUsrMsg_ClientInfo implements ICCSUsrMsg_ClientInfo {

    /**
     * Constructs a new CCSUsrMsg_ClientInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_ClientInfo);

    /** CCSUsrMsg_ClientInfo dummy. */
    public dummy: number;

    /**
     * Decodes a CCSUsrMsg_ClientInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_ClientInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_ClientInfo;
}

/** Properties of a CCSUsrMsg_ServerRankRevealAll. */
export interface ICCSUsrMsg_ServerRankRevealAll {

    /** CCSUsrMsg_ServerRankRevealAll secondsTillShutdown */
    secondsTillShutdown?: (number|null);
}

/** Represents a CCSUsrMsg_ServerRankRevealAll. */
export class CCSUsrMsg_ServerRankRevealAll implements ICCSUsrMsg_ServerRankRevealAll {

    /**
     * Constructs a new CCSUsrMsg_ServerRankRevealAll.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCSUsrMsg_ServerRankRevealAll);

    /** CCSUsrMsg_ServerRankRevealAll secondsTillShutdown. */
    public secondsTillShutdown: number;

    /**
     * Decodes a CCSUsrMsg_ServerRankRevealAll message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCSUsrMsg_ServerRankRevealAll
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCSUsrMsg_ServerRankRevealAll;
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;
            }
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type. */
            public type: google.protobuf.FieldDescriptorProto.Type;

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: google.protobuf.FileOptions.OptimizeMode;

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .msgpoolSoftLimit */
            ".msgpoolSoftLimit"?: (number|null);

            /** MessageOptions .msgpoolHardLimit */
            ".msgpoolHardLimit"?: (number|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /** MessageOptions .msgpoolSoftLimit. */
            public msgpoolSoftLimit: number;

            /** MessageOptions .msgpoolHardLimit. */
            public msgpoolHardLimit: number;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .keyField */
            ".keyField"?: (boolean|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: google.protobuf.FieldOptions.JSType;

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /** FieldOptions .keyField. */
            public keyField: boolean;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: Uint8Array;

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;
            }
        }
    }
}

/** NET_Messages enum. */
export enum NET_Messages {
    net_NOP = 0,
    net_Disconnect = 1,
    net_File = 2,
    net_SplitScreenUser = 3,
    net_Tick = 4,
    net_StringCmd = 5,
    net_SetConVar = 6,
    net_SignonState = 7,
    net_PlayerAvatarData = 100
}

/** CLC_Messages enum. */
export enum CLC_Messages {
    clc_ClientInfo = 8,
    clc_Move = 9,
    clc_VoiceData = 10,
    clc_BaselineAck = 11,
    clc_ListenEvents = 12,
    clc_RespondCvarValue = 13,
    clc_FileCRCCheck = 14,
    clc_LoadingProgress = 15,
    clc_SplitPlayerConnect = 16,
    clc_ClientMessage = 17,
    clc_CmdKeyValues = 18,
    clc_HltvReplay = 20
}

/** VoiceDataFormat_t enum. */
export enum VoiceDataFormat_t {
    VOICEDATA_FORMAT_STEAM = 0,
    VOICEDATA_FORMAT_ENGINE = 1
}

/** ESplitScreenMessageType enum. */
export enum ESplitScreenMessageType {
    MSG_SPLITSCREEN_ADDUSER = 0,
    MSG_SPLITSCREEN_REMOVEUSER = 1,
    MSG_SPLITSCREEN_TYPE_BITS = 1
}

/** SVC_Messages enum. */
export enum SVC_Messages {
    svc_ServerInfo = 8,
    svc_SendTable = 9,
    svc_ClassInfo = 10,
    svc_SetPause = 11,
    svc_CreateStringTable = 12,
    svc_UpdateStringTable = 13,
    svc_VoiceInit = 14,
    svc_VoiceData = 15,
    svc_Print = 16,
    svc_Sounds = 17,
    svc_SetView = 18,
    svc_FixAngle = 19,
    svc_CrosshairAngle = 20,
    svc_BSPDecal = 21,
    svc_SplitScreen = 22,
    svc_UserMessage = 23,
    svc_EntityMessage = 24,
    svc_GameEvent = 25,
    svc_PacketEntities = 26,
    svc_TempEntities = 27,
    svc_Prefetch = 28,
    svc_Menu = 29,
    svc_GameEventList = 30,
    svc_GetCvarValue = 31,
    svc_PaintmapData = 33,
    svc_CmdKeyValues = 34,
    svc_EncryptedData = 35,
    svc_HltvReplay = 36
}

/** ReplayEventType_t enum. */
export enum ReplayEventType_t {
    REPLAY_EVENT_CANCEL = 0,
    REPLAY_EVENT_DEATH = 1,
    REPLAY_EVENT_GENERIC = 2
}

/** Properties of a CMsgVector. */
export interface ICMsgVector {

    /** CMsgVector x */
    x?: (number|null);

    /** CMsgVector y */
    y?: (number|null);

    /** CMsgVector z */
    z?: (number|null);
}

/** Represents a CMsgVector. */
export class CMsgVector implements ICMsgVector {

    /**
     * Constructs a new CMsgVector.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgVector);

    /** CMsgVector x. */
    public x: number;

    /** CMsgVector y. */
    public y: number;

    /** CMsgVector z. */
    public z: number;

    /**
     * Decodes a CMsgVector message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgVector
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgVector;
}

/** Properties of a CMsgVector2D. */
export interface ICMsgVector2D {

    /** CMsgVector2D x */
    x?: (number|null);

    /** CMsgVector2D y */
    y?: (number|null);
}

/** Represents a CMsgVector2D. */
export class CMsgVector2D implements ICMsgVector2D {

    /**
     * Constructs a new CMsgVector2D.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgVector2D);

    /** CMsgVector2D x. */
    public x: number;

    /** CMsgVector2D y. */
    public y: number;

    /**
     * Decodes a CMsgVector2D message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgVector2D
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgVector2D;
}

/** Properties of a CMsgQAngle. */
export interface ICMsgQAngle {

    /** CMsgQAngle x */
    x?: (number|null);

    /** CMsgQAngle y */
    y?: (number|null);

    /** CMsgQAngle z */
    z?: (number|null);
}

/** Represents a CMsgQAngle. */
export class CMsgQAngle implements ICMsgQAngle {

    /**
     * Constructs a new CMsgQAngle.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgQAngle);

    /** CMsgQAngle x. */
    public x: number;

    /** CMsgQAngle y. */
    public y: number;

    /** CMsgQAngle z. */
    public z: number;

    /**
     * Decodes a CMsgQAngle message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgQAngle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgQAngle;
}

/** Properties of a CMsgRGBA. */
export interface ICMsgRGBA {

    /** CMsgRGBA r */
    r?: (number|null);

    /** CMsgRGBA g */
    g?: (number|null);

    /** CMsgRGBA b */
    b?: (number|null);

    /** CMsgRGBA a */
    a?: (number|null);
}

/** Represents a CMsgRGBA. */
export class CMsgRGBA implements ICMsgRGBA {

    /**
     * Constructs a new CMsgRGBA.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgRGBA);

    /** CMsgRGBA r. */
    public r: number;

    /** CMsgRGBA g. */
    public g: number;

    /** CMsgRGBA b. */
    public b: number;

    /** CMsgRGBA a. */
    public a: number;

    /**
     * Decodes a CMsgRGBA message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgRGBA
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgRGBA;
}

/** Properties of a CNETMsg_Tick. */
export interface ICNETMsg_Tick {

    /** CNETMsg_Tick tick */
    tick?: (number|null);

    /** CNETMsg_Tick hostComputationtime */
    hostComputationtime?: (number|null);

    /** CNETMsg_Tick hostComputationtimeStdDeviation */
    hostComputationtimeStdDeviation?: (number|null);

    /** CNETMsg_Tick hostFramestarttimeStdDeviation */
    hostFramestarttimeStdDeviation?: (number|null);

    /** CNETMsg_Tick hltvReplayFlags */
    hltvReplayFlags?: (number|null);
}

/** Represents a CNETMsg_Tick. */
export class CNETMsg_Tick implements ICNETMsg_Tick {

    /**
     * Constructs a new CNETMsg_Tick.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICNETMsg_Tick);

    /** CNETMsg_Tick tick. */
    public tick: number;

    /** CNETMsg_Tick hostComputationtime. */
    public hostComputationtime: number;

    /** CNETMsg_Tick hostComputationtimeStdDeviation. */
    public hostComputationtimeStdDeviation: number;

    /** CNETMsg_Tick hostFramestarttimeStdDeviation. */
    public hostFramestarttimeStdDeviation: number;

    /** CNETMsg_Tick hltvReplayFlags. */
    public hltvReplayFlags: number;

    /**
     * Decodes a CNETMsg_Tick message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CNETMsg_Tick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CNETMsg_Tick;
}

/** Properties of a CNETMsg_StringCmd. */
export interface ICNETMsg_StringCmd {

    /** CNETMsg_StringCmd command */
    command?: (string|null);
}

/** Represents a CNETMsg_StringCmd. */
export class CNETMsg_StringCmd implements ICNETMsg_StringCmd {

    /**
     * Constructs a new CNETMsg_StringCmd.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICNETMsg_StringCmd);

    /** CNETMsg_StringCmd command. */
    public command: string;

    /**
     * Decodes a CNETMsg_StringCmd message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CNETMsg_StringCmd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CNETMsg_StringCmd;
}

/** Properties of a CNETMsg_SignonState. */
export interface ICNETMsg_SignonState {

    /** CNETMsg_SignonState signonState */
    signonState?: (number|null);

    /** CNETMsg_SignonState spawnCount */
    spawnCount?: (number|null);

    /** CNETMsg_SignonState numServerPlayers */
    numServerPlayers?: (number|null);

    /** CNETMsg_SignonState playersNetworkids */
    playersNetworkids?: (string[]|null);

    /** CNETMsg_SignonState mapName */
    mapName?: (string|null);
}

/** Represents a CNETMsg_SignonState. */
export class CNETMsg_SignonState implements ICNETMsg_SignonState {

    /**
     * Constructs a new CNETMsg_SignonState.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICNETMsg_SignonState);

    /** CNETMsg_SignonState signonState. */
    public signonState: number;

    /** CNETMsg_SignonState spawnCount. */
    public spawnCount: number;

    /** CNETMsg_SignonState numServerPlayers. */
    public numServerPlayers: number;

    /** CNETMsg_SignonState playersNetworkids. */
    public playersNetworkids: string[];

    /** CNETMsg_SignonState mapName. */
    public mapName: string;

    /**
     * Decodes a CNETMsg_SignonState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CNETMsg_SignonState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CNETMsg_SignonState;
}

/** Properties of a CMsg_CVars. */
export interface ICMsg_CVars {

    /** CMsg_CVars cvars */
    cvars?: (CMsg_CVars.ICVar[]|null);
}

/** Represents a CMsg_CVars. */
export class CMsg_CVars implements ICMsg_CVars {

    /**
     * Constructs a new CMsg_CVars.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsg_CVars);

    /** CMsg_CVars cvars. */
    public cvars: CMsg_CVars.ICVar[];

    /**
     * Decodes a CMsg_CVars message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsg_CVars
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsg_CVars;
}

export namespace CMsg_CVars {

    /** Properties of a CVar. */
    interface ICVar {

        /** CVar name */
        name?: (string|null);

        /** CVar value */
        value?: (string|null);

        /** CVar dictionaryName */
        dictionaryName?: (number|null);
    }

    /** Represents a CVar. */
    class CVar implements ICVar {

        /**
         * Constructs a new CVar.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsg_CVars.ICVar);

        /** CVar name. */
        public name: string;

        /** CVar value. */
        public value: string;

        /** CVar dictionaryName. */
        public dictionaryName: number;

        /**
         * Decodes a CVar message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CVar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsg_CVars.CVar;
    }
}

/** Properties of a CNETMsg_SetConVar. */
export interface ICNETMsg_SetConVar {

    /** CNETMsg_SetConVar convars */
    convars?: (ICMsg_CVars|null);
}

/** Represents a CNETMsg_SetConVar. */
export class CNETMsg_SetConVar implements ICNETMsg_SetConVar {

    /**
     * Constructs a new CNETMsg_SetConVar.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICNETMsg_SetConVar);

    /** CNETMsg_SetConVar convars. */
    public convars?: (ICMsg_CVars|null);

    /**
     * Decodes a CNETMsg_SetConVar message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CNETMsg_SetConVar
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CNETMsg_SetConVar;
}

/** Properties of a CNETMsg_NOP. */
export interface ICNETMsg_NOP {
}

/** Represents a CNETMsg_NOP. */
export class CNETMsg_NOP implements ICNETMsg_NOP {

    /**
     * Constructs a new CNETMsg_NOP.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICNETMsg_NOP);

    /**
     * Decodes a CNETMsg_NOP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CNETMsg_NOP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CNETMsg_NOP;
}

/** Properties of a CNETMsg_Disconnect. */
export interface ICNETMsg_Disconnect {

    /** CNETMsg_Disconnect text */
    text?: (string|null);
}

/** Represents a CNETMsg_Disconnect. */
export class CNETMsg_Disconnect implements ICNETMsg_Disconnect {

    /**
     * Constructs a new CNETMsg_Disconnect.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICNETMsg_Disconnect);

    /** CNETMsg_Disconnect text. */
    public text: string;

    /**
     * Decodes a CNETMsg_Disconnect message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CNETMsg_Disconnect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CNETMsg_Disconnect;
}

/** Properties of a CNETMsg_File. */
export interface ICNETMsg_File {

    /** CNETMsg_File transferId */
    transferId?: (number|null);

    /** CNETMsg_File fileName */
    fileName?: (string|null);

    /** CNETMsg_File isReplayDemoFile */
    isReplayDemoFile?: (boolean|null);

    /** CNETMsg_File deny */
    deny?: (boolean|null);
}

/** Represents a CNETMsg_File. */
export class CNETMsg_File implements ICNETMsg_File {

    /**
     * Constructs a new CNETMsg_File.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICNETMsg_File);

    /** CNETMsg_File transferId. */
    public transferId: number;

    /** CNETMsg_File fileName. */
    public fileName: string;

    /** CNETMsg_File isReplayDemoFile. */
    public isReplayDemoFile: boolean;

    /** CNETMsg_File deny. */
    public deny: boolean;

    /**
     * Decodes a CNETMsg_File message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CNETMsg_File
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CNETMsg_File;
}

/** Properties of a CNETMsg_SplitScreenUser. */
export interface ICNETMsg_SplitScreenUser {

    /** CNETMsg_SplitScreenUser slot */
    slot?: (number|null);
}

/** Represents a CNETMsg_SplitScreenUser. */
export class CNETMsg_SplitScreenUser implements ICNETMsg_SplitScreenUser {

    /**
     * Constructs a new CNETMsg_SplitScreenUser.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICNETMsg_SplitScreenUser);

    /** CNETMsg_SplitScreenUser slot. */
    public slot: number;

    /**
     * Decodes a CNETMsg_SplitScreenUser message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CNETMsg_SplitScreenUser
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CNETMsg_SplitScreenUser;
}

/** Properties of a CNETMsg_PlayerAvatarData. */
export interface ICNETMsg_PlayerAvatarData {

    /** CNETMsg_PlayerAvatarData accountid */
    accountid?: (number|null);

    /** CNETMsg_PlayerAvatarData rgb */
    rgb?: (Uint8Array|null);
}

/** Represents a CNETMsg_PlayerAvatarData. */
export class CNETMsg_PlayerAvatarData implements ICNETMsg_PlayerAvatarData {

    /**
     * Constructs a new CNETMsg_PlayerAvatarData.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICNETMsg_PlayerAvatarData);

    /** CNETMsg_PlayerAvatarData accountid. */
    public accountid: number;

    /** CNETMsg_PlayerAvatarData rgb. */
    public rgb: Uint8Array;

    /**
     * Decodes a CNETMsg_PlayerAvatarData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CNETMsg_PlayerAvatarData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CNETMsg_PlayerAvatarData;
}

/** Properties of a CCLCMsg_ClientInfo. */
export interface ICCLCMsg_ClientInfo {

    /** CCLCMsg_ClientInfo sendTableCrc */
    sendTableCrc?: (number|null);

    /** CCLCMsg_ClientInfo serverCount */
    serverCount?: (number|null);

    /** CCLCMsg_ClientInfo isHltv */
    isHltv?: (boolean|null);

    /** CCLCMsg_ClientInfo isReplay */
    isReplay?: (boolean|null);

    /** CCLCMsg_ClientInfo friendsId */
    friendsId?: (number|null);

    /** CCLCMsg_ClientInfo friendsName */
    friendsName?: (string|null);

    /** CCLCMsg_ClientInfo customFiles */
    customFiles?: (number[]|null);
}

/** Represents a CCLCMsg_ClientInfo. */
export class CCLCMsg_ClientInfo implements ICCLCMsg_ClientInfo {

    /**
     * Constructs a new CCLCMsg_ClientInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCLCMsg_ClientInfo);

    /** CCLCMsg_ClientInfo sendTableCrc. */
    public sendTableCrc: number;

    /** CCLCMsg_ClientInfo serverCount. */
    public serverCount: number;

    /** CCLCMsg_ClientInfo isHltv. */
    public isHltv: boolean;

    /** CCLCMsg_ClientInfo isReplay. */
    public isReplay: boolean;

    /** CCLCMsg_ClientInfo friendsId. */
    public friendsId: number;

    /** CCLCMsg_ClientInfo friendsName. */
    public friendsName: string;

    /** CCLCMsg_ClientInfo customFiles. */
    public customFiles: number[];

    /**
     * Decodes a CCLCMsg_ClientInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCLCMsg_ClientInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCLCMsg_ClientInfo;
}

/** Properties of a CCLCMsg_Move. */
export interface ICCLCMsg_Move {

    /** CCLCMsg_Move numBackupCommands */
    numBackupCommands?: (number|null);

    /** CCLCMsg_Move numNewCommands */
    numNewCommands?: (number|null);

    /** CCLCMsg_Move data */
    data?: (Uint8Array|null);
}

/** Represents a CCLCMsg_Move. */
export class CCLCMsg_Move implements ICCLCMsg_Move {

    /**
     * Constructs a new CCLCMsg_Move.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCLCMsg_Move);

    /** CCLCMsg_Move numBackupCommands. */
    public numBackupCommands: number;

    /** CCLCMsg_Move numNewCommands. */
    public numNewCommands: number;

    /** CCLCMsg_Move data. */
    public data: Uint8Array;

    /**
     * Decodes a CCLCMsg_Move message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCLCMsg_Move
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCLCMsg_Move;
}

/** Properties of a CCLCMsg_VoiceData. */
export interface ICCLCMsg_VoiceData {

    /** CCLCMsg_VoiceData data */
    data?: (Uint8Array|null);

    /** CCLCMsg_VoiceData xuid */
    xuid?: (number|Long|null);

    /** CCLCMsg_VoiceData format */
    format?: (VoiceDataFormat_t|null);

    /** CCLCMsg_VoiceData sequenceBytes */
    sequenceBytes?: (number|null);

    /** CCLCMsg_VoiceData sectionNumber */
    sectionNumber?: (number|null);

    /** CCLCMsg_VoiceData uncompressedSampleOffset */
    uncompressedSampleOffset?: (number|null);
}

/** Represents a CCLCMsg_VoiceData. */
export class CCLCMsg_VoiceData implements ICCLCMsg_VoiceData {

    /**
     * Constructs a new CCLCMsg_VoiceData.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCLCMsg_VoiceData);

    /** CCLCMsg_VoiceData data. */
    public data: Uint8Array;

    /** CCLCMsg_VoiceData xuid. */
    public xuid: (number|Long);

    /** CCLCMsg_VoiceData format. */
    public format: VoiceDataFormat_t;

    /** CCLCMsg_VoiceData sequenceBytes. */
    public sequenceBytes: number;

    /** CCLCMsg_VoiceData sectionNumber. */
    public sectionNumber: number;

    /** CCLCMsg_VoiceData uncompressedSampleOffset. */
    public uncompressedSampleOffset: number;

    /**
     * Decodes a CCLCMsg_VoiceData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCLCMsg_VoiceData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCLCMsg_VoiceData;
}

/** Properties of a CCLCMsg_BaselineAck. */
export interface ICCLCMsg_BaselineAck {

    /** CCLCMsg_BaselineAck baselineTick */
    baselineTick?: (number|null);

    /** CCLCMsg_BaselineAck baselineNr */
    baselineNr?: (number|null);
}

/** Represents a CCLCMsg_BaselineAck. */
export class CCLCMsg_BaselineAck implements ICCLCMsg_BaselineAck {

    /**
     * Constructs a new CCLCMsg_BaselineAck.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCLCMsg_BaselineAck);

    /** CCLCMsg_BaselineAck baselineTick. */
    public baselineTick: number;

    /** CCLCMsg_BaselineAck baselineNr. */
    public baselineNr: number;

    /**
     * Decodes a CCLCMsg_BaselineAck message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCLCMsg_BaselineAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCLCMsg_BaselineAck;
}

/** Properties of a CCLCMsg_ListenEvents. */
export interface ICCLCMsg_ListenEvents {

    /** CCLCMsg_ListenEvents eventMask */
    eventMask?: (number[]|null);
}

/** Represents a CCLCMsg_ListenEvents. */
export class CCLCMsg_ListenEvents implements ICCLCMsg_ListenEvents {

    /**
     * Constructs a new CCLCMsg_ListenEvents.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCLCMsg_ListenEvents);

    /** CCLCMsg_ListenEvents eventMask. */
    public eventMask: number[];

    /**
     * Decodes a CCLCMsg_ListenEvents message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCLCMsg_ListenEvents
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCLCMsg_ListenEvents;
}

/** Properties of a CCLCMsg_RespondCvarValue. */
export interface ICCLCMsg_RespondCvarValue {

    /** CCLCMsg_RespondCvarValue cookie */
    cookie?: (number|null);

    /** CCLCMsg_RespondCvarValue statusCode */
    statusCode?: (number|null);

    /** CCLCMsg_RespondCvarValue name */
    name?: (string|null);

    /** CCLCMsg_RespondCvarValue value */
    value?: (string|null);
}

/** Represents a CCLCMsg_RespondCvarValue. */
export class CCLCMsg_RespondCvarValue implements ICCLCMsg_RespondCvarValue {

    /**
     * Constructs a new CCLCMsg_RespondCvarValue.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCLCMsg_RespondCvarValue);

    /** CCLCMsg_RespondCvarValue cookie. */
    public cookie: number;

    /** CCLCMsg_RespondCvarValue statusCode. */
    public statusCode: number;

    /** CCLCMsg_RespondCvarValue name. */
    public name: string;

    /** CCLCMsg_RespondCvarValue value. */
    public value: string;

    /**
     * Decodes a CCLCMsg_RespondCvarValue message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCLCMsg_RespondCvarValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCLCMsg_RespondCvarValue;
}

/** Properties of a CCLCMsg_FileCRCCheck. */
export interface ICCLCMsg_FileCRCCheck {

    /** CCLCMsg_FileCRCCheck codePath */
    codePath?: (number|null);

    /** CCLCMsg_FileCRCCheck path */
    path?: (string|null);

    /** CCLCMsg_FileCRCCheck codeFilename */
    codeFilename?: (number|null);

    /** CCLCMsg_FileCRCCheck filename */
    filename?: (string|null);

    /** CCLCMsg_FileCRCCheck fileFraction */
    fileFraction?: (number|null);

    /** CCLCMsg_FileCRCCheck md5 */
    md5?: (Uint8Array|null);

    /** CCLCMsg_FileCRCCheck crc */
    crc?: (number|null);

    /** CCLCMsg_FileCRCCheck fileHashType */
    fileHashType?: (number|null);

    /** CCLCMsg_FileCRCCheck fileLen */
    fileLen?: (number|null);

    /** CCLCMsg_FileCRCCheck packFileId */
    packFileId?: (number|null);

    /** CCLCMsg_FileCRCCheck packFileNumber */
    packFileNumber?: (number|null);
}

/** Represents a CCLCMsg_FileCRCCheck. */
export class CCLCMsg_FileCRCCheck implements ICCLCMsg_FileCRCCheck {

    /**
     * Constructs a new CCLCMsg_FileCRCCheck.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCLCMsg_FileCRCCheck);

    /** CCLCMsg_FileCRCCheck codePath. */
    public codePath: number;

    /** CCLCMsg_FileCRCCheck path. */
    public path: string;

    /** CCLCMsg_FileCRCCheck codeFilename. */
    public codeFilename: number;

    /** CCLCMsg_FileCRCCheck filename. */
    public filename: string;

    /** CCLCMsg_FileCRCCheck fileFraction. */
    public fileFraction: number;

    /** CCLCMsg_FileCRCCheck md5. */
    public md5: Uint8Array;

    /** CCLCMsg_FileCRCCheck crc. */
    public crc: number;

    /** CCLCMsg_FileCRCCheck fileHashType. */
    public fileHashType: number;

    /** CCLCMsg_FileCRCCheck fileLen. */
    public fileLen: number;

    /** CCLCMsg_FileCRCCheck packFileId. */
    public packFileId: number;

    /** CCLCMsg_FileCRCCheck packFileNumber. */
    public packFileNumber: number;

    /**
     * Decodes a CCLCMsg_FileCRCCheck message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCLCMsg_FileCRCCheck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCLCMsg_FileCRCCheck;
}

/** Properties of a CCLCMsg_LoadingProgress. */
export interface ICCLCMsg_LoadingProgress {

    /** CCLCMsg_LoadingProgress progress */
    progress?: (number|null);
}

/** Represents a CCLCMsg_LoadingProgress. */
export class CCLCMsg_LoadingProgress implements ICCLCMsg_LoadingProgress {

    /**
     * Constructs a new CCLCMsg_LoadingProgress.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCLCMsg_LoadingProgress);

    /** CCLCMsg_LoadingProgress progress. */
    public progress: number;

    /**
     * Decodes a CCLCMsg_LoadingProgress message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCLCMsg_LoadingProgress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCLCMsg_LoadingProgress;
}

/** Properties of a CCLCMsg_SplitPlayerConnect. */
export interface ICCLCMsg_SplitPlayerConnect {

    /** CCLCMsg_SplitPlayerConnect convars */
    convars?: (ICMsg_CVars|null);
}

/** Represents a CCLCMsg_SplitPlayerConnect. */
export class CCLCMsg_SplitPlayerConnect implements ICCLCMsg_SplitPlayerConnect {

    /**
     * Constructs a new CCLCMsg_SplitPlayerConnect.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCLCMsg_SplitPlayerConnect);

    /** CCLCMsg_SplitPlayerConnect convars. */
    public convars?: (ICMsg_CVars|null);

    /**
     * Decodes a CCLCMsg_SplitPlayerConnect message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCLCMsg_SplitPlayerConnect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCLCMsg_SplitPlayerConnect;
}

/** Properties of a CCLCMsg_CmdKeyValues. */
export interface ICCLCMsg_CmdKeyValues {

    /** CCLCMsg_CmdKeyValues keyvalues */
    keyvalues?: (Uint8Array|null);
}

/** Represents a CCLCMsg_CmdKeyValues. */
export class CCLCMsg_CmdKeyValues implements ICCLCMsg_CmdKeyValues {

    /**
     * Constructs a new CCLCMsg_CmdKeyValues.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCLCMsg_CmdKeyValues);

    /** CCLCMsg_CmdKeyValues keyvalues. */
    public keyvalues: Uint8Array;

    /**
     * Decodes a CCLCMsg_CmdKeyValues message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCLCMsg_CmdKeyValues
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCLCMsg_CmdKeyValues;
}

/** Properties of a CSVCMsg_ServerInfo. */
export interface ICSVCMsg_ServerInfo {

    /** CSVCMsg_ServerInfo protocol */
    protocol?: (number|null);

    /** CSVCMsg_ServerInfo serverCount */
    serverCount?: (number|null);

    /** CSVCMsg_ServerInfo isDedicated */
    isDedicated?: (boolean|null);

    /** CSVCMsg_ServerInfo isOfficialValveServer */
    isOfficialValveServer?: (boolean|null);

    /** CSVCMsg_ServerInfo isHltv */
    isHltv?: (boolean|null);

    /** CSVCMsg_ServerInfo isReplay */
    isReplay?: (boolean|null);

    /** CSVCMsg_ServerInfo isRedirectingToProxyRelay */
    isRedirectingToProxyRelay?: (boolean|null);

    /** CSVCMsg_ServerInfo cOs */
    cOs?: (number|null);

    /** CSVCMsg_ServerInfo mapCrc */
    mapCrc?: (number|null);

    /** CSVCMsg_ServerInfo clientCrc */
    clientCrc?: (number|null);

    /** CSVCMsg_ServerInfo stringTableCrc */
    stringTableCrc?: (number|null);

    /** CSVCMsg_ServerInfo maxClients */
    maxClients?: (number|null);

    /** CSVCMsg_ServerInfo maxClasses */
    maxClasses?: (number|null);

    /** CSVCMsg_ServerInfo playerSlot */
    playerSlot?: (number|null);

    /** CSVCMsg_ServerInfo tickInterval */
    tickInterval?: (number|null);

    /** CSVCMsg_ServerInfo gameDir */
    gameDir?: (string|null);

    /** CSVCMsg_ServerInfo mapName */
    mapName?: (string|null);

    /** CSVCMsg_ServerInfo mapGroupName */
    mapGroupName?: (string|null);

    /** CSVCMsg_ServerInfo skyName */
    skyName?: (string|null);

    /** CSVCMsg_ServerInfo hostName */
    hostName?: (string|null);

    /** CSVCMsg_ServerInfo publicIp */
    publicIp?: (number|null);

    /** CSVCMsg_ServerInfo ugcMapId */
    ugcMapId?: (number|Long|null);
}

/** Represents a CSVCMsg_ServerInfo. */
export class CSVCMsg_ServerInfo implements ICSVCMsg_ServerInfo {

    /**
     * Constructs a new CSVCMsg_ServerInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_ServerInfo);

    /** CSVCMsg_ServerInfo protocol. */
    public protocol: number;

    /** CSVCMsg_ServerInfo serverCount. */
    public serverCount: number;

    /** CSVCMsg_ServerInfo isDedicated. */
    public isDedicated: boolean;

    /** CSVCMsg_ServerInfo isOfficialValveServer. */
    public isOfficialValveServer: boolean;

    /** CSVCMsg_ServerInfo isHltv. */
    public isHltv: boolean;

    /** CSVCMsg_ServerInfo isReplay. */
    public isReplay: boolean;

    /** CSVCMsg_ServerInfo isRedirectingToProxyRelay. */
    public isRedirectingToProxyRelay: boolean;

    /** CSVCMsg_ServerInfo cOs. */
    public cOs: number;

    /** CSVCMsg_ServerInfo mapCrc. */
    public mapCrc: number;

    /** CSVCMsg_ServerInfo clientCrc. */
    public clientCrc: number;

    /** CSVCMsg_ServerInfo stringTableCrc. */
    public stringTableCrc: number;

    /** CSVCMsg_ServerInfo maxClients. */
    public maxClients: number;

    /** CSVCMsg_ServerInfo maxClasses. */
    public maxClasses: number;

    /** CSVCMsg_ServerInfo playerSlot. */
    public playerSlot: number;

    /** CSVCMsg_ServerInfo tickInterval. */
    public tickInterval: number;

    /** CSVCMsg_ServerInfo gameDir. */
    public gameDir: string;

    /** CSVCMsg_ServerInfo mapName. */
    public mapName: string;

    /** CSVCMsg_ServerInfo mapGroupName. */
    public mapGroupName: string;

    /** CSVCMsg_ServerInfo skyName. */
    public skyName: string;

    /** CSVCMsg_ServerInfo hostName. */
    public hostName: string;

    /** CSVCMsg_ServerInfo publicIp. */
    public publicIp: number;

    /** CSVCMsg_ServerInfo ugcMapId. */
    public ugcMapId: (number|Long);

    /**
     * Decodes a CSVCMsg_ServerInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_ServerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_ServerInfo;
}

/** Properties of a CSVCMsg_ClassInfo. */
export interface ICSVCMsg_ClassInfo {

    /** CSVCMsg_ClassInfo createOnClient */
    createOnClient?: (boolean|null);

    /** CSVCMsg_ClassInfo classes */
    classes?: (CSVCMsg_ClassInfo.Iclass_t[]|null);
}

/** Represents a CSVCMsg_ClassInfo. */
export class CSVCMsg_ClassInfo implements ICSVCMsg_ClassInfo {

    /**
     * Constructs a new CSVCMsg_ClassInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_ClassInfo);

    /** CSVCMsg_ClassInfo createOnClient. */
    public createOnClient: boolean;

    /** CSVCMsg_ClassInfo classes. */
    public classes: CSVCMsg_ClassInfo.Iclass_t[];

    /**
     * Decodes a CSVCMsg_ClassInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_ClassInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_ClassInfo;
}

export namespace CSVCMsg_ClassInfo {

    /** Properties of a class_t. */
    interface Iclass_t {

        /** class_t classId */
        classId?: (number|null);

        /** class_t dataTableName */
        dataTableName?: (string|null);

        /** class_t className */
        className?: (string|null);
    }

    /** Represents a class_t. */
    class class_t implements Iclass_t {

        /**
         * Constructs a new class_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: CSVCMsg_ClassInfo.Iclass_t);

        /** class_t classId. */
        public classId: number;

        /** class_t dataTableName. */
        public dataTableName: string;

        /** class_t className. */
        public className: string;

        /**
         * Decodes a class_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns class_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_ClassInfo.class_t;
    }
}

/** Properties of a CSVCMsg_SendTable. */
export interface ICSVCMsg_SendTable {

    /** CSVCMsg_SendTable isEnd */
    isEnd?: (boolean|null);

    /** CSVCMsg_SendTable netTableName */
    netTableName?: (string|null);

    /** CSVCMsg_SendTable needsDecoder */
    needsDecoder?: (boolean|null);

    /** CSVCMsg_SendTable props */
    props?: (CSVCMsg_SendTable.Isendprop_t[]|null);
}

/** Represents a CSVCMsg_SendTable. */
export class CSVCMsg_SendTable implements ICSVCMsg_SendTable {

    /**
     * Constructs a new CSVCMsg_SendTable.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_SendTable);

    /** CSVCMsg_SendTable isEnd. */
    public isEnd: boolean;

    /** CSVCMsg_SendTable netTableName. */
    public netTableName: string;

    /** CSVCMsg_SendTable needsDecoder. */
    public needsDecoder: boolean;

    /** CSVCMsg_SendTable props. */
    public props: CSVCMsg_SendTable.Isendprop_t[];

    /**
     * Decodes a CSVCMsg_SendTable message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_SendTable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_SendTable;
}

export namespace CSVCMsg_SendTable {

    /** Properties of a sendprop_t. */
    interface Isendprop_t {

        /** sendprop_t type */
        type?: (number|null);

        /** sendprop_t varName */
        varName?: (string|null);

        /** sendprop_t flags */
        flags?: (number|null);

        /** sendprop_t priority */
        priority?: (number|null);

        /** sendprop_t dtName */
        dtName?: (string|null);

        /** sendprop_t numElements */
        numElements?: (number|null);

        /** sendprop_t lowValue */
        lowValue?: (number|null);

        /** sendprop_t highValue */
        highValue?: (number|null);

        /** sendprop_t numBits */
        numBits?: (number|null);
    }

    /** Represents a sendprop_t. */
    class sendprop_t implements Isendprop_t {

        /**
         * Constructs a new sendprop_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: CSVCMsg_SendTable.Isendprop_t);

        /** sendprop_t type. */
        public type: number;

        /** sendprop_t varName. */
        public varName: string;

        /** sendprop_t flags. */
        public flags: number;

        /** sendprop_t priority. */
        public priority: number;

        /** sendprop_t dtName. */
        public dtName: string;

        /** sendprop_t numElements. */
        public numElements: number;

        /** sendprop_t lowValue. */
        public lowValue: number;

        /** sendprop_t highValue. */
        public highValue: number;

        /** sendprop_t numBits. */
        public numBits: number;

        /**
         * Decodes a sendprop_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns sendprop_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_SendTable.sendprop_t;
    }
}

/** Properties of a CSVCMsg_Print. */
export interface ICSVCMsg_Print {

    /** CSVCMsg_Print text */
    text?: (string|null);
}

/** Represents a CSVCMsg_Print. */
export class CSVCMsg_Print implements ICSVCMsg_Print {

    /**
     * Constructs a new CSVCMsg_Print.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_Print);

    /** CSVCMsg_Print text. */
    public text: string;

    /**
     * Decodes a CSVCMsg_Print message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_Print
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_Print;
}

/** Properties of a CSVCMsg_SetPause. */
export interface ICSVCMsg_SetPause {

    /** CSVCMsg_SetPause paused */
    paused?: (boolean|null);
}

/** Represents a CSVCMsg_SetPause. */
export class CSVCMsg_SetPause implements ICSVCMsg_SetPause {

    /**
     * Constructs a new CSVCMsg_SetPause.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_SetPause);

    /** CSVCMsg_SetPause paused. */
    public paused: boolean;

    /**
     * Decodes a CSVCMsg_SetPause message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_SetPause
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_SetPause;
}

/** Properties of a CSVCMsg_SetView. */
export interface ICSVCMsg_SetView {

    /** CSVCMsg_SetView entityIndex */
    entityIndex?: (number|null);
}

/** Represents a CSVCMsg_SetView. */
export class CSVCMsg_SetView implements ICSVCMsg_SetView {

    /**
     * Constructs a new CSVCMsg_SetView.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_SetView);

    /** CSVCMsg_SetView entityIndex. */
    public entityIndex: number;

    /**
     * Decodes a CSVCMsg_SetView message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_SetView
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_SetView;
}

/** Properties of a CSVCMsg_CreateStringTable. */
export interface ICSVCMsg_CreateStringTable {

    /** CSVCMsg_CreateStringTable name */
    name?: (string|null);

    /** CSVCMsg_CreateStringTable maxEntries */
    maxEntries?: (number|null);

    /** CSVCMsg_CreateStringTable numEntries */
    numEntries?: (number|null);

    /** CSVCMsg_CreateStringTable userDataFixedSize */
    userDataFixedSize?: (boolean|null);

    /** CSVCMsg_CreateStringTable userDataSize */
    userDataSize?: (number|null);

    /** CSVCMsg_CreateStringTable userDataSizeBits */
    userDataSizeBits?: (number|null);

    /** CSVCMsg_CreateStringTable flags */
    flags?: (number|null);

    /** CSVCMsg_CreateStringTable stringData */
    stringData?: (Uint8Array|null);
}

/** Represents a CSVCMsg_CreateStringTable. */
export class CSVCMsg_CreateStringTable implements ICSVCMsg_CreateStringTable {

    /**
     * Constructs a new CSVCMsg_CreateStringTable.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_CreateStringTable);

    /** CSVCMsg_CreateStringTable name. */
    public name: string;

    /** CSVCMsg_CreateStringTable maxEntries. */
    public maxEntries: number;

    /** CSVCMsg_CreateStringTable numEntries. */
    public numEntries: number;

    /** CSVCMsg_CreateStringTable userDataFixedSize. */
    public userDataFixedSize: boolean;

    /** CSVCMsg_CreateStringTable userDataSize. */
    public userDataSize: number;

    /** CSVCMsg_CreateStringTable userDataSizeBits. */
    public userDataSizeBits: number;

    /** CSVCMsg_CreateStringTable flags. */
    public flags: number;

    /** CSVCMsg_CreateStringTable stringData. */
    public stringData: Uint8Array;

    /**
     * Decodes a CSVCMsg_CreateStringTable message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_CreateStringTable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_CreateStringTable;
}

/** Properties of a CSVCMsg_UpdateStringTable. */
export interface ICSVCMsg_UpdateStringTable {

    /** CSVCMsg_UpdateStringTable tableId */
    tableId?: (number|null);

    /** CSVCMsg_UpdateStringTable numChangedEntries */
    numChangedEntries?: (number|null);

    /** CSVCMsg_UpdateStringTable stringData */
    stringData?: (Uint8Array|null);
}

/** Represents a CSVCMsg_UpdateStringTable. */
export class CSVCMsg_UpdateStringTable implements ICSVCMsg_UpdateStringTable {

    /**
     * Constructs a new CSVCMsg_UpdateStringTable.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_UpdateStringTable);

    /** CSVCMsg_UpdateStringTable tableId. */
    public tableId: number;

    /** CSVCMsg_UpdateStringTable numChangedEntries. */
    public numChangedEntries: number;

    /** CSVCMsg_UpdateStringTable stringData. */
    public stringData: Uint8Array;

    /**
     * Decodes a CSVCMsg_UpdateStringTable message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_UpdateStringTable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_UpdateStringTable;
}

/** Properties of a CSVCMsg_VoiceInit. */
export interface ICSVCMsg_VoiceInit {

    /** CSVCMsg_VoiceInit quality */
    quality?: (number|null);

    /** CSVCMsg_VoiceInit codec */
    codec?: (string|null);

    /** CSVCMsg_VoiceInit version */
    version?: (number|null);
}

/** Represents a CSVCMsg_VoiceInit. */
export class CSVCMsg_VoiceInit implements ICSVCMsg_VoiceInit {

    /**
     * Constructs a new CSVCMsg_VoiceInit.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_VoiceInit);

    /** CSVCMsg_VoiceInit quality. */
    public quality: number;

    /** CSVCMsg_VoiceInit codec. */
    public codec: string;

    /** CSVCMsg_VoiceInit version. */
    public version: number;

    /**
     * Decodes a CSVCMsg_VoiceInit message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_VoiceInit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_VoiceInit;
}

/** Properties of a CSVCMsg_VoiceData. */
export interface ICSVCMsg_VoiceData {

    /** CSVCMsg_VoiceData client */
    client?: (number|null);

    /** CSVCMsg_VoiceData proximity */
    proximity?: (boolean|null);

    /** CSVCMsg_VoiceData xuid */
    xuid?: (number|Long|null);

    /** CSVCMsg_VoiceData audibleMask */
    audibleMask?: (number|null);

    /** CSVCMsg_VoiceData voiceData */
    voiceData?: (Uint8Array|null);

    /** CSVCMsg_VoiceData caster */
    caster?: (boolean|null);

    /** CSVCMsg_VoiceData format */
    format?: (VoiceDataFormat_t|null);

    /** CSVCMsg_VoiceData sequenceBytes */
    sequenceBytes?: (number|null);

    /** CSVCMsg_VoiceData sectionNumber */
    sectionNumber?: (number|null);

    /** CSVCMsg_VoiceData uncompressedSampleOffset */
    uncompressedSampleOffset?: (number|null);
}

/** Represents a CSVCMsg_VoiceData. */
export class CSVCMsg_VoiceData implements ICSVCMsg_VoiceData {

    /**
     * Constructs a new CSVCMsg_VoiceData.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_VoiceData);

    /** CSVCMsg_VoiceData client. */
    public client: number;

    /** CSVCMsg_VoiceData proximity. */
    public proximity: boolean;

    /** CSVCMsg_VoiceData xuid. */
    public xuid: (number|Long);

    /** CSVCMsg_VoiceData audibleMask. */
    public audibleMask: number;

    /** CSVCMsg_VoiceData voiceData. */
    public voiceData: Uint8Array;

    /** CSVCMsg_VoiceData caster. */
    public caster: boolean;

    /** CSVCMsg_VoiceData format. */
    public format: VoiceDataFormat_t;

    /** CSVCMsg_VoiceData sequenceBytes. */
    public sequenceBytes: number;

    /** CSVCMsg_VoiceData sectionNumber. */
    public sectionNumber: number;

    /** CSVCMsg_VoiceData uncompressedSampleOffset. */
    public uncompressedSampleOffset: number;

    /**
     * Decodes a CSVCMsg_VoiceData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_VoiceData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_VoiceData;
}

/** Properties of a CSVCMsg_FixAngle. */
export interface ICSVCMsg_FixAngle {

    /** CSVCMsg_FixAngle relative */
    relative?: (boolean|null);

    /** CSVCMsg_FixAngle angle */
    angle?: (ICMsgQAngle|null);
}

/** Represents a CSVCMsg_FixAngle. */
export class CSVCMsg_FixAngle implements ICSVCMsg_FixAngle {

    /**
     * Constructs a new CSVCMsg_FixAngle.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_FixAngle);

    /** CSVCMsg_FixAngle relative. */
    public relative: boolean;

    /** CSVCMsg_FixAngle angle. */
    public angle?: (ICMsgQAngle|null);

    /**
     * Decodes a CSVCMsg_FixAngle message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_FixAngle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_FixAngle;
}

/** Properties of a CSVCMsg_CrosshairAngle. */
export interface ICSVCMsg_CrosshairAngle {

    /** CSVCMsg_CrosshairAngle angle */
    angle?: (ICMsgQAngle|null);
}

/** Represents a CSVCMsg_CrosshairAngle. */
export class CSVCMsg_CrosshairAngle implements ICSVCMsg_CrosshairAngle {

    /**
     * Constructs a new CSVCMsg_CrosshairAngle.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_CrosshairAngle);

    /** CSVCMsg_CrosshairAngle angle. */
    public angle?: (ICMsgQAngle|null);

    /**
     * Decodes a CSVCMsg_CrosshairAngle message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_CrosshairAngle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_CrosshairAngle;
}

/** Properties of a CSVCMsg_Prefetch. */
export interface ICSVCMsg_Prefetch {

    /** CSVCMsg_Prefetch soundIndex */
    soundIndex?: (number|null);
}

/** Represents a CSVCMsg_Prefetch. */
export class CSVCMsg_Prefetch implements ICSVCMsg_Prefetch {

    /**
     * Constructs a new CSVCMsg_Prefetch.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_Prefetch);

    /** CSVCMsg_Prefetch soundIndex. */
    public soundIndex: number;

    /**
     * Decodes a CSVCMsg_Prefetch message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_Prefetch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_Prefetch;
}

/** Properties of a CSVCMsg_BSPDecal. */
export interface ICSVCMsg_BSPDecal {

    /** CSVCMsg_BSPDecal pos */
    pos?: (ICMsgVector|null);

    /** CSVCMsg_BSPDecal decalTextureIndex */
    decalTextureIndex?: (number|null);

    /** CSVCMsg_BSPDecal entityIndex */
    entityIndex?: (number|null);

    /** CSVCMsg_BSPDecal modelIndex */
    modelIndex?: (number|null);

    /** CSVCMsg_BSPDecal lowPriority */
    lowPriority?: (boolean|null);
}

/** Represents a CSVCMsg_BSPDecal. */
export class CSVCMsg_BSPDecal implements ICSVCMsg_BSPDecal {

    /**
     * Constructs a new CSVCMsg_BSPDecal.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_BSPDecal);

    /** CSVCMsg_BSPDecal pos. */
    public pos?: (ICMsgVector|null);

    /** CSVCMsg_BSPDecal decalTextureIndex. */
    public decalTextureIndex: number;

    /** CSVCMsg_BSPDecal entityIndex. */
    public entityIndex: number;

    /** CSVCMsg_BSPDecal modelIndex. */
    public modelIndex: number;

    /** CSVCMsg_BSPDecal lowPriority. */
    public lowPriority: boolean;

    /**
     * Decodes a CSVCMsg_BSPDecal message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_BSPDecal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_BSPDecal;
}

/** Properties of a CSVCMsg_SplitScreen. */
export interface ICSVCMsg_SplitScreen {

    /** CSVCMsg_SplitScreen type */
    type?: (ESplitScreenMessageType|null);

    /** CSVCMsg_SplitScreen slot */
    slot?: (number|null);

    /** CSVCMsg_SplitScreen playerIndex */
    playerIndex?: (number|null);
}

/** Represents a CSVCMsg_SplitScreen. */
export class CSVCMsg_SplitScreen implements ICSVCMsg_SplitScreen {

    /**
     * Constructs a new CSVCMsg_SplitScreen.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_SplitScreen);

    /** CSVCMsg_SplitScreen type. */
    public type: ESplitScreenMessageType;

    /** CSVCMsg_SplitScreen slot. */
    public slot: number;

    /** CSVCMsg_SplitScreen playerIndex. */
    public playerIndex: number;

    /**
     * Decodes a CSVCMsg_SplitScreen message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_SplitScreen
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_SplitScreen;
}

/** Properties of a CSVCMsg_GetCvarValue. */
export interface ICSVCMsg_GetCvarValue {

    /** CSVCMsg_GetCvarValue cookie */
    cookie?: (number|null);

    /** CSVCMsg_GetCvarValue cvarName */
    cvarName?: (string|null);
}

/** Represents a CSVCMsg_GetCvarValue. */
export class CSVCMsg_GetCvarValue implements ICSVCMsg_GetCvarValue {

    /**
     * Constructs a new CSVCMsg_GetCvarValue.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_GetCvarValue);

    /** CSVCMsg_GetCvarValue cookie. */
    public cookie: number;

    /** CSVCMsg_GetCvarValue cvarName. */
    public cvarName: string;

    /**
     * Decodes a CSVCMsg_GetCvarValue message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_GetCvarValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_GetCvarValue;
}

/** Properties of a CSVCMsg_Menu. */
export interface ICSVCMsg_Menu {

    /** CSVCMsg_Menu dialogType */
    dialogType?: (number|null);

    /** CSVCMsg_Menu menuKeyValues */
    menuKeyValues?: (Uint8Array|null);
}

/** Represents a CSVCMsg_Menu. */
export class CSVCMsg_Menu implements ICSVCMsg_Menu {

    /**
     * Constructs a new CSVCMsg_Menu.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_Menu);

    /** CSVCMsg_Menu dialogType. */
    public dialogType: number;

    /** CSVCMsg_Menu menuKeyValues. */
    public menuKeyValues: Uint8Array;

    /**
     * Decodes a CSVCMsg_Menu message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_Menu
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_Menu;
}

/** Properties of a CSVCMsg_UserMessage. */
export interface ICSVCMsg_UserMessage {

    /** CSVCMsg_UserMessage msgType */
    msgType?: (number|null);

    /** CSVCMsg_UserMessage msgData */
    msgData?: (Uint8Array|null);

    /** CSVCMsg_UserMessage passthrough */
    passthrough?: (number|null);
}

/** Represents a CSVCMsg_UserMessage. */
export class CSVCMsg_UserMessage implements ICSVCMsg_UserMessage {

    /**
     * Constructs a new CSVCMsg_UserMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_UserMessage);

    /** CSVCMsg_UserMessage msgType. */
    public msgType: number;

    /** CSVCMsg_UserMessage msgData. */
    public msgData: Uint8Array;

    /** CSVCMsg_UserMessage passthrough. */
    public passthrough: number;

    /**
     * Decodes a CSVCMsg_UserMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_UserMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_UserMessage;
}

/** Properties of a CSVCMsg_PaintmapData. */
export interface ICSVCMsg_PaintmapData {

    /** CSVCMsg_PaintmapData paintmap */
    paintmap?: (Uint8Array|null);
}

/** Represents a CSVCMsg_PaintmapData. */
export class CSVCMsg_PaintmapData implements ICSVCMsg_PaintmapData {

    /**
     * Constructs a new CSVCMsg_PaintmapData.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_PaintmapData);

    /** CSVCMsg_PaintmapData paintmap. */
    public paintmap: Uint8Array;

    /**
     * Decodes a CSVCMsg_PaintmapData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_PaintmapData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_PaintmapData;
}

/** Properties of a CSVCMsg_GameEvent. */
export interface ICSVCMsg_GameEvent {

    /** CSVCMsg_GameEvent eventName */
    eventName?: (string|null);

    /** CSVCMsg_GameEvent eventid */
    eventid?: (number|null);

    /** CSVCMsg_GameEvent keys */
    keys?: (CSVCMsg_GameEvent.Ikey_t[]|null);

    /** CSVCMsg_GameEvent passthrough */
    passthrough?: (number|null);
}

/** Represents a CSVCMsg_GameEvent. */
export class CSVCMsg_GameEvent implements ICSVCMsg_GameEvent {

    /**
     * Constructs a new CSVCMsg_GameEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_GameEvent);

    /** CSVCMsg_GameEvent eventName. */
    public eventName: string;

    /** CSVCMsg_GameEvent eventid. */
    public eventid: number;

    /** CSVCMsg_GameEvent keys. */
    public keys: CSVCMsg_GameEvent.Ikey_t[];

    /** CSVCMsg_GameEvent passthrough. */
    public passthrough: number;

    /**
     * Decodes a CSVCMsg_GameEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_GameEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_GameEvent;
}

export namespace CSVCMsg_GameEvent {

    /** Properties of a key_t. */
    interface Ikey_t {

        /** key_t type */
        type?: (number|null);

        /** key_t valString */
        valString?: (string|null);

        /** key_t valFloat */
        valFloat?: (number|null);

        /** key_t valLong */
        valLong?: (number|null);

        /** key_t valShort */
        valShort?: (number|null);

        /** key_t valByte */
        valByte?: (number|null);

        /** key_t valBool */
        valBool?: (boolean|null);

        /** key_t valUint64 */
        valUint64?: (number|Long|null);

        /** key_t valWstring */
        valWstring?: (Uint8Array|null);
    }

    /** Represents a key_t. */
    class key_t implements Ikey_t {

        /**
         * Constructs a new key_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: CSVCMsg_GameEvent.Ikey_t);

        /** key_t type. */
        public type: number;

        /** key_t valString. */
        public valString: string;

        /** key_t valFloat. */
        public valFloat: number;

        /** key_t valLong. */
        public valLong: number;

        /** key_t valShort. */
        public valShort: number;

        /** key_t valByte. */
        public valByte: number;

        /** key_t valBool. */
        public valBool: boolean;

        /** key_t valUint64. */
        public valUint64: (number|Long);

        /** key_t valWstring. */
        public valWstring: Uint8Array;

        /**
         * Decodes a key_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns key_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_GameEvent.key_t;
    }
}

/** Properties of a CSVCMsg_GameEventList. */
export interface ICSVCMsg_GameEventList {

    /** CSVCMsg_GameEventList descriptors */
    descriptors?: (CSVCMsg_GameEventList.Idescriptor_t[]|null);
}

/** Represents a CSVCMsg_GameEventList. */
export class CSVCMsg_GameEventList implements ICSVCMsg_GameEventList {

    /**
     * Constructs a new CSVCMsg_GameEventList.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_GameEventList);

    /** CSVCMsg_GameEventList descriptors. */
    public descriptors: CSVCMsg_GameEventList.Idescriptor_t[];

    /**
     * Decodes a CSVCMsg_GameEventList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_GameEventList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_GameEventList;
}

export namespace CSVCMsg_GameEventList {

    /** Properties of a key_t. */
    interface Ikey_t {

        /** key_t type */
        type?: (number|null);

        /** key_t name */
        name?: (string|null);
    }

    /** Represents a key_t. */
    class key_t implements Ikey_t {

        /**
         * Constructs a new key_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: CSVCMsg_GameEventList.Ikey_t);

        /** key_t type. */
        public type: number;

        /** key_t name. */
        public name: string;

        /**
         * Decodes a key_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns key_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_GameEventList.key_t;
    }

    /** Properties of a descriptor_t. */
    interface Idescriptor_t {

        /** descriptor_t eventid */
        eventid?: (number|null);

        /** descriptor_t name */
        name?: (string|null);

        /** descriptor_t keys */
        keys?: (CSVCMsg_GameEventList.Ikey_t[]|null);
    }

    /** Represents a descriptor_t. */
    class descriptor_t implements Idescriptor_t {

        /**
         * Constructs a new descriptor_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: CSVCMsg_GameEventList.Idescriptor_t);

        /** descriptor_t eventid. */
        public eventid: number;

        /** descriptor_t name. */
        public name: string;

        /** descriptor_t keys. */
        public keys: CSVCMsg_GameEventList.Ikey_t[];

        /**
         * Decodes a descriptor_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns descriptor_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_GameEventList.descriptor_t;
    }
}

/** Properties of a CSVCMsg_TempEntities. */
export interface ICSVCMsg_TempEntities {

    /** CSVCMsg_TempEntities reliable */
    reliable?: (boolean|null);

    /** CSVCMsg_TempEntities numEntries */
    numEntries?: (number|null);

    /** CSVCMsg_TempEntities entityData */
    entityData?: (Uint8Array|null);
}

/** Represents a CSVCMsg_TempEntities. */
export class CSVCMsg_TempEntities implements ICSVCMsg_TempEntities {

    /**
     * Constructs a new CSVCMsg_TempEntities.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_TempEntities);

    /** CSVCMsg_TempEntities reliable. */
    public reliable: boolean;

    /** CSVCMsg_TempEntities numEntries. */
    public numEntries: number;

    /** CSVCMsg_TempEntities entityData. */
    public entityData: Uint8Array;

    /**
     * Decodes a CSVCMsg_TempEntities message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_TempEntities
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_TempEntities;
}

/** Properties of a CSVCMsg_PacketEntities. */
export interface ICSVCMsg_PacketEntities {

    /** CSVCMsg_PacketEntities maxEntries */
    maxEntries?: (number|null);

    /** CSVCMsg_PacketEntities updatedEntries */
    updatedEntries?: (number|null);

    /** CSVCMsg_PacketEntities isDelta */
    isDelta?: (boolean|null);

    /** CSVCMsg_PacketEntities updateBaseline */
    updateBaseline?: (boolean|null);

    /** CSVCMsg_PacketEntities baseline */
    baseline?: (number|null);

    /** CSVCMsg_PacketEntities deltaFrom */
    deltaFrom?: (number|null);

    /** CSVCMsg_PacketEntities entityData */
    entityData?: (Uint8Array|null);
}

/** Represents a CSVCMsg_PacketEntities. */
export class CSVCMsg_PacketEntities implements ICSVCMsg_PacketEntities {

    /**
     * Constructs a new CSVCMsg_PacketEntities.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_PacketEntities);

    /** CSVCMsg_PacketEntities maxEntries. */
    public maxEntries: number;

    /** CSVCMsg_PacketEntities updatedEntries. */
    public updatedEntries: number;

    /** CSVCMsg_PacketEntities isDelta. */
    public isDelta: boolean;

    /** CSVCMsg_PacketEntities updateBaseline. */
    public updateBaseline: boolean;

    /** CSVCMsg_PacketEntities baseline. */
    public baseline: number;

    /** CSVCMsg_PacketEntities deltaFrom. */
    public deltaFrom: number;

    /** CSVCMsg_PacketEntities entityData. */
    public entityData: Uint8Array;

    /**
     * Decodes a CSVCMsg_PacketEntities message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_PacketEntities
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_PacketEntities;
}

/** Properties of a CSVCMsg_Sounds. */
export interface ICSVCMsg_Sounds {

    /** CSVCMsg_Sounds reliableSound */
    reliableSound?: (boolean|null);

    /** CSVCMsg_Sounds sounds */
    sounds?: (CSVCMsg_Sounds.Isounddata_t[]|null);
}

/** Represents a CSVCMsg_Sounds. */
export class CSVCMsg_Sounds implements ICSVCMsg_Sounds {

    /**
     * Constructs a new CSVCMsg_Sounds.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_Sounds);

    /** CSVCMsg_Sounds reliableSound. */
    public reliableSound: boolean;

    /** CSVCMsg_Sounds sounds. */
    public sounds: CSVCMsg_Sounds.Isounddata_t[];

    /**
     * Decodes a CSVCMsg_Sounds message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_Sounds
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_Sounds;
}

export namespace CSVCMsg_Sounds {

    /** Properties of a sounddata_t. */
    interface Isounddata_t {

        /** sounddata_t originX */
        originX?: (number|null);

        /** sounddata_t originY */
        originY?: (number|null);

        /** sounddata_t originZ */
        originZ?: (number|null);

        /** sounddata_t volume */
        volume?: (number|null);

        /** sounddata_t delayValue */
        delayValue?: (number|null);

        /** sounddata_t sequenceNumber */
        sequenceNumber?: (number|null);

        /** sounddata_t entityIndex */
        entityIndex?: (number|null);

        /** sounddata_t channel */
        channel?: (number|null);

        /** sounddata_t pitch */
        pitch?: (number|null);

        /** sounddata_t flags */
        flags?: (number|null);

        /** sounddata_t soundNum */
        soundNum?: (number|null);

        /** sounddata_t soundNumHandle */
        soundNumHandle?: (number|null);

        /** sounddata_t speakerEntity */
        speakerEntity?: (number|null);

        /** sounddata_t randomSeed */
        randomSeed?: (number|null);

        /** sounddata_t soundLevel */
        soundLevel?: (number|null);

        /** sounddata_t isSentence */
        isSentence?: (boolean|null);

        /** sounddata_t isAmbient */
        isAmbient?: (boolean|null);
    }

    /** Represents a sounddata_t. */
    class sounddata_t implements Isounddata_t {

        /**
         * Constructs a new sounddata_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: CSVCMsg_Sounds.Isounddata_t);

        /** sounddata_t originX. */
        public originX: number;

        /** sounddata_t originY. */
        public originY: number;

        /** sounddata_t originZ. */
        public originZ: number;

        /** sounddata_t volume. */
        public volume: number;

        /** sounddata_t delayValue. */
        public delayValue: number;

        /** sounddata_t sequenceNumber. */
        public sequenceNumber: number;

        /** sounddata_t entityIndex. */
        public entityIndex: number;

        /** sounddata_t channel. */
        public channel: number;

        /** sounddata_t pitch. */
        public pitch: number;

        /** sounddata_t flags. */
        public flags: number;

        /** sounddata_t soundNum. */
        public soundNum: number;

        /** sounddata_t soundNumHandle. */
        public soundNumHandle: number;

        /** sounddata_t speakerEntity. */
        public speakerEntity: number;

        /** sounddata_t randomSeed. */
        public randomSeed: number;

        /** sounddata_t soundLevel. */
        public soundLevel: number;

        /** sounddata_t isSentence. */
        public isSentence: boolean;

        /** sounddata_t isAmbient. */
        public isAmbient: boolean;

        /**
         * Decodes a sounddata_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns sounddata_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_Sounds.sounddata_t;
    }
}

/** Properties of a CSVCMsg_EntityMsg. */
export interface ICSVCMsg_EntityMsg {

    /** CSVCMsg_EntityMsg entIndex */
    entIndex?: (number|null);

    /** CSVCMsg_EntityMsg classId */
    classId?: (number|null);

    /** CSVCMsg_EntityMsg entData */
    entData?: (Uint8Array|null);
}

/** Represents a CSVCMsg_EntityMsg. */
export class CSVCMsg_EntityMsg implements ICSVCMsg_EntityMsg {

    /**
     * Constructs a new CSVCMsg_EntityMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_EntityMsg);

    /** CSVCMsg_EntityMsg entIndex. */
    public entIndex: number;

    /** CSVCMsg_EntityMsg classId. */
    public classId: number;

    /** CSVCMsg_EntityMsg entData. */
    public entData: Uint8Array;

    /**
     * Decodes a CSVCMsg_EntityMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_EntityMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_EntityMsg;
}

/** Properties of a CSVCMsg_CmdKeyValues. */
export interface ICSVCMsg_CmdKeyValues {

    /** CSVCMsg_CmdKeyValues keyvalues */
    keyvalues?: (Uint8Array|null);
}

/** Represents a CSVCMsg_CmdKeyValues. */
export class CSVCMsg_CmdKeyValues implements ICSVCMsg_CmdKeyValues {

    /**
     * Constructs a new CSVCMsg_CmdKeyValues.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_CmdKeyValues);

    /** CSVCMsg_CmdKeyValues keyvalues. */
    public keyvalues: Uint8Array;

    /**
     * Decodes a CSVCMsg_CmdKeyValues message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_CmdKeyValues
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_CmdKeyValues;
}

/** Properties of a CSVCMsg_EncryptedData. */
export interface ICSVCMsg_EncryptedData {

    /** CSVCMsg_EncryptedData encrypted */
    encrypted?: (Uint8Array|null);

    /** CSVCMsg_EncryptedData keyType */
    keyType?: (number|null);
}

/** Represents a CSVCMsg_EncryptedData. */
export class CSVCMsg_EncryptedData implements ICSVCMsg_EncryptedData {

    /**
     * Constructs a new CSVCMsg_EncryptedData.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_EncryptedData);

    /** CSVCMsg_EncryptedData encrypted. */
    public encrypted: Uint8Array;

    /** CSVCMsg_EncryptedData keyType. */
    public keyType: number;

    /**
     * Decodes a CSVCMsg_EncryptedData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_EncryptedData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_EncryptedData;
}

/** Properties of a CSVCMsg_HltvReplay. */
export interface ICSVCMsg_HltvReplay {

    /** CSVCMsg_HltvReplay delay */
    delay?: (number|null);

    /** CSVCMsg_HltvReplay primaryTarget */
    primaryTarget?: (number|null);

    /** CSVCMsg_HltvReplay replayStopAt */
    replayStopAt?: (number|null);

    /** CSVCMsg_HltvReplay replayStartAt */
    replayStartAt?: (number|null);

    /** CSVCMsg_HltvReplay replaySlowdownBegin */
    replaySlowdownBegin?: (number|null);

    /** CSVCMsg_HltvReplay replaySlowdownEnd */
    replaySlowdownEnd?: (number|null);

    /** CSVCMsg_HltvReplay replaySlowdownRate */
    replaySlowdownRate?: (number|null);
}

/** Represents a CSVCMsg_HltvReplay. */
export class CSVCMsg_HltvReplay implements ICSVCMsg_HltvReplay {

    /**
     * Constructs a new CSVCMsg_HltvReplay.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSVCMsg_HltvReplay);

    /** CSVCMsg_HltvReplay delay. */
    public delay: number;

    /** CSVCMsg_HltvReplay primaryTarget. */
    public primaryTarget: number;

    /** CSVCMsg_HltvReplay replayStopAt. */
    public replayStopAt: number;

    /** CSVCMsg_HltvReplay replayStartAt. */
    public replayStartAt: number;

    /** CSVCMsg_HltvReplay replaySlowdownBegin. */
    public replaySlowdownBegin: number;

    /** CSVCMsg_HltvReplay replaySlowdownEnd. */
    public replaySlowdownEnd: number;

    /** CSVCMsg_HltvReplay replaySlowdownRate. */
    public replaySlowdownRate: number;

    /**
     * Decodes a CSVCMsg_HltvReplay message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSVCMsg_HltvReplay
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSVCMsg_HltvReplay;
}

/** Properties of a CCLCMsg_HltvReplay. */
export interface ICCLCMsg_HltvReplay {

    /** CCLCMsg_HltvReplay request */
    request?: (number|null);

    /** CCLCMsg_HltvReplay slowdownLength */
    slowdownLength?: (number|null);

    /** CCLCMsg_HltvReplay slowdownRate */
    slowdownRate?: (number|null);

    /** CCLCMsg_HltvReplay primaryTargetEntIndex */
    primaryTargetEntIndex?: (number|null);

    /** CCLCMsg_HltvReplay eventTime */
    eventTime?: (number|null);
}

/** Represents a CCLCMsg_HltvReplay. */
export class CCLCMsg_HltvReplay implements ICCLCMsg_HltvReplay {

    /**
     * Constructs a new CCLCMsg_HltvReplay.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCLCMsg_HltvReplay);

    /** CCLCMsg_HltvReplay request. */
    public request: number;

    /** CCLCMsg_HltvReplay slowdownLength. */
    public slowdownLength: number;

    /** CCLCMsg_HltvReplay slowdownRate. */
    public slowdownRate: number;

    /** CCLCMsg_HltvReplay primaryTargetEntIndex. */
    public primaryTargetEntIndex: number;

    /** CCLCMsg_HltvReplay eventTime. */
    public eventTime: number;

    /**
     * Decodes a CCLCMsg_HltvReplay message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCLCMsg_HltvReplay
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCLCMsg_HltvReplay;
}

/** ECsgoGCMsg enum. */
export enum ECsgoGCMsg {
    k_EMsgGCCStrike15_v2_Base = 9100,
    k_EMsgGCCStrike15_v2_MatchmakingStart = 9101,
    k_EMsgGCCStrike15_v2_MatchmakingStop = 9102,
    k_EMsgGCCStrike15_v2_MatchmakingClient2ServerPing = 9103,
    k_EMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate = 9104,
    k_EMsgGCCStrike15_v2_MatchmakingGC2ServerReserve = 9105,
    k_EMsgGCCStrike15_v2_MatchmakingServerReservationResponse = 9106,
    k_EMsgGCCStrike15_v2_MatchmakingGC2ClientReserve = 9107,
    k_EMsgGCCStrike15_v2_MatchmakingServerRoundStats = 9108,
    k_EMsgGCCStrike15_v2_MatchmakingClient2GCHello = 9109,
    k_EMsgGCCStrike15_v2_MatchmakingGC2ClientHello = 9110,
    k_EMsgGCCStrike15_v2_MatchmakingServerMatchEnd = 9111,
    k_EMsgGCCStrike15_v2_MatchmakingGC2ClientAbandon = 9112,
    k_EMsgGCCStrike15_v2_MatchmakingServer2GCKick = 9113,
    k_EMsgGCCStrike15_v2_MatchmakingGC2ServerConfirm = 9114,
    k_EMsgGCCStrike15_v2_MatchmakingGCOperationalStats = 9115,
    k_EMsgGCCStrike15_v2_MatchmakingGC2ServerRankUpdate = 9116,
    k_EMsgGCCStrike15_v2_MatchmakingOperator2GCBlogUpdate = 9117,
    k_EMsgGCCStrike15_v2_ServerNotificationForUserPenalty = 9118,
    k_EMsgGCCStrike15_v2_ClientReportPlayer = 9119,
    k_EMsgGCCStrike15_v2_ClientReportServer = 9120,
    k_EMsgGCCStrike15_v2_ClientCommendPlayer = 9121,
    k_EMsgGCCStrike15_v2_ClientReportResponse = 9122,
    k_EMsgGCCStrike15_v2_ClientCommendPlayerQuery = 9123,
    k_EMsgGCCStrike15_v2_ClientCommendPlayerQueryResponse = 9124,
    k_EMsgGCCStrike15_v2_WatchInfoUsers = 9126,
    k_EMsgGCCStrike15_v2_ClientRequestPlayersProfile = 9127,
    k_EMsgGCCStrike15_v2_PlayersProfile = 9128,
    k_EMsgGCCStrike15_v2_SetMyMedalsInfo = 9129,
    k_EMsgGCCStrike15_v2_PlayerOverwatchCaseUpdate = 9131,
    k_EMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment = 9132,
    k_EMsgGCCStrike15_v2_PlayerOverwatchCaseStatus = 9133,
    k_EMsgGCCStrike15_v2_GC2ClientTextMsg = 9134,
    k_EMsgGCCStrike15_v2_Client2GCTextMsg = 9135,
    k_EMsgGCCStrike15_v2_MatchEndRunRewardDrops = 9136,
    k_EMsgGCCStrike15_v2_MatchEndRewardDropsNotification = 9137,
    k_EMsgGCCStrike15_v2_ClientRequestWatchInfoFriends2 = 9138,
    k_EMsgGCCStrike15_v2_MatchList = 9139,
    k_EMsgGCCStrike15_v2_MatchListRequestCurrentLiveGames = 9140,
    k_EMsgGCCStrike15_v2_MatchListRequestRecentUserGames = 9141,
    k_EMsgGCCStrike15_v2_GC2ServerReservationUpdate = 9142,
    k_EMsgGCCStrike15_v2_ClientVarValueNotificationInfo = 9144,
    k_EMsgGCCStrike15_v2_TournamentMatchRewardDropsNotification = 9145,
    k_EMsgGCCStrike15_v2_MatchListRequestTournamentGames = 9146,
    k_EMsgGCCStrike15_v2_MatchListRequestFullGameInfo = 9147,
    k_EMsgGCCStrike15_v2_GiftsLeaderboardRequest = 9148,
    k_EMsgGCCStrike15_v2_GiftsLeaderboardResponse = 9149,
    k_EMsgGCCStrike15_v2_ServerVarValueNotificationInfo = 9150,
    k_EMsgGCToGCReloadVersions = 9151,
    k_EMsgGCCStrike15_v2_ClientSubmitSurveyVote = 9152,
    k_EMsgGCCStrike15_v2_Server2GCClientValidate = 9153,
    k_EMsgGCCStrike15_v2_MatchListRequestLiveGameForUser = 9154,
    k_EMsgGCCStrike15_v2_Server2GCPureServerValidationFailure = 9155,
    k_EMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockRequest = 9156,
    k_EMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockResponse = 9157,
    k_EMsgGCCStrike15_v2_AccountPrivacySettings = 9158,
    k_EMsgGCCStrike15_v2_SetMyActivityInfo = 9159,
    k_EMsgGCCStrike15_v2_MatchListRequestTournamentPredictions = 9160,
    k_EMsgGCCStrike15_v2_MatchListUploadTournamentPredictions = 9161,
    k_EMsgGCCStrike15_v2_DraftSummary = 9162,
    k_EMsgGCCStrike15_v2_ClientRequestJoinFriendData = 9163,
    k_EMsgGCCStrike15_v2_ClientRequestJoinServerData = 9164,
    k_EMsgGCCStrike15_v2_ClientRequestNewMission = 9165,
    k_EMsgGCCStrike15_v2_GC2ServerNotifyXPRewarded = 9166,
    k_EMsgGCCStrike15_v2_GC2ClientTournamentInfo = 9167,
    k_EMsgGC_GlobalGame_Subscribe = 9168,
    k_EMsgGC_GlobalGame_Unsubscribe = 9169,
    k_EMsgGC_GlobalGame_Play = 9170,
    k_EMsgGCCStrike15_v2_AcknowledgePenalty = 9171,
    k_EMsgGCCStrike15_v2_Client2GCRequestPrestigeCoin = 9172,
    k_EMsgGCCStrike15_v2_GC2ClientGlobalStats = 9173,
    k_EMsgGCCStrike15_v2_Client2GCStreamUnlock = 9174,
    k_EMsgGCCStrike15_v2_FantasyRequestClientData = 9175,
    k_EMsgGCCStrike15_v2_FantasyUpdateClientData = 9176
}

/** Properties of a GameServerPing. */
export interface IGameServerPing {

    /** GameServerPing gameserverId */
    gameserverId?: (number|Long|null);

    /** GameServerPing ping */
    ping?: (number|null);

    /** GameServerPing ip */
    ip?: (number|null);

    /** GameServerPing port */
    port?: (number|null);

    /** GameServerPing instances */
    instances?: (number|null);
}

/** Represents a GameServerPing. */
export class GameServerPing implements IGameServerPing {

    /**
     * Constructs a new GameServerPing.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGameServerPing);

    /** GameServerPing gameserverId. */
    public gameserverId: (number|Long);

    /** GameServerPing ping. */
    public ping: number;

    /** GameServerPing ip. */
    public ip: number;

    /** GameServerPing port. */
    public port: number;

    /** GameServerPing instances. */
    public instances: number;

    /**
     * Decodes a GameServerPing message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GameServerPing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameServerPing;
}

/** Properties of a DetailedSearchStatistic. */
export interface IDetailedSearchStatistic {

    /** DetailedSearchStatistic gameType */
    gameType?: (number|null);

    /** DetailedSearchStatistic searchTimeAvg */
    searchTimeAvg?: (number|null);

    /** DetailedSearchStatistic playersSearching */
    playersSearching?: (number|null);
}

/** Represents a DetailedSearchStatistic. */
export class DetailedSearchStatistic implements IDetailedSearchStatistic {

    /**
     * Constructs a new DetailedSearchStatistic.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDetailedSearchStatistic);

    /** DetailedSearchStatistic gameType. */
    public gameType: number;

    /** DetailedSearchStatistic searchTimeAvg. */
    public searchTimeAvg: number;

    /** DetailedSearchStatistic playersSearching. */
    public playersSearching: number;

    /**
     * Decodes a DetailedSearchStatistic message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DetailedSearchStatistic
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DetailedSearchStatistic;
}

/** Properties of a TournamentPlayer. */
export interface ITournamentPlayer {

    /** TournamentPlayer accountId */
    accountId?: (number|null);

    /** TournamentPlayer playerNick */
    playerNick?: (string|null);

    /** TournamentPlayer playerName */
    playerName?: (string|null);

    /** TournamentPlayer playerDob */
    playerDob?: (number|null);

    /** TournamentPlayer playerFlag */
    playerFlag?: (string|null);

    /** TournamentPlayer playerLocation */
    playerLocation?: (string|null);

    /** TournamentPlayer playerDesc */
    playerDesc?: (string|null);
}

/** Represents a TournamentPlayer. */
export class TournamentPlayer implements ITournamentPlayer {

    /**
     * Constructs a new TournamentPlayer.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITournamentPlayer);

    /** TournamentPlayer accountId. */
    public accountId: number;

    /** TournamentPlayer playerNick. */
    public playerNick: string;

    /** TournamentPlayer playerName. */
    public playerName: string;

    /** TournamentPlayer playerDob. */
    public playerDob: number;

    /** TournamentPlayer playerFlag. */
    public playerFlag: string;

    /** TournamentPlayer playerLocation. */
    public playerLocation: string;

    /** TournamentPlayer playerDesc. */
    public playerDesc: string;

    /**
     * Decodes a TournamentPlayer message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TournamentPlayer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TournamentPlayer;
}

/** Properties of a TournamentTeam. */
export interface ITournamentTeam {

    /** TournamentTeam teamId */
    teamId?: (number|null);

    /** TournamentTeam teamTag */
    teamTag?: (string|null);

    /** TournamentTeam teamFlag */
    teamFlag?: (string|null);

    /** TournamentTeam teamName */
    teamName?: (string|null);

    /** TournamentTeam players */
    players?: (ITournamentPlayer[]|null);
}

/** Represents a TournamentTeam. */
export class TournamentTeam implements ITournamentTeam {

    /**
     * Constructs a new TournamentTeam.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITournamentTeam);

    /** TournamentTeam teamId. */
    public teamId: number;

    /** TournamentTeam teamTag. */
    public teamTag: string;

    /** TournamentTeam teamFlag. */
    public teamFlag: string;

    /** TournamentTeam teamName. */
    public teamName: string;

    /** TournamentTeam players. */
    public players: ITournamentPlayer[];

    /**
     * Decodes a TournamentTeam message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TournamentTeam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TournamentTeam;
}

/** Properties of a TournamentEvent. */
export interface ITournamentEvent {

    /** TournamentEvent eventId */
    eventId?: (number|null);

    /** TournamentEvent eventTag */
    eventTag?: (string|null);

    /** TournamentEvent eventName */
    eventName?: (string|null);

    /** TournamentEvent eventTimeStart */
    eventTimeStart?: (number|null);

    /** TournamentEvent eventTimeEnd */
    eventTimeEnd?: (number|null);

    /** TournamentEvent eventPublic */
    eventPublic?: (number|null);

    /** TournamentEvent eventStageId */
    eventStageId?: (number|null);

    /** TournamentEvent eventStageName */
    eventStageName?: (string|null);

    /** TournamentEvent activeSectionId */
    activeSectionId?: (number|null);
}

/** Represents a TournamentEvent. */
export class TournamentEvent implements ITournamentEvent {

    /**
     * Constructs a new TournamentEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITournamentEvent);

    /** TournamentEvent eventId. */
    public eventId: number;

    /** TournamentEvent eventTag. */
    public eventTag: string;

    /** TournamentEvent eventName. */
    public eventName: string;

    /** TournamentEvent eventTimeStart. */
    public eventTimeStart: number;

    /** TournamentEvent eventTimeEnd. */
    public eventTimeEnd: number;

    /** TournamentEvent eventPublic. */
    public eventPublic: number;

    /** TournamentEvent eventStageId. */
    public eventStageId: number;

    /** TournamentEvent eventStageName. */
    public eventStageName: string;

    /** TournamentEvent activeSectionId. */
    public activeSectionId: number;

    /**
     * Decodes a TournamentEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TournamentEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TournamentEvent;
}

/** Properties of a GlobalStatistics. */
export interface IGlobalStatistics {

    /** GlobalStatistics playersOnline */
    playersOnline?: (number|null);

    /** GlobalStatistics serversOnline */
    serversOnline?: (number|null);

    /** GlobalStatistics playersSearching */
    playersSearching?: (number|null);

    /** GlobalStatistics serversAvailable */
    serversAvailable?: (number|null);

    /** GlobalStatistics ongoingMatches */
    ongoingMatches?: (number|null);

    /** GlobalStatistics searchTimeAvg */
    searchTimeAvg?: (number|null);

    /** GlobalStatistics searchStatistics */
    searchStatistics?: (IDetailedSearchStatistic[]|null);

    /** GlobalStatistics mainPostUrl */
    mainPostUrl?: (string|null);

    /** GlobalStatistics requiredAppidVersion */
    requiredAppidVersion?: (number|null);

    /** GlobalStatistics pricesheetVersion */
    pricesheetVersion?: (number|null);

    /** GlobalStatistics twitchStreamsVersion */
    twitchStreamsVersion?: (number|null);

    /** GlobalStatistics activeTournamentEventid */
    activeTournamentEventid?: (number|null);

    /** GlobalStatistics activeSurveyId */
    activeSurveyId?: (number|null);
}

/** Represents a GlobalStatistics. */
export class GlobalStatistics implements IGlobalStatistics {

    /**
     * Constructs a new GlobalStatistics.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGlobalStatistics);

    /** GlobalStatistics playersOnline. */
    public playersOnline: number;

    /** GlobalStatistics serversOnline. */
    public serversOnline: number;

    /** GlobalStatistics playersSearching. */
    public playersSearching: number;

    /** GlobalStatistics serversAvailable. */
    public serversAvailable: number;

    /** GlobalStatistics ongoingMatches. */
    public ongoingMatches: number;

    /** GlobalStatistics searchTimeAvg. */
    public searchTimeAvg: number;

    /** GlobalStatistics searchStatistics. */
    public searchStatistics: IDetailedSearchStatistic[];

    /** GlobalStatistics mainPostUrl. */
    public mainPostUrl: string;

    /** GlobalStatistics requiredAppidVersion. */
    public requiredAppidVersion: number;

    /** GlobalStatistics pricesheetVersion. */
    public pricesheetVersion: number;

    /** GlobalStatistics twitchStreamsVersion. */
    public twitchStreamsVersion: number;

    /** GlobalStatistics activeTournamentEventid. */
    public activeTournamentEventid: number;

    /** GlobalStatistics activeSurveyId. */
    public activeSurveyId: number;

    /**
     * Decodes a GlobalStatistics message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GlobalStatistics
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GlobalStatistics;
}

/** Properties of an OperationalStatisticDescription. */
export interface IOperationalStatisticDescription {

    /** OperationalStatisticDescription name */
    name?: (string|null);

    /** OperationalStatisticDescription idkey */
    idkey?: (number|null);
}

/** Represents an OperationalStatisticDescription. */
export class OperationalStatisticDescription implements IOperationalStatisticDescription {

    /**
     * Constructs a new OperationalStatisticDescription.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOperationalStatisticDescription);

    /** OperationalStatisticDescription name. */
    public name: string;

    /** OperationalStatisticDescription idkey. */
    public idkey: number;

    /**
     * Decodes an OperationalStatisticDescription message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OperationalStatisticDescription
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OperationalStatisticDescription;
}

/** Properties of an OperationalStatisticElement. */
export interface IOperationalStatisticElement {

    /** OperationalStatisticElement idkey */
    idkey?: (number|null);

    /** OperationalStatisticElement values */
    values?: (number[]|null);
}

/** Represents an OperationalStatisticElement. */
export class OperationalStatisticElement implements IOperationalStatisticElement {

    /**
     * Constructs a new OperationalStatisticElement.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOperationalStatisticElement);

    /** OperationalStatisticElement idkey. */
    public idkey: number;

    /** OperationalStatisticElement values. */
    public values: number[];

    /**
     * Decodes an OperationalStatisticElement message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OperationalStatisticElement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OperationalStatisticElement;
}

/** Properties of an OperationalStatisticsPacket. */
export interface IOperationalStatisticsPacket {

    /** OperationalStatisticsPacket packetid */
    packetid?: (number|null);

    /** OperationalStatisticsPacket mstimestamp */
    mstimestamp?: (number|null);

    /** OperationalStatisticsPacket values */
    values?: (IOperationalStatisticElement[]|null);
}

/** Represents an OperationalStatisticsPacket. */
export class OperationalStatisticsPacket implements IOperationalStatisticsPacket {

    /**
     * Constructs a new OperationalStatisticsPacket.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOperationalStatisticsPacket);

    /** OperationalStatisticsPacket packetid. */
    public packetid: number;

    /** OperationalStatisticsPacket mstimestamp. */
    public mstimestamp: number;

    /** OperationalStatisticsPacket values. */
    public values: IOperationalStatisticElement[];

    /**
     * Decodes an OperationalStatisticsPacket message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OperationalStatisticsPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OperationalStatisticsPacket;
}

/** Properties of a PlayerRankingInfo. */
export interface IPlayerRankingInfo {

    /** PlayerRankingInfo accountId */
    accountId?: (number|null);

    /** PlayerRankingInfo rankId */
    rankId?: (number|null);

    /** PlayerRankingInfo wins */
    wins?: (number|null);

    /** PlayerRankingInfo rankChange */
    rankChange?: (number|null);
}

/** Represents a PlayerRankingInfo. */
export class PlayerRankingInfo implements IPlayerRankingInfo {

    /**
     * Constructs a new PlayerRankingInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayerRankingInfo);

    /** PlayerRankingInfo accountId. */
    public accountId: number;

    /** PlayerRankingInfo rankId. */
    public rankId: number;

    /** PlayerRankingInfo wins. */
    public wins: number;

    /** PlayerRankingInfo rankChange. */
    public rankChange: number;

    /**
     * Decodes a PlayerRankingInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayerRankingInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerRankingInfo;
}

/** Properties of a PlayerCommendationInfo. */
export interface IPlayerCommendationInfo {

    /** PlayerCommendationInfo cmdFriendly */
    cmdFriendly?: (number|null);

    /** PlayerCommendationInfo cmdTeaching */
    cmdTeaching?: (number|null);

    /** PlayerCommendationInfo cmdLeader */
    cmdLeader?: (number|null);
}

/** Represents a PlayerCommendationInfo. */
export class PlayerCommendationInfo implements IPlayerCommendationInfo {

    /**
     * Constructs a new PlayerCommendationInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayerCommendationInfo);

    /** PlayerCommendationInfo cmdFriendly. */
    public cmdFriendly: number;

    /** PlayerCommendationInfo cmdTeaching. */
    public cmdTeaching: number;

    /** PlayerCommendationInfo cmdLeader. */
    public cmdLeader: number;

    /**
     * Decodes a PlayerCommendationInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayerCommendationInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerCommendationInfo;
}

/** Properties of a PlayerMedalsInfo. */
export interface IPlayerMedalsInfo {

    /** PlayerMedalsInfo medalTeam */
    medalTeam?: (number|null);

    /** PlayerMedalsInfo medalCombat */
    medalCombat?: (number|null);

    /** PlayerMedalsInfo medalWeapon */
    medalWeapon?: (number|null);

    /** PlayerMedalsInfo medalGlobal */
    medalGlobal?: (number|null);

    /** PlayerMedalsInfo medalArms */
    medalArms?: (number|null);

    /** PlayerMedalsInfo displayItemsDefidx */
    displayItemsDefidx?: (number[]|null);

    /** PlayerMedalsInfo featuredDisplayItemDefidx */
    featuredDisplayItemDefidx?: (number|null);
}

/** Represents a PlayerMedalsInfo. */
export class PlayerMedalsInfo implements IPlayerMedalsInfo {

    /**
     * Constructs a new PlayerMedalsInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayerMedalsInfo);

    /** PlayerMedalsInfo medalTeam. */
    public medalTeam: number;

    /** PlayerMedalsInfo medalCombat. */
    public medalCombat: number;

    /** PlayerMedalsInfo medalWeapon. */
    public medalWeapon: number;

    /** PlayerMedalsInfo medalGlobal. */
    public medalGlobal: number;

    /** PlayerMedalsInfo medalArms. */
    public medalArms: number;

    /** PlayerMedalsInfo displayItemsDefidx. */
    public displayItemsDefidx: number[];

    /** PlayerMedalsInfo featuredDisplayItemDefidx. */
    public featuredDisplayItemDefidx: number;

    /**
     * Decodes a PlayerMedalsInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayerMedalsInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerMedalsInfo;
}

/** Properties of an AccountActivity. */
export interface IAccountActivity {

    /** AccountActivity activity */
    activity?: (number|null);

    /** AccountActivity mode */
    mode?: (number|null);

    /** AccountActivity map */
    map?: (number|null);
}

/** Represents an AccountActivity. */
export class AccountActivity implements IAccountActivity {

    /**
     * Constructs a new AccountActivity.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAccountActivity);

    /** AccountActivity activity. */
    public activity: number;

    /** AccountActivity mode. */
    public mode: number;

    /** AccountActivity map. */
    public map: number;

    /**
     * Decodes an AccountActivity message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AccountActivity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AccountActivity;
}

/** Properties of a TournamentMatchSetup. */
export interface ITournamentMatchSetup {

    /** TournamentMatchSetup eventId */
    eventId?: (number|null);

    /** TournamentMatchSetup teamIdCt */
    teamIdCt?: (number|null);

    /** TournamentMatchSetup teamIdT */
    teamIdT?: (number|null);

    /** TournamentMatchSetup eventStageId */
    eventStageId?: (number|null);
}

/** Represents a TournamentMatchSetup. */
export class TournamentMatchSetup implements ITournamentMatchSetup {

    /**
     * Constructs a new TournamentMatchSetup.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITournamentMatchSetup);

    /** TournamentMatchSetup eventId. */
    public eventId: number;

    /** TournamentMatchSetup teamIdCt. */
    public teamIdCt: number;

    /** TournamentMatchSetup teamIdT. */
    public teamIdT: number;

    /** TournamentMatchSetup eventStageId. */
    public eventStageId: number;

    /**
     * Decodes a TournamentMatchSetup message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TournamentMatchSetup
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TournamentMatchSetup;
}

/** Properties of a ServerHltvInfo. */
export interface IServerHltvInfo {

    /** ServerHltvInfo tvUdpPort */
    tvUdpPort?: (number|null);

    /** ServerHltvInfo tvWatchKey */
    tvWatchKey?: (number|Long|null);

    /** ServerHltvInfo tvSlots */
    tvSlots?: (number|null);

    /** ServerHltvInfo tvClients */
    tvClients?: (number|null);

    /** ServerHltvInfo tvProxies */
    tvProxies?: (number|null);

    /** ServerHltvInfo tvTime */
    tvTime?: (number|null);

    /** ServerHltvInfo gameType */
    gameType?: (number|null);

    /** ServerHltvInfo gameMapgroup */
    gameMapgroup?: (string|null);

    /** ServerHltvInfo gameMap */
    gameMap?: (string|null);

    /** ServerHltvInfo tvMasterSteamid */
    tvMasterSteamid?: (number|Long|null);

    /** ServerHltvInfo tvLocalSlots */
    tvLocalSlots?: (number|null);

    /** ServerHltvInfo tvLocalClients */
    tvLocalClients?: (number|null);

    /** ServerHltvInfo tvLocalProxies */
    tvLocalProxies?: (number|null);

    /** ServerHltvInfo tvRelaySlots */
    tvRelaySlots?: (number|null);

    /** ServerHltvInfo tvRelayClients */
    tvRelayClients?: (number|null);

    /** ServerHltvInfo tvRelayProxies */
    tvRelayProxies?: (number|null);

    /** ServerHltvInfo tvRelayAddress */
    tvRelayAddress?: (number|null);

    /** ServerHltvInfo tvRelayPort */
    tvRelayPort?: (number|null);

    /** ServerHltvInfo tvRelaySteamid */
    tvRelaySteamid?: (number|Long|null);
}

/** Represents a ServerHltvInfo. */
export class ServerHltvInfo implements IServerHltvInfo {

    /**
     * Constructs a new ServerHltvInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IServerHltvInfo);

    /** ServerHltvInfo tvUdpPort. */
    public tvUdpPort: number;

    /** ServerHltvInfo tvWatchKey. */
    public tvWatchKey: (number|Long);

    /** ServerHltvInfo tvSlots. */
    public tvSlots: number;

    /** ServerHltvInfo tvClients. */
    public tvClients: number;

    /** ServerHltvInfo tvProxies. */
    public tvProxies: number;

    /** ServerHltvInfo tvTime. */
    public tvTime: number;

    /** ServerHltvInfo gameType. */
    public gameType: number;

    /** ServerHltvInfo gameMapgroup. */
    public gameMapgroup: string;

    /** ServerHltvInfo gameMap. */
    public gameMap: string;

    /** ServerHltvInfo tvMasterSteamid. */
    public tvMasterSteamid: (number|Long);

    /** ServerHltvInfo tvLocalSlots. */
    public tvLocalSlots: number;

    /** ServerHltvInfo tvLocalClients. */
    public tvLocalClients: number;

    /** ServerHltvInfo tvLocalProxies. */
    public tvLocalProxies: number;

    /** ServerHltvInfo tvRelaySlots. */
    public tvRelaySlots: number;

    /** ServerHltvInfo tvRelayClients. */
    public tvRelayClients: number;

    /** ServerHltvInfo tvRelayProxies. */
    public tvRelayProxies: number;

    /** ServerHltvInfo tvRelayAddress. */
    public tvRelayAddress: number;

    /** ServerHltvInfo tvRelayPort. */
    public tvRelayPort: number;

    /** ServerHltvInfo tvRelaySteamid. */
    public tvRelaySteamid: (number|Long);

    /**
     * Decodes a ServerHltvInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ServerHltvInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerHltvInfo;
}

/** Properties of an IpAddressMask. */
export interface IIpAddressMask {

    /** IpAddressMask a */
    a?: (number|null);

    /** IpAddressMask b */
    b?: (number|null);

    /** IpAddressMask c */
    c?: (number|null);

    /** IpAddressMask d */
    d?: (number|null);

    /** IpAddressMask bits */
    bits?: (number|null);

    /** IpAddressMask token */
    token?: (number|null);
}

/** Represents an IpAddressMask. */
export class IpAddressMask implements IIpAddressMask {

    /**
     * Constructs a new IpAddressMask.
     * @param [properties] Properties to set
     */
    constructor(properties?: IIpAddressMask);

    /** IpAddressMask a. */
    public a: number;

    /** IpAddressMask b. */
    public b: number;

    /** IpAddressMask c. */
    public c: number;

    /** IpAddressMask d. */
    public d: number;

    /** IpAddressMask bits. */
    public bits: number;

    /** IpAddressMask token. */
    public token: number;

    /**
     * Decodes an IpAddressMask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns IpAddressMask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IpAddressMask;
}

/** Properties of a XpProgressData. */
export interface IXpProgressData {

    /** XpProgressData xpPoints */
    xpPoints?: (number|null);

    /** XpProgressData xpCategory */
    xpCategory?: (number|null);
}

/** Represents a XpProgressData. */
export class XpProgressData implements IXpProgressData {

    /**
     * Constructs a new XpProgressData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXpProgressData);

    /** XpProgressData xpPoints. */
    public xpPoints: number;

    /** XpProgressData xpCategory. */
    public xpCategory: number;

    /**
     * Decodes a XpProgressData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XpProgressData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XpProgressData;
}

/** Properties of a MatchEndItemUpdates. */
export interface IMatchEndItemUpdates {

    /** MatchEndItemUpdates itemId */
    itemId?: (number|Long|null);

    /** MatchEndItemUpdates itemAttrDefidx */
    itemAttrDefidx?: (number|null);

    /** MatchEndItemUpdates itemAttrDeltaValue */
    itemAttrDeltaValue?: (number|null);
}

/** Represents a MatchEndItemUpdates. */
export class MatchEndItemUpdates implements IMatchEndItemUpdates {

    /**
     * Constructs a new MatchEndItemUpdates.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMatchEndItemUpdates);

    /** MatchEndItemUpdates itemId. */
    public itemId: (number|Long);

    /** MatchEndItemUpdates itemAttrDefidx. */
    public itemAttrDefidx: number;

    /** MatchEndItemUpdates itemAttrDeltaValue. */
    public itemAttrDeltaValue: number;

    /**
     * Decodes a MatchEndItemUpdates message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MatchEndItemUpdates
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MatchEndItemUpdates;
}

/** Properties of a PlayerQuestData. */
export interface IPlayerQuestData {

    /** PlayerQuestData questerAccountId */
    questerAccountId?: (number|null);

    /** PlayerQuestData questItemData */
    questItemData?: (PlayerQuestData.IQuestItemData[]|null);

    /** PlayerQuestData xpProgressData */
    xpProgressData?: (IXpProgressData[]|null);

    /** PlayerQuestData timePlayed */
    timePlayed?: (number|null);

    /** PlayerQuestData mmGameMode */
    mmGameMode?: (number|null);

    /** PlayerQuestData itemUpdates */
    itemUpdates?: (IMatchEndItemUpdates[]|null);
}

/** Represents a PlayerQuestData. */
export class PlayerQuestData implements IPlayerQuestData {

    /**
     * Constructs a new PlayerQuestData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayerQuestData);

    /** PlayerQuestData questerAccountId. */
    public questerAccountId: number;

    /** PlayerQuestData questItemData. */
    public questItemData: PlayerQuestData.IQuestItemData[];

    /** PlayerQuestData xpProgressData. */
    public xpProgressData: IXpProgressData[];

    /** PlayerQuestData timePlayed. */
    public timePlayed: number;

    /** PlayerQuestData mmGameMode. */
    public mmGameMode: number;

    /** PlayerQuestData itemUpdates. */
    public itemUpdates: IMatchEndItemUpdates[];

    /**
     * Decodes a PlayerQuestData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayerQuestData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerQuestData;
}

export namespace PlayerQuestData {

    /** Properties of a QuestItemData. */
    interface IQuestItemData {

        /** QuestItemData questId */
        questId?: (number|Long|null);

        /** QuestItemData questNormalPointsEarned */
        questNormalPointsEarned?: (number|null);

        /** QuestItemData questBonusPointsEarned */
        questBonusPointsEarned?: (number|null);
    }

    /** Represents a QuestItemData. */
    class QuestItemData implements IQuestItemData {

        /**
         * Constructs a new QuestItemData.
         * @param [properties] Properties to set
         */
        constructor(properties?: PlayerQuestData.IQuestItemData);

        /** QuestItemData questId. */
        public questId: (number|Long);

        /** QuestItemData questNormalPointsEarned. */
        public questNormalPointsEarned: number;

        /** QuestItemData questBonusPointsEarned. */
        public questBonusPointsEarned: number;

        /**
         * Decodes a QuestItemData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QuestItemData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerQuestData.QuestItemData;
    }
}

/** Properties of a CMsgGC_ServerQuestUpdateData. */
export interface ICMsgGC_ServerQuestUpdateData {

    /** CMsgGC_ServerQuestUpdateData playerQuestData */
    playerQuestData?: (IPlayerQuestData[]|null);
}

/** Represents a CMsgGC_ServerQuestUpdateData. */
export class CMsgGC_ServerQuestUpdateData implements ICMsgGC_ServerQuestUpdateData {

    /**
     * Constructs a new CMsgGC_ServerQuestUpdateData.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGC_ServerQuestUpdateData);

    /** CMsgGC_ServerQuestUpdateData playerQuestData. */
    public playerQuestData: IPlayerQuestData[];

    /**
     * Decodes a CMsgGC_ServerQuestUpdateData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGC_ServerQuestUpdateData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGC_ServerQuestUpdateData;
}

/** Properties of a CMsgGCCStrike15_v2_MatchmakingGCOperationalStats. */
export interface ICMsgGCCStrike15_v2_MatchmakingGCOperationalStats {

    /** CMsgGCCStrike15_v2_MatchmakingGCOperationalStats packetid */
    packetid?: (number|null);

    /** CMsgGCCStrike15_v2_MatchmakingGCOperationalStats namekeys */
    namekeys?: (IOperationalStatisticDescription[]|null);

    /** CMsgGCCStrike15_v2_MatchmakingGCOperationalStats packets */
    packets?: (IOperationalStatisticsPacket[]|null);
}

/** Represents a CMsgGCCStrike15_v2_MatchmakingGCOperationalStats. */
export class CMsgGCCStrike15_v2_MatchmakingGCOperationalStats implements ICMsgGCCStrike15_v2_MatchmakingGCOperationalStats {

    /**
     * Constructs a new CMsgGCCStrike15_v2_MatchmakingGCOperationalStats.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_MatchmakingGCOperationalStats);

    /** CMsgGCCStrike15_v2_MatchmakingGCOperationalStats packetid. */
    public packetid: number;

    /** CMsgGCCStrike15_v2_MatchmakingGCOperationalStats namekeys. */
    public namekeys: IOperationalStatisticDescription[];

    /** CMsgGCCStrike15_v2_MatchmakingGCOperationalStats packets. */
    public packets: IOperationalStatisticsPacket[];

    /**
     * Decodes a CMsgGCCStrike15_v2_MatchmakingGCOperationalStats message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_MatchmakingGCOperationalStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_MatchmakingGCOperationalStats;
}

/** Properties of a CMsgGCCStrike15_v2_MatchmakingGC2ServerConfirm. */
export interface ICMsgGCCStrike15_v2_MatchmakingGC2ServerConfirm {

    /** CMsgGCCStrike15_v2_MatchmakingGC2ServerConfirm token */
    token?: (number|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ServerConfirm stamp */
    stamp?: (number|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ServerConfirm exchange */
    exchange?: (number|Long|null);
}

/** Represents a CMsgGCCStrike15_v2_MatchmakingGC2ServerConfirm. */
export class CMsgGCCStrike15_v2_MatchmakingGC2ServerConfirm implements ICMsgGCCStrike15_v2_MatchmakingGC2ServerConfirm {

    /**
     * Constructs a new CMsgGCCStrike15_v2_MatchmakingGC2ServerConfirm.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_MatchmakingGC2ServerConfirm);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ServerConfirm token. */
    public token: number;

    /** CMsgGCCStrike15_v2_MatchmakingGC2ServerConfirm stamp. */
    public stamp: number;

    /** CMsgGCCStrike15_v2_MatchmakingGC2ServerConfirm exchange. */
    public exchange: (number|Long);

    /**
     * Decodes a CMsgGCCStrike15_v2_MatchmakingGC2ServerConfirm message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_MatchmakingGC2ServerConfirm
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_MatchmakingGC2ServerConfirm;
}

/** Properties of a CMsgGCCStrike15_v2_GC2ServerReservationUpdate. */
export interface ICMsgGCCStrike15_v2_GC2ServerReservationUpdate {

    /** CMsgGCCStrike15_v2_GC2ServerReservationUpdate viewersExternalTotal */
    viewersExternalTotal?: (number|null);

    /** CMsgGCCStrike15_v2_GC2ServerReservationUpdate viewersExternalSteam */
    viewersExternalSteam?: (number|null);
}

/** Represents a CMsgGCCStrike15_v2_GC2ServerReservationUpdate. */
export class CMsgGCCStrike15_v2_GC2ServerReservationUpdate implements ICMsgGCCStrike15_v2_GC2ServerReservationUpdate {

    /**
     * Constructs a new CMsgGCCStrike15_v2_GC2ServerReservationUpdate.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_GC2ServerReservationUpdate);

    /** CMsgGCCStrike15_v2_GC2ServerReservationUpdate viewersExternalTotal. */
    public viewersExternalTotal: number;

    /** CMsgGCCStrike15_v2_GC2ServerReservationUpdate viewersExternalSteam. */
    public viewersExternalSteam: number;

    /**
     * Decodes a CMsgGCCStrike15_v2_GC2ServerReservationUpdate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_GC2ServerReservationUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_GC2ServerReservationUpdate;
}

/** Properties of a CMsgGCCStrike15_v2_MatchmakingStart. */
export interface ICMsgGCCStrike15_v2_MatchmakingStart {

    /** CMsgGCCStrike15_v2_MatchmakingStart accountIds */
    accountIds?: (number[]|null);

    /** CMsgGCCStrike15_v2_MatchmakingStart gameType */
    gameType?: (number|null);

    /** CMsgGCCStrike15_v2_MatchmakingStart ticketData */
    ticketData?: (string|null);

    /** CMsgGCCStrike15_v2_MatchmakingStart clientVersion */
    clientVersion?: (number|null);

    /** CMsgGCCStrike15_v2_MatchmakingStart tournamentMatch */
    tournamentMatch?: (ITournamentMatchSetup|null);
}

/** Represents a CMsgGCCStrike15_v2_MatchmakingStart. */
export class CMsgGCCStrike15_v2_MatchmakingStart implements ICMsgGCCStrike15_v2_MatchmakingStart {

    /**
     * Constructs a new CMsgGCCStrike15_v2_MatchmakingStart.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_MatchmakingStart);

    /** CMsgGCCStrike15_v2_MatchmakingStart accountIds. */
    public accountIds: number[];

    /** CMsgGCCStrike15_v2_MatchmakingStart gameType. */
    public gameType: number;

    /** CMsgGCCStrike15_v2_MatchmakingStart ticketData. */
    public ticketData: string;

    /** CMsgGCCStrike15_v2_MatchmakingStart clientVersion. */
    public clientVersion: number;

    /** CMsgGCCStrike15_v2_MatchmakingStart tournamentMatch. */
    public tournamentMatch?: (ITournamentMatchSetup|null);

    /**
     * Decodes a CMsgGCCStrike15_v2_MatchmakingStart message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_MatchmakingStart
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_MatchmakingStart;
}

/** Properties of a CMsgGCCStrike15_v2_MatchmakingStop. */
export interface ICMsgGCCStrike15_v2_MatchmakingStop {

    /** CMsgGCCStrike15_v2_MatchmakingStop abandon */
    abandon?: (number|null);
}

/** Represents a CMsgGCCStrike15_v2_MatchmakingStop. */
export class CMsgGCCStrike15_v2_MatchmakingStop implements ICMsgGCCStrike15_v2_MatchmakingStop {

    /**
     * Constructs a new CMsgGCCStrike15_v2_MatchmakingStop.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_MatchmakingStop);

    /** CMsgGCCStrike15_v2_MatchmakingStop abandon. */
    public abandon: number;

    /**
     * Decodes a CMsgGCCStrike15_v2_MatchmakingStop message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_MatchmakingStop
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_MatchmakingStop;
}

/** Properties of a CMsgGCCStrike15_v2_MatchmakingClient2ServerPing. */
export interface ICMsgGCCStrike15_v2_MatchmakingClient2ServerPing {

    /** CMsgGCCStrike15_v2_MatchmakingClient2ServerPing gameserverpings */
    gameserverpings?: (IGameServerPing[]|null);

    /** CMsgGCCStrike15_v2_MatchmakingClient2ServerPing offsetIndex */
    offsetIndex?: (number|null);

    /** CMsgGCCStrike15_v2_MatchmakingClient2ServerPing finalBatch */
    finalBatch?: (number|null);
}

/** Represents a CMsgGCCStrike15_v2_MatchmakingClient2ServerPing. */
export class CMsgGCCStrike15_v2_MatchmakingClient2ServerPing implements ICMsgGCCStrike15_v2_MatchmakingClient2ServerPing {

    /**
     * Constructs a new CMsgGCCStrike15_v2_MatchmakingClient2ServerPing.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_MatchmakingClient2ServerPing);

    /** CMsgGCCStrike15_v2_MatchmakingClient2ServerPing gameserverpings. */
    public gameserverpings: IGameServerPing[];

    /** CMsgGCCStrike15_v2_MatchmakingClient2ServerPing offsetIndex. */
    public offsetIndex: number;

    /** CMsgGCCStrike15_v2_MatchmakingClient2ServerPing finalBatch. */
    public finalBatch: number;

    /**
     * Decodes a CMsgGCCStrike15_v2_MatchmakingClient2ServerPing message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_MatchmakingClient2ServerPing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_MatchmakingClient2ServerPing;
}

/** Properties of a CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate. */
export interface ICMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate {

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate matchmaking */
    matchmaking?: (number|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate waitingAccountIdSessions */
    waitingAccountIdSessions?: (number[]|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate error */
    error?: (string|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate ongoingmatchAccountIdSessions */
    ongoingmatchAccountIdSessions?: (number[]|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate globalStats */
    globalStats?: (IGlobalStatistics|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate failpingAccountIdSessions */
    failpingAccountIdSessions?: (number[]|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate penaltyAccountIdSessions */
    penaltyAccountIdSessions?: (number[]|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate failreadyAccountIdSessions */
    failreadyAccountIdSessions?: (number[]|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate vacbannedAccountIdSessions */
    vacbannedAccountIdSessions?: (number[]|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate serverIpaddressMask */
    serverIpaddressMask?: (IIpAddressMask|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate notes */
    notes?: (CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate.INote[]|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate penaltyAccountIdSessionsGreen */
    penaltyAccountIdSessionsGreen?: (number[]|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate insufficientlevelSessions */
    insufficientlevelSessions?: (number[]|null);
}

/** Represents a CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate. */
export class CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate implements ICMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate {

    /**
     * Constructs a new CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate matchmaking. */
    public matchmaking: number;

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate waitingAccountIdSessions. */
    public waitingAccountIdSessions: number[];

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate error. */
    public error: string;

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate ongoingmatchAccountIdSessions. */
    public ongoingmatchAccountIdSessions: number[];

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate globalStats. */
    public globalStats?: (IGlobalStatistics|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate failpingAccountIdSessions. */
    public failpingAccountIdSessions: number[];

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate penaltyAccountIdSessions. */
    public penaltyAccountIdSessions: number[];

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate failreadyAccountIdSessions. */
    public failreadyAccountIdSessions: number[];

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate vacbannedAccountIdSessions. */
    public vacbannedAccountIdSessions: number[];

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate serverIpaddressMask. */
    public serverIpaddressMask?: (IIpAddressMask|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate notes. */
    public notes: CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate.INote[];

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate penaltyAccountIdSessionsGreen. */
    public penaltyAccountIdSessionsGreen: number[];

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate insufficientlevelSessions. */
    public insufficientlevelSessions: number[];

    /**
     * Decodes a CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate;
}

export namespace CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate {

    /** Properties of a Note. */
    interface INote {

        /** Note type */
        type?: (number|null);

        /** Note regionId */
        regionId?: (number|null);

        /** Note regionR */
        regionR?: (number|null);

        /** Note distance */
        distance?: (number|null);
    }

    /** Represents a Note. */
    class Note implements INote {

        /**
         * Constructs a new Note.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate.INote);

        /** Note type. */
        public type: number;

        /** Note regionId. */
        public regionId: number;

        /** Note regionR. */
        public regionR: number;

        /** Note distance. */
        public distance: number;

        /**
         * Decodes a Note message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Note
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate.Note;
    }
}

/** Properties of a CDataGCCStrike15_v2_TournamentMatchDraft. */
export interface ICDataGCCStrike15_v2_TournamentMatchDraft {

    /** CDataGCCStrike15_v2_TournamentMatchDraft eventId */
    eventId?: (number|null);

    /** CDataGCCStrike15_v2_TournamentMatchDraft eventStageId */
    eventStageId?: (number|null);

    /** CDataGCCStrike15_v2_TournamentMatchDraft teamId_0 */
    teamId_0?: (number|null);

    /** CDataGCCStrike15_v2_TournamentMatchDraft teamId_1 */
    teamId_1?: (number|null);

    /** CDataGCCStrike15_v2_TournamentMatchDraft mapsCount */
    mapsCount?: (number|null);

    /** CDataGCCStrike15_v2_TournamentMatchDraft mapsCurrent */
    mapsCurrent?: (number|null);

    /** CDataGCCStrike15_v2_TournamentMatchDraft teamIdStart */
    teamIdStart?: (number|null);

    /** CDataGCCStrike15_v2_TournamentMatchDraft teamIdVeto1 */
    teamIdVeto1?: (number|null);

    /** CDataGCCStrike15_v2_TournamentMatchDraft teamIdPickn */
    teamIdPickn?: (number|null);

    /** CDataGCCStrike15_v2_TournamentMatchDraft drafts */
    drafts?: (CDataGCCStrike15_v2_TournamentMatchDraft.IEntry[]|null);
}

/** Represents a CDataGCCStrike15_v2_TournamentMatchDraft. */
export class CDataGCCStrike15_v2_TournamentMatchDraft implements ICDataGCCStrike15_v2_TournamentMatchDraft {

    /**
     * Constructs a new CDataGCCStrike15_v2_TournamentMatchDraft.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICDataGCCStrike15_v2_TournamentMatchDraft);

    /** CDataGCCStrike15_v2_TournamentMatchDraft eventId. */
    public eventId: number;

    /** CDataGCCStrike15_v2_TournamentMatchDraft eventStageId. */
    public eventStageId: number;

    /** CDataGCCStrike15_v2_TournamentMatchDraft teamId_0. */
    public teamId_0: number;

    /** CDataGCCStrike15_v2_TournamentMatchDraft teamId_1. */
    public teamId_1: number;

    /** CDataGCCStrike15_v2_TournamentMatchDraft mapsCount. */
    public mapsCount: number;

    /** CDataGCCStrike15_v2_TournamentMatchDraft mapsCurrent. */
    public mapsCurrent: number;

    /** CDataGCCStrike15_v2_TournamentMatchDraft teamIdStart. */
    public teamIdStart: number;

    /** CDataGCCStrike15_v2_TournamentMatchDraft teamIdVeto1. */
    public teamIdVeto1: number;

    /** CDataGCCStrike15_v2_TournamentMatchDraft teamIdPickn. */
    public teamIdPickn: number;

    /** CDataGCCStrike15_v2_TournamentMatchDraft drafts. */
    public drafts: CDataGCCStrike15_v2_TournamentMatchDraft.IEntry[];

    /**
     * Decodes a CDataGCCStrike15_v2_TournamentMatchDraft message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CDataGCCStrike15_v2_TournamentMatchDraft
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CDataGCCStrike15_v2_TournamentMatchDraft;
}

export namespace CDataGCCStrike15_v2_TournamentMatchDraft {

    /** Properties of an Entry. */
    interface IEntry {

        /** Entry mapid */
        mapid?: (number|null);

        /** Entry teamIdCt */
        teamIdCt?: (number|null);
    }

    /** Represents an Entry. */
    class Entry implements IEntry {

        /**
         * Constructs a new Entry.
         * @param [properties] Properties to set
         */
        constructor(properties?: CDataGCCStrike15_v2_TournamentMatchDraft.IEntry);

        /** Entry mapid. */
        public mapid: number;

        /** Entry teamIdCt. */
        public teamIdCt: number;

        /**
         * Decodes an Entry message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Entry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CDataGCCStrike15_v2_TournamentMatchDraft.Entry;
    }
}

/** Properties of a CPreMatchInfoData. */
export interface ICPreMatchInfoData {

    /** CPreMatchInfoData predictionsPct */
    predictionsPct?: (number|null);

    /** CPreMatchInfoData draft */
    draft?: (ICDataGCCStrike15_v2_TournamentMatchDraft|null);

    /** CPreMatchInfoData stats */
    stats?: (CPreMatchInfoData.ITeamStats[]|null);
}

/** Represents a CPreMatchInfoData. */
export class CPreMatchInfoData implements ICPreMatchInfoData {

    /**
     * Constructs a new CPreMatchInfoData.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPreMatchInfoData);

    /** CPreMatchInfoData predictionsPct. */
    public predictionsPct: number;

    /** CPreMatchInfoData draft. */
    public draft?: (ICDataGCCStrike15_v2_TournamentMatchDraft|null);

    /** CPreMatchInfoData stats. */
    public stats: CPreMatchInfoData.ITeamStats[];

    /**
     * Decodes a CPreMatchInfoData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPreMatchInfoData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPreMatchInfoData;
}

export namespace CPreMatchInfoData {

    /** Properties of a TeamStats. */
    interface ITeamStats {

        /** TeamStats matchInfoIdxtxt */
        matchInfoIdxtxt?: (number|null);

        /** TeamStats matchInfoTxt */
        matchInfoTxt?: (string|null);

        /** TeamStats matchInfoTeams */
        matchInfoTeams?: (string[]|null);
    }

    /** Represents a TeamStats. */
    class TeamStats implements ITeamStats {

        /**
         * Constructs a new TeamStats.
         * @param [properties] Properties to set
         */
        constructor(properties?: CPreMatchInfoData.ITeamStats);

        /** TeamStats matchInfoIdxtxt. */
        public matchInfoIdxtxt: number;

        /** TeamStats matchInfoTxt. */
        public matchInfoTxt: string;

        /** TeamStats matchInfoTeams. */
        public matchInfoTeams: string[];

        /**
         * Decodes a TeamStats message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TeamStats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPreMatchInfoData.TeamStats;
    }
}

/** Properties of a CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve. */
export interface ICMsgGCCStrike15_v2_MatchmakingGC2ServerReserve {

    /** CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve accountIds */
    accountIds?: (number[]|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve gameType */
    gameType?: (number|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve matchId */
    matchId?: (number|Long|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve serverVersion */
    serverVersion?: (number|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve rankings */
    rankings?: (IPlayerRankingInfo[]|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve encryptionKey */
    encryptionKey?: (number|Long|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve encryptionKeyPub */
    encryptionKeyPub?: (number|Long|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve partyIds */
    partyIds?: (number[]|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve whitelist */
    whitelist?: (IIpAddressMask[]|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve tvMasterSteamid */
    tvMasterSteamid?: (number|Long|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve tournamentEvent */
    tournamentEvent?: (ITournamentEvent|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve tournamentTeams */
    tournamentTeams?: (ITournamentTeam[]|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve tournamentCastersAccountIds */
    tournamentCastersAccountIds?: (number[]|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve tvRelaySteamid */
    tvRelaySteamid?: (number|Long|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve preMatchData */
    preMatchData?: (ICPreMatchInfoData|null);
}

/** Represents a CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve. */
export class CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve implements ICMsgGCCStrike15_v2_MatchmakingGC2ServerReserve {

    /**
     * Constructs a new CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_MatchmakingGC2ServerReserve);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve accountIds. */
    public accountIds: number[];

    /** CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve gameType. */
    public gameType: number;

    /** CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve matchId. */
    public matchId: (number|Long);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve serverVersion. */
    public serverVersion: number;

    /** CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve rankings. */
    public rankings: IPlayerRankingInfo[];

    /** CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve encryptionKey. */
    public encryptionKey: (number|Long);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve encryptionKeyPub. */
    public encryptionKeyPub: (number|Long);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve partyIds. */
    public partyIds: number[];

    /** CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve whitelist. */
    public whitelist: IIpAddressMask[];

    /** CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve tvMasterSteamid. */
    public tvMasterSteamid: (number|Long);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve tournamentEvent. */
    public tournamentEvent?: (ITournamentEvent|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve tournamentTeams. */
    public tournamentTeams: ITournamentTeam[];

    /** CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve tournamentCastersAccountIds. */
    public tournamentCastersAccountIds: number[];

    /** CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve tvRelaySteamid. */
    public tvRelaySteamid: (number|Long);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve preMatchData. */
    public preMatchData?: (ICPreMatchInfoData|null);

    /**
     * Decodes a CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve;
}

/** Properties of a CMsgGCCStrike15_v2_MatchmakingServerReservationResponse. */
export interface ICMsgGCCStrike15_v2_MatchmakingServerReservationResponse {

    /** CMsgGCCStrike15_v2_MatchmakingServerReservationResponse reservationid */
    reservationid?: (number|Long|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerReservationResponse reservation */
    reservation?: (ICMsgGCCStrike15_v2_MatchmakingGC2ServerReserve|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerReservationResponse map */
    map?: (string|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerReservationResponse gcReservationSent */
    gcReservationSent?: (number|Long|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerReservationResponse serverVersion */
    serverVersion?: (number|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerReservationResponse tvInfo */
    tvInfo?: (IServerHltvInfo|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerReservationResponse rewardPlayerAccounts */
    rewardPlayerAccounts?: (number[]|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerReservationResponse idlePlayerAccounts */
    idlePlayerAccounts?: (number[]|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerReservationResponse rewardItemAttrDefIdx */
    rewardItemAttrDefIdx?: (number|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerReservationResponse rewardItemAttrValue */
    rewardItemAttrValue?: (number|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerReservationResponse rewardItemAttrRewardIdx */
    rewardItemAttrRewardIdx?: (number|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerReservationResponse rewardDropList */
    rewardDropList?: (number|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerReservationResponse tournamentTag */
    tournamentTag?: (string|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerReservationResponse steamdatagramPort */
    steamdatagramPort?: (number|null);
}

/** Represents a CMsgGCCStrike15_v2_MatchmakingServerReservationResponse. */
export class CMsgGCCStrike15_v2_MatchmakingServerReservationResponse implements ICMsgGCCStrike15_v2_MatchmakingServerReservationResponse {

    /**
     * Constructs a new CMsgGCCStrike15_v2_MatchmakingServerReservationResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_MatchmakingServerReservationResponse);

    /** CMsgGCCStrike15_v2_MatchmakingServerReservationResponse reservationid. */
    public reservationid: (number|Long);

    /** CMsgGCCStrike15_v2_MatchmakingServerReservationResponse reservation. */
    public reservation?: (ICMsgGCCStrike15_v2_MatchmakingGC2ServerReserve|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerReservationResponse map. */
    public map: string;

    /** CMsgGCCStrike15_v2_MatchmakingServerReservationResponse gcReservationSent. */
    public gcReservationSent: (number|Long);

    /** CMsgGCCStrike15_v2_MatchmakingServerReservationResponse serverVersion. */
    public serverVersion: number;

    /** CMsgGCCStrike15_v2_MatchmakingServerReservationResponse tvInfo. */
    public tvInfo?: (IServerHltvInfo|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerReservationResponse rewardPlayerAccounts. */
    public rewardPlayerAccounts: number[];

    /** CMsgGCCStrike15_v2_MatchmakingServerReservationResponse idlePlayerAccounts. */
    public idlePlayerAccounts: number[];

    /** CMsgGCCStrike15_v2_MatchmakingServerReservationResponse rewardItemAttrDefIdx. */
    public rewardItemAttrDefIdx: number;

    /** CMsgGCCStrike15_v2_MatchmakingServerReservationResponse rewardItemAttrValue. */
    public rewardItemAttrValue: number;

    /** CMsgGCCStrike15_v2_MatchmakingServerReservationResponse rewardItemAttrRewardIdx. */
    public rewardItemAttrRewardIdx: number;

    /** CMsgGCCStrike15_v2_MatchmakingServerReservationResponse rewardDropList. */
    public rewardDropList: number;

    /** CMsgGCCStrike15_v2_MatchmakingServerReservationResponse tournamentTag. */
    public tournamentTag: string;

    /** CMsgGCCStrike15_v2_MatchmakingServerReservationResponse steamdatagramPort. */
    public steamdatagramPort: number;

    /**
     * Decodes a CMsgGCCStrike15_v2_MatchmakingServerReservationResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_MatchmakingServerReservationResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_MatchmakingServerReservationResponse;
}

/** Properties of a CMsgGCCStrike15_v2_MatchmakingGC2ClientReserve. */
export interface ICMsgGCCStrike15_v2_MatchmakingGC2ClientReserve {

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientReserve serverid */
    serverid?: (number|Long|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientReserve serverAddress */
    serverAddress?: (string|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientReserve legacyServerip */
    legacyServerip?: (number|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientReserve legacyServerport */
    legacyServerport?: (number|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientReserve reservationid */
    reservationid?: (number|Long|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientReserve reservation */
    reservation?: (ICMsgGCCStrike15_v2_MatchmakingGC2ServerReserve|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientReserve map */
    map?: (string|null);
}

/** Represents a CMsgGCCStrike15_v2_MatchmakingGC2ClientReserve. */
export class CMsgGCCStrike15_v2_MatchmakingGC2ClientReserve implements ICMsgGCCStrike15_v2_MatchmakingGC2ClientReserve {

    /**
     * Constructs a new CMsgGCCStrike15_v2_MatchmakingGC2ClientReserve.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_MatchmakingGC2ClientReserve);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientReserve serverid. */
    public serverid: (number|Long);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientReserve serverAddress. */
    public serverAddress: string;

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientReserve legacyServerip. */
    public legacyServerip: number;

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientReserve legacyServerport. */
    public legacyServerport: number;

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientReserve reservationid. */
    public reservationid: (number|Long);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientReserve reservation. */
    public reservation?: (ICMsgGCCStrike15_v2_MatchmakingGC2ServerReserve|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientReserve map. */
    public map: string;

    /**
     * Decodes a CMsgGCCStrike15_v2_MatchmakingGC2ClientReserve message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_MatchmakingGC2ClientReserve
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_MatchmakingGC2ClientReserve;
}

/** Properties of a CMsgGCCStrike15_v2_MatchmakingServerRoundStats. */
export interface ICMsgGCCStrike15_v2_MatchmakingServerRoundStats {

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats reservationid */
    reservationid?: (number|Long|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats reservation */
    reservation?: (ICMsgGCCStrike15_v2_MatchmakingGC2ServerReserve|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats map */
    map?: (string|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats round */
    round?: (number|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats kills */
    kills?: (number[]|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats assists */
    assists?: (number[]|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats deaths */
    deaths?: (number[]|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats scores */
    scores?: (number[]|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats pings */
    pings?: (number[]|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats roundResult */
    roundResult?: (number|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats matchResult */
    matchResult?: (number|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats teamScores */
    teamScores?: (number[]|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats confirm */
    confirm?: (ICMsgGCCStrike15_v2_MatchmakingGC2ServerConfirm|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats reservationStage */
    reservationStage?: (number|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats matchDuration */
    matchDuration?: (number|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats enemyKills */
    enemyKills?: (number[]|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats enemyHeadshots */
    enemyHeadshots?: (number[]|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats enemy_3ks */
    enemy_3ks?: (number[]|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats enemy_4ks */
    enemy_4ks?: (number[]|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats enemy_5ks */
    enemy_5ks?: (number[]|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats mvps */
    mvps?: (number[]|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats spectatorsCount */
    spectatorsCount?: (number|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats spectatorsCountTv */
    spectatorsCountTv?: (number|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats spectatorsCountLnk */
    spectatorsCountLnk?: (number|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats enemyKillsAgg */
    enemyKillsAgg?: (number[]|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats dropInfo */
    dropInfo?: (CMsgGCCStrike15_v2_MatchmakingServerRoundStats.IDropInfo|null);
}

/** Represents a CMsgGCCStrike15_v2_MatchmakingServerRoundStats. */
export class CMsgGCCStrike15_v2_MatchmakingServerRoundStats implements ICMsgGCCStrike15_v2_MatchmakingServerRoundStats {

    /**
     * Constructs a new CMsgGCCStrike15_v2_MatchmakingServerRoundStats.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_MatchmakingServerRoundStats);

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats reservationid. */
    public reservationid: (number|Long);

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats reservation. */
    public reservation?: (ICMsgGCCStrike15_v2_MatchmakingGC2ServerReserve|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats map. */
    public map: string;

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats round. */
    public round: number;

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats kills. */
    public kills: number[];

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats assists. */
    public assists: number[];

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats deaths. */
    public deaths: number[];

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats scores. */
    public scores: number[];

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats pings. */
    public pings: number[];

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats roundResult. */
    public roundResult: number;

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats matchResult. */
    public matchResult: number;

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats teamScores. */
    public teamScores: number[];

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats confirm. */
    public confirm?: (ICMsgGCCStrike15_v2_MatchmakingGC2ServerConfirm|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats reservationStage. */
    public reservationStage: number;

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats matchDuration. */
    public matchDuration: number;

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats enemyKills. */
    public enemyKills: number[];

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats enemyHeadshots. */
    public enemyHeadshots: number[];

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats enemy_3ks. */
    public enemy_3ks: number[];

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats enemy_4ks. */
    public enemy_4ks: number[];

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats enemy_5ks. */
    public enemy_5ks: number[];

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats mvps. */
    public mvps: number[];

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats spectatorsCount. */
    public spectatorsCount: number;

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats spectatorsCountTv. */
    public spectatorsCountTv: number;

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats spectatorsCountLnk. */
    public spectatorsCountLnk: number;

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats enemyKillsAgg. */
    public enemyKillsAgg: number[];

    /** CMsgGCCStrike15_v2_MatchmakingServerRoundStats dropInfo. */
    public dropInfo?: (CMsgGCCStrike15_v2_MatchmakingServerRoundStats.IDropInfo|null);

    /**
     * Decodes a CMsgGCCStrike15_v2_MatchmakingServerRoundStats message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_MatchmakingServerRoundStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_MatchmakingServerRoundStats;
}

export namespace CMsgGCCStrike15_v2_MatchmakingServerRoundStats {

    /** Properties of a DropInfo. */
    interface IDropInfo {

        /** DropInfo accountMvp */
        accountMvp?: (number|null);
    }

    /** Represents a DropInfo. */
    class DropInfo implements IDropInfo {

        /**
         * Constructs a new DropInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgGCCStrike15_v2_MatchmakingServerRoundStats.IDropInfo);

        /** DropInfo accountMvp. */
        public accountMvp: number;

        /**
         * Decodes a DropInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DropInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_MatchmakingServerRoundStats.DropInfo;
    }
}

/** Properties of a CMsgGCCStrike15_v2_MatchmakingServerMatchEnd. */
export interface ICMsgGCCStrike15_v2_MatchmakingServerMatchEnd {

    /** CMsgGCCStrike15_v2_MatchmakingServerMatchEnd stats */
    stats?: (ICMsgGCCStrike15_v2_MatchmakingServerRoundStats|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerMatchEnd confirm */
    confirm?: (ICMsgGCCStrike15_v2_MatchmakingGC2ServerConfirm|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerMatchEnd rematch */
    rematch?: (number|Long|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerMatchEnd replayToken */
    replayToken?: (number|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerMatchEnd replayClusterId */
    replayClusterId?: (number|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerMatchEnd abortedMatch */
    abortedMatch?: (boolean|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerMatchEnd matchEndQuestData */
    matchEndQuestData?: (ICMsgGC_ServerQuestUpdateData|null);
}

/** Represents a CMsgGCCStrike15_v2_MatchmakingServerMatchEnd. */
export class CMsgGCCStrike15_v2_MatchmakingServerMatchEnd implements ICMsgGCCStrike15_v2_MatchmakingServerMatchEnd {

    /**
     * Constructs a new CMsgGCCStrike15_v2_MatchmakingServerMatchEnd.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_MatchmakingServerMatchEnd);

    /** CMsgGCCStrike15_v2_MatchmakingServerMatchEnd stats. */
    public stats?: (ICMsgGCCStrike15_v2_MatchmakingServerRoundStats|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerMatchEnd confirm. */
    public confirm?: (ICMsgGCCStrike15_v2_MatchmakingGC2ServerConfirm|null);

    /** CMsgGCCStrike15_v2_MatchmakingServerMatchEnd rematch. */
    public rematch: (number|Long);

    /** CMsgGCCStrike15_v2_MatchmakingServerMatchEnd replayToken. */
    public replayToken: number;

    /** CMsgGCCStrike15_v2_MatchmakingServerMatchEnd replayClusterId. */
    public replayClusterId: number;

    /** CMsgGCCStrike15_v2_MatchmakingServerMatchEnd abortedMatch. */
    public abortedMatch: boolean;

    /** CMsgGCCStrike15_v2_MatchmakingServerMatchEnd matchEndQuestData. */
    public matchEndQuestData?: (ICMsgGC_ServerQuestUpdateData|null);

    /**
     * Decodes a CMsgGCCStrike15_v2_MatchmakingServerMatchEnd message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_MatchmakingServerMatchEnd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_MatchmakingServerMatchEnd;
}

/** Properties of a CMsgGCCStrike15_v2_MatchmakingClient2GCHello. */
export interface ICMsgGCCStrike15_v2_MatchmakingClient2GCHello {
}

/** Represents a CMsgGCCStrike15_v2_MatchmakingClient2GCHello. */
export class CMsgGCCStrike15_v2_MatchmakingClient2GCHello implements ICMsgGCCStrike15_v2_MatchmakingClient2GCHello {

    /**
     * Constructs a new CMsgGCCStrike15_v2_MatchmakingClient2GCHello.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_MatchmakingClient2GCHello);

    /**
     * Decodes a CMsgGCCStrike15_v2_MatchmakingClient2GCHello message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_MatchmakingClient2GCHello
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_MatchmakingClient2GCHello;
}

/** Properties of a CMsgGCCStrike15_v2_MatchmakingGC2ClientHello. */
export interface ICMsgGCCStrike15_v2_MatchmakingGC2ClientHello {

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientHello accountId */
    accountId?: (number|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientHello ongoingmatch */
    ongoingmatch?: (ICMsgGCCStrike15_v2_MatchmakingGC2ClientReserve|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientHello globalStats */
    globalStats?: (IGlobalStatistics|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientHello penaltySeconds */
    penaltySeconds?: (number|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientHello penaltyReason */
    penaltyReason?: (number|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientHello vacBanned */
    vacBanned?: (number|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientHello ranking */
    ranking?: (IPlayerRankingInfo|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientHello commendation */
    commendation?: (IPlayerCommendationInfo|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientHello medals */
    medals?: (IPlayerMedalsInfo|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientHello myCurrentEvent */
    myCurrentEvent?: (ITournamentEvent|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientHello myCurrentEventTeams */
    myCurrentEventTeams?: (ITournamentTeam[]|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientHello myCurrentTeam */
    myCurrentTeam?: (ITournamentTeam|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientHello myCurrentEventStages */
    myCurrentEventStages?: (ITournamentEvent[]|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientHello surveyVote */
    surveyVote?: (number|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientHello activity */
    activity?: (IAccountActivity|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientHello playerLevel */
    playerLevel?: (number|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientHello playerCurXp */
    playerCurXp?: (number|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientHello playerXpBonusFlags */
    playerXpBonusFlags?: (number|null);
}

/** Represents a CMsgGCCStrike15_v2_MatchmakingGC2ClientHello. */
export class CMsgGCCStrike15_v2_MatchmakingGC2ClientHello implements ICMsgGCCStrike15_v2_MatchmakingGC2ClientHello {

    /**
     * Constructs a new CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_MatchmakingGC2ClientHello);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientHello accountId. */
    public accountId: number;

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientHello ongoingmatch. */
    public ongoingmatch?: (ICMsgGCCStrike15_v2_MatchmakingGC2ClientReserve|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientHello globalStats. */
    public globalStats?: (IGlobalStatistics|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientHello penaltySeconds. */
    public penaltySeconds: number;

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientHello penaltyReason. */
    public penaltyReason: number;

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientHello vacBanned. */
    public vacBanned: number;

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientHello ranking. */
    public ranking?: (IPlayerRankingInfo|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientHello commendation. */
    public commendation?: (IPlayerCommendationInfo|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientHello medals. */
    public medals?: (IPlayerMedalsInfo|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientHello myCurrentEvent. */
    public myCurrentEvent?: (ITournamentEvent|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientHello myCurrentEventTeams. */
    public myCurrentEventTeams: ITournamentTeam[];

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientHello myCurrentTeam. */
    public myCurrentTeam?: (ITournamentTeam|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientHello myCurrentEventStages. */
    public myCurrentEventStages: ITournamentEvent[];

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientHello surveyVote. */
    public surveyVote: number;

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientHello activity. */
    public activity?: (IAccountActivity|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientHello playerLevel. */
    public playerLevel: number;

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientHello playerCurXp. */
    public playerCurXp: number;

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientHello playerXpBonusFlags. */
    public playerXpBonusFlags: number;

    /**
     * Decodes a CMsgGCCStrike15_v2_MatchmakingGC2ClientHello message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_MatchmakingGC2ClientHello
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_MatchmakingGC2ClientHello;
}

/** Properties of a CMsgGCCStrike15_v2_AccountPrivacySettings. */
export interface ICMsgGCCStrike15_v2_AccountPrivacySettings {

    /** CMsgGCCStrike15_v2_AccountPrivacySettings settings */
    settings?: (CMsgGCCStrike15_v2_AccountPrivacySettings.ISetting[]|null);
}

/** Represents a CMsgGCCStrike15_v2_AccountPrivacySettings. */
export class CMsgGCCStrike15_v2_AccountPrivacySettings implements ICMsgGCCStrike15_v2_AccountPrivacySettings {

    /**
     * Constructs a new CMsgGCCStrike15_v2_AccountPrivacySettings.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_AccountPrivacySettings);

    /** CMsgGCCStrike15_v2_AccountPrivacySettings settings. */
    public settings: CMsgGCCStrike15_v2_AccountPrivacySettings.ISetting[];

    /**
     * Decodes a CMsgGCCStrike15_v2_AccountPrivacySettings message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_AccountPrivacySettings
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_AccountPrivacySettings;
}

export namespace CMsgGCCStrike15_v2_AccountPrivacySettings {

    /** Properties of a Setting. */
    interface ISetting {

        /** Setting settingType */
        settingType?: (number|null);

        /** Setting settingValue */
        settingValue?: (number|null);
    }

    /** Represents a Setting. */
    class Setting implements ISetting {

        /**
         * Constructs a new Setting.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgGCCStrike15_v2_AccountPrivacySettings.ISetting);

        /** Setting settingType. */
        public settingType: number;

        /** Setting settingValue. */
        public settingValue: number;

        /**
         * Decodes a Setting message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Setting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_AccountPrivacySettings.Setting;
    }
}

/** Properties of a CMsgGCCStrike15_v2_MatchmakingGC2ClientAbandon. */
export interface ICMsgGCCStrike15_v2_MatchmakingGC2ClientAbandon {

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientAbandon accountId */
    accountId?: (number|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientAbandon abandonedMatch */
    abandonedMatch?: (ICMsgGCCStrike15_v2_MatchmakingGC2ClientReserve|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientAbandon penaltySeconds */
    penaltySeconds?: (number|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientAbandon penaltyReason */
    penaltyReason?: (number|null);
}

/** Represents a CMsgGCCStrike15_v2_MatchmakingGC2ClientAbandon. */
export class CMsgGCCStrike15_v2_MatchmakingGC2ClientAbandon implements ICMsgGCCStrike15_v2_MatchmakingGC2ClientAbandon {

    /**
     * Constructs a new CMsgGCCStrike15_v2_MatchmakingGC2ClientAbandon.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_MatchmakingGC2ClientAbandon);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientAbandon accountId. */
    public accountId: number;

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientAbandon abandonedMatch. */
    public abandonedMatch?: (ICMsgGCCStrike15_v2_MatchmakingGC2ClientReserve|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientAbandon penaltySeconds. */
    public penaltySeconds: number;

    /** CMsgGCCStrike15_v2_MatchmakingGC2ClientAbandon penaltyReason. */
    public penaltyReason: number;

    /**
     * Decodes a CMsgGCCStrike15_v2_MatchmakingGC2ClientAbandon message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_MatchmakingGC2ClientAbandon
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_MatchmakingGC2ClientAbandon;
}

/** Properties of a CMsgGCCStrike15_v2_MatchmakingServer2GCKick. */
export interface ICMsgGCCStrike15_v2_MatchmakingServer2GCKick {

    /** CMsgGCCStrike15_v2_MatchmakingServer2GCKick accountId */
    accountId?: (number|null);

    /** CMsgGCCStrike15_v2_MatchmakingServer2GCKick reservation */
    reservation?: (ICMsgGCCStrike15_v2_MatchmakingGC2ServerReserve|null);

    /** CMsgGCCStrike15_v2_MatchmakingServer2GCKick reason */
    reason?: (number|null);
}

/** Represents a CMsgGCCStrike15_v2_MatchmakingServer2GCKick. */
export class CMsgGCCStrike15_v2_MatchmakingServer2GCKick implements ICMsgGCCStrike15_v2_MatchmakingServer2GCKick {

    /**
     * Constructs a new CMsgGCCStrike15_v2_MatchmakingServer2GCKick.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_MatchmakingServer2GCKick);

    /** CMsgGCCStrike15_v2_MatchmakingServer2GCKick accountId. */
    public accountId: number;

    /** CMsgGCCStrike15_v2_MatchmakingServer2GCKick reservation. */
    public reservation?: (ICMsgGCCStrike15_v2_MatchmakingGC2ServerReserve|null);

    /** CMsgGCCStrike15_v2_MatchmakingServer2GCKick reason. */
    public reason: number;

    /**
     * Decodes a CMsgGCCStrike15_v2_MatchmakingServer2GCKick message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_MatchmakingServer2GCKick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_MatchmakingServer2GCKick;
}

/** Properties of a CMsgGCCStrike15_v2_MatchmakingGC2ServerRankUpdate. */
export interface ICMsgGCCStrike15_v2_MatchmakingGC2ServerRankUpdate {

    /** CMsgGCCStrike15_v2_MatchmakingGC2ServerRankUpdate rankings */
    rankings?: (IPlayerRankingInfo[]|null);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ServerRankUpdate matchId */
    matchId?: (number|Long|null);
}

/** Represents a CMsgGCCStrike15_v2_MatchmakingGC2ServerRankUpdate. */
export class CMsgGCCStrike15_v2_MatchmakingGC2ServerRankUpdate implements ICMsgGCCStrike15_v2_MatchmakingGC2ServerRankUpdate {

    /**
     * Constructs a new CMsgGCCStrike15_v2_MatchmakingGC2ServerRankUpdate.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_MatchmakingGC2ServerRankUpdate);

    /** CMsgGCCStrike15_v2_MatchmakingGC2ServerRankUpdate rankings. */
    public rankings: IPlayerRankingInfo[];

    /** CMsgGCCStrike15_v2_MatchmakingGC2ServerRankUpdate matchId. */
    public matchId: (number|Long);

    /**
     * Decodes a CMsgGCCStrike15_v2_MatchmakingGC2ServerRankUpdate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_MatchmakingGC2ServerRankUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_MatchmakingGC2ServerRankUpdate;
}

/** Properties of a CMsgGCCStrike15_v2_MatchmakingOperator2GCBlogUpdate. */
export interface ICMsgGCCStrike15_v2_MatchmakingOperator2GCBlogUpdate {

    /** CMsgGCCStrike15_v2_MatchmakingOperator2GCBlogUpdate mainPostUrl */
    mainPostUrl?: (string|null);
}

/** Represents a CMsgGCCStrike15_v2_MatchmakingOperator2GCBlogUpdate. */
export class CMsgGCCStrike15_v2_MatchmakingOperator2GCBlogUpdate implements ICMsgGCCStrike15_v2_MatchmakingOperator2GCBlogUpdate {

    /**
     * Constructs a new CMsgGCCStrike15_v2_MatchmakingOperator2GCBlogUpdate.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_MatchmakingOperator2GCBlogUpdate);

    /** CMsgGCCStrike15_v2_MatchmakingOperator2GCBlogUpdate mainPostUrl. */
    public mainPostUrl: string;

    /**
     * Decodes a CMsgGCCStrike15_v2_MatchmakingOperator2GCBlogUpdate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_MatchmakingOperator2GCBlogUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_MatchmakingOperator2GCBlogUpdate;
}

/** Properties of a CMsgGCCStrike15_v2_ServerNotificationForUserPenalty. */
export interface ICMsgGCCStrike15_v2_ServerNotificationForUserPenalty {

    /** CMsgGCCStrike15_v2_ServerNotificationForUserPenalty accountId */
    accountId?: (number|null);

    /** CMsgGCCStrike15_v2_ServerNotificationForUserPenalty reason */
    reason?: (number|null);

    /** CMsgGCCStrike15_v2_ServerNotificationForUserPenalty seconds */
    seconds?: (number|null);
}

/** Represents a CMsgGCCStrike15_v2_ServerNotificationForUserPenalty. */
export class CMsgGCCStrike15_v2_ServerNotificationForUserPenalty implements ICMsgGCCStrike15_v2_ServerNotificationForUserPenalty {

    /**
     * Constructs a new CMsgGCCStrike15_v2_ServerNotificationForUserPenalty.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_ServerNotificationForUserPenalty);

    /** CMsgGCCStrike15_v2_ServerNotificationForUserPenalty accountId. */
    public accountId: number;

    /** CMsgGCCStrike15_v2_ServerNotificationForUserPenalty reason. */
    public reason: number;

    /** CMsgGCCStrike15_v2_ServerNotificationForUserPenalty seconds. */
    public seconds: number;

    /**
     * Decodes a CMsgGCCStrike15_v2_ServerNotificationForUserPenalty message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_ServerNotificationForUserPenalty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_ServerNotificationForUserPenalty;
}

/** Properties of a CMsgGCCStrike15_v2_ClientReportPlayer. */
export interface ICMsgGCCStrike15_v2_ClientReportPlayer {

    /** CMsgGCCStrike15_v2_ClientReportPlayer accountId */
    accountId?: (number|null);

    /** CMsgGCCStrike15_v2_ClientReportPlayer rptAimbot */
    rptAimbot?: (number|null);

    /** CMsgGCCStrike15_v2_ClientReportPlayer rptWallhack */
    rptWallhack?: (number|null);

    /** CMsgGCCStrike15_v2_ClientReportPlayer rptSpeedhack */
    rptSpeedhack?: (number|null);

    /** CMsgGCCStrike15_v2_ClientReportPlayer rptTeamharm */
    rptTeamharm?: (number|null);

    /** CMsgGCCStrike15_v2_ClientReportPlayer rptTextabuse */
    rptTextabuse?: (number|null);

    /** CMsgGCCStrike15_v2_ClientReportPlayer rptVoiceabuse */
    rptVoiceabuse?: (number|null);

    /** CMsgGCCStrike15_v2_ClientReportPlayer matchId */
    matchId?: (number|Long|null);
}

/** Represents a CMsgGCCStrike15_v2_ClientReportPlayer. */
export class CMsgGCCStrike15_v2_ClientReportPlayer implements ICMsgGCCStrike15_v2_ClientReportPlayer {

    /**
     * Constructs a new CMsgGCCStrike15_v2_ClientReportPlayer.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_ClientReportPlayer);

    /** CMsgGCCStrike15_v2_ClientReportPlayer accountId. */
    public accountId: number;

    /** CMsgGCCStrike15_v2_ClientReportPlayer rptAimbot. */
    public rptAimbot: number;

    /** CMsgGCCStrike15_v2_ClientReportPlayer rptWallhack. */
    public rptWallhack: number;

    /** CMsgGCCStrike15_v2_ClientReportPlayer rptSpeedhack. */
    public rptSpeedhack: number;

    /** CMsgGCCStrike15_v2_ClientReportPlayer rptTeamharm. */
    public rptTeamharm: number;

    /** CMsgGCCStrike15_v2_ClientReportPlayer rptTextabuse. */
    public rptTextabuse: number;

    /** CMsgGCCStrike15_v2_ClientReportPlayer rptVoiceabuse. */
    public rptVoiceabuse: number;

    /** CMsgGCCStrike15_v2_ClientReportPlayer matchId. */
    public matchId: (number|Long);

    /**
     * Decodes a CMsgGCCStrike15_v2_ClientReportPlayer message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_ClientReportPlayer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_ClientReportPlayer;
}

/** Properties of a CMsgGCCStrike15_v2_ClientCommendPlayer. */
export interface ICMsgGCCStrike15_v2_ClientCommendPlayer {

    /** CMsgGCCStrike15_v2_ClientCommendPlayer accountId */
    accountId?: (number|null);

    /** CMsgGCCStrike15_v2_ClientCommendPlayer matchId */
    matchId?: (number|Long|null);

    /** CMsgGCCStrike15_v2_ClientCommendPlayer commendation */
    commendation?: (IPlayerCommendationInfo|null);

    /** CMsgGCCStrike15_v2_ClientCommendPlayer tokens */
    tokens?: (number|null);
}

/** Represents a CMsgGCCStrike15_v2_ClientCommendPlayer. */
export class CMsgGCCStrike15_v2_ClientCommendPlayer implements ICMsgGCCStrike15_v2_ClientCommendPlayer {

    /**
     * Constructs a new CMsgGCCStrike15_v2_ClientCommendPlayer.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_ClientCommendPlayer);

    /** CMsgGCCStrike15_v2_ClientCommendPlayer accountId. */
    public accountId: number;

    /** CMsgGCCStrike15_v2_ClientCommendPlayer matchId. */
    public matchId: (number|Long);

    /** CMsgGCCStrike15_v2_ClientCommendPlayer commendation. */
    public commendation?: (IPlayerCommendationInfo|null);

    /** CMsgGCCStrike15_v2_ClientCommendPlayer tokens. */
    public tokens: number;

    /**
     * Decodes a CMsgGCCStrike15_v2_ClientCommendPlayer message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_ClientCommendPlayer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_ClientCommendPlayer;
}

/** Properties of a CMsgGCCStrike15_v2_ClientReportServer. */
export interface ICMsgGCCStrike15_v2_ClientReportServer {

    /** CMsgGCCStrike15_v2_ClientReportServer rptPoorperf */
    rptPoorperf?: (number|null);

    /** CMsgGCCStrike15_v2_ClientReportServer rptAbusivemodels */
    rptAbusivemodels?: (number|null);

    /** CMsgGCCStrike15_v2_ClientReportServer rptBadmotd */
    rptBadmotd?: (number|null);

    /** CMsgGCCStrike15_v2_ClientReportServer rptListingabuse */
    rptListingabuse?: (number|null);

    /** CMsgGCCStrike15_v2_ClientReportServer rptInventoryabuse */
    rptInventoryabuse?: (number|null);

    /** CMsgGCCStrike15_v2_ClientReportServer matchId */
    matchId?: (number|Long|null);
}

/** Represents a CMsgGCCStrike15_v2_ClientReportServer. */
export class CMsgGCCStrike15_v2_ClientReportServer implements ICMsgGCCStrike15_v2_ClientReportServer {

    /**
     * Constructs a new CMsgGCCStrike15_v2_ClientReportServer.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_ClientReportServer);

    /** CMsgGCCStrike15_v2_ClientReportServer rptPoorperf. */
    public rptPoorperf: number;

    /** CMsgGCCStrike15_v2_ClientReportServer rptAbusivemodels. */
    public rptAbusivemodels: number;

    /** CMsgGCCStrike15_v2_ClientReportServer rptBadmotd. */
    public rptBadmotd: number;

    /** CMsgGCCStrike15_v2_ClientReportServer rptListingabuse. */
    public rptListingabuse: number;

    /** CMsgGCCStrike15_v2_ClientReportServer rptInventoryabuse. */
    public rptInventoryabuse: number;

    /** CMsgGCCStrike15_v2_ClientReportServer matchId. */
    public matchId: (number|Long);

    /**
     * Decodes a CMsgGCCStrike15_v2_ClientReportServer message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_ClientReportServer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_ClientReportServer;
}

/** Properties of a CMsgGCCStrike15_v2_ClientReportResponse. */
export interface ICMsgGCCStrike15_v2_ClientReportResponse {

    /** CMsgGCCStrike15_v2_ClientReportResponse confirmationId */
    confirmationId?: (number|Long|null);

    /** CMsgGCCStrike15_v2_ClientReportResponse accountId */
    accountId?: (number|null);

    /** CMsgGCCStrike15_v2_ClientReportResponse serverIp */
    serverIp?: (number|null);

    /** CMsgGCCStrike15_v2_ClientReportResponse responseType */
    responseType?: (number|null);

    /** CMsgGCCStrike15_v2_ClientReportResponse responseResult */
    responseResult?: (number|null);

    /** CMsgGCCStrike15_v2_ClientReportResponse tokens */
    tokens?: (number|null);
}

/** Represents a CMsgGCCStrike15_v2_ClientReportResponse. */
export class CMsgGCCStrike15_v2_ClientReportResponse implements ICMsgGCCStrike15_v2_ClientReportResponse {

    /**
     * Constructs a new CMsgGCCStrike15_v2_ClientReportResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_ClientReportResponse);

    /** CMsgGCCStrike15_v2_ClientReportResponse confirmationId. */
    public confirmationId: (number|Long);

    /** CMsgGCCStrike15_v2_ClientReportResponse accountId. */
    public accountId: number;

    /** CMsgGCCStrike15_v2_ClientReportResponse serverIp. */
    public serverIp: number;

    /** CMsgGCCStrike15_v2_ClientReportResponse responseType. */
    public responseType: number;

    /** CMsgGCCStrike15_v2_ClientReportResponse responseResult. */
    public responseResult: number;

    /** CMsgGCCStrike15_v2_ClientReportResponse tokens. */
    public tokens: number;

    /**
     * Decodes a CMsgGCCStrike15_v2_ClientReportResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_ClientReportResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_ClientReportResponse;
}

/** Properties of a CMsgGCCStrike15_v2_ClientRequestWatchInfoFriends. */
export interface ICMsgGCCStrike15_v2_ClientRequestWatchInfoFriends {

    /** CMsgGCCStrike15_v2_ClientRequestWatchInfoFriends requestId */
    requestId?: (number|null);

    /** CMsgGCCStrike15_v2_ClientRequestWatchInfoFriends accountIds */
    accountIds?: (number[]|null);

    /** CMsgGCCStrike15_v2_ClientRequestWatchInfoFriends serverid */
    serverid?: (number|Long|null);

    /** CMsgGCCStrike15_v2_ClientRequestWatchInfoFriends matchid */
    matchid?: (number|Long|null);
}

/** Represents a CMsgGCCStrike15_v2_ClientRequestWatchInfoFriends. */
export class CMsgGCCStrike15_v2_ClientRequestWatchInfoFriends implements ICMsgGCCStrike15_v2_ClientRequestWatchInfoFriends {

    /**
     * Constructs a new CMsgGCCStrike15_v2_ClientRequestWatchInfoFriends.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_ClientRequestWatchInfoFriends);

    /** CMsgGCCStrike15_v2_ClientRequestWatchInfoFriends requestId. */
    public requestId: number;

    /** CMsgGCCStrike15_v2_ClientRequestWatchInfoFriends accountIds. */
    public accountIds: number[];

    /** CMsgGCCStrike15_v2_ClientRequestWatchInfoFriends serverid. */
    public serverid: (number|Long);

    /** CMsgGCCStrike15_v2_ClientRequestWatchInfoFriends matchid. */
    public matchid: (number|Long);

    /**
     * Decodes a CMsgGCCStrike15_v2_ClientRequestWatchInfoFriends message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_ClientRequestWatchInfoFriends
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_ClientRequestWatchInfoFriends;
}

/** Properties of a WatchableMatchInfo. */
export interface IWatchableMatchInfo {

    /** WatchableMatchInfo serverIp */
    serverIp?: (number|null);

    /** WatchableMatchInfo tvPort */
    tvPort?: (number|null);

    /** WatchableMatchInfo tvSpectators */
    tvSpectators?: (number|null);

    /** WatchableMatchInfo tvTime */
    tvTime?: (number|null);

    /** WatchableMatchInfo tvWatchPassword */
    tvWatchPassword?: (Uint8Array|null);

    /** WatchableMatchInfo clDecryptdataKey */
    clDecryptdataKey?: (number|Long|null);

    /** WatchableMatchInfo clDecryptdataKeyPub */
    clDecryptdataKeyPub?: (number|Long|null);

    /** WatchableMatchInfo gameType */
    gameType?: (number|null);

    /** WatchableMatchInfo gameMapgroup */
    gameMapgroup?: (string|null);

    /** WatchableMatchInfo gameMap */
    gameMap?: (string|null);

    /** WatchableMatchInfo serverId */
    serverId?: (number|Long|null);

    /** WatchableMatchInfo matchId */
    matchId?: (number|Long|null);

    /** WatchableMatchInfo reservationId */
    reservationId?: (number|Long|null);
}

/** Represents a WatchableMatchInfo. */
export class WatchableMatchInfo implements IWatchableMatchInfo {

    /**
     * Constructs a new WatchableMatchInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWatchableMatchInfo);

    /** WatchableMatchInfo serverIp. */
    public serverIp: number;

    /** WatchableMatchInfo tvPort. */
    public tvPort: number;

    /** WatchableMatchInfo tvSpectators. */
    public tvSpectators: number;

    /** WatchableMatchInfo tvTime. */
    public tvTime: number;

    /** WatchableMatchInfo tvWatchPassword. */
    public tvWatchPassword: Uint8Array;

    /** WatchableMatchInfo clDecryptdataKey. */
    public clDecryptdataKey: (number|Long);

    /** WatchableMatchInfo clDecryptdataKeyPub. */
    public clDecryptdataKeyPub: (number|Long);

    /** WatchableMatchInfo gameType. */
    public gameType: number;

    /** WatchableMatchInfo gameMapgroup. */
    public gameMapgroup: string;

    /** WatchableMatchInfo gameMap. */
    public gameMap: string;

    /** WatchableMatchInfo serverId. */
    public serverId: (number|Long);

    /** WatchableMatchInfo matchId. */
    public matchId: (number|Long);

    /** WatchableMatchInfo reservationId. */
    public reservationId: (number|Long);

    /**
     * Decodes a WatchableMatchInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WatchableMatchInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WatchableMatchInfo;
}

/** Properties of a CMsgGCCStrike15_v2_ClientRequestJoinFriendData. */
export interface ICMsgGCCStrike15_v2_ClientRequestJoinFriendData {

    /** CMsgGCCStrike15_v2_ClientRequestJoinFriendData version */
    version?: (number|null);

    /** CMsgGCCStrike15_v2_ClientRequestJoinFriendData accountId */
    accountId?: (number|null);

    /** CMsgGCCStrike15_v2_ClientRequestJoinFriendData joinToken */
    joinToken?: (number|null);

    /** CMsgGCCStrike15_v2_ClientRequestJoinFriendData joinIpp */
    joinIpp?: (number|null);

    /** CMsgGCCStrike15_v2_ClientRequestJoinFriendData res */
    res?: (ICMsgGCCStrike15_v2_MatchmakingGC2ClientReserve|null);

    /** CMsgGCCStrike15_v2_ClientRequestJoinFriendData errormsg */
    errormsg?: (string|null);
}

/** Represents a CMsgGCCStrike15_v2_ClientRequestJoinFriendData. */
export class CMsgGCCStrike15_v2_ClientRequestJoinFriendData implements ICMsgGCCStrike15_v2_ClientRequestJoinFriendData {

    /**
     * Constructs a new CMsgGCCStrike15_v2_ClientRequestJoinFriendData.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_ClientRequestJoinFriendData);

    /** CMsgGCCStrike15_v2_ClientRequestJoinFriendData version. */
    public version: number;

    /** CMsgGCCStrike15_v2_ClientRequestJoinFriendData accountId. */
    public accountId: number;

    /** CMsgGCCStrike15_v2_ClientRequestJoinFriendData joinToken. */
    public joinToken: number;

    /** CMsgGCCStrike15_v2_ClientRequestJoinFriendData joinIpp. */
    public joinIpp: number;

    /** CMsgGCCStrike15_v2_ClientRequestJoinFriendData res. */
    public res?: (ICMsgGCCStrike15_v2_MatchmakingGC2ClientReserve|null);

    /** CMsgGCCStrike15_v2_ClientRequestJoinFriendData errormsg. */
    public errormsg: string;

    /**
     * Decodes a CMsgGCCStrike15_v2_ClientRequestJoinFriendData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_ClientRequestJoinFriendData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_ClientRequestJoinFriendData;
}

/** Properties of a CMsgGCCStrike15_v2_ClientRequestJoinServerData. */
export interface ICMsgGCCStrike15_v2_ClientRequestJoinServerData {

    /** CMsgGCCStrike15_v2_ClientRequestJoinServerData version */
    version?: (number|null);

    /** CMsgGCCStrike15_v2_ClientRequestJoinServerData accountId */
    accountId?: (number|null);

    /** CMsgGCCStrike15_v2_ClientRequestJoinServerData serverid */
    serverid?: (number|Long|null);

    /** CMsgGCCStrike15_v2_ClientRequestJoinServerData serverIp */
    serverIp?: (number|null);

    /** CMsgGCCStrike15_v2_ClientRequestJoinServerData serverPort */
    serverPort?: (number|null);

    /** CMsgGCCStrike15_v2_ClientRequestJoinServerData res */
    res?: (ICMsgGCCStrike15_v2_MatchmakingGC2ClientReserve|null);
}

/** Represents a CMsgGCCStrike15_v2_ClientRequestJoinServerData. */
export class CMsgGCCStrike15_v2_ClientRequestJoinServerData implements ICMsgGCCStrike15_v2_ClientRequestJoinServerData {

    /**
     * Constructs a new CMsgGCCStrike15_v2_ClientRequestJoinServerData.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_ClientRequestJoinServerData);

    /** CMsgGCCStrike15_v2_ClientRequestJoinServerData version. */
    public version: number;

    /** CMsgGCCStrike15_v2_ClientRequestJoinServerData accountId. */
    public accountId: number;

    /** CMsgGCCStrike15_v2_ClientRequestJoinServerData serverid. */
    public serverid: (number|Long);

    /** CMsgGCCStrike15_v2_ClientRequestJoinServerData serverIp. */
    public serverIp: number;

    /** CMsgGCCStrike15_v2_ClientRequestJoinServerData serverPort. */
    public serverPort: number;

    /** CMsgGCCStrike15_v2_ClientRequestJoinServerData res. */
    public res?: (ICMsgGCCStrike15_v2_MatchmakingGC2ClientReserve|null);

    /**
     * Decodes a CMsgGCCStrike15_v2_ClientRequestJoinServerData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_ClientRequestJoinServerData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_ClientRequestJoinServerData;
}

/** Properties of a CMsgGCCstrike15_v2_ClientRequestNewMission. */
export interface ICMsgGCCstrike15_v2_ClientRequestNewMission {

    /** CMsgGCCstrike15_v2_ClientRequestNewMission missionId */
    missionId?: (number|null);

    /** CMsgGCCstrike15_v2_ClientRequestNewMission campaignId */
    campaignId?: (number|null);
}

/** Represents a CMsgGCCstrike15_v2_ClientRequestNewMission. */
export class CMsgGCCstrike15_v2_ClientRequestNewMission implements ICMsgGCCstrike15_v2_ClientRequestNewMission {

    /**
     * Constructs a new CMsgGCCstrike15_v2_ClientRequestNewMission.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCstrike15_v2_ClientRequestNewMission);

    /** CMsgGCCstrike15_v2_ClientRequestNewMission missionId. */
    public missionId: number;

    /** CMsgGCCstrike15_v2_ClientRequestNewMission campaignId. */
    public campaignId: number;

    /**
     * Decodes a CMsgGCCstrike15_v2_ClientRequestNewMission message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCstrike15_v2_ClientRequestNewMission
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCstrike15_v2_ClientRequestNewMission;
}

/** Properties of a CMsgGCCstrike15_v2_GC2ServerNotifyXPRewarded. */
export interface ICMsgGCCstrike15_v2_GC2ServerNotifyXPRewarded {

    /** CMsgGCCstrike15_v2_GC2ServerNotifyXPRewarded xpProgressData */
    xpProgressData?: (IXpProgressData[]|null);

    /** CMsgGCCstrike15_v2_GC2ServerNotifyXPRewarded accountId */
    accountId?: (number|null);

    /** CMsgGCCstrike15_v2_GC2ServerNotifyXPRewarded currentXp */
    currentXp?: (number|null);

    /** CMsgGCCstrike15_v2_GC2ServerNotifyXPRewarded currentLevel */
    currentLevel?: (number|null);

    /** CMsgGCCstrike15_v2_GC2ServerNotifyXPRewarded upgradedDefidx */
    upgradedDefidx?: (number|null);
}

/** Represents a CMsgGCCstrike15_v2_GC2ServerNotifyXPRewarded. */
export class CMsgGCCstrike15_v2_GC2ServerNotifyXPRewarded implements ICMsgGCCstrike15_v2_GC2ServerNotifyXPRewarded {

    /**
     * Constructs a new CMsgGCCstrike15_v2_GC2ServerNotifyXPRewarded.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCstrike15_v2_GC2ServerNotifyXPRewarded);

    /** CMsgGCCstrike15_v2_GC2ServerNotifyXPRewarded xpProgressData. */
    public xpProgressData: IXpProgressData[];

    /** CMsgGCCstrike15_v2_GC2ServerNotifyXPRewarded accountId. */
    public accountId: number;

    /** CMsgGCCstrike15_v2_GC2ServerNotifyXPRewarded currentXp. */
    public currentXp: number;

    /** CMsgGCCstrike15_v2_GC2ServerNotifyXPRewarded currentLevel. */
    public currentLevel: number;

    /** CMsgGCCstrike15_v2_GC2ServerNotifyXPRewarded upgradedDefidx. */
    public upgradedDefidx: number;

    /**
     * Decodes a CMsgGCCstrike15_v2_GC2ServerNotifyXPRewarded message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCstrike15_v2_GC2ServerNotifyXPRewarded
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCstrike15_v2_GC2ServerNotifyXPRewarded;
}

/** Properties of a CMsgGCCStrike15_v2_WatchInfoUsers. */
export interface ICMsgGCCStrike15_v2_WatchInfoUsers {

    /** CMsgGCCStrike15_v2_WatchInfoUsers requestId */
    requestId?: (number|null);

    /** CMsgGCCStrike15_v2_WatchInfoUsers accountIds */
    accountIds?: (number[]|null);

    /** CMsgGCCStrike15_v2_WatchInfoUsers watchableMatchInfos */
    watchableMatchInfos?: (IWatchableMatchInfo[]|null);

    /** CMsgGCCStrike15_v2_WatchInfoUsers extendedTimeout */
    extendedTimeout?: (number|null);
}

/** Represents a CMsgGCCStrike15_v2_WatchInfoUsers. */
export class CMsgGCCStrike15_v2_WatchInfoUsers implements ICMsgGCCStrike15_v2_WatchInfoUsers {

    /**
     * Constructs a new CMsgGCCStrike15_v2_WatchInfoUsers.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_WatchInfoUsers);

    /** CMsgGCCStrike15_v2_WatchInfoUsers requestId. */
    public requestId: number;

    /** CMsgGCCStrike15_v2_WatchInfoUsers accountIds. */
    public accountIds: number[];

    /** CMsgGCCStrike15_v2_WatchInfoUsers watchableMatchInfos. */
    public watchableMatchInfos: IWatchableMatchInfo[];

    /** CMsgGCCStrike15_v2_WatchInfoUsers extendedTimeout. */
    public extendedTimeout: number;

    /**
     * Decodes a CMsgGCCStrike15_v2_WatchInfoUsers message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_WatchInfoUsers
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_WatchInfoUsers;
}

/** Properties of a CMsgGCCStrike15_v2_ClientRequestPlayersProfile. */
export interface ICMsgGCCStrike15_v2_ClientRequestPlayersProfile {

    /** CMsgGCCStrike15_v2_ClientRequestPlayersProfile requestId_Deprecated */
    requestId_Deprecated?: (number|null);

    /** CMsgGCCStrike15_v2_ClientRequestPlayersProfile accountIds_Deprecated */
    accountIds_Deprecated?: (number[]|null);

    /** CMsgGCCStrike15_v2_ClientRequestPlayersProfile accountId */
    accountId?: (number|null);

    /** CMsgGCCStrike15_v2_ClientRequestPlayersProfile requestLevel */
    requestLevel?: (number|null);
}

/** Represents a CMsgGCCStrike15_v2_ClientRequestPlayersProfile. */
export class CMsgGCCStrike15_v2_ClientRequestPlayersProfile implements ICMsgGCCStrike15_v2_ClientRequestPlayersProfile {

    /**
     * Constructs a new CMsgGCCStrike15_v2_ClientRequestPlayersProfile.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_ClientRequestPlayersProfile);

    /** CMsgGCCStrike15_v2_ClientRequestPlayersProfile requestId_Deprecated. */
    public requestId_Deprecated: number;

    /** CMsgGCCStrike15_v2_ClientRequestPlayersProfile accountIds_Deprecated. */
    public accountIds_Deprecated: number[];

    /** CMsgGCCStrike15_v2_ClientRequestPlayersProfile accountId. */
    public accountId: number;

    /** CMsgGCCStrike15_v2_ClientRequestPlayersProfile requestLevel. */
    public requestLevel: number;

    /**
     * Decodes a CMsgGCCStrike15_v2_ClientRequestPlayersProfile message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_ClientRequestPlayersProfile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_ClientRequestPlayersProfile;
}

/** Properties of a CMsgGCCStrike15_v2_PlayersProfile. */
export interface ICMsgGCCStrike15_v2_PlayersProfile {

    /** CMsgGCCStrike15_v2_PlayersProfile requestId */
    requestId?: (number|null);

    /** CMsgGCCStrike15_v2_PlayersProfile accountProfiles */
    accountProfiles?: (ICMsgGCCStrike15_v2_MatchmakingGC2ClientHello[]|null);
}

/** Represents a CMsgGCCStrike15_v2_PlayersProfile. */
export class CMsgGCCStrike15_v2_PlayersProfile implements ICMsgGCCStrike15_v2_PlayersProfile {

    /**
     * Constructs a new CMsgGCCStrike15_v2_PlayersProfile.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_PlayersProfile);

    /** CMsgGCCStrike15_v2_PlayersProfile requestId. */
    public requestId: number;

    /** CMsgGCCStrike15_v2_PlayersProfile accountProfiles. */
    public accountProfiles: ICMsgGCCStrike15_v2_MatchmakingGC2ClientHello[];

    /**
     * Decodes a CMsgGCCStrike15_v2_PlayersProfile message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_PlayersProfile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_PlayersProfile;
}

/** Properties of a CMsgGCCStrike15_v2_PlayerOverwatchCaseUpdate. */
export interface ICMsgGCCStrike15_v2_PlayerOverwatchCaseUpdate {

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseUpdate caseid */
    caseid?: (number|Long|null);

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseUpdate suspectid */
    suspectid?: (number|null);

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseUpdate fractionid */
    fractionid?: (number|null);

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseUpdate rptAimbot */
    rptAimbot?: (number|null);

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseUpdate rptWallhack */
    rptWallhack?: (number|null);

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseUpdate rptSpeedhack */
    rptSpeedhack?: (number|null);

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseUpdate rptTeamharm */
    rptTeamharm?: (number|null);

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseUpdate reason */
    reason?: (number|null);
}

/** Represents a CMsgGCCStrike15_v2_PlayerOverwatchCaseUpdate. */
export class CMsgGCCStrike15_v2_PlayerOverwatchCaseUpdate implements ICMsgGCCStrike15_v2_PlayerOverwatchCaseUpdate {

    /**
     * Constructs a new CMsgGCCStrike15_v2_PlayerOverwatchCaseUpdate.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_PlayerOverwatchCaseUpdate);

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseUpdate caseid. */
    public caseid: (number|Long);

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseUpdate suspectid. */
    public suspectid: number;

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseUpdate fractionid. */
    public fractionid: number;

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseUpdate rptAimbot. */
    public rptAimbot: number;

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseUpdate rptWallhack. */
    public rptWallhack: number;

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseUpdate rptSpeedhack. */
    public rptSpeedhack: number;

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseUpdate rptTeamharm. */
    public rptTeamharm: number;

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseUpdate reason. */
    public reason: number;

    /**
     * Decodes a CMsgGCCStrike15_v2_PlayerOverwatchCaseUpdate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_PlayerOverwatchCaseUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_PlayerOverwatchCaseUpdate;
}

/** Properties of a CMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment. */
export interface ICMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment {

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment caseid */
    caseid?: (number|Long|null);

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment caseurl */
    caseurl?: (string|null);

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment verdict */
    verdict?: (number|null);

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment timestamp */
    timestamp?: (number|null);

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment throttleseconds */
    throttleseconds?: (number|null);

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment suspectid */
    suspectid?: (number|null);

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment fractionid */
    fractionid?: (number|null);

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment numrounds */
    numrounds?: (number|null);

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment fractionrounds */
    fractionrounds?: (number|null);

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment streakconvictions */
    streakconvictions?: (number|null);

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment reason */
    reason?: (number|null);
}

/** Represents a CMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment. */
export class CMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment implements ICMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment {

    /**
     * Constructs a new CMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment);

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment caseid. */
    public caseid: (number|Long);

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment caseurl. */
    public caseurl: string;

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment verdict. */
    public verdict: number;

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment timestamp. */
    public timestamp: number;

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment throttleseconds. */
    public throttleseconds: number;

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment suspectid. */
    public suspectid: number;

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment fractionid. */
    public fractionid: number;

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment numrounds. */
    public numrounds: number;

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment fractionrounds. */
    public fractionrounds: number;

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment streakconvictions. */
    public streakconvictions: number;

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment reason. */
    public reason: number;

    /**
     * Decodes a CMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment;
}

/** Properties of a CMsgGCCStrike15_v2_PlayerOverwatchCaseStatus. */
export interface ICMsgGCCStrike15_v2_PlayerOverwatchCaseStatus {

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseStatus caseid */
    caseid?: (number|Long|null);

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseStatus statusid */
    statusid?: (number|null);
}

/** Represents a CMsgGCCStrike15_v2_PlayerOverwatchCaseStatus. */
export class CMsgGCCStrike15_v2_PlayerOverwatchCaseStatus implements ICMsgGCCStrike15_v2_PlayerOverwatchCaseStatus {

    /**
     * Constructs a new CMsgGCCStrike15_v2_PlayerOverwatchCaseStatus.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_PlayerOverwatchCaseStatus);

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseStatus caseid. */
    public caseid: (number|Long);

    /** CMsgGCCStrike15_v2_PlayerOverwatchCaseStatus statusid. */
    public statusid: number;

    /**
     * Decodes a CMsgGCCStrike15_v2_PlayerOverwatchCaseStatus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_PlayerOverwatchCaseStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_PlayerOverwatchCaseStatus;
}

/** Properties of a CClientHeaderOverwatchEvidence. */
export interface ICClientHeaderOverwatchEvidence {

    /** CClientHeaderOverwatchEvidence accountid */
    accountid?: (number|null);

    /** CClientHeaderOverwatchEvidence caseid */
    caseid?: (number|Long|null);
}

/** Represents a CClientHeaderOverwatchEvidence. */
export class CClientHeaderOverwatchEvidence implements ICClientHeaderOverwatchEvidence {

    /**
     * Constructs a new CClientHeaderOverwatchEvidence.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICClientHeaderOverwatchEvidence);

    /** CClientHeaderOverwatchEvidence accountid. */
    public accountid: number;

    /** CClientHeaderOverwatchEvidence caseid. */
    public caseid: (number|Long);

    /**
     * Decodes a CClientHeaderOverwatchEvidence message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CClientHeaderOverwatchEvidence
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CClientHeaderOverwatchEvidence;
}

/** Properties of a CMsgGCCStrike15_v2_GC2ClientTextMsg. */
export interface ICMsgGCCStrike15_v2_GC2ClientTextMsg {

    /** CMsgGCCStrike15_v2_GC2ClientTextMsg id */
    id?: (number|null);

    /** CMsgGCCStrike15_v2_GC2ClientTextMsg type */
    type?: (number|null);

    /** CMsgGCCStrike15_v2_GC2ClientTextMsg payload */
    payload?: (Uint8Array|null);
}

/** Represents a CMsgGCCStrike15_v2_GC2ClientTextMsg. */
export class CMsgGCCStrike15_v2_GC2ClientTextMsg implements ICMsgGCCStrike15_v2_GC2ClientTextMsg {

    /**
     * Constructs a new CMsgGCCStrike15_v2_GC2ClientTextMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_GC2ClientTextMsg);

    /** CMsgGCCStrike15_v2_GC2ClientTextMsg id. */
    public id: number;

    /** CMsgGCCStrike15_v2_GC2ClientTextMsg type. */
    public type: number;

    /** CMsgGCCStrike15_v2_GC2ClientTextMsg payload. */
    public payload: Uint8Array;

    /**
     * Decodes a CMsgGCCStrike15_v2_GC2ClientTextMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_GC2ClientTextMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_GC2ClientTextMsg;
}

/** Properties of a CMsgGCCStrike15_v2_Client2GCTextMsg. */
export interface ICMsgGCCStrike15_v2_Client2GCTextMsg {

    /** CMsgGCCStrike15_v2_Client2GCTextMsg id */
    id?: (number|null);

    /** CMsgGCCStrike15_v2_Client2GCTextMsg args */
    args?: (Uint8Array[]|null);
}

/** Represents a CMsgGCCStrike15_v2_Client2GCTextMsg. */
export class CMsgGCCStrike15_v2_Client2GCTextMsg implements ICMsgGCCStrike15_v2_Client2GCTextMsg {

    /**
     * Constructs a new CMsgGCCStrike15_v2_Client2GCTextMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_Client2GCTextMsg);

    /** CMsgGCCStrike15_v2_Client2GCTextMsg id. */
    public id: number;

    /** CMsgGCCStrike15_v2_Client2GCTextMsg args. */
    public args: Uint8Array[];

    /**
     * Decodes a CMsgGCCStrike15_v2_Client2GCTextMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_Client2GCTextMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_Client2GCTextMsg;
}

/** Properties of a CMsgGCCStrike15_v2_MatchEndRunRewardDrops. */
export interface ICMsgGCCStrike15_v2_MatchEndRunRewardDrops {

    /** CMsgGCCStrike15_v2_MatchEndRunRewardDrops serverinfo */
    serverinfo?: (ICMsgGCCStrike15_v2_MatchmakingServerReservationResponse|null);

    /** CMsgGCCStrike15_v2_MatchEndRunRewardDrops matchEndQuestData */
    matchEndQuestData?: (ICMsgGC_ServerQuestUpdateData|null);
}

/** Represents a CMsgGCCStrike15_v2_MatchEndRunRewardDrops. */
export class CMsgGCCStrike15_v2_MatchEndRunRewardDrops implements ICMsgGCCStrike15_v2_MatchEndRunRewardDrops {

    /**
     * Constructs a new CMsgGCCStrike15_v2_MatchEndRunRewardDrops.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_MatchEndRunRewardDrops);

    /** CMsgGCCStrike15_v2_MatchEndRunRewardDrops serverinfo. */
    public serverinfo?: (ICMsgGCCStrike15_v2_MatchmakingServerReservationResponse|null);

    /** CMsgGCCStrike15_v2_MatchEndRunRewardDrops matchEndQuestData. */
    public matchEndQuestData?: (ICMsgGC_ServerQuestUpdateData|null);

    /**
     * Decodes a CMsgGCCStrike15_v2_MatchEndRunRewardDrops message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_MatchEndRunRewardDrops
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_MatchEndRunRewardDrops;
}

/** Properties of a CEconItemPreviewDataBlock. */
export interface ICEconItemPreviewDataBlock {

    /** CEconItemPreviewDataBlock accountid */
    accountid?: (number|null);

    /** CEconItemPreviewDataBlock itemid */
    itemid?: (number|Long|null);

    /** CEconItemPreviewDataBlock defindex */
    defindex?: (number|null);

    /** CEconItemPreviewDataBlock paintindex */
    paintindex?: (number|null);

    /** CEconItemPreviewDataBlock rarity */
    rarity?: (number|null);

    /** CEconItemPreviewDataBlock quality */
    quality?: (number|null);

    /** CEconItemPreviewDataBlock paintwear */
    paintwear?: (number|null);

    /** CEconItemPreviewDataBlock paintseed */
    paintseed?: (number|null);

    /** CEconItemPreviewDataBlock killeaterscoretype */
    killeaterscoretype?: (number|null);

    /** CEconItemPreviewDataBlock killeatervalue */
    killeatervalue?: (number|null);

    /** CEconItemPreviewDataBlock customname */
    customname?: (string|null);

    /** CEconItemPreviewDataBlock stickers */
    stickers?: (CEconItemPreviewDataBlock.ISticker[]|null);

    /** CEconItemPreviewDataBlock inventory */
    inventory?: (number|null);

    /** CEconItemPreviewDataBlock origin */
    origin?: (number|null);

    /** CEconItemPreviewDataBlock questid */
    questid?: (number|null);

    /** CEconItemPreviewDataBlock dropreason */
    dropreason?: (number|null);
}

/** Represents a CEconItemPreviewDataBlock. */
export class CEconItemPreviewDataBlock implements ICEconItemPreviewDataBlock {

    /**
     * Constructs a new CEconItemPreviewDataBlock.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICEconItemPreviewDataBlock);

    /** CEconItemPreviewDataBlock accountid. */
    public accountid: number;

    /** CEconItemPreviewDataBlock itemid. */
    public itemid: (number|Long);

    /** CEconItemPreviewDataBlock defindex. */
    public defindex: number;

    /** CEconItemPreviewDataBlock paintindex. */
    public paintindex: number;

    /** CEconItemPreviewDataBlock rarity. */
    public rarity: number;

    /** CEconItemPreviewDataBlock quality. */
    public quality: number;

    /** CEconItemPreviewDataBlock paintwear. */
    public paintwear: number;

    /** CEconItemPreviewDataBlock paintseed. */
    public paintseed: number;

    /** CEconItemPreviewDataBlock killeaterscoretype. */
    public killeaterscoretype: number;

    /** CEconItemPreviewDataBlock killeatervalue. */
    public killeatervalue: number;

    /** CEconItemPreviewDataBlock customname. */
    public customname: string;

    /** CEconItemPreviewDataBlock stickers. */
    public stickers: CEconItemPreviewDataBlock.ISticker[];

    /** CEconItemPreviewDataBlock inventory. */
    public inventory: number;

    /** CEconItemPreviewDataBlock origin. */
    public origin: number;

    /** CEconItemPreviewDataBlock questid. */
    public questid: number;

    /** CEconItemPreviewDataBlock dropreason. */
    public dropreason: number;

    /**
     * Decodes a CEconItemPreviewDataBlock message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CEconItemPreviewDataBlock
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CEconItemPreviewDataBlock;
}

export namespace CEconItemPreviewDataBlock {

    /** Properties of a Sticker. */
    interface ISticker {

        /** Sticker slot */
        slot?: (number|null);

        /** Sticker stickerId */
        stickerId?: (number|null);

        /** Sticker wear */
        wear?: (number|null);

        /** Sticker scale */
        scale?: (number|null);

        /** Sticker rotation */
        rotation?: (number|null);
    }

    /** Represents a Sticker. */
    class Sticker implements ISticker {

        /**
         * Constructs a new Sticker.
         * @param [properties] Properties to set
         */
        constructor(properties?: CEconItemPreviewDataBlock.ISticker);

        /** Sticker slot. */
        public slot: number;

        /** Sticker stickerId. */
        public stickerId: number;

        /** Sticker wear. */
        public wear: number;

        /** Sticker scale. */
        public scale: number;

        /** Sticker rotation. */
        public rotation: number;

        /**
         * Decodes a Sticker message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Sticker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CEconItemPreviewDataBlock.Sticker;
    }
}

/** Properties of a CMsgGCCStrike15_v2_MatchEndRewardDropsNotification. */
export interface ICMsgGCCStrike15_v2_MatchEndRewardDropsNotification {

    /** CMsgGCCStrike15_v2_MatchEndRewardDropsNotification iteminfo */
    iteminfo?: (ICEconItemPreviewDataBlock|null);
}

/** Represents a CMsgGCCStrike15_v2_MatchEndRewardDropsNotification. */
export class CMsgGCCStrike15_v2_MatchEndRewardDropsNotification implements ICMsgGCCStrike15_v2_MatchEndRewardDropsNotification {

    /**
     * Constructs a new CMsgGCCStrike15_v2_MatchEndRewardDropsNotification.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_MatchEndRewardDropsNotification);

    /** CMsgGCCStrike15_v2_MatchEndRewardDropsNotification iteminfo. */
    public iteminfo?: (ICEconItemPreviewDataBlock|null);

    /**
     * Decodes a CMsgGCCStrike15_v2_MatchEndRewardDropsNotification message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_MatchEndRewardDropsNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_MatchEndRewardDropsNotification;
}

/** Properties of a CMsgItemAcknowledged. */
export interface ICMsgItemAcknowledged {

    /** CMsgItemAcknowledged iteminfo */
    iteminfo?: (ICEconItemPreviewDataBlock|null);
}

/** Represents a CMsgItemAcknowledged. */
export class CMsgItemAcknowledged implements ICMsgItemAcknowledged {

    /**
     * Constructs a new CMsgItemAcknowledged.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgItemAcknowledged);

    /** CMsgItemAcknowledged iteminfo. */
    public iteminfo?: (ICEconItemPreviewDataBlock|null);

    /**
     * Decodes a CMsgItemAcknowledged message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgItemAcknowledged
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgItemAcknowledged;
}

/** Properties of a CMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockRequest. */
export interface ICMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockRequest {

    /** CMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockRequest paramS */
    paramS?: (number|Long|null);

    /** CMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockRequest paramA */
    paramA?: (number|Long|null);

    /** CMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockRequest paramD */
    paramD?: (number|Long|null);

    /** CMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockRequest paramM */
    paramM?: (number|Long|null);
}

/** Represents a CMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockRequest. */
export class CMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockRequest implements ICMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockRequest {

    /**
     * Constructs a new CMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockRequest);

    /** CMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockRequest paramS. */
    public paramS: (number|Long);

    /** CMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockRequest paramA. */
    public paramA: (number|Long);

    /** CMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockRequest paramD. */
    public paramD: (number|Long);

    /** CMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockRequest paramM. */
    public paramM: (number|Long);

    /**
     * Decodes a CMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockRequest;
}

/** Properties of a CMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockResponse. */
export interface ICMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockResponse {

    /** CMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockResponse iteminfo */
    iteminfo?: (ICEconItemPreviewDataBlock|null);
}

/** Represents a CMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockResponse. */
export class CMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockResponse implements ICMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockResponse {

    /**
     * Constructs a new CMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockResponse);

    /** CMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockResponse iteminfo. */
    public iteminfo?: (ICEconItemPreviewDataBlock|null);

    /**
     * Decodes a CMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockResponse;
}

/** Properties of a CMsgGCCStrike15_v2_TournamentMatchRewardDropsNotification. */
export interface ICMsgGCCStrike15_v2_TournamentMatchRewardDropsNotification {

    /** CMsgGCCStrike15_v2_TournamentMatchRewardDropsNotification matchId */
    matchId?: (number|Long|null);

    /** CMsgGCCStrike15_v2_TournamentMatchRewardDropsNotification defindex */
    defindex?: (number|null);

    /** CMsgGCCStrike15_v2_TournamentMatchRewardDropsNotification accountids */
    accountids?: (number[]|null);
}

/** Represents a CMsgGCCStrike15_v2_TournamentMatchRewardDropsNotification. */
export class CMsgGCCStrike15_v2_TournamentMatchRewardDropsNotification implements ICMsgGCCStrike15_v2_TournamentMatchRewardDropsNotification {

    /**
     * Constructs a new CMsgGCCStrike15_v2_TournamentMatchRewardDropsNotification.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_TournamentMatchRewardDropsNotification);

    /** CMsgGCCStrike15_v2_TournamentMatchRewardDropsNotification matchId. */
    public matchId: (number|Long);

    /** CMsgGCCStrike15_v2_TournamentMatchRewardDropsNotification defindex. */
    public defindex: number;

    /** CMsgGCCStrike15_v2_TournamentMatchRewardDropsNotification accountids. */
    public accountids: number[];

    /**
     * Decodes a CMsgGCCStrike15_v2_TournamentMatchRewardDropsNotification message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_TournamentMatchRewardDropsNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_TournamentMatchRewardDropsNotification;
}

/** Properties of a CMsgGCCStrike15_v2_MatchListRequestCurrentLiveGames. */
export interface ICMsgGCCStrike15_v2_MatchListRequestCurrentLiveGames {
}

/** Represents a CMsgGCCStrike15_v2_MatchListRequestCurrentLiveGames. */
export class CMsgGCCStrike15_v2_MatchListRequestCurrentLiveGames implements ICMsgGCCStrike15_v2_MatchListRequestCurrentLiveGames {

    /**
     * Constructs a new CMsgGCCStrike15_v2_MatchListRequestCurrentLiveGames.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_MatchListRequestCurrentLiveGames);

    /**
     * Decodes a CMsgGCCStrike15_v2_MatchListRequestCurrentLiveGames message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_MatchListRequestCurrentLiveGames
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_MatchListRequestCurrentLiveGames;
}

/** Properties of a CMsgGCCStrike15_v2_MatchListRequestLiveGameForUser. */
export interface ICMsgGCCStrike15_v2_MatchListRequestLiveGameForUser {

    /** CMsgGCCStrike15_v2_MatchListRequestLiveGameForUser accountid */
    accountid?: (number|null);
}

/** Represents a CMsgGCCStrike15_v2_MatchListRequestLiveGameForUser. */
export class CMsgGCCStrike15_v2_MatchListRequestLiveGameForUser implements ICMsgGCCStrike15_v2_MatchListRequestLiveGameForUser {

    /**
     * Constructs a new CMsgGCCStrike15_v2_MatchListRequestLiveGameForUser.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_MatchListRequestLiveGameForUser);

    /** CMsgGCCStrike15_v2_MatchListRequestLiveGameForUser accountid. */
    public accountid: number;

    /**
     * Decodes a CMsgGCCStrike15_v2_MatchListRequestLiveGameForUser message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_MatchListRequestLiveGameForUser
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_MatchListRequestLiveGameForUser;
}

/** Properties of a CMsgGCCStrike15_v2_MatchListRequestRecentUserGames. */
export interface ICMsgGCCStrike15_v2_MatchListRequestRecentUserGames {

    /** CMsgGCCStrike15_v2_MatchListRequestRecentUserGames accountid */
    accountid?: (number|null);
}

/** Represents a CMsgGCCStrike15_v2_MatchListRequestRecentUserGames. */
export class CMsgGCCStrike15_v2_MatchListRequestRecentUserGames implements ICMsgGCCStrike15_v2_MatchListRequestRecentUserGames {

    /**
     * Constructs a new CMsgGCCStrike15_v2_MatchListRequestRecentUserGames.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_MatchListRequestRecentUserGames);

    /** CMsgGCCStrike15_v2_MatchListRequestRecentUserGames accountid. */
    public accountid: number;

    /**
     * Decodes a CMsgGCCStrike15_v2_MatchListRequestRecentUserGames message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_MatchListRequestRecentUserGames
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_MatchListRequestRecentUserGames;
}

/** Properties of a CMsgGCCStrike15_v2_MatchListRequestTournamentGames. */
export interface ICMsgGCCStrike15_v2_MatchListRequestTournamentGames {

    /** CMsgGCCStrike15_v2_MatchListRequestTournamentGames eventid */
    eventid?: (number|null);
}

/** Represents a CMsgGCCStrike15_v2_MatchListRequestTournamentGames. */
export class CMsgGCCStrike15_v2_MatchListRequestTournamentGames implements ICMsgGCCStrike15_v2_MatchListRequestTournamentGames {

    /**
     * Constructs a new CMsgGCCStrike15_v2_MatchListRequestTournamentGames.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_MatchListRequestTournamentGames);

    /** CMsgGCCStrike15_v2_MatchListRequestTournamentGames eventid. */
    public eventid: number;

    /**
     * Decodes a CMsgGCCStrike15_v2_MatchListRequestTournamentGames message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_MatchListRequestTournamentGames
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_MatchListRequestTournamentGames;
}

/** Properties of a CMsgGCCStrike15_v2_MatchListRequestFullGameInfo. */
export interface ICMsgGCCStrike15_v2_MatchListRequestFullGameInfo {

    /** CMsgGCCStrike15_v2_MatchListRequestFullGameInfo matchid */
    matchid?: (number|Long|null);

    /** CMsgGCCStrike15_v2_MatchListRequestFullGameInfo outcomeid */
    outcomeid?: (number|Long|null);

    /** CMsgGCCStrike15_v2_MatchListRequestFullGameInfo token */
    token?: (number|null);
}

/** Represents a CMsgGCCStrike15_v2_MatchListRequestFullGameInfo. */
export class CMsgGCCStrike15_v2_MatchListRequestFullGameInfo implements ICMsgGCCStrike15_v2_MatchListRequestFullGameInfo {

    /**
     * Constructs a new CMsgGCCStrike15_v2_MatchListRequestFullGameInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_MatchListRequestFullGameInfo);

    /** CMsgGCCStrike15_v2_MatchListRequestFullGameInfo matchid. */
    public matchid: (number|Long);

    /** CMsgGCCStrike15_v2_MatchListRequestFullGameInfo outcomeid. */
    public outcomeid: (number|Long);

    /** CMsgGCCStrike15_v2_MatchListRequestFullGameInfo token. */
    public token: number;

    /**
     * Decodes a CMsgGCCStrike15_v2_MatchListRequestFullGameInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_MatchListRequestFullGameInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_MatchListRequestFullGameInfo;
}

/** Properties of a CDataGCCStrike15_v2_MatchInfo. */
export interface ICDataGCCStrike15_v2_MatchInfo {

    /** CDataGCCStrike15_v2_MatchInfo matchid */
    matchid?: (number|Long|null);

    /** CDataGCCStrike15_v2_MatchInfo matchtime */
    matchtime?: (number|null);

    /** CDataGCCStrike15_v2_MatchInfo watchablematchinfo */
    watchablematchinfo?: (IWatchableMatchInfo|null);

    /** CDataGCCStrike15_v2_MatchInfo roundstatsLegacy */
    roundstatsLegacy?: (ICMsgGCCStrike15_v2_MatchmakingServerRoundStats|null);

    /** CDataGCCStrike15_v2_MatchInfo roundstatsall */
    roundstatsall?: (ICMsgGCCStrike15_v2_MatchmakingServerRoundStats[]|null);
}

/** Represents a CDataGCCStrike15_v2_MatchInfo. */
export class CDataGCCStrike15_v2_MatchInfo implements ICDataGCCStrike15_v2_MatchInfo {

    /**
     * Constructs a new CDataGCCStrike15_v2_MatchInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICDataGCCStrike15_v2_MatchInfo);

    /** CDataGCCStrike15_v2_MatchInfo matchid. */
    public matchid: (number|Long);

    /** CDataGCCStrike15_v2_MatchInfo matchtime. */
    public matchtime: number;

    /** CDataGCCStrike15_v2_MatchInfo watchablematchinfo. */
    public watchablematchinfo?: (IWatchableMatchInfo|null);

    /** CDataGCCStrike15_v2_MatchInfo roundstatsLegacy. */
    public roundstatsLegacy?: (ICMsgGCCStrike15_v2_MatchmakingServerRoundStats|null);

    /** CDataGCCStrike15_v2_MatchInfo roundstatsall. */
    public roundstatsall: ICMsgGCCStrike15_v2_MatchmakingServerRoundStats[];

    /**
     * Decodes a CDataGCCStrike15_v2_MatchInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CDataGCCStrike15_v2_MatchInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CDataGCCStrike15_v2_MatchInfo;
}

/** Properties of a CDataGCCStrike15_v2_TournamentGroupTeam. */
export interface ICDataGCCStrike15_v2_TournamentGroupTeam {

    /** CDataGCCStrike15_v2_TournamentGroupTeam teamId */
    teamId?: (number|null);

    /** CDataGCCStrike15_v2_TournamentGroupTeam score */
    score?: (number|null);

    /** CDataGCCStrike15_v2_TournamentGroupTeam correctpick */
    correctpick?: (boolean|null);
}

/** Represents a CDataGCCStrike15_v2_TournamentGroupTeam. */
export class CDataGCCStrike15_v2_TournamentGroupTeam implements ICDataGCCStrike15_v2_TournamentGroupTeam {

    /**
     * Constructs a new CDataGCCStrike15_v2_TournamentGroupTeam.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICDataGCCStrike15_v2_TournamentGroupTeam);

    /** CDataGCCStrike15_v2_TournamentGroupTeam teamId. */
    public teamId: number;

    /** CDataGCCStrike15_v2_TournamentGroupTeam score. */
    public score: number;

    /** CDataGCCStrike15_v2_TournamentGroupTeam correctpick. */
    public correctpick: boolean;

    /**
     * Decodes a CDataGCCStrike15_v2_TournamentGroupTeam message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CDataGCCStrike15_v2_TournamentGroupTeam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CDataGCCStrike15_v2_TournamentGroupTeam;
}

/** Properties of a CDataGCCStrike15_v2_TournamentGroup. */
export interface ICDataGCCStrike15_v2_TournamentGroup {

    /** CDataGCCStrike15_v2_TournamentGroup groupid */
    groupid?: (number|null);

    /** CDataGCCStrike15_v2_TournamentGroup name */
    name?: (string|null);

    /** CDataGCCStrike15_v2_TournamentGroup desc */
    desc?: (string|null);

    /** CDataGCCStrike15_v2_TournamentGroup picks_Deprecated */
    picks_Deprecated?: (number|null);

    /** CDataGCCStrike15_v2_TournamentGroup teams */
    teams?: (ICDataGCCStrike15_v2_TournamentGroupTeam[]|null);

    /** CDataGCCStrike15_v2_TournamentGroup stageIds */
    stageIds?: (number[]|null);

    /** CDataGCCStrike15_v2_TournamentGroup picklockuntiltime */
    picklockuntiltime?: (number|null);

    /** CDataGCCStrike15_v2_TournamentGroup pickableteams */
    pickableteams?: (number|null);

    /** CDataGCCStrike15_v2_TournamentGroup pointsPerPick */
    pointsPerPick?: (number|null);

    /** CDataGCCStrike15_v2_TournamentGroup picks */
    picks?: (CDataGCCStrike15_v2_TournamentGroup.IPicks[]|null);
}

/** Represents a CDataGCCStrike15_v2_TournamentGroup. */
export class CDataGCCStrike15_v2_TournamentGroup implements ICDataGCCStrike15_v2_TournamentGroup {

    /**
     * Constructs a new CDataGCCStrike15_v2_TournamentGroup.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICDataGCCStrike15_v2_TournamentGroup);

    /** CDataGCCStrike15_v2_TournamentGroup groupid. */
    public groupid: number;

    /** CDataGCCStrike15_v2_TournamentGroup name. */
    public name: string;

    /** CDataGCCStrike15_v2_TournamentGroup desc. */
    public desc: string;

    /** CDataGCCStrike15_v2_TournamentGroup picks_Deprecated. */
    public picks_Deprecated: number;

    /** CDataGCCStrike15_v2_TournamentGroup teams. */
    public teams: ICDataGCCStrike15_v2_TournamentGroupTeam[];

    /** CDataGCCStrike15_v2_TournamentGroup stageIds. */
    public stageIds: number[];

    /** CDataGCCStrike15_v2_TournamentGroup picklockuntiltime. */
    public picklockuntiltime: number;

    /** CDataGCCStrike15_v2_TournamentGroup pickableteams. */
    public pickableteams: number;

    /** CDataGCCStrike15_v2_TournamentGroup pointsPerPick. */
    public pointsPerPick: number;

    /** CDataGCCStrike15_v2_TournamentGroup picks. */
    public picks: CDataGCCStrike15_v2_TournamentGroup.IPicks[];

    /**
     * Decodes a CDataGCCStrike15_v2_TournamentGroup message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CDataGCCStrike15_v2_TournamentGroup
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CDataGCCStrike15_v2_TournamentGroup;
}

export namespace CDataGCCStrike15_v2_TournamentGroup {

    /** Properties of a Picks. */
    interface IPicks {

        /** Picks pickids */
        pickids?: (number[]|null);
    }

    /** Represents a Picks. */
    class Picks implements IPicks {

        /**
         * Constructs a new Picks.
         * @param [properties] Properties to set
         */
        constructor(properties?: CDataGCCStrike15_v2_TournamentGroup.IPicks);

        /** Picks pickids. */
        public pickids: number[];

        /**
         * Decodes a Picks message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Picks
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CDataGCCStrike15_v2_TournamentGroup.Picks;
    }
}

/** Properties of a CDataGCCStrike15_v2_TournamentSection. */
export interface ICDataGCCStrike15_v2_TournamentSection {

    /** CDataGCCStrike15_v2_TournamentSection sectionid */
    sectionid?: (number|null);

    /** CDataGCCStrike15_v2_TournamentSection name */
    name?: (string|null);

    /** CDataGCCStrike15_v2_TournamentSection desc */
    desc?: (string|null);

    /** CDataGCCStrike15_v2_TournamentSection groups */
    groups?: (ICDataGCCStrike15_v2_TournamentGroup[]|null);
}

/** Represents a CDataGCCStrike15_v2_TournamentSection. */
export class CDataGCCStrike15_v2_TournamentSection implements ICDataGCCStrike15_v2_TournamentSection {

    /**
     * Constructs a new CDataGCCStrike15_v2_TournamentSection.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICDataGCCStrike15_v2_TournamentSection);

    /** CDataGCCStrike15_v2_TournamentSection sectionid. */
    public sectionid: number;

    /** CDataGCCStrike15_v2_TournamentSection name. */
    public name: string;

    /** CDataGCCStrike15_v2_TournamentSection desc. */
    public desc: string;

    /** CDataGCCStrike15_v2_TournamentSection groups. */
    public groups: ICDataGCCStrike15_v2_TournamentGroup[];

    /**
     * Decodes a CDataGCCStrike15_v2_TournamentSection message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CDataGCCStrike15_v2_TournamentSection
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CDataGCCStrike15_v2_TournamentSection;
}

/** Properties of a CDataGCCStrike15_v2_TournamentInfo. */
export interface ICDataGCCStrike15_v2_TournamentInfo {

    /** CDataGCCStrike15_v2_TournamentInfo sections */
    sections?: (ICDataGCCStrike15_v2_TournamentSection[]|null);

    /** CDataGCCStrike15_v2_TournamentInfo tournamentEvent */
    tournamentEvent?: (ITournamentEvent|null);

    /** CDataGCCStrike15_v2_TournamentInfo tournamentTeams */
    tournamentTeams?: (ITournamentTeam[]|null);
}

/** Represents a CDataGCCStrike15_v2_TournamentInfo. */
export class CDataGCCStrike15_v2_TournamentInfo implements ICDataGCCStrike15_v2_TournamentInfo {

    /**
     * Constructs a new CDataGCCStrike15_v2_TournamentInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICDataGCCStrike15_v2_TournamentInfo);

    /** CDataGCCStrike15_v2_TournamentInfo sections. */
    public sections: ICDataGCCStrike15_v2_TournamentSection[];

    /** CDataGCCStrike15_v2_TournamentInfo tournamentEvent. */
    public tournamentEvent?: (ITournamentEvent|null);

    /** CDataGCCStrike15_v2_TournamentInfo tournamentTeams. */
    public tournamentTeams: ITournamentTeam[];

    /**
     * Decodes a CDataGCCStrike15_v2_TournamentInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CDataGCCStrike15_v2_TournamentInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CDataGCCStrike15_v2_TournamentInfo;
}

/** Properties of a CMsgGCCStrike15_v2_MatchList. */
export interface ICMsgGCCStrike15_v2_MatchList {

    /** CMsgGCCStrike15_v2_MatchList msgrequestid */
    msgrequestid?: (number|null);

    /** CMsgGCCStrike15_v2_MatchList accountid */
    accountid?: (number|null);

    /** CMsgGCCStrike15_v2_MatchList servertime */
    servertime?: (number|null);

    /** CMsgGCCStrike15_v2_MatchList matches */
    matches?: (ICDataGCCStrike15_v2_MatchInfo[]|null);

    /** CMsgGCCStrike15_v2_MatchList streams */
    streams?: (ITournamentTeam[]|null);

    /** CMsgGCCStrike15_v2_MatchList tournamentinfo */
    tournamentinfo?: (ICDataGCCStrike15_v2_TournamentInfo|null);
}

/** Represents a CMsgGCCStrike15_v2_MatchList. */
export class CMsgGCCStrike15_v2_MatchList implements ICMsgGCCStrike15_v2_MatchList {

    /**
     * Constructs a new CMsgGCCStrike15_v2_MatchList.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_MatchList);

    /** CMsgGCCStrike15_v2_MatchList msgrequestid. */
    public msgrequestid: number;

    /** CMsgGCCStrike15_v2_MatchList accountid. */
    public accountid: number;

    /** CMsgGCCStrike15_v2_MatchList servertime. */
    public servertime: number;

    /** CMsgGCCStrike15_v2_MatchList matches. */
    public matches: ICDataGCCStrike15_v2_MatchInfo[];

    /** CMsgGCCStrike15_v2_MatchList streams. */
    public streams: ITournamentTeam[];

    /** CMsgGCCStrike15_v2_MatchList tournamentinfo. */
    public tournamentinfo?: (ICDataGCCStrike15_v2_TournamentInfo|null);

    /**
     * Decodes a CMsgGCCStrike15_v2_MatchList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_MatchList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_MatchList;
}

/** Properties of a CMsgGCCStrike15_v2_Predictions. */
export interface ICMsgGCCStrike15_v2_Predictions {

    /** CMsgGCCStrike15_v2_Predictions eventId */
    eventId?: (number|null);

    /** CMsgGCCStrike15_v2_Predictions groupMatchTeamPicks */
    groupMatchTeamPicks?: (CMsgGCCStrike15_v2_Predictions.IGroupMatchTeamPick[]|null);
}

/** Represents a CMsgGCCStrike15_v2_Predictions. */
export class CMsgGCCStrike15_v2_Predictions implements ICMsgGCCStrike15_v2_Predictions {

    /**
     * Constructs a new CMsgGCCStrike15_v2_Predictions.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_Predictions);

    /** CMsgGCCStrike15_v2_Predictions eventId. */
    public eventId: number;

    /** CMsgGCCStrike15_v2_Predictions groupMatchTeamPicks. */
    public groupMatchTeamPicks: CMsgGCCStrike15_v2_Predictions.IGroupMatchTeamPick[];

    /**
     * Decodes a CMsgGCCStrike15_v2_Predictions message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_Predictions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_Predictions;
}

export namespace CMsgGCCStrike15_v2_Predictions {

    /** Properties of a GroupMatchTeamPick. */
    interface IGroupMatchTeamPick {

        /** GroupMatchTeamPick sectionid */
        sectionid?: (number|null);

        /** GroupMatchTeamPick groupid */
        groupid?: (number|null);

        /** GroupMatchTeamPick index */
        index?: (number|null);

        /** GroupMatchTeamPick teamid */
        teamid?: (number|null);

        /** GroupMatchTeamPick itemid */
        itemid?: (number|Long|null);
    }

    /** Represents a GroupMatchTeamPick. */
    class GroupMatchTeamPick implements IGroupMatchTeamPick {

        /**
         * Constructs a new GroupMatchTeamPick.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgGCCStrike15_v2_Predictions.IGroupMatchTeamPick);

        /** GroupMatchTeamPick sectionid. */
        public sectionid: number;

        /** GroupMatchTeamPick groupid. */
        public groupid: number;

        /** GroupMatchTeamPick index. */
        public index: number;

        /** GroupMatchTeamPick teamid. */
        public teamid: number;

        /** GroupMatchTeamPick itemid. */
        public itemid: (number|Long);

        /**
         * Decodes a GroupMatchTeamPick message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GroupMatchTeamPick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_Predictions.GroupMatchTeamPick;
    }
}

/** Properties of a CMsgGCCStrike15_v2_Fantasy. */
export interface ICMsgGCCStrike15_v2_Fantasy {

    /** CMsgGCCStrike15_v2_Fantasy eventId */
    eventId?: (number|null);

    /** CMsgGCCStrike15_v2_Fantasy teams */
    teams?: (CMsgGCCStrike15_v2_Fantasy.IFantasyTeam[]|null);
}

/** Represents a CMsgGCCStrike15_v2_Fantasy. */
export class CMsgGCCStrike15_v2_Fantasy implements ICMsgGCCStrike15_v2_Fantasy {

    /**
     * Constructs a new CMsgGCCStrike15_v2_Fantasy.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_Fantasy);

    /** CMsgGCCStrike15_v2_Fantasy eventId. */
    public eventId: number;

    /** CMsgGCCStrike15_v2_Fantasy teams. */
    public teams: CMsgGCCStrike15_v2_Fantasy.IFantasyTeam[];

    /**
     * Decodes a CMsgGCCStrike15_v2_Fantasy message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_Fantasy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_Fantasy;
}

export namespace CMsgGCCStrike15_v2_Fantasy {

    /** Properties of a FantasySlot. */
    interface IFantasySlot {

        /** FantasySlot type */
        type?: (number|null);

        /** FantasySlot pick */
        pick?: (number|null);

        /** FantasySlot itemid */
        itemid?: (number|Long|null);
    }

    /** Represents a FantasySlot. */
    class FantasySlot implements IFantasySlot {

        /**
         * Constructs a new FantasySlot.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgGCCStrike15_v2_Fantasy.IFantasySlot);

        /** FantasySlot type. */
        public type: number;

        /** FantasySlot pick. */
        public pick: number;

        /** FantasySlot itemid. */
        public itemid: (number|Long);

        /**
         * Decodes a FantasySlot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FantasySlot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_Fantasy.FantasySlot;
    }

    /** Properties of a FantasyTeam. */
    interface IFantasyTeam {

        /** FantasyTeam sectionid */
        sectionid?: (number|null);

        /** FantasyTeam slots */
        slots?: (CMsgGCCStrike15_v2_Fantasy.IFantasySlot[]|null);
    }

    /** Represents a FantasyTeam. */
    class FantasyTeam implements IFantasyTeam {

        /**
         * Constructs a new FantasyTeam.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgGCCStrike15_v2_Fantasy.IFantasyTeam);

        /** FantasyTeam sectionid. */
        public sectionid: number;

        /** FantasyTeam slots. */
        public slots: CMsgGCCStrike15_v2_Fantasy.IFantasySlot[];

        /**
         * Decodes a FantasyTeam message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FantasyTeam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_Fantasy.FantasyTeam;
    }
}

/** Properties of a CAttribute_String. */
export interface ICAttribute_String {

    /** CAttribute_String value */
    value?: (string|null);
}

/** Represents a CAttribute_String. */
export class CAttribute_String implements ICAttribute_String {

    /**
     * Constructs a new CAttribute_String.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICAttribute_String);

    /** CAttribute_String value. */
    public value: string;

    /**
     * Decodes a CAttribute_String message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CAttribute_String
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CAttribute_String;
}

/** Properties of a CMsgGCToGCReloadVersions. */
export interface ICMsgGCToGCReloadVersions {
}

/** Represents a CMsgGCToGCReloadVersions. */
export class CMsgGCToGCReloadVersions implements ICMsgGCToGCReloadVersions {

    /**
     * Constructs a new CMsgGCToGCReloadVersions.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCToGCReloadVersions);

    /**
     * Decodes a CMsgGCToGCReloadVersions message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCToGCReloadVersions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCToGCReloadVersions;
}

/** Properties of a CMsgCStrike15Welcome. */
export interface ICMsgCStrike15Welcome {

    /** CMsgCStrike15Welcome storeItemHash */
    storeItemHash?: (number|null);

    /** CMsgCStrike15Welcome timeplayedconsecutively */
    timeplayedconsecutively?: (number|null);

    /** CMsgCStrike15Welcome timeFirstPlayed */
    timeFirstPlayed?: (number|null);

    /** CMsgCStrike15Welcome lastTimePlayed */
    lastTimePlayed?: (number|null);

    /** CMsgCStrike15Welcome lastIpAddress */
    lastIpAddress?: (number|null);

    /** CMsgCStrike15Welcome gscookieid */
    gscookieid?: (number|Long|null);

    /** CMsgCStrike15Welcome uniqueid */
    uniqueid?: (number|Long|null);
}

/** Represents a CMsgCStrike15Welcome. */
export class CMsgCStrike15Welcome implements ICMsgCStrike15Welcome {

    /**
     * Constructs a new CMsgCStrike15Welcome.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgCStrike15Welcome);

    /** CMsgCStrike15Welcome storeItemHash. */
    public storeItemHash: number;

    /** CMsgCStrike15Welcome timeplayedconsecutively. */
    public timeplayedconsecutively: number;

    /** CMsgCStrike15Welcome timeFirstPlayed. */
    public timeFirstPlayed: number;

    /** CMsgCStrike15Welcome lastTimePlayed. */
    public lastTimePlayed: number;

    /** CMsgCStrike15Welcome lastIpAddress. */
    public lastIpAddress: number;

    /** CMsgCStrike15Welcome gscookieid. */
    public gscookieid: (number|Long);

    /** CMsgCStrike15Welcome uniqueid. */
    public uniqueid: (number|Long);

    /**
     * Decodes a CMsgCStrike15Welcome message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgCStrike15Welcome
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgCStrike15Welcome;
}

/** Properties of a CMsgGCCStrike15_v2_ClientVarValueNotificationInfo. */
export interface ICMsgGCCStrike15_v2_ClientVarValueNotificationInfo {

    /** CMsgGCCStrike15_v2_ClientVarValueNotificationInfo valueName */
    valueName?: (string|null);

    /** CMsgGCCStrike15_v2_ClientVarValueNotificationInfo valueInt */
    valueInt?: (number|null);

    /** CMsgGCCStrike15_v2_ClientVarValueNotificationInfo serverAddr */
    serverAddr?: (number|null);

    /** CMsgGCCStrike15_v2_ClientVarValueNotificationInfo serverPort */
    serverPort?: (number|null);

    /** CMsgGCCStrike15_v2_ClientVarValueNotificationInfo chokedBlocks */
    chokedBlocks?: (string[]|null);
}

/** Represents a CMsgGCCStrike15_v2_ClientVarValueNotificationInfo. */
export class CMsgGCCStrike15_v2_ClientVarValueNotificationInfo implements ICMsgGCCStrike15_v2_ClientVarValueNotificationInfo {

    /**
     * Constructs a new CMsgGCCStrike15_v2_ClientVarValueNotificationInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_ClientVarValueNotificationInfo);

    /** CMsgGCCStrike15_v2_ClientVarValueNotificationInfo valueName. */
    public valueName: string;

    /** CMsgGCCStrike15_v2_ClientVarValueNotificationInfo valueInt. */
    public valueInt: number;

    /** CMsgGCCStrike15_v2_ClientVarValueNotificationInfo serverAddr. */
    public serverAddr: number;

    /** CMsgGCCStrike15_v2_ClientVarValueNotificationInfo serverPort. */
    public serverPort: number;

    /** CMsgGCCStrike15_v2_ClientVarValueNotificationInfo chokedBlocks. */
    public chokedBlocks: string[];

    /**
     * Decodes a CMsgGCCStrike15_v2_ClientVarValueNotificationInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_ClientVarValueNotificationInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_ClientVarValueNotificationInfo;
}

/** Properties of a CMsgGCCStrike15_v2_ServerVarValueNotificationInfo. */
export interface ICMsgGCCStrike15_v2_ServerVarValueNotificationInfo {

    /** CMsgGCCStrike15_v2_ServerVarValueNotificationInfo accountid */
    accountid?: (number|null);

    /** CMsgGCCStrike15_v2_ServerVarValueNotificationInfo viewangles */
    viewangles?: (number[]|null);

    /** CMsgGCCStrike15_v2_ServerVarValueNotificationInfo type */
    type?: (number|null);
}

/** Represents a CMsgGCCStrike15_v2_ServerVarValueNotificationInfo. */
export class CMsgGCCStrike15_v2_ServerVarValueNotificationInfo implements ICMsgGCCStrike15_v2_ServerVarValueNotificationInfo {

    /**
     * Constructs a new CMsgGCCStrike15_v2_ServerVarValueNotificationInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_ServerVarValueNotificationInfo);

    /** CMsgGCCStrike15_v2_ServerVarValueNotificationInfo accountid. */
    public accountid: number;

    /** CMsgGCCStrike15_v2_ServerVarValueNotificationInfo viewangles. */
    public viewangles: number[];

    /** CMsgGCCStrike15_v2_ServerVarValueNotificationInfo type. */
    public type: number;

    /**
     * Decodes a CMsgGCCStrike15_v2_ServerVarValueNotificationInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_ServerVarValueNotificationInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_ServerVarValueNotificationInfo;
}

/** Properties of a CMsgGCCStrike15_v2_GiftsLeaderboardRequest. */
export interface ICMsgGCCStrike15_v2_GiftsLeaderboardRequest {
}

/** Represents a CMsgGCCStrike15_v2_GiftsLeaderboardRequest. */
export class CMsgGCCStrike15_v2_GiftsLeaderboardRequest implements ICMsgGCCStrike15_v2_GiftsLeaderboardRequest {

    /**
     * Constructs a new CMsgGCCStrike15_v2_GiftsLeaderboardRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_GiftsLeaderboardRequest);

    /**
     * Decodes a CMsgGCCStrike15_v2_GiftsLeaderboardRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_GiftsLeaderboardRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_GiftsLeaderboardRequest;
}

/** Properties of a CMsgGCCStrike15_v2_GiftsLeaderboardResponse. */
export interface ICMsgGCCStrike15_v2_GiftsLeaderboardResponse {

    /** CMsgGCCStrike15_v2_GiftsLeaderboardResponse servertime */
    servertime?: (number|null);

    /** CMsgGCCStrike15_v2_GiftsLeaderboardResponse timePeriodSeconds */
    timePeriodSeconds?: (number|null);

    /** CMsgGCCStrike15_v2_GiftsLeaderboardResponse totalGiftsGiven */
    totalGiftsGiven?: (number|null);

    /** CMsgGCCStrike15_v2_GiftsLeaderboardResponse totalGivers */
    totalGivers?: (number|null);

    /** CMsgGCCStrike15_v2_GiftsLeaderboardResponse entries */
    entries?: (CMsgGCCStrike15_v2_GiftsLeaderboardResponse.IGiftLeaderboardEntry[]|null);
}

/** Represents a CMsgGCCStrike15_v2_GiftsLeaderboardResponse. */
export class CMsgGCCStrike15_v2_GiftsLeaderboardResponse implements ICMsgGCCStrike15_v2_GiftsLeaderboardResponse {

    /**
     * Constructs a new CMsgGCCStrike15_v2_GiftsLeaderboardResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_GiftsLeaderboardResponse);

    /** CMsgGCCStrike15_v2_GiftsLeaderboardResponse servertime. */
    public servertime: number;

    /** CMsgGCCStrike15_v2_GiftsLeaderboardResponse timePeriodSeconds. */
    public timePeriodSeconds: number;

    /** CMsgGCCStrike15_v2_GiftsLeaderboardResponse totalGiftsGiven. */
    public totalGiftsGiven: number;

    /** CMsgGCCStrike15_v2_GiftsLeaderboardResponse totalGivers. */
    public totalGivers: number;

    /** CMsgGCCStrike15_v2_GiftsLeaderboardResponse entries. */
    public entries: CMsgGCCStrike15_v2_GiftsLeaderboardResponse.IGiftLeaderboardEntry[];

    /**
     * Decodes a CMsgGCCStrike15_v2_GiftsLeaderboardResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_GiftsLeaderboardResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_GiftsLeaderboardResponse;
}

export namespace CMsgGCCStrike15_v2_GiftsLeaderboardResponse {

    /** Properties of a GiftLeaderboardEntry. */
    interface IGiftLeaderboardEntry {

        /** GiftLeaderboardEntry accountid */
        accountid?: (number|null);

        /** GiftLeaderboardEntry gifts */
        gifts?: (number|null);
    }

    /** Represents a GiftLeaderboardEntry. */
    class GiftLeaderboardEntry implements IGiftLeaderboardEntry {

        /**
         * Constructs a new GiftLeaderboardEntry.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgGCCStrike15_v2_GiftsLeaderboardResponse.IGiftLeaderboardEntry);

        /** GiftLeaderboardEntry accountid. */
        public accountid: number;

        /** GiftLeaderboardEntry gifts. */
        public gifts: number;

        /**
         * Decodes a GiftLeaderboardEntry message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GiftLeaderboardEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_GiftsLeaderboardResponse.GiftLeaderboardEntry;
    }
}

/** Properties of a CMsgGCCStrike15_v2_ClientSubmitSurveyVote. */
export interface ICMsgGCCStrike15_v2_ClientSubmitSurveyVote {

    /** CMsgGCCStrike15_v2_ClientSubmitSurveyVote surveyId */
    surveyId?: (number|null);

    /** CMsgGCCStrike15_v2_ClientSubmitSurveyVote vote */
    vote?: (number|null);
}

/** Represents a CMsgGCCStrike15_v2_ClientSubmitSurveyVote. */
export class CMsgGCCStrike15_v2_ClientSubmitSurveyVote implements ICMsgGCCStrike15_v2_ClientSubmitSurveyVote {

    /**
     * Constructs a new CMsgGCCStrike15_v2_ClientSubmitSurveyVote.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_ClientSubmitSurveyVote);

    /** CMsgGCCStrike15_v2_ClientSubmitSurveyVote surveyId. */
    public surveyId: number;

    /** CMsgGCCStrike15_v2_ClientSubmitSurveyVote vote. */
    public vote: number;

    /**
     * Decodes a CMsgGCCStrike15_v2_ClientSubmitSurveyVote message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_ClientSubmitSurveyVote
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_ClientSubmitSurveyVote;
}

/** Properties of a CMsgGCCStrike15_v2_Server2GCClientValidate. */
export interface ICMsgGCCStrike15_v2_Server2GCClientValidate {

    /** CMsgGCCStrike15_v2_Server2GCClientValidate accountid */
    accountid?: (number|null);
}

/** Represents a CMsgGCCStrike15_v2_Server2GCClientValidate. */
export class CMsgGCCStrike15_v2_Server2GCClientValidate implements ICMsgGCCStrike15_v2_Server2GCClientValidate {

    /**
     * Constructs a new CMsgGCCStrike15_v2_Server2GCClientValidate.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_Server2GCClientValidate);

    /** CMsgGCCStrike15_v2_Server2GCClientValidate accountid. */
    public accountid: number;

    /**
     * Decodes a CMsgGCCStrike15_v2_Server2GCClientValidate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_Server2GCClientValidate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_Server2GCClientValidate;
}

/** Properties of a CMsgGCCStrike15_v2_Server2GCPureServerValidationFailure. */
export interface ICMsgGCCStrike15_v2_Server2GCPureServerValidationFailure {

    /** CMsgGCCStrike15_v2_Server2GCPureServerValidationFailure accountid */
    accountid?: (number|null);

    /** CMsgGCCStrike15_v2_Server2GCPureServerValidationFailure path */
    path?: (string|null);

    /** CMsgGCCStrike15_v2_Server2GCPureServerValidationFailure file */
    file?: (string|null);

    /** CMsgGCCStrike15_v2_Server2GCPureServerValidationFailure crc */
    crc?: (number|null);

    /** CMsgGCCStrike15_v2_Server2GCPureServerValidationFailure hash */
    hash?: (number|null);

    /** CMsgGCCStrike15_v2_Server2GCPureServerValidationFailure len */
    len?: (number|null);

    /** CMsgGCCStrike15_v2_Server2GCPureServerValidationFailure packNumber */
    packNumber?: (number|null);

    /** CMsgGCCStrike15_v2_Server2GCPureServerValidationFailure packFileId */
    packFileId?: (number|null);
}

/** Represents a CMsgGCCStrike15_v2_Server2GCPureServerValidationFailure. */
export class CMsgGCCStrike15_v2_Server2GCPureServerValidationFailure implements ICMsgGCCStrike15_v2_Server2GCPureServerValidationFailure {

    /**
     * Constructs a new CMsgGCCStrike15_v2_Server2GCPureServerValidationFailure.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_Server2GCPureServerValidationFailure);

    /** CMsgGCCStrike15_v2_Server2GCPureServerValidationFailure accountid. */
    public accountid: number;

    /** CMsgGCCStrike15_v2_Server2GCPureServerValidationFailure path. */
    public path: string;

    /** CMsgGCCStrike15_v2_Server2GCPureServerValidationFailure file. */
    public file: string;

    /** CMsgGCCStrike15_v2_Server2GCPureServerValidationFailure crc. */
    public crc: number;

    /** CMsgGCCStrike15_v2_Server2GCPureServerValidationFailure hash. */
    public hash: number;

    /** CMsgGCCStrike15_v2_Server2GCPureServerValidationFailure len. */
    public len: number;

    /** CMsgGCCStrike15_v2_Server2GCPureServerValidationFailure packNumber. */
    public packNumber: number;

    /** CMsgGCCStrike15_v2_Server2GCPureServerValidationFailure packFileId. */
    public packFileId: number;

    /**
     * Decodes a CMsgGCCStrike15_v2_Server2GCPureServerValidationFailure message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_Server2GCPureServerValidationFailure
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_Server2GCPureServerValidationFailure;
}

/** Properties of a CMsgGCCStrike15_v2_GC2ClientTournamentInfo. */
export interface ICMsgGCCStrike15_v2_GC2ClientTournamentInfo {

    /** CMsgGCCStrike15_v2_GC2ClientTournamentInfo eventid */
    eventid?: (number|null);

    /** CMsgGCCStrike15_v2_GC2ClientTournamentInfo stageid */
    stageid?: (number|null);

    /** CMsgGCCStrike15_v2_GC2ClientTournamentInfo gameType */
    gameType?: (number|null);

    /** CMsgGCCStrike15_v2_GC2ClientTournamentInfo teamids */
    teamids?: (number[]|null);
}

/** Represents a CMsgGCCStrike15_v2_GC2ClientTournamentInfo. */
export class CMsgGCCStrike15_v2_GC2ClientTournamentInfo implements ICMsgGCCStrike15_v2_GC2ClientTournamentInfo {

    /**
     * Constructs a new CMsgGCCStrike15_v2_GC2ClientTournamentInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_GC2ClientTournamentInfo);

    /** CMsgGCCStrike15_v2_GC2ClientTournamentInfo eventid. */
    public eventid: number;

    /** CMsgGCCStrike15_v2_GC2ClientTournamentInfo stageid. */
    public stageid: number;

    /** CMsgGCCStrike15_v2_GC2ClientTournamentInfo gameType. */
    public gameType: number;

    /** CMsgGCCStrike15_v2_GC2ClientTournamentInfo teamids. */
    public teamids: number[];

    /**
     * Decodes a CMsgGCCStrike15_v2_GC2ClientTournamentInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_GC2ClientTournamentInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_GC2ClientTournamentInfo;
}

/** Properties of a CSOEconCoupon. */
export interface ICSOEconCoupon {

    /** CSOEconCoupon entryid */
    entryid?: (number|null);

    /** CSOEconCoupon defidx */
    defidx?: (number|null);

    /** CSOEconCoupon expirationDate */
    expirationDate?: (number|null);
}

/** Represents a CSOEconCoupon. */
export class CSOEconCoupon implements ICSOEconCoupon {

    /**
     * Constructs a new CSOEconCoupon.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSOEconCoupon);

    /** CSOEconCoupon entryid. */
    public entryid: number;

    /** CSOEconCoupon defidx. */
    public defidx: number;

    /** CSOEconCoupon expirationDate. */
    public expirationDate: number;

    /**
     * Decodes a CSOEconCoupon message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSOEconCoupon
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSOEconCoupon;
}

/** Properties of a CSOQuestProgress. */
export interface ICSOQuestProgress {

    /** CSOQuestProgress questid */
    questid?: (number|null);

    /** CSOQuestProgress pointsRemaining */
    pointsRemaining?: (number|null);

    /** CSOQuestProgress bonusPoints */
    bonusPoints?: (number|null);
}

/** Represents a CSOQuestProgress. */
export class CSOQuestProgress implements ICSOQuestProgress {

    /**
     * Constructs a new CSOQuestProgress.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSOQuestProgress);

    /** CSOQuestProgress questid. */
    public questid: number;

    /** CSOQuestProgress pointsRemaining. */
    public pointsRemaining: number;

    /** CSOQuestProgress bonusPoints. */
    public bonusPoints: number;

    /**
     * Decodes a CSOQuestProgress message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSOQuestProgress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSOQuestProgress;
}

/** Properties of a CSOPersonaDataPublic. */
export interface ICSOPersonaDataPublic {

    /** CSOPersonaDataPublic playerLevel */
    playerLevel?: (number|null);

    /** CSOPersonaDataPublic commendation */
    commendation?: (IPlayerCommendationInfo|null);
}

/** Represents a CSOPersonaDataPublic. */
export class CSOPersonaDataPublic implements ICSOPersonaDataPublic {

    /**
     * Constructs a new CSOPersonaDataPublic.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSOPersonaDataPublic);

    /** CSOPersonaDataPublic playerLevel. */
    public playerLevel: number;

    /** CSOPersonaDataPublic commendation. */
    public commendation?: (IPlayerCommendationInfo|null);

    /**
     * Decodes a CSOPersonaDataPublic message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSOPersonaDataPublic
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSOPersonaDataPublic;
}

/** Properties of a CMsgGC_GlobalGame_Subscribe. */
export interface ICMsgGC_GlobalGame_Subscribe {

    /** CMsgGC_GlobalGame_Subscribe ticket */
    ticket?: (number|Long|null);
}

/** Represents a CMsgGC_GlobalGame_Subscribe. */
export class CMsgGC_GlobalGame_Subscribe implements ICMsgGC_GlobalGame_Subscribe {

    /**
     * Constructs a new CMsgGC_GlobalGame_Subscribe.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGC_GlobalGame_Subscribe);

    /** CMsgGC_GlobalGame_Subscribe ticket. */
    public ticket: (number|Long);

    /**
     * Decodes a CMsgGC_GlobalGame_Subscribe message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGC_GlobalGame_Subscribe
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGC_GlobalGame_Subscribe;
}

/** Properties of a CMsgGC_GlobalGame_Unsubscribe. */
export interface ICMsgGC_GlobalGame_Unsubscribe {

    /** CMsgGC_GlobalGame_Unsubscribe timeleft */
    timeleft?: (number|null);
}

/** Represents a CMsgGC_GlobalGame_Unsubscribe. */
export class CMsgGC_GlobalGame_Unsubscribe implements ICMsgGC_GlobalGame_Unsubscribe {

    /**
     * Constructs a new CMsgGC_GlobalGame_Unsubscribe.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGC_GlobalGame_Unsubscribe);

    /** CMsgGC_GlobalGame_Unsubscribe timeleft. */
    public timeleft: number;

    /**
     * Decodes a CMsgGC_GlobalGame_Unsubscribe message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGC_GlobalGame_Unsubscribe
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGC_GlobalGame_Unsubscribe;
}

/** Properties of a CMsgGC_GlobalGame_Play. */
export interface ICMsgGC_GlobalGame_Play {

    /** CMsgGC_GlobalGame_Play ticket */
    ticket?: (number|Long|null);

    /** CMsgGC_GlobalGame_Play gametimems */
    gametimems?: (number|null);

    /** CMsgGC_GlobalGame_Play msperpoint */
    msperpoint?: (number|null);
}

/** Represents a CMsgGC_GlobalGame_Play. */
export class CMsgGC_GlobalGame_Play implements ICMsgGC_GlobalGame_Play {

    /**
     * Constructs a new CMsgGC_GlobalGame_Play.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGC_GlobalGame_Play);

    /** CMsgGC_GlobalGame_Play ticket. */
    public ticket: (number|Long);

    /** CMsgGC_GlobalGame_Play gametimems. */
    public gametimems: number;

    /** CMsgGC_GlobalGame_Play msperpoint. */
    public msperpoint: number;

    /**
     * Decodes a CMsgGC_GlobalGame_Play message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGC_GlobalGame_Play
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGC_GlobalGame_Play;
}

/** Properties of a CMsgGCCStrike15_v2_AcknowledgePenalty. */
export interface ICMsgGCCStrike15_v2_AcknowledgePenalty {

    /** CMsgGCCStrike15_v2_AcknowledgePenalty acknowledged */
    acknowledged?: (number|null);
}

/** Represents a CMsgGCCStrike15_v2_AcknowledgePenalty. */
export class CMsgGCCStrike15_v2_AcknowledgePenalty implements ICMsgGCCStrike15_v2_AcknowledgePenalty {

    /**
     * Constructs a new CMsgGCCStrike15_v2_AcknowledgePenalty.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_AcknowledgePenalty);

    /** CMsgGCCStrike15_v2_AcknowledgePenalty acknowledged. */
    public acknowledged: number;

    /**
     * Decodes a CMsgGCCStrike15_v2_AcknowledgePenalty message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_AcknowledgePenalty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_AcknowledgePenalty;
}

/** Properties of a CMsgGCCStrike15_v2_Client2GCRequestPrestigeCoin. */
export interface ICMsgGCCStrike15_v2_Client2GCRequestPrestigeCoin {
}

/** Represents a CMsgGCCStrike15_v2_Client2GCRequestPrestigeCoin. */
export class CMsgGCCStrike15_v2_Client2GCRequestPrestigeCoin implements ICMsgGCCStrike15_v2_Client2GCRequestPrestigeCoin {

    /**
     * Constructs a new CMsgGCCStrike15_v2_Client2GCRequestPrestigeCoin.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_Client2GCRequestPrestigeCoin);

    /**
     * Decodes a CMsgGCCStrike15_v2_Client2GCRequestPrestigeCoin message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_Client2GCRequestPrestigeCoin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_Client2GCRequestPrestigeCoin;
}

/** Properties of a CMsgGCCStrike15_v2_Client2GCStreamUnlock. */
export interface ICMsgGCCStrike15_v2_Client2GCStreamUnlock {

    /** CMsgGCCStrike15_v2_Client2GCStreamUnlock ticket */
    ticket?: (number|Long|null);

    /** CMsgGCCStrike15_v2_Client2GCStreamUnlock os */
    os?: (number|null);
}

/** Represents a CMsgGCCStrike15_v2_Client2GCStreamUnlock. */
export class CMsgGCCStrike15_v2_Client2GCStreamUnlock implements ICMsgGCCStrike15_v2_Client2GCStreamUnlock {

    /**
     * Constructs a new CMsgGCCStrike15_v2_Client2GCStreamUnlock.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCStrike15_v2_Client2GCStreamUnlock);

    /** CMsgGCCStrike15_v2_Client2GCStreamUnlock ticket. */
    public ticket: (number|Long);

    /** CMsgGCCStrike15_v2_Client2GCStreamUnlock os. */
    public os: number;

    /**
     * Decodes a CMsgGCCStrike15_v2_Client2GCStreamUnlock message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCStrike15_v2_Client2GCStreamUnlock
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCStrike15_v2_Client2GCStreamUnlock;
}

/** GCProtoBufMsgSrc enum. */
export enum GCProtoBufMsgSrc {
    GCProtoBufMsgSrc_Unspecified = 0,
    GCProtoBufMsgSrc_FromSystem = 1,
    GCProtoBufMsgSrc_FromSteamID = 2,
    GCProtoBufMsgSrc_FromGC = 3,
    GCProtoBufMsgSrc_ReplySystem = 4
}

/** Properties of a CMsgProtoBufHeader. */
export interface ICMsgProtoBufHeader {

    /** CMsgProtoBufHeader clientSteamId */
    clientSteamId?: (number|Long|null);

    /** CMsgProtoBufHeader clientSessionId */
    clientSessionId?: (number|null);

    /** CMsgProtoBufHeader sourceAppId */
    sourceAppId?: (number|null);

    /** CMsgProtoBufHeader jobIdSource */
    jobIdSource?: (number|Long|null);

    /** CMsgProtoBufHeader jobIdTarget */
    jobIdTarget?: (number|Long|null);

    /** CMsgProtoBufHeader targetJobName */
    targetJobName?: (string|null);

    /** CMsgProtoBufHeader eresult */
    eresult?: (number|null);

    /** CMsgProtoBufHeader errorMessage */
    errorMessage?: (string|null);

    /** CMsgProtoBufHeader gcMsgSrc */
    gcMsgSrc?: (GCProtoBufMsgSrc|null);

    /** CMsgProtoBufHeader gcDirIndexSource */
    gcDirIndexSource?: (number|null);
}

/** Represents a CMsgProtoBufHeader. */
export class CMsgProtoBufHeader implements ICMsgProtoBufHeader {

    /**
     * Constructs a new CMsgProtoBufHeader.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgProtoBufHeader);

    /** CMsgProtoBufHeader clientSteamId. */
    public clientSteamId: (number|Long);

    /** CMsgProtoBufHeader clientSessionId. */
    public clientSessionId: number;

    /** CMsgProtoBufHeader sourceAppId. */
    public sourceAppId: number;

    /** CMsgProtoBufHeader jobIdSource. */
    public jobIdSource: (number|Long);

    /** CMsgProtoBufHeader jobIdTarget. */
    public jobIdTarget: (number|Long);

    /** CMsgProtoBufHeader targetJobName. */
    public targetJobName: string;

    /** CMsgProtoBufHeader eresult. */
    public eresult: number;

    /** CMsgProtoBufHeader errorMessage. */
    public errorMessage: string;

    /** CMsgProtoBufHeader gcMsgSrc. */
    public gcMsgSrc: GCProtoBufMsgSrc;

    /** CMsgProtoBufHeader gcDirIndexSource. */
    public gcDirIndexSource: number;

    /**
     * Decodes a CMsgProtoBufHeader message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgProtoBufHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgProtoBufHeader;
}

/** Properties of a CMsgWebAPIKey. */
export interface ICMsgWebAPIKey {

    /** CMsgWebAPIKey status */
    status?: (number|null);

    /** CMsgWebAPIKey accountId */
    accountId?: (number|null);

    /** CMsgWebAPIKey publisherGroupId */
    publisherGroupId?: (number|null);

    /** CMsgWebAPIKey keyId */
    keyId?: (number|null);

    /** CMsgWebAPIKey domain */
    domain?: (string|null);
}

/** Represents a CMsgWebAPIKey. */
export class CMsgWebAPIKey implements ICMsgWebAPIKey {

    /**
     * Constructs a new CMsgWebAPIKey.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgWebAPIKey);

    /** CMsgWebAPIKey status. */
    public status: number;

    /** CMsgWebAPIKey accountId. */
    public accountId: number;

    /** CMsgWebAPIKey publisherGroupId. */
    public publisherGroupId: number;

    /** CMsgWebAPIKey keyId. */
    public keyId: number;

    /** CMsgWebAPIKey domain. */
    public domain: string;

    /**
     * Decodes a CMsgWebAPIKey message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgWebAPIKey
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgWebAPIKey;
}

/** Properties of a CMsgHttpRequest. */
export interface ICMsgHttpRequest {

    /** CMsgHttpRequest requestMethod */
    requestMethod?: (number|null);

    /** CMsgHttpRequest hostname */
    hostname?: (string|null);

    /** CMsgHttpRequest url */
    url?: (string|null);

    /** CMsgHttpRequest headers */
    headers?: (CMsgHttpRequest.IRequestHeader[]|null);

    /** CMsgHttpRequest getParams */
    getParams?: (CMsgHttpRequest.IQueryParam[]|null);

    /** CMsgHttpRequest postParams */
    postParams?: (CMsgHttpRequest.IQueryParam[]|null);

    /** CMsgHttpRequest body */
    body?: (Uint8Array|null);

    /** CMsgHttpRequest absoluteTimeout */
    absoluteTimeout?: (number|null);
}

/** Represents a CMsgHttpRequest. */
export class CMsgHttpRequest implements ICMsgHttpRequest {

    /**
     * Constructs a new CMsgHttpRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgHttpRequest);

    /** CMsgHttpRequest requestMethod. */
    public requestMethod: number;

    /** CMsgHttpRequest hostname. */
    public hostname: string;

    /** CMsgHttpRequest url. */
    public url: string;

    /** CMsgHttpRequest headers. */
    public headers: CMsgHttpRequest.IRequestHeader[];

    /** CMsgHttpRequest getParams. */
    public getParams: CMsgHttpRequest.IQueryParam[];

    /** CMsgHttpRequest postParams. */
    public postParams: CMsgHttpRequest.IQueryParam[];

    /** CMsgHttpRequest body. */
    public body: Uint8Array;

    /** CMsgHttpRequest absoluteTimeout. */
    public absoluteTimeout: number;

    /**
     * Decodes a CMsgHttpRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgHttpRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgHttpRequest;
}

export namespace CMsgHttpRequest {

    /** Properties of a RequestHeader. */
    interface IRequestHeader {

        /** RequestHeader name */
        name?: (string|null);

        /** RequestHeader value */
        value?: (string|null);
    }

    /** Represents a RequestHeader. */
    class RequestHeader implements IRequestHeader {

        /**
         * Constructs a new RequestHeader.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgHttpRequest.IRequestHeader);

        /** RequestHeader name. */
        public name: string;

        /** RequestHeader value. */
        public value: string;

        /**
         * Decodes a RequestHeader message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgHttpRequest.RequestHeader;
    }

    /** Properties of a QueryParam. */
    interface IQueryParam {

        /** QueryParam name */
        name?: (string|null);

        /** QueryParam value */
        value?: (Uint8Array|null);
    }

    /** Represents a QueryParam. */
    class QueryParam implements IQueryParam {

        /**
         * Constructs a new QueryParam.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgHttpRequest.IQueryParam);

        /** QueryParam name. */
        public name: string;

        /** QueryParam value. */
        public value: Uint8Array;

        /**
         * Decodes a QueryParam message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QueryParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgHttpRequest.QueryParam;
    }
}

/** Properties of a CMsgWebAPIRequest. */
export interface ICMsgWebAPIRequest {

    /** CMsgWebAPIRequest UNUSEDJobName */
    UNUSEDJobName?: (string|null);

    /** CMsgWebAPIRequest interfaceName */
    interfaceName?: (string|null);

    /** CMsgWebAPIRequest methodName */
    methodName?: (string|null);

    /** CMsgWebAPIRequest version */
    version?: (number|null);

    /** CMsgWebAPIRequest apiKey */
    apiKey?: (ICMsgWebAPIKey|null);

    /** CMsgWebAPIRequest request */
    request?: (ICMsgHttpRequest|null);

    /** CMsgWebAPIRequest routingAppId */
    routingAppId?: (number|null);
}

/** Represents a CMsgWebAPIRequest. */
export class CMsgWebAPIRequest implements ICMsgWebAPIRequest {

    /**
     * Constructs a new CMsgWebAPIRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgWebAPIRequest);

    /** CMsgWebAPIRequest UNUSEDJobName. */
    public UNUSEDJobName: string;

    /** CMsgWebAPIRequest interfaceName. */
    public interfaceName: string;

    /** CMsgWebAPIRequest methodName. */
    public methodName: string;

    /** CMsgWebAPIRequest version. */
    public version: number;

    /** CMsgWebAPIRequest apiKey. */
    public apiKey?: (ICMsgWebAPIKey|null);

    /** CMsgWebAPIRequest request. */
    public request?: (ICMsgHttpRequest|null);

    /** CMsgWebAPIRequest routingAppId. */
    public routingAppId: number;

    /**
     * Decodes a CMsgWebAPIRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgWebAPIRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgWebAPIRequest;
}

/** Properties of a CMsgHttpResponse. */
export interface ICMsgHttpResponse {

    /** CMsgHttpResponse statusCode */
    statusCode?: (number|null);

    /** CMsgHttpResponse headers */
    headers?: (CMsgHttpResponse.IResponseHeader[]|null);

    /** CMsgHttpResponse body */
    body?: (Uint8Array|null);
}

/** Represents a CMsgHttpResponse. */
export class CMsgHttpResponse implements ICMsgHttpResponse {

    /**
     * Constructs a new CMsgHttpResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgHttpResponse);

    /** CMsgHttpResponse statusCode. */
    public statusCode: number;

    /** CMsgHttpResponse headers. */
    public headers: CMsgHttpResponse.IResponseHeader[];

    /** CMsgHttpResponse body. */
    public body: Uint8Array;

    /**
     * Decodes a CMsgHttpResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgHttpResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgHttpResponse;
}

export namespace CMsgHttpResponse {

    /** Properties of a ResponseHeader. */
    interface IResponseHeader {

        /** ResponseHeader name */
        name?: (string|null);

        /** ResponseHeader value */
        value?: (string|null);
    }

    /** Represents a ResponseHeader. */
    class ResponseHeader implements IResponseHeader {

        /**
         * Constructs a new ResponseHeader.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgHttpResponse.IResponseHeader);

        /** ResponseHeader name. */
        public name: string;

        /** ResponseHeader value. */
        public value: string;

        /**
         * Decodes a ResponseHeader message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgHttpResponse.ResponseHeader;
    }
}

/** Properties of a CMsgAMFindAccounts. */
export interface ICMsgAMFindAccounts {

    /** CMsgAMFindAccounts searchType */
    searchType?: (number|null);

    /** CMsgAMFindAccounts searchString */
    searchString?: (string|null);
}

/** Represents a CMsgAMFindAccounts. */
export class CMsgAMFindAccounts implements ICMsgAMFindAccounts {

    /**
     * Constructs a new CMsgAMFindAccounts.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgAMFindAccounts);

    /** CMsgAMFindAccounts searchType. */
    public searchType: number;

    /** CMsgAMFindAccounts searchString. */
    public searchString: string;

    /**
     * Decodes a CMsgAMFindAccounts message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgAMFindAccounts
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgAMFindAccounts;
}

/** Properties of a CMsgAMFindAccountsResponse. */
export interface ICMsgAMFindAccountsResponse {

    /** CMsgAMFindAccountsResponse steamId */
    steamId?: ((number|Long)[]|null);
}

/** Represents a CMsgAMFindAccountsResponse. */
export class CMsgAMFindAccountsResponse implements ICMsgAMFindAccountsResponse {

    /**
     * Constructs a new CMsgAMFindAccountsResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgAMFindAccountsResponse);

    /** CMsgAMFindAccountsResponse steamId. */
    public steamId: (number|Long)[];

    /**
     * Decodes a CMsgAMFindAccountsResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgAMFindAccountsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgAMFindAccountsResponse;
}

/** Properties of a CMsgNotifyWatchdog. */
export interface ICMsgNotifyWatchdog {

    /** CMsgNotifyWatchdog source */
    source?: (number|null);

    /** CMsgNotifyWatchdog alertType */
    alertType?: (number|null);

    /** CMsgNotifyWatchdog alertDestination */
    alertDestination?: (number|null);

    /** CMsgNotifyWatchdog critical */
    critical?: (boolean|null);

    /** CMsgNotifyWatchdog time */
    time?: (number|null);

    /** CMsgNotifyWatchdog appid */
    appid?: (number|null);

    /** CMsgNotifyWatchdog text */
    text?: (string|null);
}

/** Represents a CMsgNotifyWatchdog. */
export class CMsgNotifyWatchdog implements ICMsgNotifyWatchdog {

    /**
     * Constructs a new CMsgNotifyWatchdog.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgNotifyWatchdog);

    /** CMsgNotifyWatchdog source. */
    public source: number;

    /** CMsgNotifyWatchdog alertType. */
    public alertType: number;

    /** CMsgNotifyWatchdog alertDestination. */
    public alertDestination: number;

    /** CMsgNotifyWatchdog critical. */
    public critical: boolean;

    /** CMsgNotifyWatchdog time. */
    public time: number;

    /** CMsgNotifyWatchdog appid. */
    public appid: number;

    /** CMsgNotifyWatchdog text. */
    public text: string;

    /**
     * Decodes a CMsgNotifyWatchdog message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgNotifyWatchdog
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgNotifyWatchdog;
}

/** Properties of a CMsgAMGetLicenses. */
export interface ICMsgAMGetLicenses {

    /** CMsgAMGetLicenses steamid */
    steamid?: (number|Long|null);
}

/** Represents a CMsgAMGetLicenses. */
export class CMsgAMGetLicenses implements ICMsgAMGetLicenses {

    /**
     * Constructs a new CMsgAMGetLicenses.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgAMGetLicenses);

    /** CMsgAMGetLicenses steamid. */
    public steamid: (number|Long);

    /**
     * Decodes a CMsgAMGetLicenses message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgAMGetLicenses
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgAMGetLicenses;
}

/** Properties of a CMsgPackageLicense. */
export interface ICMsgPackageLicense {

    /** CMsgPackageLicense packageId */
    packageId?: (number|null);

    /** CMsgPackageLicense timeCreated */
    timeCreated?: (number|null);

    /** CMsgPackageLicense ownerId */
    ownerId?: (number|null);
}

/** Represents a CMsgPackageLicense. */
export class CMsgPackageLicense implements ICMsgPackageLicense {

    /**
     * Constructs a new CMsgPackageLicense.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgPackageLicense);

    /** CMsgPackageLicense packageId. */
    public packageId: number;

    /** CMsgPackageLicense timeCreated. */
    public timeCreated: number;

    /** CMsgPackageLicense ownerId. */
    public ownerId: number;

    /**
     * Decodes a CMsgPackageLicense message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgPackageLicense
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgPackageLicense;
}

/** Properties of a CMsgAMGetLicensesResponse. */
export interface ICMsgAMGetLicensesResponse {

    /** CMsgAMGetLicensesResponse license */
    license?: (ICMsgPackageLicense[]|null);

    /** CMsgAMGetLicensesResponse result */
    result?: (number|null);
}

/** Represents a CMsgAMGetLicensesResponse. */
export class CMsgAMGetLicensesResponse implements ICMsgAMGetLicensesResponse {

    /**
     * Constructs a new CMsgAMGetLicensesResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgAMGetLicensesResponse);

    /** CMsgAMGetLicensesResponse license. */
    public license: ICMsgPackageLicense[];

    /** CMsgAMGetLicensesResponse result. */
    public result: number;

    /**
     * Decodes a CMsgAMGetLicensesResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgAMGetLicensesResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgAMGetLicensesResponse;
}

/** Properties of a CMsgAMGetUserGameStats. */
export interface ICMsgAMGetUserGameStats {

    /** CMsgAMGetUserGameStats steamId */
    steamId?: (number|Long|null);

    /** CMsgAMGetUserGameStats gameId */
    gameId?: (number|Long|null);

    /** CMsgAMGetUserGameStats stats */
    stats?: (number[]|null);
}

/** Represents a CMsgAMGetUserGameStats. */
export class CMsgAMGetUserGameStats implements ICMsgAMGetUserGameStats {

    /**
     * Constructs a new CMsgAMGetUserGameStats.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgAMGetUserGameStats);

    /** CMsgAMGetUserGameStats steamId. */
    public steamId: (number|Long);

    /** CMsgAMGetUserGameStats gameId. */
    public gameId: (number|Long);

    /** CMsgAMGetUserGameStats stats. */
    public stats: number[];

    /**
     * Decodes a CMsgAMGetUserGameStats message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgAMGetUserGameStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgAMGetUserGameStats;
}

/** Properties of a CMsgAMGetUserGameStatsResponse. */
export interface ICMsgAMGetUserGameStatsResponse {

    /** CMsgAMGetUserGameStatsResponse steamId */
    steamId?: (number|Long|null);

    /** CMsgAMGetUserGameStatsResponse gameId */
    gameId?: (number|Long|null);

    /** CMsgAMGetUserGameStatsResponse eresult */
    eresult?: (number|null);

    /** CMsgAMGetUserGameStatsResponse stats */
    stats?: (CMsgAMGetUserGameStatsResponse.IStats[]|null);

    /** CMsgAMGetUserGameStatsResponse achievementBlocks */
    achievementBlocks?: (CMsgAMGetUserGameStatsResponse.IAchievement_Blocks[]|null);
}

/** Represents a CMsgAMGetUserGameStatsResponse. */
export class CMsgAMGetUserGameStatsResponse implements ICMsgAMGetUserGameStatsResponse {

    /**
     * Constructs a new CMsgAMGetUserGameStatsResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgAMGetUserGameStatsResponse);

    /** CMsgAMGetUserGameStatsResponse steamId. */
    public steamId: (number|Long);

    /** CMsgAMGetUserGameStatsResponse gameId. */
    public gameId: (number|Long);

    /** CMsgAMGetUserGameStatsResponse eresult. */
    public eresult: number;

    /** CMsgAMGetUserGameStatsResponse stats. */
    public stats: CMsgAMGetUserGameStatsResponse.IStats[];

    /** CMsgAMGetUserGameStatsResponse achievementBlocks. */
    public achievementBlocks: CMsgAMGetUserGameStatsResponse.IAchievement_Blocks[];

    /**
     * Decodes a CMsgAMGetUserGameStatsResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgAMGetUserGameStatsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgAMGetUserGameStatsResponse;
}

export namespace CMsgAMGetUserGameStatsResponse {

    /** Properties of a Stats. */
    interface IStats {

        /** Stats statId */
        statId?: (number|null);

        /** Stats statValue */
        statValue?: (number|null);
    }

    /** Represents a Stats. */
    class Stats implements IStats {

        /**
         * Constructs a new Stats.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgAMGetUserGameStatsResponse.IStats);

        /** Stats statId. */
        public statId: number;

        /** Stats statValue. */
        public statValue: number;

        /**
         * Decodes a Stats message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Stats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgAMGetUserGameStatsResponse.Stats;
    }

    /** Properties of an Achievement_Blocks. */
    interface IAchievement_Blocks {

        /** Achievement_Blocks achievementId */
        achievementId?: (number|null);

        /** Achievement_Blocks achievementBitId */
        achievementBitId?: (number|null);

        /** Achievement_Blocks unlockTime */
        unlockTime?: (number|null);
    }

    /** Represents an Achievement_Blocks. */
    class Achievement_Blocks implements IAchievement_Blocks {

        /**
         * Constructs a new Achievement_Blocks.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgAMGetUserGameStatsResponse.IAchievement_Blocks);

        /** Achievement_Blocks achievementId. */
        public achievementId: number;

        /** Achievement_Blocks achievementBitId. */
        public achievementBitId: number;

        /** Achievement_Blocks unlockTime. */
        public unlockTime: number;

        /**
         * Decodes an Achievement_Blocks message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Achievement_Blocks
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgAMGetUserGameStatsResponse.Achievement_Blocks;
    }
}

/** Properties of a CMsgGCGetCommandList. */
export interface ICMsgGCGetCommandList {

    /** CMsgGCGetCommandList appId */
    appId?: (number|null);

    /** CMsgGCGetCommandList commandPrefix */
    commandPrefix?: (string|null);
}

/** Represents a CMsgGCGetCommandList. */
export class CMsgGCGetCommandList implements ICMsgGCGetCommandList {

    /**
     * Constructs a new CMsgGCGetCommandList.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCGetCommandList);

    /** CMsgGCGetCommandList appId. */
    public appId: number;

    /** CMsgGCGetCommandList commandPrefix. */
    public commandPrefix: string;

    /**
     * Decodes a CMsgGCGetCommandList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCGetCommandList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCGetCommandList;
}

/** Properties of a CMsgGCGetCommandListResponse. */
export interface ICMsgGCGetCommandListResponse {

    /** CMsgGCGetCommandListResponse commandName */
    commandName?: (string[]|null);
}

/** Represents a CMsgGCGetCommandListResponse. */
export class CMsgGCGetCommandListResponse implements ICMsgGCGetCommandListResponse {

    /**
     * Constructs a new CMsgGCGetCommandListResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCGetCommandListResponse);

    /** CMsgGCGetCommandListResponse commandName. */
    public commandName: string[];

    /**
     * Decodes a CMsgGCGetCommandListResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCGetCommandListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCGetCommandListResponse;
}

/** Properties of a CGCMsgMemCachedGet. */
export interface ICGCMsgMemCachedGet {

    /** CGCMsgMemCachedGet keys */
    keys?: (string[]|null);
}

/** Represents a CGCMsgMemCachedGet. */
export class CGCMsgMemCachedGet implements ICGCMsgMemCachedGet {

    /**
     * Constructs a new CGCMsgMemCachedGet.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICGCMsgMemCachedGet);

    /** CGCMsgMemCachedGet keys. */
    public keys: string[];

    /**
     * Decodes a CGCMsgMemCachedGet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CGCMsgMemCachedGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGCMsgMemCachedGet;
}

/** Properties of a CGCMsgMemCachedGetResponse. */
export interface ICGCMsgMemCachedGetResponse {

    /** CGCMsgMemCachedGetResponse values */
    values?: (CGCMsgMemCachedGetResponse.IValueTag[]|null);
}

/** Represents a CGCMsgMemCachedGetResponse. */
export class CGCMsgMemCachedGetResponse implements ICGCMsgMemCachedGetResponse {

    /**
     * Constructs a new CGCMsgMemCachedGetResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICGCMsgMemCachedGetResponse);

    /** CGCMsgMemCachedGetResponse values. */
    public values: CGCMsgMemCachedGetResponse.IValueTag[];

    /**
     * Decodes a CGCMsgMemCachedGetResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CGCMsgMemCachedGetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGCMsgMemCachedGetResponse;
}

export namespace CGCMsgMemCachedGetResponse {

    /** Properties of a ValueTag. */
    interface IValueTag {

        /** ValueTag found */
        found?: (boolean|null);

        /** ValueTag value */
        value?: (Uint8Array|null);
    }

    /** Represents a ValueTag. */
    class ValueTag implements IValueTag {

        /**
         * Constructs a new ValueTag.
         * @param [properties] Properties to set
         */
        constructor(properties?: CGCMsgMemCachedGetResponse.IValueTag);

        /** ValueTag found. */
        public found: boolean;

        /** ValueTag value. */
        public value: Uint8Array;

        /**
         * Decodes a ValueTag message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ValueTag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGCMsgMemCachedGetResponse.ValueTag;
    }
}

/** Properties of a CGCMsgMemCachedSet. */
export interface ICGCMsgMemCachedSet {

    /** CGCMsgMemCachedSet keys */
    keys?: (CGCMsgMemCachedSet.IKeyPair[]|null);
}

/** Represents a CGCMsgMemCachedSet. */
export class CGCMsgMemCachedSet implements ICGCMsgMemCachedSet {

    /**
     * Constructs a new CGCMsgMemCachedSet.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICGCMsgMemCachedSet);

    /** CGCMsgMemCachedSet keys. */
    public keys: CGCMsgMemCachedSet.IKeyPair[];

    /**
     * Decodes a CGCMsgMemCachedSet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CGCMsgMemCachedSet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGCMsgMemCachedSet;
}

export namespace CGCMsgMemCachedSet {

    /** Properties of a KeyPair. */
    interface IKeyPair {

        /** KeyPair name */
        name?: (string|null);

        /** KeyPair value */
        value?: (Uint8Array|null);
    }

    /** Represents a KeyPair. */
    class KeyPair implements IKeyPair {

        /**
         * Constructs a new KeyPair.
         * @param [properties] Properties to set
         */
        constructor(properties?: CGCMsgMemCachedSet.IKeyPair);

        /** KeyPair name. */
        public name: string;

        /** KeyPair value. */
        public value: Uint8Array;

        /**
         * Decodes a KeyPair message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KeyPair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGCMsgMemCachedSet.KeyPair;
    }
}

/** Properties of a CGCMsgMemCachedDelete. */
export interface ICGCMsgMemCachedDelete {

    /** CGCMsgMemCachedDelete keys */
    keys?: (string[]|null);
}

/** Represents a CGCMsgMemCachedDelete. */
export class CGCMsgMemCachedDelete implements ICGCMsgMemCachedDelete {

    /**
     * Constructs a new CGCMsgMemCachedDelete.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICGCMsgMemCachedDelete);

    /** CGCMsgMemCachedDelete keys. */
    public keys: string[];

    /**
     * Decodes a CGCMsgMemCachedDelete message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CGCMsgMemCachedDelete
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGCMsgMemCachedDelete;
}

/** Properties of a CGCMsgMemCachedStats. */
export interface ICGCMsgMemCachedStats {
}

/** Represents a CGCMsgMemCachedStats. */
export class CGCMsgMemCachedStats implements ICGCMsgMemCachedStats {

    /**
     * Constructs a new CGCMsgMemCachedStats.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICGCMsgMemCachedStats);

    /**
     * Decodes a CGCMsgMemCachedStats message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CGCMsgMemCachedStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGCMsgMemCachedStats;
}

/** Properties of a CGCMsgMemCachedStatsResponse. */
export interface ICGCMsgMemCachedStatsResponse {

    /** CGCMsgMemCachedStatsResponse currConnections */
    currConnections?: (number|Long|null);

    /** CGCMsgMemCachedStatsResponse cmdGet */
    cmdGet?: (number|Long|null);

    /** CGCMsgMemCachedStatsResponse cmdSet */
    cmdSet?: (number|Long|null);

    /** CGCMsgMemCachedStatsResponse cmdFlush */
    cmdFlush?: (number|Long|null);

    /** CGCMsgMemCachedStatsResponse getHits */
    getHits?: (number|Long|null);

    /** CGCMsgMemCachedStatsResponse getMisses */
    getMisses?: (number|Long|null);

    /** CGCMsgMemCachedStatsResponse deleteHits */
    deleteHits?: (number|Long|null);

    /** CGCMsgMemCachedStatsResponse deleteMisses */
    deleteMisses?: (number|Long|null);

    /** CGCMsgMemCachedStatsResponse bytesRead */
    bytesRead?: (number|Long|null);

    /** CGCMsgMemCachedStatsResponse bytesWritten */
    bytesWritten?: (number|Long|null);

    /** CGCMsgMemCachedStatsResponse limitMaxbytes */
    limitMaxbytes?: (number|Long|null);

    /** CGCMsgMemCachedStatsResponse currItems */
    currItems?: (number|Long|null);

    /** CGCMsgMemCachedStatsResponse evictions */
    evictions?: (number|Long|null);

    /** CGCMsgMemCachedStatsResponse bytes */
    bytes?: (number|Long|null);
}

/** Represents a CGCMsgMemCachedStatsResponse. */
export class CGCMsgMemCachedStatsResponse implements ICGCMsgMemCachedStatsResponse {

    /**
     * Constructs a new CGCMsgMemCachedStatsResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICGCMsgMemCachedStatsResponse);

    /** CGCMsgMemCachedStatsResponse currConnections. */
    public currConnections: (number|Long);

    /** CGCMsgMemCachedStatsResponse cmdGet. */
    public cmdGet: (number|Long);

    /** CGCMsgMemCachedStatsResponse cmdSet. */
    public cmdSet: (number|Long);

    /** CGCMsgMemCachedStatsResponse cmdFlush. */
    public cmdFlush: (number|Long);

    /** CGCMsgMemCachedStatsResponse getHits. */
    public getHits: (number|Long);

    /** CGCMsgMemCachedStatsResponse getMisses. */
    public getMisses: (number|Long);

    /** CGCMsgMemCachedStatsResponse deleteHits. */
    public deleteHits: (number|Long);

    /** CGCMsgMemCachedStatsResponse deleteMisses. */
    public deleteMisses: (number|Long);

    /** CGCMsgMemCachedStatsResponse bytesRead. */
    public bytesRead: (number|Long);

    /** CGCMsgMemCachedStatsResponse bytesWritten. */
    public bytesWritten: (number|Long);

    /** CGCMsgMemCachedStatsResponse limitMaxbytes. */
    public limitMaxbytes: (number|Long);

    /** CGCMsgMemCachedStatsResponse currItems. */
    public currItems: (number|Long);

    /** CGCMsgMemCachedStatsResponse evictions. */
    public evictions: (number|Long);

    /** CGCMsgMemCachedStatsResponse bytes. */
    public bytes: (number|Long);

    /**
     * Decodes a CGCMsgMemCachedStatsResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CGCMsgMemCachedStatsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGCMsgMemCachedStatsResponse;
}

/** Properties of a CGCMsgSQLStats. */
export interface ICGCMsgSQLStats {

    /** CGCMsgSQLStats schemaCatalog */
    schemaCatalog?: (number|null);
}

/** Represents a CGCMsgSQLStats. */
export class CGCMsgSQLStats implements ICGCMsgSQLStats {

    /**
     * Constructs a new CGCMsgSQLStats.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICGCMsgSQLStats);

    /** CGCMsgSQLStats schemaCatalog. */
    public schemaCatalog: number;

    /**
     * Decodes a CGCMsgSQLStats message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CGCMsgSQLStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGCMsgSQLStats;
}

/** Properties of a CGCMsgSQLStatsResponse. */
export interface ICGCMsgSQLStatsResponse {

    /** CGCMsgSQLStatsResponse threads */
    threads?: (number|null);

    /** CGCMsgSQLStatsResponse threadsConnected */
    threadsConnected?: (number|null);

    /** CGCMsgSQLStatsResponse threadsActive */
    threadsActive?: (number|null);

    /** CGCMsgSQLStatsResponse operationsSubmitted */
    operationsSubmitted?: (number|null);

    /** CGCMsgSQLStatsResponse preparedStatementsExecuted */
    preparedStatementsExecuted?: (number|null);

    /** CGCMsgSQLStatsResponse nonPreparedStatementsExecuted */
    nonPreparedStatementsExecuted?: (number|null);

    /** CGCMsgSQLStatsResponse deadlockRetries */
    deadlockRetries?: (number|null);

    /** CGCMsgSQLStatsResponse operationsTimedOutInQueue */
    operationsTimedOutInQueue?: (number|null);

    /** CGCMsgSQLStatsResponse errors */
    errors?: (number|null);
}

/** Represents a CGCMsgSQLStatsResponse. */
export class CGCMsgSQLStatsResponse implements ICGCMsgSQLStatsResponse {

    /**
     * Constructs a new CGCMsgSQLStatsResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICGCMsgSQLStatsResponse);

    /** CGCMsgSQLStatsResponse threads. */
    public threads: number;

    /** CGCMsgSQLStatsResponse threadsConnected. */
    public threadsConnected: number;

    /** CGCMsgSQLStatsResponse threadsActive. */
    public threadsActive: number;

    /** CGCMsgSQLStatsResponse operationsSubmitted. */
    public operationsSubmitted: number;

    /** CGCMsgSQLStatsResponse preparedStatementsExecuted. */
    public preparedStatementsExecuted: number;

    /** CGCMsgSQLStatsResponse nonPreparedStatementsExecuted. */
    public nonPreparedStatementsExecuted: number;

    /** CGCMsgSQLStatsResponse deadlockRetries. */
    public deadlockRetries: number;

    /** CGCMsgSQLStatsResponse operationsTimedOutInQueue. */
    public operationsTimedOutInQueue: number;

    /** CGCMsgSQLStatsResponse errors. */
    public errors: number;

    /**
     * Decodes a CGCMsgSQLStatsResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CGCMsgSQLStatsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGCMsgSQLStatsResponse;
}

/** Properties of a CMsgAMAddFreeLicense. */
export interface ICMsgAMAddFreeLicense {

    /** CMsgAMAddFreeLicense steamid */
    steamid?: (number|Long|null);

    /** CMsgAMAddFreeLicense ipPublic */
    ipPublic?: (number|null);

    /** CMsgAMAddFreeLicense packageid */
    packageid?: (number|null);

    /** CMsgAMAddFreeLicense storeCountryCode */
    storeCountryCode?: (string|null);
}

/** Represents a CMsgAMAddFreeLicense. */
export class CMsgAMAddFreeLicense implements ICMsgAMAddFreeLicense {

    /**
     * Constructs a new CMsgAMAddFreeLicense.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgAMAddFreeLicense);

    /** CMsgAMAddFreeLicense steamid. */
    public steamid: (number|Long);

    /** CMsgAMAddFreeLicense ipPublic. */
    public ipPublic: number;

    /** CMsgAMAddFreeLicense packageid. */
    public packageid: number;

    /** CMsgAMAddFreeLicense storeCountryCode. */
    public storeCountryCode: string;

    /**
     * Decodes a CMsgAMAddFreeLicense message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgAMAddFreeLicense
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgAMAddFreeLicense;
}

/** Properties of a CMsgAMAddFreeLicenseResponse. */
export interface ICMsgAMAddFreeLicenseResponse {

    /** CMsgAMAddFreeLicenseResponse eresult */
    eresult?: (number|null);

    /** CMsgAMAddFreeLicenseResponse purchaseResultDetail */
    purchaseResultDetail?: (number|null);

    /** CMsgAMAddFreeLicenseResponse transid */
    transid?: (number|Long|null);
}

/** Represents a CMsgAMAddFreeLicenseResponse. */
export class CMsgAMAddFreeLicenseResponse implements ICMsgAMAddFreeLicenseResponse {

    /**
     * Constructs a new CMsgAMAddFreeLicenseResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgAMAddFreeLicenseResponse);

    /** CMsgAMAddFreeLicenseResponse eresult. */
    public eresult: number;

    /** CMsgAMAddFreeLicenseResponse purchaseResultDetail. */
    public purchaseResultDetail: number;

    /** CMsgAMAddFreeLicenseResponse transid. */
    public transid: (number|Long);

    /**
     * Decodes a CMsgAMAddFreeLicenseResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgAMAddFreeLicenseResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgAMAddFreeLicenseResponse;
}

/** Properties of a CGCMsgGetIPLocation. */
export interface ICGCMsgGetIPLocation {

    /** CGCMsgGetIPLocation ips */
    ips?: (number[]|null);
}

/** Represents a CGCMsgGetIPLocation. */
export class CGCMsgGetIPLocation implements ICGCMsgGetIPLocation {

    /**
     * Constructs a new CGCMsgGetIPLocation.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICGCMsgGetIPLocation);

    /** CGCMsgGetIPLocation ips. */
    public ips: number[];

    /**
     * Decodes a CGCMsgGetIPLocation message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CGCMsgGetIPLocation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGCMsgGetIPLocation;
}

/** Properties of a CIPLocationInfo. */
export interface ICIPLocationInfo {

    /** CIPLocationInfo ip */
    ip?: (number|null);

    /** CIPLocationInfo latitude */
    latitude?: (number|null);

    /** CIPLocationInfo longitude */
    longitude?: (number|null);

    /** CIPLocationInfo country */
    country?: (string|null);

    /** CIPLocationInfo state */
    state?: (string|null);

    /** CIPLocationInfo city */
    city?: (string|null);
}

/** Represents a CIPLocationInfo. */
export class CIPLocationInfo implements ICIPLocationInfo {

    /**
     * Constructs a new CIPLocationInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICIPLocationInfo);

    /** CIPLocationInfo ip. */
    public ip: number;

    /** CIPLocationInfo latitude. */
    public latitude: number;

    /** CIPLocationInfo longitude. */
    public longitude: number;

    /** CIPLocationInfo country. */
    public country: string;

    /** CIPLocationInfo state. */
    public state: string;

    /** CIPLocationInfo city. */
    public city: string;

    /**
     * Decodes a CIPLocationInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CIPLocationInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CIPLocationInfo;
}

/** Properties of a CGCMsgGetIPLocationResponse. */
export interface ICGCMsgGetIPLocationResponse {

    /** CGCMsgGetIPLocationResponse infos */
    infos?: (ICIPLocationInfo[]|null);
}

/** Represents a CGCMsgGetIPLocationResponse. */
export class CGCMsgGetIPLocationResponse implements ICGCMsgGetIPLocationResponse {

    /**
     * Constructs a new CGCMsgGetIPLocationResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICGCMsgGetIPLocationResponse);

    /** CGCMsgGetIPLocationResponse infos. */
    public infos: ICIPLocationInfo[];

    /**
     * Decodes a CGCMsgGetIPLocationResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CGCMsgGetIPLocationResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGCMsgGetIPLocationResponse;
}

/** Properties of a CGCMsgSystemStatsSchema. */
export interface ICGCMsgSystemStatsSchema {

    /** CGCMsgSystemStatsSchema gcAppId */
    gcAppId?: (number|null);

    /** CGCMsgSystemStatsSchema schemaKv */
    schemaKv?: (Uint8Array|null);
}

/** Represents a CGCMsgSystemStatsSchema. */
export class CGCMsgSystemStatsSchema implements ICGCMsgSystemStatsSchema {

    /**
     * Constructs a new CGCMsgSystemStatsSchema.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICGCMsgSystemStatsSchema);

    /** CGCMsgSystemStatsSchema gcAppId. */
    public gcAppId: number;

    /** CGCMsgSystemStatsSchema schemaKv. */
    public schemaKv: Uint8Array;

    /**
     * Decodes a CGCMsgSystemStatsSchema message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CGCMsgSystemStatsSchema
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGCMsgSystemStatsSchema;
}

/** Properties of a CGCMsgGetSystemStats. */
export interface ICGCMsgGetSystemStats {
}

/** Represents a CGCMsgGetSystemStats. */
export class CGCMsgGetSystemStats implements ICGCMsgGetSystemStats {

    /**
     * Constructs a new CGCMsgGetSystemStats.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICGCMsgGetSystemStats);

    /**
     * Decodes a CGCMsgGetSystemStats message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CGCMsgGetSystemStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGCMsgGetSystemStats;
}

/** Properties of a CGCMsgGetSystemStatsResponse. */
export interface ICGCMsgGetSystemStatsResponse {

    /** CGCMsgGetSystemStatsResponse gcAppId */
    gcAppId?: (number|null);

    /** CGCMsgGetSystemStatsResponse statsKv */
    statsKv?: (Uint8Array|null);

    /** CGCMsgGetSystemStatsResponse activeJobs */
    activeJobs?: (number|null);

    /** CGCMsgGetSystemStatsResponse yieldingJobs */
    yieldingJobs?: (number|null);

    /** CGCMsgGetSystemStatsResponse userSessions */
    userSessions?: (number|null);

    /** CGCMsgGetSystemStatsResponse gameServerSessions */
    gameServerSessions?: (number|null);

    /** CGCMsgGetSystemStatsResponse socaches */
    socaches?: (number|null);

    /** CGCMsgGetSystemStatsResponse socachesToUnload */
    socachesToUnload?: (number|null);

    /** CGCMsgGetSystemStatsResponse socachesLoading */
    socachesLoading?: (number|null);

    /** CGCMsgGetSystemStatsResponse writebackQueue */
    writebackQueue?: (number|null);

    /** CGCMsgGetSystemStatsResponse steamidLocks */
    steamidLocks?: (number|null);

    /** CGCMsgGetSystemStatsResponse logonQueue */
    logonQueue?: (number|null);

    /** CGCMsgGetSystemStatsResponse logonJobs */
    logonJobs?: (number|null);
}

/** Represents a CGCMsgGetSystemStatsResponse. */
export class CGCMsgGetSystemStatsResponse implements ICGCMsgGetSystemStatsResponse {

    /**
     * Constructs a new CGCMsgGetSystemStatsResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICGCMsgGetSystemStatsResponse);

    /** CGCMsgGetSystemStatsResponse gcAppId. */
    public gcAppId: number;

    /** CGCMsgGetSystemStatsResponse statsKv. */
    public statsKv: Uint8Array;

    /** CGCMsgGetSystemStatsResponse activeJobs. */
    public activeJobs: number;

    /** CGCMsgGetSystemStatsResponse yieldingJobs. */
    public yieldingJobs: number;

    /** CGCMsgGetSystemStatsResponse userSessions. */
    public userSessions: number;

    /** CGCMsgGetSystemStatsResponse gameServerSessions. */
    public gameServerSessions: number;

    /** CGCMsgGetSystemStatsResponse socaches. */
    public socaches: number;

    /** CGCMsgGetSystemStatsResponse socachesToUnload. */
    public socachesToUnload: number;

    /** CGCMsgGetSystemStatsResponse socachesLoading. */
    public socachesLoading: number;

    /** CGCMsgGetSystemStatsResponse writebackQueue. */
    public writebackQueue: number;

    /** CGCMsgGetSystemStatsResponse steamidLocks. */
    public steamidLocks: number;

    /** CGCMsgGetSystemStatsResponse logonQueue. */
    public logonQueue: number;

    /** CGCMsgGetSystemStatsResponse logonJobs. */
    public logonJobs: number;

    /**
     * Decodes a CGCMsgGetSystemStatsResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CGCMsgGetSystemStatsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGCMsgGetSystemStatsResponse;
}

/** Properties of a CMsgAMSendEmail. */
export interface ICMsgAMSendEmail {

    /** CMsgAMSendEmail steamid */
    steamid?: (number|Long|null);

    /** CMsgAMSendEmail emailMsgType */
    emailMsgType?: (number|null);

    /** CMsgAMSendEmail emailFormat */
    emailFormat?: (number|null);

    /** CMsgAMSendEmail personaNameTokens */
    personaNameTokens?: (CMsgAMSendEmail.IPersonaNameReplacementToken[]|null);

    /** CMsgAMSendEmail sourceGc */
    sourceGc?: (number|null);

    /** CMsgAMSendEmail tokens */
    tokens?: (CMsgAMSendEmail.IReplacementToken[]|null);
}

/** Represents a CMsgAMSendEmail. */
export class CMsgAMSendEmail implements ICMsgAMSendEmail {

    /**
     * Constructs a new CMsgAMSendEmail.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgAMSendEmail);

    /** CMsgAMSendEmail steamid. */
    public steamid: (number|Long);

    /** CMsgAMSendEmail emailMsgType. */
    public emailMsgType: number;

    /** CMsgAMSendEmail emailFormat. */
    public emailFormat: number;

    /** CMsgAMSendEmail personaNameTokens. */
    public personaNameTokens: CMsgAMSendEmail.IPersonaNameReplacementToken[];

    /** CMsgAMSendEmail sourceGc. */
    public sourceGc: number;

    /** CMsgAMSendEmail tokens. */
    public tokens: CMsgAMSendEmail.IReplacementToken[];

    /**
     * Decodes a CMsgAMSendEmail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgAMSendEmail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgAMSendEmail;
}

export namespace CMsgAMSendEmail {

    /** Properties of a ReplacementToken. */
    interface IReplacementToken {

        /** ReplacementToken tokenName */
        tokenName?: (string|null);

        /** ReplacementToken tokenValue */
        tokenValue?: (string|null);
    }

    /** Represents a ReplacementToken. */
    class ReplacementToken implements IReplacementToken {

        /**
         * Constructs a new ReplacementToken.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgAMSendEmail.IReplacementToken);

        /** ReplacementToken tokenName. */
        public tokenName: string;

        /** ReplacementToken tokenValue. */
        public tokenValue: string;

        /**
         * Decodes a ReplacementToken message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReplacementToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgAMSendEmail.ReplacementToken;
    }

    /** Properties of a PersonaNameReplacementToken. */
    interface IPersonaNameReplacementToken {

        /** PersonaNameReplacementToken steamid */
        steamid?: (number|Long|null);

        /** PersonaNameReplacementToken tokenName */
        tokenName?: (string|null);
    }

    /** Represents a PersonaNameReplacementToken. */
    class PersonaNameReplacementToken implements IPersonaNameReplacementToken {

        /**
         * Constructs a new PersonaNameReplacementToken.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgAMSendEmail.IPersonaNameReplacementToken);

        /** PersonaNameReplacementToken steamid. */
        public steamid: (number|Long);

        /** PersonaNameReplacementToken tokenName. */
        public tokenName: string;

        /**
         * Decodes a PersonaNameReplacementToken message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PersonaNameReplacementToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgAMSendEmail.PersonaNameReplacementToken;
    }
}

/** Properties of a CMsgAMSendEmailResponse. */
export interface ICMsgAMSendEmailResponse {

    /** CMsgAMSendEmailResponse eresult */
    eresult?: (number|null);
}

/** Represents a CMsgAMSendEmailResponse. */
export class CMsgAMSendEmailResponse implements ICMsgAMSendEmailResponse {

    /**
     * Constructs a new CMsgAMSendEmailResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgAMSendEmailResponse);

    /** CMsgAMSendEmailResponse eresult. */
    public eresult: number;

    /**
     * Decodes a CMsgAMSendEmailResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgAMSendEmailResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgAMSendEmailResponse;
}

/** Properties of a CMsgGCGetEmailTemplate. */
export interface ICMsgGCGetEmailTemplate {

    /** CMsgGCGetEmailTemplate appId */
    appId?: (number|null);

    /** CMsgGCGetEmailTemplate emailMsgType */
    emailMsgType?: (number|null);

    /** CMsgGCGetEmailTemplate emailLang */
    emailLang?: (number|null);

    /** CMsgGCGetEmailTemplate emailFormat */
    emailFormat?: (number|null);
}

/** Represents a CMsgGCGetEmailTemplate. */
export class CMsgGCGetEmailTemplate implements ICMsgGCGetEmailTemplate {

    /**
     * Constructs a new CMsgGCGetEmailTemplate.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCGetEmailTemplate);

    /** CMsgGCGetEmailTemplate appId. */
    public appId: number;

    /** CMsgGCGetEmailTemplate emailMsgType. */
    public emailMsgType: number;

    /** CMsgGCGetEmailTemplate emailLang. */
    public emailLang: number;

    /** CMsgGCGetEmailTemplate emailFormat. */
    public emailFormat: number;

    /**
     * Decodes a CMsgGCGetEmailTemplate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCGetEmailTemplate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCGetEmailTemplate;
}

/** Properties of a CMsgGCGetEmailTemplateResponse. */
export interface ICMsgGCGetEmailTemplateResponse {

    /** CMsgGCGetEmailTemplateResponse eresult */
    eresult?: (number|null);

    /** CMsgGCGetEmailTemplateResponse templateExists */
    templateExists?: (boolean|null);

    /** CMsgGCGetEmailTemplateResponse template */
    template?: (string|null);
}

/** Represents a CMsgGCGetEmailTemplateResponse. */
export class CMsgGCGetEmailTemplateResponse implements ICMsgGCGetEmailTemplateResponse {

    /**
     * Constructs a new CMsgGCGetEmailTemplateResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCGetEmailTemplateResponse);

    /** CMsgGCGetEmailTemplateResponse eresult. */
    public eresult: number;

    /** CMsgGCGetEmailTemplateResponse templateExists. */
    public templateExists: boolean;

    /** CMsgGCGetEmailTemplateResponse template. */
    public template: string;

    /**
     * Decodes a CMsgGCGetEmailTemplateResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCGetEmailTemplateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCGetEmailTemplateResponse;
}

/** Properties of a CMsgAMGrantGuestPasses2. */
export interface ICMsgAMGrantGuestPasses2 {

    /** CMsgAMGrantGuestPasses2 steamId */
    steamId?: (number|Long|null);

    /** CMsgAMGrantGuestPasses2 packageId */
    packageId?: (number|null);

    /** CMsgAMGrantGuestPasses2 passesToGrant */
    passesToGrant?: (number|null);

    /** CMsgAMGrantGuestPasses2 daysToExpiration */
    daysToExpiration?: (number|null);

    /** CMsgAMGrantGuestPasses2 action */
    action?: (number|null);
}

/** Represents a CMsgAMGrantGuestPasses2. */
export class CMsgAMGrantGuestPasses2 implements ICMsgAMGrantGuestPasses2 {

    /**
     * Constructs a new CMsgAMGrantGuestPasses2.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgAMGrantGuestPasses2);

    /** CMsgAMGrantGuestPasses2 steamId. */
    public steamId: (number|Long);

    /** CMsgAMGrantGuestPasses2 packageId. */
    public packageId: number;

    /** CMsgAMGrantGuestPasses2 passesToGrant. */
    public passesToGrant: number;

    /** CMsgAMGrantGuestPasses2 daysToExpiration. */
    public daysToExpiration: number;

    /** CMsgAMGrantGuestPasses2 action. */
    public action: number;

    /**
     * Decodes a CMsgAMGrantGuestPasses2 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgAMGrantGuestPasses2
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgAMGrantGuestPasses2;
}

/** Properties of a CMsgAMGrantGuestPasses2Response. */
export interface ICMsgAMGrantGuestPasses2Response {

    /** CMsgAMGrantGuestPasses2Response eresult */
    eresult?: (number|null);

    /** CMsgAMGrantGuestPasses2Response passesGranted */
    passesGranted?: (number|null);
}

/** Represents a CMsgAMGrantGuestPasses2Response. */
export class CMsgAMGrantGuestPasses2Response implements ICMsgAMGrantGuestPasses2Response {

    /**
     * Constructs a new CMsgAMGrantGuestPasses2Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgAMGrantGuestPasses2Response);

    /** CMsgAMGrantGuestPasses2Response eresult. */
    public eresult: number;

    /** CMsgAMGrantGuestPasses2Response passesGranted. */
    public passesGranted: number;

    /**
     * Decodes a CMsgAMGrantGuestPasses2Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgAMGrantGuestPasses2Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgAMGrantGuestPasses2Response;
}

/** Properties of a CGCSystemMsg_GetAccountDetails. */
export interface ICGCSystemMsg_GetAccountDetails {

    /** CGCSystemMsg_GetAccountDetails steamid */
    steamid?: (number|Long|null);

    /** CGCSystemMsg_GetAccountDetails appid */
    appid?: (number|null);
}

/** Represents a CGCSystemMsg_GetAccountDetails. */
export class CGCSystemMsg_GetAccountDetails implements ICGCSystemMsg_GetAccountDetails {

    /**
     * Constructs a new CGCSystemMsg_GetAccountDetails.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICGCSystemMsg_GetAccountDetails);

    /** CGCSystemMsg_GetAccountDetails steamid. */
    public steamid: (number|Long);

    /** CGCSystemMsg_GetAccountDetails appid. */
    public appid: number;

    /**
     * Decodes a CGCSystemMsg_GetAccountDetails message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CGCSystemMsg_GetAccountDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGCSystemMsg_GetAccountDetails;
}

/** Properties of a CGCSystemMsg_GetAccountDetails_Response. */
export interface ICGCSystemMsg_GetAccountDetails_Response {

    /** CGCSystemMsg_GetAccountDetails_Response eresultDeprecated */
    eresultDeprecated?: (number|null);

    /** CGCSystemMsg_GetAccountDetails_Response accountName */
    accountName?: (string|null);

    /** CGCSystemMsg_GetAccountDetails_Response personaName */
    personaName?: (string|null);

    /** CGCSystemMsg_GetAccountDetails_Response isProfilePublic */
    isProfilePublic?: (boolean|null);

    /** CGCSystemMsg_GetAccountDetails_Response isInventoryPublic */
    isInventoryPublic?: (boolean|null);

    /** CGCSystemMsg_GetAccountDetails_Response isVacBanned */
    isVacBanned?: (boolean|null);

    /** CGCSystemMsg_GetAccountDetails_Response isCyberCafe */
    isCyberCafe?: (boolean|null);

    /** CGCSystemMsg_GetAccountDetails_Response isSchoolAccount */
    isSchoolAccount?: (boolean|null);

    /** CGCSystemMsg_GetAccountDetails_Response isLimited */
    isLimited?: (boolean|null);

    /** CGCSystemMsg_GetAccountDetails_Response isSubscribed */
    isSubscribed?: (boolean|null);

    /** CGCSystemMsg_GetAccountDetails_Response package */
    "package"?: (number|null);

    /** CGCSystemMsg_GetAccountDetails_Response isFreeTrialAccount */
    isFreeTrialAccount?: (boolean|null);

    /** CGCSystemMsg_GetAccountDetails_Response freeTrialExpiration */
    freeTrialExpiration?: (number|null);

    /** CGCSystemMsg_GetAccountDetails_Response isLowViolence */
    isLowViolence?: (boolean|null);

    /** CGCSystemMsg_GetAccountDetails_Response isAccountLockedDown */
    isAccountLockedDown?: (boolean|null);

    /** CGCSystemMsg_GetAccountDetails_Response isCommunityBanned */
    isCommunityBanned?: (boolean|null);

    /** CGCSystemMsg_GetAccountDetails_Response isTradeBanned */
    isTradeBanned?: (boolean|null);

    /** CGCSystemMsg_GetAccountDetails_Response tradeBanExpiration */
    tradeBanExpiration?: (number|null);

    /** CGCSystemMsg_GetAccountDetails_Response accountid */
    accountid?: (number|null);

    /** CGCSystemMsg_GetAccountDetails_Response suspensionEndTime */
    suspensionEndTime?: (number|null);

    /** CGCSystemMsg_GetAccountDetails_Response currency */
    currency?: (string|null);

    /** CGCSystemMsg_GetAccountDetails_Response steamLevel */
    steamLevel?: (number|null);
}

/** Represents a CGCSystemMsg_GetAccountDetails_Response. */
export class CGCSystemMsg_GetAccountDetails_Response implements ICGCSystemMsg_GetAccountDetails_Response {

    /**
     * Constructs a new CGCSystemMsg_GetAccountDetails_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICGCSystemMsg_GetAccountDetails_Response);

    /** CGCSystemMsg_GetAccountDetails_Response eresultDeprecated. */
    public eresultDeprecated: number;

    /** CGCSystemMsg_GetAccountDetails_Response accountName. */
    public accountName: string;

    /** CGCSystemMsg_GetAccountDetails_Response personaName. */
    public personaName: string;

    /** CGCSystemMsg_GetAccountDetails_Response isProfilePublic. */
    public isProfilePublic: boolean;

    /** CGCSystemMsg_GetAccountDetails_Response isInventoryPublic. */
    public isInventoryPublic: boolean;

    /** CGCSystemMsg_GetAccountDetails_Response isVacBanned. */
    public isVacBanned: boolean;

    /** CGCSystemMsg_GetAccountDetails_Response isCyberCafe. */
    public isCyberCafe: boolean;

    /** CGCSystemMsg_GetAccountDetails_Response isSchoolAccount. */
    public isSchoolAccount: boolean;

    /** CGCSystemMsg_GetAccountDetails_Response isLimited. */
    public isLimited: boolean;

    /** CGCSystemMsg_GetAccountDetails_Response isSubscribed. */
    public isSubscribed: boolean;

    /** CGCSystemMsg_GetAccountDetails_Response package. */
    public package: number;

    /** CGCSystemMsg_GetAccountDetails_Response isFreeTrialAccount. */
    public isFreeTrialAccount: boolean;

    /** CGCSystemMsg_GetAccountDetails_Response freeTrialExpiration. */
    public freeTrialExpiration: number;

    /** CGCSystemMsg_GetAccountDetails_Response isLowViolence. */
    public isLowViolence: boolean;

    /** CGCSystemMsg_GetAccountDetails_Response isAccountLockedDown. */
    public isAccountLockedDown: boolean;

    /** CGCSystemMsg_GetAccountDetails_Response isCommunityBanned. */
    public isCommunityBanned: boolean;

    /** CGCSystemMsg_GetAccountDetails_Response isTradeBanned. */
    public isTradeBanned: boolean;

    /** CGCSystemMsg_GetAccountDetails_Response tradeBanExpiration. */
    public tradeBanExpiration: number;

    /** CGCSystemMsg_GetAccountDetails_Response accountid. */
    public accountid: number;

    /** CGCSystemMsg_GetAccountDetails_Response suspensionEndTime. */
    public suspensionEndTime: number;

    /** CGCSystemMsg_GetAccountDetails_Response currency. */
    public currency: string;

    /** CGCSystemMsg_GetAccountDetails_Response steamLevel. */
    public steamLevel: number;

    /**
     * Decodes a CGCSystemMsg_GetAccountDetails_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CGCSystemMsg_GetAccountDetails_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGCSystemMsg_GetAccountDetails_Response;
}

/** Properties of a CMsgGCGetPersonaNames. */
export interface ICMsgGCGetPersonaNames {

    /** CMsgGCGetPersonaNames steamids */
    steamids?: ((number|Long)[]|null);
}

/** Represents a CMsgGCGetPersonaNames. */
export class CMsgGCGetPersonaNames implements ICMsgGCGetPersonaNames {

    /**
     * Constructs a new CMsgGCGetPersonaNames.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCGetPersonaNames);

    /** CMsgGCGetPersonaNames steamids. */
    public steamids: (number|Long)[];

    /**
     * Decodes a CMsgGCGetPersonaNames message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCGetPersonaNames
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCGetPersonaNames;
}

/** Properties of a CMsgGCGetPersonaNames_Response. */
export interface ICMsgGCGetPersonaNames_Response {

    /** CMsgGCGetPersonaNames_Response succeededLookups */
    succeededLookups?: (CMsgGCGetPersonaNames_Response.IPersonaName[]|null);

    /** CMsgGCGetPersonaNames_Response failedLookupSteamids */
    failedLookupSteamids?: ((number|Long)[]|null);
}

/** Represents a CMsgGCGetPersonaNames_Response. */
export class CMsgGCGetPersonaNames_Response implements ICMsgGCGetPersonaNames_Response {

    /**
     * Constructs a new CMsgGCGetPersonaNames_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCGetPersonaNames_Response);

    /** CMsgGCGetPersonaNames_Response succeededLookups. */
    public succeededLookups: CMsgGCGetPersonaNames_Response.IPersonaName[];

    /** CMsgGCGetPersonaNames_Response failedLookupSteamids. */
    public failedLookupSteamids: (number|Long)[];

    /**
     * Decodes a CMsgGCGetPersonaNames_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCGetPersonaNames_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCGetPersonaNames_Response;
}

export namespace CMsgGCGetPersonaNames_Response {

    /** Properties of a PersonaName. */
    interface IPersonaName {

        /** PersonaName steamid */
        steamid?: (number|Long|null);

        /** PersonaName personaName */
        personaName?: (string|null);
    }

    /** Represents a PersonaName. */
    class PersonaName implements IPersonaName {

        /**
         * Constructs a new PersonaName.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgGCGetPersonaNames_Response.IPersonaName);

        /** PersonaName steamid. */
        public steamid: (number|Long);

        /** PersonaName personaName. */
        public personaName: string;

        /**
         * Decodes a PersonaName message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PersonaName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCGetPersonaNames_Response.PersonaName;
    }
}

/** Properties of a CMsgGCCheckFriendship. */
export interface ICMsgGCCheckFriendship {

    /** CMsgGCCheckFriendship steamidLeft */
    steamidLeft?: (number|Long|null);

    /** CMsgGCCheckFriendship steamidRight */
    steamidRight?: (number|Long|null);
}

/** Represents a CMsgGCCheckFriendship. */
export class CMsgGCCheckFriendship implements ICMsgGCCheckFriendship {

    /**
     * Constructs a new CMsgGCCheckFriendship.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCheckFriendship);

    /** CMsgGCCheckFriendship steamidLeft. */
    public steamidLeft: (number|Long);

    /** CMsgGCCheckFriendship steamidRight. */
    public steamidRight: (number|Long);

    /**
     * Decodes a CMsgGCCheckFriendship message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCheckFriendship
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCheckFriendship;
}

/** Properties of a CMsgGCCheckFriendship_Response. */
export interface ICMsgGCCheckFriendship_Response {

    /** CMsgGCCheckFriendship_Response success */
    success?: (boolean|null);

    /** CMsgGCCheckFriendship_Response foundFriendship */
    foundFriendship?: (boolean|null);
}

/** Represents a CMsgGCCheckFriendship_Response. */
export class CMsgGCCheckFriendship_Response implements ICMsgGCCheckFriendship_Response {

    /**
     * Constructs a new CMsgGCCheckFriendship_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCCheckFriendship_Response);

    /** CMsgGCCheckFriendship_Response success. */
    public success: boolean;

    /** CMsgGCCheckFriendship_Response foundFriendship. */
    public foundFriendship: boolean;

    /**
     * Decodes a CMsgGCCheckFriendship_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCCheckFriendship_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCCheckFriendship_Response;
}

/** Properties of a CMsgGCMsgMasterSetDirectory. */
export interface ICMsgGCMsgMasterSetDirectory {

    /** CMsgGCMsgMasterSetDirectory masterDirIndex */
    masterDirIndex?: (number|null);

    /** CMsgGCMsgMasterSetDirectory dir */
    dir?: (CMsgGCMsgMasterSetDirectory.ISubGC[]|null);
}

/** Represents a CMsgGCMsgMasterSetDirectory. */
export class CMsgGCMsgMasterSetDirectory implements ICMsgGCMsgMasterSetDirectory {

    /**
     * Constructs a new CMsgGCMsgMasterSetDirectory.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCMsgMasterSetDirectory);

    /** CMsgGCMsgMasterSetDirectory masterDirIndex. */
    public masterDirIndex: number;

    /** CMsgGCMsgMasterSetDirectory dir. */
    public dir: CMsgGCMsgMasterSetDirectory.ISubGC[];

    /**
     * Decodes a CMsgGCMsgMasterSetDirectory message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCMsgMasterSetDirectory
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCMsgMasterSetDirectory;
}

export namespace CMsgGCMsgMasterSetDirectory {

    /** Properties of a SubGC. */
    interface ISubGC {

        /** SubGC dirIndex */
        dirIndex?: (number|null);

        /** SubGC name */
        name?: (string|null);

        /** SubGC box */
        box?: (string|null);

        /** SubGC commandLine */
        commandLine?: (string|null);

        /** SubGC gcBinary */
        gcBinary?: (string|null);
    }

    /** Represents a SubGC. */
    class SubGC implements ISubGC {

        /**
         * Constructs a new SubGC.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgGCMsgMasterSetDirectory.ISubGC);

        /** SubGC dirIndex. */
        public dirIndex: number;

        /** SubGC name. */
        public name: string;

        /** SubGC box. */
        public box: string;

        /** SubGC commandLine. */
        public commandLine: string;

        /** SubGC gcBinary. */
        public gcBinary: string;

        /**
         * Decodes a SubGC message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SubGC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCMsgMasterSetDirectory.SubGC;
    }
}

/** Properties of a CMsgGCMsgMasterSetDirectory_Response. */
export interface ICMsgGCMsgMasterSetDirectory_Response {

    /** CMsgGCMsgMasterSetDirectory_Response eresult */
    eresult?: (number|null);
}

/** Represents a CMsgGCMsgMasterSetDirectory_Response. */
export class CMsgGCMsgMasterSetDirectory_Response implements ICMsgGCMsgMasterSetDirectory_Response {

    /**
     * Constructs a new CMsgGCMsgMasterSetDirectory_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCMsgMasterSetDirectory_Response);

    /** CMsgGCMsgMasterSetDirectory_Response eresult. */
    public eresult: number;

    /**
     * Decodes a CMsgGCMsgMasterSetDirectory_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCMsgMasterSetDirectory_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCMsgMasterSetDirectory_Response;
}

/** Properties of a CMsgGCMsgWebAPIJobRequestForwardResponse. */
export interface ICMsgGCMsgWebAPIJobRequestForwardResponse {

    /** CMsgGCMsgWebAPIJobRequestForwardResponse dirIndex */
    dirIndex?: (number|null);
}

/** Represents a CMsgGCMsgWebAPIJobRequestForwardResponse. */
export class CMsgGCMsgWebAPIJobRequestForwardResponse implements ICMsgGCMsgWebAPIJobRequestForwardResponse {

    /**
     * Constructs a new CMsgGCMsgWebAPIJobRequestForwardResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCMsgWebAPIJobRequestForwardResponse);

    /** CMsgGCMsgWebAPIJobRequestForwardResponse dirIndex. */
    public dirIndex: number;

    /**
     * Decodes a CMsgGCMsgWebAPIJobRequestForwardResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCMsgWebAPIJobRequestForwardResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCMsgWebAPIJobRequestForwardResponse;
}

/** Properties of a CGCSystemMsg_GetPurchaseTrust_Request. */
export interface ICGCSystemMsg_GetPurchaseTrust_Request {

    /** CGCSystemMsg_GetPurchaseTrust_Request steamid */
    steamid?: (number|Long|null);
}

/** Represents a CGCSystemMsg_GetPurchaseTrust_Request. */
export class CGCSystemMsg_GetPurchaseTrust_Request implements ICGCSystemMsg_GetPurchaseTrust_Request {

    /**
     * Constructs a new CGCSystemMsg_GetPurchaseTrust_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICGCSystemMsg_GetPurchaseTrust_Request);

    /** CGCSystemMsg_GetPurchaseTrust_Request steamid. */
    public steamid: (number|Long);

    /**
     * Decodes a CGCSystemMsg_GetPurchaseTrust_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CGCSystemMsg_GetPurchaseTrust_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGCSystemMsg_GetPurchaseTrust_Request;
}

/** Properties of a CGCSystemMsg_GetPurchaseTrust_Response. */
export interface ICGCSystemMsg_GetPurchaseTrust_Response {

    /** CGCSystemMsg_GetPurchaseTrust_Response hasPriorPurchaseHistory */
    hasPriorPurchaseHistory?: (boolean|null);

    /** CGCSystemMsg_GetPurchaseTrust_Response hasNoRecentPasswordResets */
    hasNoRecentPasswordResets?: (boolean|null);

    /** CGCSystemMsg_GetPurchaseTrust_Response isWalletCashTrusted */
    isWalletCashTrusted?: (boolean|null);

    /** CGCSystemMsg_GetPurchaseTrust_Response timeAllTrusted */
    timeAllTrusted?: (number|null);
}

/** Represents a CGCSystemMsg_GetPurchaseTrust_Response. */
export class CGCSystemMsg_GetPurchaseTrust_Response implements ICGCSystemMsg_GetPurchaseTrust_Response {

    /**
     * Constructs a new CGCSystemMsg_GetPurchaseTrust_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICGCSystemMsg_GetPurchaseTrust_Response);

    /** CGCSystemMsg_GetPurchaseTrust_Response hasPriorPurchaseHistory. */
    public hasPriorPurchaseHistory: boolean;

    /** CGCSystemMsg_GetPurchaseTrust_Response hasNoRecentPasswordResets. */
    public hasNoRecentPasswordResets: boolean;

    /** CGCSystemMsg_GetPurchaseTrust_Response isWalletCashTrusted. */
    public isWalletCashTrusted: boolean;

    /** CGCSystemMsg_GetPurchaseTrust_Response timeAllTrusted. */
    public timeAllTrusted: number;

    /**
     * Decodes a CGCSystemMsg_GetPurchaseTrust_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CGCSystemMsg_GetPurchaseTrust_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CGCSystemMsg_GetPurchaseTrust_Response;
}

/** Properties of a CMsgGCHAccountVacStatusChange. */
export interface ICMsgGCHAccountVacStatusChange {

    /** CMsgGCHAccountVacStatusChange steamId */
    steamId?: (number|Long|null);

    /** CMsgGCHAccountVacStatusChange appId */
    appId?: (number|null);

    /** CMsgGCHAccountVacStatusChange rtimeVacbanStarts */
    rtimeVacbanStarts?: (number|null);

    /** CMsgGCHAccountVacStatusChange isBannedNow */
    isBannedNow?: (boolean|null);

    /** CMsgGCHAccountVacStatusChange isBannedFuture */
    isBannedFuture?: (boolean|null);
}

/** Represents a CMsgGCHAccountVacStatusChange. */
export class CMsgGCHAccountVacStatusChange implements ICMsgGCHAccountVacStatusChange {

    /**
     * Constructs a new CMsgGCHAccountVacStatusChange.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCHAccountVacStatusChange);

    /** CMsgGCHAccountVacStatusChange steamId. */
    public steamId: (number|Long);

    /** CMsgGCHAccountVacStatusChange appId. */
    public appId: number;

    /** CMsgGCHAccountVacStatusChange rtimeVacbanStarts. */
    public rtimeVacbanStarts: number;

    /** CMsgGCHAccountVacStatusChange isBannedNow. */
    public isBannedNow: boolean;

    /** CMsgGCHAccountVacStatusChange isBannedFuture. */
    public isBannedFuture: boolean;

    /**
     * Decodes a CMsgGCHAccountVacStatusChange message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCHAccountVacStatusChange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCHAccountVacStatusChange;
}

/** Properties of a CMsgGCGetPartnerAccountLink. */
export interface ICMsgGCGetPartnerAccountLink {

    /** CMsgGCGetPartnerAccountLink steamid */
    steamid?: (number|Long|null);
}

/** Represents a CMsgGCGetPartnerAccountLink. */
export class CMsgGCGetPartnerAccountLink implements ICMsgGCGetPartnerAccountLink {

    /**
     * Constructs a new CMsgGCGetPartnerAccountLink.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCGetPartnerAccountLink);

    /** CMsgGCGetPartnerAccountLink steamid. */
    public steamid: (number|Long);

    /**
     * Decodes a CMsgGCGetPartnerAccountLink message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCGetPartnerAccountLink
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCGetPartnerAccountLink;
}

/** Properties of a CMsgGCGetPartnerAccountLink_Response. */
export interface ICMsgGCGetPartnerAccountLink_Response {

    /** CMsgGCGetPartnerAccountLink_Response pwid */
    pwid?: (number|null);

    /** CMsgGCGetPartnerAccountLink_Response nexonid */
    nexonid?: (number|null);
}

/** Represents a CMsgGCGetPartnerAccountLink_Response. */
export class CMsgGCGetPartnerAccountLink_Response implements ICMsgGCGetPartnerAccountLink_Response {

    /**
     * Constructs a new CMsgGCGetPartnerAccountLink_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCGetPartnerAccountLink_Response);

    /** CMsgGCGetPartnerAccountLink_Response pwid. */
    public pwid: number;

    /** CMsgGCGetPartnerAccountLink_Response nexonid. */
    public nexonid: number;

    /**
     * Decodes a CMsgGCGetPartnerAccountLink_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCGetPartnerAccountLink_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCGetPartnerAccountLink_Response;
}

/** Properties of a CMsgGCRoutingInfo. */
export interface ICMsgGCRoutingInfo {

    /** CMsgGCRoutingInfo dirIndex */
    dirIndex?: (number[]|null);

    /** CMsgGCRoutingInfo method */
    method?: (CMsgGCRoutingInfo.RoutingMethod|null);

    /** CMsgGCRoutingInfo fallback */
    fallback?: (CMsgGCRoutingInfo.RoutingMethod|null);

    /** CMsgGCRoutingInfo protobufField */
    protobufField?: (number|null);

    /** CMsgGCRoutingInfo webapiParam */
    webapiParam?: (string|null);
}

/** Represents a CMsgGCRoutingInfo. */
export class CMsgGCRoutingInfo implements ICMsgGCRoutingInfo {

    /**
     * Constructs a new CMsgGCRoutingInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCRoutingInfo);

    /** CMsgGCRoutingInfo dirIndex. */
    public dirIndex: number[];

    /** CMsgGCRoutingInfo method. */
    public method: CMsgGCRoutingInfo.RoutingMethod;

    /** CMsgGCRoutingInfo fallback. */
    public fallback: CMsgGCRoutingInfo.RoutingMethod;

    /** CMsgGCRoutingInfo protobufField. */
    public protobufField: number;

    /** CMsgGCRoutingInfo webapiParam. */
    public webapiParam: string;

    /**
     * Decodes a CMsgGCRoutingInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCRoutingInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCRoutingInfo;
}

export namespace CMsgGCRoutingInfo {

    /** RoutingMethod enum. */
    enum RoutingMethod {
        RANDOM = 0,
        DISCARD = 1,
        CLIENT_STEAMID = 2,
        PROTOBUF_FIELD_UINT64 = 3,
        WEBAPI_PARAM_UINT64 = 4
    }
}

/** Properties of a CMsgGCMsgMasterSetWebAPIRouting. */
export interface ICMsgGCMsgMasterSetWebAPIRouting {

    /** CMsgGCMsgMasterSetWebAPIRouting entries */
    entries?: (CMsgGCMsgMasterSetWebAPIRouting.IEntry[]|null);
}

/** Represents a CMsgGCMsgMasterSetWebAPIRouting. */
export class CMsgGCMsgMasterSetWebAPIRouting implements ICMsgGCMsgMasterSetWebAPIRouting {

    /**
     * Constructs a new CMsgGCMsgMasterSetWebAPIRouting.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCMsgMasterSetWebAPIRouting);

    /** CMsgGCMsgMasterSetWebAPIRouting entries. */
    public entries: CMsgGCMsgMasterSetWebAPIRouting.IEntry[];

    /**
     * Decodes a CMsgGCMsgMasterSetWebAPIRouting message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCMsgMasterSetWebAPIRouting
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCMsgMasterSetWebAPIRouting;
}

export namespace CMsgGCMsgMasterSetWebAPIRouting {

    /** Properties of an Entry. */
    interface IEntry {

        /** Entry interfaceName */
        interfaceName?: (string|null);

        /** Entry methodName */
        methodName?: (string|null);

        /** Entry routing */
        routing?: (ICMsgGCRoutingInfo|null);
    }

    /** Represents an Entry. */
    class Entry implements IEntry {

        /**
         * Constructs a new Entry.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgGCMsgMasterSetWebAPIRouting.IEntry);

        /** Entry interfaceName. */
        public interfaceName: string;

        /** Entry methodName. */
        public methodName: string;

        /** Entry routing. */
        public routing?: (ICMsgGCRoutingInfo|null);

        /**
         * Decodes an Entry message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Entry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCMsgMasterSetWebAPIRouting.Entry;
    }
}

/** Properties of a CMsgGCMsgMasterSetClientMsgRouting. */
export interface ICMsgGCMsgMasterSetClientMsgRouting {

    /** CMsgGCMsgMasterSetClientMsgRouting entries */
    entries?: (CMsgGCMsgMasterSetClientMsgRouting.IEntry[]|null);
}

/** Represents a CMsgGCMsgMasterSetClientMsgRouting. */
export class CMsgGCMsgMasterSetClientMsgRouting implements ICMsgGCMsgMasterSetClientMsgRouting {

    /**
     * Constructs a new CMsgGCMsgMasterSetClientMsgRouting.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCMsgMasterSetClientMsgRouting);

    /** CMsgGCMsgMasterSetClientMsgRouting entries. */
    public entries: CMsgGCMsgMasterSetClientMsgRouting.IEntry[];

    /**
     * Decodes a CMsgGCMsgMasterSetClientMsgRouting message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCMsgMasterSetClientMsgRouting
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCMsgMasterSetClientMsgRouting;
}

export namespace CMsgGCMsgMasterSetClientMsgRouting {

    /** Properties of an Entry. */
    interface IEntry {

        /** Entry msgType */
        msgType?: (number|null);

        /** Entry routing */
        routing?: (ICMsgGCRoutingInfo|null);
    }

    /** Represents an Entry. */
    class Entry implements IEntry {

        /**
         * Constructs a new Entry.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgGCMsgMasterSetClientMsgRouting.IEntry);

        /** Entry msgType. */
        public msgType: number;

        /** Entry routing. */
        public routing?: (ICMsgGCRoutingInfo|null);

        /**
         * Decodes an Entry message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Entry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCMsgMasterSetClientMsgRouting.Entry;
    }
}

/** Properties of a CMsgGCMsgMasterSetWebAPIRouting_Response. */
export interface ICMsgGCMsgMasterSetWebAPIRouting_Response {

    /** CMsgGCMsgMasterSetWebAPIRouting_Response eresult */
    eresult?: (number|null);
}

/** Represents a CMsgGCMsgMasterSetWebAPIRouting_Response. */
export class CMsgGCMsgMasterSetWebAPIRouting_Response implements ICMsgGCMsgMasterSetWebAPIRouting_Response {

    /**
     * Constructs a new CMsgGCMsgMasterSetWebAPIRouting_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCMsgMasterSetWebAPIRouting_Response);

    /** CMsgGCMsgMasterSetWebAPIRouting_Response eresult. */
    public eresult: number;

    /**
     * Decodes a CMsgGCMsgMasterSetWebAPIRouting_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCMsgMasterSetWebAPIRouting_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCMsgMasterSetWebAPIRouting_Response;
}

/** Properties of a CMsgGCMsgMasterSetClientMsgRouting_Response. */
export interface ICMsgGCMsgMasterSetClientMsgRouting_Response {

    /** CMsgGCMsgMasterSetClientMsgRouting_Response eresult */
    eresult?: (number|null);
}

/** Represents a CMsgGCMsgMasterSetClientMsgRouting_Response. */
export class CMsgGCMsgMasterSetClientMsgRouting_Response implements ICMsgGCMsgMasterSetClientMsgRouting_Response {

    /**
     * Constructs a new CMsgGCMsgMasterSetClientMsgRouting_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCMsgMasterSetClientMsgRouting_Response);

    /** CMsgGCMsgMasterSetClientMsgRouting_Response eresult. */
    public eresult: number;

    /**
     * Decodes a CMsgGCMsgMasterSetClientMsgRouting_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCMsgMasterSetClientMsgRouting_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCMsgMasterSetClientMsgRouting_Response;
}

/** Properties of a CMsgGCMsgSetOptions. */
export interface ICMsgGCMsgSetOptions {

    /** CMsgGCMsgSetOptions options */
    options?: (CMsgGCMsgSetOptions.Option[]|null);

    /** CMsgGCMsgSetOptions clientMsgRanges */
    clientMsgRanges?: (CMsgGCMsgSetOptions.IMessageRange[]|null);
}

/** Represents a CMsgGCMsgSetOptions. */
export class CMsgGCMsgSetOptions implements ICMsgGCMsgSetOptions {

    /**
     * Constructs a new CMsgGCMsgSetOptions.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCMsgSetOptions);

    /** CMsgGCMsgSetOptions options. */
    public options: CMsgGCMsgSetOptions.Option[];

    /** CMsgGCMsgSetOptions clientMsgRanges. */
    public clientMsgRanges: CMsgGCMsgSetOptions.IMessageRange[];

    /**
     * Decodes a CMsgGCMsgSetOptions message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCMsgSetOptions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCMsgSetOptions;
}

export namespace CMsgGCMsgSetOptions {

    /** Properties of a MessageRange. */
    interface IMessageRange {

        /** MessageRange low */
        low: number;

        /** MessageRange high */
        high: number;
    }

    /** Represents a MessageRange. */
    class MessageRange implements IMessageRange {

        /**
         * Constructs a new MessageRange.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgGCMsgSetOptions.IMessageRange);

        /** MessageRange low. */
        public low: number;

        /** MessageRange high. */
        public high: number;

        /**
         * Decodes a MessageRange message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MessageRange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCMsgSetOptions.MessageRange;
    }

    /** Option enum. */
    enum Option {
        NOTIFY_USER_SESSIONS = 0,
        NOTIFY_SERVER_SESSIONS = 1,
        NOTIFY_ACHIEVEMENTS = 2,
        NOTIFY_VAC_ACTION = 3
    }
}

/** Properties of a CMsgGCHUpdateSession. */
export interface ICMsgGCHUpdateSession {

    /** CMsgGCHUpdateSession steamId */
    steamId?: (number|Long|null);

    /** CMsgGCHUpdateSession appId */
    appId?: (number|null);

    /** CMsgGCHUpdateSession online */
    online?: (boolean|null);

    /** CMsgGCHUpdateSession serverSteamId */
    serverSteamId?: (number|Long|null);

    /** CMsgGCHUpdateSession serverAddr */
    serverAddr?: (number|null);

    /** CMsgGCHUpdateSession serverPort */
    serverPort?: (number|null);

    /** CMsgGCHUpdateSession osType */
    osType?: (number|null);

    /** CMsgGCHUpdateSession clientAddr */
    clientAddr?: (number|null);

    /** CMsgGCHUpdateSession extraFields */
    extraFields?: (CMsgGCHUpdateSession.IExtraField[]|null);
}

/** Represents a CMsgGCHUpdateSession. */
export class CMsgGCHUpdateSession implements ICMsgGCHUpdateSession {

    /**
     * Constructs a new CMsgGCHUpdateSession.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCHUpdateSession);

    /** CMsgGCHUpdateSession steamId. */
    public steamId: (number|Long);

    /** CMsgGCHUpdateSession appId. */
    public appId: number;

    /** CMsgGCHUpdateSession online. */
    public online: boolean;

    /** CMsgGCHUpdateSession serverSteamId. */
    public serverSteamId: (number|Long);

    /** CMsgGCHUpdateSession serverAddr. */
    public serverAddr: number;

    /** CMsgGCHUpdateSession serverPort. */
    public serverPort: number;

    /** CMsgGCHUpdateSession osType. */
    public osType: number;

    /** CMsgGCHUpdateSession clientAddr. */
    public clientAddr: number;

    /** CMsgGCHUpdateSession extraFields. */
    public extraFields: CMsgGCHUpdateSession.IExtraField[];

    /**
     * Decodes a CMsgGCHUpdateSession message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCHUpdateSession
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCHUpdateSession;
}

export namespace CMsgGCHUpdateSession {

    /** Properties of an ExtraField. */
    interface IExtraField {

        /** ExtraField name */
        name?: (string|null);

        /** ExtraField value */
        value?: (string|null);
    }

    /** Represents an ExtraField. */
    class ExtraField implements IExtraField {

        /**
         * Constructs a new ExtraField.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgGCHUpdateSession.IExtraField);

        /** ExtraField name. */
        public name: string;

        /** ExtraField value. */
        public value: string;

        /**
         * Decodes an ExtraField message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExtraField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCHUpdateSession.ExtraField;
    }
}

/** Properties of a CMsgNotificationOfSuspiciousActivity. */
export interface ICMsgNotificationOfSuspiciousActivity {

    /** CMsgNotificationOfSuspiciousActivity steamid */
    steamid?: (number|Long|null);

    /** CMsgNotificationOfSuspiciousActivity appid */
    appid?: (number|null);

    /** CMsgNotificationOfSuspiciousActivity multipleInstances */
    multipleInstances?: (CMsgNotificationOfSuspiciousActivity.IMultipleGameInstances|null);
}

/** Represents a CMsgNotificationOfSuspiciousActivity. */
export class CMsgNotificationOfSuspiciousActivity implements ICMsgNotificationOfSuspiciousActivity {

    /**
     * Constructs a new CMsgNotificationOfSuspiciousActivity.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgNotificationOfSuspiciousActivity);

    /** CMsgNotificationOfSuspiciousActivity steamid. */
    public steamid: (number|Long);

    /** CMsgNotificationOfSuspiciousActivity appid. */
    public appid: number;

    /** CMsgNotificationOfSuspiciousActivity multipleInstances. */
    public multipleInstances?: (CMsgNotificationOfSuspiciousActivity.IMultipleGameInstances|null);

    /**
     * Decodes a CMsgNotificationOfSuspiciousActivity message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgNotificationOfSuspiciousActivity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgNotificationOfSuspiciousActivity;
}

export namespace CMsgNotificationOfSuspiciousActivity {

    /** Properties of a MultipleGameInstances. */
    interface IMultipleGameInstances {

        /** MultipleGameInstances appInstanceCount */
        appInstanceCount?: (number|null);

        /** MultipleGameInstances otherSteamids */
        otherSteamids?: ((number|Long)[]|null);
    }

    /** Represents a MultipleGameInstances. */
    class MultipleGameInstances implements IMultipleGameInstances {

        /**
         * Constructs a new MultipleGameInstances.
         * @param [properties] Properties to set
         */
        constructor(properties?: CMsgNotificationOfSuspiciousActivity.IMultipleGameInstances);

        /** MultipleGameInstances appInstanceCount. */
        public appInstanceCount: number;

        /** MultipleGameInstances otherSteamids. */
        public otherSteamids: (number|Long)[];

        /**
         * Decodes a MultipleGameInstances message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MultipleGameInstances
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgNotificationOfSuspiciousActivity.MultipleGameInstances;
    }
}
