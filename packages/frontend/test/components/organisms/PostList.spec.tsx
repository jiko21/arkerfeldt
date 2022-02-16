import PostList from '@/components/organisms/PostList';
import { PublishStatus } from '@/const/post';
import { render } from '@testing-library/react';

describe('PostList.spec.tsx', () => {
  it('should correctly render', () => {
    const props = {
      posts: [
        {
          id: 1,
          title: '〇〇は結婚していた？彼女の名前は××？',
          content: '',
          createdAt: new Date('2020/12/11 10:00'),
          updatedAt: new Date('2020/12/11 10:00'),
          isDelete: false,
          status: PublishStatus.PUBLISHED,
          authorId: '123',
          author: {
            displayName: 'jiko21',
          },
        },
        {
          id: 2,
          title: '〇〇は結婚していた？彼女の名前は××？',
          content: '',
          createdAt: new Date('2020/12/11 10:00'),
          updatedAt: new Date('2020/12/11 10:00'),
          isDelete: false,
          status: PublishStatus.UNPUBLISHED,
          authorId: '123',
          author: {
            displayName: 'jiko21',
          },
        },
      ],
    };
    const { container } = render(<PostList {...props} />);

    expect(container).toMatchSnapshot();
  });
});
