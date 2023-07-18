import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type PrivateConfig_autoscanType = {
    initialDelay: number;
    showTransformOutput: boolean;
    cleanupTemporaryAssets: boolean;
    deleteIncompleteUploads: boolean;
    transformConcurrency: number;
};
export type PrivateConfig_emailType = {
    host: string;
    port: number;
    user: string;
    password: string;
    secure: boolean;
    fromEmail: string;
};
export type PrivateConfigType = MobilettoOrmObject & {
    verifyAccountTimeout: number;
    resetPasswordTimeout: number;
    sessionTimeout: number;
    emailEnabled: boolean;
    email?: PrivateConfig_emailType;
    autoscanEnabled: boolean;
    autoscan?: PrivateConfig_autoscanType;
};
