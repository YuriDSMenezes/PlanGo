/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import { ArrowRightIcon } from '../../../assets/svgs';
import { Card, Header } from '../../../components';
import {
  ButtonNextContainer,
  CardContainer,
  CardOption,
  CheckboxContainer,
  Container,
  ContantContainer,
  StepButtons,
  StepContent,
  SteperContainer
} from './styles';

interface Props {
  itemName?: string;
}
interface DreamProps {
  label?: string;
  strongLabel?: string;
  value?: string;
  type?: string;
}

const StepsContainer: FC<Props> = valueProps => {
  const [planValue, setPlanValue] = useState<string>();
  const [indice, setIndice] = useState<number[]>([0]);
  const [dreamData, setDreamData] = useState<DreamProps[]>([
    {
      label: 'Qual é o',
      strongLabel: `valor total do ${valueProps.itemName}?`,
      value: planValue,
      type: 'text'
    },
    {
      label: 'Voce vai dividir o valor',
      strongLabel: 'com mais alguém?',
      value: '',
      type: 'check'
    },
    {
      label: 'E-mail dos parceiros',
      strongLabel: '',
      value: ' ',
      type: 'email'
    },
    {
      label: 'Qual é o',
      strongLabel: 'número de parcelas?',
      value: '',
      type: 'text'
    }
  ]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d)(\d{2})$/, '$1,$2');
    value = value.replace(/(?=(\d{3})+(\D))\B/g, '');
    e.currentTarget.value = value;
    return setPlanValue(e.target.value);
  };
  const handleNextStep = useCallback(() => {
    const getIndice = [...indice];
    const sumIndice = getIndice.length + 1;
    return setIndice(prev => [...prev, sumIndice]);
  }, [indice]);

  return (
    <Container>
      <Header />
      <ContantContainer>
        <SteperContainer>
          <StepContent />
          <StepButtons />
        </SteperContainer>
        <CardContainer>
          <Card direction="column" padding="10px 30px">
            <CardOption>
              <p>Qual é o </p>
              <span>
                valor total do seu
                {'  '}
                {valueProps.itemName}
              </span>
              <input type="text" />
            </CardOption>
            <CardOption>
              {indice.includes(2) && (
                <>
                  <p>Voce vai dividir o valor</p>
                  {'  '}
                  <span>com mais alguém?</span>
                  <CheckboxContainer>
                    <div className="container">
                      <div className="round">
                        <span>Sim</span>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1" />
                      </div>
                    </div>
                    <div className="container">
                      <div className="round">
                        <span>Não</span>
                        <input type="checkbox" id="checkbox2" />
                        <label htmlFor="checkbox2" />
                      </div>
                    </div>
                  </CheckboxContainer>
                </>
              )}
            </CardOption>
            <CardOption>
              {indice.includes(3) && (
                <>
                  <p>E-mail dos parceiros</p>
                  <input type="email" />
                </>
              )}
            </CardOption>
            <CardOption>
              {indice.includes(4) && (
                <>
                  <p>Qual é o </p>
                  <span>número de parcelas?</span>
                  <input type="text" />
                </>
              )}
            </CardOption>
          </Card>
        </CardContainer>
      </ContantContainer>
      <ButtonNextContainer onClick={handleNextStep}>
        <ArrowRightIcon />
      </ButtonNextContainer>
    </Container>
  );
};

export default StepsContainer;
