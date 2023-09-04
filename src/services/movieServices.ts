/* eslint-disable no-console */
import axios from 'axios';
import {API_TOKEN, BASE_URL} from '../constants';

const headers = {
    Accept: 'application/json',
    Authorization: `Bearer ${API_TOKEN}`,
};

export const getPopularMovies = async () => {
    return await axios
        .get(`${BASE_URL}/trending/movie/day`, {headers})
        .then((res) => res.data)
        .catch((err) => console.log(err));
};

export const getActionMovies = async () => {
    return await axios
        .get(`${BASE_URL}/discover/movie?api_key=${API_TOKEN}&with_genres=28`, {headers})
        .then((res) => res.data)
        .catch((err) => console.log(err));
};

export const getDocumentaryMovies = async () => {
    return await axios
        .get(`${BASE_URL}/discover/movie?api_key=${API_TOKEN}&with_genres=99`, {headers})
        .then((res) => res.data)
        .catch((err) => console.log(err));
};
