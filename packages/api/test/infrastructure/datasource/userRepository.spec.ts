import { createUser, findUserByUid } from '../../../src/infrastructure/datasource/userRepository';
import { prismaMock } from '../../../test_client';

describe('userRepository.ts', () => {
  describe('findUserByUid', () => {
    it('correctly calls when user exists', async () => {
      const UID = 'abc';
      const EXPECTED = {
        uid: UID,
        displayName: 'taro',
        photoUrl: 'aaa',
      };
      prismaMock.user.findFirst.mockResolvedValue(EXPECTED);
      const actual = await findUserByUid(UID);
      expect(actual).toBe(EXPECTED);
      expect(prismaMock.user.findFirst).toBeCalledWith({
        where: {
          uid: UID,
        },
      });
    });

    it('correctly calls when user not exists', async () => {
      const UID = 'abc';
      prismaMock.user.findFirst.mockResolvedValue(null);
      const actual = await findUserByUid(UID);
      expect(actual).toBe(null);
      expect(prismaMock.user.findFirst).toBeCalledWith({
        where: {
          uid: UID,
        },
      });
    });

    it('fails when error occured', async () => {
      const UID = 'abc';
      prismaMock.user.findFirst.mockRejectedValue({ msg: 'error' });
      try {
        await findUserByUid(UID);
      } catch (e) {
        expect(prismaMock.user.findFirst).toBeCalledWith({
          where: {
            uid: UID,
          },
        });
      }
    });
  });

  describe('createUser', () => {
    it('correctly calls when user successfully created', async () => {
      const USER = {
        uid: 'aaa',
        displayName: 'taro',
        photoUrl: 'aaa',
      };
      // prismaMock.user.create.mockResolvedValue({});
      await createUser(USER);
      expect(prismaMock.user.create).toBeCalledWith({
        data: USER,
      });
    });

    it('fails when error occured', async () => {
      const USER = {
        uid: 'aaa',
        displayName: 'taro',
        photoUrl: 'aaa',
      };
      prismaMock.user.create.mockRejectedValue({ msg: 'error' });
      try {
        await createUser(USER);
      } catch (e) {
        expect(prismaMock.user.create).toBeCalledWith({
          data: USER,
        });
      }
    });
  });
});
