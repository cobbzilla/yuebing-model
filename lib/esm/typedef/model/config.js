var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { MobilettoOrmTypeDef } from "mobiletto-orm-typedef";
import { LIST_OF_EMAILS_REGEX, REGEX_VALIDATORS } from "../../validation.js";
import { FALLBACK_DEFAULT_LANG } from "yuebing-messages";
import { EMAIL_MAX_LENGTH, EMAIL_MIN_LENGTH } from "./account.js";
import { DEFAULT_ENCRYPTION_ALGO } from "./volume.js";
import * as valid from "../../validation.js";
export const PublicConfigTypeDef = new MobilettoOrmTypeDef({
    typeName: "publicConfig",
    shortName: "cfg~public",
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
        defaultLocale: {
            required: true,
            type: "string",
            items: valid.LOCALE_ITEMS,
            default: FALLBACK_DEFAULT_LANG,
        },
        emailEnabled: {
            transient: true,
            required: true,
            control: "hidden",
            default: false,
        },
        isDefault: {
            transient: true,
            required: false,
            default: false,
            control: "hidden",
            normalize: () => Promise.resolve(false),
        },
        needsAdmin: {
            transient: true,
            required: false,
            default: false,
            control: "hidden",
        },
        crypto: {
            transient: true,
            required: false,
            control: "hidden",
            fields: {
                ciphers: {
                    required: false,
                    default: DEFAULT_ENCRYPTION_ALGO,
                    values: [DEFAULT_ENCRYPTION_ALGO],
                    control: "hidden",
                },
            },
        },
    },
});
export const DEFAULT_BCRYPT_TIME_TARGET = 350;
export const PrivateConfigTypeDef = new MobilettoOrmTypeDef({
    typeName: "privateConfig",
    shortName: "cfg~private",
    singleton: "private",
    fields: {
        auth: {
            fields: {
                limitRegistration: {
                    required: false,
                    type: "string",
                    regex: LIST_OF_EMAILS_REGEX,
                    normalize: (v) => __awaiter(void 0, void 0, void 0, function* () { return Promise.resolve(v ? v.toString().replace(/[,\s]+/, "\n") : v); }),
                    default: "",
                    control: "textarea",
                },
                verifyAccountTimeout: {
                    required: true,
                    minValue: 1000 * 60,
                    maxValue: 1000 * 60 * 60 * 24 * 30,
                    default: 1000 * 60 * 60 * 24 * 2,
                    control: "duration",
                },
                resetPasswordTimeout: {
                    required: true,
                    minValue: 1000 * 60,
                    maxValue: 1000 * 60 * 60 * 24,
                    default: 1000 * 60 * 60,
                    control: "duration",
                },
                sessionTimeout: {
                    required: true,
                    minValue: 1000 * 60 * 60,
                    maxValue: 1000 * 60 * 60 * 24 * 366 * 100,
                    default: 1000 * 60 * 60 * 24 * 90,
                    control: "duration",
                },
                bcryptTimeTarget: {
                    required: true,
                    minValue: 200,
                    maxValue: 1000 * 5,
                    default: DEFAULT_BCRYPT_TIME_TARGET,
                    control: "text",
                },
            },
        },
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
                    default: "127.0.0.1",
                },
                port: {
                    required: true,
                    minValue: 10,
                    maxValue: 65000,
                    default: 25,
                    control: "text",
                },
                user: {
                    required: true,
                    min: 2,
                    max: 100,
                    default: "smtp_user",
                },
                password: {
                    required: true,
                    min: 2,
                    max: 100,
                    default: "",
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
                    default: "nobody@localhost.example",
                },
            },
        },
        isDefault: {
            required: false,
            default: false,
            transient: true,
            control: "hidden",
        },
    },
});
export const LocalConfigTypeDef = new MobilettoOrmTypeDef({
    typeName: "localConfig",
    shortName: "cfg~local",
    singleton: "local",
    scope: "local",
    fields: {
        systemName: {
            required: true,
            updatable: false,
            control: "label",
            min: 10,
            max: 1000,
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
                    minValue: 1000 * 60,
                    maxValue: 1000 * 60 * 60,
                    default: 1000 * 60 * 10,
                    control: "duration",
                },
            },
        },
    },
});
