import { MobilettoOrmTypeDef } from "mobiletto-orm-typedef";
import {
  EMAIL_MAX_LENGTH,
  EMAIL_MIN_LENGTH,
  LOGIN_MAX_LENGTH,
  LOGIN_MIN_LENGTH,
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
} from "../model/account.js";

export const UsernameAndPasswordTypeDef = new MobilettoOrmTypeDef({
  typeName: "usernameAndPassword",
  shortName: "auth~uap",
  fields: {
    usernameOrEmail: {
      primary: true,
      min: Math.min(LOGIN_MIN_LENGTH, EMAIL_MIN_LENGTH),
      max: Math.max(LOGIN_MAX_LENGTH, EMAIL_MAX_LENGTH),
    },
    password: {
      required: true,
      control: "password",
      min: PASSWORD_MIN_LENGTH,
      max: PASSWORD_MAX_LENGTH,
    },
  },
});
