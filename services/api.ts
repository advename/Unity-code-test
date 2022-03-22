import axios, { AxiosRequestConfig, Method } from "axios";
import { Keyable, KeyableAny } from "../types/globals";

const axiosClient = axios.create({
  baseURL: process.env.API_BASE_URL,
});

export {axiosClient as api}