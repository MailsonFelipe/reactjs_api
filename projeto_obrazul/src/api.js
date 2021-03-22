import axios from 'axios';

const api = axios.create({
    baseURL: 'https://www.obrazul.com.br/api/recruitment/products/'
});

export default api;