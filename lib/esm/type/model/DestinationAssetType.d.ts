import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type DestinationAssetType = MobilettoOrmObject & {
    name?: string;
    source: string;
    profile: string;
    destinationPath: string;
    status?: string;
    owner?: string;
    started?: number;
    finished?: number;
    errorCount?: number;
};
