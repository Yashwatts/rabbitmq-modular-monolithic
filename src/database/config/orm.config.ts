import { DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const MODULES = ['orders', 'notification'] as const;
type ModuleName = (typeof MODULES)[number];

function getModuleFromEnv(): ModuleName | undefined {
  const matched = MODULES.filter(
    (mod) => process.env[`npm_config_${mod}`] === 'true',
  );

  if (matched.length > 1) {
    throw new Error(
      `Multiple module flags passed: ${matched.join(', ')}. Pass only one, e.g. --orders`,
    );
  }

  return matched[0];
}

const moduleName = getModuleFromEnv();

const migrations = [
  __dirname + `/../../${moduleName}/migrations/*.{ts,js}`,
];

const entities = [__dirname + `/../../${moduleName}/entities/*.entity.{ts,js}`];

export const typeOrmConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities,
  migrations,
  migrationsRun: true,
  synchronize: false,
};

export default typeOrmConfig;
