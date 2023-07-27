import * as yup from "yup";
export declare const AccountSchemaFields: {
    username: yup.StringSchema<string, yup.AnyObject, undefined, "">;
    email: yup.StringSchema<string, yup.AnyObject, undefined, "">;
    password: yup.StringSchema<string, yup.AnyObject, undefined, "">;
    firstName: yup.StringSchema<yup.Maybe<string | undefined>, yup.AnyObject, undefined, "">;
    lastName: yup.StringSchema<yup.Maybe<string | undefined>, yup.AnyObject, undefined, "">;
    locale: yup.StringSchema<NonNullable<"en" | "ar" | "bn" | "de" | "es" | "fr" | "ha" | "hi" | "id" | "it" | "ja" | "ko" | "mr" | "pl" | "pt" | "ru" | "sw" | "tl" | "tr" | "ur" | "vi" | "zh" | undefined>, yup.AnyObject, undefined, "">;
    flags: yup.ArraySchema<yup.Maybe<("flag_welcome_email" | "flag_can_comment" | "flag_can_tag" | "flag_can_edit_metadata" | "flag_can_set_thumbnail" | undefined)[] | undefined>, yup.AnyObject, ("flag_welcome_email" | "flag_can_comment" | "flag_can_tag")[], "d">;
    admin: yup.BooleanSchema<yup.Maybe<boolean | undefined>, yup.AnyObject, undefined, "">;
};
export declare const AccountSchema: yup.ObjectSchema<{
    username: string;
    email: string;
    password: string;
    firstName: yup.Maybe<string | undefined>;
    lastName: yup.Maybe<string | undefined>;
    locale: NonNullable<"en" | "ar" | "bn" | "de" | "es" | "fr" | "ha" | "hi" | "id" | "it" | "ja" | "ko" | "mr" | "pl" | "pt" | "ru" | "sw" | "tl" | "tr" | "ur" | "vi" | "zh" | undefined>;
    flags: ("flag_welcome_email" | "flag_can_comment" | "flag_can_tag" | "flag_can_edit_metadata" | "flag_can_set_thumbnail" | undefined)[] | null;
    admin: yup.Maybe<boolean | undefined>;
}, yup.AnyObject, {
    username: undefined;
    email: undefined;
    password: undefined;
    firstName: undefined;
    lastName: undefined;
    locale: undefined;
    flags: ("flag_welcome_email" | "flag_can_comment" | "flag_can_tag")[];
    admin: undefined;
}, "">;
