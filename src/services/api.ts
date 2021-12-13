import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

const REQUEST_TIMEOUT = 50000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response: AxiosResponse) => response,

    (error: AxiosError) => Promise.reject(error),
  );

  return api;
};
