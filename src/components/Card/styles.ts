import styled from 'styled-components';

interface ContainerProps {
  direction?: 'row' | 'column';
  leftLine?: boolean;
  colorLeftLine?: string;
  margin?: string;
  width?: string;
  padding?: string;
}

export const Container = styled.div<ContainerProps>`
  background: #fff;
  border: 1px solid ${props => props.theme.colors.borderColor};
  -webkit-box-shadow: 0px 9px 7px -7px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 9px 7px -7px rgba(0, 0, 0, 0.4);
  border-left: ${props => (props.leftLine ? '1px solid #f00' : '')};
  border-color: ${props => (props.colorLeftLine ? '1px solid #f00' : '')};
  display: flex;
  flex: 1;
  flex-direction: ${props => props.direction};
  margin: ${props => props.margin};
  height: 100%;
  width: ${props => (props.width ? props.width : 'auto')} !important;
  border-left: ${props => `3px solid ${props.colorLeftLine}`};
  padding: ${props => (props.padding ? props.padding : 'none')};
`;
