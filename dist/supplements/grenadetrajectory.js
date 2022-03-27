"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const projectile_1 = require("../entities/projectile");
const supplement = {
    emits: ["grenadeTrajectory"],
    setup: function grenadeTrajectory(demo) {
        const trajectories = new Map();
        function onEntityCreate(event) {
            // We only care about grenade projectiles
            if (!(event.entity instanceof projectile_1.Projectile))
                return;
            assert(!trajectories.has(event.entity.index));
            trajectories.set(event.entity.index, [event.entity.position]);
        }
        function onEntityRemove(event) {
            // If a projectile was thrown just before round end,
            // it would be deleted before detonating.
            trajectories.delete(event.index);
        }
        function onEntityChange(event) {
            const index = event.entity.index;
            if (!trajectories.has(index))
                return;
            const projectile = event.entity;
            for (const change of event.changes) {
                if (change.varName !== "m_nBounces")
                    continue;
                const oldValue = (change.oldValue || 0);
                const newValue = change.newValue;
                if (newValue > oldValue) {
                    trajectories.get(index).push(projectile.position);
                }
            }
        }
        function onGrenadeDetonateEvent(event) {
            const projectile = event.entity;
            // todo: when could this be null?
            const trajectory = trajectories.get(event.entityid);
            trajectory.push(projectile.position);
            demo.emit("grenadeTrajectory", {
                projectile,
                thrower: event.player,
                trajectory
            });
        }
        function onMolotovDetonate({ projectile, thrower }) {
            // todo: when could this be null?
            const trajectory = trajectories.get(projectile.index);
            trajectory.push(projectile.position);
            demo.emit("grenadeTrajectory", {
                projectile,
                thrower,
                trajectory
            });
        }
        demo.on("molotovDetonate", onMolotovDetonate);
        demo.entities.on("create", onEntityCreate);
        demo.entities.on("change", onEntityChange);
        demo.entities.on("remove", onEntityRemove);
        demo.gameEvents.on("decoy_detonate", onGrenadeDetonateEvent);
        demo.gameEvents.on("flashbang_detonate", onGrenadeDetonateEvent);
        demo.gameEvents.on("hegrenade_detonate", onGrenadeDetonateEvent);
        demo.gameEvents.on("smokegrenade_detonate", onGrenadeDetonateEvent);
        return () => {
            demo.off("molotovDetonate", onMolotovDetonate);
            demo.entities.off("create", onEntityCreate);
            demo.entities.off("change", onEntityChange);
            demo.entities.off("remove", onEntityRemove);
            demo.gameEvents.off("decoy_detonate", onGrenadeDetonateEvent);
            demo.gameEvents.off("flashbang_detonate", onGrenadeDetonateEvent);
            demo.gameEvents.off("hegrenade_detonate", onGrenadeDetonateEvent);
            demo.gameEvents.off("smokegrenade_detonate", onGrenadeDetonateEvent);
        };
    }
};
exports.default = supplement;
//# sourceMappingURL=grenadetrajectory.js.map