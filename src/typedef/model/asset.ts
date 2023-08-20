import { MobilettoOrmFieldDefConfigs, MobilettoOrmTypeDef } from "mobiletto-orm-typedef";
import { MobilettoScanObjectTypeDefConfig } from "mobiletto-orm-scan-typedef";

export const LibraryScanTypeDef = new MobilettoOrmTypeDef({
  typeName: "libraryScan",
  shortName: "scan~lib",
  indexLevels: 0,
  scope: "local",
  tableFields: ["library", "status", "owner", "started", "finished", "errorCount"],
  textSearchFields: ["library", "status", "owner"],
  fields: {
    library: {
      primary: true,
      type: "string",
    },
    ...MobilettoScanObjectTypeDefConfig.fields,
  },
});

export const SourceScanTypeDef = new MobilettoOrmTypeDef({
  typeName: "sourceScan",
  shortName: "scan~src",
  indexLevels: 2,
  tableFields: ["lock", "owner", "_mtime.ctime", "_mtime.mtime"],
  textSearchFields: ["lock", "owner"],
  fields: {
    lock: {
      primary: true,
      type: "string",
    },
    owner: {
      required: true,
      type: "string",
    },
  },
});

export const SourceAssetTypeDefFields: MobilettoOrmFieldDefConfigs = {
  name: {
    primary: true,
    indexLevels: 3,
    max: 2048,
    updatable: false,
    control: "label",
    tabIndex: 1,
  },
  source: {
    required: true,
    ref: { refType: "source" },
    control: "label",
    tabIndex: 2,
  },
  ...MobilettoScanObjectTypeDefConfig.fields,
};

const sourceAssetTableFields = [
  "name",
  "source",
  "status",
  "owner",
  "started",
  "finished",
  "errorCount",
  "_meta.ctime",
  "_meta.mtime",
];
const sourceAssetSearchFields = ["name", "source", "owner"];

export const SourceAssetTypeDef = new MobilettoOrmTypeDef({
  typeName: "sourceAsset",
  shortName: "asset~src",
  tableFields: sourceAssetTableFields,
  textSearchFields: sourceAssetSearchFields,
  fields: SourceAssetTypeDefFields,
});

export const ProfileJobTypeDefFields: MobilettoOrmFieldDefConfigs = {
  name: {
    primary: true,
    indexLevels: 3,
    max: 4096,
    updatable: false,
    control: "label",
    tabIndex: 1,
  },
  profile: {
    required: true,
    index: true,
    ref: { refType: "mediaProfile" },
    control: "label",
    tabIndex: 2,
  },
  asset: {
    required: true,
    index: true,
    indexLevels: 3,
    max: 2048,
    control: "label",
    tabIndex: 3,
  },
  args: {
    type: "string[]",
    control: "label",
    tabIndex: 4,
  },
  analysis: {
    type: "string",
    tabIndex: 5,
    control: "label",
  },
  ...MobilettoScanObjectTypeDefConfig.fields,
};

export const ProfileJobTypeDef = new MobilettoOrmTypeDef({
  typeName: "profileJob",
  shortName: "profileJob",
  tableFields: [
    "name",
    "profile",
    "asset",
    "args",
    "status",
    "owner",
    "started",
    "finished",
    "errorCount",
    "_meta.ctime",
    "_meta.mtime",
  ],
  textSearchFields: ["name", "profile", "destinationAsset", "args", "analysis"],
  fields: ProfileJobTypeDefFields,
});

export const UploadJobTypeDefFields: MobilettoOrmFieldDefConfigs = {
  localPath: {
    primary: true,
    indexLevels: 3,
    max: 2048,
    updatable: false,
    control: "label",
    tabIndex: 1,
  },
  sourceAsset: {
    required: true,
    type: "string",
    updatable: false,
    control: "label",
    tabIndex: 2,
  },
  media: {
    required: true,
    type: "string",
    updatable: false,
    control: "label",
    tabIndex: 3,
  },
  profile: {
    required: true,
    type: "string",
    updatable: false,
    control: "label",
    tabIndex: 4,
  },
  destination: {
    required: true,
    control: "label",
    tabIndex: 2,
  },
  ...MobilettoScanObjectTypeDefConfig.fields,
};

export const UploadJobTypeDef = new MobilettoOrmTypeDef({
  typeName: "uploadJob",
  shortName: "uploadJob",
  scope: "local",
  tableFields: [
    "path",
    "destination",
    "status",
    "owner",
    "started",
    "finished",
    "errorCount",
    "_meta.ctime",
    "_meta.mtime",
  ],
  textSearchFields: ["path", "destination"],
  fields: UploadJobTypeDefFields,
});
