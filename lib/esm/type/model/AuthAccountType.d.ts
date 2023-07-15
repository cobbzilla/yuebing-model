export type AuthAccountType = {
    _meta?: {
        id: string;
        version: string;
        removed?: boolean;
        ctime: number;
        mtime: number;
    };
    username: string;
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    locale: string;
    flags?: string[];
    verified?: number;
    session?: string;
};
