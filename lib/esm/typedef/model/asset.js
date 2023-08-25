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
export const SourceAssetTypeDefFields = Object.assign({ name: {
        primary: true,
        indexLevels: 3,
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
export const ProfileJobTypeDefFields = Object.assign({ name: {
        primary: true,
        indexLevels: 3,
        max: 4096,
        updatable: false,
        control: "label",
        tabIndex: 1,
    }, profile: {
        required: true,
        index: true,
        ref: { refType: "mediaProfile" },
        control: "label",
        tabIndex: 2,
    }, operation: {
        required: true,
        max: 200,
        control: "label",
        tabIndex: 4,
    }, asset: {
        required: true,
        index: true,
        indexLevels: 3,
        max: 2048,
        control: "label",
        tabIndex: 3,
    }, analysis: {
        required: true,
        default: false,
        control: "label",
        tabIndex: 5,
    }, args: {
        type: "string[]",
        control: "label",
        tabIndex: 6,
    }, result: {
        type: "string",
        control: "label",
        tabIndex: 7,
    } }, MobilettoScanObjectTypeDefConfig.fields);
export const ProfileJobTypeDef = new MobilettoOrmTypeDef({
    typeName: "profileJob",
    shortName: "profileJob",
    tableFields: [
        "name",
        "profile",
        "operation",
        "asset",
        "analysis",
        "args",
        "result",
        "status",
        "owner",
        "started",
        "finished",
        "errorCount",
        "_meta.ctime",
        "_meta.mtime",
    ],
    textSearchFields: ["name", "profile", "operation", "destinationAsset", "args", "result"],
    fields: ProfileJobTypeDefFields,
});
export const UploadJobTypeDefFields = Object.assign({ localPath: {
        primary: true,
        indexLevels: 3,
        max: 2048,
        updatable: false,
        control: "label",
        tabIndex: 1,
    }, asset: {
        required: true,
        index: true,
        indexLevels: 3,
        type: "string",
        updatable: false,
        control: "label",
        tabIndex: 2,
    }, media: {
        required: true,
        type: "string",
        updatable: false,
        control: "label",
        tabIndex: 3,
    }, profile: {
        required: true,
        type: "string",
        updatable: false,
        control: "label",
        tabIndex: 4,
    }, destination: {
        required: true,
        control: "label",
        tabIndex: 5,
    }, size: {
        required: true,
        type: "number",
        control: "label",
        tabIndex: 6,
    } }, MobilettoScanObjectTypeDefConfig.fields);
export const UploadJobTypeDef = new MobilettoOrmTypeDef({
    typeName: "uploadJob",
    shortName: "uploadJob",
    scope: "local",
    tableFields: [
        "localPath",
        "asset",
        "media",
        "profile",
        "destination",
        "status",
        "owner",
        "started",
        "finished",
        "errorCount",
        "_meta.ctime",
        "_meta.mtime",
    ],
    textSearchFields: ["localPath", "asset", "media", "profile", "destination"],
    fields: UploadJobTypeDefFields,
});
