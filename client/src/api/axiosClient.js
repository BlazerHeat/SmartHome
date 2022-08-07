import axios from 'axios';

const getURL = () => {
    return process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : 'https://smart-home-io.herokuapp.com';
}

const axiosClinet = axios.create({
    baseURL: getURL(),
    withCredentials: true,
    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
    }
});

export { axiosClinet };
