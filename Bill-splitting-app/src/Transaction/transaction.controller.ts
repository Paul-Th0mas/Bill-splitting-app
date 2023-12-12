import { Controller, Post } from "@nestjs/common";

@Controller('transaction')
export class TransactionController{
    
    @Post("CreateNewTransaction")
    async CreateNewTransaction()
}