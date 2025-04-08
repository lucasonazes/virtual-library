import styled from "styled-components";
import { useEffect, useState } from "react";
import { getFavorites, deleteFavorite } from "../services/favorites";
import bookImg from '../images/livro.png';

const FavoritesContainer = styled.div`
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
  height: 100vh;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Result = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  cursor: pointer;
  text-align: center;
  padding: 0 100px;
  p {
    width: 200px;
    color: #fff;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

const Title = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
  padding-top: 35px;
`;

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  async function fetchFavorites() {
    try {
      const favoritesAPI = await getFavorites();
      setFavorites(favoritesAPI);
    } catch (error) {
      alert('Erro ao carregar os favoritos');
    }
  }

  async function removeFavorite(favorite) {
    try {
      await deleteFavorite(favorite.id);
      alert(`Livro ${favorite.name} removido dos favoritos`);
    } catch (error) {
      alert('Erro ao remover favorito');
    }
  }

  useEffect(() => {
    fetchFavorites();
  }, [favorites]);

  return (
    <FavoritesContainer>
      <div>
        <Title>Aqui estão seus livros favoritos:</Title>
        <ResultContainer>
          {
            favorites.length > 0 ? favorites.map((favorite) => (
              <Result key={favorite.id} onClick={() => removeFavorite(favorite)}>
                <p>{favorite.name}</p>
                <img src={bookImg} alt='favorite.name'></img>
              </Result>
            )) : null
          }
        </ResultContainer>
      </div>
    </FavoritesContainer>
  );
}

export default Favorites;
