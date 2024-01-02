import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1704123197700 implements MigrationInterface {
    name = 'MyMigration1704123197700'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "paslon" ("id" SERIAL NOT NULL, "nama" character varying NOT NULL, "paslonImg" character varying NOT NULL, "noUrut" integer NOT NULL, "visiMisi" text NOT NULL, "koalisi" text NOT NULL, CONSTRAINT "PK_f3367efce21ffeeff1e3f58244d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "paslon"`);
    }

}
