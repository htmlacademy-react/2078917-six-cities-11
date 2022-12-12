import axios, { AxiosInstance } from 'axios';

export const createAPI = (): AxiosInstance => (
  axios.create({
    baseURL: 'https://11.react.pages.academy/six-cities',
    timeout: 5000,
  }));

