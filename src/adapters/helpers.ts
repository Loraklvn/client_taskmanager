import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const WEB_API_URL = 'https://server-taskmanager.onrender.com';

type RequestHeaders = {
  headers: {
    'Content-Type': string;
    Authorization?: string;
  };
};

const defaultConfig: RequestHeaders = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export function postRequest<T>(
  url: string,
  data: Record<string, unknown>,
  customConfig: AxiosRequestConfig = {}
): Promise<AxiosResponse<T>> {
  return axios.post(url, data, { ...defaultConfig, ...customConfig });
}

export function putRequest<T>(
  url: string,
  data: Record<string, unknown>,
  customConfig: AxiosRequestConfig = {}
): Promise<AxiosResponse<T>> {
  return axios.put(url, data, { ...defaultConfig, ...customConfig });
}

export function getRequest<T>(
  url: string,
  customConfig: AxiosRequestConfig = {}
): Promise<AxiosResponse<T>> {
  return axios.get(url, { ...defaultConfig, ...customConfig });
}
