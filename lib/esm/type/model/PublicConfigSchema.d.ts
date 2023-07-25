import * as yup from "yup";
export declare const PublicConfigSchemaFields: {
    public: yup.BooleanSchema<NonNullable<boolean | undefined>, yup.AnyObject, undefined, "">;
    title: yup.StringSchema<string, yup.AnyObject, "Yuebing 🥮", "d">;
    siteUrl: yup.StringSchema<string, yup.AnyObject, "http://127.0.0.1:3000", "d">;
    registrationEnabled: yup.BooleanSchema<NonNullable<boolean | undefined>, yup.AnyObject, true, "d">;
    inviteFriendsEnabled: yup.BooleanSchema<NonNullable<boolean | undefined>, yup.AnyObject, true, "d">;
    limitRegistration: yup.StringSchema<yup.Maybe<string | undefined>, yup.AnyObject, undefined, "">;
    defaultLocale: yup.StringSchema<NonNullable<"en" | "ar" | "bn" | "de" | "es" | "fr" | "ha" | "hi" | "id" | "it" | "ja" | "ko" | "mr" | "pl" | "pt" | "ru" | "sw" | "tl" | "tr" | "ur" | "vi" | "zh" | undefined>, yup.AnyObject, "en", "d">;
    emailEnabled: yup.BooleanSchema<NonNullable<boolean | undefined>, yup.AnyObject, undefined, "">;
    isDefault: yup.BooleanSchema<yup.Maybe<boolean | undefined>, yup.AnyObject, undefined, "">;
    needsAdmin: yup.BooleanSchema<yup.Maybe<boolean | undefined>, yup.AnyObject, undefined, "">;
};
export declare const PublicConfigSchema: yup.ObjectSchema<{
    public: NonNullable<boolean | undefined>;
    title: string;
    siteUrl: string;
    registrationEnabled: NonNullable<boolean | undefined>;
    inviteFriendsEnabled: NonNullable<boolean | undefined>;
    limitRegistration: yup.Maybe<string | undefined>;
    defaultLocale: NonNullable<"en" | "ar" | "bn" | "de" | "es" | "fr" | "ha" | "hi" | "id" | "it" | "ja" | "ko" | "mr" | "pl" | "pt" | "ru" | "sw" | "tl" | "tr" | "ur" | "vi" | "zh" | undefined>;
    emailEnabled: NonNullable<boolean | undefined>;
    isDefault: yup.Maybe<boolean | undefined>;
    needsAdmin: yup.Maybe<boolean | undefined>;
}, yup.AnyObject, {
    public: undefined;
    title: "Yuebing 🥮";
    siteUrl: "http://127.0.0.1:3000";
    registrationEnabled: true;
    inviteFriendsEnabled: true;
    limitRegistration: undefined;
    defaultLocale: "en";
    emailEnabled: undefined;
    isDefault: undefined;
    needsAdmin: undefined;
}, "">;
