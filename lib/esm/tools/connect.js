var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { mobiletto } from "mobiletto-base";
const LocalConfigResolver = {
    key: (cfg) => cfg.key,
    secret: (_cfg) => "",
    opts: (cfg) => ({ createIfNotExist: cfg.createIfNotExist }),
};
const S3ConfigResolver = {
    key: (cfg) => cfg.key,
    secret: (cfg) => cfg.secret,
    opts: (cfg) => ({
        bucket: cfg.bucket,
        region: cfg.region,
        prefix: cfg.prefix,
        delimiter: cfg.delimiter,
    }),
};
const B2ConfigResolver = {
    key: (cfg) => cfg.key,
    secret: (cfg) => cfg.secret,
    opts: (cfg) => ({
        bucket: cfg.bucket,
        partSize: cfg.partSize,
        prefix: cfg.prefix,
        delimiter: cfg.delimiter,
    }),
};
const GenericConfigResolver = {
    key: (cfg) => cfg.key || "",
    secret: (cfg) => cfg.secret || undefined,
    opts: (cfg) => ({
        driver: cfg.driver,
        opts: cfg.opts ? cfg.opts : {},
    }),
};
const CONFIG_RESOLVERS = {
    local: LocalConfigResolver,
    s3: S3ConfigResolver,
    b2: B2ConfigResolver,
    generic: GenericConfigResolver,
};
export const resolveConnectionConfig = (volume) => {
    const resolver = CONFIG_RESOLVERS[volume.type];
    const connConfig = volume[volume.type];
    return {
        key: resolver.key(connConfig),
        secret: resolver.secret(connConfig),
        opts: resolver.opts(connConfig),
    };
};
const VOLUME_CONNECTIONS = {};
export const connectVolume = (volume) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f;
    if (!VOLUME_CONNECTIONS[volume.name]) {
        const config = resolveConnectionConfig(volume);
        const encryption = volume.encryptionEnable
            ? {
                key: ((_a = volume.encryption) === null || _a === void 0 ? void 0 : _a.encryptionKey) ? (_b = volume.encryption) === null || _b === void 0 ? void 0 : _b.encryptionKey : "",
                iv: ((_c = volume.encryption) === null || _c === void 0 ? void 0 : _c.encryptionIV) ? (_d = volume.encryption) === null || _d === void 0 ? void 0 : _d.encryptionIV : undefined,
                algo: ((_e = volume.encryption) === null || _e === void 0 ? void 0 : _e.encryptionAlgo) ? (_f = volume.encryption) === null || _f === void 0 ? void 0 : _f.encryptionAlgo : undefined,
            }
            : undefined;
        const connection = yield mobiletto(volume.type, config.key, config.secret, config.opts ? config.opts : undefined, encryption);
        if (!VOLUME_CONNECTIONS[volume.name]) {
            VOLUME_CONNECTIONS[volume.name] = connection;
        }
    }
    return VOLUME_CONNECTIONS[volume.name];
});
