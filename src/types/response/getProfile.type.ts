export interface ApiUserProfile {
  _id: string;
  customId: string;
  id: string;
  email: string;
  title: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  bvn: string;
  nin: string;
  dob: string; // ISO date string
  address: string;
  country: string;
  state: string;
  city: string;
  maritalStatus: string;
  NoOfDependents: number;
  wdymtta: string;
  eduLevel: string;
  isDeleted: boolean;
  active: boolean;
  oldUser: boolean;
  personalReferalCode: string;
  referredByCode: string;
  signedOnDevice: string;
  referredByAnswer: string;
  referredByOption: string;
  accountType: string;
  isMerchant: boolean;
  paidReferrals: number;
  notificationTokens: string[];
  bvnData: BvnData;
  createdAt: string;
  updatedAt: string;
  lastLogin: string;
  profileProgress: number;
  isLivenessDone: boolean;
  context: string;
}

export interface BvnData {
  bvn: string;
  firstName: string;
  lastName: string;
  middleName: string;
  gender: string;
  dateOfBirth: string; // "YYYY-MM-DD"
  phoneNumber: string;
  email: string;
  enrollmentBank: string;
  enrollmentBranch: string;
  levelOfAccount: string;
  lgaOfOrigin: string;
  lgaOfResidence: string;
  maritalStatus: string;
  nameOnCard: string;
  nationality: string;
  nin: string;
  phoneNumber2: string;
  registrationDate: string;
  residentialAddress: string;
  stateOfOrigin: string;
  stateOfResidence: string;
  watchListed: string;
  code: string;
  message: string;
}
