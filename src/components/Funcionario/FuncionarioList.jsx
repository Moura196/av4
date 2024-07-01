// import React, { useEffect, useState } from 'react';
// import { getFuncionarios, deleteFuncionario } from '../../services/apiFuncionarios';
// import { FuncionarioListItem, FuncionarioButton } from '../../pages/Funcionario/style';

// const FuncionarioList = () => {
//   const [funcionarios, setFuncionarios] = useState([]);

//   useEffect(() => {
//     loadFuncionarios();
//   }, []);

//   const loadFuncionarios = async () => {
//     try {
//       const response = await getFuncionarios();
//       setFuncionarios(response.data);
//     } catch (error) {
//       console.error("Erro ao buscar funcionários:", error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await deleteFuncionario(id);
//       loadFuncionarios();
//     } catch (error) {
//       console.error("Erro ao deletar funcionário:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Funcionários</h2>
//       <ul>
//         {funcionarios.map(funcionario => (
//           <FuncionarioListItem key={funcionario.id}>
//             {funcionario.name} - {funcionario.role}
//             <FuncionarioButton onClick={() => handleDelete(funcionario.id)}>Deletar</FuncionarioButton>
//           </FuncionarioListItem>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FuncionarioList;
