import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type LocalConfig_autoscanType = {
    initialDelay: number;
};
export type LocalConfigType = MobilettoOrmObject & {
    systemName: string;
    autoscanEnabled: boolean;
    autoscan?: LocalConfig_autoscanType;
};
