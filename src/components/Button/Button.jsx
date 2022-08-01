import { useState, useCallback } from "react";
import './Button.css';
import {cn} from '../../lib/cn';

const cls = cn('button');

export const Button = ({active, theme, className, ...props}) => (
    <div className={cls({active, theme}, [className])} {...props}/>
);