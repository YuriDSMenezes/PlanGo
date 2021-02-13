import React, { ProgressHTMLAttributes } from 'react';
import { Container } from './styles';

interface ProgressBarProps extends ProgressHTMLAttributes<HTMLProgressElement> {
  value: number;
  max: number;
  color: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max,
  color,
  ...rest
}: ProgressBarProps) => {
  return (
    <Container color={color}>
      <progress value={value} max={max} {...rest} />
    </Container>
  );
};

export default ProgressBar;
