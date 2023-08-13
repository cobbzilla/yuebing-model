#!/usr/bin/env node
import { MobilettoOrmTypeDef } from "mobiletto-orm-typedef-gen";
export declare const GEN_ALL = "all";
export declare const GEN_TYPE = "type";
export type GenSpec = {
    typedef: MobilettoOrmTypeDef;
    generate: "all" | "type";
    tsDir?: string;
    ctx?: Record<string, string>;
};
export type GEN_FUNC = (spec: GenSpec) => void;
export declare const GEN_ACTIONS: Record<string, GEN_FUNC>;
