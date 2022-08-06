import { useState } from 'react';
import './SliderContainer.css';

import { SliderCards } from '../SliderCards/SliderCards';
import { SliderButtons } from '../SliderButtons/SliderButtons';

export const SliderContainer = ({images, groupAmount}) => {
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
      <div className='slider__container'>
        {groups.map((group, idx) => (
          <SliderCards key={idx} images={group} className='slider__item'/>
        ))}
      </div>
      <SliderButtons buttonsCount={groups.length} />
    </>
  );
};