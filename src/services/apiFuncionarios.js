import axios from 'axios';

const API_URL = 'https://api.funcionario.com';

export const getFuncionarios = async () => {
  return axios.get(`${API_URL}/funcionarios`);
};

export const getFuncionario = async (id) => {
  return axios.get(`${API_URL}/funcionarios/${id}`);
};

export const createFuncionario = async (funcionario) => {
  return axios.post(`${API_URL}/funcionarios`, funcionario);
};

export const updateFuncionario = async (id, funcionario) => {
  return axios.put(`${API_URL}/funcionarios/${id}`, funcionario);
};

export const deleteFuncionario = async (id) => {
  return axios.delete(`${API_URL}/funcionarios/${id}`);
};
