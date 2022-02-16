import TextLink from '@/components/atoms/TextLink';
import { render } from '@testing-library/react';

describe('TextLink.tsx', () => {
  let onClickMock: jest.Mock;
  beforeEach(() => {
    onClickMock = jest.fn();
  });

  afterEach(() => {
    onClickMock.mockClear();
  });
  it('should correctly render', () => {
    const { container } = render(
      <TextLink href="/" fontSize={20}>
        Sample
      </TextLink>,
    );

    expect(container).toMatchSnapshot();
  });
});
