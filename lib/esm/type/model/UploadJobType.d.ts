import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type UploadJobType = MobilettoOrmObject & {
    path: string;
    status?: string;
    owner?: string;
    started?: number;
    finished?: number;
    errorCount?: number;
};
