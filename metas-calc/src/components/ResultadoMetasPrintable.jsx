import styled from 'styled-components';

function ResultadoMetasPrintable({ metas }) {
  return (
    <GeneralContainer>
      <ContainerGeralMetas className="meta90">
        <ContainerMetas>
          <h2>Considerado</h2>
          <h3>R$ 9 {metas.meta85}</h3>
        </ContainerMetas>
        <ContainerMetas>
          <h2>Cheio</h2>
          <h3>R$ {metas.meta90}</h3>
        </ContainerMetas>
      </ContainerGeralMetas>
      <ContainerGeralMetas className="meta100">
        <ContainerMetas>
          <h2>Considerado</h2>
          <h3>R$ 10{metas.meta95}</h3>
        </ContainerMetas>
        <ContainerMetas>
          <h2>Cheio</h2>
          <h3>R$ {metas.meta100}</h3>
        </ContainerMetas>
      </ContainerGeralMetas>
      <ContainerGeralMetas className="meta110">
        <ContainerMetas>
          <h2>Considerado</h2>
          <h3>R$ 11{metas.meta105}</h3>
        </ContainerMetas>
        <ContainerMetas>
          <h2>Cheio</h2>
          <h3>R$ {metas.meta110}</h3>
        </ContainerMetas>
      </ContainerGeralMetas>
    </GeneralContainer>
  );
}

export default ResultadoMetasPrintable;

const ContainerMetas = styled.section`
  font-size: .6rem;
  width: 100px;
  padding: .2rem .5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 0;
  border: 1px solid #000;
  border-radius: 5px;
`;

const ContainerGeralMetas = styled.div`
padding: .5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 290px;
  position: absolute;

  &.meta90{
    top: 100px;/*80px*/
    left: 40px;/*20px*/
  }
  &.meta100{
    top: 20px;/*0px*/
    left: 380px;
  }
  &.meta110{
    top: 20px;/*0px*/
    left: 40px;/*20px*/
  }

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
