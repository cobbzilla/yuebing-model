import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type MediaProfileType = MobilettoOrmObject & {
    name: string;
    enabled?: boolean;
    priority?: number;
    media: string;
    operation: string;
    operationConfig?: string;
    ext?: string;
    contentType?: string;
    from?: string;
    subProfiles?: string[];
    additionalAssets?: string[];
    noop?: boolean;
    primary?: boolean;
};
