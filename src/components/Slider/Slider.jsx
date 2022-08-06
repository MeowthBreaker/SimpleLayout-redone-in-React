import { useState } from 'react';
import './Slider.css';

import {cn} from '../../lib/cn';

import {SliderContainer} from '../SliderContainer/SliderContainer';

const cls = cn('slider');

export const Slider = ({images}) => {
  return (
    <div className={cls()}>
      <SliderContainer groupAmount='3' images={images} />
    </div>
  );
};