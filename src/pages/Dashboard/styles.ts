import styled from 'styled-components';
import backgroundPeople from '../../assets/background-people.png';

export const Container = styled.div`
  flex: 1;
  height: 100vh;
  background-color: #fbf8ff;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const FinancialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 30px;
  p {
    color: #858199;
    font-size: 1rem;
    margin-bottom: 10px;
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
  margin: 40px 0px;
  background-color: ${props => props.theme.colors.primary};
  height: 101px;
  flex: 1;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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
    color: ${props => props.theme.colors.primary};
  }
  @media (max-width: 1366px) {
    margin: 10px 0px;
  }
`;

export const CalenderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
  height: 140px;
  > p {
    color: #858199;
    font-weight: 400;
    margin: 10px 10px;
    font-size: 1.3rem;
  }
  @media (max-width: 1366px) {
    margin: 10px 30px 0px 30px;
  }
`;
