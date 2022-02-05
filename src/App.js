import "./App.css";
import { useState } from 'react';


function App() {

  let [peso, setPeso] = useState('');
  let [altura, setAltura] = useState('');
  const [mensagem, setMensagem] = useState('');

  function calcular() {

    if (((peso.length == 0) || (altura.length == 0))) {
      alert('[ERRO] Dados Inválidos !!!');
    }
    else {

      if (verificarDecimal(altura)) {
        let imc = peso / (altura * altura);
        print(imc);
      }
      else {
        let alt = altura / 100;
        let imc = peso / (alt * alt);
        print(imc);
      }
    }
  }

  function verificarDecimal(value) {
    if (!isNaN(value)) {
      if (parseInt(value) != parseFloat(value)) {
        return true;
      }
      else {
        return false;
      }
    }
  }

  function print(imc) {
    if (imc < 18.6) {
      setMensagem("Você está a abaixo do peso! Seu IMC: " + imc.toFixed(1));
    } else if (imc >= 18.6 && imc <= 24.9) {
      setMensagem("Peso normal ! Seu IMC: " + imc.toFixed(1));
    } else if (imc >= 25 && imc <= 29.9) {
      setMensagem("Você está com sobrepeso! Seu IMC: " + imc.toFixed(1));
    } else if (imc >= 30 && imc <= 34.9) {
      setMensagem("Você está com Obesidade Grau I !  Seu IMC: " + imc.toFixed(1));
    } else if (imc >= 35 && imc <= 39.9) {
      setMensagem("Você está com Obesidade Grau II !  Seu IMC: " + imc.toFixed(1));
    } else
      setMensagem("Você está com Obesidade Grau III ou Mórbida!  Seu IMC: " + imc.toFixed(1));
  }
  return (
    <div className="app">

      <h1>Calculadora IMC</h1>
      <span>Vamos calcular sei IMC !</span>

      <div className="box-input">
        <input class="Tinput" type="number" placeholder="Peso em (kg)" value={peso} onChange={(e) => setPeso(e.target.value)} ></input>
        <input class="Tinput" type="number" placeholder="Altura em (m)" value={altura} onChange={(e) => setAltura(e.target.value)} ></input>
        <button onClick={calcular}>Calcular</button>
      </div>

      <h2>{mensagem}</h2>

    </div>
  );
}
export default App;
