import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type MediaOperationType = MobilettoOrmObject & {
    name: string;
    minFileSize: number;
    func?: boolean;
};
