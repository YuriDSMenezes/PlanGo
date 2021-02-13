import React, { FC } from 'react';
import { CalenderIcon, MoreIcon } from '../../../assets/svgs';
import { Button, Card } from '../../../components';
import {
  Account,
  AlignCenterContent,
  CardContainer,
  DateField
} from './styles';

const CardComponent: FC = () => {
  return (
    <CardContainer>
      <Card margin="0 20px 0 0" direction="column" colorLeftLine="#F6687F">
        <DateField>
          <CalenderIcon />
          <p>30 QUA</p>
          <span />
        </DateField>
        <Account>
          <p>Conta de energia</p>
          <span>R$ 89.99</span>
        </Account>
      </Card>
      <Card margin="0 20px 0 0" direction="column" colorLeftLine="#5E00B9">
        <DateField>
          <CalenderIcon />
          <p>30 QUA</p>
          <span />
        </DateField>
        <Account>
          <p>Conta de energia</p>
          <span>R$ 89.99</span>
        </Account>
      </Card>
      <Card margin="0 20px 0 0" direction="column" colorLeftLine="#5E00B9">
        <DateField>
          <CalenderIcon />
          <p>30 QUA</p>
          <span />
        </DateField>
        <Account>
          <p>Conta de energia</p>
          <span>R$ 89.99</span>
        </Account>
      </Card>
      <Card>
        <Card>
          <AlignCenterContent>
            <Button icon={MoreIcon} text="VER MAIS" textColor="#5E00B9" />
          </AlignCenterContent>
        </Card>
      </Card>
    </CardContainer>
  );
};
export default CardComponent;
