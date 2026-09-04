import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import OrderTypeOrmConfig from './database/config/orm.config';
import { RabbitMQPublisher } from './rabbitmq/rabbitmq.publisher';
import { Order } from './entities/order.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(OrderTypeOrmConfig),
    TypeOrmModule.forFeature([Order], 'orderConnection'),
  ],
  controllers: [OrdersController],
  providers: [OrdersService, RabbitMQPublisher],
})
export class OrdersModule {}
