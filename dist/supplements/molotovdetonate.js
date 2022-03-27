"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consts_1 = require("../consts");
const molotovLoop = 1051353634; // murmurhash.v2("molotov.loop", 1146049601)
const supplement = {
    emits: ["molotovDetonate"],
    setup: function molotovDetonate(demo) {
        if (demo.currentTick >= 0) {
            throw new Error("molotovDetonate event listeners must be added before parsing starts.");
        }
        // Find the index of the fire loop sound.
        // This is emitted when the grenade is thrown, and then stopped when it detonates.
        let fireLoopSoundIndex = -1;
        function onStringTableUpdate(e) {
            if (e.table.name === "soundprecache") {
                if (e.entry === "weapons/molotov/fire_loop_1.wav") {
                    fireLoopSoundIndex = e.entryIndex;
                }
            }
        }
        // Cache the molotov projectile class.
        // Note that this entity is shared between molotov and incendiary grenades.
        let molotovProjectileClass = -1;
        function onDataTablesReady() {
            molotovProjectileClass = demo.entities.serverClasses.findIndex(sc => sc.name === "CMolotovProjectile");
        }
        function onSound(e) {
            if (fireLoopSoundIndex < 0 || molotovProjectileClass < 0)
                return;
            for (const sound of e.sounds) {
                // We only care about the fire loop sound
                if (sound.soundNumHandle === 0) {
                    if (sound.soundNum !== fireLoopSoundIndex)
                        continue;
                }
                else {
                    // todo: never actually see this
                    if (sound.soundNumHandle !== molotovLoop)
                        continue;
                }
                // The loop sound starts when the grenade is thrown,
                // and is stopped on detonation.
                if ((sound.flags & consts_1.SND_STOP) === 0)
                    continue;
                const projectile = demo.entities.entities.get(sound.entityIndex);
                if (!projectile)
                    continue;
                // This sound is also stopped on the resulting inferno
                // (i.e. the flames produced by a detonated fire grenade).
                if (projectile.classId === molotovProjectileClass) {
                    const thrower = projectile.owner;
                    demo.emit("molotovDetonate", {
                        thrower,
                        projectile
                    });
                }
            }
        }
        demo.stringTables.on("update", onStringTableUpdate);
        demo.entities.on("datatablesready", onDataTablesReady);
        demo.on("svc_Sounds", onSound);
        return () => {
            demo.stringTables.off("update", onStringTableUpdate);
            demo.entities.off("datatablesready", onDataTablesReady);
            demo.off("svc_Sounds", onSound);
        };
    }
};
exports.default = supplement;
//# sourceMappingURL=molotovdetonate.js.map