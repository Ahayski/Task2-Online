import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({ name: "voter" })
export class Voter {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    namaVoter: string

    @Column()
    alamat: string

    @Column()
    jenKel: string

    @Column()
    paslon: string

}
