import styled from 'styled-components';
import { formateDinheiro } from '../utils/formateDinheiro';

function ResultadoMetas({ metas }) {
    return (
        <>
            <ContainerMetas>
                <h2>Valores de 90% da meta</h2>
                <DadosDisplay>
                    <div>
                        <h3>Cheio</h3>
                        <span>-</span>
                        <h3>R$ {formateDinheiro(metas.meta90)}</h3>
                    </div>
                    <div>
                        <h3>Considerado</h3>
                        <span>-</span>
                        <h3>R$ {formateDinheiro(metas.meta85)}</h3>
                    </div>
                </DadosDisplay>
            </ContainerMetas>
            <ContainerMetas>
                <h2>Valores de 100% da meta</h2>
                <DadosDisplay>
                    <div>
                        <h3>Cheio</h3>
                        <span>-</span>
                        <h3>R$ {formateDinheiro(metas.meta100)}</h3>
                    </div>
                    <div>
                        <h3>Considerado</h3>
                        <span>-</span>
                        <h3>R$ {formateDinheiro(metas.meta95)}</h3>
                    </div>
                </DadosDisplay>
            </ContainerMetas>
            <ContainerMetas>
                <h2>Valores de 110% da meta</h2>
                <DadosDisplay>
                    <div>
                        <h3>Cheio</h3>
                        <span>-</span>
                        <h3>R$ {formateDinheiro(metas.meta110)}</h3>
                    </div>
                    <div>
                        <h3>Considerado</h3>
                        <span>-</span>
                        <h3>R$ {formateDinheiro(metas.meta105)}</h3>
                    </div>
                </DadosDisplay>
            </ContainerMetas>
        </>
    );
}

export default ResultadoMetas;

const ContainerMetas = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 0;
  h2{
    margin-bottom: 1em;
  }

  @media print {
    display: none;
  }
`;

const DadosDisplay = styled.div`
    width: 280px;
    background-color: #F2F4F3;
    border-radius: 8px;
    color:#0A0908;
    border: 2px solid #49111C;
    div{
        border-bottom: 1px solid #49111C;
        padding: .5em;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`
