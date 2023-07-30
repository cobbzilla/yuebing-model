import * as yup from "yup";
export declare const Source_encryptionSchemaFields: {
    encryptionKey: yup.StringSchema<string, yup.AnyObject, undefined, "">;
    encryptionIV: yup.StringSchema<yup.Maybe<string | undefined>, yup.AnyObject, undefined, "">;
    encryptionAlgo: yup.StringSchema<yup.Maybe<"aes-256-cbc" | undefined>, yup.AnyObject, "aes-256-cbc", "d">;
};
export declare const Source_encryptionSchema: yup.ObjectSchema<{
    encryptionKey: string;
    encryptionIV: yup.Maybe<string | undefined>;
    encryptionAlgo: "aes-256-cbc" | null;
}, yup.AnyObject, {
    encryptionKey: undefined;
    encryptionIV: undefined;
    encryptionAlgo: "aes-256-cbc";
}, "">;
export declare const Source_genericSchemaFields: {
    driver: yup.StringSchema<string, yup.AnyObject, undefined, "">;
    key: yup.StringSchema<yup.Maybe<string | undefined>, yup.AnyObject, undefined, "">;
    secret: yup.StringSchema<yup.Maybe<string | undefined>, yup.AnyObject, undefined, "">;
    opts: yup.StringSchema<yup.Maybe<string | undefined>, yup.AnyObject, undefined, "">;
};
export declare const Source_genericSchema: yup.ObjectSchema<{
    driver: string;
    key: yup.Maybe<string | undefined>;
    secret: yup.Maybe<string | undefined>;
    opts: yup.Maybe<string | undefined>;
}, yup.AnyObject, {
    driver: undefined;
    key: undefined;
    secret: undefined;
    opts: undefined;
}, "">;
export declare const Source_b2SchemaFields: {
    key: yup.StringSchema<string, yup.AnyObject, undefined, "">;
    secret: yup.StringSchema<string, yup.AnyObject, undefined, "">;
    bucket: yup.StringSchema<string, yup.AnyObject, undefined, "">;
    partSize: yup.NumberSchema<yup.Maybe<number | undefined>, yup.AnyObject, undefined, "">;
    prefix: yup.StringSchema<yup.Maybe<string | undefined>, yup.AnyObject, undefined, "">;
    delimiter: yup.StringSchema<yup.Maybe<string | undefined>, yup.AnyObject, "/", "d">;
};
export declare const Source_b2Schema: yup.ObjectSchema<{
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
export declare const Source_s3SchemaFields: {
    key: yup.StringSchema<string, yup.AnyObject, undefined, "">;
    secret: yup.StringSchema<string, yup.AnyObject, undefined, "">;
    bucket: yup.StringSchema<string, yup.AnyObject, undefined, "">;
    region: yup.StringSchema<yup.Maybe<"us-east-2" | "us-east-1" | "us-west-1" | "us-west-2" | "af-south-1" | "ap-east-1" | "ap-south-2" | "ap-southeast-3" | "ap-southeast-4" | "ap-south-1" | "ap-northeast-3" | "ap-northeast-2" | "ap-southeast-1" | "ap-southeast-2" | "ap-northeast-1" | "ca-central-1" | "eu-central-1" | "eu-west-1" | "eu-west-2" | "eu-south-1" | "eu-west-3" | "eu-south-2" | "eu-north-1" | "eu-central-2" | "me-south-1" | "me-central-1" | "sa-east-1" | undefined>, yup.AnyObject, "us-east-1", "d">;
    prefix: yup.StringSchema<yup.Maybe<string | undefined>, yup.AnyObject, undefined, "">;
    delimiter: yup.StringSchema<yup.Maybe<string | undefined>, yup.AnyObject, "/", "d">;
};
export declare const Source_s3Schema: yup.ObjectSchema<{
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
export declare const Source_localSchemaFields: {
    key: yup.StringSchema<string, yup.AnyObject, undefined, "">;
    createIfNotExist: yup.BooleanSchema<yup.Maybe<boolean | undefined>, yup.AnyObject, undefined, "">;
    mode: yup.StringSchema<yup.Maybe<string | undefined>, yup.AnyObject, "0700", "d">;
};
export declare const Source_localSchema: yup.ObjectSchema<{
    key: string;
    createIfNotExist: yup.Maybe<boolean | undefined>;
    mode: string | null;
}, yup.AnyObject, {
    key: undefined;
    createIfNotExist: undefined;
    mode: "0700";
}, "">;
export declare const SourceSchemaFields: {
    name: yup.StringSchema<string, yup.AnyObject, undefined, "">;
    type: yup.StringSchema<NonNullable<"local" | "s3" | "b2" | "generic" | undefined>, yup.AnyObject, undefined, "">;
    local: yup.ObjectSchema<yup.Maybe<{
        key: string;
        createIfNotExist: yup.Maybe<boolean | undefined>;
        mode: string | null;
    }>, yup.AnyObject, {
        key: undefined;
        createIfNotExist: undefined;
        mode: "0700";
    }, "">;
    s3: yup.ObjectSchema<yup.Maybe<{
        key: string;
        secret: string;
        bucket: string;
        region: "us-east-2" | "us-east-1" | "us-west-1" | "us-west-2" | "af-south-1" | "ap-east-1" | "ap-south-2" | "ap-southeast-3" | "ap-southeast-4" | "ap-south-1" | "ap-northeast-3" | "ap-northeast-2" | "ap-southeast-1" | "ap-southeast-2" | "ap-northeast-1" | "ca-central-1" | "eu-central-1" | "eu-west-1" | "eu-west-2" | "eu-south-1" | "eu-west-3" | "eu-south-2" | "eu-north-1" | "eu-central-2" | "me-south-1" | "me-central-1" | "sa-east-1" | null;
        prefix: yup.Maybe<string | undefined>;
        delimiter: string | null;
    }>, yup.AnyObject, {
        key: undefined;
        secret: undefined;
        bucket: undefined;
        region: "us-east-1";
        prefix: undefined;
        delimiter: "/";
    }, "">;
    b2: yup.ObjectSchema<yup.Maybe<{
        key: string;
        secret: string;
        bucket: string;
        partSize: yup.Maybe<number | undefined>;
        prefix: yup.Maybe<string | undefined>;
        delimiter: string | null;
    }>, yup.AnyObject, {
        key: undefined;
        secret: undefined;
        bucket: undefined;
        partSize: undefined;
        prefix: undefined;
        delimiter: "/";
    }, "">;
    generic: yup.ObjectSchema<yup.Maybe<{
        driver: string;
        key: yup.Maybe<string | undefined>;
        secret: yup.Maybe<string | undefined>;
        opts: yup.Maybe<string | undefined>;
    }>, yup.AnyObject, {
        driver: undefined;
        key: undefined;
        secret: undefined;
        opts: undefined;
    }, "">;
    cacheSize: yup.NumberSchema<yup.Maybe<number | undefined>, yup.AnyObject, 100, "d">;
    encryptionEnable: yup.BooleanSchema<yup.Maybe<boolean | undefined>, yup.AnyObject, undefined, "">;
    encryption: yup.ObjectSchema<yup.Maybe<{
        encryptionKey: string;
        encryptionIV: yup.Maybe<string | undefined>;
        encryptionAlgo: "aes-256-cbc" | null;
    }>, yup.AnyObject, {
        encryptionKey: undefined;
        encryptionIV: undefined;
        encryptionAlgo: "aes-256-cbc";
    }, "">;
};
export declare const SourceSchema: yup.ObjectSchema<{
    name: string;
    type: NonNullable<"local" | "s3" | "b2" | "generic" | undefined>;
    local: {
        createIfNotExist?: yup.Maybe<boolean | undefined>;
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
    generic: {
        key?: yup.Maybe<string | undefined>;
        secret?: yup.Maybe<string | undefined>;
        opts?: yup.Maybe<string | undefined>;
        driver: string;
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
    type: undefined;
    local: {
        key: undefined;
        createIfNotExist: undefined;
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
    generic: {
        driver: undefined;
        key: undefined;
        secret: undefined;
        opts: undefined;
    };
    cacheSize: 100;
    encryptionEnable: undefined;
    encryption: {
        encryptionKey: undefined;
        encryptionIV: undefined;
        encryptionAlgo: "aes-256-cbc";
    };
}, "">;
