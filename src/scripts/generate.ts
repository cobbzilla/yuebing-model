#!/usr/bin/env node
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { generateTypeScriptType, generateYup } from "mobiletto-orm-typedef-gen";
import { ACCOUNT_TYPEDEF, AUTH_ACCOUNT_TYPEDEF } from "../typedef/model/account.js";
import { USERNAME_AND_PASSWORD_TYPEDEF } from "../typedef/auth/usernameAndPassword.js";
import { REGISTRATION_TYPEDEF } from "../typedef/auth/registration.js";
import { VOLUME_TYPEDEF } from "../typedef/model/volume.js";

generateTypeScriptType(ACCOUNT_TYPEDEF, { outfile: `${__dirname}/../../../src/type/model/AccountType.ts` });
generateYup(ACCOUNT_TYPEDEF, { outfile: `${__dirname}/../../../src/type/model/AccountSchema.ts` });

generateTypeScriptType(AUTH_ACCOUNT_TYPEDEF, { outfile: `${__dirname}/../../../src/type/model/AuthAccountType.ts` });
generateYup(AUTH_ACCOUNT_TYPEDEF, { outfile: `${__dirname}/../../../src/type/model/AuthAccountSchema.ts` });

generateTypeScriptType(VOLUME_TYPEDEF, { outfile: `${__dirname}/../../../src/type/model/VolumeType.ts` });
generateYup(VOLUME_TYPEDEF, {
    outfile: `${__dirname}/../../../src/type/model/VolumeSchema.ts`,
    header: 'import { VOL_TYPE_LOCAL, VOL_TYPE_S3, VOL_TYPE_B2 } from "../../typedef/model/volume.js";\n',
});

generateTypeScriptType(USERNAME_AND_PASSWORD_TYPEDEF, {
    outfile: `${__dirname}/../../../src/type/auth/SessionType.ts`,
});
generateYup(USERNAME_AND_PASSWORD_TYPEDEF, {
    outfile: `${__dirname}/../../../src/type/auth/SessionSchema.ts`,
});

generateTypeScriptType(USERNAME_AND_PASSWORD_TYPEDEF, {
    outfile: `${__dirname}/../../../src/type/auth/UsernameAndPasswordType.ts`,
});
generateYup(USERNAME_AND_PASSWORD_TYPEDEF, {
    outfile: `${__dirname}/../../../src/type/auth/UsernameAndPasswordSchema.ts`,
});

generateTypeScriptType(REGISTRATION_TYPEDEF, { outfile: `${__dirname}/../../../src/type/auth/RegistrationType.ts` });
generateYup(REGISTRATION_TYPEDEF, { outfile: `${__dirname}/../../../src/type/auth/RegistrationSchema.ts` });
