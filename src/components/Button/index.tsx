import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  textColor?: string;
  backgroundColor?: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  children,
  textColor,
  text,
  backgroundColor,
  icon: Icon,
  ...props
}) => (
  <Container
    type="button"
    {...props}
    backgroundColor={backgroundColor}
    textColor={textColor}
  >
    {Icon && <Icon fill="#fff" />}
    {children}
    <span>{text}</span>
  </Container>
);

export default ButtonComponent;
