import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({ name: "paslon" })
export class Paslon {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nama: string

    @Column()
    paslonImg: string

    @Column()
    noUrut: number

    @Column("simple-array")
    visiMisi: string

    @Column("simple-array")
    koalisi: string

}
