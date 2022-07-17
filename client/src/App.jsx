import React from 'react';
import { ToastContainer } from 'react-toastify';
import useSession from './utils/useSession';
import UserContext from './utils/UserContext';
import Layout from './Layout/Layout';

function App() {
    const session = useSession();

    return (
        <UserContext.Provider value={session}>
            <ToastContainer />
            <Layout />
        </UserContext.Provider>
    );
}

export default App;
