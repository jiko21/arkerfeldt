import GithubButton from '@/components/atoms/GithubButton';
import { fireEvent, render, screen } from '@testing-library/react';

describe('GithubButton.tsx', () => {
  let onClickMock: jest.Mock;
  beforeEach(() => {
    onClickMock = jest.fn();
  });

  afterEach(() => {
    onClickMock.mockClear();
  });
  it('should correctly render', () => {
    const { container } = render(
      <GithubButton onClick={onClickMock}>Sample</GithubButton>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should correctly call onClick', () => {
    const TEST_ID = 'TEST_ID';
    render(
      <GithubButton onClick={onClickMock} testId={TEST_ID}>
        Sample
      </GithubButton>,
    );
    fireEvent.click(screen.getByTestId(TEST_ID));
    expect(onClickMock).toBeCalled();
  });
});
