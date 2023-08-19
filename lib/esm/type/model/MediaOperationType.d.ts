import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type MediaOperationType = MobilettoOrmObject & {
    name: string;
    command: string;
    minFileSize: number;
    analysis?: boolean;
    func?: boolean;
};
