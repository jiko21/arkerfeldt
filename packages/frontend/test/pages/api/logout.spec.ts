import httpMocks from 'node-mocks-http';
import logout from '@/pages/api/logout';
import { parseCookies } from 'nookies';
import { NextApiRequest, NextApiResponse } from 'next';

const FIREBASE_COOKIE = 'cookie';
const revokeRefreshTokensMock = jest.fn();
jest.mock('@/server/firebaseAdmin', () => ({
  auth: () => ({
    verifySessionCookie: () => FIREBASE_COOKIE,
    revokeRefreshTokens: revokeRefreshTokensMock,
  }),
}));
jest.mock('nookies');

describe('/api/logout', () => {
  test('404 when method is not `POST`', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const mockRequest = httpMocks.createRequest<NextApiRequest>({
      method: 'GET',
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const mockResponse = httpMocks.createResponse<NextApiResponse>();

    await logout(mockRequest, mockResponse);

    expect(mockResponse.statusCode).toEqual(404);
  });

  test('500 when destroy cookie failed', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const mockRequest = httpMocks.createRequest<NextApiRequest>({
      method: 'POST',
    });
    (parseCookies as jest.Mock).mockReturnValue('session-id');
    revokeRefreshTokensMock.mockRejectedValue({});
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const mockResponse = httpMocks.createResponse<NextApiResponse>();

    await logout(mockRequest, mockResponse);

    expect(mockResponse.statusCode).toEqual(500);
  });

  test('correctly return', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const mockRequest = httpMocks.createRequest<NextApiRequest>({
      method: 'POST',
    });
    (parseCookies as jest.Mock).mockReturnValue('session-id');
    revokeRefreshTokensMock.mockResolvedValue({});
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const mockResponse = httpMocks.createResponse<NextApiResponse>();

    await logout(mockRequest, mockResponse);

    expect(mockResponse.statusCode).toEqual(200);
  });
});
