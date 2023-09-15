import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type LibraryScanType = MobilettoOrmObject & {
    scanId: string;
    scheduled: number;
    library: string;
    status?: string;
    owner?: string;
    started?: number;
    finished?: number;
    errorCount?: number;
};
