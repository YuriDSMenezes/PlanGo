import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  background-color: ${props => props.theme.background.light};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const ContantContainer = styled.div`
  flex: 1;
`;
export const SteperContainer = styled.div`
  margin: 10px;
  height: 10px;
`;
export const StepContent = styled.div``;
export const StepButtons = styled.div``;
export const CardContainer = styled.div`
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
    height: 40px;
    font-size: 2rem;
  }
`;
export const CardOption = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

export const ButtonNextContainer = styled.div`
  width: 70px;
  border-radius: 50%;
  height: 70px;
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
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 10px;
  margin: 10px;
  .container {
    margin: 0 20px;
  }
  .round {
    position: relative;
  }

  .round label {
    background-color: #fff;
    border: 1px solid #e3e3e3;
    border-radius: 50%;
    cursor: pointer;
    height: 28px;
    right: 50px;
    position: absolute;
    top: 20px;
    width: 28px;
  }

  .round label:after {
    border: 2px solid #fff;
    border-top: none;
    border-right: none;
    content: '';
    height: 6px;
    left: 7px;
    opacity: 0;
    position: absolute;
    top: 8px;
    transform: rotate(-45deg);
    width: 12px;
  }

  .round input[type='checkbox'] {
    visibility: hidden;
  }

  .round input[type='checkbox']:checked + label {
    background-color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
  }

  .round input[type='checkbox']:checked + label:after {
    opacity: 1;
  }
`;
