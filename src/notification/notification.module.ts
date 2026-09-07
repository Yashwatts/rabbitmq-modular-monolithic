import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RabbitMQConsumer } from './rabbitmq/rabbitmq.consumer';
import { Notification } from './entities/notification.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Notification]),
  ],
  controllers: [NotificationController],
  providers: [NotificationService, RabbitMQConsumer],
})
export class NotificationModule {}
