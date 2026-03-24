import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "./Student";

@Entity()
export class StudentCard {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    cardNumber: string

    @Column()
    issueDate: Date

    @Column()
    expiryDate: Date

    @Column()
    status: string

    @OneToOne(type => Student, student => student.id)
    @JoinColumn()
    student: Student

}