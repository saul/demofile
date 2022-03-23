import {
  INVALID_NETWORKED_EHANDLE_VALUE,
  MAX_EDICT_BITS,
  NETWORKED_EHANDLE_ENT_ENTRY_MASK
} from "./consts";

export class EntityHandle {
  constructor(public readonly value: number) {}

  get isValid(): boolean {
    return this.value !== INVALID_NETWORKED_EHANDLE_VALUE;
  }

  get index(): number {
    return this.value & NETWORKED_EHANDLE_ENT_ENTRY_MASK;
  }

  get serialNum(): number {
    return this.value >> MAX_EDICT_BITS;
  }
}
