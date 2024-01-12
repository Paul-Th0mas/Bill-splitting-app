
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
    @InjectRepository(SubTransaction)
    private subTransactionRepository: Repository<SubTransaction>,
  ) { }

  createNewTransaction = async (Transaction: CreateTransactionDto) => {
    try {
      
      const transaction = this.transactionRepository.create({
        Name: Transaction.NewTransaction.Name,
        Description: Transaction.NewTransaction.Description,
        TotalPaid: Transaction.NewTransaction.TotalPaid,
        CurrencyTypeId: 1,
        PaidBy: 4,
        CreatedBy: 1,
        CreatedOn: new Date(),
        IsActive: true,
      });
      const savedTransaction = await this.transactionRepository.save(transaction);
      console.log(Transaction)
      await this.createSubTransactions(savedTransaction, Transaction.Debitors)
      return { status: 200, message: "transaction Create" }
    }
    catch (err) {
      console.log(err)
    }
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

      const newSubTransaction = this.subTransactionRepository.create(subTransaction);
      return this.subTransactionRepository.save(newSubTransaction);
    });

    const createdSubTransactions = await Promise.all(subTransactionsPromises);
    return createdSubTransactions;
  };
}

