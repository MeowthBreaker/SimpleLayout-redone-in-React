import { Header } from './components/Header/Header';
import { MainScreen} from './components/MainScreen/MainScreen';
import { About} from './components/About/About';

export function App() {
  return (
    <>
      <Header />
      <MainScreen />
      <About />
    </>
  );
}