import React, { FC, useEffect, useState } from 'react';
import { MoreIcon } from '../../../assets/svgs';
import { Button, Card, ProgressBar } from '../../../components';
import getDate from '../../../helpers/defaultCurrentDate';
import { formatCurrency } from '../../../helpers/format-currency';
import api from '../../../services/api';
import { SlideContainer, ExpenseData, Income } from './styles';

interface IncomeProps {
  totalReceitas: number;
  totalDespesas: number;
}

const IncomeData: FC = () => {
  const [totalValue, setTotalValue] = useState<IncomeProps>({
    totalDespesas: 0,
    totalReceitas: 0
  });

  useEffect(() => {
    async function getTotalValue() {
      try {
        const response = await api.get(
          `operacoes-financeiras/resumos/${getDate.currentMonth}/${getDate.currentYear}`
        );
        setTotalValue(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getTotalValue();
  }, []);

  return (
    <Card margin="0 10px 0 0">
      <SlideContainer>
        <Income>
          <p>Receitas</p>
          <ProgressBar value={2500} max={3594} color="green" />
          <span>
            <strong>{formatCurrency(totalValue.totalReceitas)}</strong>
          </span>
        </Income>
        <ExpenseData>
          <p>Despesas</p>
          <ProgressBar value={1800} max={4000} color="#f00" />
          <span>
            <strong>{formatCurrency(totalValue.totalDespesas)}</strong>
          </span>
        </ExpenseData>
        <Button
          icon={MoreIcon}
          text="VER MAIS"
          textColor="#5E00B9"
          style={{ fontSize: '1rem' }}
        />
      </SlideContainer>
    </Card>
  );
};

export default IncomeData;
