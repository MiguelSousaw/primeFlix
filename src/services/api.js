//URL DA API: https://api.themoviedb.org/3/movie/550?api_key=d0ab25274f3e10bef8c7ccbfa8e7b41a

// baseurl = https://api.themoviedb.org/3/
import axios from 'axios';
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;