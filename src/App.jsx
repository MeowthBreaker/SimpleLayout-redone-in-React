import {Header} from './components/Header/Header';
import {MainScreen} from './components/MainScreen/MainScreen';
import {About} from './components/About/About';
import {BackToTop} from './components/BackToTop/BackToTop';
import { Services } from './components/Services/Services';

export function App() {
  return (
    <>
      <BackToTop />
      <Header />
      <MainScreen />
      <About />
      <Services />
    </>
  );
}