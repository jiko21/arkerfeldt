import DefaultButton from '@/components/atoms/DefaultButton';
import { fireEvent, render, screen } from '@testing-library/react';

describe('DefaultButton.tsx', () => {
  let onClickMock: jest.Mock;
  beforeEach(() => {
    onClickMock = jest.fn();
  });

  afterEach(() => {
    onClickMock.mockClear();
  });

  it('should correctly render', () => {
    const { container } = render(
      <DefaultButton onClick={onClickMock}>Sample</DefaultButton>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should correctly call onClick', () => {
    const TEST_ID = 'TEST_ID'
    render(<DefaultButton onClick={onClickMock} testId={TEST_ID}>Sample</DefaultButton>);
    fireEvent.click(screen.getByTestId(TEST_ID));
    expect(onClickMock).toBeCalled();
  });
});
