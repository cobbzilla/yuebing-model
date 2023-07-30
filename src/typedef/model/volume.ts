import { MobilettoOrmTypeDef, MobilettoOrmFieldDefConfigs, MobilettoOrmRawValue } from "mobiletto-orm-typedef";

import * as valid from "../../validation.js";
import { parseMessage } from "yuebing-messages";

const LOCAL_FIELDS: MobilettoOrmFieldDefConfigs = {
  key: {
    type: "string",
    tabIndex: 11,
    label: "label_volumeType_local_key",
    required: true,
    min: 2,
    max: 1024,
    regex: valid.REGEX_VALIDATORS.local_path,
    updatable: false,
  },
  createIfNotExist: {
    default: false,
    tabIndex: 12,
    label: "label_volumeType_local_createIfNotExist",
  },
  mode: {
    type: "string",
    tabIndex: 13,
    label: "label_volumeType_local_mode",
    default: "0700",
    min: 4,
    max: 4,
    regex: valid.REGEX_VALIDATORS.file_mode,
  },
};

const S3_FIELDS: MobilettoOrmFieldDefConfigs = {
  key: {
    type: "string",
    tabIndex: 21,
    label: "label_volumeType_s3_key",
    required: true,
    min: 20,
    max: 20,
    regex: valid.REGEX_VALIDATORS.aws_key,
    updatable: false,
  },
  secret: {
    type: "string",
    tabIndex: 22,
    label: "label_volumeType_s3_secret",
    required: true,
    min: 40,
    max: 40,
    regex: valid.REGEX_VALIDATORS.aws_secret,
    updatable: false,
  },
  bucket: {
    type: "string",
    tabIndex: 23,
    label: "label_volumeType_s3_bucket",
    required: true,
    min: 3,
    max: 63,
    regex: valid.REGEX_VALIDATORS.s3_bucket,
  },
  region: {
    type: "string",
    tabIndex: 24,
    label: "label_volumeType_s3_region",
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
    tabIndex: 25,
    label: "label_volumeType_s3_prefix",
    default: "",
  },
  delimiter: {
    type: "string",
    tabIndex: 26,
    label: "label_volumeType_s3_delimiter",
    default: "/",
    min: 1,
    max: 1,
  },
};

const B2_FIELDS: MobilettoOrmFieldDefConfigs = {
  key: {
    type: "string",
    tabIndex: 31,
    label: "label_volumeType_b2_key",
    required: true,
    min: 10,
    max: 50,
    regex: valid.REGEX_VALIDATORS.raw_hex,
  },
  secret: {
    type: "string",
    tabIndex: 32,
    label: "label_volumeType_b2_secret",
    required: true,
    min: 10,
    max: 50,
  },
  bucket: {
    type: "string",
    tabIndex: 33,
    label: "label_volumeType_b2_bucket",
    required: true,
    min: 6,
    max: 63,
    regex: valid.REGEX_VALIDATORS.b2_bucket,
  },
  partSize: {
    type: "number",
    tabIndex: 34,
    control: "text",
    label: "label_volumeType_b2_partSize",
    minValue: 5000000,
    maxValue: 2000000000,
    normalize: async (v: unknown) => Promise.resolve(Math.floor(v as number)),
  },
  prefix: {
    type: "string",
    tabIndex: 35,
    label: "label_volumeType_b2_prefix",
    default: "",
  },
  delimiter: {
    type: "string",
    tabIndex: 36,
    label: "label_volumeType_b2_delimiter",
    default: "/",
    min: 1,
    max: 1,
  },
};

const GENERIC_FIELDS: MobilettoOrmFieldDefConfigs = {
  driver: {
    type: "string",
    tabIndex: 41,
    label: "label_volumeType_generic_driver",
    required: true,
    max: 1000,
  },
  key: {
    type: "string",
    tabIndex: 42,
    label: "label_volumeType_generic_key",
    required: false,
    max: 1000,
  },
  secret: {
    type: "string",
    tabIndex: 43,
    label: "label_volumeType_generic_secret",
    required: false,
    max: 1000,
  },
  opts: {
    type: "string",
    tabIndex: 44,
    label: "label_volumeType_generic_opts",
    required: false,
    max: 1024 * 128,
  },
};

export const VOL_TYPE_LOCAL = "local";
export const VOL_TYPE_S3 = "s3";
export const VOL_TYPE_B2 = "b2";
export const VOL_TYPE_GENERIC = "generic";

const VOLUME_TYPES: Record<string, MobilettoOrmFieldDefConfigs> = {};
VOLUME_TYPES[VOL_TYPE_LOCAL] = LOCAL_FIELDS;
VOLUME_TYPES[VOL_TYPE_S3] = S3_FIELDS;
VOLUME_TYPES[VOL_TYPE_B2] = B2_FIELDS;
VOLUME_TYPES[VOL_TYPE_GENERIC] = GENERIC_FIELDS;

