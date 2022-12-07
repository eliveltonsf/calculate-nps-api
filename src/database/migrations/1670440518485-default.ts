import { MigrationInterface, QueryRunner } from 'typeorm';

export class default1670440518485 implements MigrationInterface {
  name = 'default1670440518485';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "surveys" ("id" varchar PRIMARY KEY NOT NULL, "title" text NOT NULL, "description" text NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "surveys"`);
  }
}
