export class CreateTransaction {
  Name: string;
  Description: string;
  TotalPaid: number;
  CurrencyTypeId: number;
  PaidBy: number;
  CreatedBy: number;
  CreatedOn: number;
  IsActive: boolean;
}

export class CreateTransactionDto {
  NewTransaction: CreateTransaction;
  Debitors: number[];
}
