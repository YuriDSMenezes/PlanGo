import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${props => props.theme.colors.primary};
  a {
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    font-weight: 600;
  }
`;
export const LogoContainer = styled.div`
  height: 100px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  svg {
    width: 200px;
  }
`;
export const Content = styled.div`
  flex: 1;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 40px;
`;
export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
const AnimationContainer = keyframes`
from {
  opacity:0;
  transform: translateX(150px)
}
to{
  opacity:1;
  transform:translateX(0)
}
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  color: ${props => props.theme.colors.white};
  font-weight: 300;
  animation: ${AnimationContainer} 0.7s;
  flex: 1;
  form {
    display: flex;
    flex-direction: column;
    width: 70%;
    display: flex;
    label {
      font-weight: 500;
      font-size: 1.2rem;
      margin: 10px 0;
      display: block;
      display: flex;
      flex-direction: column;
    }
    input {
      margin: 10px 0;
      width: 100%;
      border: none;
      background-color: ${props => props.theme.colors.primary};
      border-bottom: 1px solid ${props => props.theme.colors.textDark};
      color: ${props => props.theme.colors.white};
      font-size: 1.5rem;
    }
    svg {
      margin-bottom: 30px;
    }
    span {
      margin: 4px 0;
    }
    strong {
      font-weight: 600;
    }
    h3 {
      font-weight: 700;
      font-size: 1.3rem;
      margin: 20px 0;
    }
  }
`;
export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button {
    width: 100%;
    height: 54px;
    border-radius: 4px;

    > a {
      color: ${props => props.theme.colors.primary};
      text-decoration: none;
    }
  }
  button:nth-child(1) {
    margin-bottom: 16px;
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.primary};
    border: none;
    &:hover {
      background-color: ${props => darken(0.1, `${props.theme.colors.white}`)};
    }
  }
`;
