import React from 'react'
import { useAuthStore } from '../hooks';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {

    const authStatus = 'authenticated'; // 'authenticated'; //'not-authenticated';
    const { status, checkAuthToken } = useAuthStore();

    return (status === 'not-authenticated')
    ? children
    : <Navigate to="/" />
}
