import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type SessionType = MobilettoOrmObject & {
    account: string;
    token: string;
};
