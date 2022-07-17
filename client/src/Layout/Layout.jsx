import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Footer, Navbar, ProtectedRoute, ScroolToTop } from '../components';
import {
    HomePage,
    LoginPage,
    MyHomesPage,
    NotFoundPage,
    SignupPage,
} from '../pages';

function Layout() {
    return (
        <>
            <ScroolToTop />
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/login"
                    element={
                        <ProtectedRoute redirectTo="/" inverse>
                            <LoginPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/signup"
                    element={
                        <ProtectedRoute redirectTo="/" inverse>
                            <SignupPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/myhomes"
                    element={
                        <ProtectedRoute redirectTo="/">
                            <MyHomesPage />
                        </ProtectedRoute>
                    }
                />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </>
    );
}

export default Layout;
