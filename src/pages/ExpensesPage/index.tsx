// import React, { FC, useState, useRef, useCallback, ChangeEvent } from 'react';
// import { Form } from '@unform/web';
// import { FormHandles } from '@unform/core';
// import { useForm } from 'react-hook-form';
// import {
//   Container,
//   Payable,
//   Payed,
//   TableBody,
//   TableContainer,
//   TableHead,
//   TableItem,
//   TableRow,
//   TableRowWhite,
//   TotalContainer,
//   TotalExpense,
// } from './styles';
// import { Header, Tabs } from '../../components';
// import api from '../../services/api';

// const ExpensesPage: FC = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   const [categorias, setCategorias] = useState();
//   const [description, setDescription] = useState<string>();
//   const formRef = useRef<FormHandles>(null);
//   const { register, errors, handleSubmit, watch } = useForm();
//   const [expensesData, setExpensesData] = useState([
//     {
//       fieldName: 'descricao',
//       label: 'Descrição',
//       value: '',
//     },
//     {
//       fieldName: 'valor',
//       label: 'Valor',
//       value: '',
//     },
//     {
//       fieldName: 'codigoCategoria',
//       label: 'Categoria',
//       value: '',
//     },
//     {
//       fieldName: 'codigoSubCategoria',
//       label: 'Sub categoria',
//       value: '',
//     },
//     {
//       fieldName: 'data',
//       label: 'Data',
//       value: '',
//     },
//     {
//       fieldName: 'codigoFormaPagamento',
//       label: 'Pago com',
//       value: '',
//     },
//     {
//       fieldName: 'totalParcelas',
//       label: 'Repete',
//       value: '',
//     },
//     {
//       fieldName: 'PagamentoEfetivado',
//       label: 'Pago',
//       value: '',
//     },
//   ]);
//   const onSubmit = useCallback(async () => {
//     const teste = [...expensesData];
//     const newTeste = teste.forEach(a => {
//       return {
//         [a.fieldName]: a.value,
//       };
//     });
//     try {
//       await api.post('/operacoes-financeiras', newTeste);
//     } catch (error) {
//       console.log(error);
//     }
//   }, []);
//   const handleChange = (value: ChangeEvent<HTMLInputElement>) => {
//     const values = [...expensesData];
//     const newValue = value.target.value;
//     values[atual].value = newValue;
//     setExpensesData(values);
//   };

//   return (
//     <Container>
//       <Header />
//       <Tabs>
//         <Container>
//           <TableContainer>
//             <TableHead>
//               <TableRow>
//                 <TableItem>Valor</TableItem>
//                 <TableItem>Descrição</TableItem>
//                 <TableItem>Categoria</TableItem>
//                 <TableItem>Data</TableItem>
//                 <TableItem>Pagar com</TableItem>
//                 <TableItem>Repete</TableItem>
//                 <TableItem>Pago</TableItem>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {expensesData.map(expense => (
//                 <TableRowWhite>
//                   <TableItem>{expense.value}</TableItem>
//                 </TableRowWhite>
//               ))}
//             </TableBody>
//           </TableContainer>
//           <TotalContainer>
//             <TotalExpense>
//               <p>Total de despesas:</p>
//               <span>R$ 7.358,21</span>
//             </TotalExpense>
//             <Payed>
//               <p>Pago:</p>
//               <span>R$ 5.358,21</span>
//             </Payed>
//             <Payable>
//               <p>A pagar:</p>
//               <span>R$ 2.000,21</span>
//             </Payable>
//           </TotalContainer>
//         </Container>
//       </Tabs>
//     </Container>
//   );
// };

// export default ExpensesPage;
import React, { FC } from 'react';

const ExpensesPage: FC = () => {
  return <div>a</div>;
};
export default ExpensesPage;
