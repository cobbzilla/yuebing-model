import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type MediaProfileType = MobilettoOrmObject & {
    name: string;
    media?: string;
    operation?: string;
    ext: string;
    contentType: string;
    from?: string;
    subProfiles?: string[];
    enabled?: boolean;
    noop?: boolean;
    primary?: boolean;
    multiFile?: boolean;
};
