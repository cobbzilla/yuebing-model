import { MobilettoOrmObject } from "mobiletto-orm-typedef";
export type LocalConfig_autoscanType = {
    initialDelay: number;
    scanPollInterval?: number;
    analyzerPollInterval?: number;
    transformerPollInterval?: number;
    uploaderPollInterval?: number;
    downloadDir?: string;
    assetDir?: string;
    runScanner?: boolean;
    runAnalyzer?: boolean;
    runTransformer?: boolean;
    runUploader?: boolean;
    removeLocalFile?: boolean;
};
export type LocalConfigType = MobilettoOrmObject & {
    systemName: string;
    autoscanEnabled: boolean;
    autoscan?: LocalConfig_autoscanType;
};
