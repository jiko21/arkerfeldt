import Head from 'next/head';
import LoginForm from '../components/organisms/LoginForm';
import MenulessTemplate from '../components/templates/MenulessTemplate';
import React from 'react';
import { GetServerSideProps } from 'next';
import nookies from 'nookies';
import { authCookie, Provider } from '@/const/auth';
import firebaseAdmin from '@/server/firebaseAdmin';
import { useLogin } from '@/hooks/useAuth';

const Home: React.FC = ({}) => {
  const { onLogin, isError, inProgress } = useLogin();
  return (
    <>
      <Head>
        <title>Arkerfeldt CMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MenulessTemplate>
        <LoginForm
          isLoading={inProgress}
          isError={isError}
          onGithubLogin={async () => {
            await onLogin(Provider.GITHUB);
          }}
          onEmailLogin={async (loginInfo) => {
            await onLogin(Provider.EMAIL, loginInfo.email, loginInfo.password);
          }}
        />
      </MenulessTemplate>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  const session = cookies[authCookie] || '';
  try {
    await firebaseAdmin.auth().verifySessionCookie(session, true);
    return {
      redirect: {
        destination: '/posts',
        permanent: false,
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
};

export default Home;
