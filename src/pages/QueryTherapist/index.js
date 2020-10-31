import React from 'react';
import { Link } from 'react-router-dom';

import { Container,
  Banner,
  Header,
  Nav,
  BannerInterno,
  TitleSubtitle,
  Query
 } from './styles';

 import Footer from '../../components/Footer';

 import logo from '../../assets/logo.png';
 import avatar from '../../assets/avatar.png';
import { TherapistList } from '../../components/TherapistList';

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
                  <Link to="/dashboard">
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
      <TherapistList avatar={avatar}></TherapistList>
      <Footer/>
    </Container>
    );
}

export default QueryTherapist;
