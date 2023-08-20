import { MobilettoOrmTypeDef } from "mobiletto-orm-typedef";
import { REGEX_VALIDATORS } from "../../validation.js";
export const MediaTypeDefFields = {
    name: {
        primary: true,
        indexLevels: 0,
        max: 500,
        regex: REGEX_VALIDATORS.username,
        tabIndex: 1,
    },
    from: {
        required: false,
        tabIndex: 2,
        ref: { refType: "media" },
    },
    ext: {
        required: true,
        index: true,
        type: "string[]",
        tabIndex: 3,
        max: 20,
    },
    packages: {
        type: "string[]",
        tabIndex: 4,
        max: 100,
    },
};
export const MediaTypeDef = new MobilettoOrmTypeDef({
    typeName: "media",
    shortName: "media",
    tableFields: ["name", "ext", "_meta.ctime", "_meta.mtime"],
    textSearchFields: ["name", "ext"],
    fields: MediaTypeDefFields,
});
export const MediaOperationTypeDefFields = {
    name: {
        primary: true,
        indexLevels: 0,
        max: 500,
        regex: REGEX_VALIDATORS.username,
        tabIndex: 1,
    },
    analysis: {
        default: false,
        updatable: false,
        tabIndex: 2,
    },
    command: {
        updatable: false,
        max: 1024,
        tabIndex: 3,
    },
    func: {
        default: false,
        updatable: false,
        tabIndex: 4,
    },
    minFileSize: {
        required: true,
        minValue: 0,
        control: "text",
        tabIndex: 5,
    },
};
export const MediaOperationTypeDef = new MobilettoOrmTypeDef({
    typeName: "mediaOperation",
    shortName: "media~op",
    tableFields: ["name", "analysis", "command", "func", "_meta.ctime", "_meta.mtime"],
    textSearchFields: ["name", "command"],
    fields: MediaOperationTypeDefFields,
});
export const MediaProfileTypeDefFields = {
    name: {
        primary: true,
        indexLevels: 0,
        max: 500,
        regex: REGEX_VALIDATORS.username,
        tabIndex: 1,
    },
    enabled: { default: true, tabIndex: 2 },
    media: {
        ref: { refType: "media" },
        updatable: false,
        tabIndex: 3,
    },
    operation: {
        ref: { refType: "mediaOperation" },
        updatable: false,
        tabIndex: 4,
    },
    operationConfig: {
        type: "string",
        updatable: false,
        tabIndex: 5,
        max: 4096,
    },
    ext: {
        updatable: false,
        max: 20,
        tabIndex: 6,
    },
    contentType: {
        updatable: false,
        min: 3,
        max: 500,
        regex: REGEX_VALIDATORS.content_type,
        tabIndex: 7,
    },
    from: {
        required: false,
        updatable: false,
        ref: { refType: "mediaProfile" },
        tabIndex: 7,
    },
    subProfiles: {
        updatable: false,
        type: "string[]",
        ref: { refType: "mediaProfile" },
        tabIndex: 8,
    },
    additionalAssets: {
        updatable: false,
        type: "string[]",
        max: 500,
        tabIndex: 9,
    },
    noop: { default: false, tabIndex: 10, updatable: false },
    primary: { default: false, tabIndex: 11, updatable: false },
    multiFile: { default: false, tabIndex: 12, updatable: false },
};
export const MediaProfileTypeDef = new MobilettoOrmTypeDef({
    typeName: "mediaProfile",
    shortName: "media~prof",
    tableFields: ["name", "media", "enabled", "operation", "contentType", "_meta.ctime", "_meta.mtime"],
    textSearchFields: ["name", "media", "operation", "ext", "contentType", "from", "subProfiles"],
    fields: MediaProfileTypeDefFields,
});
export const MediaPropertyTypeDefFields = {
    name: {
        primary: true,
        indexLevels: 0,
        max: 500,
        regex: REGEX_VALIDATORS.username,
        updatable: false,
        tabIndex: 1,
    },
    media: {
        ref: { refType: "media" },
        tabIndex: 2,
    },
    value: {
        required: true,
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
