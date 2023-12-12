import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Transaction } from "./transaction.entity";

@Entity()
export class SubTransaction {
    @PrimaryGeneratedColumn()
    id: Number;
    @Column()
    BaseTransaction: number;
    @Column()
    Debtor: Number
    @Column()
    Creditor: Number
    @Column()
    Credit: number
    @Column()
    PaymentStatus: boolean
    @Column()
    IsActive: boolean

    @ManyToOne(type=>Transaction,Transaction=>Transaction.SubTransactions)
    transaction
}