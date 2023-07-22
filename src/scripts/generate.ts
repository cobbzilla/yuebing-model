#!/usr/bin/env node
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { MobilettoOrmTypeDef } from "mobiletto-orm-typedef";
import { generateTypeScriptType, generateYup, generate } from "mobiletto-orm-typedef-gen";
import { PublicConfigTypeDef, PrivateConfigTypeDef } from "../typedef/model/config.js";
import { AccountTypeDef, AuthAccountTypeDef } from "../typedef/model/account.js";
import { UsernameAndPasswordTypeDef } from "../typedef/auth/usernameAndPassword.js";
import { RegistrationTypeDef } from "../typedef/auth/registration.js";
import { VolumeTypeDef } from "../typedef/model/volume.js";
import { SessionTypeDef } from "../typedef/auth/session.js";

const generateService = (typeDef: MobilettoOrmTypeDef, outfile: string) => {
    if (process.env.YUEBING_DIR) {
        const ybDir = process.env.YUEBING_DIR;
        generate(typeDef, `${__dirname}/../templates/service.ts.hbs`, { outfile: `${ybDir}/${outfile}` });
    }
};

generateTypeScriptType(PublicConfigTypeDef, { outfile: `${__dirname}/../../../src/type/model/PublicConfigType.ts` });
generateYup(PublicConfigTypeDef, { outfile: `${__dirname}/../../../src/type/model/PublicConfigSchema.ts` });

generateTypeScriptType(PrivateConfigTypeDef, { outfile: `${__dirname}/../../../src/type/model/PrivateConfigType.ts` });
generateYup(PrivateConfigTypeDef, { outfile: `${__dirname}/../../../src/type/model/PrivateConfigSchema.ts` });

generateTypeScriptType(AccountTypeDef, { outfile: `${__dirname}/../../../src/type/model/AccountType.ts` });
generateYup(AccountTypeDef, { outfile: `${__dirname}/../../../src/type/model/AccountSchema.ts` });
generateService(AccountTypeDef, "utils/services/model/accountService.ts");

generateTypeScriptType(AuthAccountTypeDef, { outfile: `${__dirname}/../../../src/type/model/AuthAccountType.ts` });
generateYup(AuthAccountTypeDef, { outfile: `${__dirname}/../../../src/type/model/AuthAccountSchema.ts` });

generateTypeScriptType(VolumeTypeDef, { outfile: `${__dirname}/../../../src/type/model/VolumeType.ts` });
generateYup(VolumeTypeDef, {
    outfile: `${__dirname}/../../../src/type/model/VolumeSchema.ts`,
    header: 'import { VOL_TYPE_LOCAL, VOL_TYPE_S3, VOL_TYPE_B2 } from "../../typedef/model/volume.js";\n',
});

generateTypeScriptType(SessionTypeDef, {
    outfile: `${__dirname}/../../../src/type/auth/SessionType.ts`,
});
generateYup(SessionTypeDef, {
    outfile: `${__dirname}/../../../src/type/auth/SessionSchema.ts`,
});

generateTypeScriptType(UsernameAndPasswordTypeDef, {
    outfile: `${__dirname}/../../../src/type/auth/UsernameAndPasswordType.ts`,
});
generateYup(UsernameAndPasswordTypeDef, {
    outfile: `${__dirname}/../../../src/type/auth/UsernameAndPasswordSchema.ts`,
});

generateTypeScriptType(RegistrationTypeDef, { outfile: `${__dirname}/../../../src/type/auth/RegistrationType.ts` });
generateYup(RegistrationTypeDef, { outfile: `${__dirname}/../../../src/type/auth/RegistrationSchema.ts` });
