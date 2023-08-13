import { MobilettoOrmFieldDefConfigs, MobilettoOrmFieldValue, MobilettoOrmTypeDef } from "mobiletto-orm-typedef";
import * as valid from "../../validation.js";

export const MediaTypeDefFields: MobilettoOrmFieldDefConfigs = {
  name: {
    primary: true,
    indexLevels: 0,
    min: 1,
    max: 500,
    regex: valid.REGEX_VALIDATORS.username,
    updatable: false,
    tabIndex: 1,
  },
  from: {
    required: false,
    ref: { refType: "media" },
  },
  ext: {
    required: true,
    tabIndex: 2,
    min: 1,
    max: 1000,
  },
};

export const MediaTypeDef = new MobilettoOrmTypeDef({
  typeName: "media",
  shortName: "media",
  tableFields: ["name", "ext", "_meta.ctime", "_meta.mtime"],
  textSearchFields: ["name", "ext"],
  fields: MediaTypeDefFields,
});

export const MediaOperationTypeDefFields: MobilettoOrmFieldDefConfigs = {
  name: {
    primary: true,
    indexLevels: 0,
    min: 1,
    max: 500,
    regex: valid.REGEX_VALIDATORS.username,
    updatable: false,
    tabIndex: 1,
  },
  minFileSize: {
    required: true,
    minValue: 0,
    control: "text",
    tabIndex: 2,
  },
  func: {
    default: false,
    tabIndex: 3,
  },
};

export const MediaOperationTypeDef = new MobilettoOrmTypeDef({
  typeName: "mediaOperation",
  shortName: "media~op",
  tableFields: ["name", "media", "value", "_meta.ctime", "_meta.mtime"],
  textSearchFields: ["name", "media", "value"],
  fields: MediaOperationTypeDefFields,
});

export const MediaProfileTypeDefFields: MobilettoOrmFieldDefConfigs = {
  name: {
    primary: true,
    indexLevels: 0,
    min: 1,
    max: 500,
    regex: valid.REGEX_VALIDATORS.username,
    updatable: false,
    tabIndex: 1,
  },
  media: {
    ref: { refType: "media" },
    tabIndex: 2,
  },
  operation: {
    ref: { refType: "mediaOperation" },
    tabIndex: 3,
  },
  command: {
    required: true,
    min: 1,
    max: 1024,
    tabIndex: 4,
  },
  ext: {
    required: true,
    min: 1,
    max: 20,
    tabIndex: 5,
  },
  contentType: {
    required: true,
    min: 3,
    max: 500,
    // todo: add content-type regex
    tabIndex: 6,
  },
  from: {
    required: false,
    ref: { refType: "mediaProfile" },
  },
  subProfiles: {
    required: false,
    type: "array",
    control: "multi",
    ref: { refType: "mediaProfile" },
  },
  enabled: { default: true },
  noop: { default: false },
  primary: { default: false },
  multiFile: { default: false },
};

export const MediaProfileTypeDef = new MobilettoOrmTypeDef({
  typeName: "mediaProfile",
  shortName: "media~prof",
  tableFields: ["name", "media", "value", "_meta.ctime", "_meta.mtime"],
  textSearchFields: ["name", "media", "value"],
  fields: MediaProfileTypeDefFields,
});

export const MediaPropertyTypeDefFields: MobilettoOrmFieldDefConfigs = {
  name: {
    primary: true,
    indexLevels: 0,
    min: 1,
    max: 500,
    regex: valid.REGEX_VALIDATORS.username,
    updatable: false,
    tabIndex: 1,
  },
  media: {
    ref: { refType: "media" },
    tabIndex: 2,
  },
  value: {
    required: true,
    min: 1,
    max: 8 * 1024,
    tabIndex: 3,
  },
};

export const MediaPropertyTypeDef = new MobilettoOrmTypeDef({
  typeName: "mediaProperty",
  shortName: "media~prop",
  tableFields: ["name", "media", "value", "_meta.ctime", "_meta.mtime"],
  textSearchFields: ["name", "media", "value"],
  fields: MediaPropertyTypeDefFields,
});
