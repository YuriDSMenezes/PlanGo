import React, { FC } from 'react';
import { MoreIcon } from '../../../assets/svgs';
import { Card, GraphicDoughnut, Button } from '../../../components';
import { GraphicContainer } from './styles';

const GraphicData: FC = () => {
  return (
    <Card margin="0 0 0 10px">
      <GraphicContainer>
        <p>Despesas por categoria</p>
        <GraphicDoughnut />
        <Button
          icon={MoreIcon}
          text="VER MAIS"
          textColor="#5E00B9"
          style={{ fontSize: '1rem' }}
        />
      </GraphicContainer>
    </Card>
  );
};

export default GraphicData;
