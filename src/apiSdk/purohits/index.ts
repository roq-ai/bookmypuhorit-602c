import axios from 'axios';
import queryString from 'query-string';
import { PurohitInterface, PurohitGetQueryInterface } from 'interfaces/purohit';
import { GetQueryInterface } from '../../interfaces';

export const getPurohits = async (query?: PurohitGetQueryInterface) => {
  const response = await axios.get(`/api/purohits${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createPurohit = async (purohit: PurohitInterface) => {
  const response = await axios.post('/api/purohits', purohit);
  return response.data;
};

export const updatePurohitById = async (id: string, purohit: PurohitInterface) => {
  const response = await axios.put(`/api/purohits/${id}`, purohit);
  return response.data;
};

export const getPurohitById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/purohits/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePurohitById = async (id: string) => {
  const response = await axios.delete(`/api/purohits/${id}`);
  return response.data;
};
