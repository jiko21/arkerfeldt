import { useLogin, useLogout } from '@/hooks/useAuth';
import { signIn, signOut } from '@/service/auth/userService';
import { act, renderHook } from '@testing-library/react-hooks';
import { Provider } from '@/const/auth';

jest.mock('@/service/auth/userService');

const pushMock = jest.fn();

jest.mock('next/router', () => ({
  useRouter() {
    return {
      push: pushMock,
    };
  },
}));

jest.mock('@/service/auth/userService');

describe('@/hooks/useAuth', () => {
  beforeEach(() => jest.clearAllMocks());
  describe('useLogin', () => {
    it('should return correctly with login success', async () => {
      (signIn as jest.Mock).mockResolvedValue({ msg: 'ok' });
      const { result, waitForNextUpdate } = renderHook(() => useLogin());
      expect(result.current.isError).toBe(false);
      expect(result.current.inProgress).toBe(false);

      // exec login
      act(() => {
        result.current.onLogin(Provider.GITHUB);
      });
      //
      expect(result.current.isError).toBe(false);
      expect(result.current.inProgress).toBe(true);

      await waitForNextUpdate();

      expect(result.current.isError).toBe(false);
      expect(result.current.inProgress).toBe(false);
      expect(pushMock).toBeCalledWith('/posts');
    });

    it('should return correctly with login failure', async () => {
      (signIn as jest.Mock).mockRejectedValue({ msg: 'fail' });
      const { result, waitForNextUpdate } = renderHook(() => useLogin());
      expect(result.current.isError).toBe(false);
      expect(result.current.inProgress).toBe(false);

      // exec login
      act(() => {
        result.current.onLogin(Provider.GITHUB);
      });
      //
      expect(result.current.isError).toBe(false);
      expect(result.current.inProgress).toBe(true);

      await waitForNextUpdate();

      expect(result.current.isError).toBe(true);
      expect(result.current.inProgress).toBe(false);
      expect(pushMock).not.toBeCalled();
    });
  });

  describe('useLogout', () => {
    it('should return correctly with logout success', async () => {
      (signOut as jest.Mock).mockResolvedValue({ msg: 'ok' });
      const { result, waitForNextUpdate } = renderHook(() => useLogout());
      expect(result.current.isError).toBe(false);
      expect(result.current.inProgress).toBe(false);

      // exec login
      act(() => {
        result.current.onSignOut();
      });
      //
      expect(result.current.isError).toBe(false);
      expect(result.current.inProgress).toBe(true);

      await waitForNextUpdate();

      expect(result.current.isError).toBe(false);
      expect(result.current.inProgress).toBe(false);
      expect(pushMock).toBeCalledWith('/');
    });

    it('should return correctly with logout failure', async () => {
      (signOut as jest.Mock).mockRejectedValue({ msg: 'fail' });
      const { result, waitForNextUpdate } = renderHook(() => useLogout());
      expect(result.current.isError).toBe(false);
      expect(result.current.inProgress).toBe(false);

      // exec login
      act(() => {
        result.current.onSignOut();
      });
      //
      expect(result.current.isError).toBe(false);
      expect(result.current.inProgress).toBe(true);

      await waitForNextUpdate();

      expect(result.current.isError).toBe(true);
      expect(result.current.inProgress).toBe(false);
      expect(pushMock).not.toBeCalled();
    });
  });
});
