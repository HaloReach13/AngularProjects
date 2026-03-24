import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Teacher } from "./Teacher";

@Entity()
export class Course {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    code: string

    @Column()
    credit: number

    @Column()
    maxStudents: number

    @ManyToOne(type => Teacher, teacher => teacher.id)
    teacher: Teacher
    
}