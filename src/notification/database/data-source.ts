import { DataSource } from 'typeorm';
import { NotificationTypeOrmConfig } from './config/orm.config';

export const NotificationDataSource = new DataSource(NotificationTypeOrmConfig);
