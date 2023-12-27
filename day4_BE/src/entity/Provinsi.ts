import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({ name: "Provinces" })//untuk inisiasi nama tabel di database menggunakan { name: "Provinces" }
export class Provinsi {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    Nama: string

}
