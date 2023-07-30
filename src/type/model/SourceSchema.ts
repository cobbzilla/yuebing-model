// DO NOT EDIT THIS FILE. AUTO-GENERATED BY mobiletto-orm-typedef-gen
import {
  VOL_TYPE_LOCAL,
  VOL_TYPE_S3,
  VOL_TYPE_B2,
  VOL_TYPE_GENERIC
} from "../../typedef/model/volume.js";


import * as yup from "yup";

export const Source_encryptionSchemaFields = {
    encryptionKey: yup.string().trim().transform(v => v === '' ? undefined : v)
        .min(16, 'source_encryption_encryptionKey_min')
        .max(1024, 'source_encryption_encryptionKey_max')
        .typeError('source_encryption_encryptionKey_invalid')
        .required('source_encryption_encryptionKey_required'),
    encryptionIV: yup.string().trim().transform(v => v === '' ? undefined : v)
        .min(16, 'source_encryption_encryptionIV_min')
        .max(1024, 'source_encryption_encryptionIV_max')
        .typeError('source_encryption_encryptionIV_invalid')
        .notRequired(),
    encryptionAlgo: yup.string().trim().transform(v => v === '' ? undefined : v)
        .oneOf(["aes-256-cbc"], 'source_encryption_encryptionAlgo_enum')
        .typeError('source_encryption_encryptionAlgo_invalid')
        .notRequired()
        .default("aes-256-cbc"),
};

export const Source_encryptionSchema = yup.object(Source_encryptionSchemaFields);


export const Source_genericSchemaFields = {
    driver: yup.string().trim().transform(v => v === '' ? undefined : v)
        .max(1000, 'source_generic_driver_max')
        .typeError('source_generic_driver_invalid')
        .required('source_generic_driver_required'),
    key: yup.string().trim().transform(v => v === '' ? undefined : v)
        .max(1000, 'source_generic_key_max')
        .typeError('source_generic_key_invalid')
        .notRequired(),
    secret: yup.string().trim().transform(v => v === '' ? undefined : v)
        .max(1000, 'source_generic_secret_max')
        .typeError('source_generic_secret_invalid')
        .notRequired(),
    opts: yup.string().trim().transform(v => v === '' ? undefined : v)
        .max(131072, 'source_generic_opts_max')
        .typeError('source_generic_opts_invalid')
        .notRequired(),
};

export const Source_genericSchema = yup.object(Source_genericSchemaFields);


export const Source_b2SchemaFields = {
    key: yup.string().trim().transform(v => v === '' ? undefined : v)
        .min(10, 'source_b2_key_min')
        .max(50, 'source_b2_key_max')
        .matches(/^[\dA-F]+$/i, 'source_b2_key_regex')
        .typeError('source_b2_key_invalid')
        .required('source_b2_key_required'),
    secret: yup.string().trim().transform(v => v === '' ? undefined : v)
        .min(10, 'source_b2_secret_min')
        .max(50, 'source_b2_secret_max')
        .typeError('source_b2_secret_invalid')
        .required('source_b2_secret_required'),
    bucket: yup.string().trim().transform(v => v === '' ? undefined : v)
        .min(6, 'source_b2_bucket_min')
        .max(63, 'source_b2_bucket_max')
        .matches(/$[a-z\d-]{6,63}$/i, 'source_b2_bucket_regex')
        .typeError('source_b2_bucket_invalid')
        .required('source_b2_bucket_required'),
    partSize: yup.number()
        .min(5000000, 'source_b2_partSize_minValue')
        .max(2000000000, 'source_b2_partSize_maxValue')
        .typeError('source_b2_partSize_invalid')
        .notRequired(),
    prefix: yup.string().trim().transform(v => v === '' ? undefined : v)
        .typeError('source_b2_prefix_invalid')
        .notRequired(),
    delimiter: yup.string().trim().transform(v => v === '' ? undefined : v)
        .min(1, 'source_b2_delimiter_min')
        .max(1, 'source_b2_delimiter_max')
        .typeError('source_b2_delimiter_invalid')
        .notRequired()
        .default("/"),
};

export const Source_b2Schema = yup.object(Source_b2SchemaFields);


