import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Transaction } from './transaction.entity';

@Entity()
export class SubTransaction {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  BaseTransaction: number;
  @Column()
  Debtor: number;
  @Column()
  Creditor: number;
  @Column()
  Credit: number;
  @Column()
  PaymentStatus: boolean;
  @Column()
  IsActive: boolean;

  @ManyToOne(
    (type) => Transaction,
    (Transaction) => Transaction.SubTransactions,
  )
  transaction;

  async getCreditorInfo(): Promise<number> {
    if (!this.transaction) {
      return null; // No transaction associated, return null or handle accordingly
    }
    return this.transaction.Creditor;
  }
}
