// DO NOT EDIT THIS FILE. AUTO-GENERATED BY mobiletto-orm-typedef-gen

import * as yup from "yup";

export const SessionSchemaFields = {
    token: yup.string().trim().transform(v => v === '' ? undefined : v)
        .min(48, 'token_min')
        .max(148, 'token_max')
        .typeError('token_invalid')
        .required('token_required'),
    account: yup.string().trim().transform(v => v === '' ? undefined : v)
        .min(48, 'account_min')
        .max(148, 'account_max')
        .typeError('account_invalid')
        .required('account_required'),
};

export const SessionSchema = yup.object(SessionSchemaFields);
