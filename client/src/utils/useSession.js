import { axiosClinet } from '../api/axiosClient';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import defaultToastConfig from '../defaultToastConfig.json';

function useSession() {
    const [user, setUser] = useState(null);
    const [status, setStatus] = useState('loading');

    const verifyToken = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            setUser(null);
            setStatus('unauthenticated');
            return;
        }

        try {
            const res = await axiosClinet.post('/verify', { token });
            const { userInfo } = res.data;

            setUser(userInfo);
            setStatus('authenticated');
        } catch (err) {
            localStorage.removeItem('token');
            setUser(null);
            setStatus('unauthenticated');
        }
    };

    const reset = () => {
        setUser(null);
        setStatus('unauthenticated');
    };
    const refresh = () => {
        return verifyToken();
    };
    const logout = () => {
        localStorage.removeItem('token');
        reset();
        toast.success('Logged out!', defaultToastConfig);
    };

    useEffect(
        () => {
            verifyToken();
        },
        // eslint-disable-next-line
        []
    );

    return { user, status, reset, refresh, logout };
}

export default useSession;
