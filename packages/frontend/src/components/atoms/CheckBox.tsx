/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as React from 'react';
import { Color } from '@/const/color';

const checkBoxStyle = css`
  input {
    display: none;
  }

  input + label:before {
    border: 2px solid;
    border-color: ${Color.BLACK};
    box-sizing: border-box;
    content: '';
    display: block;
    height: 24px;
    width: 24px;
  }
  input:checked + label:after {
    box-sizing: border-box;
    content: '';
    display: block;
    width: 18px;
    height: 9px;
    margin-top: -9px;
    top: 28px;
    left: 20px;
    border-bottom: 3px solid;
    border-left: 3px solid;
    border-color: ${Color.ENABLE};
    position: absolute;
    transform: rotate(-45deg);
  }
`;

interface IProps {
  checked: boolean;
  onClick: (checked: boolean) => void;
  testId?: string;
}

const CheckBox: React.FC<IProps> = ({ checked, onClick, testId }) => (
  <div css={checkBoxStyle}>
    <input type="checkbox" checked={checked} readOnly />
    <label
      data-testid={testId}
      onClick={() => {
        onClick(!checked);
      }}
    ></label>
  </div>
);

export default CheckBox;
