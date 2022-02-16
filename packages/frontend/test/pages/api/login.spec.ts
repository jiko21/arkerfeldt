import httpMocks from 'node-mocks-http';
import login from '@/pages/api/login';
import { NextApiRequest, NextApiResponse } from 'next';
import { setCookie } from 'nookies';
import { authCookie } from '@/const/auth';

const FIREBASE_COOKIE = 'cookie';

jest.mock('@/server/firebaseAdmin', () => ({
  auth: () => ({
    createSessionCookie: () => FIREBASE_COOKIE,
  }),
}));

jest.mock('nookies');

describe('/api/login', () => {
  test('404 when method is not `POST`', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const mockRequest = httpMocks.createRequest<NextApiRequest>({
      method: 'GET',
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const mockResponse = httpMocks.createResponse<NextApiResponse>();

    await login(mockRequest, mockResponse);

    expect(mockResponse.statusCode).toEqual(404);
  });

  test('correctly return', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const mockRequest = httpMocks.createRequest<NextApiRequest>({
      method: 'POST',
      body: {
        id: 'id',
      },
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const mockResponse = httpMocks.createResponse<NextApiResponse>();

    await login(mockRequest, mockResponse);

    expect(setCookie).toBeCalledWith(
      { res: mockResponse },
      authCookie,
      FIREBASE_COOKIE,
      {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true,
        path: '/',
      },
    );
    expect(mockResponse._getJSONData()).toEqual({
      msg: 'auth success',
    });
  });
});
