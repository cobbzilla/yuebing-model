var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
            normalize: () => __awaiter(void 0, void 0, void 0, function* () { return generateId("sess~tok"); }),
        },
        account: {
            required: true,
            control: "label",
            min: MIN_ID_LENGTH,
            max: MIN_ID_LENGTH + 100,
            updatable: false,
        },
    },
});
