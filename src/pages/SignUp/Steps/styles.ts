import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  position: relative;
  flex: 1;
  height: 100vh;
  background-color: ${props => props.theme.background.light};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const SteperContainer = styled.div`
  margin: 20px;
  height: 100px;
`;
export const Form = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  width: 60%;
  font-size: 16px;
  color: ${props => props.theme.colors.primary};
  p {
    font-weight: 300;
  }
  span {
    font-weight: 600;
  }
  input {
    border: none;
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
    height: 60px;
    font-size: 2rem;
    margin-top: 10px;
    width: 50%;
  }
`;
export const ButtonNextContainer = styled.button`
  position: absolute;
  bottom: 0;
  right: 50px;
  border: none;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: 30px;
  background-color: ${props => props.theme.colors.green};
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: ${props => darken(0.05, `${props.theme.colors.green}`)};
  }
`;
