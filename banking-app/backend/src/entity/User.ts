import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserDTO } from "../../../models";

@Entity()
export class User implements UserDTO {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    balance: number;
}