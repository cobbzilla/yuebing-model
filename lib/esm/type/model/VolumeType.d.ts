import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type Volume_encryptionType = {
    encryptionKey: string;
    encryptionIV?: string;
    encryptionAlgo?: string;
};
export type Volume_genericType = {
    driver: string;
    key?: string;
    secret?: string;
    opts?: string;
};
export type Volume_b2Type = {
    key: string;
    secret: string;
    bucket: string;
    partSize?: number;
    prefix?: string;
    delimiter?: string;
};
export type Volume_s3Type = {
    key: string;
    secret: string;
    bucket: string;
    region?: string;
    prefix?: string;
    delimiter?: string;
};
export type Volume_localType = {
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
