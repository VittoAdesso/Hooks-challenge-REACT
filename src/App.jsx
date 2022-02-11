import './App.scss';
import RegisterTime from './components/RegisterTime/RegisterTime';
import SingStar from './components/SingStar/SingStar';
import BeerCounterTime from './components/BeerTime/BeerCounterTime';

function App() {
  return (
    <div className="App">

      <BeerCounterTime/>

      <SingStar/>

      <RegisterTime/>

    </div>
  );
}

export default App;
