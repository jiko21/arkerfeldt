import PostItem from '@/components/molecules/PostItem';
import { PublishStatus } from '@/const/post';
import { fireEvent, render, screen } from '@testing-library/react';

describe('PostItem.tsx', () => {
  let onCheckedHandlerMock: jest.Mock;
  beforeEach(() => {
    onCheckedHandlerMock = jest.fn();
  });

  afterEach(() => {
    onCheckedHandlerMock.mockClear();
  });
  it('should correctly render (checked: true)', () => {
    const props = {
      checked: true,
      link: '#',
      onChecked: onCheckedHandlerMock,
      post: {
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
    };
    const { container } = render(<PostItem {...props} />);

    expect(container).toMatchSnapshot();
  });

  it('should correctly render (checked: false)', () => {
    const props = {
      checked: true,
      link: '#',
      onChecked: onCheckedHandlerMock,
      post: {
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
    };
    const { container } = render(<PostItem {...props} />);;

    expect(container).toMatchSnapshot();
  });

  it('should correctly call onClick', () => {
    const props = {
      checked: true,
      link: '#',
      onChecked: onCheckedHandlerMock,
      post: {
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
    };
    render(<PostItem {...props} />);
    fireEvent.click(screen.getByTestId('postItem-checkbox'));
    expect(onCheckedHandlerMock).toBeCalled();
  });
});
