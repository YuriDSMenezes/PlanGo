import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import {
  Container,
  LogoContainer,
  ImageContainer,
  FormContainer,
  Content,
  ButtonsContainer,
} from './styles';
import { LoginBackgroundIcon, LogoIcon } from '../../assets/svgs';

const SignIn: FC = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async (data: string[]) => {
    try {
      const response = await api.post('autenticar', data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <LogoContainer>
        <LogoIcon />
      </LogoContainer>
      <Content>
        <ImageContainer>
          <LoginBackgroundIcon />
        </ImageContainer>
        <FormContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="login">
              Login
              <input
                type="email"
                ref={register({ required: true })}
                name="email"
                id="login"
                placeholder="Digite o seu usuário"
              />
            </label>
            <label htmlFor="password">
              Senha
              <input
                type="text"
                ref={register({ required: true })}
                name="password"
                id="password"
                placeholder="*********"
              />
            </label>
            <ButtonsContainer>
              <button type="submit">Entrar</button>
            </ButtonsContainer>
          </form>
          <span>
            ou
            <>
              {'  '}
              <Link to="SignUp">Cadastre-se</Link>
              {'  '}
            </>
            e comece a consquistar seus sonhos
          </span>
        </FormContainer>
      </Content>
    </Container>
  );
};

export default SignIn;
