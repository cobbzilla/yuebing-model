import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type DestinationAssetType = MobilettoOrmObject & {
    name: string;
    profile: string;
    source: string;
    sourceAsset: string;
    status?: string;
    owner?: string;
    started?: number;
    finished?: number;
    errorCount?: number;
};
