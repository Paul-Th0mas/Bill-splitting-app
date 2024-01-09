import { Body, Controller, Post } from "@nestjs/common";
import { CreateTransactionDto } from "./Dto/CreateTransaction.Dto";
import { TransactionService } from "./transaction.service";

@Controller('transaction')
export class TransactionController {
    constructor(private transService: TransactionService) { }

    @Post("CreateNewTransaction")
    async CreateNewTransaction(@Body() newTransaction: CreateTransactionDto) {
        try {
            const createdTransaction = await this.transService.createNewTransaction(newTransaction);
            return { transaction: createdTransaction, message: 'Transaction created successfully' };
        } catch (error) {
            return { error: 'Failed to create transaction' };
        }
    }
}