
import axios from 'axios';
// Base da URL: https://api.themoviedb.org/3/
// url da api
// https://api.themoviedb.org/3/movie/now_playing?api_key=7e96bffe0134b12ce878a2723cbeb600

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'

})
export default api;