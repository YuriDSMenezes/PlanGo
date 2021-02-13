import React, { FC, useState } from 'react';
import {
  CarIcon,
  CellIcon,
  DebtsIcon,
  HouseIcon,
  PiggIcon,
  WorldIcon
} from '../../assets/svgs/dreams';
import { Header } from '../../components';
import Steps from './Steps';
import {
  Container,
  DescriptionDream,
  Dream,
  DreamsContainer,
  ImageDream
} from './styles';

const DreamsPage: FC = () => {
  const [stepValue, setStepValue] = useState<string>();
  const [showSteps, setShowSteps] = useState<boolean>(false);

  const handleClick = (targetValue: string) => {
    const value = targetValue;
    setStepValue(value);
    setShowSteps(!showSteps);
  };

  return (
    <>
      {!showSteps && (
        <DreamsContainer>
          <Header />
          <Container>
            <Dream bgColor="#9a87fe" onClick={() => handleClick('veiculo')}>
              <ImageDream>
                <CarIcon />
              </ImageDream>
              <DescriptionDream color="#433299">
                <span>Comprar um</span>
                <p>Veículo</p>
              </DescriptionDream>
            </Dream>
            <Dream bgColor="#F8B7D6" onClick={() => handleClick('dividas')}>
              <ImageDream>
                <CellIcon />
              </ImageDream>
              <DescriptionDream color="#CC4586">
                <span>Sair das </span>
                <p>Dívidas</p>
              </DescriptionDream>
            </Dream>
            <Dream bgColor="#FFD077">
              <ImageDream>
                <DebtsIcon />
              </ImageDream>
              <DescriptionDream color="#B3801E">
                <span>Fazer uma</span>
                <p>Viagem</p>
              </DescriptionDream>
            </Dream>
            <Dream bgColor="#9DDB8B">
              <ImageDream>
                <HouseIcon />
              </ImageDream>
              <DescriptionDream color="#4E9C37">
                <span>Comprar um</span>
                <p>Eletrônico</p>
              </DescriptionDream>
            </Dream>
            <Dream bgColor="#7AD1E4">
              <ImageDream>
                <PiggIcon />
              </ImageDream>
              <DescriptionDream color="#298A9F">
                <span>Comprar seu</span>
                <p>Imóvel</p>
              </DescriptionDream>
            </Dream>
            <Dream bgColor="#FEBD83">
              <ImageDream>
                <WorldIcon />
              </ImageDream>
              <DescriptionDream color="#DE781E">
                <span>Realizar outro</span>
                <p>Sonho</p>
              </DescriptionDream>
            </Dream>
          </Container>
        </DreamsContainer>
      )}
      {showSteps && <Steps itemName={stepValue} />}
    </>
  );
};

export default DreamsPage;
