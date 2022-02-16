import SearchForm from '@/components/atoms/SearchForm';
import { fireEvent, render, screen } from '@testing-library/react';

describe('SearchForm.tsx', () => {
  let onChangeMock: jest.Mock;
  beforeEach(() => {
    onChangeMock = jest.fn();
  });

  afterEach(() => {
    onChangeMock.mockClear();
  });
  it('should correctly render', () => {
    const { container } = render(
      <SearchForm value={'sample'} onChange={onChangeMock} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should correctly call onClick', () => {
    const TEST_ID = 'TEST_ID';
    render(
      <SearchForm value={'sample'} onChange={onChangeMock} testId={TEST_ID} />,
    );
    fireEvent.change(screen.getByTestId(TEST_ID), {
      target: {
        value: 'test',
      },
    });
    expect(onChangeMock).toBeCalled();
  });
});
