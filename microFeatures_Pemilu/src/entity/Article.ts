import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({ name: "article" })
export class Article {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    gambar: string

    @Column("date")
    articleDate: string

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    author: string

}
