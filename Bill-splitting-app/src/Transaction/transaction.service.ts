import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Transaction } from "src/Entities/transaction.entity";
import { Repository } from "typeorm";
import { CreateTransactionDto } from "./Dto/CreateTransaction.Dto";

@Injectable()
export class TransactionService {
    constructor(
        @InjectRepository(Transaction)
        private groupRepository: Repository<Transaction>,
    ) { }

    createNewTransaction = async (newTransaction: CreateTransactionDto) => {
        var transaction = await this.groupRepository.create(newTransaction.NewTransaction);
        await this.groupRepository.save(transaction);
    }

    createSubTransactions = async (transaction: Transaction) => {

    }

}