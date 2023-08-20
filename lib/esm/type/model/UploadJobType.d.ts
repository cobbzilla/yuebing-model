import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type UploadJobType = MobilettoOrmObject & {
    localPath: string;
    sourceAsset: string;
    media: string;
    profile: string;
    destination: string;
    status?: string;
    owner?: string;
    started?: number;
    finished?: number;
    errorCount?: number;
};
