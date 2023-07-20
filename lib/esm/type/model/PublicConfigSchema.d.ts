import * as yup from "yup";
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
}, "">;
