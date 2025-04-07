import styled from 'styled-components';
import Search from '../components/Search/index.js';
import Releases from '../components/Releases/index.js';

const HomeContainer = styled.div`
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

function Home() {
  return (
    <HomeContainer>
      <Search />
      <Releases />
    </HomeContainer>
  );
}

export default Home;
