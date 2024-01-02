import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1704118648480 implements MigrationInterface {
    name = 'MyMigration1704118648480'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "paslon" ADD "koalisi" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "paslon" DROP COLUMN "koalisi"`);
    }

}
