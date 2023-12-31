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
    ext: {
        required: true,
        index: true,
        type: "string[]",
        tabIndex: 2,
        max: 20,
    },
};
export const MediaTypeDef = new MobilettoOrmTypeDef({
    typeName: "media",
    shortName: "media",
    tableFields: ["name", "ext", "_meta.ctime", "_meta.mtime"],
    search: { textSearchFields: ["name", "ext"] },
    fields: MediaTypeDefFields,
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
    priority: { default: 0, tabIndex: 3 },
    media: {
        required: true,
        control: "select",
        ref: { refType: "media" },
        updatable: false,
        tabIndex: 4,
    },
    operation: {
        required: true,
        updatable: false,
        tabIndex: 5,
    },
    operationConfig: {
        type: "string",
        updatable: false,
        tabIndex: 6,
        max: 4096,
    },
    ext: {
        updatable: false,
        max: 20,
        tabIndex: 7,
    },
    contentType: {
        updatable: false,
        min: 3,
        max: 500,
        regex: REGEX_VALIDATORS.content_type,
        tabIndex: 8,
    },
    from: {
        updatable: false,
        control: "select",
        ref: { refType: "mediaProfile" },
        tabIndex: 9,
    },
    subProfiles: {
        updatable: false,
        type: "string[]",
        control: "multi",
        ref: { refType: "mediaProfile" },
        tabIndex: 10,
    },
    additionalAssets: {
        updatable: false,
        type: "string[]",
        max: 500,
        tabIndex: 11,
    },
    noop: { default: false, tabIndex: 12, updatable: false },
    primary: { default: false, tabIndex: 13, updatable: false },
};
export const MediaProfileTypeDef = new MobilettoOrmTypeDef({
    typeName: "mediaProfile",
    shortName: "media~prof",
    tableFields: ["name", "media", "enabled", "operation", "contentType", "_meta.ctime", "_meta.mtime"],
    search: {
        textSearchFields: ["name", "media", "operation", "ext", "contentType", "from", "subProfiles"],
        refSearch: { media: "select" },
    },
    fields: MediaProfileTypeDefFields,
});
