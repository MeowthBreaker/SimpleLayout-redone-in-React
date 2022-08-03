import { useState, useCallback } from "react";
import './LatestWorks.css';
import {cn} from '../../lib/cn';
import {Title} from '../Title/Title';
import {Button} from '../Button/Button';
import { LatestWorksCard } from "../LatestWorksCard/LatestWorksCard";

import WatchSrc from './watch.jpg';
import NapkinSrc from './napkin.png';
import ShirtSrc from './shirt.png';
import BottleSrc from './sport_bottle_PNG5.png';
import WineSrc from './wine.jpg';
import PurseSrc from './purse.jpg';


const data = [
  {
    image: WatchSrc,
    title: 'Hand Watch',
    description: 'ux/ui design',
  },
  {
    image: NapkinSrc,
    title: 'Hand Watch',
    description: 'ux/ui design',
  },
  {
    image: ShirtSrc,
    title: 'Hand Watch',
    description: 'ux/ui design',
  },
  {
    image: BottleSrc,
    title: 'Hand Watch',
    description: 'ux/ui design',
  },
  {
    image: WineSrc,
    title: 'Hand Watch',
    description: 'ux/ui design',
  },
  {
    image: PurseSrc,
    title: 'Hand Watch',
    description: 'ux/ui design',
  }
];

const cls = cn('latest-works');

export const LatestWorks = () => {
  return (
    <div className={cls()}>
      <Title title='Latest Works' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam'/>
      <div className={cls('buttons')}>
        <Button theme='transparent-green'>READ MORE</Button>
        <Button theme='transparent-green'>READ MORE</Button>
        <Button theme='transparent-green'>READ MORE</Button>
        <Button theme='transparent-green'>READ MORE</Button>
      </div>
      <div className={cls('cards')}>
        {data.map(({...props}, idx) => (<LatestWorksCard key={idx} {...props}/>))}
      </div>
    </div>
  );
};