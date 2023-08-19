import { MobilettoOrmTypeDef, MobilettoOrmFieldDefConfigs } from "mobiletto-orm-typedef";
export declare const VOL_TYPE_LOCAL = "local";
export declare const VOL_TYPE_S3 = "s3";
export declare const VOL_TYPE_B2 = "b2";
export declare const VOL_TYPE_GENERIC = "generic";
export declare const VOLUME_OPTS_FIELDS: Record<string, string[]>;
export declare const DEFAULT_ENCRYPTION_ALGO = "aes-256-cbc";
export declare const VolumeTypeDefFields: MobilettoOrmFieldDefConfigs;
export declare const VolumeTypeDef: MobilettoOrmTypeDef;
export declare const SourceTypeDefFields: MobilettoOrmFieldDefConfigs;
export declare const SourceTypeDef: MobilettoOrmTypeDef;
export declare const DestinationTypeDefFields: MobilettoOrmFieldDefConfigs;
export declare const DestinationTypeDef: MobilettoOrmTypeDef;
export type Volume_subDriver = {
    [prop: string]: string | number | boolean;
};
