export declare const EMAIL_REGEX: RegExp;
export declare const LIST_OF_EMAILS_REGEX: RegExp;
export declare const PATH_REGEX: RegExp;
export declare const REGEX_VALIDATORS: {
    locale: RegExp;
    username: RegExp;
    email: RegExp;
    host: RegExp;
    url: RegExp;
    raw_hex: RegExp;
    hex: RegExp;
    volume: RegExp;
    local_path: RegExp;
    file_mode: RegExp;
    aws_key: RegExp;
    aws_secret: RegExp;
    s3_bucket: RegExp;
    b2_bucket: RegExp;
    path: RegExp;
};
export declare const isExactRegexMatch: (value: string, regex: RegExp) => boolean;
export declare const isValidEmail: (value: string) => boolean;
export declare const findValidEmails: (muck: string | string[], splitOn?: RegExp) => string[];
export declare const SELF_VOLUME_NAME = " ~ this ~ ";
export declare const isSelfVolume: (volume?: string | {
    name?: string;
} | null) => boolean | "" | null | undefined;
