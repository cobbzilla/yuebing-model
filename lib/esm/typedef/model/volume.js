var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { MobilettoOrmTypeDef } from "mobiletto-orm-typedef";
import * as valid from "../../validation.js";
import { parseMessage } from "yuebing-messages";
const LOCAL_FIELDS = {
    key: {
        type: "string",
        label: "label_volumeType_local_field_key",
        required: true,
        min: 2,
        max: 1024,
        regex: valid.REGEX_VALIDATORS.local_path,
        updatable: false,
    },
    mode: {
        type: "string",
        label: "label_volumeType_local_field_mode",
        default: "0700",
        min: 4,
        max: 4,
        regex: valid.REGEX_VALIDATORS.file_mode,
    },
};
const S3_FIELDS = {
    key: {
        type: "string",
        label: "label_volumeType_s3_field_key",
        required: true,
        min: 20,
        max: 20,
        regex: valid.REGEX_VALIDATORS.aws_key,
        updatable: false,
    },
    secret: {
        type: "string",
        label: "label_volumeType_s3_field_secret",
        required: true,
        min: 40,
        max: 40,
        regex: valid.REGEX_VALIDATORS.aws_secret,
        updatable: false,
    },
    bucket: {
        type: "string",
        label: "label_volumeType_s3_field_bucket",
        required: true,
        min: 3,
        max: 63,
        regex: valid.REGEX_VALIDATORS.s3_bucket,
    },
    region: {
        type: "string",
        label: "label_volumeType_s3_field_region",
        items: [
            "us-east-2",
            "us-east-1",
            "us-west-1",
            "us-west-2",
            "af-south-1",
            "ap-east-1",
            "ap-south-2",
            "ap-southeast-3",
            "ap-southeast-4",
            "ap-south-1",
            "ap-northeast-3",
            "ap-northeast-2",
            "ap-southeast-1",
            "ap-southeast-2",
            "ap-northeast-1",
            "ca-central-1",
            "eu-central-1",
            "eu-west-1",
            "eu-west-2",
            "eu-south-1",
            "eu-west-3",
            "eu-south-2",
            "eu-north-1",
            "eu-central-2",
            "me-south-1",
            "me-central-1",
            "sa-east-1",
        ].map((r) => {
            return { value: r, label: r, rawLabel: true };
        }),
        default: "us-east-1",
    },
    prefix: {
        type: "string",
        label: "label_volumeType_s3_field_prefix",
        default: "",
    },
    delimiter: {
        type: "string",
        label: "label_volumeType_s3_field_delimiter",
        default: "/",
        min: 1,
        max: 1,
    },
};
const B2_FIELDS = {
    key: {
        type: "string",
        label: "label_volumeType_b2_field_key",
        required: true,
        min: 10,
        max: 50,
        regex: valid.REGEX_VALIDATORS.raw_hex,
    },
    secret: {
        type: "string",
        label: "label_volumeType_b2_field_secret",
        required: true,
        min: 10,
        max: 50,
    },
    bucket: {
        type: "string",
        label: "label_volumeType_b2_field_bucket",
        required: true,
        min: 6,
        max: 63,
        regex: valid.REGEX_VALIDATORS.b2_bucket,
    },
    partSize: {
        type: "number",
        label: "label_volumeType_b2_field_partSize",
        minValue: 5000000,
        maxValue: 2000000000,
        normalize: (v) => __awaiter(void 0, void 0, void 0, function* () { return Promise.resolve(Math.floor(v)); }),
    },
    prefix: {
        type: "string",
        label: "label_volumeType_b2_field_prefix",
        default: "",
    },
    delimiter: {
        type: "string",
        label: "label_volumeType_b2_field_delimiter",
        default: "/",
        min: 1,
        max: 1,
    },
};
const GENERIC_FIELDS = {
    driver: {
        type: "string",
        label: "label_volumeType_generic_field_driver",
        required: true,
        max: 1000,
    },
    key: {
        type: "string",
        label: "label_volumeType_generic_field_key",
        required: false,
        max: 1000,
    },
    secret: {
        type: "string",
        label: "label_volumeType_generic_field_secret",
        required: false,
        max: 1000,
    },
    opts: {
        type: "string",
        label: "label_volumeType_generic_field_opts",
        required: false,
        max: 1024 * 128,
    },
};
export const VOL_TYPE_LOCAL = "local";
export const VOL_TYPE_S3 = "s3";
export const VOL_TYPE_B2 = "b2";
export const VOL_TYPE_GENERIC = "generic";
const VOLUME_TYPES = {};
VOLUME_TYPES[VOL_TYPE_LOCAL] = LOCAL_FIELDS;
VOLUME_TYPES[VOL_TYPE_S3] = S3_FIELDS;
VOLUME_TYPES[VOL_TYPE_B2] = B2_FIELDS;
VOLUME_TYPES[VOL_TYPE_GENERIC] = GENERIC_FIELDS;
const notKeyOrSecret = (k) => k !== "key" && k !== "secret";
export const VOLUME_OPTS_FIELDS = {};
VOLUME_OPTS_FIELDS[VOL_TYPE_LOCAL] = Object.keys(LOCAL_FIELDS).filter(notKeyOrSecret);
VOLUME_OPTS_FIELDS[VOL_TYPE_S3] = Object.keys(S3_FIELDS).filter(notKeyOrSecret);
VOLUME_OPTS_FIELDS[VOL_TYPE_B2] = Object.keys(B2_FIELDS).filter(notKeyOrSecret);
VOLUME_OPTS_FIELDS[VOL_TYPE_GENERIC] = Object.keys(GENERIC_FIELDS).filter(notKeyOrSecret);
export const DEFAULT_ENCRYPTION_ALGO = "aes-256-cbc";
export const VolumeTypeDefFields = {
    name: {
        type: "string",
        primary: true,
        min: 3,
        max: 100,
        render: (v, messages, title) => valid.isSelfVolume(v) ? parseMessage("admin_label_self_volume", messages, { title }) : v,
    },
    type: {
        type: "string",
        items: Object.keys(VOLUME_TYPES).map((type) => {
            return { value: type, label: `label_volumeType_${type}` };
        }),
        required: true,
        updatable: false,
        render: (v, messages, title) => valid.isSelfVolume(v) ? parseMessage("label_volumeType_system", messages, { title }) : v,
    },
    local: {
        when: (v) => v.type === VOL_TYPE_LOCAL,
        fields: LOCAL_FIELDS,
    },
    s3: {
        when: (v) => v.type === VOL_TYPE_S3,
        fields: S3_FIELDS,
    },
    b2: {
        when: (v) => v.type === VOL_TYPE_B2,
        fields: B2_FIELDS,
    },
    generic: {
        when: (v) => v.type === VOL_TYPE_GENERIC,
        fields: GENERIC_FIELDS,
    },
    cacheSize: {
        type: "number",
        minValue: 0,
        maxValue: 10000000,
        default: 100,
    },
    encryptionEnable: {
        type: "boolean",
        default: false,
    },
    encryption: {
        when: (v) => v.encryptionEnable === true,
        fields: {
            encryptionKey: {
                type: "string",
                required: true,
                min: 16,
                max: 1024,
                updatable: false,
            },
            encryptionIV: {
                type: "string",
                min: 16,
                max: 1024,
                updatable: false,
            },
            encryptionAlgo: {
                type: "string",
                items: [{ value: DEFAULT_ENCRYPTION_ALGO, rawLabel: true }],
                default: DEFAULT_ENCRYPTION_ALGO,
                updatable: false,
            },
        },
    },
};
export const VolumeTypeDef = new MobilettoOrmTypeDef({
    typeName: "volume",
    idPrefix: "vol",
    tableFields: ["name", "type", "ctime", "mtime"],
    fields: VolumeTypeDefFields,
});
export const SourceTypeDefFields = Object.assign({}, VolumeTypeDefFields);
export const SourceTypeDef = new MobilettoOrmTypeDef({
    typeName: "source",
    idPrefix: "src",
    tableFields: ["name", "type", "ctime", "mtime"],
    fields: SourceTypeDefFields,
});
export const DestinationTypeDefFields = Object.assign(Object.assign({}, VolumeTypeDefFields), { system: {
        type: "boolean",
        default: false,
        render: (v) => (valid.isSelfVolume(v) ? "true" : v),
        index: true,
    } });
export const DestinationTypeDef = new MobilettoOrmTypeDef({
    typeName: "destination",
    idPrefix: "dst",
    tableFields: ["name", "type", "system", "ctime", "mtime"],
    fields: DestinationTypeDefFields,
});
