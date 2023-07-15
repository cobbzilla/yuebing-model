import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type Volume_encryptionType = {
    encryptionKey: string;
    encryptionIV?: string;
    encryptionAlgo?: string;
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
    mode?: string;
};
export type VolumeType = MobilettoOrmObject & {
    name: string;
    mount: string;
    readOnly?: boolean;
    system?: boolean;
    type: string;
    local?: Volume_localType;
    s3?: Volume_s3Type;
    b2?: Volume_b2Type;
    cacheSize?: number;
    encryptionEnable?: boolean;
    encryption?: Volume_encryptionType;
};
