import { fireEvent, render, screen } from '@testing-library/react';
import SelectableButton from '@/components/atoms/SelectableButton';

describe('SelectableButton.tsx', () => {
  const onClickMock = jest.fn();
  const onItemClickMock = jest.fn();

  const CANDIDATES = [
    {
      text: '未公開のまま保存',
      value: 'UNPUBLISHED',
    },
    {
      text: '公開する',
      value: 'PUBLISH',
    },
  ];

  it('should correctly render when list is closed', () => {
    const { container } = render(
      <SelectableButton
        onClick={onClickMock}
        onItemClick={onItemClickMock}
        candidates={CANDIDATES}
      >
        Sample
      </SelectableButton>,
    );
    expect(screen.getByText('Sample')).toBeTruthy();
    expect(screen.queryByTestId('selectable-area')).toBeFalsy();
    expect(container).toMatchSnapshot();
  });

  it('should correctly render when list is open', () => {
    const { container } = render(
      <SelectableButton
        onClick={onClickMock}
        onItemClick={onItemClickMock}
        candidates={CANDIDATES}
      >
        Sample
      </SelectableButton>,
    );

    fireEvent.click(screen.getByTestId('button-tapped'));
    expect(screen.getByText('Sample')).toBeTruthy();
    expect(screen.queryByTestId('selectable-area')).toBeTruthy();
    expect(container).toMatchSnapshot();

    CANDIDATES.forEach((item) => {
      expect(screen.getByText(item.text)).toBeTruthy();
    });
  });

  it('should correctly call `onItemClick`', () => {
    render(
      <SelectableButton
        onClick={onClickMock}
        onItemClick={onItemClickMock}
        candidates={CANDIDATES}
      >
        Sample
      </SelectableButton>,
    );

    fireEvent.click(screen.getByTestId('button-tapped'));
    fireEvent.click(screen.getByTestId('candidate-PUBLISH'));

    expect(onItemClickMock).toBeCalled();
  });

  it('should correctly call `onClick`', () => {
    render(
      <SelectableButton
        onClick={onClickMock}
        onItemClick={onItemClickMock}
        candidates={CANDIDATES}
      >
        Sample
      </SelectableButton>,
    );

    fireEvent.click(screen.getByTestId('button-area'));

    expect(onClickMock).toBeCalled();
  });
});
