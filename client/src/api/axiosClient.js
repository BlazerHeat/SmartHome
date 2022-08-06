import axios from 'axios';

const URL = process.env.PRODUCTION ? 'http://localhost:8000' : 'https://smart-home-io.herokuapp.com'

const axiosClinet = axios.create({
    baseURL: URL,
    withCredentials: true,
});

export { axiosClinet };
