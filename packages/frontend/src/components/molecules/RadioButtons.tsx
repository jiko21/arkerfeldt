/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Color } from '@/const/color';

const wrapperStyle = css`
  input {
    display: none;
  }

  input + label {
    color: ${Color.LIGHT_TEXT};
    padding-left: 20px;
    position: relative;
    margin-right: 20px;
  }

  input + label:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 12px;
    height: 12px;
    border: 1px solid ${Color.BLACK};
    border-radius: 50%;
  }

  input:checked + label {
    color: ${Color.ENABLE};
    font-weight: 700;
  }

  input:checked + label:after {
    content: '';
    display: block;
    position: absolute;
    top: 4px;
    left: 4px;
    width: 6px;
    height: 6px;
    background: ${Color.ENABLE};
    border-radius: 50%;
  }
`;

const labelStyle = css`
  margin-left: 12px;
`;

interface IProps {
  items: string[];
  value: string;
  name: string;
  onChangeHandler: (value: string) => void;
}

const RadioButtons: React.FC<IProps> = ({
  items,
  value,
  name,
  onChangeHandler,
}) => (
  <>
    {items.map((item) => (
      <div key={item} css={wrapperStyle}>
        <input
          type="radio"
          id={item}
          name={name}
          value={item}
          onChange={() => {
            onChangeHandler(item);
          }}
          checked={item === value}
          data-testid={`radio-btn-${item}`}
        />
        <label css={labelStyle} htmlFor={item}>
          {item}
        </label>
      </div>
    ))}
  </>
);

export default RadioButtons;
