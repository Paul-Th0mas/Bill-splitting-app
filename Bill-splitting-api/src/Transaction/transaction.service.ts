
import { Transaction } from 'src/Entities/transaction.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from "@nestjs/typeorm";
import { CreateTransactionDto } from './Dto/CreateTransaction.Dto';
import { SubTransaction } from 'src/Entities/subTransaction.entity';
import { CreateSubTransactionDto } from './Dto/CreateSubTransaction.Dto';
import { Injectable } from '@nestjs/common/decorators';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>,
  ) { }

  createNewTransaction = async (newTransaction: CreateTransactionDto) => {
    const transaction = await this.transactionRepository.create(
      newTransaction.NewTransaction,
    );
    const savedTransaction = await this.transactionRepository.save(transaction);
    this.createSubTransactions(savedTransaction, newTransaction.Debitors)
    return { status: 200, message: "transaction Create" }
  };

  createSubTransactions = async (
    transaction: Transaction,
    debitors: number[],
  ) => {
    const subTransactionsPromises = debitors.map(async (debitor) => {
      const subTransaction: CreateSubTransactionDto = {
        BaseTransaction: transaction.id,
        Credit: transaction.TotalPaid / debitors.length,
        Creditor: transaction.PaidBy,
        Debtor: debitor,
        IsActive: true,
        PaymentStatus: true,
      };

      const newSubTransaction = this.transactionRepository.create(subTransaction);
      return this.transactionRepository.save(newSubTransaction);
    });

    const createdSubTransactions = await Promise.all(subTransactionsPromises);
    return createdSubTransactions;
  };
}
