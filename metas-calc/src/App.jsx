import styled from 'styled-components';
import Home from "./pages/Home";
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <GenaralContainer>
      <GlobalStyle />
      <Home />
    </GenaralContainer>
  )
}

export default App

const GenaralContainer = styled.div``