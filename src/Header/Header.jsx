import './Header.css';
import {cn} from '../lib/cn';
import { Burger } from './Burger/Burger';
import { useState, useCallback } from 'react';
import {ReactComponent as SearchImg} from './img/search.inline.svg'


const cls = cn('header');

export const Header = () => {

  const [active, setActive] = useState(false);

  const onBurgerClick = useCallback(() => {
      setActive(!active);
    },
    [active]
  );


  return (
    <>
      <Burger onClick={onBurgerClick} active={active}/>
      <div className={cls({active})}>
        <img className={cls('logo')} alt="Your logo"/>
        <nav className={cls('nav')}>
          <ul className={cls('list')}>
            <li className={cls('list-item')}>Home</li>
            <li className={cls('list-item')}>About</li>
            <li className={cls('list-item')}>Servicing</li>
            <li className={cls('list-item')}>Portfolio</li>
            <li className={cls('list-item')}>Blog</li>
            <li className={cls('list-item')}>Contact us</li>
          </ul>
        </nav>

        <div className={cls('search')}>
          <SearchImg className={cls('search-logo')} width="25px" height="25px"/>
        </div>
      </div>
    </>
  );
}