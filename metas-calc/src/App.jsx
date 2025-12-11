import { useState } from 'react'
import './App.css'
import { calcularMetas } from './utils/calcularMetas';

function App() {
  const [metaIntegral, setMetaIntegral] = useState(0);
  const [valorVendidoNaSemana, setValorVendidoNaSemana] = useState(0);
  const [diasDaSemanaRestantes, setDiasDaSemanaRestantes] = useState(0);
  const [metas, setMetas] = useState(null);

  function handleCalcular() {
    const resultado = calcularMetas(
      metaIntegral,
      valorVendidoNaSemana,
      diasDaSemanaRestantes
    );

    setMetas(resultado);
  }

  return (
    <>
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>Calculadora de metas simples versao1.0 beta alpha meta tester ultra mega blaster 2000 exterminator</h1>

        <div>
          <label>Valor de 100% da meta da semana:</label><br />
          <input
            type="number"
            value={metaIntegral}
            onChange={(e) => setMetaIntegral(e.target.value)}
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>Valor total de vendido na semana:</label><br />
          <input
            type="number"
            value={valorVendidoNaSemana}
            onChange={(e) => setValorVendidoNaSemana(e.target.value)}
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>Dias restantes ate o final dessa semana:</label><br />
          <input
            type="number"
            value={diasDaSemanaRestantes}
            onChange={(e) => setDiasDaSemanaRestantes(e.target.value)}
          />
        </div>

        <div>
          <button onClick={handleCalcular}>Calcular metas</button>
        </div>

        {metas !== null && (
          <>
            <h2>90% Considerado: {metas.meta85}</h2>
            <h2>90% Cheio: {metas.meta90}</h2>
            <h2>100% Considerado: {metas.meta95}</h2>
            <h2>100% Cheio: {metas.meta100}</h2>
            <h2>110% Considerado: {metas.meta105}</h2>
            <h2>110% Cheio: {metas.meta110}</h2>
          </>
        )}
      </div>
    </>
  )
}

export default App
