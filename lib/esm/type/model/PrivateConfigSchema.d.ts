import * as yup from "yup";
export declare const PrivateConfig_autoscanSchemaFields: {
    initialDelay: yup.NumberSchema<number, yup.AnyObject, 600000, "d">;
    interval: yup.NumberSchema<yup.Maybe<number | undefined>, yup.AnyObject, 86400000, "d">;
    showTransformOutput: yup.BooleanSchema<NonNullable<boolean | undefined>, yup.AnyObject, undefined, "">;
    cleanupTemporaryAssets: yup.BooleanSchema<NonNullable<boolean | undefined>, yup.AnyObject, true, "d">;
    deleteIncompleteUploads: yup.BooleanSchema<NonNullable<boolean | undefined>, yup.AnyObject, true, "d">;
    transformConcurrency: yup.NumberSchema<number, yup.AnyObject, 1, "d">;
    isDefault: yup.BooleanSchema<yup.Maybe<boolean | undefined>, yup.AnyObject, undefined, "">;
};
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
export declare const PrivateConfig_emailSchemaFields: {
    host: yup.StringSchema<string, yup.AnyObject, "127.0.0.1", "d">;
    port: yup.NumberSchema<number, yup.AnyObject, 25, "d">;
    user: yup.StringSchema<string, yup.AnyObject, "smtp_user", "d">;
    password: yup.StringSchema<string, yup.AnyObject, undefined, "">;
    secure: yup.BooleanSchema<NonNullable<boolean | undefined>, yup.AnyObject, undefined, "">;
    fromEmail: yup.StringSchema<string, yup.AnyObject, "nobody@localhost.example", "d">;
};
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
export declare const PrivateConfig_authSchemaFields: {
    verifyAccountTimeout: yup.NumberSchema<number, yup.AnyObject, 172800000, "d">;
    resetPasswordTimeout: yup.NumberSchema<number, yup.AnyObject, 3600000, "d">;
    sessionTimeout: yup.NumberSchema<number, yup.AnyObject, 7776000000, "d">;
};
export declare const PrivateConfig_authSchema: yup.ObjectSchema<{
    verifyAccountTimeout: number;
    resetPasswordTimeout: number;
    sessionTimeout: number;
}, yup.AnyObject, {
    verifyAccountTimeout: 172800000;
    resetPasswordTimeout: 3600000;
    sessionTimeout: 7776000000;
}, "">;
export declare const PrivateConfigSchemaFields: {
    auth: yup.ObjectSchema<yup.Maybe<{
        verifyAccountTimeout: number;
        resetPasswordTimeout: number;
        sessionTimeout: number;
    }>, yup.AnyObject, {
        verifyAccountTimeout: 172800000;
        resetPasswordTimeout: 3600000;
        sessionTimeout: 7776000000;
    }, "">;
    emailEnabled: yup.BooleanSchema<NonNullable<boolean | undefined>, yup.AnyObject, undefined, "">;
    email: yup.ObjectSchema<yup.Maybe<{
        host: string;
        port: number;
        user: string;
        password: string;
        secure: NonNullable<boolean | undefined>;
        fromEmail: string;
    }>, yup.AnyObject, {
        host: "127.0.0.1";
        port: 25;
        user: "smtp_user";
        password: undefined;
        secure: undefined;
        fromEmail: "nobody@localhost.example";
    }, "">;
    autoscanEnabled: yup.BooleanSchema<NonNullable<boolean | undefined>, yup.AnyObject, undefined, "">;
    autoscan: yup.ObjectSchema<yup.Maybe<{
        initialDelay: number;
        interval: number | null;
        showTransformOutput: NonNullable<boolean | undefined>;
        cleanupTemporaryAssets: NonNullable<boolean | undefined>;
        deleteIncompleteUploads: NonNullable<boolean | undefined>;
        transformConcurrency: number;
        isDefault: yup.Maybe<boolean | undefined>;
    }>, yup.AnyObject, {
        initialDelay: 600000;
        interval: 86400000;
        showTransformOutput: undefined;
        cleanupTemporaryAssets: true;
        deleteIncompleteUploads: true;
        transformConcurrency: 1;
        isDefault: undefined;
    }, "">;
};
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
