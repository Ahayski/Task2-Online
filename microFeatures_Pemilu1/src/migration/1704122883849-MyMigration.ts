import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1704122883849 implements MigrationInterface {
    name = 'MyMigration1704122883849'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "paslon" ADD "nama" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "paslon" DROP COLUMN "nama"`);
    }

}
