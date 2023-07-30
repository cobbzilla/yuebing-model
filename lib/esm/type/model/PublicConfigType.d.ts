import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type PublicConfig_cryptoType = {
    ciphers?: string;
};
export type PublicConfigType = MobilettoOrmObject & {
    public: boolean;
    title: string;
    siteUrl: string;
    registrationEnabled: boolean;
    inviteFriendsEnabled: boolean;
    limitRegistration?: string;
    defaultLocale: string;
    emailEnabled: boolean;
    isDefault?: boolean;
    needsAdmin?: boolean;
    crypto?: PublicConfig_cryptoType;
};
