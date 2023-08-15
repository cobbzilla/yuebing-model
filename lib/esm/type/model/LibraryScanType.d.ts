import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type LibraryScanType = MobilettoOrmObject & {
    lock: string;
    library: string;
    status?: string;
    owner?: string;
    started?: number;
    finished?: number;
    errorCount?: number;
};
