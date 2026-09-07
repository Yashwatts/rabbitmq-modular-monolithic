import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateOrderNotification1788501465206 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createSchema('notification_schema', true);

    await queryRunner.createTable(
      new Table({
        name: 'notifications',
        schema: 'notification_schema',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'orderId',
            type: 'int',
            isUnique: true
          },
          {
            name: 'userId',
            type: 'int',
          },
          {
            name: 'message',
            type: 'varchar',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('notifications', true);
  }
}
