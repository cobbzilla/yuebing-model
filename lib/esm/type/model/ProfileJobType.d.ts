import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type ProfileJobType = MobilettoOrmObject & {
    name: string;
    profile: string;
    asset: string;
    args?: string[];
    result?: string;
    status?: string;
    owner?: string;
    started?: number;
    finished?: number;
    errorCount?: number;
};
