import { useState } from 'react';
import './Services.css';

import {cn} from '../../lib/cn';
import {Title} from '../Title/Title';
import {ServiceCard} from '../ServiceCard/ServiceCard';

import {ReactComponent as Phone} from './smartphone.svg';

const cls = cn('services');

const data = [
  {
    Image: Phone,
    title: 'Research',
    description: 'At vero eos et ccusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.'
  },
  {
    Image: Phone,
    title: 'Portfolio',
    description: 'At vero eos et ccusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.'
  },
  {
    Image: Phone,
    title: 'Support',
    description: 'At vero eos et ccusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.'
  },
  {
    Image: Phone,
    title: 'Documentation',
    description: 'At vero eos et ccusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.'
  },
  {
    Image: Phone,
    title: 'Development',
    description: 'At vero eos et ccusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.'
  },
  {
    Image: Phone,
    title: 'Design',
    description: 'At vero eos et ccusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.'
  }
];

export const Services = () => {
  return (
    <div className={cls()}>
      <Title
        title="Our services"
        description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam'
      />
      <div className={cls('cards')}>
        {data.map(({Image, ...props}, idx) => (
          <ServiceCard key={idx} image={<Image width='50px' height='50px'/>} {...props}/>
        ))}
      </div>
    </div>


  );
};