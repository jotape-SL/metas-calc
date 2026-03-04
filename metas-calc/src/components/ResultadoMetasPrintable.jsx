import styled from 'styled-components';
import { formateDinheiro } from '../utils/formateDinheiro';
import MetasPrep from '../assets/MetasPrep.png';

function ResultadoMetasPrintable({ metas }) {
  return (
    <GeneralContainer>
      <A4Background />
      <ContainerGeralMetas className="meta90">
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

// ------------------------------------------------------- modelo com A4 para testes de posicionamento ---------------------------------------------------
// function ResultadoMetasPrintable({ metas }) {
//   return (
//     <A4Page>
//       -- Conteudo --
//     </A4Page>


//   );
// }

export default ResultadoMetasPrintable;

const ContainerMetas = styled.section`
  width: 35mm;
  padding: .8m;
  font-size: 8pt;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 0.3mm solid #000;
  border-radius: 2mm;
`;

const ContainerGeralMetas = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 86mm;

  &.meta90 {
    top: 33mm;
    left: 14.5mm;
  }

  &.meta100 {
    top: 12mm;
    left: 108.5mm;
  }

  &.meta110 {
    top: 12mm;
    left: 14.5mm;
  }
`;

// const A4Page = styled.div`
//   width: 210mm;
//   height: 297mm;
//   position: relative;
//   background: white;

//   /* só pra visualizar na tela */
//   margin: 0 auto;
//   box-shadow: 0 0 10px rgba(0,0,0,.3);

//   @media print {
//     margin: 0;
//     box-shadow: none;
//     page-break-after: always;
//   }
// `;

const A4Background = styled.div`
  position: absolute;
  inset: 0;

  background-image: url(${MetasPrep});
  background-size: 210mm 297mm;
  background-repeat: no-repeat;
`;

const GeneralContainer = styled.div`
  display: none;
  @media print {
    background-color: #fff;
    color: #000;
    display: block;
  }
`
