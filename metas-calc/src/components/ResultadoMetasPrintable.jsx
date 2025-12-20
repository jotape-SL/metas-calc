import styled from 'styled-components';

function ResultadoMetasPrintable({ metas }) {
    return (
        <GeneralContainer>
            <ContainerMetas>
                <h2>Valores de 90% da meta</h2>
                <h3>Cheio: {metas.meta90}</h3>
                {/* <h3>Considerado: {metas.meta85}</h3> */}
            </ContainerMetas>
            <ContainerMetas>
                <h2>Valores de 100% da meta</h2>
                <h3>Cheio: {metas.meta100}</h3>
                {/* <h3>Considerado: {metas.meta95}</h3> */}
            </ContainerMetas>
            <ContainerMetas>
                <h2>Valores de 110% da meta</h2>
                <h3>Cheio: {metas.meta110}</h3>
                {/* <h3>Considerado: {metas.meta105}</h3> */}
            </ContainerMetas>
        </GeneralContainer>
    );
}

export default ResultadoMetasPrintable;

const ContainerMetas = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 0;
`;

const GeneralContainer = styled.div`
  display: none;

  @media print {
    background-color: #fff;
    color: #000;
    display: block;
  }
`
