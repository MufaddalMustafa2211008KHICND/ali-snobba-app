import logo from './logo.svg';
import './App.css';
import Quantity from './components/Quantity/Quantity';
import { useState } from 'react';
import Logo from './components/Logo/Logo';

function App() {

  const [state, setState] = useState();

  const handleQuantity = (value) => {
    setState(value)
  }

  return (
    <div className="App">
      {console.log(state)}
      <Quantity onChange={handleQuantity} />
      <Quantity onChange={handleQuantity} />
      <Logo/>

    </div>
  );
}

export default App;
