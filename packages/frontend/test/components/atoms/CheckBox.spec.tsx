import CheckBox from '@/components/atoms/CheckBox';
import { fireEvent, render, screen } from '@testing-library/react';

describe('CheckBox.tsx', () => {
  let onClickMock: jest.Mock;
  beforeEach(() => {
    onClickMock = jest.fn();
  });

  afterEach(() => {
    onClickMock.mockClear();
  });
  it('should correctly render (checked: true)', () => {
    const props = {
      checked: true,
      onClick: onClickMock,
    };
    const { container } = render(<CheckBox {...props} />);

    expect(container).toMatchSnapshot();
  });

  it('should correctly render (checked: false)', () => {
    const props = {
      checked: false,
      onClick: onClickMock,
    };
    const { container } = render(<CheckBox {...props} />);

    expect(container).toMatchSnapshot();
  });

  it('should correctly call onClick', () => {
    const TEST_ID = 'TEST_ID';
    const props = {
      checked: false,
      onClick: onClickMock,
      testId: TEST_ID,
    };

    render(<CheckBox {...props} />);
    fireEvent.click(screen.getByTestId(TEST_ID));
    expect(onClickMock).toBeCalled();
  });
});
