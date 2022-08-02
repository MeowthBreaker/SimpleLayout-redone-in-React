import { useState, useCallback, useEffect } from 'react';
import {cn} from '../../lib/cn';
import './BackToTop.css';
import {ReactComponent as TopArrow} from './top-arrow.svg';

const cls = cn('top-arrow');

export const BackToTop = () => {

  const OnArrowClick = useCallback(() => {
    document.body.scrollIntoView({behavior: "smooth", block: "start"});
  },
  []);


  const root = document.body.querySelector('.root');

  useEffect(() => {
    const topArrow = document.body.querySelector('.top-arrow');

    document.addEventListener('scroll', (e) => {
      if(window.scrollY > 600)
        topArrow.style.opacity = 1;
      else
        topArrow.style.opacity = 0;
    });
  },
  []);


  return (
    <div className={cls()} onClick={OnArrowClick}>
      <TopArrow className={cls('anchor')} width='40px' height='40px'/>
    </div>
  );
};