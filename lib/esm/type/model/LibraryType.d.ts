import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type Library_autoscanType = {
    interval?: number;
};
export type LibraryType = MobilettoOrmObject & {
    name: string;
    media: string;
    sources: string[];
    destinations: string[];
    autoscanEnabled?: boolean;
    autoscan?: Library_autoscanType;
};
