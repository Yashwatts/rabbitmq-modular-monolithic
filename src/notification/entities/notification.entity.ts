import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'notifications',
  schema: 'notification_schema',
})
export class Notification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  orderId: number;

  @Column()
  userId: number;

  @Column()
  message: string;
}
