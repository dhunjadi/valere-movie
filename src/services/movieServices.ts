/* eslint-disable no-console */
import axios from 'axios';
import {API_TOKEN, BASE_URL} from '../constants';

const headers = {
    Accept: 'application/json',
    Authorization: `Bearer ${API_TOKEN}`,
};

export const getPopularMovies = async () => {
    return await axios
        .get(`${BASE_URL}/movie/upcoming`, {headers})
        .then((res) => res.data)
        .catch((err) => console.log(err));
};
