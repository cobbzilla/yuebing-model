import { MobilettoOrmTypeDef } from "mobiletto-orm-typedef-gen";
import { generateId, MIN_ID_LENGTH } from "mobiletto-orm-typedef";
export const SessionTypeDef = new MobilettoOrmTypeDef({
    typeName: "session",
    idPrefix: "session",
    fields: {
        token: {
            primary: true,
            control: "password",
            min: MIN_ID_LENGTH,
            max: MIN_ID_LENGTH + 100,
            normalize: () => generateId("session")
        },
        account: {
            required: true,
            type: "string",
            min: MIN_ID_LENGTH,
            max: MIN_ID_LENGTH + 100,
            updatable: false,
        },
    },
});
