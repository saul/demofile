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
