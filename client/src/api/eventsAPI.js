import { getEventsEndpoint, searchEventsEndpoint } from '../constants/endpoints'
export const getEventsAPI = (offset, limit) => {
    const url = getEventsEndpoint(offset, limit);
    return fetch(url)
}


export const SearchEventsAPI = (county, city, offset, limit) => {
    const url = searchEventsEndpoint(county, city, offset, limit);
    return fetch(url)
}