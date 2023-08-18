import { MobilettoOrmTypeDef } from "mobiletto-orm-typedef";
import { MobilettoScanObjectTypeDefConfig } from "mobiletto-orm-scan-typedef";
export const LibraryScanTypeDef = new MobilettoOrmTypeDef({
    typeName: "libraryScan",
    shortName: "scan~lib",
    indexLevels: 0,
    scope: "local",
    tableFields: ["library", "status", "owner", "started", "finished", "errorCount"],
    textSearchFields: ["library", "status", "owner"],
    fields: Object.assign({ library: {
            primary: true,
            type: "string",
        } }, MobilettoScanObjectTypeDefConfig.fields),
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
export const SourceAssetTypeDefFields = Object.assign({ name: {
        index: true,
        indexLevels: 3,
        min: 1,
        max: 2048,
        updatable: false,
        control: "label",
        tabIndex: 1,
    }, source: {
        required: true,
        ref: { refType: "source" },
        control: "label",
        tabIndex: 2,
    } }, MobilettoScanObjectTypeDefConfig.fields);
export const SourceAssetTypeDef = new MobilettoOrmTypeDef({
    typeName: "sourceAsset",
    shortName: "asset~src",
    tableFields: AssetTableFields,
    textSearchFields: AssetTextSearchFields,
    fields: SourceAssetTypeDefFields,
});
export const DestinationAssetTypeDefFields = Object.assign({ name: {
        index: true,
        indexLevels: 3,
        min: 1,
        max: 2048,
        updatable: false,
        control: "label",
        tabIndex: 1,
    }, source: {
        required: true,
        ref: { refType: "source" },
        control: "label",
        tabIndex: 2,
    }, profile: {
        required: true,
        ref: { refType: "mediaProfile" },
        control: "label",
        tabIndex: 3,
    }, sourcePath: {
        required: true,
        index: true,
        type: "string",
        control: "label",
        tabIndex: 4,
    }, destinationPath: {
        required: true,
        type: "string",
        control: "label",
        tabIndex: 5,
    } }, MobilettoScanObjectTypeDefConfig.fields);
export const DestinationAssetTypeDef = new MobilettoOrmTypeDef({
    typeName: "destinationAsset",
    shortName: "asset~dest",
    scope: "local",
    tableFields: AssetTableFields,
    textSearchFields: AssetTextSearchFields,
    fields: DestinationAssetTypeDefFields,
});
