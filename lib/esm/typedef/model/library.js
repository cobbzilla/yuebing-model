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
    autoscanEnabled: {
        required: true,
        default: false,
        tabIndex: 4,
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
    idPrefix: "lbry",
    tableFields: ["name", "sources", "destinations"],
    fields: Object.assign({}, LibraryTypeDefFields),
});
