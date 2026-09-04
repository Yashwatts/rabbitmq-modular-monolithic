import { DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import { Notification } from '../../entities/notification.entity';

dotenv.config();

export const NotificationTypeOrmConfig: DataSourceOptions = {
  name: 'notificationConnection', // requires a unique name for each connection, when we have multiple connections
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Notification],
  migrations: [__dirname + '/../migrations/*.{ts,js}'],
  migrationsRun: true,
  synchronize: false,
};

export default NotificationTypeOrmConfig;
