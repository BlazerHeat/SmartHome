import axios from 'axios';

const URL = process.env.PRODUCTION ? 'http://localhost:8000' : 'https://smart-home-io.herokuapp.com';

const axiosClinet = axios.create({
    baseURL: 'https://smart-home-io.herokuapp.com',
    withCredentials: true,
});

export { axiosClinet };
