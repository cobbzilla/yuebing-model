import { MobilettoOrmTypeDef, MobilettoOrmFieldDefConfigs } from "mobiletto-orm-typedef";

import * as valid from "../../validation.js";
import { YUEBING_LOCALES } from "yuebing-messages";

export const LOGIN_MIN_LENGTH = 2;
export const LOGIN_MAX_LENGTH = 100;
export const EMAIL_MIN_LENGTH = 6;
export const EMAIL_MAX_LENGTH = 200;
export const PASSWORD_MIN_LENGTH = 8;
export const PASSWORD_MAX_LENGTH = 100;

export const primaryAccountFields: MobilettoOrmFieldDefConfigs = {
  username: {
    type: "string",
    primary: true,
    min: LOGIN_MIN_LENGTH,
    max: LOGIN_MAX_LENGTH,
    regex: valid.REGEX_VALIDATORS.username,
    normalize: (v): string => (v as string).toLowerCase(),
    updatable: false,
    tabIndex: 1,
  },
  email: {
    type: "string",
    required: true,
    min: EMAIL_MIN_LENGTH,
    max: EMAIL_MAX_LENGTH,
    regex: valid.REGEX_VALIDATORS.email,
    normalize: (v): string => (v as string).toLowerCase(),
    updatable: false,
    tabIndex: 2,
    unique: true,
  },
  password: {
    type: "string",
    required: true,
    min: PASSWORD_MIN_LENGTH,
    max: PASSWORD_MAX_LENGTH,
    tabIndex: 3,
    redact: true,
  },
  firstName: {
    type: "string",
    required: false,
    min: 2,
    max: 100,
    tabIndex: 4,
  },
  lastName: {
    type: "string",
    required: false,
    min: 2,
    max: 100,
    tabIndex: 5,
  },
  locale: {
    type: "string",
    items: YUEBING_LOCALES.map((loc) => {
      return { value: loc, label: `locale_${loc}` };
    }),
    required: true,
    tabIndex: 6,
  },
  flags: {
    type: "array",
    values: [
      "flag_welcome_email",
      "flag_can_comment",
      "flag_can_tag",
      "flag_can_edit_metadata",
      "flag_can_set_thumbnail",
    ],
    default: ["flag_welcome_email", "flag_can_comment", "flag_can_tag"],
    control: "multi",
    tabIndex: 7,
  },
};

export const ACCOUNT_TABLE_FIELDS = [
  "username",
  "admin",
  "email",
  "firstName",
  "lastName",
  "locale",
  "verified",
  "_meta.ctime",
  "_meta.mtime",
];

export const AccountTypeDef = new MobilettoOrmTypeDef({
  typeName: "account",
  idPrefix: "acct",
  tableFields: ACCOUNT_TABLE_FIELDS,
  alternateLookupFields: ["email"],
  fields: {
    ...primaryAccountFields,
    admin: {
      default: false,
      tabIndex: 8,
      index: true,
    },
    verified: {
      type: "number",
      control: "label",
      render: "datetime",
      tabIndex: 9,
    },
  },
});

export const AuthAccountTypeDef = new MobilettoOrmTypeDef({
  typeName: "authAccount",
  idPrefix: "acct",
  tableFields: ACCOUNT_TABLE_FIELDS,
  fields: {
    ...AccountTypeDef.fields,
    session: {
      type: "string",
      control: "label",
      tabIndex: 8,
    },
  },
});
