import { useDispatch, useSelector } from "react-redux"
import { reminderApi } from "../api";
import { clearErrorMessage, onChecking, onLogin, onLogout, onLogoutReminder } from "../store";

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async({email, password}) => {

        dispatch( onChecking() );

        try {

            // const { data } = await calendarApi.post('/auth',{ email, password });
            // const { data } = require("../data/login.json");
            const response = await fetch("/data/login.json");
            const { data } = await response.json();
            
            localStorage.setItem('token', data.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin({ name: data.name, uid: data.uid }) );

        } catch (error) {

            dispatch(onLogout('Incorrect credentials'))
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
            
            
        }
        
    }

    const startRegister = async({ email, password, name }) => {
        dispatch( onChecking() );
        try {
            const { data } = await reminderApi.post('/auth/new',{ email, password, name });
            localStorage.setItem('token', data.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin({ name: data.name, uid: data.uid }) );
            
        } catch (error) {
            dispatch( onLogout( error.response.data?.msg || '' ) );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
        }
    }

    const checkAuthToken = async() => {
        const token = localStorage.getItem('token');
        if ( !token ) return dispatch( onLogout() );

        try {
            const { data } = await calendarApi.get('auth/renew');
            localStorage.setItem('token', data.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin({ name: data.name, uid: data.uid }) );
        } catch (error) {
            localStorage.clear();
            dispatch( onLogout() );
        }
    }

    const startLogout = () => {
        localStorage.clear();
        dispatch( onLogout() );
        dispatch( onLogoutReminder() );
    }

    return {

        // properties
        status,
        user,
        errorMessage,

        // metodos
        startLogin,
        startRegister,
        checkAuthToken,
        startLogout

    }
}