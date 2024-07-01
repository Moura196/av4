import React, { useState, useEffect } from 'react';
import { createFuncionario, updateFuncionario, getFuncionario } from '../../services/apiFuncionarios';
import { FuncionarioButton } from '../../pages/Funcionario/style';

const FuncionarioForm = ({ funcionarioId, onSave }) => {
  const [funcionario, setFuncionario] = useState({ name: '', role: '' });

  useEffect(() => {
    if (funcionarioId) {
      loadFuncionario(funcionarioId);
    }
  }, [funcionarioId]);

  const loadFuncionario = async (id) => {
    try {
      const response = await getFuncionario(id);
      setFuncionario(response.data);
    } catch (error) {
      console.error("Erro ao buscar funcionário:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFuncionario({ ...funcionario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (funcionarioId) {
        await updateFuncionario(funcionarioId, funcionario);
      } else {
        await createFuncionario(funcionario);
      }
      onSave();
    } catch (error) {
      console.error("Erro ao salvar funcionário:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" name="name" value={funcionario.name} onChange={handleChange} />
      </label>
      <label>
        Cargo:
        <input type="text" name="role" value={funcionario.role} onChange={handleChange} />
      </label>
      <FuncionarioButton type="submit">Salvar</FuncionarioButton>
    </form>
  );
};

export default FuncionarioForm;

