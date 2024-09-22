import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../auth';
import { ReminderPage } from '../reminder';
import { useAuthStore } from '../hooks';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { useEffect } from 'react';

export const AppRouter = () => {

    const authStatus = 'not-authenticated'; // 'authenticated'; //'not-authenticated';
    const { status, checkAuthToken } = useAuthStore();

    // useEffect(() => {
    //   checkAuthToken();
    // }, []);

    // if ( status === 'checking' ) {
    //     return (
    //         <h3>Cargando...</h3>
    //     )
    // }
    
  return (
    <>
      <Routes>            
          <Route path="login/*" element={
              <PublicRoute>
                <Routes>
                  <Route path="/*" element={<LoginPage />} />
                </Routes>
              </PublicRoute>
            }
          />
          <Route path="register/*" element={
              <PublicRoute>
                <RegisterPage  />
              </PublicRoute>
          }/> 
          
          <Route path="/*" element={
            <PrivateRoute>
              <ReminderPage />
            </PrivateRoute>
          } />
      </Routes>
    </>



    // <Routes>
    //     {
    //         (authStatus === 'not-authenticated')
    //             ? <Route path="/auth/*" element={<LoginPage />} />
    //             : <Route path="/*" element={<ReminderPage />} />
    //     }
    //     <Route path="/*" element={ <Navigate to ="/auth/login" />} />
    // </Routes> 
  )
}
