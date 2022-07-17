import axios from 'axios';

const axiosClinet = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true,
});

export { axiosClinet };
