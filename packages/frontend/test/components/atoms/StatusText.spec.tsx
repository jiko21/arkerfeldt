import StatusText from '@/components/atoms/StatusText';
import { render } from '@testing-library/react';

describe('StatusText.tsx', () => {
  let onClickMock: jest.Mock;
  beforeEach(() => {
    onClickMock = jest.fn();
  });

  afterEach(() => {
    onClickMock.mockClear();
  });
  it('should correctly render', () => {
    const { container } = render(<StatusText>Sample</StatusText>);

    expect(container).toMatchSnapshot();
  });
});
