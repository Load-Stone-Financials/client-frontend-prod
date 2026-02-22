export interface ApiLoanRecord {
  _id: string;
  email: string;
  reason: string;
  loanType: string;
  amount: number;
  loanTenor: string;
  interest: number;
  jobsFunded: number;
  moratorium?: number;
  status: string;
  underwriterReason: string;
  approvalStatus: string;
  note: string;
  userId: string;
  disbursedBy: string;
  repaymentScheduleDates: string[];
  oldUser: boolean;
  oldId: string | null;
  approvedBy: string;
  paystackStatus: string;
  transferCode: string;
  referenceCode: string;
  merchantBusinessName: string | null;
  redirectUrl: string | null;
  authorizationCode: string | null;
  reference: string | null;
  accessCode: string | null;
  merchantAccountNumber: string | null;
  merchantEmail: string | null;
  merchantPhoneNumber: string | null;
  customId: string;
  source: string | null;
  createdAt: string;
  updatedAt: string;
  __v: number;
  dateOfApproval: string;
  monthlyRepaymentAmount: number;
  numberOfRepayments: number;
  paybackDate: string;
  totalInterestAmount: number;
  totalrepaymentAmount: number;
  underwriterNote: string;
  acceptLoanOffer: boolean;
  acceptLoanOfferDate: string | null;
}

/**
 * Defines the overall structure for a complete user loan profile record,
 * typically encompassing personal, business, and financial details.
 */
export interface UserLoanProfileRecord {
  _id: string;
  userId: string;

  organizationDetails: OrganizationDetails;
  livenessImages: string[]; // Array of image URLs or IDs for liveness checks
  loanDocumentDetails: LoanDocumentDetails;

  createdAt: string; // ISO 8601 Date String
  updatedAt: string; // ISO 8601 Date String
  __v: number; // Version key

  nextOfKinDetails: NextOfKinDetails;
  armUserBankDetails: ArmUserBankDetailsInterface;
}
export interface ApiLoanWithLoanDetailsRecord extends ApiLoanRecord {
  loanDetails: LoanDetails;
  firstName: string;
  lastName: string;
  paymentStatus: string[];
  paymentAmount: number[];
  paymentDate: string[];
  paymentId: string[];
  paymentMade: any[]; // no structure provided
}

export interface LoanDetails {
  _id: string;
  userId: string;
  organizationDetails: OrganizationDetails;
  livenessImages: any[];
  loanDocumentDetails: LoanDocumentDetails;
  createdAt: string;
  updatedAt: string;
  __v: number;
  nextOfKinDetails: NextOfKinDetails;
  bankDetails: BankDetails;
}

/**
 * Details concerning the user's business or organization.
 */
export interface OrganizationDetails {
  businessType: string;
  businessName: string;
  positionInOrg: string;
  shareInOrg: string;
  rcNum: string; // Registration Certificate Number
  establishmentDate: string; // ISO 8601 Date String
  organizationDetails: {};
  businessAddress: string;
  country: string;
  state: string;
  city: string;
  ownedOrRented: 'Owned' | 'Rented';
  NoOfOutlets: number;
  totalEmployees: number;
  salesMethod: string;
  industry: string;
  monthlySales: string; // Descriptive range (e.g., "₦500,000 to ₦1,000,000")
  monthlyExpenses: string; // Descriptive range
  businessDuration: string; // Descriptive range (e.g., "5-10 years")
  womenLed: boolean;
  shariaCom: boolean; // Sharia Compliant
  tin: string; // Tax Identification Number
  registered: boolean;
  whenDidYouMoveToThisBusinessLocation: string; // ISO 8601 Date String
}

/**
 * Details and URLs for documents required for loan application/KYC.
 */
export interface LoanDocumentDetails {
  validIdentificationType: string;
  validIdentification: string;
  utilityBill: string; // URL
  signature: string; // URL
  passport: string; // URL
  bankStatement: string; // URL
  seal: string; // URL (Business seal/stamp)
  cac7: string; // URL (CAC Form 7 document)
  cac2: string; // URL (CAC Form 2 document)
  cacCertificate: string; // URL (CAC Certificate of Incorporation)
  lpoFile: string; // URL (Local Purchase Order file)
  proformaFile: string; // URL (Proforma Invoice/Quote)
  MERMAT: string; // URL (Memorandum and Articles of Association)
  othersName: string;
  others: string; // URL for other documents
  personalPhoto: string; // URL
  identityCard: string; // URL
}

/**
 * Defines the keys for all documents and identification details within the LoanDocumentDetails object.
 * Using a string enum ensures strong typing while retaining the exact field name for API interaction.
 */
