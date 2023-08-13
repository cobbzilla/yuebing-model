import { MobilettoOrmTypeDef } from "mobiletto-orm";
import { MobilettoScanObjectTypeDefConfig } from "mobiletto-orm-scan-typedef";
export const DiscoveredAssetTypeDefFields = Object.assign({ name: {
        index: true,
        indexLevels: 3,
        min: 1,
        max: 1024,
        updatable: false,
        control: "label",
        tabIndex: 1,
    }, source: {
        required: true,
        ref: { refType: "source" },
        control: "label",
        tabIndex: 2,
    } }, MobilettoScanObjectTypeDefConfig.fields);
export const DiscoveredAssetTypeDef = new MobilettoOrmTypeDef({
    typeName: "discoveredAsset",
    shortName: "ast~disc",
    fields: DiscoveredAssetTypeDefFields,
});
export const DownloadedAssetTypeDefFields = Object.assign({ name: {
        index: true,
        indexLevels: 3,
        min: 1,
        max: 1024,
        updatable: false,
        control: "label",
        tabIndex: 1,
    }, source: {
        required: true,
        ref: { refType: "source" },
        control: "label",
        tabIndex: 2,
    } }, MobilettoScanObjectTypeDefConfig.fields);
export const DownloadedAssetTypeDef = new MobilettoOrmTypeDef({
    typeName: "downloadedAsset",
    shortName: "ast~dwnld",
    scope: "local",
    fields: DownloadedAssetTypeDefFields,
});
export const AnalyzedAssetTypeDefFields = Object.assign({ name: {
        index: true,
        indexLevels: 3,
        min: 1,
        max: 2048,
        updatable: false,
        control: "label",
        tabIndex: 1,
    }, source: {
        required: true,
        ref: { refType: "source" },
        control: "label",
        tabIndex: 2,
    }, 
    // MobilettoMetadata as JSON
    meta: {
        required: false,
        min: 2,
        max: 2048,
        tabIndex: 3,
        control: "label",
    }, 
    // MediaInfo as JSON
    mediainfo: {
        required: false,
        min: 2,
        max: 1024 * 128,
        tabIndex: 4,
        control: "label",
    } }, MobilettoScanObjectTypeDefConfig.fields);
export const AnalyzedAssetTypeDef = new MobilettoOrmTypeDef({
    typeName: "analyzedAsset",
    shortName: "ast~analyze",
    fields: AnalyzedAssetTypeDefFields,
});
