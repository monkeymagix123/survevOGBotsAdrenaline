import { util } from "../../utils/util";
import { v2 } from "../../utils/v2";
import { Main, type PartialMapDef } from "./baseDefs";

const mapDef: PartialMapDef = {
    mapId: 7,
    desc: {
        name: "Cobalt",
        icon: "img/gui/cobalt.svg",
        buttonCss: "btn-mode-cobalt",
    },
    assets: {
        audio: [
            { name: "spawn_01", channel: "ui" },
            { name: "ping_unlock_01", channel: "ui" },
            { name: "ambient_lab_01", channel: "ambient" },
            { name: "log_13", channel: "sfx" },
            { name: "log_14", channel: "sfx" },
        ],
        atlases: ["gradient", "loadout", "shared", "cobalt"],
    },
    biome: {
        colors: {
            background: 134680,
            water: 13681,
            beach: 6834230,
            riverbank: 4472122,
            grass: 5069416,
            underground: 1772803,
            playerSubmerge: 1192009,
            playerGhillie: 4937830,
        },
        particles: {},
    },
    gameConfig: {
        planes: {
            crates: [
                { name: "class_shell_02", weight: 10 },
                { name: "class_shell_03", weight: 1 },
            ],
        },
        unlocks: {
            timings: [
                {
                    type: "bunker_twins_sublevel_01",
                    stagger: 0.2,
                    circleIdx: 2,
                    wait: 5,
                },
            ],
        },
    },
    /* STRIP_FROM_PROD_CLIENT:START */
    mapGen: {
        map: {
            rivers: {
                weights: [
                    // apparently cobalt only had this fixed amount of widths?
                    // I deserialized a bunch of map msgs and couldn't find a different one
                    { weight: 1, widths: [16, 14, 12, 10, 8, 6, 4] },
                ],
                spawnCabins: false,
                masks: [
                    {
                        pos: v2.create(0.5, 0.5),
                        rad: 100,
                    },
                ],
            },
        },
        customSpawnRules: {
            locationSpawns: [
                {
                    type: "bunker_structure_09",
                    pos: v2.create(0.5, 0.5),
                    rad: 50,
                    retryOnFailure: true,
                },
            ],
        },
        densitySpawns: [
            {
                stone_01cb: 350,
                barrel_01: 76,
                silo_01: 8,
                crate_01: 50,
                crate_02: 4,
                crate_03: 8,
                bush_01cb: 78,
                cache_06: 12,
                tree_01cb: 320,
                hedgehog_01: 24,
                container_01: 5,
                container_02: 5,
                container_03: 5,
                container_04: 5,
                shack_01: 7,
                outhouse_01: 5,
                loot_tier_1: 24,
                loot_tier_beach: 4,
                class_shell_01: 15,
            },
        ],
        fixedSpawns: [
            {
                bunker_structure_09: 1,
                warehouse_01: 2,
                house_red_01: { small: 3, large: 4 },
                house_red_02: { small: 3, large: 4 },
                barn_01: { small: 1, large: 3 },
                barn_02: 1,
                hut_01: 3,
                hut_02: 1, // spas hut
                hut_03: 1, // scout hut
                shack_03a: 2,
                shack_03b: { small: 2, large: 3 },
                cache_01cb: 1,
                cache_02cb: 1, // mosin tree
                cache_07: 1,
                bunker_structure_01: { odds: 0.05 },
                bunker_structure_02: 1,
                bunker_structure_03: 1,
                bunker_structure_04: 1,
                bunker_structure_05: 1,
                warehouse_complex_01: 1,
                chest_01cb: 1,
                chest_03cb: { odds: 0.2 },
                mil_crate_02: { odds: 0.25 },
                tree_02: 3,
                teahouse_complex_01su: {
                    small: 1,
                    large: 2,
                },
                stone_04: 1,
                club_complex_01: 1,
                cache_log_13: 1, // recorder crate
            },
        ],
        spawnReplacements: [
            {
                tree_01: "tree_01cb",
                stone_01: "stone_01cb",
                bush_01: "bush_01cb",
                bush_04: "bush_04cb",
                stone_03: "stone_03cb",
            },
        ],
        importantSpawns: ["bunker_structure_09"],
    },
    /* STRIP_FROM_PROD_CLIENT:END */
    gameMode: {
        maxPlayers: 80,
        perkMode: true,
        perkModeRoles: ["scout", "sniper", "healer", "demo", "assault", "tank"],
    },
};

export const Cobalt = util.mergeDeep({}, Main, mapDef);