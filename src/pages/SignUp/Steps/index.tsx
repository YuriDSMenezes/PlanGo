import React, { FC, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import {
  Container,
  SteperContainer,
  Form,
  ButtonNextContainer,
} from './styles';
import { Card } from '../../../components';
import { ArrowRightIcon } from '../../../assets/svgs';
import api from '../../../services/api';

interface UserDataProps {
  label: string;
  strongLabel: string;
  lightLabel?: string;
  value?: string;
}

const Steps: FC = () => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const [indice, setIndice] = useState<number>(0);
  const [dataStep, setDataStep] = useState<UserDataProps[]>([
    {
      label: 'Olá, somos a PlanGo',
      strongLabel: 'Como podemos te chamar?',
      value: 'email',
    },
    {
      label: 'Muito bom,',
      strongLabel: 'E qual é o seu e-mail?',
      value: 'nome',
    },
    {
      label: 'E para finalizar',
      strongLabel: 'crie uma senha',
      lightLabel: 'Para sua segurança, use letras e números',
      value: 'senha',
    },
  ]);

  const onSubmit = async (data: string[]) => {
    try {
      await api.post('credencial', data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickNextOption = useCallback(() => {
    const maxLength = dataStep.length - 1;
    return indice < maxLength ? setIndice(indice + 1) : indice;
  }, [dataStep.length, indice]);

  const max = dataStep.length - 1;
  return (
    <Container>
      <SteperContainer />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Card padding="50px" direction="column">
          <p>{dataStep[indice].label}</p>
          <span>{dataStep[indice].strongLabel}</span>
          {dataStep[indice].lightLabel && (
            <span>{dataStep[indice].lightLabel}</span>
          )}
          <input
            type="text"
            name={dataStep[indice].value}
            ref={register({ required: true })}
          />
        </Card>
        {indice === max ? (
          <ButtonNextContainer type="submit">
            <ArrowRightIcon />
          </ButtonNextContainer>
        ) : (
          <ButtonNextContainer onClick={handleClickNextOption} type="button">
            <ArrowRightIcon />
          </ButtonNextContainer>
        )}
      </Form>
    </Container>
  );
};

export default Steps;
