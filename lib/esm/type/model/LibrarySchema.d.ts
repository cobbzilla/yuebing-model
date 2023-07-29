import * as yup from "yup";
export declare const Library_autoscanSchemaFields: {
    initialDelay: yup.NumberSchema<yup.Maybe<number | undefined>, yup.AnyObject, 600000, "d">;
    interval: yup.NumberSchema<yup.Maybe<number | undefined>, yup.AnyObject, 86400000, "d">;
};
export declare const Library_autoscanSchema: yup.ObjectSchema<{
    initialDelay: number | null;
    interval: number | null;
}, yup.AnyObject, {
    initialDelay: 600000;
    interval: 86400000;
}, "">;
export declare const LibrarySchemaFields: {
    name: yup.StringSchema<yup.Maybe<string | undefined>, yup.AnyObject, undefined, "">;
    sources: yup.ArraySchema<yup.Maybe<("" | undefined)[] | undefined>, yup.AnyObject, "", "">;
    destinations: yup.ArraySchema<yup.Maybe<("" | undefined)[] | undefined>, yup.AnyObject, "", "">;
    autoscanEnabled: yup.BooleanSchema<NonNullable<boolean | undefined>, yup.AnyObject, undefined, "">;
    autoscan: yup.ObjectSchema<yup.Maybe<{
        initialDelay: number | null;
        interval: number | null;
    }>, yup.AnyObject, {
        initialDelay: 600000;
        interval: 86400000;
    }, "">;
};
export declare const LibrarySchema: yup.ObjectSchema<{
    name: yup.Maybe<string | undefined>;
    sources: yup.Maybe<("" | undefined)[] | undefined>;
    destinations: yup.Maybe<("" | undefined)[] | undefined>;
    autoscanEnabled: NonNullable<boolean | undefined>;
    autoscan: {
        initialDelay: number | null;
        interval: number | null;
    } | null | undefined;
}, yup.AnyObject, {
    name: undefined;
    sources: "";
    destinations: "";
    autoscanEnabled: undefined;
    autoscan: {
        initialDelay: 600000;
        interval: 86400000;
    };
}, "">;
