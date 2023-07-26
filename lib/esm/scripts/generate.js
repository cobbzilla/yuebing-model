#!/usr/bin/env node
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { generateTypeScriptType, generateYup, generate } from "mobiletto-orm-typedef-gen";
import { PublicConfigTypeDef, PrivateConfigTypeDef } from "../typedef/model/config.js";
import { AccountTypeDef, AuthAccountTypeDef } from "../typedef/model/account.js";
import { UsernameAndPasswordTypeDef } from "../typedef/auth/usernameAndPassword.js";
import { RegistrationTypeDef } from "../typedef/auth/registration.js";
import { VolumeTypeDef, SourceVolumeTypeDef, DestinationVolumeTypeDef } from "../typedef/model/volume.js";
import { SessionTypeDef } from "../typedef/auth/session.js";
const uncapitalize = (s) => s.substring(0, 1).toLowerCase() + s.substring(1);
const generateService = (typeDef, outfile) => {
    if (process.env.YUEBING_DIR) {
        const ybDir = process.env.YUEBING_DIR;
        generate(typeDef, `${__dirname}/../templates/service.ts.hbs`, { outfile: `${ybDir}/${outfile}` });
    }
};
const generateYuebing = (typeDef) => {
    if (process.env.YUEBING_DIR) {
        const ybDir = process.env.YUEBING_DIR;
        const type = uncapitalize(typeDef.typeName);
        const apiDir = `${ybDir}/server/api/model/${type}`;
        generate(typeDef, `${__dirname}/../templates/id.put.ts.hbs`, { outfile: `${apiDir}/[id].put.ts` });
        generate(typeDef, `${__dirname}/../templates/id.get.ts.hbs`, { outfile: `${apiDir}/[id].get.ts` });
        generate(typeDef, `${__dirname}/../templates/id.patch.ts.hbs`, { outfile: `${apiDir}/[id].patch.ts` });
        generate(typeDef, `${__dirname}/../templates/id.delete.ts.hbs`, {
            outfile: `${apiDir}/[id].delete.ts`,
        });
        generate(typeDef, `${__dirname}/../templates/index.post.ts.hbs`, {
            outfile: `${apiDir}/index.post.ts`,
        });
        const storeDir = `${ybDir}/stores`;
        generate(typeDef, `${__dirname}/../templates/store.ts.hbs`, {
            outfile: `${storeDir}/model/${type}.ts`,
        });
    }
};
generateTypeScriptType(PublicConfigTypeDef, { outfile: `${__dirname}/../../../src/type/model/PublicConfigType.ts` });
generateYup(PublicConfigTypeDef, { outfile: `${__dirname}/../../../src/type/model/PublicConfigSchema.ts` });
generateTypeScriptType(PrivateConfigTypeDef, { outfile: `${__dirname}/../../../src/type/model/PrivateConfigType.ts` });
generateYup(PrivateConfigTypeDef, { outfile: `${__dirname}/../../../src/type/model/PrivateConfigSchema.ts` });
generateTypeScriptType(AccountTypeDef, { outfile: `${__dirname}/../../../src/type/model/AccountType.ts` });
generateYup(AccountTypeDef, { outfile: `${__dirname}/../../../src/type/model/AccountSchema.ts` });
generateService(AccountTypeDef, "utils/services/model/accountService.ts");
generateYuebing(AccountTypeDef);
generateTypeScriptType(AuthAccountTypeDef, { outfile: `${__dirname}/../../../src/type/model/AuthAccountType.ts` });
generateYup(AuthAccountTypeDef, { outfile: `${__dirname}/../../../src/type/model/AuthAccountSchema.ts` });
const volTypeImportHeader = "import {\n" +
    "  VOL_TYPE_LOCAL,\n" +
    "  VOL_TYPE_S3,\n" +
    "  VOL_TYPE_B2,\n" +
    "  VOL_TYPE_GENERIC\n" +
    '} from "../../typedef/model/volume.js";\n';
generateTypeScriptType(VolumeTypeDef, { outfile: `${__dirname}/../../../src/type/model/VolumeType.ts` });
generateTypeScriptType(SourceVolumeTypeDef, { outfile: `${__dirname}/../../../src/type/model/SourceVolumeType.ts` });
generateYup(SourceVolumeTypeDef, {
    outfile: `${__dirname}/../../../src/type/model/SourceVolumeSchema.ts`,
    header: volTypeImportHeader,
});
generateService(SourceVolumeTypeDef, "utils/services/model/sourceVolumeService.ts");
generateYuebing(SourceVolumeTypeDef);
generateTypeScriptType(DestinationVolumeTypeDef, {
    outfile: `${__dirname}/../../../src/type/model/DestinationVolumeType.ts`,
});
generateYup(DestinationVolumeTypeDef, {
    outfile: `${__dirname}/../../../src/type/model/DestinationVolumeSchema.ts`,
    header: volTypeImportHeader,
});
generateService(DestinationVolumeTypeDef, "utils/services/model/destinationVolumeService.ts");
generateYuebing(DestinationVolumeTypeDef);
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
