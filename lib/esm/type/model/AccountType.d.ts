import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type AccountType = MobilettoOrmObject & {
    username?: string;
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    locale: string;
    flags?: string[];
    admin?: boolean;
};
