import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type SessionType = MobilettoOrmObject & {
    token: string;
    account: string;
};
