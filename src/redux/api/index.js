import axios from 'axios';
const baseUrl = 'https://www.omdbapi.com/?apikey=94fd8bb5';


export const apiCall = (url, data, headers, method) => axios(
    {
        method,
        url:baseUrl + url,
        data,
        headers
    }
)