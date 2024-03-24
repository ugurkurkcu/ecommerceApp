import {axiosClient} from './instance';

export const getRequest = async (URL, params) => {
  const response = await axiosClient.get(`${URL}`, {params: params});
  return response;
};

export const postRequest = async (URL, payload) => {
  const response = await axiosClient.post(`${URL}`, payload);
  return response;
};

export const putRequest = async (URL, payload) => {
  const response = await axiosClient.put(`${URL}`, payload);
  return response;
};

export const patchRequest = async (URL, payload) => {
  const response = await axiosClient.patch(`${URL}`, payload);
  return response;
};

export const deleteReauest = async (URL, params) => {
  const response = axiosClient.delete(`${URL}`, {params: params});
  return response;
};
