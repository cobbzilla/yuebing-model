import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type Destination_encryptionType = {
    encryptionKey: string;
    encryptionIV?: string;
    encryptionAlgo?: string;
};
export type Destination_genericType = {
    driver: string;
    key?: string;
    secret?: string;
    opts?: string;
};
export type Destination_b2Type = {
    key: string;
    secret: string;
    bucket: string;
    partSize?: number;
    prefix?: string;
    delimiter?: string;
};
export type Destination_s3Type = {
    key: string;
    secret: string;
    bucket: string;
    region?: string;
    prefix?: string;
    delimiter?: string;
};
export type Destination_localType = {
    key: string;
    mode?: string;
};
export type DestinationType = MobilettoOrmObject & {
    name: string;
    type: string;
    local?: Destination_localType;
    s3?: Destination_s3Type;
    b2?: Destination_b2Type;
    generic?: Destination_genericType;
    cacheSize?: number;
    encryptionEnable?: boolean;
    encryption?: Destination_encryptionType;
    system?: boolean;
};
