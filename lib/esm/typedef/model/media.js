import { MobilettoOrmTypeDef } from "mobiletto-orm-typedef";
import * as valid from "../../validation.js";
export const MediaTypeDefFields = {
    name: {
        primary: true,
        indexLevels: 0,
        max: 500,
        regex: valid.REGEX_VALIDATORS.username,
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
        regex: valid.REGEX_VALIDATORS.username,
        updatable: false,
        tabIndex: 1,
    },
    command: {
        required: true,
        max: 1024,
        tabIndex: 4,
    },
    minFileSize: {
        required: true,
        minValue: 0,
        control: "text",
        tabIndex: 2,
    },
    analysis: {
        default: false,
        tabIndex: 3,
    },
    func: {
        default: false,
        tabIndex: 4,
    },
};
export const MediaOperationTypeDef = new MobilettoOrmTypeDef({
    typeName: "mediaOperation",
    shortName: "media~op",
    tableFields: ["name", "media", "value", "_meta.ctime", "_meta.mtime"],
    textSearchFields: ["name", "media", "value"],
    fields: MediaOperationTypeDefFields,
});
export const MediaProfileTypeDefFields = {
    name: {
        primary: true,
        indexLevels: 0,
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
    ext: {
        required: true,
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
        type: "string[]",
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
export const MediaPropertyTypeDefFields = {
    name: {
        primary: true,
        indexLevels: 0,
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
