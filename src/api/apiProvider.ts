import axios from "axios";

const apiKey = "7c9dd50606a07df965d51fc9621e1448";

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

const getTrendingFilms = async (page: number = 1): Promise<IFilm[] | unknown> => {
    try {
        const res = await axiosInstance.get(`/trending/movie/day?api_key=${apiKey}&page=${page}`);
        const data: IFilm[] | unknown = res.data;
        // @ts-ignore
        return data.results;
    } catch (e) {
        console.error(e);
    }
}

const apiProvider = {
    getTrendingFilms
}

export default apiProvider;
