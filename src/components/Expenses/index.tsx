import React, { FC } from 'react';

import {
  Container,
  TableContainer,
  TableHead,
  TableRow,
  TableRowWhite,
  TableItem,
  TableBody,
  TotalContainer,
  TotalExpense,
  Payed,
  Payable,
} from './styles';

const ExpensesComponent: FC = () => {
  return (
    <Container>
      <TableContainer>
        <TableHead>
          <TableRow>
            <TableItem>Valor</TableItem>
            <TableItem>Descrição</TableItem>
            <TableItem>Categoria</TableItem>
            <TableItem>Data</TableItem>
            <TableItem>Pagar com</TableItem>
            <TableItem>Repete</TableItem>
            <TableItem>Pago</TableItem>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRowWhite>
            <TableItem>RS 0.00</TableItem>
            <TableItem>Escreva</TableItem>
            <TableItem>Selecione</TableItem>
            <TableItem>DD/MM/AAAA</TableItem>
            <TableItem>Conta padrão</TableItem>
            <TableItem>Não</TableItem>
            <TableItem>Checkbox</TableItem>
          </TableRowWhite>
          <TableRowWhite>
            <TableItem>RS 0.00</TableItem>
            <TableItem>Escreva</TableItem>
            <TableItem>Selecione</TableItem>
            <TableItem>DD/MM/AAAA</TableItem>
            <TableItem>Conta padrão</TableItem>
            <TableItem>Não</TableItem>
            <TableItem>Checkbox</TableItem>
          </TableRowWhite>
        </TableBody>
      </TableContainer>
      <TotalContainer>
        <TotalExpense>
          <p>Total de despesas:</p>
          <span>R$ 7.358,21</span>
        </TotalExpense>
        <Payed>
          <p>Pago:</p>
          <span>R$ 5.358,21</span>
        </Payed>
        <Payable>
          <p>A pagar:</p>
          <span>R$ 2.000,21</span>
        </Payable>
      </TotalContainer>
    </Container>
  );
};

export { ExpensesComponent };
