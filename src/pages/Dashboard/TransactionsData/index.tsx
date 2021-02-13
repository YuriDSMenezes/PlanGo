import * as Datefns from 'date-fns';
import br from 'date-fns/locale/pt-BR';
import React, { FC, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  AddWhiteIcon,
  ArrowDownIcon,
  CalenderIcon,
  MoreIcon,
  PillIcon
} from '../../../assets/svgs';
import { Button } from '../../../components';
import { formatCurrency } from '../../../helpers/format-currency';
import { formatFirstLetterToUperCase } from '../../../helpers/formatFirstLetterToUpperCase';
import api from '../../../services/api';
import {
  ButtonTransactionsContainer,
  Container,
  DateContainer,
  TransactionContainer,
  TransactionDescription,
  TransactionIcon,
  TransactionItem,
  TransactionsOptions,
  TransactionsTitle,
  TransactionValue
} from './styles';

interface TransactionDataProps {
  descricao: string;
  valor: number;
  dataTransacao: Date;
}

const TransactionComponent: FC = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [transactionData, setTransactionData] = useState<
    TransactionDataProps[]
  >();

  useEffect(() => {
    async function getTransactions() {
      const response = await api.get(
        `operacoes-financeiras/transacoes/2021/02?page=0&size=8`
      );
      setTransactionData(response.data.content);
    }
    getTransactions();
  }, []);

  return (
    <Container>
      <TransactionsTitle>
        <CalenderIcon />
        transações
      </TransactionsTitle>
      <TransactionsOptions>
        <DateContainer>
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
            locale={br}
            dateFormat="MMMM  yyyy"
          />
          <ArrowDownIcon />
        </DateContainer>
        {transactionData?.map(transaction => (
          <TransactionContainer>
            <TransactionItem>
              <TransactionIcon>
                <PillIcon />
              </TransactionIcon>
              <TransactionDescription>
                <p>{formatFirstLetterToUperCase(transaction.descricao)}</p>
                <span>{formatCurrency(transaction.valor)}</span>
              </TransactionDescription>
            </TransactionItem>
            <TransactionValue>
              <span>
                {Datefns.formatDistance(
                  Datefns.subDays(new Date(transaction.dataTransacao), 3),
                  new Date(),
                  { addSuffix: true, locale: br }
                )}
              </span>
            </TransactionValue>
          </TransactionContainer>
        ))}
        {transactionData?.length === 8 && (
          <Button
            icon={MoreIcon}
            text="VER MAIS"
            textColor="#5E00B9"
            style={{ fontSize: '1rem' }}
          />
        )}
      </TransactionsOptions>
      <ButtonTransactionsContainer>
        <Button
          icon={AddWhiteIcon}
          backgroundColor="#5E00B9"
          text="Adicionar Transação"
          style={{ width: '90%', height: '50px' }}
        />
      </ButtonTransactionsContainer>
    </Container>
  );
};

export default TransactionComponent;
