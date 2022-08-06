import { useState } from 'react';
import './SliderCards.css';

import {cn} from '../../lib/cn';

import { SliderCard } from '../SliderCard/SliderCard';

const cls = cn('slider-cards');

export const SliderCards = ({images, className}) => {
  return (
    <div className={cls('', [className])}>
      {images.map(
        (image, idx) => (<SliderCard key={idx} image={image} />)
      )}
    </div>
  );
};