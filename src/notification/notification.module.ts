import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import NotificationTypeOrmConfig from './database/config/orm.config';
import { RabbitMQConsumer } from './rabbitmq/rabbitmq.consumer';
import { Notification } from './entities/notification.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(NotificationTypeOrmConfig),
    TypeOrmModule.forFeature([Notification], 'notificationConnection'),
  ],
  controllers: [NotificationController],
  providers: [NotificationService, RabbitMQConsumer],
})
export class NotificationModule {}
