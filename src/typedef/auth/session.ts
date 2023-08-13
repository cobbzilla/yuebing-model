import { generateId, MIN_ID_LENGTH, MobilettoOrmTypeDef } from "mobiletto-orm-typedef";
import { USERNAME_MAX_LENGTH, USERNAME_MIN_LENGTH } from "../model/account.js";

export const SessionTypeDef = new MobilettoOrmTypeDef({
  typeName: "session",
  shortName: "sess",
  indexLevels: 3,
  fields: {
    token: {
      primary: true,
      control: "label",
      min: MIN_ID_LENGTH,
      max: MIN_ID_LENGTH + 100,
      normalize: async (): Promise<string> => generateId("sess~tok"),
    },
    account: {
      required: true,
      control: "label",
      min: USERNAME_MIN_LENGTH,
      max: USERNAME_MAX_LENGTH,
      updatable: false,
    },
  },
});
