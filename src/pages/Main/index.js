import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';

import { Container,
  Header,
  About,
  Nav,
  Banner,
  BannerInterno,
  TitleSubtitle,
  Users,
  Psi,
  ConteinerAbout,
  List
 } from './styles';

import logo from '../../assets/logo.png';
import imgBanner from '../../assets/imgBanner.png';

function Main() {
  return (
    <Container>
      <Banner>
        <Header>
              <Link to="/">
                  <img src={logo} alt="terapsi" />
              </Link>
              <Nav>
                  <Link to="/logon">
                      <strong>Cadastrar</strong>
                  </Link>
                  <Link to="/login">
                      <strong>Entrar</strong>
                  </Link>
              </Nav>
        </Header>
        <BannerInterno>
          <TitleSubtitle>
              <h1>
                Seu bem estar é muito importante para nós
              </h1>
              <p>
                te aproximamos dos melhores terapeutas do mercado sem sair de casa
              </p>
          </TitleSubtitle>
          <img src={imgBanner} alt="banner terapsi" />
        </BannerInterno>
      </Banner>
      <ConteinerAbout>
        <About>
          <h1>
            Conheça nosso atendimento psicológico online
          </h1>
          <Users>
            <Psi>
              <h2>
                Psicólogo
              </h2>
              <List>
                <l1>Flexibilidade de horário</l1>
                <li>Ambiente seguro e simples</li>
                <li>Dashboard organizado</li>
                <li>Trabalhe de onde quiser</li>
                <li>Possibilidade de angariar clientes do mundo todo</li>
              </List>
            </Psi>
            <Psi>
              <h2>
                Usuário
              </h2>
              <List>
                <l1>Tenha acesso aos melhores profissionais</l1>
                <li>Flexibilidade de horário</li>
                <li>Ambiente seguro e simples</li>
                <li>Plataforma acessível pelo computador ou celular</li>
              </List>
            </Psi>
          </Users>
        </About>
      </ConteinerAbout>
      <footer>
        <img src={logo} alt="terapsi" />
        <div>
          <strong>FALE CONOSCO</strong>
          <span>(88) 9999 9999</span>
          <span>Rua dos Bobos, numero 0</span>
        </div>
        <FaFacebook size={40} color="#fff"/>
      </footer>
    </Container>
  );
}

export default Main;
