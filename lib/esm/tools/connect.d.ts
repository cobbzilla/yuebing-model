import { VolumeType } from "../type/model/VolumeType.js";
import { MobilettoConnection } from "mobiletto-base/lib/cjs/types.js";
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
export declare const resolveConnectionConfig: (volume: VolumeType) => MobilettoConnectionConfig;
export declare const connectVolume: <T extends VolumeType>(volume: T) => Promise<MobilettoConnection>;
