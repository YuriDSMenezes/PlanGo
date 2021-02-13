import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.primary};
`;
export const Content = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const ImageContainer = styled.div``;
const AnimationContainer = keyframes`
from {
  opacity:0;
  transform: translateX(100px);

}
to{
  opacity:1;
  transform:translateX(0px)
}
`;
export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  color: ${props => props.theme.colors.white};
  font-weight: 300;
  animation: ${AnimationContainer} 0.7s;
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
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  a {
    color: #fff;
    text-decoration: none;
  }
  button {
    width: 320px;
    height: 54px;
    border-radius: 4px;
  }
  button:nth-child(1) {
    margin-bottom: 16px;
    background-color: ${props => props.theme.colors.seconday};
    a {
      color: ${props => props.theme.colors.primary};
    }
    border: none;
    &:hover {
      background-color: ${props =>
        darken(0.05, `${props.theme.colors.seconday}`)};
    }
  }
  button:nth-child(2) {
    background-color: transparent;
    border: 1px solid #fff;
    font-weight: 500;
    &:hover {
      background-color: ${props =>
        darken(0.05, `${props.theme.colors.primary}`)};
    }
  }
`;
