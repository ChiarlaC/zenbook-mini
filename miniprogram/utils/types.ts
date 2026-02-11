export type AccountType = 'ASSET' | 'LIABILITY' | 'EQUITY';
export type TransactionType = 'EXPENSE' | 'INCOME' | 'TRANSFER' | 'ADJUSTMENT';

export interface Account {
  _id: string;
  name: string;
  type: AccountType;
  balance: number; // Stored in cents
  currency: 'CNY';
}

export interface Transaction {
  _id: string;
  amount: number; // Absolute value in cents
  type: TransactionType;
  source_account_id: string; // Ref -> accounts._id
  target_account_id: string; // Ref -> accounts._id (or Category ID for expenses if treating categories as accounts)
  category_tags?: string[];
  raw_input?: string;
  created_at: Date | number; // Timestamp
}
