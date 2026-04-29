import styled from 'styled-components';
import { formateDinheiro } from '../utils/formateDinheiro';
import MetasPrep from '../assets/MetasPrep.png';

function ResultadoMetasPrintableSistemaPreso({ metas }) {
  return (
    <GeneralContainer>
      <ContainerGeralMetas className="meta90">
        <ContainerMetas>
          <h1>90%</h1>
        </ContainerMetas>
        <ContainerMetas>
          <h2>Considerado</h2>
          <h3>R$ {formateDinheiro(metas.meta85)}</h3>
        </ContainerMetas>
        <ContainerMetas>
          <h2>Cheio</h2>
          <h3>R$ {formateDinheiro(metas.meta90)}</h3>
        </ContainerMetas>
      </ContainerGeralMetas>
      <ContainerGeralMetas className="meta100">
        <ContainerMetas>
          <h1>100%</h1>
        </ContainerMetas>
        <ContainerMetas>
          <h2>Considerado</h2>
          <h3>R$ {formateDinheiro(metas.meta95)}</h3>
        </ContainerMetas>
        <ContainerMetas>
          <h2>Cheio</h2>
          <h3>R$ {formateDinheiro(metas.meta100)}</h3>
        </ContainerMetas>
      </ContainerGeralMetas>
      <ContainerGeralMetas className="meta110">
        <ContainerMetas>
          <h1>110%</h1>
        </ContainerMetas>
        <ContainerMetas>
          <h2>Considerado</h2>
          <h3>R$ {formateDinheiro(metas.meta105)}</h3>
        </ContainerMetas>
        <ContainerMetas>
          <h2>Cheio</h2>
          <h3>R$ {formateDinheiro(metas.meta110)}</h3>
        </ContainerMetas>
      </ContainerGeralMetas>
    </GeneralContainer>



  );
}


export default ResultadoMetasPrintableSistemaPreso;

const ContainerMetas = styled.section`
  padding: .5rem;
  font-size: 5pt;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 0.3mm solid #000;
  border-radius: 2mm;
  h2{
    width: 18mm;
    text-align:center;
  }
  h1{
    width: 9mm;
    text-align:center;
  }

`;

const ContainerGeralMetas = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70mm;
  padding: 0.4rem;
  border: 0.3mm solid #000;
  border-radius: 2mm;
  margin-bottom: .5rem;
  color: black;
`;



const GeneralContainer = styled.div`
  /* display: none;
  @media print {
    background-color: #fff;
    color: #000;
    display: block;
  } */
  /* display: none; */
  @media print {
    background-color: #fff;
    color: #000;
    display: block;
  }
`
