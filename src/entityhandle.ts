import { NUM_NETWORKED_EHANDLE_BITS, NETWORKED_EHANDLE_ENT_ENTRY_MASK, MAX_EDICT_BITS } from "./consts";

export class EntityHandle {
  constructor(public readonly value: number) { }

  get isValid() {
    return this.value != NUM_NETWORKED_EHANDLE_BITS;
  }

  get index() {
    return this.value & NETWORKED_EHANDLE_ENT_ENTRY_MASK;
  }

  get serialNum() {
    return this.value >> MAX_EDICT_BITS;
  }
}
