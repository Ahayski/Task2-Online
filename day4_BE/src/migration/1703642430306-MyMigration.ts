import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1703642430306 implements MigrationInterface {
    name = 'MyMigration1703642430306'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Provinces" ("id" SERIAL NOT NULL, "Nama" character varying NOT NULL, CONSTRAINT "PK_8b487d80d948fe12b87ba7bf4bb" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Provinces"`);
    }

}
