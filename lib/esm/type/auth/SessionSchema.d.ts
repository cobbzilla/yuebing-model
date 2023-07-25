import * as yup from "yup";
export declare const SessionSchemaFields: {
    token: yup.StringSchema<string, yup.AnyObject, undefined, "">;
    account: yup.StringSchema<string, yup.AnyObject, undefined, "">;
};
export declare const SessionSchema: yup.ObjectSchema<{
    token: string;
    account: string;
}, yup.AnyObject, {
    token: undefined;
    account: undefined;
}, "">;
