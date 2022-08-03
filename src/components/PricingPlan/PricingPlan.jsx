import { useState, useCallback } from "react";
import './PricingPlan.css';
import {cn} from '../../lib/cn';

import {Title} from '../Title/Title';
import {OfferCard} from '../OfferCard/OfferCard';

const cls = cn('pricing-plan');

export const PricingPlan = () => {
  return (
    <div className={cls()}>
      <Title title='Pricing Plan' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam'/>
      <div className={cls('cards')}>
        <OfferCard title='Free Trail' />
        <OfferCard title='Basic' />
        <OfferCard title='Ultimates' />
      </div>
    </div>
  );
};