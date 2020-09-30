import React from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import { convert } from './components/utils/Currency';
// import Button from './components/button/Button';
import Counter from './components/Counter/Counter';
import Forecast from './components/Weather/Forecast';

function App() {
  const [conversion, setConversion] = React.useState<string>("");
  const [counter, setCounter] = React.useState<number>(0);

  React.useEffect(() => {
    const fetchData = async () => {
      const result: string = await convert("USD", "EUR")
      setConversion(result);
    }
    (fetchData());
  }, [])
  return (
    <div className="App">
      {/* <header className="App-header">
        <p className="title">Forecast demo </p>
        <p className="subtitle">CICD, Jest, React, api </p>
      </header> */}
      <div className="" style={{
        background: `linear-gradient(to right, rgb(255, 167, 35), rgb(25, 97, 235))`,
        minHeight: "100vh"
      }}>
        <Forecast />
        <Counter />
        <h1>conversion rate : $ USD - € EUR</h1>
        <h3>{conversion ? conversion : ''} : rate $ / €</h3>
        <h2>CI-CD</h2>
        {/* <Button label="click me please"></Button> 
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p> */}
        <div className="d-inline-flex p-2">
          <button id="increment-btn" className="button mr-2" style={{ border: "1px solid yellow", borderRadius: "8px", padding: "3px 3px" }}
            onClick={() => setCounter(counter + 1)}>+ Increment</button>
          <button id="decrement-btn" className="button" style={{ border: "1px solid yellow", borderRadius: "8px", padding: "3px 3px" }}
            onClick={() => setCounter(counter > 0 ? counter - 1 : 0)}>- Decrement</button>
        </div>
        <p>Conversion {(counter / parseFloat(conversion)).toFixed(2)} $</p>
        <div className="d-inline-flex p-2">
          <span id="counter-value">{counter}</span>
          <span> €</span>
        </div>
      </div>
    </div>
  );
}

export default App;
