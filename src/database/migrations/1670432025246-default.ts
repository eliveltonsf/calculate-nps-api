import { MigrationInterface, QueryRunner } from 'typeorm';

export class default1670432025246 implements MigrationInterface {
  name = 'default1670432025246';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("id" varchar PRIMARY KEY NOT NULL, "name" text NOT NULL, "email" text NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
