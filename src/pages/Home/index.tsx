import React, { FC } from 'react';

import { Link } from 'react-router-dom';
import {
  Container,
  ImageContainer,
  DescriptionContainer,
  Content,
  ButtonsContainer
} from './styles';
import { PeopleBackgroundIcon, LogoIcon } from '../../assets/svgs';

const Home: FC = () => {
  return (
    <Container>
      <Content>
        <ImageContainer>
          <PeopleBackgroundIcon />
        </ImageContainer>
        <DescriptionContainer>
          <LogoIcon />
          <span>
            Seu planejamento
            <strong> e nosso app</strong>
          </span>
          <span>
            fazendo seus
            <strong> sonhos acontecerem</strong>
          </span>
          <h3>Bora começar?</h3>
          <ButtonsContainer>
            <button type="button">
              <Link to="/signIn">Entrar</Link>
            </button>
            <button type="button">
              <Link to="/singUp">Cadastrar</Link>
            </button>
          </ButtonsContainer>
        </DescriptionContainer>
      </Content>
    </Container>
  );
};

export default Home;
