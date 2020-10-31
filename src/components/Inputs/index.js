import React from 'react'

import { Container } from './styles';

export const Inputs = ({ type, placeholder, required }) => {
  return (
    <Container>
      <input type={type} required={required} name="" placeholder={placeholder}/>
    </Container>
  )
}
