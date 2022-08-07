import axios from 'axios';

const getURL = () => {
    return process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : 'https://smart-home-io.herokuapp.com';
}

const axiosClinet = axios.create({
    baseURL: 'https://smart-home-io.herokuapp.com',
    withCredentials: true,
});

export { axiosClinet };
