import { MobilettoOrmTypeDef } from "mobiletto-orm-typedef-gen";
import { MIN_ID_LENGTH } from "mobiletto-orm-typedef";

export const SessionTypeDef = new MobilettoOrmTypeDef({
    typeName: "session",
    idPrefix: "session",
    fields: {
        account: {
            required: true,
            type: "string",
            min: MIN_ID_LENGTH,
            max: MIN_ID_LENGTH + 100, // let's be generous
        },
        token: {
            required: true,
            control: "password",
            min: MIN_ID_LENGTH,
            max: MIN_ID_LENGTH + 100,
        },
    },
});
