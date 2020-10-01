import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';


import { Container,
  Banner,
  Header,
  Nav,
  Info,
  HeaderInfo,
  HgroupInfo,
  Links,
  Description
 } from './styles';

 import avatar from '../../assets/avatar.png';

 import Footer from '../../components/Footer';

 import logo from '../../assets/logo.png';

function Dashboard() {
  return (
  <Container>
      <Banner>
      <Header>
              <Link to="/">
                  <img src={logo} alt="terapsi" />
              </Link>
              <Nav>
                  <Link to="/logon">
                      <strong>Notificação</strong>
                  </Link>
                  <Link to="/querytherapist">
                      <strong>Terapeutas</strong>
                  </Link>
              </Nav>
        </Header>
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
            </HgroupInfo>
            <Links>
                <div>
                  <AiOutlineEdit size={20} color="#02BE6E"/>
                  <Link to="/editprofile">Editar perfil</Link>
                </div>
            </Links>
        </HeaderInfo>
        <Description>
          <strong>Sua agenda da semana: </strong>
          <p>Você não tem consulta marcada!</p>
        </Description>
      </Info>
      <Footer />
  </Container>
  );
}

export default Dashboard;
