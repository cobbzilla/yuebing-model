import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type ScanLockType = MobilettoOrmObject & {
    lock: string;
    owner?: string;
};
