import axios from 'axios';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

export const SEARCH_CITY = 'SEARCH_CITY';

const URL = 'http://localhost:8081/';

export function searchCity(props) {

    return geocodeByAddress(props.placeSearch)
        .then(results => {
            return getLatLng(results[0]).then(result => {
                const request = axios.post(`${URL}/`, {
                    coordinates: result,
                    props: props
                });
                return {
                    type: SEARCH_CITY,
                    payload: request
                }
            });
        });
}