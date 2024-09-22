import React from 'react'
import { useAuthStore } from '../hooks';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({children}) => {

    const authStatus = 'authenticated'; // 'authenticated'; //'not-authenticated';
    const { status, checkAuthToken } = useAuthStore();


  return (status === 'authenticated')
    ? children
    : <Navigate to ="/login" />
}
