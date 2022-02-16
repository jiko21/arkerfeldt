import { signIn, signOut } from '@/service/auth/userService';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { Provider } from '@/const/auth';

export const useLogin = () => {
  const router = useRouter();
  const [isError, setError] = useState(false);
  const [inProgress, setProgress] = useState(false);
  const onLogin = useCallback(
    async (authProvider: Provider, email?: string, password?: string) => {
      setError(false);
      setProgress(true);
      try {
        await signIn(authProvider, email, password);
        router.push('/posts');
      } catch (e) {
        setError(true);
      }
      setProgress(false);
    },
    [router],
  );

  return {
    onLogin,
    isError,
    inProgress,
  };
};

export const useLogout = () => {
  const router = useRouter();
  const [isError, setError] = useState(false);
  const [inProgress, setProgress] = useState(false);
  const onSignOut = useCallback(async () => {
    setError(false);
    setProgress(true);
    try {
      await signOut();
      router.push('/');
    } catch (e) {
      setError(true);
    }
    setProgress(false);
  }, [router]);

  return {
    onSignOut,
    isError,
    inProgress,
  };
};
