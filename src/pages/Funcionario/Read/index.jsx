import { Titulo } from "./style"


export function Funcionario() {
  return (
    <>
      <h1>Cadastro de Funcionário</h1>
      <form action="/cadastrarFuncionario" method="POST">
        <div>
          <label htmlFor="id_funcionario">ID do Funcionário:</label>
          <input type="number" id="id_funcionario" name="id_funcionario" required />
        </div>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" maxLength="100" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" maxLength="60" required />
        </div>
        <div>
          <label htmlFor="telefone">Telefone:</label>
          <input type="text" id="telefone" name="telefone" maxLength="11" required />
        </div>
        <div>
          <label htmlFor="data_nascimento">Data de Nascimento:</label>
          <input type="date" id="data_nascimento" name="data_nascimento" required />
        </div>
        <div>
          <label htmlFor="cpf">CPF:</label>
          <input type="text" id="cpf" name="cpf" maxLength="11" required />
        </div>
        <div>
          <label htmlFor="fk_id_estabelecimento">ID do Estabelecimento:</label>
          <input type="number" id="fk_id_estabelecimento" name="fk_id_estabelecimento" required />
        </div>
        <div>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </>
  );
}
