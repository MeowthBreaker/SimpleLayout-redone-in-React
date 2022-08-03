import { useState, useCallback, useEffect } from "react";
import './OfferCard.css';
import {cn} from '../../lib/cn';

import {Text} from '../Text/Text';
import {Button} from '../Button/Button';

const cls = cn('offer-card');

export const OfferCard = ({title}) => {

  const [isHovered, setIsHovered] = useState(false);

  const onHover = useCallback(() => setIsHovered(true), []);
  const onUnhover = useCallback(() => setIsHovered(false), []);

  return (
    <div className={cls()} onMouseEnter={onHover} onMouseLeave={onUnhover}>
      <div className={cls('text')}>
        <Text centered headline='2' className={cls('title')}>{title}</Text>
        <div className={cls('price')}>
          <Text as='span' size='l' className={cls('currency')}>$</Text>
          <Text as='span' headline='1' className={cls('value')}>00</Text>
          <Text as='span' size='l' className={cls('month')}>per month</Text>
        </div>
      </div>
      <ul className={cls('list')}>
        <li className={cls('list-item')}>30 Free Trail</li>
        <li className={cls('list-item')}>5 Free Projects</li>
        <li className={cls('list-item')}>PHP 5 Enabled</li>
        <li className={cls('list-item')}>24/7 Supports</li>
      </ul>
      <Button className={cls('button')} theme={isHovered ? 'green-onhover' : undefined}>ORDER NOW</Button>
    </div>
  );
};