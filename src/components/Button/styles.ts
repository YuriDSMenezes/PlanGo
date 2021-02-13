import styled from 'styled-components';

interface ButtonProps {
  backgroundColor?: string;
  textColor?: string;
}

export const Container = styled.button<ButtonProps>`
  cursor: pointer;
  background: ${props => props.backgroundColor || 'none'};
  height: 40px;
  border-radius: 4px;
  border: 0;
  color: ${props => props.textColor || '#fff'};
  font-weight: 400;
  transition: background-color 0.2s;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    margin-left: 10px;
  }
`;
