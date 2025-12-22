import styled from 'styled-components';

function ResultadoMetasPrintable({ metas }) {
  return (
    <GeneralContainer>
      <ContainerGeralMetas>
        <ContainerMetas>
          <h2>Considerado</h2>
          <h3>R$ {metas.meta85}</h3>
        </ContainerMetas>
        <ContainerMetas>
          <h2>Cheio</h2>
          <h3>R$ {metas.meta90}</h3>
        </ContainerMetas>
      </ContainerGeralMetas>
      {/* <ContainerMetas>
        <h2>Valores de 100% da meta</h2>
        <h3>Cheio: {metas.meta100}</h3>
      </ContainerMetas>
      <ContainerMetas>
        <h2>Valores de 110% da meta</h2>
        <h3>Cheio: {metas.meta110}</h3>
      </ContainerMetas> */}
    </GeneralContainer>
  );
}

export default ResultadoMetasPrintable;

const ContainerMetas = styled.section`
  font-size: .6rem;
  width: 130px;
  padding: .2rem .5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 0;
  border: 1px solid #000;
`;

const ContainerGeralMetas = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 416px;
  position: absolute;
  @media print{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

const GeneralContainer = styled.div`
  /* display: none; */

  @media print {
    background-color: #fff;
    color: #000;
    display: block;
  }
`