export const Source_s3SchemaFields = {
    key: yup.string().trim().transform(v => v === '' ? undefined : v)
        .min(20, 'source_s3_key_min')
        .max(20, 'source_s3_key_max')
        .matches(/^AKIA[A-Z\d]{16}$/, 'source_s3_key_regex')
        .typeError('source_s3_key_invalid')
        .required('source_s3_key_required'),
    secret: yup.string().trim().transform(v => v === '' ? undefined : v)
        .min(40, 'source_s3_secret_min')
        .max(40, 'source_s3_secret_max')
        .matches(/^[A-Z\d/+=]{40}$/, 'source_s3_secret_regex')
        .typeError('source_s3_secret_invalid')
        .required('source_s3_secret_required'),
    bucket: yup.string().trim().transform(v => v === '' ? undefined : v)
        .min(3, 'source_s3_bucket_min')
        .max(63, 'source_s3_bucket_max')
        .matches(/^[a-z\d.-]{3,63}$/, 'source_s3_bucket_regex')
        .typeError('source_s3_bucket_invalid')
        .required('source_s3_bucket_required'),
    region: yup.string().trim().transform(v => v === '' ? undefined : v)
        .oneOf(["us-east-2","us-east-1","us-west-1","us-west-2","af-south-1","ap-east-1","ap-south-2","ap-southeast-3","ap-southeast-4","ap-south-1","ap-northeast-3","ap-northeast-2","ap-southeast-1","ap-southeast-2","ap-northeast-1","ca-central-1","eu-central-1","eu-west-1","eu-west-2","eu-south-1","eu-west-3","eu-south-2","eu-north-1","eu-central-2","me-south-1","me-central-1","sa-east-1"], 'source_s3_region_enum')
        .typeError('source_s3_region_invalid')
        .notRequired()
        .default("us-east-1"),
    prefix: yup.string().trim().transform(v => v === '' ? undefined : v)
        .typeError('source_s3_prefix_invalid')
        .notRequired(),
    delimiter: yup.string().trim().transform(v => v === '' ? undefined : v)
        .min(1, 'source_s3_delimiter_min')
        .max(1, 'source_s3_delimiter_max')
        .typeError('source_s3_delimiter_invalid')
        .notRequired()
        .default("/"),
};

export const Source_s3Schema = yup.object(Source_s3SchemaFields);


export const Source_localSchemaFields = {
    key: yup.string().trim().transform(v => v === '' ? undefined : v)
        .min(2, 'source_local_key_min')
        .max(1024, 'source_local_key_max')
        .matches(/^[A-Z\d ()=.,_+@/-]+$/i, 'source_local_key_regex')
        .typeError('source_local_key_invalid')
        .required('source_local_key_required'),
    createIfNotExist: yup.boolean()
        .typeError('source_local_createIfNotExist_invalid')
        .notRequired(),
    mode: yup.string().trim().transform(v => v === '' ? undefined : v)
        .min(4, 'source_local_mode_min')
        .max(4, 'source_local_mode_max')
        .matches(/^[01][0-7]{3}$/, 'source_local_mode_regex')
        .typeError('source_local_mode_invalid')
        .notRequired()
        .default("0700"),
};

export const Source_localSchema = yup.object(Source_localSchemaFields);


export const SourceSchemaFields = {
    name: yup.string().trim().transform(v => v === '' ? undefined : v)
        .min(3, 'name_min')
        .max(100, 'name_max')
        .typeError('name_invalid')
        .required('name_required'),
    type: yup.string().trim().transform(v => v === '' ? undefined : v)
        .oneOf(["local","s3","b2","generic"], 'type_enum')
        .typeError('type_invalid')
        .required('type_required'),
    local: Source_localSchema
        .notRequired()
        .when(["type"], {
            is: (type: string) => {
                const w = (v: Record<string, unknown>) => v.type === VOL_TYPE_LOCAL;
                const v: Record<string, unknown> = { type };
                return w(v);
            },
            then: (schema) => schema.required('local_required'),
            otherwise: (schema) => schema.notRequired(),
        }),
    s3: Source_s3Schema
        .notRequired()
        .when(["type"], {
            is: (type: string) => {
                const w = (v: Record<string, unknown>) => v.type === VOL_TYPE_S3;
                const v: Record<string, unknown> = { type };
                return w(v);
            },
            then: (schema) => schema.required('s3_required'),
            otherwise: (schema) => schema.notRequired(),
        }),
    b2: Source_b2Schema
        .notRequired()
        .when(["type"], {
            is: (type: string) => {
                const w = (v: Record<string, unknown>) => v.type === VOL_TYPE_B2;
                const v: Record<string, unknown> = { type };
                return w(v);
            },
            then: (schema) => schema.required('b2_required'),
            otherwise: (schema) => schema.notRequired(),
        }),
    generic: Source_genericSchema
        .notRequired()
        .when(["type"], {
            is: (type: string) => {
                const w = (v: Record<string, unknown>) => v.type === VOL_TYPE_GENERIC;
                const v: Record<string, unknown> = { type };
                return w(v);
            },
            then: (schema) => schema.required('generic_required'),
            otherwise: (schema) => schema.notRequired(),
        }),
    cacheSize: yup.number()
        .max(10000000, 'cacheSize_maxValue')
        .typeError('cacheSize_invalid')
        .notRequired()
        .default(100),
    encryptionEnable: yup.boolean()
        .typeError('encryptionEnable_invalid')
        .notRequired(),
    encryption: Source_encryptionSchema
        .notRequired()
        .when(["encryptionEnable"], {
            is: (encryptionEnable?: boolean) => {
                const w = (v: Record<string, unknown>) => v.encryptionEnable === true;
                const v: Record<string, unknown> = { encryptionEnable };
                return w(v);
            },
            then: (schema) => schema.required('encryption_required'),
            otherwise: (schema) => schema.notRequired(),
        }),
};

export const SourceSchema = yup.object(SourceSchemaFields);
