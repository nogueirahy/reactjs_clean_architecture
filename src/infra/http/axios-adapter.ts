import {
  HttpRequest,
  HttpResponse,
  HttpClient,
} from "../../data/protocols/http";

import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { camelizeKeys, decamelizeKeys } from "humps";

const instance = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use((response: AxiosResponse) => {
  if (
    response.data &&
    response.headers["content-type"] === "application/json"
  ) {
    response.data = camelizeKeys(response.data);
  }
  return response;
});

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  const newConfig = { ...config };
  
  if (newConfig.headers && newConfig.headers["Content-Type"] === "multipart/form-data")
    return newConfig;
  if (config.params) {
    newConfig.params = decamelizeKeys(config.params);
  }
  if (config.data) {
    newConfig.data = decamelizeKeys(config.data);
  }
  return newConfig;
});

const get = async (data: HttpRequest): Promise<HttpResponse> => {
  let axiosResponse: AxiosResponse;

  try {
    axiosResponse = await instance.get(data.url, data.config);
  } catch (error) {
    axiosResponse = error.response;
  }

  return {
    statusCode: axiosResponse.status,
    body: axiosResponse.data,
  };
};

const post = async (data: HttpRequest): Promise<HttpResponse> => {
  let axiosResponse: AxiosResponse;

  console.log(Object.assign(data.body));

  try {
    axiosResponse = await instance.post(data.url, { ...data.body });
  } catch (error) {
    axiosResponse = error.response;
  }

  return {
    statusCode: axiosResponse.status,
    body: axiosResponse.data,
  };
};

const put = (data: HttpRequest): Promise<HttpResponse> =>
  instance.put(Object.assign(data));

const patch = (data: HttpRequest): Promise<HttpResponse> =>
  instance.patch(Object.assign(data));

export const AxiosHttpClient: HttpClient = {
  get,
  post,
  put,
  patch,
};
