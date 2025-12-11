import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [metaIntegral, setMetaIntegral] = useState(0);
  const [valorVendidoNaSemana, setValorVendidoNaSemana] = useState(0);
  const [diasDaSemanaRestantes, setDiasDaSemanaRestantes] = useState(0);
  const [resultado, setResultado] = useState(false);
  const [meta85, setMeta85] = useState(0);
  const [meta90, setMeta90] = useState(0);
  const [meta95, setMeta95] = useState(0);
  const [meta100, setMeta100] = useState(0);
  const [meta105, setMeta105] = useState(0);
  const [meta110, setMeta110] = useState(0);

  function calcularMetas() {
    setMeta85((((Number(metaIntegral)*.85) - Number(valorVendidoNaSemana))/ Number(diasDaSemanaRestantes)));
    setMeta90((((Number(metaIntegral)*.9) - Number(valorVendidoNaSemana))/ Number(diasDaSemanaRestantes)));
    setMeta95((((Number(metaIntegral)*.95) - Number(valorVendidoNaSemana))/ Number(diasDaSemanaRestantes)));
    setMeta100(((Number(metaIntegral) - Number(valorVendidoNaSemana))/ Number(diasDaSemanaRestantes)));
    setMeta105((((Number(metaIntegral)*1.05) - Number(valorVendidoNaSemana))/ Number(diasDaSemanaRestantes)));
    setMeta110((((Number(metaIntegral)*1.1) - Number(valorVendidoNaSemana))/ Number(diasDaSemanaRestantes)));
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

      <div style={{ marginTop: "20px" }}>
        <button onClick={calcularMetas}>Calcular metas</button>
      </div>

      {resultado !== null && (
        <>
        <h2 style={{ marginTop: "20px" }}>90% Considerado: {meta85}</h2>
        <h2 style={{ marginTop: "20px" }}>90% Cheio: {meta90}</h2>
        <h2 style={{ marginTop: "20px" }}>100% Considerado: {meta95}</h2>
        <h2 style={{ marginTop: "20px" }}>100% Cheio: {meta100}</h2>
        <h2 style={{ marginTop: "20px" }}>110% Considerado: {meta105}</h2>
        <h2 style={{ marginTop: "20px" }}>110% Cheio: {meta110}</h2>
        </>
      )}
    </div>
    </>
  )
}

export default App
