// import axios from 'axios';

// const API_URL = 'https://api.funcionario.com';

// export const getFuncionarios = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/funcionarios`);
//     return response.data;
//   } catch (error) {
//     console.error("Erro ao buscar funcionários:", error);
//     throw error;
//   }
// };

// export const getFuncionarioById = async (id) => {
//   try {
//     const response = await axios.get(`${API_URL}/funcionarios/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error(`Erro ao buscar funcionário com ID ${id}:`, error);
//     throw error;
//   }
// };

// export const createFuncionario = async (funcionarioData) => {
//   try {
//     const response = await axios.post(`${API_URL}/funcionarios`, funcionarioData);
//     return response.data;
//   } catch (error) {
//     console.error("Erro ao criar funcionário:", error);
//     throw error;
//   }
// };

// export const updateFuncionario = async (id, funcionarioData) => {
//   try {
//     const response = await axios.put(`${API_URL}/funcionarios/${id}`, funcionarioData);
//     return response.data;
//   } catch (error) {
//     console.error(`Erro ao atualizar funcionário com ID ${id}:`, error);
//     throw error;
//   }
// };

// export const deleteFuncionario = async (id) => {
//   try {
//     const response = await axios.delete(`${API_URL}/funcionarios/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error(`Erro ao deletar funcionário com ID ${id}:`, error);
//     throw error;
//   }
// };
