import { MobilettoOrmTypeDef } from "mobiletto-orm";

import { primaryAccountFields, ACCOUNT_TABLE_FIELDS } from "../model/account.js";

export const RegistrationTypeDef = new MobilettoOrmTypeDef({
  typeName: "registration",
  shortName: "auth~reg",
  tableFields: ACCOUNT_TABLE_FIELDS,
  fields: {
    ...primaryAccountFields,
  },
});
