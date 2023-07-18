// DO NOT EDIT THIS FILE. AUTO-GENERATED BY mobiletto-orm-typedef-gen
import * as yup from "yup";
export const PrivateConfig_autoscanSchema = yup.object({
    initialDelay: yup.number()
        .min(60000, 'privateConfig_autoscan_initialDelay_minValue')
        .max(3600000, 'privateConfig_autoscan_initialDelay_maxValue')
        .typeError('privateConfig_autoscan_initialDelay_invalid')
        .required('privateConfig_autoscan_initialDelay_required')
        .default(600000),
    interval: yup.number()
        .min(60000, 'privateConfig_autoscan_interval_minValue')
        .max(31622400000, 'privateConfig_autoscan_interval_maxValue')
        .typeError('privateConfig_autoscan_interval_invalid')
        .notRequired()
        .default(86400000),
    showTransformOutput: yup.boolean()
        .typeError('privateConfig_autoscan_showTransformOutput_invalid')
        .required('privateConfig_autoscan_showTransformOutput_required'),
    cleanupTemporaryAssets: yup.boolean()
        .typeError('privateConfig_autoscan_cleanupTemporaryAssets_invalid')
        .required('privateConfig_autoscan_cleanupTemporaryAssets_required')
        .default(true),
    deleteIncompleteUploads: yup.boolean()
        .typeError('privateConfig_autoscan_deleteIncompleteUploads_invalid')
        .required('privateConfig_autoscan_deleteIncompleteUploads_required')
        .default(true),
    transformConcurrency: yup.number()
        .oneOf([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128], 'privateConfig_autoscan_transformConcurrency_enum')
        .min(1, 'privateConfig_autoscan_transformConcurrency_minValue')
        .typeError('privateConfig_autoscan_transformConcurrency_invalid')
        .required('privateConfig_autoscan_transformConcurrency_required')
        .default(1),
});

export const PrivateConfig_emailSchema = yup.object({
    host: yup.string()
        .min(6, 'privateConfig_email_host_min')
        .max(128, 'privateConfig_email_host_max')
        .matches(/^([A-Z\d]{1,63}|[A-Z\d][A-Z\d-]{0,61}[A-Z\d])(.([A-Z\d]{1,63}|[A-Z\d][A-Z\d-]{0,61}[A-Z\d]))*$/i, 'privateConfig_email_host_regex')
        .typeError('privateConfig_email_host_invalid')
        .required('privateConfig_email_host_required'),
    port: yup.number()
        .min(10, 'privateConfig_email_port_minValue')
        .max(65000, 'privateConfig_email_port_maxValue')
        .typeError('privateConfig_email_port_invalid')
        .required('privateConfig_email_port_required'),
    user: yup.string()
        .min(2, 'privateConfig_email_user_min')
        .max(100, 'privateConfig_email_user_max')
        .typeError('privateConfig_email_user_invalid')
        .required('privateConfig_email_user_required'),
    password: yup.string()
        .min(2, 'privateConfig_email_password_min')
        .max(100, 'privateConfig_email_password_max')
        .typeError('privateConfig_email_password_invalid')
        .required('privateConfig_email_password_required'),
    secure: yup.boolean()
        .typeError('privateConfig_email_secure_invalid')
        .required('privateConfig_email_secure_required'),
    fromEmail: yup.string()
        .min(6, 'privateConfig_email_fromEmail_min')
        .max(200, 'privateConfig_email_fromEmail_max')
        .matches(/^[A-Z\d][A-Z\d._%+-]*@[A-Z\d.-]+\.[A-Z]{2,24}$/i, 'privateConfig_email_fromEmail_regex')
        .typeError('privateConfig_email_fromEmail_invalid')
        .required('privateConfig_email_fromEmail_required'),
});

export const PrivateConfig_authSchema = yup.object({
    verifyAccountTimeout: yup.number()
        .min(60000, 'privateConfig_auth_verifyAccountTimeout_minValue')
        .max(2592000000, 'privateConfig_auth_verifyAccountTimeout_maxValue')
        .typeError('privateConfig_auth_verifyAccountTimeout_invalid')
        .required('privateConfig_auth_verifyAccountTimeout_required')
        .default(172800000),
    resetPasswordTimeout: yup.number()
        .min(60000, 'privateConfig_auth_resetPasswordTimeout_minValue')
        .max(86400000, 'privateConfig_auth_resetPasswordTimeout_maxValue')
        .typeError('privateConfig_auth_resetPasswordTimeout_invalid')
        .required('privateConfig_auth_resetPasswordTimeout_required')
        .default(3600000),
    sessionTimeout: yup.number()
        .min(3600000, 'privateConfig_auth_sessionTimeout_minValue')
        .max(3162240000000, 'privateConfig_auth_sessionTimeout_maxValue')
        .typeError('privateConfig_auth_sessionTimeout_invalid')
        .required('privateConfig_auth_sessionTimeout_required')
        .default(86400000),
});

export const PrivateConfigSchema = yup.object({
    auth: PrivateConfig_authSchema
        .notRequired(),
    emailEnabled: yup.boolean()
        .typeError('emailEnabled_invalid')
        .required('emailEnabled_required'),
    email: PrivateConfig_emailSchema
        .notRequired()
        .when(["emailEnabled"], {
            is: (emailEnabled: boolean) => {
                const w = (v: Record<string, unknown>) => v.emailEnabled === true;
                const v: Record<string, unknown> = { emailEnabled };
                return w(v);
            },
            then: (schema) => schema.required('email_required'),
            otherwise: (schema) => schema.notRequired(),
        }),
    autoscanEnabled: yup.boolean()
        .typeError('autoscanEnabled_invalid')
        .required('autoscanEnabled_required'),
    autoscan: PrivateConfig_autoscanSchema
        .notRequired()
        .when(["autoscanEnabled"], {
            is: (autoscanEnabled: boolean) => {
                const w = (v: Record<string, unknown>) => v.autoscanEnabled === true;
                const v: Record<string, unknown> = { autoscanEnabled };
                return w(v);
            },
            then: (schema) => schema.required('autoscan_required'),
            otherwise: (schema) => schema.notRequired(),
        }),
});
