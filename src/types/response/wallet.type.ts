/**
 * Defines the structure for a financial wallet or account record retrieved from an API.
 * Balances and limits are represented as strings to preserve high-precision decimal values.
 */
export interface ApiWalletRecord {
  /**
   * Unique identifier for the account information record.
   */
  accountInfoId: string;

  /**
   * The primary account number associated with the wallet.
   */
  walletIdAccountNumber: string;

  /**
   * The identifier for the user who owns the account.
   */
  userId: string;

  /**
   * The current available balance in string format (e.g., "5000.75").
   */
  availableBalance: string;

  /**
   * The allowed overdraft limit, in string format.
   */
  overDraftLimit: string;

  /**
   * The total credit limit available, in string format.
   */
  creditLimit: string;

  /**
   * The maximum daily debit limit, in string format.
   */
  debitLimit: string;

  /**
   * The total ledger balance (may differ from available balance if there are pending transactions), in string format.
   */
  ledgerBalance: string;

  /**
   * Flag indicating if a Post No Debit restriction is applied (true if restricted).
   */
  PND: boolean;

  /**
   * Flag indicating if a Post No Credit restriction is applied (true if restricted).
   */
  PNC: boolean;

  /**
   * Status of the account (true if active).
   */
  active: boolean;

  /**
   * Flag indicating if inter-bank transactions are enabled.
   */
  interBank: boolean;

  /**
   * The general type of the account (e.g., "general").
   */
  type: string;

  /**
   * The maximum allowed transaction value per day (numeric).
   */
  dailyTransactionLimit: number;

  /**
   * The maximum allowed single transaction value (numeric).
   */
  transactionLimit: number;

  /**
   * The count of transactions performed today.
   */
  transactionDailyCount: number;

  /**
   * The name or identifier of the bank/financial institution (e.g., "VFD").
   */
  banker: string;

  /**
   * A secondary identifier for the pocket or sub-account.
   */
  pocketId: string;
}

export enum WalletTier {
  TIER_3 = 'Tier 3',
  TIER_2 = 'Tier 2',
  TIER_1 = 'Tier 1',
}
