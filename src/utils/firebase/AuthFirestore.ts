/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */ import {
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { onValue, ref, set } from 'firebase/database';
import { FuctionBrowserLogger } from '../../common/Func_Logger';
import { auth, database } from '../../firebase/Firebase';
import { authStore } from '../../mobx_stores/RootStore';

//signin with email and password

export const SetDeviceId = async (response) => {
  let deviceId = localStorage.getItem('deviceId');

  if (!deviceId) {
    deviceId = crypto.randomUUID();
    localStorage.setItem('deviceId', deviceId);
  }

  const userRef = ref(database, 'users/' + response?.uid);

  await set(userRef, {
    lastLogin: new Date().toISOString(),
    deviceId,
  });

  window.sessionStorage.setItem('deviceId', deviceId);
  listenForSession(response?.uid);
};

export const LogIn = async (details: any) => {
  try {
    const response: any = await signInWithEmailAndPassword(
      auth,
      details.email,
      details.password,
    );

    try {
      FuctionBrowserLogger.prototype.info(
        `User | Log In | ${details.email}`,
        response,
      );
    } catch (err) {}

    return {
      error: false,
      data: response,
    };
  } catch (err: any) {
    try {
      FuctionBrowserLogger.prototype.error(
        `User | Log In | ${details.email}`,
        err,
      );
    } catch (err) {}

    return {
      error: true,
      // data: err,
      data: { code: err.code, message: err.message },
    };
  }
};

//Signout user
export const LogOut = async () => {
  try {
    try {
      FuctionBrowserLogger.prototype.info(
        `User | Log Out | ${auth.currentUser?.email}`,
        {},
      );
    } catch (err) {}

    // sign out from Firebase
    await signOut(auth);

    // clears all storage to ensure complete logout
    window.sessionStorage.clear();
    window.localStorage.clear();

    // clears any cached data
    if ('caches' in window) {
      caches.keys().then((names) => {
        names.forEach((name) => {
          caches.delete(name);
        });
      });
    }
  } catch (error: any) {
    try {
      FuctionBrowserLogger.prototype.error(
        `User | Log Out | ${auth.currentUser?.email}`,
        {},
      );
    } catch (err) {
      console.error(err);
    }
  }
};

async function listenForSession(userId: string) {
  const deviceId = localStorage.getItem('deviceId');

  onValue(ref(database, 'users/' + userId), async (snapshot) => {
    const value = snapshot.val();

    if (value && value.deviceId !== deviceId) {
      authStore.setIsSessionConflicted(true);
      await LogOut();
      localStorage.clear();
      sessionStorage.clear();
      window.sessionStorage.setItem('isSessionConflicted', 'true');
    }
  });
}
