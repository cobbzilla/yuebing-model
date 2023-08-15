import { MobilettoOrmFieldDefConfigs, MobilettoOrmTypeDef } from "mobiletto-orm-typedef";
import { MobilettoScanObjectTypeDefConfig } from "mobiletto-orm-scan-typedef";

export const LibraryScanTypeDef = new MobilettoOrmTypeDef({
  typeName: "libraryScan",
  shortName: "scan~lib",
  indexLevels: 0,
  scope: "local",
  tableFields: ["name", "library", "status", "owner", "started", "finished", "errorCount"],
  textSearchFields: ["name", "library", "status", "owner"],
  fields: {
    name: {
      primary: true,
      type: "string",
    },
    library: {
      unique: true,
      ref: { refType: "library" },
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

const AssetTableFields = [
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
const AssetTextSearchFields = ["name", "source", "owner"];

export const DiscoveredAssetTypeDefFields: MobilettoOrmFieldDefConfigs = {
  name: {
    index: true,
    indexLevels: 3,
    min: 1,
    max: 1024,
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

export const DiscoveredAssetTypeDef = new MobilettoOrmTypeDef({
  typeName: "discoveredAsset",
  shortName: "ast~disc",
  tableFields: AssetTableFields,
  textSearchFields: AssetTextSearchFields,
  fields: DiscoveredAssetTypeDefFields,
});

export const DownloadedAssetTypeDefFields: MobilettoOrmFieldDefConfigs = {
  name: {
    index: true,
    indexLevels: 3,
    min: 1,
    max: 1024,
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

export const DownloadedAssetTypeDef = new MobilettoOrmTypeDef({
  typeName: "downloadedAsset",
  shortName: "ast~dwnld",
  scope: "local",
  tableFields: AssetTableFields,
  textSearchFields: AssetTextSearchFields,
  fields: DownloadedAssetTypeDefFields,
});

export const AnalyzedAssetTypeDefFields: MobilettoOrmFieldDefConfigs = {
  name: {
    index: true,
    indexLevels: 3,
    min: 1,
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
  // MobilettoMetadata as JSON
  meta: {
    required: false,
    min: 2,
    max: 2048,
    tabIndex: 3,
    control: "label",
  },
  // MediaInfo as JSON
  mediainfo: {
    required: false,
    min: 2,
    max: 1024 * 128,
    tabIndex: 4,
    control: "label",
  },
  ...MobilettoScanObjectTypeDefConfig.fields,
};

export const AnalyzedAssetTypeDef = new MobilettoOrmTypeDef({
  typeName: "analyzedAsset",
  shortName: "ast~analyze",
  tableFields: AssetTableFields,
  textSearchFields: [...AssetTextSearchFields, "meta", "mediainfo"],
  fields: AnalyzedAssetTypeDefFields,
});
