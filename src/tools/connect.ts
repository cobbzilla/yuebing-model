import {
  Volume_b2Type,
  Volume_genericType,
  Volume_localType,
  Volume_s3Type,
  VolumeType,
} from "../type/model/VolumeType.js";

export type MobilettoConnectionConfig = {
  key: string;
  secret?: string;
  opts?: Record<string, unknown>;
};

export type MobilettoConnectionConfigResolver = {
  key: (cfg: any) => string;
  secret: (cfg: any) => string | undefined;
  opts: (cfg: any) => Record<string, unknown> | undefined;
};

const LocalConfigResolver: MobilettoConnectionConfigResolver = {
  key: (cfg: Volume_localType) => cfg.key,
  secret: (_cfg: Volume_localType) => "",
  opts: (cfg: Volume_localType) => ({ createIfNotExist: cfg.createIfNotExist }),
};

const S3ConfigResolver: MobilettoConnectionConfigResolver = {
  key: (cfg: Volume_s3Type) => cfg.key,
  secret: (cfg: Volume_s3Type) => cfg.secret,
  opts: (cfg: Volume_s3Type) => ({
    bucket: cfg.bucket,
    region: cfg.region,
    prefix: cfg.prefix,
    delimiter: cfg.delimiter,
  }),
};

const B2ConfigResolver: MobilettoConnectionConfigResolver = {
  key: (cfg: Volume_b2Type) => cfg.key,
  secret: (cfg: Volume_b2Type) => cfg.secret,
  opts: (cfg: Volume_b2Type) => ({
    bucket: cfg.bucket,
    partSize: cfg.partSize,
    prefix: cfg.prefix,
    delimiter: cfg.delimiter,
  }),
};

const GenericConfigResolver: MobilettoConnectionConfigResolver = {
  key: (cfg: Volume_genericType) => cfg.key || "",
  secret: (cfg: Volume_genericType) => cfg.secret || undefined,
  opts: (cfg: Volume_genericType) => ({
    driver: cfg.driver,
    opts: cfg.opts ? cfg.opts : {},
  }),
};

const CONFIG_RESOLVERS: Record<string, MobilettoConnectionConfigResolver> = {
  local: LocalConfigResolver,
  s3: S3ConfigResolver,
  b2: B2ConfigResolver,
  generic: GenericConfigResolver,
};

export const resolveConnectionConfig = (config: VolumeType): MobilettoConnectionConfig => {
  const resolver = CONFIG_RESOLVERS[config.type];
  return {
    key: resolver.key(config),
    secret: resolver.secret(config),
    opts: resolver.opts(config),
  };
};
