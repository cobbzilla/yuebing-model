// DO NOT EDIT THIS FILE. AUTO-GENERATED BY mobiletto-orm-typedef-gen
import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type SourceAssetType = MobilettoOrmObject & {
    name: string;
    source: string;
    status?: string;
    owner?: string;
    started?: number;
    finished?: number;
    errorCount?: number;
};
