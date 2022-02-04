import "./App.css";
import { useSatate } from 'react';


function App() {
  return (
    <div className="app">

      <h1>Calculadora IMC</h1>
      <span>Vamos calcular sei IMC !</span>

      <div className="box-input">
        <input type="text" placeholder="Peso em (kg)"></input>
        <input type="text" placeholder="Altura em (cm)"></input>
        <button>Calcular</button>
      </div>

      <h2>Seu IMC foi de 25, você está abaixo do peso !</h2>

      <h2>Seu IMC foi de 25, você está abaixo do peso !</h2>

    </div>
  );
}
export default App;
