import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type AnalyzedAssetType = MobilettoOrmObject & {
    name?: string;
    source: string;
    meta?: string;
    mediainfo?: string;
    status?: string;
    owner?: string;
    started?: number;
    finished?: number;
    errorCount?: number;
};
