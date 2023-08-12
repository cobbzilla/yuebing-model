import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type DiscoveredAssetType = MobilettoOrmObject & {
    name?: string;
    source: string;
    status?: string;
    owner?: string;
    started?: number;
    finished?: number;
    errorCount?: number;
};
