import TextForm from '@/components/atoms/TextForm';
import { fireEvent, render, screen } from '@testing-library/react';

describe('TextForm.tsx', () => {
  let onChangeMock: jest.Mock;
  beforeEach(() => {
    onChangeMock = jest.fn();
  });

  afterEach(() => {
    onChangeMock.mockClear();
  });
  it('should correctly render', () => {
    const { container } = render(
      <TextForm type={'email'} value={'sample'} onChange={onChangeMock} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should correctly render when text is not empty', () => {
    const { container } = render(
      <TextForm type={'email'} value={'sample'} onChange={onChangeMock} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('should correctly onChange when value changed', async () => {
    const TEST_ID = 'TEST_ID';
    render(
      <TextForm
        type={'email'}
        value={''}
        onChange={onChangeMock}
        testId={TEST_ID}
      />,
    );
    const input = await screen.findByTestId(TEST_ID);
    fireEvent.change(input, {
      target: {
        value: 'test',
      },
    });
    expect(onChangeMock).toBeCalled();
  });
});
