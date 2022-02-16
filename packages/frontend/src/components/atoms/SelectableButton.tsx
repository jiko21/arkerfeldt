/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC, useRef, useState } from 'react';
import { Color } from '@/const/color';
import styled from '@emotion/styled';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const buttonStyle = css`
  align-items: center;
  background-color: ${Color.ENABLE};
  border: none;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  color: #ffffff;
  display: flex;
  font-size: 14px;
  font-weight: 700;
  height: 30px;
  justify-content: flex-start;
  min-width: 240px;
  padding: 0;

  &:hover {
    background-color: ${Color.ENABLE_HOVER};
  }
`;

const svgWrapper = css`
  align-items: center;
  display: flex;
  border-right: 1px solid ${Color.WHITE};
  height: 100%;
  justify-content: center;
  width: 30px;
`;

const childWrapper = css`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Ul = styled.ul<{ width?: number }>`
  border-radius: 6px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  list-style: none;
  margin: 0;
  padding: 0;
  position: fixed;
  width: ${(props) => (props.width ? props.width : 240)}px;
`;

const listStyle = css`
  background: ${Color.WHITE_LIGHT};
  cursor: pointer;
  padding: 4px;

  :hover {
    background: ${Color.WHITE_LIGHT_HOVER};
  }
`;

type Candidate = {
  text: string;
  value: string;
};

type Props = {
  onClick: () => void;
  onItemClick: (candidate: Candidate) => void;
  candidates: Candidate[];
};

const SelectableButton: FC<Props> = ({
  onClick,
  onItemClick,
  children,
  candidates,
}) => {
  const [isSelect, changeSelectStatus] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  return (
    <div>
      <button ref={buttonRef} css={buttonStyle} data-testid="enable-btn">
        <span
          css={svgWrapper}
          data-testid="button-tapped"
          onClick={() => {
            changeSelectStatus(!isSelect);
          }}
        >
          <FontAwesomeIcon icon={isSelect ? faChevronUp : faChevronDown} />
        </span>
        <div css={childWrapper} onClick={onClick} data-testid="button-area">
          {children}
        </div>
      </button>
      {isSelect && (
        <Ul
          width={buttonRef.current ? buttonRef.current.offsetWidth : undefined}
          data-testid="selectable-area"
        >
          {candidates.map((item) => (
            <li
              css={listStyle}
              onClick={() => {
                onItemClick(item);
                changeSelectStatus(!isSelect);
              }}
              key={item.value}
              data-testid={`candidate-${item.value}`}
            >
              {item.text}
            </li>
          ))}
        </Ul>
      )}
    </div>
  );
};

export default SelectableButton;
