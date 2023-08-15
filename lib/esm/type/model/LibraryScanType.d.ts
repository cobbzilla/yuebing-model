import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type LibraryScanType = MobilettoOrmObject & {
    name: string;
    library: string;
    status?: string;
    owner?: string;
    started?: number;
    finished?: number;
    errorCount?: number;
};
