import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type PublicConfigType = MobilettoOrmObject & {
    public: boolean;
    title: string;
    siteUrl: string;
    registrationEnabled: boolean;
    inviteFriendsEnabled: boolean;
    limitRegistration?: string;
    defaultLocale: string;
    verifyAccountTimeout: number;
    resetPasswordTimeout: number;
    defaultAutoscanInterval?: number;
    emailEnabled: boolean;
};
