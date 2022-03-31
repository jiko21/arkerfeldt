import { fireEvent, render, screen } from '@testing-library/react';
import SelectableButton from '@/components/atoms/SelectableButton';
import { candidates, PublishStatus } from '@/const/post';

describe('SelectableButton.tsx', () => {
  const onSubmitMock = jest.fn();

  it('should correctly render when list is closed', () => {
    const { container } = render(
      <SelectableButton
        onSubmit={onSubmitMock}
        candidates={candidates}
        initValue={PublishStatus.UNPUBLISHED}
      />,
    );
    expect(screen.getByText('未公開のまま保存')).toBeTruthy();
    expect(screen.queryByTestId('selectable-area')).toBeFalsy();
    expect(container).toMatchSnapshot();
  });

  it('should correctly render when list is open', () => {
    const { container } = render(
      <SelectableButton
        onSubmit={onSubmitMock}
        candidates={candidates}
        initValue={PublishStatus.UNPUBLISHED}
      />,
    );

    fireEvent.click(screen.getByTestId('button-tapped'));
    expect(screen.getByText('未公開のまま保存')).toBeTruthy();
    expect(screen.queryByTestId('selectable-area')).toBeTruthy();
    expect(container).toMatchSnapshot();

    Object.values(candidates).forEach((item) => {
      expect(screen.getByText(item)).toBeTruthy();
    });
  });

  it('should correctly call `onItemClick`', () => {
    render(
      <SelectableButton
        onSubmit={onSubmitMock}
        candidates={candidates}
        initValue={PublishStatus.UNPUBLISHED}
      />,
    );

    fireEvent.click(screen.getByTestId('button-tapped'));
    fireEvent.click(screen.getByTestId('candidate-PUBLISHED'));
    expect(screen.getByText('公開する')).toBeTruthy();
  });

  it('should correctly call `onClick`', () => {
    render(
      <SelectableButton
        onSubmit={onSubmitMock}
        candidates={candidates}
        initValue={PublishStatus.UNPUBLISHED}
      />,
    );

    fireEvent.click(screen.getByTestId('button-area'));

    expect(onSubmitMock).toBeCalled();
  });
});
