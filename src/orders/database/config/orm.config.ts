import { DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import { Order } from '../../entities/order.entity';

dotenv.config();

export const OrderTypeOrmConfig: DataSourceOptions = {
  name: 'orderConnection', // requires a unique name for each connection, when we have multiple connections
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Order],
  migrations: [__dirname + '/../migrations/*.{ts,js}'],
  migrationsRun: true,
  synchronize: false,
};

export default OrderTypeOrmConfig;
