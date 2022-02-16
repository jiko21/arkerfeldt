/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC, InputHTMLAttributes } from 'react';
import { Color } from '@/const/color';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const wrapperStyle = css`
  height: 30px;
  position: relative;
  max-width: 240px;
`;

const svgStyle = css`
  position: absolute;
  top: 4px;
  right: 0;
  height: 24px;
  width: 24px;
`;

const inputStyle = css`
  border: 1px solid ${Color.BLACK};
  border-radius: 6px;
  padding: 0 0 0 2px;
  height: 100%;
  width: 100%;

  ::placeholder {
    color: ${Color.LIGHT};
  }
`;

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  testId?: string;
}

const SearchForm: FC<IProps> = ({ testId, ...props }) => (
  <div css={wrapperStyle}>
    <span css={svgStyle}>
      <FontAwesomeIcon
        icon={faSearch}
        css={css`
          color: ${Color.BLACK};
        `}
      />
    </span>
    <input
      css={inputStyle}
      type={'text'}
      placeholder={'search keyword'}
      {...props}
      data-testid={testId}
    />
  </div>
);

export default SearchForm;
