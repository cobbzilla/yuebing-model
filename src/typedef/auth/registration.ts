import { MobilettoOrmTypeDef } from "mobiletto-orm-typedef-gen/lib/esm/index.js";

import { primaryAccountFields } from "../model/account.js";

export const REGISTRATION_TYPEDEF = new MobilettoOrmTypeDef({
    typeName: "registration",
    idPrefix: "auth~reg",
    tableFields: ["username", "email", "firstName", "lastName", "locale", "_meta.ctime", "_meta.mtime"],
    fields: {
        ...primaryAccountFields,
    },
});
