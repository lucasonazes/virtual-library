import Input from "../Input";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { getBooks } from "../../services/books";
import { postFavorite } from "../../services/favorites";
import bookImg from '../../images/livro.png';

const SearchContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: fit-content;
  width: 100%;
`;
const Title = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;
const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

function handleSearch(search, books) {
  const searchResult = books.filter((book) =>
    book.name.toLowerCase().includes(search.toLowerCase())
  );
  return searchResult;
}

function Search() {
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [books, setBooks] = useState([]);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    const results = handleSearch(inputText, books);
    setSearchedBooks(results);
  }, [inputText, books]);

  async function fetchBooks() {
    try {
      const booksAPI = await getBooks();
      setBooks(booksAPI);
    } catch (error) {
      alert('Erro ao carregar livros');
    }
  }

    async function insertFavorite(book) {
      try {
        await postFavorite(book.id);
        alert(`Livro ${book.name} adicionado aos favoritos`);
      } catch (error) {
        alert('Erro ao salvar favorito');
      }
    }

  return (
    <SearchContainer>
      <Title>Já sabe por onde começar?</Title>
      <Subtitle>Encontre seu livro em nossa estante.</Subtitle>
      <Input
        placeholder="Escreva sua próxima leitura"
        className="search-input"
        onChange={(e) => setInputText(e.target.value)}
      />
      { inputText ? searchedBooks.map((book) => (
          <div className="book" key={book.id} onClick={() => insertFavorite(book)}>
            <p>{book.name}</p>
            <img src={bookImg} alt={book.name} />
          </div>
        )) : null
      }
    </SearchContainer>
  );
}

export default Search;
