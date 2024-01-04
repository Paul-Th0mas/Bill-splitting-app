export class CreateSubTransactionDto {
  BaseTransaction: number;
  Debtor: number;
  Creditor: number;
  Credit: number;
  PaymentStatus: boolean;
  IsActive: boolean;
}
