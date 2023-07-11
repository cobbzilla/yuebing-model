import { MobilettoOrmTypeDef } from "mobiletto-orm";
import { YUEBING_LOCALES, YUEBING_DEFAULT_LOCALE } from "../locale.js";
import * as valid from "../validation.js";
export const USER_TYPEDEF = new MobilettoOrmTypeDef({
    typeName: "account",
    tableFields: ["username", "email", "firstName", "lastName", "locale", "verified", "ctime", "mtime"],
    fields: {
        username: {
            type: "string",
            primary: true,
            min: 2,
            max: 100,
            regex: valid.REGEX_VALIDATORS.username,
            normalize: (v) => v.toLowerCase(),
            updatable: false,
            tabIndex: 1,
        },
        email: {
            type: "string",
            required: true,
            min: 2,
            max: 100,
            regex: valid.REGEX_VALIDATORS.email,
            normalize: (v) => v.toLowerCase(),
            updatable: false,
            tabIndex: 2,
            index: true,
        },
        password: {
            type: "string",
            required: true,
            min: 8,
            max: 100,
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
        verified: {
            type: "number",
            control: "label",
            render: "datetime",
            tabIndex: 8,
        },
    },
});
// hide id field in UI (username becomes the id)
USER_TYPEDEF.fields.id.control = "hidden";
USER_TYPEDEF.fields.id.redact = false;
