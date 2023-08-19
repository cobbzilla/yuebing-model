import { mobiletto, MobilettoOptions } from "mobiletto-base";
import { MobilettoEncryptionSettings } from "mobiletto-base/lib/cjs/crypt.js";
import { MobilettoConnection } from "mobiletto-base/lib/cjs/types.js";
import { Volume_subDriver } from "../typedef/model/volume.js";
import {
  VolumeType,
  Volume_b2Type,
  Volume_genericType,
  Volume_localType,
  Volume_s3Type,
} from "../type/model/VolumeType.js";

export type MobilettoConnectionConfig = {
  key: string;
  secret?: string;
  opts?: Record<string, unknown>;
};

export type MobilettoConnectionConfigResolver<T extends Volume_subDriver> = {
  key: (cfg: T) => string;
  secret: (cfg: T) => string | undefined;
  opts: (cfg: T) => Record<string, unknown> | undefined;
};

const LocalConfigResolver: MobilettoConnectionConfigResolver<Volume_localType> = {
  key: (cfg: Volume_localType) => cfg.key,
  secret: () => "",
  opts: (cfg: Volume_localType) => ({ createIfNotExist: cfg.createIfNotExist }),
};

const S3ConfigResolver: MobilettoConnectionConfigResolver<Volume_s3Type> = {
  key: (cfg: Volume_s3Type) => cfg.key,
  secret: (cfg: Volume_s3Type) => cfg.secret,
  opts: (cfg: Volume_s3Type) => ({
    bucket: cfg.bucket,
    region: cfg.region,
    prefix: cfg.prefix,
    delimiter: cfg.delimiter,
  }),
};

const B2ConfigResolver: MobilettoConnectionConfigResolver<Volume_b2Type> = {
  key: (cfg: Volume_b2Type) => cfg.key,
  secret: (cfg: Volume_b2Type) => cfg.secret,
  opts: (cfg: Volume_b2Type) => ({
    bucket: cfg.bucket,
    partSize: cfg.partSize,
    prefix: cfg.prefix,
    delimiter: cfg.delimiter,
  }),
};

const GenericConfigResolver: MobilettoConnectionConfigResolver<Volume_genericType> = {
  key: (cfg: Volume_genericType) => cfg.key || "",
  secret: (cfg: Volume_genericType) => cfg.secret || undefined,
  opts: (cfg: Volume_genericType) => ({
    driver: cfg.driver,
    opts: cfg.opts ? cfg.opts : {},
  }),
};

const CONFIG_RESOLVERS: Record<string, MobilettoConnectionConfigResolver<Volume_subDriver>> = {
  local: LocalConfigResolver as MobilettoConnectionConfigResolver<Volume_subDriver>,
  s3: S3ConfigResolver as MobilettoConnectionConfigResolver<Volume_subDriver>,
  b2: B2ConfigResolver as MobilettoConnectionConfigResolver<Volume_subDriver>,
  generic: GenericConfigResolver as MobilettoConnectionConfigResolver<Volume_subDriver>,
};

export const resolveConnectionConfig = (volume: VolumeType): MobilettoConnectionConfig => {
  const resolver = CONFIG_RESOLVERS[volume.type];
  const connConfig = volume[volume.type];
  return {
    key: resolver.key(connConfig),
    secret: resolver.secret(connConfig),
    opts: resolver.opts(connConfig),
  };
};

const VOLUME_CONNECTIONS: Record<string, MobilettoConnection> = {};

export const connectVolume = async <T extends VolumeType>(volume: T) => {
  if (!VOLUME_CONNECTIONS[volume.name]) {
    const config = resolveConnectionConfig(volume);
    const encryption: MobilettoEncryptionSettings | undefined = volume.encryptionEnable
      ? {
          key: volume.encryption?.encryptionKey ? volume.encryption?.encryptionKey : "",
          iv: volume.encryption?.encryptionIV ? volume.encryption?.encryptionIV : undefined,
          algo: volume.encryption?.encryptionAlgo ? volume.encryption?.encryptionAlgo : undefined,
        }
      : undefined;
    const connection = await mobiletto(
      volume.type,
      config.key,
      config.secret,
      config.opts ? (config.opts as MobilettoOptions) : undefined,
      encryption
    );
    if (!VOLUME_CONNECTIONS[volume.name]) {
      VOLUME_CONNECTIONS[volume.name] = connection;
    }
  }
  return VOLUME_CONNECTIONS[volume.name];
};
