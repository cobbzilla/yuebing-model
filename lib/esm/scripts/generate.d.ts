#!/usr/bin/env node
import { MobilettoOrmTypeDef } from "mobiletto-orm-typedef-gen";
export declare const GEN_ALL = "all";
export declare const GEN_ALL_NO_ADMIN = "all_no_admin";
export declare const GEN_TYPE = "type_only";
export type GenSpec = {
    typedef: MobilettoOrmTypeDef;
    generate: "all" | "all_no_admin" | "type_only";
    tsDir?: string;
    ctx?: Record<string, string>;
};
export type GEN_FUNC = (spec: GenSpec) => void;
export declare const GEN_ACTIONS: Record<string, GEN_FUNC>;
