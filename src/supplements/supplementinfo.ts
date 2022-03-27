import { DemoFile } from "../demo";

export interface ISupplementInfo {
  /** Function to setup the supplement. Returns a cleanup function. */
  setup: (demo: DemoFile) => () => void;

  /** Events emitted by this supplement. */
  emits: ReadonlyArray<string>;
}
