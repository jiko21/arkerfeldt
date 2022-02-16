/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ButtonHTMLAttributes, FC } from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const buttonStyle = css`
  background-color: #000000;
  border: none;
  border-radius: 6px;
  color: #ffffff;
  height: 30px;
  min-width: 240px;
  width: 100%;
  transition: 0.5s;
  &:hover {
    transform: translateY(-4px);
  }
`;

const innerButtonStyle = css`
  align-items: center;
  display: flex;
  font-size: 12px;
  font-weight: 700;
  justify-content: center;
  img {
    height: 24px;
    margin-right: 12px;
    width: 24px;
  }
`;

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  testId?: string;
}

const GithubButton: FC<IProps> = ({ testId, ...props }) => (
  <button css={buttonStyle} {...props} data-testid={testId}>
    <div css={innerButtonStyle}>
      <FontAwesomeIcon
        icon={faGithub}
        color="black"
        inverse
        css={css`
          margin-right: 8px;
        `}
      />
      Sign in with GitHub
    </div>
  </button>
);

export default GithubButton;