export enum LoanDetailsDocuments {
  // Identification Fields
  ValidIdentificationType = 'validIdentificationType',
  ValidIdentification = 'validIdentification',
  IdentityCard = 'identityCard',
  PersonalPhoto = 'personalPhoto',
  Passport = 'passport',

  // Address and Financial Proofs
  UtilityBill = 'utilityBill',
  BankStatement = 'bankStatement',

  // Corporate Documents (CAC is Corporate Affairs Commission in Nigeria)
  Seal = 'seal',
  CAC7 = 'cac7',
  CAC2 = 'cac2',
  CACCertificate = 'cacCertificate',
  MERMAT = 'MERMAT', // Memorandum and Articles of Association

  // Transaction Documents
  LPOFile = 'lpoFile', // Local Purchase Order File
  ProformaFile = 'proformaFile', // Proforma Invoice/Quote

  // Signatures and Other documents
  Signature = 'signature',
  OthersName = 'othersName',
  Others = 'others',
}

/**
 * Details of the user's next of kin.
 */
export interface NextOfKinDetails {
  firstName: string;
  lastName: string;
  gender: 'Male' | 'Female' | 'Other';
  monthlySales: string;
  monthlyExpenses: string;
  businessDuration: string;
  womenLed: boolean;
  shariaCom: boolean;
  tin: string;
  registered: boolean;
  whenDidYouMoveToThisBusinessLocation: string;
}

export interface LoanDocumentDetails {
  validIdentificationType: string;
  validIdentification: string;
  utilityBill: string;
  signature: string;
  passport: string;
  bankStatement: string;
  seal: string;
  cac7: string;
  cac2: string;
  cacCertificate: string;
  lpoFile: string;
  proformaFile: string;
  MERMAT: string;
  othersName: string;
  others: string;
  personalPhoto: string;
  identityCard: string;
}

export interface NextOfKinDetails {
  firstName: string;
  lastName: string;
  gender: 'Male' | 'Female' | 'Other';
  relationship: string;
  email: string;
  phoneNumber: string;
  Address: string;
}

/**
 * Details of the user's primary bank account.
 */
export interface BankDetails {
  email: string;
  bankName: string;
  bankAccountName: string;
  bankAccountNumber: string;
  hasOnlineBanking: boolean;
  wasLoanTakenWithinTheLast12Months: boolean;
  loanAmount: string;
}

/**
 * Interface representing detailed bank, income, and KYC-related information
 * for a user, typically mirroring a Mongoose schema structure.
 */
export interface ArmUserBankDetailsInterface {
  /** The name of the user's bank. */
  bankName?: string;

  /** The full name associated with the bank account. */
  bankAccountName?: string;

  /** The user's bank account number. */
  bankAccountNumber?: string;

  /** The unique code identifying the bank. */
  bankCode?: string;

  /** The code identifying the specific branch of the bank. */
  branchCode?: string;

  /** The expected annual income range of the user. */
  annualExpectedAnnualIncomeRange?: string;

  /** Flag or status indicating if the user is a politically exposed person (PEP). */
  politicallyExposedPersons?: string;

  /** The specific category or classification of the politically exposed person, if applicable. */
  politicallyExposedPersonsCategory?: string;

  /** The user's current employment status (e.g., 'Employed', 'Self-Employed'). */
  employmentStatus?: string;

  /** The type of identification document provided (e.g., 'Driver's License', 'Passport'). */
  idType?: string;

  /** URL pointing to the user's identification document image. */
  identityUrl?: string;

  /** URL pointing to the user's utility bill document image for address verification. */
  utilityBillUrl?: string;

  /** The primary card number associated with the account, if applicable. */
  cardNumber?: string;

  /** The date the identification document was issued. */
  issueDateOfId?: string;

  /** The date the identification document expires. */
  expiryDateOfId?: string;

  /** The type of identification used for the utility bill verification (less common, but included). */
  utilityBillIdType?: string;

  /** The expiry date of the utility bill (uncommon for bills, but included based on schema). */
  expiryDateOfUtilityBill?: string;

  /** Flag or setting indicating if the user wishes to reinvest dividends. */
  reInvestDividends?: string;

  /** The current Know Your Customer (KYC) compliance level of the user. */
  kycLevel?: string;

  /** The maximum amount allowed for a single investment transaction. */
  maximumSingleInvestmentAmount?: string;

  /** The maximum amount allowed for a single redemption (withdrawal) transaction. */
  maximumSingleRedemptionAmount?: string;
}
