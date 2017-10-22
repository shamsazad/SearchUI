import axios from 'axios';

export const SEARCH_CITY = 'SEARCH_CITY';

const URL = 'http://localhost:8081/';

export function searchCity(props) {

    const request = axios.post(`${URL}/address/`,props.placeSearch);

    return {
        type: SEARCH_CITY,
        payload: request
    }
}