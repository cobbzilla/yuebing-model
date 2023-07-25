import * as yup from "yup";
export declare const UsernameAndPasswordSchemaFields: {
    usernameOrEmail: yup.StringSchema<string, yup.AnyObject, undefined, "">;
    password: yup.StringSchema<string, yup.AnyObject, undefined, "">;
};
export declare const UsernameAndPasswordSchema: yup.ObjectSchema<{
    usernameOrEmail: string;
    password: string;
}, yup.AnyObject, {
    usernameOrEmail: undefined;
    password: undefined;
}, "">;
