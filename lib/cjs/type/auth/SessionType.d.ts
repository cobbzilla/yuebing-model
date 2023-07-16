import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type UsernameAndPasswordType = MobilettoOrmObject & {
    usernameOrEmail: string;
    password: string;
};
