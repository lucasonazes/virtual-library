import styled from 'styled-components';
import Search from '../components/Search/index.js';

const FavoritesContainer = styled.div`
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

function Favorites() {
  return (
    <FavoritesContainer>
      <Search />
    </FavoritesContainer>
  );
}

export default Favorites;
