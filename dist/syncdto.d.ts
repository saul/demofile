export interface ISyncDto {
    readonly tick: number;
    readonly endtick: number;
    readonly rtdelay: number;
    readonly rcvage: number;
    readonly fragment: number;
    readonly signup_fragment: number;
    readonly tps: number;
    readonly map: string;
    readonly protocol: number;
}
