import React, { FC } from 'react';
import { CarIcon } from '../../assets/svgs';
import Header from '../../components/Header';
import CardsCalender from './CardsCalender';
import GraphicContainer from './GraphicData';
import IncomeData from './IncomeData';
import {
  Banner,
  BannerContainer,
  CalenderContainer,
  Container,
  FinancialContainer
} from './styles';
import TransactionsData from './TransactionsData';

const Dashboard: FC = () => {
  return (
    <>
      <Container>
        <Header />
        <FinancialContainer>
          <IncomeData />
          <GraphicContainer />
        </FinancialContainer>
        <BannerContainer>
          <Banner>
            Planeje e realize seus sonhos
            <CarIcon />
          </Banner>
          <Banner>Compartilhe sua conta</Banner>
        </BannerContainer>
        <CalenderContainer>
          <p>Calendário</p>
          <CardsCalender />
        </CalenderContainer>
      </Container>
      <TransactionsData />
    </>
  );
};

export default Dashboard;
