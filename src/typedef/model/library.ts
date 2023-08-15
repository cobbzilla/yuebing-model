import { MobilettoOrmTypeDef, MobilettoOrmFieldDefConfigs } from "mobiletto-orm-typedef";
import * as valid from "../../validation.js";

export const LibraryTypeDefFields: MobilettoOrmFieldDefConfigs = {
  name: {
    primary: true,
    indexLevels: 2,
    min: 1,
    max: 500,
    regex: valid.REGEX_VALIDATORS.username,
    updatable: false,
    tabIndex: 1,
  },
  media: {
    ref: { refType: "media" },
    tabIndex: 2,
  },
  sources: {
    required: true,
    type: "string[]",
    control: "multi",
    ref: { refType: "source" },
    tabIndex: 3,
  },
  destinations: {
    required: true,
    type: "string[]",
    control: "multi",
    ref: { refType: "destination" },
    tabIndex: 4,
  },
  autoscanEnabled: {
    default: false,
    index: true,
    tabIndex: 5,
  },
  autoscan: {
    when: (v) => v.autoscanEnabled === true,
    fields: {
      interval: {
        required: false, // if not set, default value in private config is used
        type: "number",
        minValue: 1000 * 10, // 10 seconds
        maxValue: 1000 * 60 * 60 * 24 * 366, // 366 days
        default: 1000 * 60 * 60 * 24, // default 24 hours
        control: "duration",
        tabIndex: 6,
      },
    },
  },
};

export const LibraryTypeDef = new MobilettoOrmTypeDef({
  typeName: "library",
  shortName: "lbry",
  tableFields: ["name", "media", "sources", "destinations", "_meta.ctime", "_meta.mtime"],
  textSearchFields: ["name", "media", "sources", "destinations"],
  fields: { ...LibraryTypeDefFields },
});
