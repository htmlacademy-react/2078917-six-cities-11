import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { StatusCodes } from '../constants';
import { errorHandle } from './error-handle';
import { getUserData } from './user-data';

const StatusCodeMap: Record<number, boolean> = {
  [StatusCodes.BadRequest]: true,
  [StatusCodes.Unauthorized]: true,
  [StatusCodes.NotFound]: true
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMap[response.status];

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: 'https://11.react.pages.academy/six-cities',
    timeout: 5000,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getUserData().token;

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{ error: string }>) => {
      if (error.response && shouldDisplayError(error.response)) {
        errorHandle(error.response.data.error);
      }

      throw error;
    }
  );

  return api;
};

