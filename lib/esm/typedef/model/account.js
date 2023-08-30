var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { MobilettoOrmTypeDef, } from "mobiletto-orm-typedef";
import * as valid from "../../validation.js";
export const USERNAME_MIN_LENGTH = 2;
export const USERNAME_MAX_LENGTH = 100;
export const EMAIL_MIN_LENGTH = 6;
export const EMAIL_MAX_LENGTH = 200;
export const PASSWORD_MIN_LENGTH = 8;
export const PASSWORD_MAX_LENGTH = 100;
export const primaryAccountFields = {
    username: {
        type: "string",
        primary: true,
        min: USERNAME_MIN_LENGTH,
        max: USERNAME_MAX_LENGTH,
        regex: valid.REGEX_VALIDATORS.username,
        normalize: valid.NORMALIZE_LOWERCASE,
        updatable: false,
        tabIndex: 1,
        indexLevels: 2,
    },
    email: {
        type: "string",
        required: true,
        min: EMAIL_MIN_LENGTH,
        max: EMAIL_MAX_LENGTH,
        regex: valid.REGEX_VALIDATORS.email,
        normalize: valid.NORMALIZE_LOWERCASE,
        updatable: false,
        tabIndex: 2,
        unique: true,
        indexLevels: 2,
    },
    password: {
        type: "string",
        required: true,
        min: PASSWORD_MIN_LENGTH,
        max: PASSWORD_MAX_LENGTH,
        tabIndex: 3,
        redact: true,
    },
    firstName: {
        type: "string",
        required: false,
        min: 2,
        max: 100,
        tabIndex: 4,
    },
    lastName: {
        type: "string",
        required: false,
        min: 2,
        max: 100,
        tabIndex: 5,
    },
    locale: {
        type: "string",
        items: valid.LOCALE_ITEMS,
        required: true,
        tabIndex: 6,
    },
    flags: {
        type: "string[]",
        values: [
            "flag_welcome_email",
            "flag_can_comment",
            "flag_can_tag",
            "flag_can_edit_metadata",
            "flag_can_set_thumbnail",
        ],
        default: ["flag_welcome_email", "flag_can_comment", "flag_can_tag"],
        control: "multi",
        tabIndex: 7,
    },
};
export const ACCOUNT_TABLE_FIELDS = [
    "username",
    "admin",
    "email",
    "firstName",
    "lastName",
    "locale",
    "_meta.ctime",
    "_meta.mtime",
];
export const ACCOUNT_TEXT_SEARCH_FIELDS = ["username", "email", "firstName", "lastName"];
export const AccountTypeDef = new MobilettoOrmTypeDef({
    typeName: "account",
    shortName: "acct",
    tableFields: ACCOUNT_TABLE_FIELDS,
    search: { textSearchFields: ACCOUNT_TEXT_SEARCH_FIELDS },
    fields: Object.assign(Object.assign({}, primaryAccountFields), { admin: {
            default: false,
            tabIndex: 8,
            index: true,
            indexLevels: 0,
        } }),
    apiConfig: {
        delete: {
            permission: { owner: true },
            validate: (caller, target) => __awaiter(void 0, void 0, void 0, function* () {
                if (!caller || !target)
                    return false;
                const targetId = typeof target === "object" ? AccountTypeDef.id(target) : target;
                const callerId = AccountTypeDef.id(caller);
                // admins cannot delete themselves. another admin must unset their admin flag first.
                // non-admins can ONLY delete themselves.
                if (caller.admin && callerId === targetId) {
                    return { username: ["cannotDeleteSelf"] };
                }
                if (!caller.admin && callerId !== targetId) {
                    return { username: ["cannotDeleteOther"] };
                }
                return true;
            }),
        },
        update: {
            permission: { owner: true },
            validate: (caller, target) => __awaiter(void 0, void 0, void 0, function* () {
                if (!caller || !target)
                    return false;
                // admins cannot unset their own admin flag. another admin must change it for them
                if (AccountTypeDef.id(caller) === AccountTypeDef.id(target) && caller.admin) {
                    if (!target.admin) {
                        return { admin: ["cannotUnsetAdminOnSelf"] };
                    }
                }
                return true;
            }),
        },
        // accounts can find themselves
        lookup: { permission: { owner: true } },
        // only admins can search or create. new accounts can use the registration form, if enabled
        search: { permission: { admin: true } },
        create: { permission: { admin: true } },
    },
});
export const AuthAccountTypeDef = new MobilettoOrmTypeDef({
    typeName: "authAccount",
    shortName: "acct",
    tableFields: ACCOUNT_TABLE_FIELDS,
    fields: Object.assign(Object.assign({}, AccountTypeDef.fields), { session: {
            type: "string",
            control: "label",
            tabIndex: 8,
        } }),
});
