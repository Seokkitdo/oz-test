import { IProtoMain } from "@/app/_types/CurrentlySellingList";
import axios, { AxiosResponse } from "axios";

export const serverApi = axios.create({
  baseURL: "/", //next.config.js에서 설정한 (proxy 주소로 baseURL 경로 설정함)
});

serverApi.interceptors.request.use(
  (config) => {
    config.headers["Content-type"] = "application/json; charset=UTF-8";
    config.headers["Accept"] = "application/json";
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const apis = {
  getContentsDatas: (params: string) => serverApi.get<IProtoMain>(params),
};
