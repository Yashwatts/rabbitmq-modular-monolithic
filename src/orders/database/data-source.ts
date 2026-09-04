import { DataSource } from 'typeorm';
import { OrderTypeOrmConfig } from './config/orm.config';

export const OrderDataSource = new DataSource(OrderTypeOrmConfig);
