import React from 'react';
import { FaFacebook } from 'react-icons/fa';

import { Container } from './styles';

import logo from '../../assets/logo.png';


function Footer() {
  return (
    <Container>
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

export default Footer;
