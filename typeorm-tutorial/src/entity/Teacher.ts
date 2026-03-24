import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Course } from "./Course";

@Entity()
export class Teacher {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    department: string

    @Column()
    office: string

    @OneToMany(type => Course, course => course.id)
    course: Course[]

}