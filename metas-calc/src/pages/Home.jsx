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
        font-size: 1.2 rem;
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
    max-width: 200px;
    padding: 4px;
    font-size: 16px;
    color: #0A0908;
    background-color: #F2F4F3;

    border: 1px solid #ccc;
    border-radius: 8px;

    outline: none;

    transition: border-color 0.2s ease, box-shadow 0.2s ease;

    &:focus {
    border-color: #49111C;
    box-shadow: 0 0 0 2px #49111C;
    }

    &:disabled {
    background: #f5f5f5;
    cursor: not-allowed;
    opacity: 0.7;
`