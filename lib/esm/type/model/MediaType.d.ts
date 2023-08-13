import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type MediaType = MobilettoOrmObject & {
    name: string;
    from?: string;
    ext: string;
};
