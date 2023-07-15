export declare const YUEBING_LOCALES: string[];
export declare const YUEBING_DEFAULT_LOCALE = "en";
export declare const parseMessage: (msg: string, messages: Record<string, string>, ctx: Record<string, unknown>) => string;
export declare const parseDateMessage: (msg: string, millis: number | string | Date, messages: Record<string, string>) => string;
