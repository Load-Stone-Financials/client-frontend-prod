import type { UserProfile } from "firebase/auth";

export class ProfileStore {
  userProfile: UserProfile | null = null;
}
