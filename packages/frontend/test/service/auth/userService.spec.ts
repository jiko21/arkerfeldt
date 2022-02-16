import { signInWithEmailAndPassword, signInWithPopup } from '@firebase/auth';
import { postRequest } from '@/service/api';
import { signIn, signOut } from '@/service/auth/userService';
import { Provider } from '@/const/auth';

jest.mock('@/service/api');
jest.mock('@firebase/auth');

describe('userService', () => {
  beforeEach(() => jest.clearAllMocks());
  describe('signIn', () => {
    const ID = 'ID';
    it('should correctly call(Provider)', async () => {
      (signInWithPopup as jest.Mock).mockResolvedValue({
        user: {
          getIdToken: () => ID,
        },
      });
      await signIn(Provider.GITHUB);
      expect(postRequest).toBeCalledWith('/api/login', {
        id: ID,
      });
    });
    it('should correctly call(email)', async () => {
      (signInWithEmailAndPassword as jest.Mock).mockResolvedValue({
        user: {
          getIdToken: () => ID,
        },
      });
      await signIn(Provider.EMAIL, 'email', 'password');
      expect(postRequest).toBeCalledWith('/api/login', {
        id: ID,
      });
    });
  });
  describe('signOut', () => {
    it('should correctly call', async () => {
      await signOut();
      expect(postRequest).toBeCalledWith('/api/logout');
    });
  });
});
