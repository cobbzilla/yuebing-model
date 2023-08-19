import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type Volume_encryptionType = {
    encryptionKey: string;
    encryptionIV?: string;
    encryptionAlgo?: string;
};
export type Volume_subDriver = {
    [prop: string]: string | number | boolean;
};
export type Volume_genericType = Volume_subDriver & {
    driver: string;
    key?: string;
    secret?: string;
    opts?: string;
};
export type Volume_b2Type = Volume_subDriver & {
    key: string;
    secret: string;
    bucket: string;
    partSize?: number;
    prefix?: string;
    delimiter?: string;
};
export type Volume_s3Type = Volume_subDriver & {
    key: string;
    secret: string;
    bucket: string;
    region?: string;
    prefix?: string;
    delimiter?: string;
};
export type Volume_localType = Volume_subDriver & {
    key: string;
    createIfNotExist?: boolean;
    mode?: string;
};
export type VolumeType = MobilettoOrmObject & {
    name: string;
    type: string;
    local?: Volume_localType;
    s3?: Volume_s3Type;
    b2?: Volume_b2Type;
    generic?: Volume_genericType;
    cacheSize?: number;
    encryptionEnable?: boolean;
    encryption?: Volume_encryptionType;
};
