export enum IdentificationType {
  NationalId = 'National ID',
  VotersCard = 'Voters Card',
  DriversLicense = 'Drivers License',
  InternationalPassport = 'International Passport',
  BirthCertificate = 'Birth Certificate',
  NIN = 'NIN',
  Empty = '',
}

export const IdentificationTypeToDocumentName: Record<
  IdentificationType,
  string
> = {
  'National ID': 'idCard',
  'Voters Card': 'others',
  'Drivers License': 'identityCard',
  'International Passport': 'passport',
  'Birth Certificate': 'others',
  NIN: '',
  '': '',
};

export enum EducationLevel {
  PRIMARY = 'Primary',
  SECONDARY = 'Secondary',
  TERTIARY = 'Tertiary',
  POSTGRAD = 'Postgraduate',
  OTHER = 'Other',
}

export enum IncomeRange {
  BELOW_50K = '< ₦50,000',
  FROM_50_TO_100 = '₦50,000 - ₦100,000',
  FROM_100_TO_300 = '₦100,000 - ₦300,000',
  FROM_300_TO_500 = '₦300,000 - ₦500,000',
  ABOVE_500 = '> ₦500,000',
}

export enum MaritalStatus {
  SINGLE = 'Single',
  MARRIED = 'Married',
  DIVORCED = 'Divorced',
  WIDOWED = 'Widowed',
}

export const OwnershipOptions = {
  OWNED: 'Owned',
  RENTED: 'Rented',
};
