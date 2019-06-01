const BASE_API = 'https://yts.am/api/v2';

class Api {

    getSugggestion = async (id) => {
        const query = await fetch(`${BASE_API}/movie_suggestions.json/?movie_id=${id}`);
        const { data: { movies } } = await query.json();
        return movies;
    }

    getMovies = async () => {
        const query = await fetch(`${BASE_API}/list_movies.json`);
        const { data: { movies } } = await query.json();
        return movies;
    }

};

export default new Api;

