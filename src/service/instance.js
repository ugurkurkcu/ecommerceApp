import axios from 'axios';
import {BASE_URL} from './urls';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = BASE_URL;

axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

axiosClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return error;
  },
);

export {axiosClient};
