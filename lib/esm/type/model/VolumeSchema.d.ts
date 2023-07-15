import * as yup from "yup";
export declare const Volume_encryptionSchema: yup.ObjectSchema<{
    encryptionKey: string;
    encryptionIV: yup.Maybe<string | undefined>;
    encryptionAlgo: "aes-256-cbc" | null;
}, yup.AnyObject, {
    encryptionKey: undefined;
    encryptionIV: undefined;
    encryptionAlgo: "aes-256-cbc";
}, "">;
export declare const Volume_b2Schema: yup.ObjectSchema<{
    key: string;
    secret: string;
    bucket: string;
    partSize: yup.Maybe<number | undefined>;
    prefix: yup.Maybe<string | undefined>;
    delimiter: string | null;
}, yup.AnyObject, {
    key: undefined;
    secret: undefined;
    bucket: undefined;
    partSize: undefined;
    prefix: undefined;
    delimiter: "/";
}, "">;
export declare const Volume_s3Schema: yup.ObjectSchema<{
    key: string;
    secret: string;
    bucket: string;
    region: "us-east-2" | "us-east-1" | "us-west-1" | "us-west-2" | "af-south-1" | "ap-east-1" | "ap-south-2" | "ap-southeast-3" | "ap-southeast-4" | "ap-south-1" | "ap-northeast-3" | "ap-northeast-2" | "ap-southeast-1" | "ap-southeast-2" | "ap-northeast-1" | "ca-central-1" | "eu-central-1" | "eu-west-1" | "eu-west-2" | "eu-south-1" | "eu-west-3" | "eu-south-2" | "eu-north-1" | "eu-central-2" | "me-south-1" | "me-central-1" | "sa-east-1" | null;
    prefix: yup.Maybe<string | undefined>;
    delimiter: string | null;
}, yup.AnyObject, {
    key: undefined;
    secret: undefined;
    bucket: undefined;
    region: "us-east-1";
    prefix: undefined;
    delimiter: "/";
}, "">;
export declare const Volume_localSchema: yup.ObjectSchema<{
    key: string;
    mode: string | null;
}, yup.AnyObject, {
    key: undefined;
    mode: "0700";
}, "">;
export declare const VolumeSchema: yup.ObjectSchema<{
    name: string;
    mount: NonNullable<"source" | "destination" | undefined>;
    readOnly: yup.Maybe<boolean | undefined>;
    system: yup.Maybe<boolean | undefined>;
    type: NonNullable<"local" | "s3" | "b2" | undefined>;
    local: {
        key: string;
        mode: string | null;
    } | null | undefined;
    s3: {
        prefix?: yup.Maybe<string | undefined>;
        key: string;
        secret: string;
        bucket: string;
        region: "us-east-2" | "us-east-1" | "us-west-1" | "us-west-2" | "af-south-1" | "ap-east-1" | "ap-south-2" | "ap-southeast-3" | "ap-southeast-4" | "ap-south-1" | "ap-northeast-3" | "ap-northeast-2" | "ap-southeast-1" | "ap-southeast-2" | "ap-northeast-1" | "ca-central-1" | "eu-central-1" | "eu-west-1" | "eu-west-2" | "eu-south-1" | "eu-west-3" | "eu-south-2" | "eu-north-1" | "eu-central-2" | "me-south-1" | "me-central-1" | "sa-east-1" | null;
        delimiter: string | null;
    } | null | undefined;
    b2: {
        prefix?: yup.Maybe<string | undefined>;
        partSize?: yup.Maybe<number | undefined>;
        key: string;
        secret: string;
        bucket: string;
        delimiter: string | null;
    } | null | undefined;
    cacheSize: number | null;
    encryptionEnable: yup.Maybe<boolean | undefined>;
    encryption: {
        encryptionIV?: yup.Maybe<string | undefined>;
        encryptionKey: string;
        encryptionAlgo: "aes-256-cbc" | null;
    } | null | undefined;
}, yup.AnyObject, {
    name: undefined;
    mount: undefined;
    readOnly: undefined;
    system: undefined;
    type: undefined;
    local: {
        key: undefined;
        mode: "0700";
    };
    s3: {
        key: undefined;
        secret: undefined;
        bucket: undefined;
        region: "us-east-1";
        prefix: undefined;
        delimiter: "/";
    };
    b2: {
        key: undefined;
        secret: undefined;
        bucket: undefined;
        partSize: undefined;
        prefix: undefined;
        delimiter: "/";
    };
    cacheSize: 100;
    encryptionEnable: undefined;
    encryption: {
        encryptionKey: undefined;
        encryptionIV: undefined;
        encryptionAlgo: "aes-256-cbc";
    };
}, "">;
