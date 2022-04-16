/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { FC, useState } from 'react';
import { Color } from '@/const/color';
import DefaultButton from '@/components/atoms/DefaultButton';
import GithubButton from '@/components/atoms/GithubButton';
import TextForm from '@/components/atoms/TextForm';
import { EmailLoginInfo } from '@/types/loginForm';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const containerStyle = css`
  align-items: center;
  background: #ffffff;
  box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25), 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  min-height: 320px;
  padding: 0 40px;

  span {
    color: ${Color.BLACK};
    font-size: 18px;
    font-weight: 700;
  }

  > * {
    margin: 8px 0;
  }
`;

const formStyle = css`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  > * {
    margin: 4px 0;
  }
`;

const Error = styled.div`
  color: red;
  text-align: left;
  height: 12px;
  font-size: 12px;
  font-weight: 700;
  width: 100%;
`;

type Props = {
  onEmailLogin: (loginInfo: EmailLoginInfo) => void;
  onGithubLogin: () => void;
  isError: boolean;
  isLoading: boolean;
  isLogin?: boolean;
};

const LoginForm: FC<Props> = ({
  onEmailLogin,
  onGithubLogin,
  isError,
  isLoading,
  isLogin,
}) => {
  const [email, onChangeEmail] = useState('');
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeEmail(event.target.value);
  };

  const [password, onChangePassword] = useState('');
  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangePassword(event.target.value);
  };

  return (
    <div css={containerStyle}>
      {isLoading ? (
        <FontAwesomeIcon
          icon={faSpinner}
          color="paleturquoise"
          size="10x"
          spin
        />
      ) : (
        <>
          <span>You should {isLogin ? 'login' : 'singup'} to continue</span>
          <GithubButton onClick={onGithubLogin} testId="github-btn" />
          <span>OR</span>
          <div css={formStyle}>
            <form>
              <TextForm
                testId="email"
                type={'email'}
                placeholder={'email'}
                value={email}
                onChange={handleChangeEmail}
              />
              <TextForm
                testId="password"
                type={'password'}
                placeholder={'password'}
                value={password}
                onChange={handleChangePassword}
              />
            </form>
          </div>
          <Error>{isError ? 'Sorry... try again.' : ''}</Error>
          <DefaultButton
            testId="login-btn"
            onClick={() => {
              onEmailLogin({
                email,
                password,
              });
            }}
          >
            {isLogin ? 'Log In' : 'Sign Up'}
          </DefaultButton>
          {isLogin ? (
            <Link href="/signup">signup from here</Link>
          ) : (
            <Link href="/">sign in from here</Link>
          )}
        </>
      )}
    </div>
  );
};

export default LoginForm;
