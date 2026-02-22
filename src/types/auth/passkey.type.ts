interface Passkey {
  id: string;
  deviceName: string;
  createdAt?: {
    _seconds: number;
    _nanoseconds: number;
  };
}

interface UsersPasskeysData {
  uid: string;
  passkeys: Passkey[];
}

export interface PasskeyResponse {
  data: UsersPasskeysData;
}
