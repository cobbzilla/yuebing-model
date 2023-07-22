import * as yup from "yup";
export declare const PrivateConfig_autoscanSchema: yup.ObjectSchema<{
    initialDelay: number;
    interval: number | null;
    showTransformOutput: NonNullable<boolean | undefined>;
    cleanupTemporaryAssets: NonNullable<boolean | undefined>;
    deleteIncompleteUploads: NonNullable<boolean | undefined>;
    transformConcurrency: number;
    isDefault: yup.Maybe<boolean | undefined>;
}, yup.AnyObject, {
    initialDelay: 600000;
    interval: 86400000;
    showTransformOutput: undefined;
    cleanupTemporaryAssets: true;
    deleteIncompleteUploads: true;
    transformConcurrency: 1;
    isDefault: undefined;
}, "">;
export declare const PrivateConfig_emailSchema: yup.ObjectSchema<{
    host: string;
    port: number;
    user: string;
    password: string;
    secure: NonNullable<boolean | undefined>;
    fromEmail: string;
}, yup.AnyObject, {
    host: "127.0.0.1";
    port: 25;
    user: "smtp_user";
    password: undefined;
    secure: undefined;
    fromEmail: "nobody@localhost.example";
}, "">;
export declare const PrivateConfig_authSchema: yup.ObjectSchema<{
    verifyAccountTimeout: number;
    resetPasswordTimeout: number;
    sessionTimeout: number;
}, yup.AnyObject, {
    verifyAccountTimeout: 172800000;
    resetPasswordTimeout: 3600000;
    sessionTimeout: 7776000000;
}, "">;
export declare const PrivateConfigSchema: yup.ObjectSchema<{
    auth: {
        verifyAccountTimeout: number;
        resetPasswordTimeout: number;
        sessionTimeout: number;
    } | null | undefined;
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
        isDefault?: yup.Maybe<boolean | undefined>;
        initialDelay: number;
        interval: number | null;
        showTransformOutput: NonNullable<boolean | undefined>;
        cleanupTemporaryAssets: NonNullable<boolean | undefined>;
        deleteIncompleteUploads: NonNullable<boolean | undefined>;
        transformConcurrency: number;
    } | null | undefined;
}, yup.AnyObject, {
    auth: {
        verifyAccountTimeout: 172800000;
        resetPasswordTimeout: 3600000;
        sessionTimeout: 7776000000;
    };
    emailEnabled: undefined;
    email: {
        host: "127.0.0.1";
        port: 25;
        user: "smtp_user";
        password: undefined;
        secure: undefined;
        fromEmail: "nobody@localhost.example";
    };
    autoscanEnabled: undefined;
    autoscan: {
        initialDelay: 600000;
        interval: 86400000;
        showTransformOutput: undefined;
        cleanupTemporaryAssets: true;
        deleteIncompleteUploads: true;
        transformConcurrency: 1;
        isDefault: undefined;
    };
}, "">;
