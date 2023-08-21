import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type UploadJobType = MobilettoOrmObject & {
    localPath: string;
    asset: string;
    media: string;
    profile: string;
    destination: string;
    size: number;
    status?: string;
    owner?: string;
    started?: number;
    finished?: number;
    errorCount?: number;
};
