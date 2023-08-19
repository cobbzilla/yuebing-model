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
    tableFields: ["name", "source", "status", "owner", "started", "finished", "errorCount", "_meta.ctime", "_meta.mtime"],
    textSearchFields: ["name", "source", "owner"],
    fields: SourceAssetTypeDefFields,
});
export const DestinationAssetTypeDefFields = Object.assign({ name: {
        primary: true,
        indexLevels: 3,
        min: 1,
        max: 2048,
        updatable: false,
        control: "label",
        tabIndex: 1,
    }, profile: {
        required: true,
        index: true,
        ref: { refType: "mediaProfile" },
        control: "label",
        tabIndex: 2,
    }, source: {
        required: true,
        ref: { refType: "source" },
        control: "label",
        tabIndex: 3,
    }, sourceAsset: {
        required: true,
        ref: { refType: "sourceAsset" },
        control: "label",
        tabIndex: 4,
    } }, MobilettoScanObjectTypeDefConfig.fields);
export const DestinationAssetTypeDef = new MobilettoOrmTypeDef({
    typeName: "destinationAsset",
    shortName: "asset~dest",
    tableFields: [
        "name",
        "profile",
        "source",
        "sourcePath",
        "status",
        "owner",
        "started",
        "finished",
        "errorCount",
        "_meta.ctime",
        "_meta.mtime",
    ],
    textSearchFields: ["name", "profile", "source", "sourcePath", "owner"],
    fields: DestinationAssetTypeDefFields,
});
export const ProfileJobTypeDefFields = Object.assign({ name: {
        primary: true,
        indexLevels: 3,
        min: 1,
        max: 2048,
        updatable: false,
        control: "label",
        tabIndex: 1,
    }, profile: {
        required: true,
        index: true,
        ref: { refType: "mediaProfile" },
        control: "label",
        tabIndex: 2,
    }, destinationAsset: {
        required: true,
        ref: { refType: "destinationAsset" },
        control: "label",
        tabIndex: 3,
    }, args: {
        required: true,
        type: "string[]",
        control: "label",
        tabIndex: 4,
    } }, MobilettoScanObjectTypeDefConfig.fields);
export const ProfileJobTypeDef = new MobilettoOrmTypeDef({
    typeName: "profileJob",
    shortName: "profileJob",
    tableFields: [
        "name",
        "profile",
        "destinationAsset",
        "args",
        "status",
        "owner",
        "started",
        "finished",
        "errorCount",
        "_meta.ctime",
        "_meta.mtime",
    ],
    textSearchFields: ["name", "profile", "destinationAsset", "args"],
    fields: ProfileJobTypeDefFields,
});
