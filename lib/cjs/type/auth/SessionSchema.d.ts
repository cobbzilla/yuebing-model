import * as yup from "yup";
export declare const SessionSchema: yup.ObjectSchema<{
    token: string;
    account: string;
}, yup.AnyObject, {
    token: undefined;
    account: undefined;
}, "">;
