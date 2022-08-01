import { useState, useCallback } from 'react';
import {cn} from '../../lib/cn';
import {Text} from '../Text/Text';
import './Title.css';

const cls = cn('title');

export const Title = ({title, description, className, ...props}) => (
    <Text centered className={cls('', [className])}>
      <Text headline={'2'} className={cls('title')}>{title}</Text>
      <Text size={'l'} className={cls('description')}>{description}</Text>
    </Text>
);