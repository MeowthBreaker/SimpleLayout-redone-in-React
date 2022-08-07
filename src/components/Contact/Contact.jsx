import { useState } from 'react';
import './Contact.css';

import {cn} from '../../lib/cn';

import { Title } from '../Title/Title';
import { Text } from '../Text/Text';
import { Button } from '../Button/Button';

import {ReactComponent as Mark} from './mark.svg';
import {ReactComponent as Phone} from './phone.svg';
import {ReactComponent as Mail} from './envelope.svg';

const cls = cn('contact');

export const Contact = () => {
  return (
    <div className={cls()} id='Contact'>
    <Title className={cls('title')} title='Blog' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam' />
    <div className={cls('cards')}>
      <div className={cls('card')}>
        <div className={cls('card-container')}>
          <Mark className={cls('card-image')}/>
        </div>
        <Text size='l' className={cls('card-text')}>
          Nyan Shelter, Purrland
          <br/>
          Сardboard Box
        </Text>
      </div>
      <div className={cls('card')}>
        <div className={cls('card-container')}>
          <Phone className={cls('card-image')}/>
        </div>
        <Text size='l' className={cls('card-text')}>
          +79781555684
          <br/>
          +13554896000
        </Text>
      </div>
      <div className={cls('card')}>
        <div className={cls('card-container')}>
          <Mail className={cls('card-image')} />
        </div>
        <Text size='l' className={cls('card-text')}>
          snapmychocker@sillygirl.com
          <br/>
          cuddlingintensifies@uma.com
        </Text>
      </div>
    </div>
    <div className={cls('form')}>
      <form>
        <div className={cls('form-userdata')}>
          <input type="text" placeholder='Your Name' className={cls('form-input')}/>
          <input type="text" placeholder='Your Email' className={cls('form-input')}/>
        </div>
        <textarea name="" id="" placeholder='Write message' className={cls('form-textarea')}></textarea>
        <Button theme='white-rounded' className={cls('form-button')}>send</Button>
      </form>
    </div>
  </div>
  );
};