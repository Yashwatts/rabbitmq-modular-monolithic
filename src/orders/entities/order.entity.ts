import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'orders',
  schema: 'order_schema',
})
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  productId: number;

  @Column()
  quantity: number;

  @Column('decimal')
  amount: number;
}
