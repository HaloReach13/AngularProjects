import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Course } from "./Course";

@Entity()
export class Student {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    neptun: string

    @Column()
    email: string

    @ManyToMany(type => Course, { cascade: true })
    @JoinTable()
    courses: Course[]

}