import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type SourceScanType = MobilettoOrmObject & {
    lock: string;
    owner: string;
};
