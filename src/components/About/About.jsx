import { useState, useCallback } from 'react';
import {cn} from '../../lib/cn';
import {Text} from '../Text/Text';
import {Title} from '../Title/Title';
import {Card} from '../Card/Card';
import {ReactComponent as Communication} from './communication.svg';
import {ReactComponent as Globe} from './globe.svg';
import {ReactComponent as HeadGear} from './head-gear.svg';

import './About.css';

const cls = cn('about');

const data = [
  {
    Image: Globe,
    title: 'Awesome Icons',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
  },
  {
    Image: Communication,
    title: 'Awesome Icons',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
  },
  {
    Image: HeadGear,
    title: 'Awesome Icons',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
  }
]

export const About = () => {
  return (
    <div className={cls()} id='About'>
      <Title title="About us" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam"/>

      <div className={cls('cards')}>
        {data.map(({Image, ...props}, idx) => (
          <Card key={idx} image={<Image width='75px' height='75px'/>} {...props}/>
        ))}
      </div>

    </div>
  );
};