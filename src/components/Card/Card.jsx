import { useState, useCallback } from 'react';
import {cn} from '../../lib/cn';
import {Text} from '../Text/Text';
import './Card.css'

const cls = cn('card');

export const Card = ({image, title, description, ...props}) => {
  return (
    <Text centered className={cls()}>
      {image}
      <Text size='xl' className={cls('title')}>
        {title}
      </Text>
      <Text size='m' className={cls('description')}>
        {description}
      </Text>
    </Text>
  );
};