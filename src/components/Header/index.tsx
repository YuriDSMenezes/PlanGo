import React, { FC } from 'react';
import { Container } from './styles';

import { PlangoIcon, BellIcon } from '../../assets/svgs';

const Header: FC = () => {
  return (
    <Container>
      <PlangoIcon />
      <BellIcon />
    </Container>
  );
};

export default Header;
