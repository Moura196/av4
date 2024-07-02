
import { FormContainer, FormTitle, Form, FormGroup, Label, Input, Button } from './style';

export function CreateFuncionario() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar os dados do formulário
    console.log('Formulário enviado');
  };

  return (
    <FormContainer>
      <FormTitle>Formulário de Cadastro de Funcionário</FormTitle>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="nome">Nome:</Label>
          <Input type="text" id="nome" name="nome" maxLength="100" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input type="email" id="email" name="email" maxLength="60" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="telefone">Telefone:</Label>
          <Input type="text" id="telefone" name="telefone" maxLength="11" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="data_nascimento">Data de Nascimento:</Label>
          <Input type="date" id="data_nascimento" name="data_nascimento" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="cpf">CPF:</Label>
          <Input type="text" id="cpf" name="cpf" maxLength="11" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="fk_id_estabelecimento">ID do Estabelecimento:</Label>
          <Input type="number" id="fk_id_estabelecimento" name="fk_id_estabelecimento" required />
        </FormGroup>
        <Button type="submit">Cadastrar</Button>
      </Form>
    </FormContainer>
  );
}
