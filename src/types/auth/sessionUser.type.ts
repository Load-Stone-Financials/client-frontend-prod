interface NotificationSettings {
  emailNotifications: boolean;
  pushNotifications: boolean;
  smsNotifications: boolean;
}

export interface UserProfile {
  _id: string;
  customId: string;
  id: string;
  email: string;
  title: string;
  firstName: string;
  lastName: string;
  middleName: string;
  placeOfBirth: string;
  phoneNumber: string;
  gender: 'Male' | 'Female' | string;
  avatar: string;
  bvn: string;
  nin: string;
  dob: string;
  address: string;
  country: string;
  state: string;
  city: string;
  residentialStatus: 'Owner' | 'Renter' | string;
  maritalStatus: 'Single' | 'Married' | 'Divorced' | 'Widowed' | string;
  NoOfDependents: number;
  eduLevel: 'Bachelors' | 'Masters' | 'PhD' | string;
  isDeleted: boolean;
  active: boolean;
  oldUser: boolean;
  notificationSettings: NotificationSettings;
  personalReferalCode: string;
  referredByCode: string;
  signedOnDevice: 'web' | 'mobile' | string;
  accountType: 'Personal' | 'Business' | string;
  paidReferrals: number;
  notificationTokens: string[];
  updatedAt: string; // ISO date string
  wdymtta: '1-3 years' | '3-5 years' | '5+ years' | string; // Work experience
  profileProgress: number;
  isLivenessDone: boolean;
  context: string;
}
