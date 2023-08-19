import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type ProfileJobType = MobilettoOrmObject & {
    name: string;
    profile: string;
    destinationAsset: string;
    args: string[];
    status?: string;
    owner?: string;
    started?: number;
    finished?: number;
    errorCount?: number;
};
