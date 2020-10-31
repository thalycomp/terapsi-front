import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logoLogin.png';
import { Container } from './styles';
import { Inputs } from '../../components/Inputs';

function Login() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="logo teraPsi"/>
      </Link>
      <h1>
        Faça seu login para usar utilizar os nossos recursos
      </h1>
      <p>
        você ainda não tem uma conta?
        <Link to="logon"> Crie aqui uma conta grátis</Link>
      </p>
      <form action="">
        <Inputs type="name" required={true} placeholder="Nome"></Inputs>
        <Inputs type="email" required={true} placeholder="Email"></Inputs>
        <button type="submit">Entrar</button>
      </form>
    </Container>
  )
}

export default Login;
