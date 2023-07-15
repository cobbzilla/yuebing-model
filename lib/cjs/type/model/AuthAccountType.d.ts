import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type AuthAccountType = MobilettoOrmObject & {
    username: string;
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    locale: string;
    flags?: string[];
    verified?: number;
    session?: string;
};
