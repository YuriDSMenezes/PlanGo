import styled from 'styled-components';
import backgroundPeople from '../../assets/background-people.png';

export const Container = styled.div`
  flex: 1;
  background-color: #fbf8ff;
`;

export const TransactionsContainer = styled.div`
  width: 318px;
  border-left: 2px solid #f2ebf9;
  background-color: #fff;
`;

export const ButtonTransactionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button:nth-child(1) {
    align-self: flex-start;
  }
  button:nth-child(2) {
    margin-top: 20px;
  }
`;

export const TransactionsTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 66px;
  border-bottom: 2px solid #f2ebf9;
  text-transform: uppercase;
  color: #858199;
  font-weight: 400;
  font-size: 1rem;
  svg {
    margin: 0 20px;
    fill: 858199;
  }
`;

export const TransactionsOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 5px;
  margin: 10px 0;

  input {
    margin: 10px 15px;
    width: 172px;
    border: 2px solid #f2ebf9;
    border-radius: 6px;
    padding: 5px;
  }
`;

export const TransactionItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1rem;
  margin: 10px 0;

  p,
  span {
    color: #858199;
    font-weight: 400;
    line-height: 17px;
    margin: 10px 0;
  }

  div {
    > span {
      color: #4d4d4d;
      font-weight: 500;
      line-height: 18px;
      font-size: 1.1rem;
    }
  }
`;

export const FinancialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 30px;
  p {
    color: #858199;
    font-size: 1rem;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
`;

export const SlideContainer = styled.div`
  border-radius: 4px;
  flex: 1;
  height: 288px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0 20px 0 0;
  background: #fff;
`;

export const IncomeData = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 20px;

  strong {
    color: #009952;
    font-weight: 500;
  }
`;

export const ExpenseData = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 20px;

  strong {
    color: #e81628;
    font-weight: 500;
  }
`;

export const GraphicContainer = styled.div`
  background: #fff;
  border-radius: 4px;
  border-radius: 4px;
  height: 288px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  p {
    align-self: flex-start;
    color: #858199;
    font-size: 1rem;
    padding: 0px 20px;
    text-transform: uppercase;
  }
`;

export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 30px;
  border-bottom: 2px solid #f2ebf9;
`;

export const Banner = styled.div`
  border-radius: 6px;
  margin: 20px 0px;
  height: 105px;
  background-color: #5e00b9;
  flex: 1;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  &:nth-child(1) {
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  &:nth-child(2) {
    margin-left: 10px;
    background-image: url(${backgroundPeople});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: #5e00b9;
  }
`;

export const CalenderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 30px;

  > p {
    color: #858199;
    font-weight: 400;
    margin-bottom: 10px;
    font-size: 1.3rem;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const AlignCenterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: #f9f3ff;
`;

export const Calender = styled.div`
  font-size: 1rem;
  width: 200px;
  height: 100px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  border-left: 3px solid red;
`;

export const DateField = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 10px 20px;
  font-size: 1rem;
  color: #333333;
  font-weight: 400;

  svg {
    margin-right: 20px;
  }
  span {
    background-color: red;
  }
`;
export const Account = styled.div`
  margin: 10px 20px;
  span {
    color: #4d4d4d;
    font-weight: 500;
    font-size: 15px;
  }
`;
