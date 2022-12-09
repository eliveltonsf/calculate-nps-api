import { MigrationInterface, QueryRunner } from "typeorm";

export class default1670586746595 implements MigrationInterface {
    name = 'default1670586746595'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "surveys" ("id" varchar PRIMARY KEY NOT NULL, "title" text NOT NULL, "description" text NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" varchar PRIMARY KEY NOT NULL, "name" text NOT NULL, "email" text NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`CREATE TABLE "surveys_users" ("id" varchar PRIMARY KEY NOT NULL, "value" text, "create_at" datetime NOT NULL DEFAULT (datetime('now')), "userId" varchar, "surveyId" varchar)`);
        await queryRunner.query(`CREATE TABLE "temporary_surveys_users" ("id" varchar PRIMARY KEY NOT NULL, "value" text, "create_at" datetime NOT NULL DEFAULT (datetime('now')), "userId" varchar, "surveyId" varchar, CONSTRAINT "FK_2b1c8975859cc2976fcdc0422af" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_bdb3a4a355682a082e8256125f6" FOREIGN KEY ("surveyId") REFERENCES "surveys" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_surveys_users"("id", "value", "create_at", "userId", "surveyId") SELECT "id", "value", "create_at", "userId", "surveyId" FROM "surveys_users"`);
        await queryRunner.query(`DROP TABLE "surveys_users"`);
        await queryRunner.query(`ALTER TABLE "temporary_surveys_users" RENAME TO "surveys_users"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "surveys_users" RENAME TO "temporary_surveys_users"`);
        await queryRunner.query(`CREATE TABLE "surveys_users" ("id" varchar PRIMARY KEY NOT NULL, "value" text, "create_at" datetime NOT NULL DEFAULT (datetime('now')), "userId" varchar, "surveyId" varchar)`);
        await queryRunner.query(`INSERT INTO "surveys_users"("id", "value", "create_at", "userId", "surveyId") SELECT "id", "value", "create_at", "userId", "surveyId" FROM "temporary_surveys_users"`);
        await queryRunner.query(`DROP TABLE "temporary_surveys_users"`);
        await queryRunner.query(`DROP TABLE "surveys_users"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "surveys"`);
    }

}
