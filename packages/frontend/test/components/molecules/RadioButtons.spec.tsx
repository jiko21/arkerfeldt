import RadioButtons from '@/components/molecules/RadioButtons';
import { fireEvent, render, screen } from '@testing-library/react';

describe('CheckBox.tsx', () => {
  let onChangeHandlerMock: jest.Mock;
  beforeEach(() => {
    onChangeHandlerMock = jest.fn();
  });

  afterEach(() => {
    onChangeHandlerMock.mockClear();
  });
  it('should correctly render (checked: true)', () => {
    const props = {
      value: 'すべて',
      name: 'status',
      onChangeHandler: onChangeHandlerMock,
      items: ['すべて', '公開中', '未公開'],
    };
    const { container } = render(<RadioButtons {...props} />);

    expect(container).toMatchSnapshot();
  });

  it('should correctly call onClick', () => {
    const props = {
      value: 'すべて',
      name: 'status',
      onChangeHandler: onChangeHandlerMock,
      items: ['すべて', '公開中', '未公開'],
    };
    render(<RadioButtons {...props} />);
    fireEvent.click(screen.getByTestId('radio-btn-公開中'));
    expect(onChangeHandlerMock).toBeCalledWith('公開中');
  });
});
