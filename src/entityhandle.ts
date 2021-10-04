import {
  MAX_EDICT_BITS,
  NETWORKED_EHANDLE_ENT_ENTRY_MASK,
  NUM_NETWORKED_EHANDLE_BITS
} from "./consts";

export class EntityHandle {
  constructor(public readonly value: number) {}

  get isValid(): boolean {
    return this.value !== NUM_NETWORKED_EHANDLE_BITS;
  }

  get index(): number {
    return this.value & NETWORKED_EHANDLE_ENT_ENTRY_MASK;
  }

  get serialNum(): number {
    return this.value >> MAX_EDICT_BITS;
  }
}
