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
import { VolumeTypeDef, SourceTypeDef, DestinationTypeDef } from "../typedef/model/volume.js";
import { SessionTypeDef } from "../typedef/auth/session.js";
import { LibraryTypeDef } from "../typedef/model/library.js";

const uncapitalize = (s: string): string => s.substring(0, 1).toLowerCase() + s.substring(1);

const generateService = (typeDef: MobilettoOrmTypeDef, outfile: string) => {
  if (process.env.YUEBING_DIR) {
    const ybDir = process.env.YUEBING_DIR;
    generate(typeDef, `${__dirname}/../templates/service.ts.hbs`, { rootOnly: true, outfile: `${ybDir}/${outfile}` });
  }
};

const generateYuebing = (typeDef: MobilettoOrmTypeDef) => {
  if (process.env.YUEBING_DIR) {
    const ybDir = process.env.YUEBING_DIR;
    const type = uncapitalize(typeDef.typeName);
    const apiDir = `${ybDir}/server/api/model/${type}`;
    generate(typeDef, `${__dirname}/../templates/id.put.ts.hbs`, { rootOnly: true, outfile: `${apiDir}/[id].put.ts` });
    generate(typeDef, `${__dirname}/../templates/id.get.ts.hbs`, { rootOnly: true, outfile: `${apiDir}/[id].get.ts` });
    generate(typeDef, `${__dirname}/../templates/id.patch.ts.hbs`, {
      rootOnly: true,
      outfile: `${apiDir}/[id].patch.ts`,
    });
    generate(typeDef, `${__dirname}/../templates/id.delete.ts.hbs`, {
      rootOnly: true,
      outfile: `${apiDir}/[id].delete.ts`,
    });
    generate(typeDef, `${__dirname}/../templates/index.post.ts.hbs`, {
      rootOnly: true,
      outfile: `${apiDir}/index.post.ts`,
    });
    const storeDir = `${ybDir}/stores`;
    generate(typeDef, `${__dirname}/../templates/store.ts.hbs`, {
      rootOnly: true,
      outfile: `${storeDir}/model/${type}.ts`,
    });
  }
};

// Configuration Singletons
generateTypeScriptType(PublicConfigTypeDef, { outfile: `${__dirname}/../../../src/type/model/PublicConfigType.ts` });
generateYup(PublicConfigTypeDef, { outfile: `${__dirname}/../../../src/type/model/PublicConfigSchema.ts` });

generateTypeScriptType(PrivateConfigTypeDef, { outfile: `${__dirname}/../../../src/type/model/PrivateConfigType.ts` });
generateYup(PrivateConfigTypeDef, { outfile: `${__dirname}/../../../src/type/model/PrivateConfigSchema.ts` });

// Accounts
generateTypeScriptType(AccountTypeDef, { outfile: `${__dirname}/../../../src/type/model/AccountType.ts` });
generateYup(AccountTypeDef, { outfile: `${__dirname}/../../../src/type/model/AccountSchema.ts` });
generateService(AccountTypeDef, "utils/services/model/accountService.ts");
generateYuebing(AccountTypeDef);

generateTypeScriptType(AuthAccountTypeDef, { outfile: `${__dirname}/../../../src/type/model/AuthAccountType.ts` });
generateYup(AuthAccountTypeDef, { outfile: `${__dirname}/../../../src/type/model/AuthAccountSchema.ts` });

// Generic Volume Stuff
const volTypeImportHeader =
  "import {\n" +
  "  VOL_TYPE_LOCAL,\n" +
  "  VOL_TYPE_S3,\n" +
  "  VOL_TYPE_B2,\n" +
  "  VOL_TYPE_GENERIC\n" +
  '} from "../../typedef/model/volume.js";\n';

generateTypeScriptType(VolumeTypeDef, { outfile: `${__dirname}/../../../src/type/model/VolumeType.ts` });

// Source Volumes
generateTypeScriptType(SourceTypeDef, { outfile: `${__dirname}/../../../src/type/model/SourceType.ts` });
generateYup(SourceTypeDef, {
  outfile: `${__dirname}/../../../src/type/model/SourceSchema.ts`,
  header: volTypeImportHeader,
});
generateService(SourceTypeDef, "utils/services/model/sourceService.ts");
generateYuebing(SourceTypeDef);

// Destination Volumes
generateTypeScriptType(DestinationTypeDef, {
  outfile: `${__dirname}/../../../src/type/model/DestinationType.ts`,
});
generateYup(DestinationTypeDef, {
  outfile: `${__dirname}/../../../src/type/model/DestinationSchema.ts`,
  header: volTypeImportHeader,
});
generateService(DestinationTypeDef, "utils/services/model/destinationService.ts");
generateYuebing(DestinationTypeDef);

// Libraries
generateTypeScriptType(LibraryTypeDef, {
  outfile: `${__dirname}/../../../src/type/model/LibraryType.ts`,
});
generateYup(LibraryTypeDef, {
  outfile: `${__dirname}/../../../src/type/model/LibrarySchema.ts`,
});
generateService(LibraryTypeDef, "utils/services/model/libraryService.ts");
generateYuebing(LibraryTypeDef);

// Session objects (not persisted)
generateTypeScriptType(SessionTypeDef, {
  outfile: `${__dirname}/../../../src/type/auth/SessionType.ts`,
});
generateYup(SessionTypeDef, {
  outfile: `${__dirname}/../../../src/type/auth/SessionSchema.ts`,
});

// Login objects (not persisted)
generateTypeScriptType(UsernameAndPasswordTypeDef, {
  outfile: `${__dirname}/../../../src/type/auth/UsernameAndPasswordType.ts`,
});
generateYup(UsernameAndPasswordTypeDef, {
  outfile: `${__dirname}/../../../src/type/auth/UsernameAndPasswordSchema.ts`,
});

// Registration objects (not persisted)
generateTypeScriptType(RegistrationTypeDef, { outfile: `${__dirname}/../../../src/type/auth/RegistrationType.ts` });
generateYup(RegistrationTypeDef, { outfile: `${__dirname}/../../../src/type/auth/RegistrationSchema.ts` });
