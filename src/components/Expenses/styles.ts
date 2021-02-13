import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 20px;
  height: 100vh;
`;

export const TableContainer = styled.table`
  margin: 30px 0;
  border-collapse: collapse;
  padding: 10px;
`;
export const TableHead = styled.thead`
  margin: 10px 0;
  color: ${props => props.theme.colors.textLight};
`;
export const TableRow = styled.tr`
  margin: 10px 0;
`;
export const TableRowWhite = styled.tr`
  background-color: #fff;
  height: 56px;
`;
export const TableItem = styled.td``;
export const TableBody = styled.tbody``;

export const TotalContainer = styled.div`
  display: flex;
  margin: 30px 0;

  p {
    margin-bottom: 5px;
  }
`;
export const TotalExpense = styled.div`
  span {
    color: ${props => props.theme.colors.red};
    font-size: 36px;
    font-weight: 400;
    line-height: 44px;
  }
`;
export const Payed = styled.div`
  border: 2px solid #f2ebf9;
  border-top: none;
  border-bottom: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 50px;
  padding: 0 50px;
  span {
    color: ${props => props.theme.colors.text};
    font-weight: 500;
  }
`;
export const Payable = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  span {
    color: ${props => props.theme.colors.text};
    font-weight: 500;
  }
`;
