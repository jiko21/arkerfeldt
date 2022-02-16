import EnableButton from '@/components/atoms/EnableButton';
import { fireEvent, render, screen } from '@testing-library/react';

describe('EnableButton.tsx', () => {
  let onClickMock: jest.Mock;
  beforeEach(() => {
    onClickMock = jest.fn();
  });

  afterEach(() => {
    onClickMock.mockClear();
  });
  it('should correctly render', () => {
    const { container } = render(
      <EnableButton onClick={onClickMock}>Sample</EnableButton>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should correctly call onClick', () => {
    const TEST_ID = 'TEST_ID';
    render(
      <EnableButton onClick={onClickMock} testId={TEST_ID}>
        Sample
      </EnableButton>,
    );
    fireEvent.click(screen.getByTestId(TEST_ID));
    expect(onClickMock).toBeCalled();
  });
});
