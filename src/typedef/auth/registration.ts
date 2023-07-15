import { MobilettoOrmTypeDef } from "mobiletto-orm-typedef-gen/lib/esm/index.js";

import { primaryAccountFields, ACCOUNT_TABLE_FIELDS } from "../model/account.js";

export const REGISTRATION_TYPEDEF = new MobilettoOrmTypeDef({
    typeName: "registration",
    idPrefix: "auth~reg",
    tableFields: ACCOUNT_TABLE_FIELDS,
    fields: {
        ...primaryAccountFields,
    },
});
