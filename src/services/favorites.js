import axios from 'axios';

const favoritesAPI = axios.create({baseURL: 'http://localhost:8000/favorites'});

async function getFavorites() {
    try {
        const response = await favoritesAPI.get('/');

        return response.data;
    } catch (error) {
        console.error('Erro ao buscar favoritos na API: ', error);
        throw error;
    }
}

async function postFavorite(id) {
    try {
        await favoritesAPI.post(`/${id}`);
    } catch (error) {
        console.error('Erro ao salvar favorito na API: ', error);
        throw error;
    }
}

async function deleteFavorite(id) {
    try {
        await favoritesAPI.delete(`/${id}`);
    } catch (error) {
        console.error('Erro ao excluir favorito da API: ', error);
        throw error;
    }
}

export {
    getFavorites,
    postFavorite,
    deleteFavorite
}
