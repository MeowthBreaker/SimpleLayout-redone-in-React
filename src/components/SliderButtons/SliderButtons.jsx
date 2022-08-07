import { useCallback, useEffect, useState } from 'react';
import './SliderButtons.css';

import {cn} from '../../lib/cn';

const cls = cn('slider-buttons');

export const SliderButtons = ({buttonsCount}) => {
  const [buttonActive, setButtonActive] = useState(0);

  useEffect(() => {
    const buttonsDOM = [...document.querySelectorAll('.slider__button')];
    const container = document.querySelector('.slider__container');

    buttonsDOM.forEach((button) => {
      button.classList.remove('slider__button_active');
    });

    buttonsDOM[buttonActive].classList.add('slider__button_active');

    container.style.transform = `translate(${buttonActive * -100}%)`;
  },
  [buttonActive]);

  return (
    <div className={cls()}>
      {new Array(buttonsCount)
        .fill(0)
        .map((item, i) => {
          if(i === 0)
            return (<div index={i} className='slider__button slider__button_active' onClick={() => setButtonActive(i)}></div>)
          return (<div index={i} className='slider__button' onClick={() => setButtonActive(i)}></div>);
        })}
    </div>
  );
};