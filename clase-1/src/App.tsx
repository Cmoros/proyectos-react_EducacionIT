import BotonContador from './components/BotonContador';
import './App.css';
import CajaDeCoordenadas from './components/CajaDeCoordenadas';
import CajaArcoiris from './components/CajaArcoiris';

function App() {
  return (
    <div className="App">
      <h1>Este es mi primera app de React</h1>
      <BotonContador/>
      <CajaDeCoordenadas/>
      <CajaArcoiris/>
    </div>
  );
}

export default App;
