import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type Source_encryptionType = {
    encryptionKey: string;
    encryptionIV?: string;
    encryptionAlgo?: string;
};
export type Source_genericType = {
    driver: string;
    key?: string;
    secret?: string;
    opts?: string;
};
export type Source_b2Type = {
    key: string;
    secret: string;
    bucket: string;
    partSize?: number;
    prefix?: string;
    delimiter?: string;
};
export type Source_s3Type = {
    key: string;
    secret: string;
    bucket: string;
    region?: string;
    prefix?: string;
    delimiter?: string;
};
export type Source_localType = {
    key: string;
    createIfNotExist?: boolean;
    mode?: string;
};
export type SourceType = MobilettoOrmObject & {
    name: string;
    type: string;
    local?: Source_localType;
    s3?: Source_s3Type;
    b2?: Source_b2Type;
    generic?: Source_genericType;
    cacheSize?: number;
    encryptionEnable?: boolean;
    encryption?: Source_encryptionType;
};
