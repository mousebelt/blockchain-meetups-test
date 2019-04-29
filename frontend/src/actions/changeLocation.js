import * as types from '../constants/types.js';

export default function changeLocation(location) {
	return { type: types.CHANGE_LOCATION, payload: location };
}
