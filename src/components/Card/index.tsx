import React, { FC } from 'react';

import { Container } from './styles';

interface CardProps {
  direction?: 'row' | 'column';
  leftLine?: boolean;
  colorLeftLine?: string;
  margin?: string;
  width?: string;
  padding?: string;
}

const CardComponent: FC<CardProps> = ({
  children,
  leftLine,
  colorLeftLine,
  direction,
  margin,
  width,
  padding,
}) => {
  return (
    <Container
      leftLine={leftLine}
      colorLeftLine={colorLeftLine}
      direction={direction}
      margin={margin}
      width={width}
      padding={padding}
    >
      {children}
    </Container>
  );
};

export default CardComponent;
