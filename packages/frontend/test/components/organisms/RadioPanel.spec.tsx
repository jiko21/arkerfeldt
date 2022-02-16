import RadioPanel from '@/components/organisms/RadioPanel';
import { fireEvent, render, screen } from '@testing-library/react';

describe('RadioPanel.tsx', () => {
  let onApplyMock: jest.Mock;
  beforeEach(() => {
    onApplyMock = jest.fn();
  });

  afterEach(() => {
    onApplyMock.mockClear();
  });

  it('should correctly render', () => {
    const props = {
      onApply: onApplyMock,
      items: ['すべて', '公開中', '未公開'],
      value: 'すべて',
    };
    const { container } = render(<RadioPanel {...props} />);

    expect(container).toMatchSnapshot();
  });

  it('should correctly open panels', () => {
    const props = {
      onApply: onApplyMock,
      items: ['すべて', '公開中', '未公開'],
      value: 'すべて',
    };
    const { container } = render(<RadioPanel {...props} />);
    fireEvent.click(screen.getByTestId('open-btn'));
    expect(container).toMatchSnapshot();
  });

  it('should correctly close panels with cancel', () => {
    const props = {
      onApply: onApplyMock,
      items: ['すべて', '公開中', '未公開'],
      value: 'すべて',
    };
    const { container } = render(<RadioPanel {...props} />);
    fireEvent.click(screen.getByTestId('open-btn'));
    fireEvent.click(screen.getByTestId('cancel-btn'));
    expect(container).toMatchSnapshot();
    expect(onApplyMock).not.toBeCalled();
  });

  it('should correctly close panels with apply', () => {
    const props = {
      onApply: onApplyMock,
      items: ['すべて', '公開中', '未公開'],
      value: 'すべて',
    };
    const { container } = render(<RadioPanel {...props} />);
    fireEvent.click(screen.getByTestId('open-btn'));
    fireEvent.click(screen.getByTestId('enable-btn'));
    expect(container).toMatchSnapshot();
    expect(onApplyMock).toBeCalled();
  });
});
