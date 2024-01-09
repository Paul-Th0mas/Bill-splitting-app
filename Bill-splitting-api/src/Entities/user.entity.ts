import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { Transaction } from './transaction.entity';
import { Group } from './group.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;


  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  phoneNumber?: string

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany((type) => Transaction, (Transaction) => Transaction.PaidByUser)
  Transactions: Transaction[];

  // @BeforeInsert()
  // async hashPassword() {
  //   const bcrypt = require('bcryptjs');
  //   if (this.password) {
  //     this.password = await bcrypt.hash(this.password, 10);
  //   }
  // }
}
