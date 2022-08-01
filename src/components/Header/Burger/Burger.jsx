import { useCallback, useState } from 'react';
import './Burger.css';
import {cn} from '../../../lib/cn';


const cls = cn('burger');

export const Burger = ({active, onClick}) => {

  return (
    <div className={cls({active})} onClick={onClick}>
      <div className={cls('line')}></div>
      <div className={cls('line')}></div>
      <div className={cls('line')}></div>
    </div>
  );
}