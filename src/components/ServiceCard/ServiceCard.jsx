import { useState } from 'react';
import {cn} from '../../lib/cn';
import './ServiceCard.css';
import {Text} from '../Text/Text';
import {Button} from '../Button/Button';

const cls = cn('service-card');

export const ServiceCard = ({image, title, description, buttonText = "READ MORE"}) => {
  return (
    <Text centered className={cls()}>
      {image}
      <Text centered size="xl" className={cls('title')}>{title}</Text>
      <Text centered size="m" className={cls('description')}>{description}</Text>
      <Button theme='transparent'>{buttonText}</Button>
    </Text>
  );
};