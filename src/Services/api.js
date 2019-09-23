import axios from 'axios';

const api = axios.create({
    baseURL: "https://minifashionapi.herokuapp.com/"
});

export default api;
