import * as yup from "yup";
export declare const AccountSchema: yup.ObjectSchema<{
    username: string;
    email: string;
    password: string;
    firstName: yup.Maybe<string | undefined>;
    lastName: yup.Maybe<string | undefined>;
    locale: NonNullable<"en" | "ar" | "bn" | "de" | "es" | "fr" | "ha" | "hi" | "id" | "it" | "ja" | "ko" | "mr" | "pl" | "pt" | "ru" | "sw" | "tl" | "tr" | "ur" | "vi" | "zh" | undefined>;
    flags: yup.Maybe<("flag_welcome_email" | "flag_can_comment" | "flag_can_tag" | "flag_can_edit_metadata" | "flag_can_set_thumbnail" | undefined)[] | undefined>;
    verified: yup.Maybe<number | undefined>;
}, yup.AnyObject, {
    username: undefined;
    email: undefined;
    password: undefined;
    firstName: undefined;
    lastName: undefined;
    locale: undefined;
    flags: yup.Maybe<yup.Maybe<("flag_welcome_email" | "flag_can_comment" | "flag_can_tag" | "flag_can_edit_metadata" | "flag_can_set_thumbnail" | undefined)[] | undefined>>;
    verified: undefined;
}, "">;
