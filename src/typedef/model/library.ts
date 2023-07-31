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
  sources: {
    type: "array",
    control: "multi",
    values: [""], // these get filled in on-demand
    tabIndex: 2,
  },
  destinations: {
    type: "array",
    control: "multi",
    values: [""], // these get filled in on-demand
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
        required: false, // if not set, default value in private config is used
        minValue: 1000 * 60, // 1 minute
        maxValue: 1000 * 60 * 60, // 1 hour
        default: 1000 * 60 * 10, // 10 minutes
        control: "duration",
        tabIndex: 5,
      },
      interval: {
        required: false, // if not set, default value in private config is used
        type: "number",
        minValue: 1000 * 60, // 1 minute
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
  idPrefix: "lbry",
  tableFields: ["name", "sources", "destinations"],
  fields: { ...LibraryTypeDefFields },
});
