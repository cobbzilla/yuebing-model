// DO NOT EDIT THIS FILE. AUTO-GENERATED BY mobiletto-orm-typedef-gen
import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type LibraryScanType = MobilettoOrmObject & {
    library: string;
    status?: string;
    owner?: string;
    started?: number;
    finished?: number;
    errorCount?: number;
};
