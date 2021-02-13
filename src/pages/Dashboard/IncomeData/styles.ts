import styled from 'styled-components';

export const SlideContainer = styled.div`
  border-radius: 4px;
  width: 100%;
  flex: 1;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px 0 0;
  background: #fff;
  padding: 10px;
`;

export const Income = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #fff;

  strong {
    color: ${props => props.theme.colors.green};
    font-weight: 500;
  }

  span {
    margin-top: 15px;
  }
`;

export const ExpenseData = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  strong {
    color: ${props => props.theme.colors.red};
    font-weight: 500;
  }
  span {
    margin-top: 15px;
  }
`;
