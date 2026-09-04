import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { RabbitMQPublisher } from './rabbitmq/rabbitmq.publisher';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order, 'orderConnection')
    private readonly orderRepository: Repository<Order>,
    private readonly rabbitMQPublisher: RabbitMQPublisher,
  ) {}

  async createOrder(createOrderDto: CreateOrderDto) {
    const order = this.orderRepository.create(createOrderDto);
    const savedOrder = await this.orderRepository.save(order);

    this.rabbitMQPublisher.publishOrderCreated(savedOrder);
    return savedOrder;
  }
}
