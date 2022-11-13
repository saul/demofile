/*
{"tick":626196,"endtick":626580,"rtdelay":260.875694818,"rcvage":245.945078685,"fragment":1629,"signup_fragment":0,"tps":128,"token_redirect":"token/s85568392924415606t1668097959","map":"de_inferno","protocol":4}
*/

export interface ISyncDto {
  readonly tick: number;
  readonly endtick: number;
  readonly rtdelay: number;
  readonly rcvage: number;
  readonly fragment: number;
  readonly signup_fragment: number;
  readonly tps: number;
  readonly token_redirect: string | undefined;
  readonly map: string;
  readonly protocol: number;
}
