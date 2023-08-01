import { MobilettoOrmTypeDef } from "mobiletto-orm-typedef";
import { generateId, MIN_ID_LENGTH } from "mobiletto-orm-typedef";

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
      min: MIN_ID_LENGTH,
      max: MIN_ID_LENGTH + 100, // let's be generous
      updatable: false,
    },
  },
});
