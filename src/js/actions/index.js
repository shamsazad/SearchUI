import axios from 'axios';

export const SEARCH_CITY = 'SEARCH_CITY';
export const CHANGE_BOUNDS = 'CHANGE_BOUNDS';

const URL = 'http://localhost:8081/yuul/search';

export function searchCity(props) {
    console.log(props);
    const request = axios.get(`${URL}/${props.placeSearch}`);

    return {
        type: SEARCH_CITY,
        payload: request
    }
}

export function changeBounds(props) {
    const request = axios.post(`${URL}/eventTrigger`, props);

    return {
        type: CHANGE_BOUNDS,
        payload: request,
        meta: {
            debounce: {
                time: 300,
                key: CHANGE_BOUNDS
            }
        }
    }
}

export function postAds(props) {
    console.log(props);
    const request = axios.post(`${URL}/postAdd`, props);

    return {
        type: SEARCH_CITY,
        payload: request
    }
}
