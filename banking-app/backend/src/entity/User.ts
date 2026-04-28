import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserDTO } from "../../../models";
import { BankTransfer } from "./BankTransfer";

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

    @OneToMany(() => BankTransfer, (transaction) => transaction.sender)
    outgoingTransactions: BankTransfer[];

    @OneToMany(() => BankTransfer, (transaction) => transaction.receiver)
    incomingTransactions: BankTransfer[];
}