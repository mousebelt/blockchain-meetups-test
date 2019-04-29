import { combineReducers } from 'redux';
import EventsReducer from './EventsReducer.js';
import LocationReducer from './LocationReducer.js';

export default combineReducers({
	EventsReducer,
	LocationReducer
});
