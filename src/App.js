import styled from 'styled-components';
import Header from './components/Header/index.js';
import Search from './components/Search/index.js';
import Releases from './components/Releases/index.js';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Search />
      <Releases />
    </AppContainer>
  );
}

export default App;
