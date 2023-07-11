export type UserType = {
    username: string;
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    locale: string;
    flags?: string[];
    verified?: number;
    id: string;
    ctime?: number;
    mtime?: number;
};
