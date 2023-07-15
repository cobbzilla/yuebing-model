import { MobilettoOrmTypeDef } from "mobiletto-orm-typedef-gen";
import { LOGIN_MAX_LENGTH, LOGIN_MIN_LENGTH, PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH } from "../model/account.js";
export const USERNAME_AND_PASSWORD_TYPEDEF = new MobilettoOrmTypeDef({
    typeName: "usernameAndPassword",
    idPrefix: "auth~uap",
    fields: {
        usernameOrEmail: {
            required: true,
            min: LOGIN_MIN_LENGTH,
            max: LOGIN_MAX_LENGTH,
        },
        password: {
            required: true,
            control: "password",
            min: PASSWORD_MIN_LENGTH,
            max: PASSWORD_MAX_LENGTH,
        },
    },
});
