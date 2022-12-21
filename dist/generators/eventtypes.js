"use strict";
/* eslint-disable no-console */
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const fs = require("fs");
const demo_1 = require("../demo");
// Pulled from IHLTVDirector::GetModEvents
const hltvModEvents = new Set([
    "achievement_earned",
    "announce_phase_end",
    "begin_new_match",
    "bomb_begindefuse",
    "bomb_beginplant",
    "bomb_defused",
    "bomb_dropped",
    "bomb_exploded",
    "bomb_pickup",
    "bomb_planted",
    "bot_takeover",
    "buytime_ended",
    "choppers_incoming_warning",
    "cs_game_disconnected",
    "cs_match_end_restart",
    "cs_pre_restart",
    "cs_round_final_beep",
    "cs_round_start_beep",
    "cs_win_panel_match",
    "cs_win_panel_round",
    "decoy_detonate",
    "decoy_started",
    "defuser_dropped",
    "defuser_pickup",
    "dm_bonus_weapon_start",
    "endmatch_cmm_start_reveal_items",
    "endmatch_mapvote_selecting_map",
    "firstbombs_incoming_warning",
    "flashbang_detonate",
    "game_newmap",
    "hegrenade_detonate",
    "hltv_chat",
    "hltv_status",
    "hltv_status",
    "hostage_hurt",
    "hostage_killed",
    "hostage_rescued",
    "hostage_rescued_all",
    "inferno_expire",
    "inferno_startburn",
    "item_equip",
    "item_found",
    "item_pickup",
    "item_remove",
    "items_gifted",
    "other_death",
    "player_blind",
    "player_changename",
    "player_chat",
    "player_connect",
    "player_connect_full",
    "player_death",
    "player_disconnect",
    "player_falldamage",
    "player_footstep",
    "player_hurt",
    "player_info",
    "player_jump",
    "player_spawn",
    "player_team",
    "round_announce_final",
    "round_announce_last_round_half",
    "round_announce_match_point",
    "round_announce_match_start",
    "round_announce_warmup",
    "round_end",
    "round_freeze_end",
    "round_mvp",
    "round_officially_ended",
    "round_poststart",
    "round_prestart",
    "round_start",
    "round_time_warning",
    "seasoncoin_levelup",
    "server_cvar",
    "server_spawn",
    "smokegrenade_detonate",
    "smokegrenade_expired",
    "sniper_warning",
    "survival_paradrop_break",
    "survival_paradrop_spawn",
    "teamplay_broadcast_audio",
    "tournament_reward",
    "weapon_fire",
    "weapon_fire_on_empty",
    "weapon_outofammo",
    "weapon_reload",
    "weapon_zoom"
]);
const mappings = {
    userid: (eventName) => {
        if (eventName === "player_connect")
            return null;
        return {
            player: ["Player", `entities.getByUserId($$)`]
        };
    },
    entindex: (eventName) => ({
        entity: [
            eventName === "bomb_dropped" ? "BaseEntity<ST.CC4>" : "BaseEntity",
            `entities.entities.get($$)`
        ]
    }),
    hostage: () => ({
        entity: ["BaseEntity<ST.CHostage>", `entities.entities.get($$)`]
    }),
    botid: () => ({
        bot: ["Player", `entities.getByUserId($$)`]
    }),
    funfact_player: () => ({
        player: ["Player", `entities.entities.get($$)`]
    }),
    otherid: () => ({
        victim: ["BaseEntity", `entities.entities.get($$)`]
    }),
    attacker: () => ({
        attackerEntity: ["Player | null", `entities.getByUserId($$)`]
    }),
    assister: () => ({
        assisterEntity: ["Player | null", `entities.getByUserId($$)`]
    }),
    entityid: (eventName) => {
        const typeName = eventName.startsWith("decoy_")
            ? `BaseEntity<ST.CDecoyProjectile>`
            : eventName.startsWith("defuser_")
                ? `BaseEntity` // no CItemDefuser
                : eventName.startsWith("flashbang_") || eventName === "player_blind"
                    ? `BaseEntity<ST.CBaseCSGrenadeProjectile>` // no CFlashbangProjectile
                    : eventName.startsWith("hegrenade_")
                        ? `BaseEntity<ST.CBaseCSGrenadeProjectile>` // no CHEGrenadeProjectile
                        : eventName.startsWith("inferno_")
                            ? `BaseEntity<ST.CInferno>`
                            : eventName.startsWith("smokegrenade_")
                                ? `BaseEntity<ST.CSmokeGrenadeProjectile>`
                                : "BaseEntity";
        return {
            entity: [typeName, `entities.entities.get($$)`]
        };
    },
    defindex: () => ({
        itemDefinition: [
            "IItemDefinition | null",
            "itemDefinitionIndexMap[$$] || null"
        ]
    }),
    weapon_fauxitemid: () => ({
        itemDefinition: [
            "IItemDefinition | null",
            `$$ != "" ? itemDefinitionIndexMap[Long.fromString($$, true).and(0xFFFF).toString()] : null`
        ],
        paintKit: [
            "IPaintKit | null",
            `$$ != "" ? paintKitIndexMap[Long.fromString($$, true).shiftRightUnsigned(16).and(0xFFFF).toString()] : null`
        ]
    }),
    weapon_originalowner_xuid: () => ({
        originalOwner: ["Player | null", `entities.getBySteam64Id($$)`]
    }),
    accountid: () => ({
        entity: ["Player", `entities.getByAccountId($$)`]
    })
};
function parseDemoFile(path) {
    fs.readFile(path, (err, buffer) => {
        assert.ifError(err);
        const demoFile = new demo_1.DemoFile();
        function eventNameToInterfaceName(name) {
            const camelCased = name.replace(/(^\w|_\w)/g, g => g.toUpperCase().replace("_", ""));
            return `IEvent${camelCased}`;
        }
        /*
         * Event key types:
         * TYPE_LOCAL = 0,	// not networked
         * TYPE_STRING = 1,	// zero terminated ASCII string
         * TYPE_FLOAT = 2,		// float 32 bit
         * TYPE_LONG = 3,		// signed int 32 bit
         * TYPE_SHORT = 4,		// signed int 16 bit
         * TYPE_BYTE = 5,		// unsigned int 8 bit
         * TYPE_BOOL = 6		// unsigned int 1 bit
         * TYPE_UINT64 = 7		// unsigned int 64 bit
         * TYPE_WSTRING = 8		// wchar_t byte array
         */
        demoFile.on("svc_GameEventList", e => {
            console.log(`/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument, sonarjs/no-duplicated-branches */`);
            console.log("// DO NOT MODIFY!");
            console.log("// Auto-generated by ./generators/eventtypes.ts");
            console.log("");
            console.log(`import { Player } from "./entities/player";`);
            console.log(`import { BaseEntity } from "./entities/baseentity";`);
            console.log(`import { Entities } from "./entities";`);
            console.log(`import { IItemDefinition, itemDefinitionIndexMap, IPaintKit, paintKitIndexMap } from "./entities/itemdefs";`);
            console.log(`import * as ST from "./sendtabletypes";`);
            console.log(`import * as Long from "long";`);
            console.log("");
            const descriptors = e.descriptors
                .filter(desc => hltvModEvents.has(desc.name))
                .sort((x, y) => x.name.localeCompare(y.name));
            const perEventAnnotations = {};
            for (const desc of descriptors) {
                const interfaceName = eventNameToInterfaceName(desc.name);
                console.log(`export interface ${interfaceName} {`);
                const annotations = [];
                for (const key of desc.keys) {
                    let typeStr;
                    if (key.type === 1) {
                        typeStr = "string";
                    }
                    else if (key.type <= 5) {
                        typeStr = "number";
                    }
                    else if (key.type === 6) {
                        typeStr = "boolean";
                    }
                    else if (key.type === 7) {
                        typeStr = "Long";
                    }
                    else {
                        throw new Error(`Unexpected event type ${key.type}`);
                    }
                    console.log(`  ${key.name}: ${typeStr};`);
                    const mapping = mappings[key.name];
                    if (mapping != null) {
                        const extra = mapping(desc.name) || {};
                        for (const [extraVar, [extraTypeStr, funcName]] of Object.entries(extra)) {
                            console.log(`  ${extraVar}: ${extraTypeStr};`);
                            annotations.push(`    event.${extraVar} = ${funcName.replace(/\$\$/g, "event." + key.name)}`);
                        }
                    }
                    if (annotations.length > 0) {
                        perEventAnnotations[desc.name] = annotations;
                    }
                }
                console.log("}");
                console.log("");
            }
            console.log(`export function annotateEvent(entities: Entities, eventName: string, event: any): any {`);
            let isFirst = true;
            for (const [eventName, annotations] of Object.entries(perEventAnnotations)) {
                const prefix = isFirst ? `` : `else `;
                isFirst = false;
                console.log(`  ${prefix}if (eventName === "${eventName}") {`);
                for (const line of annotations) {
                    console.log(line);
                }
                console.log(`  }`);
            }
            console.log(`  return event;`);
            console.log(`}`);
            console.log("");
            const nonSpecificNames = [];
            for (const desc of descriptors) {
                const interfaceName = `INonSpecificGame${eventNameToInterfaceName(desc.name).substring(1)}`;
                nonSpecificNames.push(interfaceName);
                console.log(`export interface ${interfaceName} {`);
                console.log(`  name: '${desc.name}';`);
                console.log(`  event: ${eventNameToInterfaceName(desc.name)};`);
                console.log(`}`);
                console.log();
            }
            console.log("export type INonSpecificGameEvent =");
            for (let i = 0; i < nonSpecificNames.length; ++i) {
                if (i < nonSpecificNames.length - 1) {
                    console.log(`  ${nonSpecificNames[i]} |`);
                }
                else {
                    console.log(`  ${nonSpecificNames[i]};`);
                }
            }
            console.log("");
            console.log(`declare module "./gameevents" {`);
            console.log("  export interface GameEvents {");
            console.log(`    on(event: "event", listener: (event: INonSpecificGameEvent) => void): this;`);
            for (const desc of descriptors) {
                console.log(`    on(event: "${desc.name}", listener: (event: ${eventNameToInterfaceName(desc.name)}) => void): this;`);
            }
            console.log("  }");
            console.log("}");
            // We're finished parsing now
            demoFile.cancel();
        });
        demoFile.parse(buffer);
    });
}
if (process.argv.length == 3) {
    parseDemoFile(process.argv[2]);
}
else {
    console.error("expected args: <path to .dem>");
    process.exitCode = 1;
}
//# sourceMappingURL=eventtypes.js.map