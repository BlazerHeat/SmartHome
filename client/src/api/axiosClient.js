import axios from 'axios';

const getURL = () => {
    return process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : 'http://smart-home-io.herokuapp.com';
}

const axiosClinet = axios.create({
    baseURL: getURL(),
    withCredentials: true,
});

export { axiosClinet };
