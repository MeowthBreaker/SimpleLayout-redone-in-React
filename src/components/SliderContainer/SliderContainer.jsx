import { useState } from 'react';
import './SliderContainer.css';

import { SliderCards } from '../SliderCards/SliderCards';
import { SliderButtons } from '../SliderButtons/SliderButtons';


export const SliderContainer = ({images, groupAmount}) => {
  const [xCoord, setXCoord] = useState(null);
  const buttons = [...document.body.querySelectorAll('.slider__button')];

  const getXCoords = (e) => {
    if(e.button !== 0) return;

    setXCoord(e.clientX);
  };

  const moveSlide = (e) => {
    if(e.button !== 0) return;

    const index = Number(document.querySelector('.slider__button_active').getAttribute('index'));

    if(xCoord - e.clientX < -50) {
      if(index === 0)
        buttons[buttons.length - 1].click();
      else
        buttons[index - 1].click();
    } else if(xCoord - e.clientX > 50) {
      if(index === buttons.length - 1)
        buttons[0].click();
      else
        buttons[index + 1].click();
    }
  };

  const arr = [...images].reverse();

  const groups = [];

  while(arr.length > 0) {
    const group = [];

    while(true) {
      if(arr.length === 0) {
        if(group.length > 0) groups.push(group);

        break;
      }

      group.push(arr.pop());

      if(group.length === Number(groupAmount)) {
        groups.push(group);
        break;
      }
    }
  }

  return (
    <>
      <div className='slider__container' onMouseDown={(e) => getXCoords(e)} onMouseUp={(e) => moveSlide(e)}>
        {groups.map((group, idx) => (
          <SliderCards key={idx} images={group} className='slider__item'/>
        ))}
      </div>
      <SliderButtons buttonsCount={groups.length} />
    </>
  );
};