import React from 'react';
import { Link } from 'react-router-dom';

import { Container,
  Banner,
  Header,
  Nav,
  BannerInterno,
  TitleSubtitle,
  Query,
  Info,
  HeaderInfo,
  HgroupInfo,
  CostDuration,
  Description
 } from './styles';

 import Footer from '../../components/Footer';

 import logo from '../../assets/logo.png';
 import avatar from '../../assets/avatar.png';


function QueryTherapist() {
  return (
    <Container>
      <Banner>
        <Header>
              <Link to="/">
                  <img src={logo} alt="terapsi" />
              </Link>
              <Nav>
                  <Link to="/logon">
                      <strong>Notificações</strong>
                  </Link>
                  <Link to="/login">
                      <strong>Perfil</strong>
                  </Link>
              </Nav>
        </Header>
        <BannerInterno>
          <TitleSubtitle>
              <h1>
                Encontre seu terapeuta
              </h1>
              <p>
                são profissionais de várias especialidades e preços
              </p>
          </TitleSubtitle>
          <Query>
              <div>
                <strong>Especialidade</strong>
                <input placeholder="buscar"></input>
              </div>
              <div>
                <strong>Valor consulta</strong>
                <input placeholder="R$"></input>
              </div>
              <button>Buscar</button>
          </Query>
        </BannerInterno>
      </Banner>
      <Info>
        <HeaderInfo>
            <HgroupInfo>
              <img src={avatar} alt="avatar-terapeuta" />
              <div>
                <strong>Loren Ipson</strong>
                <span>Especialista Gestalt</span>
                <span>CRP: 2225555</span>
              </div>
              <CostDuration>
                <div>
                  <strong>Duração</strong>
                  <span>50 min</span>
                </div>
                <div>
                  <strong>Preço</strong>
                  <span>R$ 80</span>
                </div>
              </CostDuration>
            </HgroupInfo>
        </HeaderInfo>
        <Description>
          <strong>Descrição profissional: </strong>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci
          didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.</p>
        </Description>
        <button>Quero saber mais</button>
      </Info>
      <Footer/>
    </Container>
    );
}

export default QueryTherapist;
