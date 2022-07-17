import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { LoadingPage } from '../../pages';
import UserContext from '../../utils/UserContext';

function ProtectedRoute({ children, redirectTo, inverse }) {
    const { status } = useContext(UserContext);

    if (status === 'loading') {
        return <LoadingPage />;
    }

    let condition = inverse
        ? status === 'authenticated'
        : status === 'unauthenticated';

    if (condition) {
        return <Navigate to={redirectTo} replace />;
    }

    return children;
}

export default ProtectedRoute;
