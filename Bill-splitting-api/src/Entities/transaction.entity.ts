import {
  Column,
  Entity,
  JoinColumn,
  Long,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SubTransaction } from './subTransaction.entity';
import { User } from './user.entity';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  Name: string;
  @Column()
  Description: string;
  @Column('decimal')
  TotalPaid: number;
  @Column()
  CurrencyTypeId: number;
  @Column()
  PaidBy: number;
  @Column()
  CreatedBy: number;
  @Column()
  CreatedOn: number;
  @Column()
  IsActive: boolean;

  @JoinColumn({ name: 'fileId' })
  @OneToOne(
    () => File,
    {
      nullable: true
    }
  )
  public avatar?: File;

  @Column({ nullable: true })
  public fileId?: number;

  @OneToMany(
    (type) => SubTransaction,
    (SubTransaction) => SubTransaction.BaseTransaction,
  )
  SubTransactions: SubTransaction[];

  @ManyToOne((type) => User, (User) => User.Transactions)
  @JoinColumn({ name: 'PaidBy' })
  PaidByUser: User;
}
