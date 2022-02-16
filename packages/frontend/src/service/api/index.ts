import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:4000',
});

export const getRequest = async <ReturnType>(
  path: string,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<ReturnType>> => await client.get(path, config);

export const postRequest = async <RequestParams, ReturnType>(
  path: string,
  params?: RequestParams,
  config?: AxiosRequestConfig<RequestParams>,
): Promise<AxiosResponse<ReturnType>> =>
  await client.post(path, params, config);
