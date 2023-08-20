import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type MediaPropertyType = MobilettoOrmObject & {
    name: string;
    media: string;
    value: string;
};
