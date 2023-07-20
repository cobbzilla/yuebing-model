import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type PrivateConfig_autoscanType = {
    initialDelay: number;
    interval?: number;
    showTransformOutput: boolean;
    cleanupTemporaryAssets: boolean;
    deleteIncompleteUploads: boolean;
    transformConcurrency: number;
    isDefault?: boolean;
};
export type PrivateConfig_emailType = {
    host: string;
    port: number;
    user: string;
    password: string;
    secure: boolean;
    fromEmail: string;
};
export type PrivateConfig_authType = {
    verifyAccountTimeout: number;
    resetPasswordTimeout: number;
    sessionTimeout: number;
};
export type PrivateConfigType = MobilettoOrmObject & {
    auth?: PrivateConfig_authType;
    emailEnabled: boolean;
    email?: PrivateConfig_emailType;
    autoscanEnabled: boolean;
    autoscan?: PrivateConfig_autoscanType;
};