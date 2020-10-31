import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logoLogin.png';
import { Container, Radio } from './styles';
import { Inputs } from '../../components/Inputs';

function Logon() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="logo teraPsi"/>
      </Link>
      <h1>
        Faça seu cadastro para utilizar os nossos recursos
      </h1>
      <p>
        você ja tem uma conta?
        <Link to="login"> Faça login na sua conta aqui.</Link>
      </p>
      <form action="">
        <Inputs type="name" required={true} placeholder="Nome"></Inputs>
        <Inputs type="email" required={true} placeholder="Email"></Inputs>
        <Inputs type="password" required={true} placeholder="Senha"></Inputs>

        <label htmlFor="">Que tipo de perfil deseja criar?</label>
        <Radio>
          <input type="radio" name="terapeuta" id="terapeuta"/>
          <label for="terapeuta">Terapeuta</label>
          <input type="radio" name="usuario" id="usuario"/>
          <label for="usuario">Usuário</label>
        </Radio>
        <button type="submit">Cadastrar</button>
      </form>
    </Container>
  )
}

export default Logon;
