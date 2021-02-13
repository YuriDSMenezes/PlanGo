import styled from 'styled-components';

export const Container = styled.div`
  width: 250px;
  height: 100vh;
  border-left: 2px solid #f2ebf9;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const TransactionsTitle = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #f2ebf9;
  text-transform: uppercase;
  color: ${props => props.theme.colors.textLight};
  font-weight: 400;
  font-size: 1rem;
  svg {
    margin: 0 20px;
  }
`;
export const DateContainer = styled.div`
  position: relative;
  svg {
    position: absolute;
    right: 44px;
    top: 42%;
  }
`;
export const TransactionsOptions = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 5px;

  input {
    margin: 10px 10px;
    width: 80%;
    border: 1px solid #eaeaea;
    border-radius: 6px;
    padding: 5px;
  }
  button {
    align-self: flex-start;
    margin-left: 5px;
    font-weight: 400;
    margin-top: 40px;
  }
`;
export const TransactionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  margin: 5px 0;
  padding: 0 5px;
`;
export const TransactionItem = styled.div`
  display: flex;
`;
export const TransactionIcon = styled.div`
  margin-right: 5px;
  svg {
    width: 32px;
  }
`;
export const TransactionDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  p {
    color: ${prosp => prosp.theme.colors.text};
    font-size: 0.9rem;
    font-weight: 400;
  }
  > span {
    color: ${props => props.theme.colors.textBold};
    font-weight: 500;
    line-height: 10px;
    font-size: 0.8rem;
    margin: 5px 0;
  }
`;
export const TransactionValue = styled.div`
  font-size: 0.7rem;
  color: ${prosp => prosp.theme.colors.textLight};
  font-weight: 400;
  line-height: 17px;
  margin: 10px 0;
`;
export const ButtonTransactionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 20%;
  button {
    margin: 10px 0;
  }
`;
