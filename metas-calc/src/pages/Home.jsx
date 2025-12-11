import { useState } from 'react';
import ResultadoMetas from '../components/ResultadoMetas';
import { calcularMetas } from '../utils/calcularMetas';

function Home() {
    const [metaIntegral, setMetaIntegral] = useState(0);
    const [valorVendidoNaSemana, setValorVendidoNaSemana] = useState(0);
    const [diasDaSemanaRestantes, setDiasDaSemanaRestantes] = useState(0);
    const [metas, setMetas] = useState(null);

    function handleCalcular() {
        const resultado = calcularMetas(metaIntegral, valorVendidoNaSemana, diasDaSemanaRestantes);
        setMetas(resultado);
    }

    return (
        <div style={{ padding: "20px" }}>
            <h1>Calculadora de Metas</h1>

            <div>
                <label>Valor da meta semanal (100%):</label><br />
                <input type="number" value={metaIntegral} onChange={(e) => setMetaIntegral(e.target.value)} />
            </div>

            <div style={{ marginTop: "10px" }}>
                <label>Total vendido na semana:</label><br />
                <input type="number" value={valorVendidoNaSemana} onChange={(e) => setValorVendidoNaSemana(e.target.value)} />
            </div>

            <div style={{ marginTop: "10px" }}>
                <label>Dias restantes na semana:</label><br />
                <input type="number" value={diasDaSemanaRestantes} onChange={(e) => setDiasDaSemanaRestantes(e.target.value)} />
            </div>

            <button onClick={handleCalcular} style={{ marginTop: "10px" }}>
                Calcular metas
            </button>

            {metas && <ResultadoMetas metas={metas} />}
        </div>
    );
}

export default Home;
