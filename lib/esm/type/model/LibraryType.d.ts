import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type Library_autoscanType = {
    initialDelay?: number;
    interval?: number;
};
export type LibraryType = MobilettoOrmObject & {
    name: string;
    sources?: string[];
    destinations?: string[];
    media?: string;
    autoscanEnabled: boolean;
    autoscan?: Library_autoscanType;
};
