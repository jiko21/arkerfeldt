import {
  AuthProvider,
  GithubAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  User,
} from '@firebase/auth';
import { getAuth } from 'firebase/auth';
import { getApp } from '@/service/auth/firebase';
import { postRequest } from '@/service/api';
import { Provider } from '@/const/auth';

const getFirebaseAuth = () => getAuth(getApp());
const _signInWithProvider = async (provider: AuthProvider): Promise<User> => {
  const result = await signInWithPopup(getFirebaseAuth(), provider);
  return result.user;
};

const _signInWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<User> => {
  const result = await signInWithEmailAndPassword(
    getFirebaseAuth(),
    email,
    password,
  );
  return result.user;
};

export const getCurrentUser = (): User | null => getFirebaseAuth().currentUser;

export const signIn = async (
  authProvider: Provider,
  email?: string,
  password?: string,
) => {
  const user = await (async () => {
    switch (authProvider) {
      case Provider.GITHUB:
        const provider = new GithubAuthProvider();
        return await _signInWithProvider(provider);
      case Provider.EMAIL:
        return await _signInWithEmailAndPassword(email!, password!);
    }
  })();

  const id = await user.getIdToken();
  return await postRequest('/api/login', {
    id,
  });
};

export const signOut = async (): Promise<void> => {
  await postRequest('/api/logout');
};
