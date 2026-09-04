import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Notification } from './entities/notification.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(Notification, 'notificationConnection')
    private readonly notificationRepository: Repository<Notification>,
  ) {}

  async orderCreatedNotification(order: any) {
    // throw new Error('Simulated error for testing retry mechanism');
    const existingNotification = await this.notificationRepository.findOne({
      where: { orderId: order.id },
    });

    if (existingNotification) {
      console.log(
        `Notification for order ${order.id} already exists. Skipping creation.`,
      );
      return;
    }
    const notification = this.notificationRepository.create({
      orderId: order.id,
      userId: order.userId,
      message: `Order ${order.id} has been created for user ${order.userId}`,
    });

    await this.notificationRepository.save(notification);
    console.log('Notification sent:', notification);
  }

  async getNotifications() {
    return await this.notificationRepository.find();
  }
}
