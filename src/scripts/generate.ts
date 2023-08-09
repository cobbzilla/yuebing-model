#!/usr/bin/env node
import path from "path";
import * as fs from "fs";
import { fileURLToPath } from "url";

import { MobilettoOrmTypeDef } from "mobiletto-orm-typedef";
import {
  generateTypeScriptType,
  generateApi,
  generateService,
  generateServiceHelper,
  generateStore,
  generateStoreHelper,
  generateAdmin,
  generateAdminHelper,
} from "mobiletto-orm-typedef-gen";
import { PublicConfigTypeDef, PrivateConfigTypeDef } from "../typedef/model/config.js";
import { AccountTypeDef, AuthAccountTypeDef } from "../typedef/model/account.js";
import { UsernameAndPasswordTypeDef } from "../typedef/auth/usernameAndPassword.js";
import { RegistrationTypeDef } from "../typedef/auth/registration.js";
import { VolumeTypeDef, SourceTypeDef, DestinationTypeDef } from "../typedef/model/volume.js";
import { SessionTypeDef } from "../typedef/auth/session.js";
import { LibraryTypeDef } from "../typedef/model/library.js";

if (!process?.env?.YUEBING_DIR) {
  throw Error("YUEBING_DIR env var not defined");
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const TS_TYPE_DIR = `${__dirname}/../../../src/type/model`;

const YB_MODEL_PACKAGE = JSON.parse(fs.readFileSync(`${__dirname}/../../../package.json`).toString("utf8")).name;

const ybDir = process.env.YUEBING_DIR;

const uncapitalize = (s: string): string => s.substring(0, 1).toLowerCase() + s.substring(1);
const capitalize = (s: string): string => s.substring(0, 1).toUpperCase() + s.substring(1);

const genTsType = (typeDef: MobilettoOrmTypeDef) =>
  generateTypeScriptType(AccountTypeDef, { outfile: `${TS_TYPE_DIR}/${capitalize(typeDef.typeName)}Type.ts` });

const genYuebing = (typeDef: MobilettoOrmTypeDef) => {
  const type = uncapitalize(typeDef.typeName);
  generateService(typeDef, YB_MODEL_PACKAGE, {
    outfile: `${ybDir}/utils/services/model/${type}Service.ts`,
  });
  generateStore(typeDef, YB_MODEL_PACKAGE, { outfile: `${ybDir}/stores/model/${type}Store.ts` });
  generateAdmin(typeDef, YB_MODEL_PACKAGE, {
    outfile: `${ybDir}/components/model/${type}/Model${capitalize(type)}Admin.vue`,
  });

  const apiDir = `${ybDir}/server/api/model/${type}`;
  generateApi(typeDef, YB_MODEL_PACKAGE, { rootOnly: true, outfile: `${apiDir}` });
};

const genAll = (typeDef: MobilettoOrmTypeDef) => {
  genTsType(typeDef);
  genYuebing(typeDef);
};

const genHelpers = () => {
  const helperDir = `${ybDir}/utils/model`;
  generateServiceHelper({ outfile: `${helperDir}/serviceHelper.ts` });
  generateStoreHelper({ outfile: `${helperDir}/storeHelper.ts` });
  generateAdminHelper({ outfile: `${helperDir}/adminHelper.ts` });
};

const GEN_ALL = "all";
const GEN_TYPE = "type";

type GenSpec = {
  typedef: MobilettoOrmTypeDef;
  generate: "all" | "type";
};

type GEN_FUNC = (typedef: MobilettoOrmTypeDef) => void;

const GEN_ACTIONS: Record<string, GEN_FUNC> = {
  GEN_ALL: (typedef: MobilettoOrmTypeDef) => genAll(typedef),
  GEN_TYPE: (typedef: MobilettoOrmTypeDef) => genTsType(typedef),
};

const GEN_TYPES: GenSpec[] = [
  { typedef: PublicConfigTypeDef, generate: GEN_ALL },
  { typedef: PrivateConfigTypeDef, generate: GEN_ALL },
  { typedef: AccountTypeDef, generate: GEN_ALL },
  { typedef: VolumeTypeDef, generate: GEN_TYPE },
  { typedef: SourceTypeDef, generate: GEN_ALL },
  { typedef: DestinationTypeDef, generate: GEN_ALL },
  { typedef: LibraryTypeDef, generate: GEN_ALL },
  { typedef: SessionTypeDef, generate: GEN_TYPE },
  { typedef: AuthAccountTypeDef, generate: GEN_TYPE },
  { typedef: UsernameAndPasswordTypeDef, generate: GEN_TYPE },
  { typedef: RegistrationTypeDef, generate: GEN_TYPE },
];

for (const spec of GEN_TYPES) {
  GEN_ACTIONS[spec.generate](spec.typedef);
}

// Helpers
genHelpers();
