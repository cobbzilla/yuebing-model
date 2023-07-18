import { MobilettoOrmFieldDefConfig, MobilettoOrmTypeDef } from "mobiletto-orm-typedef";
import { LIST_OF_EMAILS_REGEX, REGEX_VALIDATORS } from "../../validation.js";
import { FALLBACK_DEFAULT_LANG, YUEBING_LOCALES } from "yuebing-messages";
import { EMAIL_MAX_LENGTH, EMAIL_MIN_LENGTH } from "./account.js";

const AUTOSCAN_INTERVAL_FIELD: MobilettoOrmFieldDefConfig = {
    type: "number",
    minValue: 1000 * 60, // 1 minute
    maxValue: 1000 * 60 * 60 * 24 * 366, // 366 days
    default: 1000 * 60 * 60 * 24, // default 24 hours
    control: "duration",
};

export const PublicConfigTypeDef = new MobilettoOrmTypeDef({
    typeName: "publicConfig",
    idPrefix: "cfg~public",
    singleton: "public",
    fields: {
        public: {
            required: true,
            default: false,
        },
        title: {
            required: true,
            default: "Yuebing 🥮",
        },
        siteUrl: {
            required: true,
            default: "http://127.0.0.1:3000",
        },
        registrationEnabled: {
            required: true,
            default: true,
        },
        inviteFriendsEnabled: {
            required: true,
            default: true,
        },
        limitRegistration: {
            required: false,
            type: "string",
            regex: LIST_OF_EMAILS_REGEX,
            normalize: (v) => (v ? v.toString().replace(/[,\s]+/, "\n") : v),
        },
        defaultLocale: {
            required: true,
            type: "string",
            values: YUEBING_LOCALES,
            default: FALLBACK_DEFAULT_LANG,
        },
        verifyAccountTimeout: {
            required: true,
            minValue: 1000 * 60, // 1 minute
            maxValue: 1000 * 60 * 60 * 24 * 30, // 30 days
            default: 1000 * 60 * 60 * 24 * 2, // 2 days
            control: "duration",
        },
        resetPasswordTimeout: {
            required: true,
            minValue: 1000 * 60, // 1 minute
            maxValue: 1000 * 60 * 60 * 24, // 1 day
            default: 1000 * 60 * 60, // 1 hour
            control: "duration",
        },
        defaultAutoscanInterval: AUTOSCAN_INTERVAL_FIELD,
        emailEnabled: {
            required: true,
            default: false,
        },
    },
});

export const PrivateConfigTypeDef = new MobilettoOrmTypeDef({
    typeName: "privateConfig",
    idPrefix: "cfg~private",
    singleton: "private",
    fields: {
        emailEnabled: {
            required: true,
            default: false,
        },
        email: {
            when: (v) => v.emailEnabled === true,
            fields: {
                host: {
                    required: true,
                    min: 6,
                    max: 128,
                    regex: REGEX_VALIDATORS.host,
                },
                port: {
                    required: true,
                    minValue: 10,
                    maxValue: 65000,
                },
                user: {
                    required: true,
                    min: 2,
                    max: 100,
                },
                password: {
                    required: true,
                    min: 2,
                    max: 100,
                },
                secure: {
                    required: true,
                    default: false,
                },
                fromEmail: {
                    required: true,
                    min: EMAIL_MIN_LENGTH,
                    max: EMAIL_MAX_LENGTH,
                    regex: REGEX_VALIDATORS.email,
                },
            },
        },
        autoscanEnabled: {
            required: true,
            default: false,
        },
        autoscan: {
            when: (v) => v.autoscanEnabled === true,
            fields: {
                initialDelay: {
                    required: true,
                    minValue: 1000 * 60, // 1 minute
                    maxValue: 1000 * 60 * 60, // 1 hour
                    default: 1000 * 60 * 10, // 10 minutes
                    control: "duration",
                },
                showTransformOutput: {
                    required: true,
                    default: false,
                },
                cleanupTemporaryAssets: {
                    required: true,
                    default: true,
                },
                deleteIncompleteUploads: {
                    required: true,
                    default: true,
                },
                transformConcurrency: {
                    required: true,
                    minValue: 1,
                    values: [...Array(129).keys()].slice(1),
                    default: 1,
                },
            },
        },
    },
});
