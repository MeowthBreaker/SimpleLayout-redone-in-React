import { useState } from 'react';
import './SliderCard.css';

import {cn} from '../../lib/cn';

import { Text } from '../Text/Text';
import { Button } from '../Button/Button';

import {ReactComponent as Fb} from './fb.svg';
import {ReactComponent as Tw} from './tw.svg';
import {ReactComponent as Msg} from './msg.svg';
import {ReactComponent as Web} from './web.svg';

const cls = cn('slider-card');

export const SliderCard = ({image}) => {
  return (
    <div className={cls()}>
      <img src={image} className={cls('image')} alt='girl'/>
      <Text centered className={cls('title')}>
        <Text text='xl'>Name</Text>
        <Text text='m'>Proffesion</Text>
      </Text>
      <div className={cls('buttons')}>
        <Button theme='transparent-blue' className={cls('button')}>
          <Fb width='35px' height='35px' className={cls('button-icon')}/>
        </Button>
        <Button theme='transparent-blue' className={cls('button')}>
          <Tw width='35px' height='35px' className={'button-icon'}/>
        </Button>
        <Button theme='transparent-blue' className={cls('button')}>
          <Msg width='35px' height='35px' className={'button-icon'}/>
        </Button>
        <Button theme='transparent-blue' className={cls('button')}>
          <Web width='35px' height='35px' className={'button-icon'}/>
        </Button>
      </div>
    </div>
  );
};