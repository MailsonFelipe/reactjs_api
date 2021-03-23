import axios from 'axios';

// criando uma instancia para acesso da url
const api = axios.create({
    baseURL: 'https://www.obrazul.com.br/api/recruitment/products/'
});

export default api;