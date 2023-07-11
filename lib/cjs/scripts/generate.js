#!/usr/bin/env node
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { USER_TYPEDEF } from "../typedef/user.js";
USER_TYPEDEF.buildType("User", `${__dirname}/../../../src/type/UserType.ts`);
