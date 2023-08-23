#!/usr/bin/env node
import path from "path";
import * as fs from "fs";
import { fileURLToPath } from "url";

import {
  generateTypeScriptType,
  generateApi,
  generateErrorFilter,
  generateSessionFilter,
  generateService,
  generateServiceHelper,
  generateStore,
  generateStoreHelper,
  generateAdmin,
  generateAdminHelper,
  MobilettoOrmTypeDef,
} from "mobiletto-orm-typedef-gen";

import { PublicConfigTypeDef, PrivateConfigTypeDef, LocalConfigTypeDef } from "../typedef/model/config.js";
import { AccountTypeDef, AuthAccountTypeDef } from "../typedef/model/account.js";
import { UsernameAndPasswordTypeDef } from "../typedef/auth/usernameAndPassword.js";
import { RegistrationTypeDef } from "../typedef/auth/registration.js";
import { VolumeTypeDef, SourceTypeDef, DestinationTypeDef } from "../typedef/model/volume.js";
import { SessionTypeDef } from "../typedef/auth/session.js";
import { LibraryTypeDef } from "../typedef/model/library.js";
import {
  SourceAssetTypeDef,
  LibraryScanTypeDef,
  SourceScanTypeDef,
  ProfileJobTypeDef,
  UploadJobTypeDef,
} from "../typedef/model/asset.js";
import { MediaProfileTypeDef, MediaTypeDef } from "../typedef/model/media.js";

if (!process?.env?.YUEBING_DIR) {
  throw new Error("YUEBING_DIR env var not defined");
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const TS_MODEL_TYPE_DIR = `${__dirname}/../../../src/type/model`;
const TS_AUTH_TYPE_DIR = `${__dirname}/../../../src/type/auth`;

const YB_MODEL_PACKAGE = JSON.parse(fs.readFileSync(`${__dirname}/../../../package.json`).toString("utf8")).name;

const ybDir = process.env.YUEBING_DIR;

const uncapitalize = (s: string): string => s.substring(0, 1).toLowerCase() + s.substring(1);
const capitalize = (s: string): string => s.substring(0, 1).toUpperCase() + s.substring(1);

const genTsType = (typeDef: MobilettoOrmTypeDef, tsTypeDir?: string) =>
  generateTypeScriptType(typeDef, {
    outfile: `${tsTypeDir ? tsTypeDir : TS_MODEL_TYPE_DIR}/${capitalize(typeDef.typeName)}Type.ts`,
  });

const genYuebing = (typeDef: MobilettoOrmTypeDef, ctx?: Record<string, string>) => {
  const type = uncapitalize(typeDef.typeName);
  generateService(typeDef, YB_MODEL_PACKAGE, {
    outfile: `${ybDir}/utils/services/model/${type}Service.ts`,
  });
  generateStore(typeDef, YB_MODEL_PACKAGE, { outfile: `${ybDir}/stores/model/${type}Store.ts` });
  generateAdmin(typeDef, YB_MODEL_PACKAGE, {
    outfile: `${ybDir}/components/model/${type}/Model${capitalize(type)}Admin.vue`,
  });

  const apiDir = `${ybDir}/server/api/model/${type}`;
  const singletonDefault = ctx && ctx.singletonDefault ? ctx.singletonDefault : undefined;
  const singletonDefaultImport = ctx && ctx.singletonDefaultImport ? ctx.singletonDefaultImport : undefined;
  const utilsImportPath = ctx && ctx.utilsImportPath ? ctx.utilsImportPath : undefined;
  generateApi(
    typeDef,
    YB_MODEL_PACKAGE,
    { rootOnly: true, outfile: `${apiDir}` },
    singletonDefault,
    singletonDefaultImport,
    utilsImportPath
  );
};

const genAll = (typeDef: MobilettoOrmTypeDef, ctx?: Record<string, string>) => {
  genTsType(typeDef);
  genYuebing(typeDef, ctx);
};

const genHelpers = () => {
  const helperDir = `${ybDir}/utils/model`;
  generateServiceHelper({ outfile: `${helperDir}/serviceHelper.ts` });
  generateStoreHelper({ outfile: `${helperDir}/storeHelper.ts` });
  generateAdminHelper({ outfile: `${helperDir}/adminHelper.ts` });
};

const genFilters = () => {
  const filterDir = `${ybDir}/server/utils/filter`;
  generateErrorFilter(YB_MODEL_PACKAGE, { outfile: `${filterDir}/errorFilter.ts` });
  generateSessionFilter(YB_MODEL_PACKAGE, { outfile: `${filterDir}/sessionFilter.ts` });
};

export const GEN_ALL = "all";
export const GEN_TYPE = "type";

export type GenSpec = {
  typedef: MobilettoOrmTypeDef;
  generate: "all" | "type";
  tsDir?: string;
  ctx?: Record<string, string>;
};

export type GEN_FUNC = (spec: GenSpec) => void;

export const GEN_ACTIONS: Record<string, GEN_FUNC> = {};
GEN_ACTIONS[GEN_ALL] = (spec) => genAll(spec.typedef, spec.ctx);
GEN_ACTIONS[GEN_TYPE] = (spec) => genTsType(spec.typedef, spec.tsDir);

const GEN_TYPES: GenSpec[] = [
  {
    typedef: PublicConfigTypeDef,
    generate: GEN_ALL,
    ctx: { singletonDefault: "DEFAULT_PUBLIC_CONFIG", singletonDefaultImport: "~/server/utils/default" },
  },
  {
    typedef: PrivateConfigTypeDef,
    generate: GEN_ALL,
    ctx: { singletonDefault: "DEFAULT_PRIVATE_CONFIG", singletonDefaultImport: "~/server/utils/default" },
  },
  {
    typedef: LocalConfigTypeDef,
    generate: GEN_ALL,
    ctx: { singletonDefault: "DEFAULT_LOCAL_CONFIG", singletonDefaultImport: "~/server/utils/default" },
  },
  { typedef: AccountTypeDef, generate: GEN_ALL },
  { typedef: VolumeTypeDef, generate: GEN_TYPE },
  { typedef: SourceTypeDef, generate: GEN_ALL },
  { typedef: DestinationTypeDef, generate: GEN_ALL },
  { typedef: MediaTypeDef, generate: GEN_ALL },
  { typedef: MediaProfileTypeDef, generate: GEN_ALL },
  { typedef: LibraryTypeDef, generate: GEN_ALL },
  { typedef: LibraryScanTypeDef, generate: GEN_ALL },
  { typedef: SourceScanTypeDef, generate: GEN_ALL },
  { typedef: SourceAssetTypeDef, generate: GEN_ALL },
  { typedef: ProfileJobTypeDef, generate: GEN_ALL },
  { typedef: UploadJobTypeDef, generate: GEN_ALL },
  { typedef: AuthAccountTypeDef, generate: GEN_TYPE, tsDir: TS_AUTH_TYPE_DIR },
  { typedef: SessionTypeDef, generate: GEN_TYPE, tsDir: TS_AUTH_TYPE_DIR },
  { typedef: UsernameAndPasswordTypeDef, generate: GEN_TYPE, tsDir: TS_AUTH_TYPE_DIR },
  { typedef: RegistrationTypeDef, generate: GEN_TYPE, tsDir: TS_AUTH_TYPE_DIR },
];

GEN_TYPES.forEach((spec) => GEN_ACTIONS[spec.generate](spec));
genHelpers();
genFilters();
