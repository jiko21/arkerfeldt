import { PostCreateForm } from '@/components/organisms/PostCreateForm';
import { PublishStatus } from '@/const/post';
import { fireEvent, render, screen } from '@testing-library/react';

describe('PostCreateForm.tsx', () => {
  let submitMock: jest.Mock;
  beforeEach(() => {
    submitMock = jest.fn();
  });

  afterEach(() => {
    submitMock.mockClear();
  });

  it('should correctly render', () => {
    const props = {
      submit: submitMock,
    };
    const { container } = render(<PostCreateForm {...props} />);

    expect(container).toMatchSnapshot();
  });

  it('should correctly change input', () => {
    const props = {
      submit: submitMock,
    };
    const { container } = render(<PostCreateForm {...props} />);

    const textarea = screen.getByTestId('post-create-form-textarea');
    fireEvent.change(textarea, {
      target: {
        value: 'aaaaa',
      },
    });

    expect(container).toMatchSnapshot();
  });

  it('should correctly submit', () => {
    const props = {
      submit: submitMock,
    };
    const { container } = render(<PostCreateForm {...props} />);

    const textarea = screen.getByTestId('post-create-form-textarea');
    fireEvent.change(textarea, {
      target: {
        value: 'content',
      },
    });

    const titleText = screen.getByTestId('title-text');
    fireEvent.change(titleText, {
      target: {
        value: 'title',
      },
    });

    const submitButton = screen.getByTestId('button-area');
    fireEvent.click(submitButton);
    expect(submitMock).toBeCalledWith({
      title: 'title',
      content: 'content',
      status: PublishStatus.UNPUBLISHED,
    });
  });
});
