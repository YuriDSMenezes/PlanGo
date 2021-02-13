import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`;

export const DateField = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 10px 20px;
  font-size: 1rem;
  color: ${props => props.theme.colors.text};
  font-weight: 400;

  svg {
    margin-right: 20px;
  }
  span {
    background-color: red;
  }
`;

export const CalenderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 30px;

  > p {
    color: ${props => props.theme.colors.textLight};
    font-weight: 400;
    margin-bottom: 10px;
    font-size: 1.3rem;
  }
`;

export const Account = styled.div`
  margin: 10px 20px;
  span {
    color: ${props => props.theme.colors.textBold};
    font-weight: 500;
    font-size: 15px;
  }
`;

export const AlignCenterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: #f9f3ff;
`;
