import React, { useState } from 'react';
import { axiosClinet } from '../../api/axiosClient';
import { SignupForm, CenterDiv } from '../../components';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import defaultToastConfig from '../../defaultToastConfig.json';

function SignupPage() {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    const handleSubmit = () => {
        const { confirmPassword, ...rest } = user;

        const id = toast.loading('Please wait...');

        axiosClinet
            .post('/signup', { user: rest })
            .then((res) => {
                toast.update(id, {
                    render: res.data.message,
                    type: 'success',
                    isLoading: false,
                    ...defaultToastConfig,
                });

                navigate('/login');
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
            <SignupForm
                user={user}
                setUser={setUser}
                handleSubmit={handleSubmit}
            />
        </CenterDiv>
    );
}

export default SignupPage;
