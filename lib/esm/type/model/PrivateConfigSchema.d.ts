import * as yup from "yup";
export declare const PrivateConfig_autoscanSchema: yup.ObjectSchema<{
    initialDelay: number;
    showTransformOutput: NonNullable<boolean | undefined>;
    cleanupTemporaryAssets: NonNullable<boolean | undefined>;
    deleteIncompleteUploads: NonNullable<boolean | undefined>;
    transformConcurrency: number;
}, yup.AnyObject, {
    initialDelay: 600000;
    showTransformOutput: undefined;
    cleanupTemporaryAssets: true;
    deleteIncompleteUploads: true;
    transformConcurrency: 1;
}, "">;
export declare const PrivateConfig_emailSchema: yup.ObjectSchema<{
    host: string;
    port: number;
    user: string;
    password: string;
    secure: NonNullable<boolean | undefined>;
    fromEmail: string;
}, yup.AnyObject, {
    host: undefined;
    port: undefined;
    user: undefined;
    password: undefined;
    secure: undefined;
    fromEmail: undefined;
}, "">;
export declare const PrivateConfigSchema: yup.ObjectSchema<{
    verifyAccountTimeout: number;
    resetPasswordTimeout: number;
    sessionTimeout: number;
    emailEnabled: NonNullable<boolean | undefined>;
    email: {
        password: string;
        host: string;
        port: number;
        user: string;
        secure: NonNullable<boolean | undefined>;
        fromEmail: string;
    } | null | undefined;
    autoscanEnabled: NonNullable<boolean | undefined>;
    autoscan: {
        initialDelay: number;
        showTransformOutput: NonNullable<boolean | undefined>;
        cleanupTemporaryAssets: NonNullable<boolean | undefined>;
        deleteIncompleteUploads: NonNullable<boolean | undefined>;
        transformConcurrency: number;
    } | null | undefined;
}, yup.AnyObject, {
    verifyAccountTimeout: 172800000;
    resetPasswordTimeout: 3600000;
    sessionTimeout: 86400000;
    emailEnabled: undefined;
    email: {
        host: undefined;
        port: undefined;
        user: undefined;
        password: undefined;
        secure: undefined;
        fromEmail: undefined;
    };
    autoscanEnabled: undefined;
    autoscan: {
        initialDelay: 600000;
        showTransformOutput: undefined;
        cleanupTemporaryAssets: true;
        deleteIncompleteUploads: true;
        transformConcurrency: 1;
    };
}, "">;
