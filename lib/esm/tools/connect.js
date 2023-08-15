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
export const resolveConnectionConfig = (config) => {
    const resolver = CONFIG_RESOLVERS[config.type];
    const connConfig = config[config.type];
    return {
        key: resolver.key(connConfig),
        secret: resolver.secret(connConfig),
        opts: resolver.opts(connConfig),
    };
};