const notKeyOrSecret = (k: string): boolean => k !== "key" && k !== "secret";

export const VOLUME_OPTS_FIELDS: Record<string, string[]> = {};
VOLUME_OPTS_FIELDS[VOL_TYPE_LOCAL] = Object.keys(LOCAL_FIELDS).filter(notKeyOrSecret);
VOLUME_OPTS_FIELDS[VOL_TYPE_S3] = Object.keys(S3_FIELDS).filter(notKeyOrSecret);
VOLUME_OPTS_FIELDS[VOL_TYPE_B2] = Object.keys(B2_FIELDS).filter(notKeyOrSecret);
VOLUME_OPTS_FIELDS[VOL_TYPE_GENERIC] = Object.keys(GENERIC_FIELDS).filter(notKeyOrSecret);

export const DEFAULT_ENCRYPTION_ALGO = "aes-256-cbc";

export const VolumeTypeDefFields: MobilettoOrmFieldDefConfigs = {
  name: {
    type: "string",
    primary: true,
    tabIndex: 1,
    min: 3,
    max: 100,
    render: (v: MobilettoOrmRawValue, messages: Record<string, string>, title: string): string =>
      valid.isSelfVolume(v as string) ? parseMessage("admin_label_self_volume", messages, { title }) : (v as string),
  },
  type: {
    type: "string",
    tabIndex: 2,
    items: Object.keys(VOLUME_TYPES).map((type) => {
      return { value: type, label: `label_volumeType_${type}` };
    }),
    required: true,
    updatable: false,
    render: (v: MobilettoOrmRawValue, messages: Record<string, string>, title: string): string =>
      valid.isSelfVolume(v as string) ? parseMessage("label_volumeType_system", messages, { title }) : (v as string),
  },
  local: {
    tabIndex: 10,
    when: (v: Record<string, unknown>) => v.type === VOL_TYPE_LOCAL,
    fields: LOCAL_FIELDS,
  },
  s3: {
    tabIndex: 20,
    when: (v: Record<string, unknown>) => v.type === VOL_TYPE_S3,
    fields: S3_FIELDS,
  },
  b2: {
    tabIndex: 30,
    when: (v: Record<string, unknown>) => v.type === VOL_TYPE_B2,
    fields: B2_FIELDS,
  },
  generic: {
    tabIndex: 40,
    when: (v: Record<string, unknown>) => v.type === VOL_TYPE_GENERIC,
    fields: GENERIC_FIELDS,
  },
  cacheSize: {
    type: "number",
    label: "label_volumeType_cacheSize",
    control: "text",
    tabIndex: 100,
    minValue: 0,
    maxValue: 10000000,
    default: 100,
  },
  encryptionEnable: {
    type: "boolean",
    label: "label_volumeType_encryptionEnable",
    tabIndex: 101,
    default: false,
  },
  encryption: {
    when: (v: Record<string, unknown>) => v.encryptionEnable === true,
    fields: {
      encryptionKey: {
        type: "string",
        label: "label_volumeType_encryption_encryptionKey",
        tabIndex: 102,
        required: true,
        min: 16,
        max: 1024,
        updatable: false,
      },
      encryptionIV: {
        type: "string",
        label: "label_volumeType_encryption_encryptionIV",
        tabIndex: 103,
        min: 16,
        max: 1024,
        updatable: false,
      },
      encryptionAlgo: {
        type: "string",
        label: "label_volumeType_encryption_encryptionAlgo",
        tabIndex: 104,
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

export const SourceTypeDefFields: MobilettoOrmFieldDefConfigs = {
  ...VolumeTypeDefFields,
};

export const SourceTypeDef = new MobilettoOrmTypeDef({
  typeName: "source",
  idPrefix: "src",
  tableFields: ["name", "type", "ctime", "mtime"],
  fields: SourceTypeDefFields,
}).extend({
  typeName: "source",
  fields: {
    name: { label: "label_sourceType_name" },
    type: { label: "label_sourceType_type" },
  },
});

export const DestinationTypeDefFields: MobilettoOrmFieldDefConfigs = {
  ...VolumeTypeDefFields,
  system: {
    type: "boolean",
    label: "label_volumeType_system",
    default: false,
    render: (v: MobilettoOrmRawValue): string => (valid.isSelfVolume(v as string) ? "true" : (v as string)),
    index: true,
    indexLevels: 0,
  },
};

export const DestinationTypeDef = new MobilettoOrmTypeDef({
  typeName: "destination",
  idPrefix: "dst",
  tableFields: ["name", "type", "system", "ctime", "mtime"],
  fields: DestinationTypeDefFields,
}).extend({
  typeName: "destination",
  fields: {
    name: { label: "label_destinationType_name" },
    type: { label: "label_destinationType_type" },
  },
});
