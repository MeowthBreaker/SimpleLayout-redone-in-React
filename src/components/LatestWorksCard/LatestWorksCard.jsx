import { useState, useCallback } from "react";
import './LatestWorksCard.css';
import {cn} from '../../lib/cn';
import {Text} from '../Text/Text';


const cls = cn('latest-works-card');

export const LatestWorksCard = ({image, title, description}) => {
  return (
    <div className={cls()}>
      <img src={image} className={cls('image')}/>
      <div className={cls('text')}>
        <Text centered size='xl'>{title}</Text>
        <Text centered size='m'>{description}</Text>
      </div>
    </div>
  );
};