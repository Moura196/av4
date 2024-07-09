import { useState } from 'react';
import axios from 'axios';
import { FormContainer, FormTitle, Form, FormGroup, Label, Input, Button } from './style';
import { Navbar } from '../../../components/Navbar';
import { Footer } from '../../../components/Footer';

export function CreateFuncionario() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    data_nascimento: '',
    cpf: '',
    fk_id_estabelecimento: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://seu-backend.com/api/funcionarios', formData);
      console.log('Formulário enviado com sucesso', response.data);
      // Aqui você pode adicionar alguma lógica para redirecionar ou limpar o formulário
    } catch (error) {
      console.error('Erro ao enviar formulário', error);
    }
  };

  return (
    <>
      <Navbar />
      <FormContainer>
        <FormTitle>Formulário de Cadastro de Funcionário</FormTitle>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="nome">Nome:</Label>
            <Input type="text" id="nome" name="nome" maxLength="100" required value={formData.nome} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email:</Label>
            <Input type="email" id="email" name="email" maxLength="60" required value={formData.email} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="telefone">Telefone:</Label>
            <Input type="text" id="telefone" name="telefone" maxLength="11" required value={formData.telefone} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="data_nascimento">Data de Nascimento:</Label>
            <Input type="date" id="data_nascimento" name="data_nascimento" required value={formData.data_nascimento} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="cpf">CPF:</Label>
            <Input type="text" id="cpf" name="cpf" maxLength="11" required value={formData.cpf} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="fk_id_estabelecimento">ID do Estabelecimento:</Label>
            <Input type="number" id="fk_id_estabelecimento" name="fk_id_estabelecimento" required value={formData.fk_id_estabelecimento} onChange={handleChange} />
          </FormGroup>
          <Button type="submit">Cadastrar</Button>
        </Form>
      </FormContainer>
      <Footer />
    </>
  );
}

