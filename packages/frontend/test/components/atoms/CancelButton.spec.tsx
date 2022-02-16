import CancelButton from '@/components/atoms/CancelButton';
import { fireEvent, render, screen } from '@testing-library/react';

describe('CancelButton.tsx', () => {
  let onClickMock: jest.Mock;
  beforeEach(() => {
    onClickMock = jest.fn();
  });

  afterEach(() => {
    onClickMock.mockClear();
  });
  it('should correctly render', () => {
    const { container } = render(
      <CancelButton onClick={onClickMock}>Sample</CancelButton>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should correctly call onClick', () => {
    const TEST_ID = 'TEST_ID';
    render(
      <CancelButton onClick={onClickMock} testId={TEST_ID}>
        Sample
      </CancelButton>,
    );
    fireEvent.click(screen.getByTestId(TEST_ID));
    expect(onClickMock).toBeCalled();
  });
});
