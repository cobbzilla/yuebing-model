export type UsernameAndPasswordType = {
    _meta?: {
        id: string;
        version: string;
        removed?: boolean;
        ctime: number;
        mtime: number;
    };
    usernameOrEmail: string;
    password: string;
};
