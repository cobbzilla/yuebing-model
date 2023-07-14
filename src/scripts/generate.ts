#!/usr/bin/env node
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { generateTypeScriptType, generateYup } from "mobiletto-orm-typedef-gen/lib/esm/index.js";
import { ACCOUNT_TYPEDEF } from "../typedef/account.js";

generateTypeScriptType(ACCOUNT_TYPEDEF, { outfile: `${__dirname}/../../../src/type/AccountType.ts` });
generateYup(ACCOUNT_TYPEDEF, { outfile: `${__dirname}/../../../src/type/AccountSchema.ts` });
