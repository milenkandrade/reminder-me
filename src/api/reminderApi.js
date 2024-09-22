import axios from 'axios';
import { getEnvVariables } from '../helpers';

const { VITE_API_URL, VITE_API_SERVICE_ID, VITE_API_TEMPLATE_ID, VITE_API_PUBLIC_KEY } = getEnvVariables();

const reminderApi = axios.create({
    baseURL: VITE_API_URL
    
});

reminderApi.interceptors.request.use(config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }
    
    return config
});

export const serviceID = VITE_API_SERVICE_ID;
export const templateID = VITE_API_TEMPLATE_ID;
export const publicKey = VITE_API_PUBLIC_KEY;

export default reminderApi;