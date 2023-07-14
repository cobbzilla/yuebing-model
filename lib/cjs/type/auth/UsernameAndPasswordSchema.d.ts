import * as yup from "yup";
export declare const UsernameAndPasswordSchema: yup.ObjectSchema<{
    usernameOrEmail: string;
    password: string;
}, yup.AnyObject, {
    usernameOrEmail: undefined;
    password: undefined;
}, "">;
