import './Header.css';
import {cn} from '../../lib/cn';
import { Burger } from './Burger/Burger';
import { useState, useCallback, useMemo } from 'react';
import {ReactComponent as SearchImg} from './img/search.inline.svg'
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Services } from '../Services/Services';

const cls = cn('header');


export const Header = () => {
  const navItems = useMemo(() => ['Home', 'About', 'Servicing', 'Portfolio', 'Blog', 'Contact'], []);

  const [active, setActive] = useState(false);

  const onBurgerClick = useCallback(() => {
      setActive(!active);
    },
    [active]
  );

  const scrollWithOffset = (el) => {
    const yOffset = (window.innerWidth < 1250) ? 0 : -120;

    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  }

  return (
    <>
      <Burger onClick={onBurgerClick} active={active}/>
      <div className={cls({active})}>
        <img className={cls('logo')} alt="Your logo"/>
        <nav className={cls('nav')}>
          <ul className={cls('list')}>
            {navItems.map((item) => (
              <HashLink
                to={`/#${item}`}
                smooth
                scroll={el => scrollWithOffset(el)}
                className={cls('list-item')}
              >
                {item}
              </HashLink>
            ))}
          </ul>
        </nav>

        <div className={cls('search')}>
          <SearchImg className={cls('search-logo')} width="25px" height="25px"/>
        </div>
      </div>
    </>
  );
}