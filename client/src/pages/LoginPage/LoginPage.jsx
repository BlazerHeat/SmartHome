import React, { useContext, useState } from 'react';
import { LoginForm, CenterDiv } from '../../components';
import { axiosClinet } from '../../api/axiosClient';
import { toast } from 'react-toastify';
import defaultToastConfig from '../../defaultToastConfig.json';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../utils/UserContext';

function LoginPage() {
    const [user, setUser] = useState({});
    const { refresh } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const id = toast.loading('Please wait...');

        axiosClinet
            .post('/login', { user })
            .then((res) => {
                toast.update(id, {
                    render: res.data.message,
                    type: 'success',
                    isLoading: false,
                    ...defaultToastConfig,
                });

                localStorage.setItem('token', res.data.token);
                refresh().then(() => {
                    navigate('/myhomes');
                });
            })
            .catch((err) => {
                let message = err.response?.data?.error || err.message;

                toast.update(id, {
                    render: message,
                    type: 'error',
                    isLoading: false,
                    ...defaultToastConfig,
                });
            });
    };
    return (
        <CenterDiv bgimg="/images/bg2.jpeg">
            <LoginForm
                user={user}
                setUser={setUser}
                handleSubmit={handleSubmit}
            />
        </CenterDiv>
    );
}

export default LoginPage;
