import {
  findPostById,
  findPosts,
  createPost,
  updatePost,
} from '../../../src/infrastructure/datasource/postRepository';
import { PublishStatus } from '../../../src/types/Post';
import { prismaMock } from '../../../test_client';

describe('postRepository.ts', () => {
  describe('findPostById', () => {
    it('correctly calls when post exists', async () => {
      const ID = 1;
      const EXPECTED = {
        id: ID,
        title: 'A',
        content: 'AAA',
        createdAt: new Date('2020-12-12 12:00:00'),
        updatedAt: new Date('2020-12-12 12:00:00'),
        isDelete: false,
        status: PublishStatus.PUBLISHED,
        authorId: 'aaa',
      };
      prismaMock.post.findFirst.mockResolvedValue(EXPECTED);
      const actual = await findPostById(ID, 'UID');
      expect(actual).toBe(EXPECTED);
      expect(prismaMock.post.findFirst).toBeCalledWith({
        where: {
          authorId: 'UID',
          id: ID,
        },
        include: { author: true },
      });
    });

    it('correctly calls when user not exists', async () => {
      const ID = 1;
      prismaMock.post.findFirst.mockResolvedValue(null);
      const actual = await findPostById(ID, 'UID');
      expect(actual).toBe(null);
      expect(prismaMock.post.findFirst).toBeCalledWith({
        where: {
          authorId: 'UID',
          id: ID,
        },
        include: { author: true },
      });
    });

    it('fails when error occurred', async () => {
      const ID = 1;
      prismaMock.post.findFirst.mockRejectedValue({ msg: 'error' });
      try {
        await findPostById(ID,  'UID');
      } catch (e) {
        expect(prismaMock.post.findFirst).toBeCalledWith({
          where: {
            authorId: 'UID',
            id: ID,
          },
          include: { author: true },
        });
      }
    });
  });

  describe('findPosts', () => {
    it('correctly calls when post exists', async () => {
      const params = {
        title: 'a',
        status: PublishStatus.PUBLISHED,
      };

      const EXPECTED = {
        id: 1,
        title: 'A',
        content: 'AAA',
        createdAt: new Date('2020-12-12 12:00:00'),
        updatedAt: new Date('2020-12-12 12:00:00'),
        isDelete: false,
        status: PublishStatus.PUBLISHED,
        authorId: 'aaa',
      };
      prismaMock.post.findMany.mockResolvedValue([EXPECTED]);
      const actual = await findPosts(params);
      expect(actual).toEqual([EXPECTED]);
      expect(prismaMock.post.findMany).toBeCalledWith({
        where: {
          AND: [
            {
              title: params.title,
            },
            {
              status: params.status,
            },
            {
              isDelete: false,
            },
          ],
        },
        include: { author: true },
      });
    });

    it('correctly calls when user not exists', async () => {
      const params = {
        title: 'a',
        status: PublishStatus.PUBLISHED,
      };
      prismaMock.post.findMany.mockResolvedValue([]);
      const actual = await findPosts(params);
      expect(actual).toEqual([]);
      expect(prismaMock.post.findMany).toBeCalledWith({
        where: {
          AND: [
            {
              title: params.title,
            },
            {
              status: params.status,
            },
            {
              isDelete: false,
            },
          ],
        },
        include: { author: true },
      });
    });

    it('fails when error occured', async () => {
      const params = {
        title: 'a',
        status: PublishStatus.PUBLISHED,
      };

      prismaMock.post.findMany.mockRejectedValue({ msg: 'error' });
      try {
        await findPosts(params);
      } catch (e) {
        expect(prismaMock.post.findMany).toBeCalledWith({
          where: {
            AND: [
              {
                title: params.title,
              },
              {
                status: params.status,
              },
              {
                isDelete: false,
              },
            ],
          },
          include: { author: true },
        });
      }
    });
  });

  describe('createPost', () => {
    it('correctly calls when post successfully created', async () => {
      const POST = {
        id: 1,
        title: 'A',
        content: 'AAA',
        createdAt: new Date('2020-12-12 12:00:00'),
        updatedAt: new Date('2020-12-12 12:00:00'),
        isDelete: false,
        status: PublishStatus.PUBLISHED,
        author: {
          connect: {
            uid: 'aaa',
          },
        },
      };
      // prismaMock.post.create.mockResolvedValue({} as any);
      await createPost(POST);
      expect(prismaMock.post.create).toBeCalledWith({
        data: POST,
      });
    });

    it('fails when error occured', async () => {
      const POST = {
        id: 1,
        title: 'A',
        content: 'AAA',
        createdAt: new Date('2020-12-12 12:00:00'),
        updatedAt: new Date('2020-12-12 12:00:00'),
        isDelete: false,
        status: PublishStatus.PUBLISHED,
        author: {
          connect: {
            uid: 'aaa',
          },
        },
      };
      prismaMock.post.create.mockRejectedValue({ msg: 'error' });
      try {
        await createPost(POST);
      } catch (e) {
        expect(prismaMock.post.create).toBeCalledWith({
          data: POST,
        });
      }
    });
  });

  describe('updatePost', () => {
    it('correctly calls when post successfully update', async () => {
      const ID = 1;
      const postUpdateInput = {
        title: 'A',
        content: 'AAA',
        status: PublishStatus.PUBLISHED,
      };
      // prismaMock.post.update.mockResolvedValue({} as any);
      await updatePost(ID, postUpdateInput);
      expect(prismaMock.post.update).toBeCalledWith({
        where: { id: ID },
        data: {
          ...postUpdateInput,
        },
      });
    });

    it('fails when error occured', async () => {
      const ID = 1;
      const postUpdateInput = {
        title: 'A',
        content: 'AAA',
        status: PublishStatus.PUBLISHED,
      };
      prismaMock.post.update.mockRejectedValue({ msg: 'error' });
      try {
        await updatePost(ID, postUpdateInput);
      } catch (e) {
        expect(prismaMock.post.update).toBeCalledWith({
          where: { id: ID },
          data: {
            ...postUpdateInput,
          },
        });
      }
    });
  });
});
