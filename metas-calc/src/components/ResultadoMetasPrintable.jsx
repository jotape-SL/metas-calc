import styled from 'styled-components';
import { formateDinheiro } from '../utils/formateDinheiro';
import MetasPrep from '../assets/MetasPrep.png';

function ResultadoMetasPrintable({ metas }) {
  return (
    <A4Page>
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
    </A4Page>


  );
}

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

const A4Page = styled.div`
  width: 210mm;
  height: 297mm;
  position: relative;
  background: white;

  /* só pra visualizar na tela */
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0,0,0,.3);

  @media print {
    margin: 0;
    box-shadow: none;
    page-break-after: always;
  }
`;

const A4Background = styled.div`
  position: absolute;
  inset: 0;

  background-image: url(${MetasPrep});
  background-size: 210mm 297mm;
  background-repeat: no-repeat;
`;

// const ContainerMetas = styled.section`
//   font-size: .6rem;
//   width: 100px;
//   padding: .2rem .5rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   z-index: 0;
//   border: 1px solid #000;
//   border-radius: 5px;
// `;
// const ContainerGeralMetas = styled.div`
// padding: .5rem;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   width: 290px;
//   position: absolute;

//   &.meta90{
//     top: 100px;/*80px*/
//     left: 40px;/*20px*/
//   }
//   &.meta100{
//     top: 20px;/*0px*/
//     left: 380px;
//   }
//   &.meta110{
//     top: 20px;/*0px*/
//     left: 40px;/*20px*/
//   }

//   @media print{
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//   }
// `
const GeneralContainer = styled.div`
  /* display: none; */
  @media print {
    background-color: #fff;
    color: #000;
    display: block;
  }
`
