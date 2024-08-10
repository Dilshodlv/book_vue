import axios from "axios";

axios.interceptors.request.use((config)=> {
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
    config.headers['Content-Type'] = 'application/json';
    config.headers['Content-Type'] = 'application/ld+json';
    config.baseURL = 'http://localhost:8507/api/';

    return config;
})

export {axios as client}