import httpMocks from 'node-mocks-http';
import { NextApiRequest, NextApiResponse } from 'next';
import proxyApi from '@/pages/api/v1/[...all]';
import { parseCookies } from 'nookies';
import httpProxyMiddleware from 'next-http-proxy-middleware';

const verifySessionCookieMock = jest.fn();
jest.mock('@/server/firebaseAdmin', () => ({
  auth: () => ({
    verifySessionCookie: verifySessionCookieMock,
  }),
}));
jest.mock('nookies');
jest.mock('next-http-proxy-middleware');

const proxyMock = jest.fn();
// jest.mock('next-http-proxy-middleware', () => ({
//   httpProxyMiddleware: proxyMock,
// }));

describe('[...all].ts', () => {
  it('return 500 when session is not verified', async () => {
    (parseCookies as jest.Mock).mockReturnValue('session-id');
    verifySessionCookieMock.mockRejectedValue({});

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const mockRequest = httpMocks.createRequest<NextApiRequest>({
      method: 'GET',
      url: '/api/v1/aaa',
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const mockResponse = httpMocks.createResponse<NextApiResponse>();

    await proxyApi(mockRequest, mockResponse);
    expect(mockResponse.statusCode).toEqual(500);
  });

  it('return proxy when session is verified', async () => {
    (parseCookies as jest.Mock).mockReturnValue('session-id');
    verifySessionCookieMock.mockResolvedValue({});

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const mockRequest = httpMocks.createRequest<NextApiRequest>({
      method: 'GET',
      url: '/api/v1/aaa',
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const mockResponse = httpMocks.createResponse<NextApiResponse>();

    await proxyApi(mockRequest, mockResponse);
    expect(httpProxyMiddleware as jest.Mock).toBeCalled();
  });
});
