// import React, { useState, useEffect } from 'react';
// import { createFuncionario, updateFuncionario, getFuncionarios } from '../../services/apiFuncionarios';
// import { FormContainer, Input, Button } from './';

// export default function FuncionarioForm({ funcionarioId, onSave }) {
//   const [nome, setNome] = useState('');
//   const [email, setEmail] = useState('');
//   const [cargo, setCargo] = useState('');

//   useEffect(() => {
//     if (funcionarioId) {
//       getFuncionarios(funcionarioId).then((data) => {
//         setNome(data.nome);
//         setEmail(data.email);
//         setCargo(data.cargo);
//       });
//     }
//   }, [funcionarioId]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const funcionario = { nome, email, cargo };

//     if (funcionarioId) {
//       updateFuncionario(funcionarioId, funcionario).then(onSave);
//     } else {
//       createFuncionario(funcionario).then(onSave);
//     }
//   };

//   return (
//     <FormContainer onSubmit={handleSubmit}>
//       <Input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" required />
//       <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//       <Input type="text" value={cargo} onChange={(e) => setCargo(e.target.value)} placeholder="Cargo" required />
//       <Button type="submit">{funcionarioId ? 'Atualizar' : 'Adicionar'}</Button>
//     </FormContainer>
//   );
// }


