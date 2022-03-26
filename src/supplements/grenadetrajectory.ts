import * as assert from "assert";
import { DemoFile } from "../demo";
import { IEntityCreationEvent, IEntityRemoveEvent } from "../entities";
import { BaseEntity } from "../entities/baseentity";
import { Player } from "../entities/player";
import {
  IEventDecoyDetonate,
  IEventFlashbangDetonate,
  IEventHegrenadeDetonate,
  IEventSmokegrenadeDetonate
} from "../eventtypes";
import { CSVCMsgSounds } from "../protobufs/netmessages";
import { CBaseCSGrenadeProjectile, Vector } from "../sendtabletypes";
import { IMolotovDetonateEvent } from "./molotovdetonate";
import { ISupplementInfo } from "./supplementinfo";

const bounceSounds = [
  3517485368, // murmurhash.v2("incgrenade.bounce", 1146049601)
  4043884250, // murmurhash.v2("glassbottle.impacthard", 1146049601)
  900914967, // murmurhash.v2("flashbang.bounce", 1146049601)
  512390212 // murmurhash.v2("hegrenade.bounce", 1146049601)
];

export interface IGrenadeTrajectoryEvent {
  projectile: BaseEntity<CBaseCSGrenadeProjectile>;
  thrower: Player;
  trajectory: ReadonlyArray<Vector>;
}

const supplement: ISupplementInfo = {
  emits: ["grenadeTrajectory"],
  setup: function grenadeTrajectory(demo: DemoFile) {
    const trajectories: Map<number, Vector[]> = new Map();

    function onEntityCreate(event: IEntityCreationEvent) {
      // We only care about grenade projectiles
      if (!("DT_BaseCSGrenadeProjectile" in event.entity.props)) return;
      const entity = (event.entity as unknown) as BaseEntity;

      assert(!trajectories.has(entity.index));
      trajectories.set(entity.index, [entity.position]);
    }

    function onEntityRemove(event: IEntityRemoveEvent) {
      // If a projectile was thrown just before round end,
      // it would be deleted before detonating.
      trajectories.delete(event.index);
    }

    function onSound(e: CSVCMsgSounds) {
      for (const sound of e.sounds) {
        if (bounceSounds.indexOf(sound.soundNumHandle) < 0) continue;

        const projectile = (demo.entities.entities.get(
          sound.entityIndex
        ) as unknown) as BaseEntity<CBaseCSGrenadeProjectile>;

        trajectories.get(sound.entityIndex)?.push(projectile.position);
      }
    }

    function onGrenadeDetonateEvent(
      event:
        | IEventFlashbangDetonate
        | IEventDecoyDetonate
        | IEventHegrenadeDetonate
        | IEventSmokegrenadeDetonate
    ) {
      const projectile = event.entity;

      // todo: when could this be null?
      const trajectory = trajectories.get(event.entityid)!;
      trajectory.push(projectile.position);

      demo.emit("grenadeTrajectory", {
        projectile,
        thrower: event.player,
        trajectory
      });
    }

    function onMolotovDetonate({ projectile, thrower }: IMolotovDetonateEvent) {
      // todo: when could this be null?
      const trajectory = trajectories.get(projectile.index)!;
      trajectory.push(projectile.position);

      demo.emit("grenadeTrajectory", {
        projectile,
        thrower,
        trajectory
      });
    }

    demo.on("svc_Sounds", onSound);
    demo.on("molotovDetonate", onMolotovDetonate);
    demo.entities.on("create", onEntityCreate);
    demo.entities.on("remove", onEntityRemove);
    demo.gameEvents.on("decoy_detonate", onGrenadeDetonateEvent);
    demo.gameEvents.on("flashbang_detonate", onGrenadeDetonateEvent);
    demo.gameEvents.on("hegrenade_detonate", onGrenadeDetonateEvent);
    demo.gameEvents.on("smokegrenade_detonate", onGrenadeDetonateEvent);

    return () => {
      demo.off("svc_Sounds", onSound);
      demo.off("molotovDetonate", onMolotovDetonate);
      demo.entities.off("create", onEntityCreate);
      demo.entities.off("remove", onEntityRemove);
      demo.gameEvents.off("decoy_detonate", onGrenadeDetonateEvent);
      demo.gameEvents.off("flashbang_detonate", onGrenadeDetonateEvent);
      demo.gameEvents.off("hegrenade_detonate", onGrenadeDetonateEvent);
      demo.gameEvents.off("smokegrenade_detonate", onGrenadeDetonateEvent);
    };
  }
};

export default supplement;
