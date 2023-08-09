#!/usr/bin/env node
var _a;
import path from "path";
import * as fs from "fs";
import { fileURLToPath } from "url";
import { generateTypeScriptType, generateApi, generateService, generateServiceHelper, generateStore, generateStoreHelper, generateAdmin, generateAdminHelper, } from "mobiletto-orm-typedef-gen";
import { PublicConfigTypeDef, PrivateConfigTypeDef } from "../typedef/model/config.js";
import { AccountTypeDef, AuthAccountTypeDef } from "../typedef/model/account.js";
import { UsernameAndPasswordTypeDef } from "../typedef/auth/usernameAndPassword.js";
import { RegistrationTypeDef } from "../typedef/auth/registration.js";
import { VolumeTypeDef, SourceTypeDef, DestinationTypeDef } from "../typedef/model/volume.js";
import { SessionTypeDef } from "../typedef/auth/session.js";
import { LibraryTypeDef } from "../typedef/model/library.js";
if (!((_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.YUEBING_DIR)) {
    throw new Error("YUEBING_DIR env var not defined");
}
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const TS_MODEL_TYPE_DIR = `${__dirname}/../../../src/type/model`;
const TS_AUTH_TYPE_DIR = `${__dirname}/../../../src/type/auth`;
const YB_MODEL_PACKAGE = JSON.parse(fs.readFileSync(`${__dirname}/../../../package.json`).toString("utf8")).name;
const ybDir = process.env.YUEBING_DIR;
const uncapitalize = (s) => s.substring(0, 1).toLowerCase() + s.substring(1);
const capitalize = (s) => s.substring(0, 1).toUpperCase() + s.substring(1);
const genTsType = (typeDef, tsTypeDir) => generateTypeScriptType(typeDef, {
    outfile: `${tsTypeDir ? tsTypeDir : TS_MODEL_TYPE_DIR}/${capitalize(typeDef.typeName)}Type.ts`,
});
const genYuebing = (typeDef) => {
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
const genAll = (typeDef) => {
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
const GEN_ACTIONS = {};
GEN_ACTIONS[GEN_ALL] = (spec) => genAll(spec.typedef);
GEN_ACTIONS[GEN_TYPE] = (spec) => genTsType(spec.typedef, spec.tsDir);
const GEN_TYPES = [
    { typedef: PublicConfigTypeDef, generate: GEN_ALL },
    { typedef: PrivateConfigTypeDef, generate: GEN_ALL },
    { typedef: AccountTypeDef, generate: GEN_ALL },
    { typedef: VolumeTypeDef, generate: GEN_TYPE },
    { typedef: SourceTypeDef, generate: GEN_ALL },
    { typedef: DestinationTypeDef, generate: GEN_ALL },
    { typedef: LibraryTypeDef, generate: GEN_ALL },
    { typedef: AuthAccountTypeDef, generate: GEN_TYPE, tsDir: TS_AUTH_TYPE_DIR },
    { typedef: SessionTypeDef, generate: GEN_TYPE, tsDir: TS_AUTH_TYPE_DIR },
    { typedef: UsernameAndPasswordTypeDef, generate: GEN_TYPE, tsDir: TS_AUTH_TYPE_DIR },
    { typedef: RegistrationTypeDef, generate: GEN_TYPE, tsDir: TS_AUTH_TYPE_DIR },
];
for (const spec of GEN_TYPES) {
    GEN_ACTIONS[spec.generate](spec);
}
// Helpers
genHelpers();
