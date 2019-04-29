export const BASE_URL = 'http://localhost:3011';

export const getEventsEndpoint = (offset = 0, limit = 12) => `${BASE_URL}/events/upcoming/?offset=${offset}&limit${limit}`
export const searchEventsEndpoint = (county, city, offset = 0, limit = 12) => `${BASE_URL}/events/upcoming/city/?country=${county}&city=${city}&offset=${offset}&limit${limit}`

