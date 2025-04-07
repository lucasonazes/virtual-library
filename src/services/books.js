import axios from 'axios';

const booksAPI = axios.create({baseURL: 'http://localhost:8000/books'});

async function getBooks() {
    try {
        const response = await booksAPI.get('/');

        return response.data;
    } catch (error) {
        console.error('Erro ao buscar livros na API: ', error);
        alert('Erro ao buscar livros na API');
    }
}

export {
    getBooks
}
