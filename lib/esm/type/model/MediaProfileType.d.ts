import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type MediaProfileType = MobilettoOrmObject & {
    name: string;
    enabled?: boolean;
    media?: string;
    operation?: string;
    operationConfig?: string;
    ext: string;
    contentType: string;
    from?: string;
    subProfiles?: string[];
    noop?: boolean;
    primary?: boolean;
    multiFile?: boolean;
};
