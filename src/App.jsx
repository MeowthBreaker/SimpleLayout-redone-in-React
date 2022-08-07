import {Header} from './components/Header/Header';
import {MainScreen} from './components/MainScreen/MainScreen';
import {About} from './components/About/About';
import {BackToTop} from './components/BackToTop/BackToTop';
import { Services } from './components/Services/Services';
import { LatestWorks } from './components/LatestWorks/LatestWorks';
import {PricingPlan} from './components/PricingPlan/PricingPlan';
import { Team } from './components/Team/Team';
import { Blog } from './components/Blog/Blog';

export function App() {
  return (
    <>
      <BackToTop />
      <Header />
      <MainScreen />
      <About />
      <Services />
      <LatestWorks />
      <PricingPlan />
      <Team />
      <Blog />
    </>
  );
}