import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({ name: "partai" })
export class Partai {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    noUrut: number

    @Column()
    partaiImg: string

    @Column()
    nama: string

    @Column()
    ketuaUmum: string

    @Column("simple-array")
    visiMisi: string

    @Column()
    alamat: string

}
