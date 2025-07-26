import axios from "axios";
import { store } from "../Store";
import { refreshJwt } from "../Slices/AuthThunk";

const instance = axios.create({baseURL:'https://studapi.teachmeskills.by'})

instance.interceptors.request.use(
    config => {
        config.headers['Authorization'] = `Bearer ${sessionStorage.getItem('access')}`;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use((response) => response, // Pass successful responses through
    async (error) => {
        // Check for 401 status
        if (error.response.status === 401) {
            console.log('401 Ошибка')
            store.dispatch(refreshJwt());
            return;
        }
        return error;
    })

export default instance;