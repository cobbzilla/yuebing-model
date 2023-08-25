import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type ProfileJobType = MobilettoOrmObject & {
    name: string;
    profile: string;
    operation: string;
    asset: string;
    analysis: boolean;
    args?: string[];
    result?: string;
    status?: string;
    owner?: string;
    started?: number;
    finished?: number;
    errorCount?: number;
};
