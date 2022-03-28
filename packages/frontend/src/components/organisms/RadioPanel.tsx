/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useRef } from 'react';
import { FC, useState } from 'react';
import { Color } from '@/const/color';
import CancelButton from '@/components/atoms/CancelButton';
import EnableButton from '@/components/atoms/EnableButton';
import RadioButtons from '@/components/molecules/RadioButtons';
import { Hover } from '@/const/style';
import { usePanel } from '@/hooks/usePanel';

const buttonStyle = css`
  background-color: ${Color.DISABLE};
  border: none;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  color: ${Color.ENABLE};
  font-size: 14px;
  font-weight: 700;
  height: 30px;
  min-width: 80px;

  &:hover {
    background-color: ${Color.DISABLE_HOVER};
  }
`;

type ButtonProps = {
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
  <button css={buttonStyle} onClick={onClick} data-testid='open-btn'>
    {children}
  </button>
);

const containerStyle = css`
  align-items: center;
  background: ${Color.DISABLE};
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  height: 180px;
  justify-content: space-around;
  width: 240px;
  position: absolute;

  span {
    color: ${Color.BLACK};
    font-size: 14px;
    font-weight: 700;
  }
`;

const buttonForm = css`
  display: flex;
  flex-direction: column;
  width: ${240 - 32 * 2}px;
`;

const buttonWrapper = css`
  display: flex;
  justify-content: space-between;
  width: ${240 - 32 * 2}px;
`;

const RadioPanelForm: FC<{
  onApply: (value: string) => void;
  toggle: () => void;
  items: string[];
  value: string;
}> = ({ toggle, value, items, onApply }) => {
  const [radioValue, updateRadioValue] = useState(value);
  return (
    <div css={containerStyle}>
      <span>配信ステータス</span>
      <div css={buttonForm}>
        <RadioButtons
          items={items}
          value={radioValue}
          name={'status'}
          onChangeHandler={updateRadioValue}
        />
      </div>
      <div css={buttonWrapper}>
        <CancelButton onClick={toggle} testId='cancel-btn'>
          キャンセル
        </CancelButton>
        <EnableButton
          testId='enable-btn'
          onClick={() => {
            toggle();
            onApply(radioValue);
          }}
        >
          選択
        </EnableButton>
      </div>
    </div>
  );
};

type Props = {
  onApply: (value: string) => void;
  items: string[];
  value: string;
};

const RadioPanel: FC<Props> = ({ onApply, items, value }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isOpen, toggle } = usePanel(ref);

  return (
    <div ref={ref} css={css`
      z-index: ${Hover.TOP};
    `}>
      <Button onClick={toggle}>status: {value}</Button>
      {isOpen && (<RadioPanelForm onApply={onApply} toggle={toggle} items={items} value={value} />)}
    </div>
  );
};

export default RadioPanel;
