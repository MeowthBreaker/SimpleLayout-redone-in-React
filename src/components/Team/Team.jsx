import { useState } from 'react';
import './Team.css';

import {cn} from '../../lib/cn';

import { Title } from '../Title/Title';
import { Slider } from '../Slider/Slider';

import First from './Images/1.jpg';
import Second from './Images/2.jpg';
import Third from './Images/3.jpg';
import Fourth from './Images/4.jpg';
import Fifth from './Images/5.jpg';
import Sixth from './Images/6.jpg';
import Seventh from './Images/7.jpg';
import Eighth from './Images/8.jpg';
import Ninth from './Images/9.jpg';

const images = [First, Second, Third, Fourth, Fifth, Sixth, Seventh ,Eighth, Ninth];


const cls = cn('team');

export const Team = ( ) => {
  return (
    <div className={cls()}>
      <Title title='Our team member' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam'/>
      <Slider images={images}/>
    </div>
  );
};