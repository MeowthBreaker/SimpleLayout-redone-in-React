import { createElement } from "react";
import {cn} from '../../lib/cn';
import './Text.css';

const cls = cn('text');

export const Text = ({as = 'div', size, centered, headline, linked, className, ...props}) =>
  createElement(
    as,
    {
      className: cls({size, centered, headline, linked}, [className]),
      ...props
    }
  )
;