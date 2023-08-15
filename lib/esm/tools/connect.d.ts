import { VolumeType } from "../type/model/VolumeType.js";
export type MobilettoConnectionConfig = {
    key: string;
    secret?: string;
    opts?: Record<string, unknown>;
};
export type MobilettoConnectionConfigResolver = {
    key: (cfg: any) => string;
    secret: (cfg: any) => string | undefined;
    opts: (cfg: any) => Record<string, unknown> | undefined;
};
export declare const resolveConnectionConfig: (config: VolumeType) => MobilettoConnectionConfig;
