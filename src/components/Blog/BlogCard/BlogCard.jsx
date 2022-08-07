import { useState } from 'react';
import './BlogCard.css';
import {cn} from '../../../lib/cn';

import {ReactComponent as DateIcon} from './blog-cal.svg';
import {ReactComponent as TopicIcon} from './blog-link.svg';

const cls = cn('blog-card');

import { Text } from '../../Text/Text';

export const BlogCard = ({title, description, date, topic, image}) => {
  return (
    <div className={cls()}>
      <div className={cls('image-container')}>
        <img src={image} alt="<3" className={cls('image')}/>
      </div>
      <div className={cls('article')}>
        <Text headline='2' className={cls('article-title')}>{title}</Text>
        <div className={cls('meta')}>
          <div className={cls('meta-date')}>
            <DateIcon width='10px' height='10px' className={cls('date-icon')}/>
            <Text as='p' className={cls('date-text')}>{date}</Text>
          </div>
          <div className={cls('meta-topic')}>
            <TopicIcon width='10px' height='10px' className={cls('topic-icon')}/>
            <Text as='p' className={cls('topic-text')}>{topic}</Text>
          </div>
          .{}
        </div>
        <Text size='l' className={cls('article-description')}>{description}</Text>
      </div>
    </div>
  );
};