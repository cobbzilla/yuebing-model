import { MobilettoOrmTypeDef } from "mobiletto-orm-typedef-gen";
import { YUEBING_LOCALES, YUEBING_DEFAULT_LOCALE } from "../../locale.js";
import * as valid from "../../validation.js";
export const LOGIN_MIN_LENGTH = 2;
export const LOGIN_MAX_LENGTH = 100;
export const PASSWORD_MIN_LENGTH = 8;
export const PASSWORD_MAX_LENGTH = 100;
export const primaryAccountFields = {
    username: {
        type: "string",
        primary: true,
        min: LOGIN_MIN_LENGTH,
        max: LOGIN_MAX_LENGTH,
        regex: valid.REGEX_VALIDATORS.username,
        normalize: (v) => v.toLowerCase(),
        updatable: false,
        tabIndex: 1,
    },
    email: {
        type: "string",
        required: true,
        min: LOGIN_MIN_LENGTH,
        max: LOGIN_MAX_LENGTH,
        regex: valid.REGEX_VALIDATORS.email,
        normalize: (v) => v.toLowerCase(),
        updatable: false,
        tabIndex: 2,
        index: true,
    },
    password: {
        type: "string",
        required: true,
        min: PASSWORD_MIN_LENGTH,
        max: PASSWORD_MAX_LENGTH,
        tabIndex: 3,
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
        items: YUEBING_LOCALES.map((loc) => {
            return { value: loc, label: `locale_${loc}` };
        }),
        required: true,
        default: YUEBING_DEFAULT_LOCALE,
        tabIndex: 6,
    },
    flags: {
        type: "array",
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
    "email",
    "firstName",
    "lastName",
    "locale",
    "verified",
    "_meta.ctime",
    "_meta.mtime",
];
export const ACCOUNT_TYPEDEF = new MobilettoOrmTypeDef({
    typeName: "account",
    idPrefix: "acct",
    tableFields: ACCOUNT_TABLE_FIELDS,
    fields: Object.assign(Object.assign({}, primaryAccountFields), { verified: {
            type: "number",
            control: "label",
            render: "datetime",
            tabIndex: 8,
        } }),
});
export const AUTH_ACCOUNT_TYPEDEF = new MobilettoOrmTypeDef({
    typeName: "authAccount",
    idPrefix: "acct",
    tableFields: ACCOUNT_TABLE_FIELDS,
    fields: Object.assign(Object.assign({}, ACCOUNT_TYPEDEF.fields), { session: {
            type: "string",
            control: "label",
            tabIndex: 8,
        } }),
});
