import * as assert from "assert";
import { DemoFile } from "../demo";
import {
  IEntityChangeEvent,
  IEntityCreationEvent,
  IEntityRemoveEvent
} from "../entities";
import { Player } from "../entities/player";
import { Projectile } from "../entities/projectile";
import {
  IEventDecoyDetonate,
  IEventFlashbangDetonate,
  IEventHegrenadeDetonate,
  IEventSmokegrenadeDetonate
} from "../eventtypes";
import { Vector } from "../sendtabletypes";
import { IMolotovDetonateEvent } from "./molotovdetonate";
import { ISupplementInfo } from "./supplementinfo";

export interface IGrenadeTrajectoryEvent {
  projectile: Projectile;
  thrower: Player;
  trajectory: ReadonlyArray<Vector>;
}

const supplement: ISupplementInfo = {
  emits: ["grenadeTrajectory"],
  setup: function grenadeTrajectory(demo: DemoFile) {
    const trajectories: Map<number, Vector[]> = new Map();

    function onEntityCreate(event: IEntityCreationEvent) {
      // We only care about grenade projectiles
      if (!(event.entity instanceof Projectile)) return;

      assert(!trajectories.has(event.entity.index));
      trajectories.set(event.entity.index, [event.entity.position]);
    }

    function onEntityRemove(event: IEntityRemoveEvent) {
      // If a projectile was thrown just before round end,
      // it would be deleted before detonating.
      trajectories.delete(event.index);
    }

    function onEntityChange(event: IEntityChangeEvent) {
      const index = event.entity.index;
      if (!trajectories.has(index)) return;
      const projectile = (event.entity as unknown) as Projectile;

      for (const change of event.changes) {
        if (change.varName !== "m_nBounces") continue;
        const oldValue = (change.oldValue || 0) as number;
        const newValue = change.newValue;
        if (newValue > oldValue) {
          trajectories.get(index)!.push(projectile.position);
        }
      }
    }

    function onGrenadeDetonateEvent(
      event:
        | IEventFlashbangDetonate
        | IEventDecoyDetonate
        | IEventHegrenadeDetonate
        | IEventSmokegrenadeDetonate
    ) {
      const projectile = event.entity as Projectile;

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

export default supplement;
