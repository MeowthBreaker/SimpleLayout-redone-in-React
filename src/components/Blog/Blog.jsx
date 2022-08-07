import { useState } from 'react';
import './Blog.css';

import {cn} from '../../lib/cn';

import { Title } from '../Title/Title';
import { BlogCard } from './BlogCard/BlogCard';
import { Button } from '../Button/Button';

import First from './Images/seo1.jpg';
import Second from './Images/seo2.jpg';
import Third from './Images/seo3.jpg';

const data = [
  {
    title: 'Згляните на девочку!',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore quae aspernatur debitis dolorum dolores ut, ullam perspiciatis, distinctio blanditiis provident repellat molestiae et, consequatur alias?',
    date: '14.0702017',
    topic: 'Development',
    image: First
  },
  {
    title: 'И на эту!',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore quae aspernatur debitis dolorum dolores ut, ullam perspiciatis, distinctio blanditiis provident repellat molestiae et, consequatur alias?',
    date: '14.0702017',
    topic: 'Development',
    image: Second
  },
  {
    title: 'И на эту!',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore quae aspernatur debitis dolorum dolores ut, ullam perspiciatis, distinctio blanditiis provident repellat molestiae et, consequatur alias?',
    date: '14.0702017',
    topic: 'Development',
    image: Third
  },
];

const cls = cn('blog');

export const Blog = () => {
  return (
    <div className={cls()}>
      <Title title='Blog' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam' />
      <div className={cls('ceo')}>
        {
          data.map((props) => (
            <BlogCard {...props} />
          ))
        }
      </div>
      <Button theme='green' className={cls('button')}>MORE READ</Button>
    </div>
  );
};