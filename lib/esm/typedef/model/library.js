import { MobilettoOrmTypeDef } from "mobiletto-orm-typedef";
import * as valid from "../../validation.js";
export const LibraryTypeDefFields = {
    name: {
        primary: true,
        indexLevels: 2,
        min: 1,
        max: 500,
        regex: valid.REGEX_VALIDATORS.username,
        updatable: false,
        tabIndex: 1,
    },
    sources: {
        type: "array",
        control: "multi",
        values: [""],
        tabIndex: 2,
    },
    destinations: {
        type: "array",
        control: "multi",
        values: [""],
        tabIndex: 3,
    },
    media: {
        items: [
            { label: "label_media_audio", value: "audio" },
            { label: "label_media_video", value: "video" },
            { label: "label_media_photo", value: "photo" },
            { label: "label_media_document", value: "document" },
            { label: "label_media_mixed", value: "mixed" },
        ],
        tabIndex: 4,
    },
    autoscanEnabled: {
        required: true,
        default: false,
        tabIndex: 5,
    },
    autoscan: {
        when: (v) => v.autoscanEnabled === true,
        fields: {
            initialDelay: {
                required: false,
                minValue: 1000 * 60,
                maxValue: 1000 * 60 * 60,
                default: 1000 * 60 * 10,
                control: "duration",
                tabIndex: 5,
            },
            interval: {
                required: false,
                type: "number",
                minValue: 1000 * 60,
                maxValue: 1000 * 60 * 60 * 24 * 366,
                default: 1000 * 60 * 60 * 24,
                control: "duration",
                tabIndex: 6,
            },
        },
    },
};
export const LibraryTypeDef = new MobilettoOrmTypeDef({
    typeName: "library",
    shortName: "lbry",
    tableFields: ["name", "sources", "destinations"],
    fields: Object.assign({}, LibraryTypeDefFields),
});
