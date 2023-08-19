import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type ProfileJobType = MobilettoOrmObject & {
    name: string;
    profile: string;
    asset: string;
    args?: string[];
    analysis?: string;
    status?: string;
    owner?: string;
    started?: number;
    finished?: number;
    errorCount?: number;
};
