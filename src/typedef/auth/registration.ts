import { MobilettoOrmTypeDef } from "mobiletto-orm-typedef";

import { primaryAccountFields, ACCOUNT_TABLE_FIELDS } from "../model/account.js";

export const RegistrationTypeDef = new MobilettoOrmTypeDef({
    typeName: "registration",
    idPrefix: "auth~reg",
    tableFields: ACCOUNT_TABLE_FIELDS,
    fields: {
        ...primaryAccountFields,
    },
});
