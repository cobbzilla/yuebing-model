import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type SourceScanType = MobilettoOrmObject & {
    lock: string;
    source: string;
    status?: string;
    owner?: string;
    started?: number;
    finished?: number;
    errorCount?: number;
};
