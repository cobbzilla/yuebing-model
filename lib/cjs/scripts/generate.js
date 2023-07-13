#!/usr/bin/env node
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { ACCOUNT_TYPEDEF } from "../typedef/account.js";
ACCOUNT_TYPEDEF.buildType("Account", `${__dirname}/../../../src/type/AccountType.ts`);
