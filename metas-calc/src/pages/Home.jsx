import { useState } from 'react';
import styled from 'styled-components';
import { calcularMetas } from '../utils/calcularMetas';
import ResultadosAgrupados from '../components/ResultadosAgrupados';
import { formateDinheiro } from '../utils/formateDinheiro';

function Home() {
    const [metaIntegral, setMetaIntegral] = useState('');
    const [valorVendidoNaSemana, setValorVendidoNaSemana] = useState('');
    const [diasDaSemanaRestantes, setDiasDaSemanaRestantes] = useState('');
    const [metas, setMetas] = useState(null);

    function handleCalcular() {
        const resultado = calcularMetas(metaIntegral, valorVendidoNaSemana, diasDaSemanaRestantes);
        setMetas(resultado);
    }

    return (
        <>
            <HomeContainer>
                <h1>Calculadora de Metas</h1>

                <InputContainer>
                    <label>Valor da meta semanal (100%):</label>
                    <CamposDosNumeros type="text" value={metaIntegral} onChange={(e) => setMetaIntegral(formateDinheiro(e.target.value))} />
                </InputContainer>

                <InputContainer>
                    <label>Total vendido na semana:</label>
                    <CamposDosNumeros type="text" value={valorVendidoNaSemana} onChange={(e) => setValorVendidoNaSemana(formateDinheiro(e.target.value))} />
                </InputContainer>

                <InputContainer>
                    <label>Dias restantes na semana:</label>
                    <CamposDosNumeros type="number" value={diasDaSemanaRestantes} onChange={(e) => setDiasDaSemanaRestantes(e.target.value)} />
                </InputContainer>

                <BotaoCalculo onClick={handleCalcular} style={{ marginTop: "10px" }}>
                    Calcular metas
                </BotaoCalculo>

            </HomeContainer>
            {metas && <ResultadosAgrupados metas={metas} />}
        </>

    );
}

export default Home;

const BotaoCalculo = styled.button`
  border-radius: 5px;
  color: white;
  border: 1px solid transparent;
  padding: 0.8em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #0A0908;
  cursor: pointer;
  transition: border-color 0.25s;
`
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    label{
        margin-bottom: 1rem;
        font-size: 1.3rem;
        text-shadow: 1px 2px 0px rgba(0,0,0,0.4);
    }
    span{
        position: absolute;
        left: 14px;
        top: 50%;
        transform: translateY(-50%);
        font-weight: bold;
        color: #222;
        pointer-events: none;
    }
`
const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media print {
        display: none;
    }
`

const CamposDosNumeros = styled.input`
    max-width: 300px;
    padding: 4px;
    font-size: 16px;

    border: none;
    /* border: 1px solid #000000; */
    border-radius: 8px;
    outline: none;

    color: #222;

    background: #ffffff;

    box-shadow:
        inset 0 1px 0 rgba(255,255,255,0.8),
        0 3px 2px #666,
        0 6px 12px rgba(0,0,0,0.4);

    transition: transform .08s ease-in-out;

    &:focus {
    transform: translateY(3px);

    background: #dddddd;

    box-shadow:
      inset 0 4px 2px rgba(0,0,0,0.6),
      inset 0 -3px 4px rgba(255,255,255,0.4);
  }
`