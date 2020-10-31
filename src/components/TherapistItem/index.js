import React from 'react'

import {
  HeaderInfo,
  HgroupInfo,
  CostDuration,
  Description
 } from './styles';

export const TherapistItem = ({ avatar }) => {
  return (
      <li>
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
      </li>
  )
}
