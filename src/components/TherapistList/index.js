import React from 'react'

import {
  Info
 } from './styles';
import { TherapistItem } from '../TherapistItem';


export const TherapistList = ({ avatar }) => {
  return (
    <Info>
        <TherapistItem avatar={avatar}></TherapistItem>
        <TherapistItem avatar={avatar}></TherapistItem>
        <TherapistItem avatar={avatar}></TherapistItem>
    </Info>
  )
}
