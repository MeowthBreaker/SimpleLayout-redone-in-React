import './MainScreen.css';
import { useState, useCallback } from 'react';
import {cn} from '../../lib/cn';
import {Button} from '../Button/Button';
import {Text} from '../Text/Text';
import {ReactComponent as DownArrow} from './down-arrow.svg';

const cls = cn('main-screen');

export const MainScreen = () => {

  const onDownArrowClick = useCallback(() => {
    const about = document.body.querySelector('.about');

    about?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  },
  []);

  return(
    <div className={cls()}>
      <Text centered className={cls('text')}>
        <Text className={cls('title')}>
          Web development project
        </Text>
        <Text className={cls('description')}>
          Very suitable all web development projects
        </Text>
      </Text>

      <div className={cls('actions')}>
        <Button children='our services' theme="white" className={cls('button')}/>
        <Button children='hire is now' theme='green' className={cls('button')}/>
        <DownArrow className={cls('down-arrow')} width='75px' height='75px' onClick={onDownArrowClick}/>
      </div>
    </div>
  );
};