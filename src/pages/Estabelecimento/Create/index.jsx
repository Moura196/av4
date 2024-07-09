import { FormContainer, FormTitle, Form, FormGroup, Label, Input, Button } from './style';
import { Navbar } from '../../../components/Navbar';
import { Footer } from '../../../components/Footer';

export function CreateEstabelecimento() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar os dados do formulário
    console.log('Formulário enviado');
  };
  return (
    <>
      <Navbar></Navbar>
      <FormContainer>  
        <FormTitle>Cadastro de Estabelecimento</FormTitle>
        <Form onSubmit={handleSubmit}>

          <FormGroup>
            <Label>Nome:</Label>
            <Input maxLength="100" required />
          </FormGroup>

          <FormGroup>
            <Label>CNPJ:</Label>
            <Input maxLength="14" required />
          </FormGroup>


          <FormGroup>
            <Label>Email:</Label>
            <Input maxLength="60" required />
          </FormGroup>

          <FormGroup>
            <Label>Telefone:</Label>
            <Input maxLength="11" required />
          </FormGroup>

          <Button>Cadastrar</Button>
        </Form>
      </FormContainer>
      <Footer></Footer>
    </>
  );
}
